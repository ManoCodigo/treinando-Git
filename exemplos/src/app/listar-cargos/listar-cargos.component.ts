import { Cargos } from './interfaces/cargos';
import { Estados } from './interfaces/estados';
import { Component, OnInit } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-cargos',
  templateUrl: './listar-cargos.component.html',
  styleUrls: ['./listar-cargos.component.css'],
})
export class ListarCargosComponent implements OnInit {
  estado!: Observable<Estados[]>;
  cargo!: Cargos[];
  tecno!: any[];
  newsOp!: any[];

  constructor(private drop: DropdownService) {}

  ngOnInit(): void {
    this.newsOp = this.drop.getNews();
    this.tecno = this.drop.getTecno();

    this.drop.getCargos().subscribe((dados) => {
      this.cargo = dados;
    });

    this.estado = this.drop.getEstados();

    // this.drop.getEstados().subscribe((dados) => {
    //   (this.estado = dados), console.log(dados);
    // });
  }
}
