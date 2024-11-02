declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "313331208405-okj0ubsknrcfpp037j024ml11d8j5fnn.apps.googleusercontent.com",
      callback:(resp:any)=>{

      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:"filled blue",
      size:'large',
      shape:'rectangle',
      width:300
    })
  }


}
