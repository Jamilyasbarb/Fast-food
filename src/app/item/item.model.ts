import { Produto } from "../produto/produto.model";

export class Item{
    public produto: Produto;
    public quantidade: number;
    public valor_unitario: number;
    public obs: string;
    
    constructor(produto:Produto, quantidade: number, valor_unitario: number, obs: string){
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor_unitario = valor_unitario;
        this.obs = obs;
    }
}