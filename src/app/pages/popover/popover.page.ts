import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private poroverCtlr: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(){
    const popover = await this.poroverCtlr.create({
      component: PopinfoComponent
    });

    await popover.present();
  }
}
