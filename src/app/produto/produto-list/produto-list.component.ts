import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { 
    this.produtoService.getProdutos().subscribe(menus => this.produtos = menus);
  }

}
