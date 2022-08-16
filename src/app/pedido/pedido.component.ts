import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';
import { Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
pedido: Pedido;
itens: Item[];
mudaStatus: number;

  constructor(private pedidoService: PedidoService,
              private itemService: ItemService) { 
    this.pedido = this.pedidoService.getPedido();
    this.itens = this.itemService.getItem();
    const mudando = setInterval(() => {
      this.mudaStatus = this.pedidoService.cont;
      if(this.mudaStatus === 15){
        clearInterval(mudando);
      }
    }, 1000)
  }

  ngOnInit(): void {
  }

}
