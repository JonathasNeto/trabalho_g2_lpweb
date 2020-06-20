import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaAlunoService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  lista()  {
    return this.http.get(environment.API_URL.concat('/alunos/'), this.auth$.httpOptions());
  }
  cadastrar(aluno:any){
    return this.http.post(environment.API_URL.concat(`/alunos/`), aluno, this.auth$.httpOptions());
  }
}