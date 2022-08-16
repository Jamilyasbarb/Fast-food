import { Component } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  itens: Item[];
  flag: boolean;

  constructor(private itemService: ItemService) {
    this.itens = this.itemService.getItem();
    this.flag = this.itemService.flag;
    console.log('constructor!')
   }


  onAdd(i: number){
    this.itemService.onAumentaQuantidade(i);
  }
  onRemove(i: number){
    this.itemService.onDiminuiQuantidade(i);
    if(this.itens[i].quantidade === 0){
      this.itens.splice(i);
      if(this.itens.length === 0){
        this.flag = false;
      }
    }
  }
  // onAdd(item: Item){
  //   this.itemService.onAumentaQuantidade(item);
  // }
  
  // onRemove(item: Item){
  //   this.itemService.onDiminuiQuantidade(item);
  //   const itemSelecionado = this.itens.indexOf(item);
  //   if(this.itens[itemSelecionado].quantidade === 0){
  //     this.itens.splice(itemSelecionado);
  //     if(this.itens.length === 0){
  //       this.flag = false;
  //     }
  //   }
  // }
}

