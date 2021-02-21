import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso : number = 100
  altura : number = 100
  imc : number
  message : string
  umPeso : string = "kg"
  umAltura : string = "cm"
  cor: string = "danger"

  ngOnInit(){
    this.alteraCor()
  }

  alteraMedida(){
    switch(this.umPeso)
    {
    case "g":
      this.peso = this.peso*1000;
      break;
    }
    switch(this.umAltura)
    {
    case "m":
      this.altura = this.altura*1000;
      break;
    }
  }


  calculaImc(altura:number, imc:number ){
    altura = this.altura/100

    imc = this.peso/(altura * altura)
    this.imc =  parseFloat(imc.toFixed(2));
    this.alteraCor()
  }

  alteraCor(){
    let severamente = document.getElementById("severamente")
    let abaixo = document.getElementById("abaixo")
    let normal = document.getElementById("normal")
    let excesso = document.getElementById("excesso")
    let ob1 = document.getElementById("ob1")
    let ob2 = document.getElementById("ob2")
    let ob3 = document.getElementById("ob3")

    if(this.imc < 17)
    {
      severamente.style.color = "red"
      abaixo.style.color = "black"
      normal.style.color = "black"
      excesso.style.color = "black"
      ob1.style.color = "black"
      ob2.style.color = "black"
      ob3.style.color = "black"
    }
    else
    {
      if( this.imc >= 17 && this.imc < 18.5)
      {
        severamente.style.color = "black"
        abaixo.style.color = "red"
        normal.style.color = "black"
        excesso.style.color = "black"
        ob1.style.color = "black"
        ob2.style.color = "black"
        ob3.style.color = "black"
      }
      else
      {
        if(this.imc >= 18.5 && this.imc <= 24.9)
        {
          severamente.style.color = "black"
          abaixo.style.color = "black"
          normal.style.color = "red"
          excesso.style.color = "black"
          ob1.style.color = "black"
          ob3.style.color = "black"
          ob3.style.color = "black"
        }
        else
        {
          if(this.imc >= 25 && this.imc <= 29.9)
          {
            severamente.style.color = "black"
            abaixo.style.color = "black"
            normal.style.color = "black"
            excesso.style.color = "red"
            ob1.style.color = "black"
            ob2.style.color = "black"
            ob3.style.color = "black"
          }
          else{
            if(this.imc >= 30 && this.imc <= 35)
            {
              severamente.style.color = "black"
              abaixo.style.color = "black"
              normal.style.color = "black"
              excesso.style.color = "black"
              ob1.style.color = "red"
              ob2.style.color = "black"
              ob3.style.color = "black"
             }
            else{
              if(this.imc > 35 && this.imc <= 39.9)
              {
                severamente.style.color = "black"
                abaixo.style.color = "black"
                normal.style.color = "black"
                excesso.style.color = "black"
                ob1.style.color = "black"
                ob2.style.color = "red"
                ob3.style.color = "black"
              }
              else{
                severamente.style.color = "black"
                abaixo.style.color = "black"
                normal.style.color = "black"
                excesso.style.color = "black"
                ob1.style.color = "black"
                ob2.style.color = "black"
                ob3.style.color = "red"
              }
            }
          }
        }
      }
    }
  }
}
