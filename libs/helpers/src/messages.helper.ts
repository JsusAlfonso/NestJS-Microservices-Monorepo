export const enum ClientMessage {
          // General
  Create               = 'create',
  FindAll              = 'find-all',
  FindOne              = 'find-one',
  Update               = 'update',
  Remove               = 'remove',
}

export const enum SocketMessage {
  LoginUser            = 'loginUser',
  LoginUserResponse    = 'loginUserResponse'
}