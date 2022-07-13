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


  mostrarErro(): void {
    this.display = "block"
    let janelaErro = (<HTMLInputElement>document.getElementById("erros"))
    janelaErro.innerHTML = `
      <p>Usuario ou senha <strong>invalidos!</strong><p>
    `
  }

  display: string = "none"

  validaLogin(): void {
    const email = "admin@gmail.com"
    const password = "123"
    let emailDigitado = (<HTMLInputElement>document.getElementById("email")).value
    let passwordDigitado = (<HTMLInputElement>document.getElementById("password")).value
    if(emailDigitado === email && passwordDigitado === password){
      display = "none"
      window.alert("Bem vindo ao sistema!") //vou configurar o ambiente do artista
    } else {
      this.mostrarErro()
    }
  }

}
