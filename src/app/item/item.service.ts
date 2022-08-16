import { Produto } from "../produto/produto.model";
import { Item } from "./item.model";

export class ItemService{
    flag: boolean;
    recebiValorUnit: boolean;
    itens: Item[] = [];
    item: Item;

    onAddMyCar(produto: Produto){
        this.flag = true;
        this.item = new Item(produto, 1 ,produto.valor_unitario,'');
        
        const existeNoitem = this.itens.find((item) => item.produto.id === this.item.produto.id);

        if (!existeNoitem) {
            this.itens.push(this.item);
        }else{
            alert('Este item já existe no item! Você pode aumentar a quantidade na aba Carrinho!');
        }

    }
    
    getItem(){
       return this.itens.slice();
    }

    onAumentaQuantidade(index: number){
        this.itens[index].quantidade++;
        this.itens[index].valor_unitario = this.itens[index].produto.valor_unitario * this.itens[index].quantidade;
        Math.round(this.itens[index].valor_unitario);
    }

    onDiminuiQuantidade(index: number){
        this.itens[index].quantidade--;
        this.itens[index].valor_unitario-= this.itens[index].produto.valor_unitario;
        Math.round(this.itens[index].valor_unitario);

        if(this.itens[index].quantidade === 0){
            this.itens.splice(index);
            if(this.itens.length === 0){
                this.flag = false;
            }
        }
    }
    // onAumentaQuantidade(item: Item){
    //     const itemSelecionado = this.itens.indexOf(item);
    //     this.itens[itemSelecionado].quantidade++;
    //     this.itens[itemSelecionado].valor_unitario = this.valor * this.item.quantidade;
    // }
    // onDiminuiQuantidade(item: Item){
    //     const itemSelecionado = this.itens.indexOf(item);
    //     this.itens[itemSelecionado].quantidade--;
    //     if(this.item.quantidade === 0){
    //         this.itens.splice(itemSelecionado);
    //         if(this.itens.length === 0){
    //             this.flag = false;
    //         }
    //     }
    //     this.itens[itemSelecionado].valor_unitario-= this.valor;
    //     Math.round(this.item.valor_unitario);
    // }
}                                                                     