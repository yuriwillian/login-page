import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validaLogin(): void {
    const email = "admin@gmail.com"
    const password = "123"
    let emailDigitado = (<HTMLInputElement>document.getElementById("email")).value
    let passwordDigitado = (<HTMLInputElement>document.getElementById("password")).value
    if(emailDigitado === email && passwordDigitado === password){
      window.alert("Bem vindo ao sistema!") //vou configurar o ambiente do artista
    } else {
      window.alert("Email ou senha invalidos!!") //vou fazer uma div aparecer para melhorar o UX
    }
  }

}
