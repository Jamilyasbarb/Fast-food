import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  aparece:boolean = false;
  numItensCarrinho:number;

  constructor(private itemService: ItemService) {
    console.log('header');
   }

  ngOnInit(): void {
  }
  aparecerIcone(){
    if(this.itemService.getItem().length === 0){
      this.aparece = false;
    }else{
      this.aparece = true;
      this.numItensCarrinho = this.itemService.getItem().length
    }
    return this.aparece;
  }

}
