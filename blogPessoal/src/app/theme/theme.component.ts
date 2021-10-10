import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = new Theme()
  arrayTheme: Theme[]

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit(){
    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.findAllTheme()
  }

  findAllTheme() {
    this.themeService.getAllTheme().subscribe((resp: Theme[]) =>{
      this.arrayTheme = resp
    })
  }

  create(){
     this.themeService.postTheme(this.theme).subscribe((resp: Theme)=> {
       this.theme = resp
       alert('Tema cadastrado com sucesso!')
       this.findAllTheme()
       this.theme = new Theme()
     })
  }

}
