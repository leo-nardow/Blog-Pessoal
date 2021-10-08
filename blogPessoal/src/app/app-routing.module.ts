import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'home',  component:HomeComponent},
  {path: 'recipe',  component:RecipeComponent},
  {path: 'theme',  component:ThemeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
