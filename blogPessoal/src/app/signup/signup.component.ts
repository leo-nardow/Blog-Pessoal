import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User
  passwordConfirm: string
  userType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmPassword(event: any) {
    this.passwordConfirm = event.target.value
  }

  typeUser(event: any) {
    this.userType = event.target.value
  }

  register() {
    this.user.type = this.userType

    if (this.user.password != this.passwordConfirm){
      alert('As senhas estão incorretas')
    } else {
      this.authService.signup(this.user).subscribe((resp: User) =>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      }) 
    }
    
  }

}
