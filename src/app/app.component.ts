import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { environment } from '../../enviroment';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  socket = io(environment.DOMAIN_SOCKET)

  ngOnInit(): void {
    
  }

}
