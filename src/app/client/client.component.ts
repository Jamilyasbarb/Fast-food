import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { ClienteService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cliente: Client;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  onClick(nome: string, endereco: string, cidade: string, uf: string){
    this.cliente = new Client(80,nome,endereco,cidade, uf);
    this.clienteService.onAddCliente(this.cliente);
  }
}
