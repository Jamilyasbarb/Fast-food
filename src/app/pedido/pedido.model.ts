export class Pedido{
    public cliente: any;
    public item: any;
    public status: any;
    public dataHoraPedido: any;
    public dataHoraEntrega: any;

    constructor(cliente: any,item: any){
        this.cliente = cliente;
        this.item = item;
    }
}