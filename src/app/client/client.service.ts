import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PedidoService } from "../pedido/pedido.service";
import { Client } from "./client.model";

@Injectable({
    providedIn: "root"
})
export class ClienteService{
    constructor(private httpClient: HttpClient,
                private pedidoService: PedidoService){}

    onAddCliente(cliente: Client){
        console.log('Passei ppor aqui')
        console.log(cliente);
        this.httpClient.post<any>('clientes', cliente).subscribe(
            data => {
                cliente.id = data.id
                console.log(cliente.id)
                this.pedidoService.addCliente(cliente);
            }
        );
    }
}