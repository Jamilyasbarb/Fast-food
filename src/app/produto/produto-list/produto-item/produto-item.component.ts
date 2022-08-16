import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.css']
})
export class ProdutoItemComponent implements OnInit {

  @Input() produto: Produto;
  
  constructor(private menuService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit(): void {}

  onAddCarrinho(){
    this.menuService.onAddedCar(this.produto);
  }

}
