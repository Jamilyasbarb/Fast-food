import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemService } from './item/item.service';
import { ClienteService } from './client/client.service';
import { PedidoService } from './pedido/pedido.service';
import { ItemComponent } from './item/item.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoItemComponent } from './produto/produto-list/produto-item/produto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    PedidoComponent,
    ItemComponent,
    ProdutoComponent,
    ProdutoListComponent,
    ProdutoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemService, ClienteService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
