import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../modelos/carro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              private loading: LoadingController) {

    let load = this.loading.create({
      content: 'Carregando...'
    });

    load.present();

    this.http.get<Carro[]>('http://localhost:8080/api/carro/listatodos')
                .subscribe(
                  (carros) => {
                    this.carros = carros;

                    load.dismiss();
                  }
                );
  }

}
