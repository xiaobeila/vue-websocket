<template>
  <div id="login">
    <ul class="login">
      <li><input type="text" name="userName" id="userName" placeholder="请输入用户名" required autofocus v-model="userName" @keyup.13="doLogin" /></li>
      <li>
        <a href="javascript:void(0);" @click="doLogin" class="login-btn">登录</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'

import io from 'socket.io-client'
import common from '../../utils/common'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      me: ({ users }) => users.me,
      online: ({ users }) => users.online,
      socket: ({ base }) => base.socket
    })
  },
  methods: {
    ...mapMutations({
      login: types.LOGIN,
      genUid: types.GEN_UID,
      setSocket: types.SET_SOCKET
    }),
    doLogin () {
      const _self = this
      if (!this.userName) {
        console.log('请输入用户名')
        return
      }

      // TODO:ajax获取登录数据
      let user = {
        userId: common.genUid(),
        userName: _self.userName
      }

      // 连接websocket后端服务器
      _self.setSocket(io('ws://127.0.0.1:3000'))

      if (_self.socket) {
        // 告诉服务器端有用户登录
        _self.socket.emit('login', user)

        // 贮存登录用户的信息
        _self.login(user)
      }

      // 进入首页
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>
<style scoped>
ul,
li {
  list-style: none;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  width: 400px;
  margin-left: -200px;
  margin-top: -150px;
  padding: 50px 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #ccc, -1px -1px 2px #ccc;
  background-color: #ffffff;
}

input[type="text"] {
  border: 1px solid #cccccc;
  line-height: 50px;
  width: 100%;
  text-align: center;
}

.login-btn {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
  background-color: dodgerblue;
  color: #ffffff;
  line-height: 50px;
  text-decoration: none;
}
</style>
