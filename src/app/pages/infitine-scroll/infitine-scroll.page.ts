import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infitine-scroll',
  templateUrl: './infitine-scroll.page.html',
  styleUrls: ['./infitine-scroll.page.scss'],
})
export class InfitineScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }


  loadData(event){
    console.log('Cargando siguientes...');

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        console.log('terminamso');
        this.infiniteScroll.disabled = true;
      }

      const nuevoArreglo = Array(20);
      this.data.push(...nuevoArreglo);
      event.target.complete(); // Termina con la carga
    }, 1000);
  }
}
