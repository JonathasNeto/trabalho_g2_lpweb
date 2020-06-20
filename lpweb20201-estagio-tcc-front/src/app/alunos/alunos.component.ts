import { ListaAlunoService } from './../lista-aluno.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = [];
  nome: String;
  cgu: String;
  aluno: any;

  constructor(private aluno$: ListaAlunoService,
    private auth$: AuthService) { }

  ngOnInit(): void {
    this.pesquisar();
  }
  pesquisar(){
    this.aluno$.lista().subscribe(lista => this.alunos = lista);

  }
  salvar(){
    this.aluno.nome = this.nome;
    this.aluno.cgu = this.cgu;
    this.aluno$.cadastrar(this.aluno);
  }


}
