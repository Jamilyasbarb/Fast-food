import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemComponent } from "./item/item.component";
import { ClientComponent } from "./client/client.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { ProdutoComponent } from "./produto/produto.component";

const appRoutes: Routes = [
    {path: '', component: ProdutoComponent},
    {path: 'cliente', component: ClientComponent},
    {path: 'pedidos', component: PedidoComponent},
    {path: 'carrinho', component: ItemComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}