import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name
  photo = environment.photo

  post: Post = new Post()
  arrayPost: Post[]

  arrayThemes: Theme[]
  theme: Theme = new Theme()
  idTheme: number
  
  user: User = new User()
  idUser = environment.idUser

  constructor(
    private router: Router,
    private postService: PostService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {

    this.getAllThemes()
    this.getAllPost()
  }

  getAllThemes() {
    this.themeService.getAllTheme().subscribe((resp:Theme[]) => {
      this.arrayThemes = resp
  
    })
  }

  findByIdTheme() {
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: Theme)=> {
      this.theme= resp
    })
  }

  getAllPost() {
    this.postService.getAllPost().subscribe((resp: Post[]) => {
      this.arrayPost = resp
    })
  }

  publish(){
    this.theme.idTheme = this.idTheme
    this.post.theme = this.theme

    this.user.idUser
    this.post.user = this.user

    this.postService.postPost(this.post).subscribe((resp: Post) =>{
      this.post = resp 
      alert('Postagem realizada com sucesso!')
      this.post = new Post()
      this.getAllPost()
    })
  }

  signout() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.name = ''
    environment.photo = ''
    environment.idUser = 0
  }

}
