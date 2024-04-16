import { Observable } from "rxjs";

export interface IOnListenSocket {
  call_audio$: TCallObservable;
  call_video$: TCallObservable;
}

export type TCallObservable = Observable<any | undefined>;
