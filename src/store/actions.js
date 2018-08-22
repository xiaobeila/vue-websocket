/**
 * action 不改变状态，只提交(commit) mutation
 * action 可以包含任意《异步》操作。
 * @param state
 */

import * as types from './mutation-types'

/**
 * 用统一的函数处理并分发mutations。
 * @param type
 * @returns {function({dispatch: *}, ...[*]): *}
 */
/* eslint-disable */
function makeAction (type) {
  return ({ dispatch, state }, ...args) => commit(type, ...args)
}
// base action
export const setSocket = makeAction(types.SET_SOCKET)
// user actions
export const login = makeAction(types.LOGIN)
export const logout = makeAction(types.LOGOUT)
export const updateUsers = makeAction(types.UPDATE_USERS)
export const addUsers = makeAction(types.ADD_USERS)
export const removeUser = makeAction(types.REMOVE_USER)
export const genUid = makeAction(types.GEN_UID)
export const addSendMsg = makeAction(types.ADD_SEND_MSG)
export const addReceiveMsg = makeAction(types.ADD_RECEIVE_MSG)
export const addRemind = makeAction(types.ADD_REMIND)
export const removeRemind = makeAction(types.REMOVE_REMIND)
