declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "313331208405-okj0ubsknrcfpp037j024ml11d8j5fnn.apps.googleusercontent.com",
      callback:(resp:any)=>{this.handleLoginin(resp)

      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:"filled blue",
      size:'large',
      shape:'rectangle',
      width:300
    })

    }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }


    handleLoginin(responce:any){
      if (responce){
        const payload = this.decodeToken(responce.credential)

      sessionStorage.setItem("LoggedInuser",JSON.stringify(payload))

      this.router.navigate(["browse"])



      }
  }


}
