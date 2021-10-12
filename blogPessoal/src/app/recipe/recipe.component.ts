import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
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
    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }

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

}
