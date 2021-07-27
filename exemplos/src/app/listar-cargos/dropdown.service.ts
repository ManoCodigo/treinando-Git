import { Estados } from './interfaces/estados';
import { Cargos } from './interfaces/cargos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstados() {
    return this.http.get<Estados[]>('assets/dados/estados/estadosbr.json');
  }

  getCargos() {
    return this.http.get<Cargos[]>('assets/dados/cargos/cargos.json');

    // return [
    //   { nome: 'Dev', nivel: 'Junior', Desc: 'Dev Junior' },
    //   { nome: 'Dev', nivel: 'Pleno', Desc: 'Dev Pleno' },
    //   { nome: 'Dev', nivel: 'Senior', Desc: 'Dev Senior' },
    // ];
  }

  getTecno() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
    ];
  }

  getNews() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
    ];
  }
}
