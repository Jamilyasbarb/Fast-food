import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../client/client.model";
import { ItemService } from "../item/item.service";
import { Pedido } from "./pedido.model";

@Injectable()
export class PedidoService{
    pedido: Pedido;
    cliente: Client;
    pedidoId;
    putId;
    cont = 0;
    
    constructor(private httpClient: HttpClient,
                private itemService: ItemService){

    }

    addCliente(cliente: Client){
        this.pedido = new Pedido(cliente,this.itemService.getItem())
        console.log(this.pedido);

            this.httpClient.post<any>('pedido', this.pedido).subscribe(
            data => {
                this.pedidoId = data.id;
                this.pedido.status = data.status
                this.pedido.dataHoraPedido = data.data_hora_pedido
                this.pedido.dataHoraEntrega = data.data_hora_Entrega
            }
            
        );
        const mudaStatus = setInterval(() => {
            this.cont++;
            if(this.cont === 5){
                this.httpClient.put<any>('pedido' + '/preparando/' + this.pedidoId, '').subscribe(
                    data => {
                        this.putId = data.id;
                        this.pedido.status = data.status;
                    }
                )
            }if(this.cont === 15){
                this.httpClient.put<any>('pedido' + '/entregue/' + this.pedidoId, '').subscribe(
                    data => {
                        this.putId = data.id;
                        this.pedido.status = data.status;
                    }
                )
                clearInterval(mudaStatus);
            }
            console.log(this.cont);
        }, 1000);
    }

    getPedido(){
        return this.pedido;
    }
}