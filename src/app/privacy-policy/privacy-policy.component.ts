import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent  implements OnInit {

lang:string="ru"

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss(){
    return this.modalCtrl.dismiss();
  }

  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
  optionSelected(ln:any){
    this.lang = ln.target.value
  }

}
