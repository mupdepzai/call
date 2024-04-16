import { io } from "socket.io-client";
import { environment } from "../../enviroment";
import { SocketListenEnums } from "./data-access/enums/socket-type.enum";
import { BehaviorSubject } from "rxjs";
import { IOnListenSocket } from "./data-access/model/call-audio.model";


export let socket = io(environment.DOMAIN_SOCKET);

export class PublicChatSocket {
  static stateConnect(): boolean {
    if (!socket.connected) {
      console.log("mất kết nối socket");
      return false;

    } else return true
  }

  static ListenSocketChat(currentSocketType: typeof SocketListenEnums): IOnListenSocket {
    const $call_audio = new BehaviorSubject<any | undefined>(undefined);
    const $call_video = new BehaviorSubject<any | undefined>(undefined);
    
    socket.on('reconnect', () => {
      console.log('Socket reconnected');
      // Thực hiện các hành động sau khi kết nối lại
    });

    return {
      call_audio$: $call_audio,
      call_video$: $call_video,
    };

  }


}
