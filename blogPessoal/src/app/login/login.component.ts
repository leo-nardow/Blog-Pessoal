import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  login() {
    this.auth.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.photo = this.userLogin.photo
      environment.idUser = this.userLogin.idUser

      // console.log(environment.token)
      // console.log(environment.name)
      // console.log(environment.photo)
      // console.log(environment.idUser)

      this.router.navigate(['/home'])
    }, erro=> {
      if(erro.status == 400) {
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
