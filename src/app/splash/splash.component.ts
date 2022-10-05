import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private modalComtroller: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.modalComtroller.dismiss();
    }, 2000);
  }

}
