import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ItemService } from "../item/item.service";
import { Produto } from "./produto.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService{
    menu: Produto[] = [];

    private readonly API = 'produto';
     constructor(private httpClient: HttpClient,
                private itemService: ItemService){}

     getProdutos(){
         return this.httpClient.get<Produto[]>(this.API);
        }

     onAddedCar(produto: Produto){
        return this.itemService.onAddMyCar(produto);
     }
}