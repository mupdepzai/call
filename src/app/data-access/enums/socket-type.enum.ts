export const SocketListenEnums = {
  LOGIN: 'login',
  LISTEN_CALL_AUDIO: 'listen-call-audio'
}

export class SocketListenEnumsClass {
  static CALL_AUDIO(user_id: number) {
    return `call-audio/${user_id}`;
  }
}
