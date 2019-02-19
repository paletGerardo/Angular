import {Component} from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'no todo lo que brilla es oro',
    autor: 'alguien sobre la tierra'
  }

  peronajes: string[] = ['Federico Nietzsche', 'dario sztajnszrajber', 'Juan Carlos Platon']
}
