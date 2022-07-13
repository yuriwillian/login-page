import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { LoginImageComponent } from './components/login-image/login-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RedesSociaisComponent,
    LoginImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
