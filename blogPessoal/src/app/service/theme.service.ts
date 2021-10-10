import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTheme():Observable<Theme[]> {
    return this.http.get<Theme[]>('https://blogpessoalleo.herokuapp.com/theme/all', this.token)
  }

  getByIdTheme(idTheme: number): Observable<Theme> {
    return this.http.get<Theme>(`https://blogpessoalleo.herokuapp.com/theme/id/${idTheme}`)
  }

  postTheme(theme: Theme):Observable<Theme>{
    return this.http.post<Theme>('https://blogpessoalleo.herokuapp.com/theme/create', theme, this.token)
  }

  putTheme(theme: Theme):Observable<Theme> {
    return this.http.put<Theme>('https://blogpessoalleo.herokuapp.com/theme/alter',theme,this.token)
  }

  deleteTheme(idTheme: number) {
    return this.http.delete(`https://blogpessoalleo.herokuapp.com/theme/delete/${idTheme}`)
  }
}
