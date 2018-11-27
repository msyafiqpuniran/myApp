import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ActionSheetController } from 'ionic-angular'
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  //}

  //constructor(public actionSheetCtrl: ActionSheetController) {}
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController
    ) { }

  //constructor(public navCtrl: NavController) {
 /* presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   }); */

   showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
 }

 showAlert() {
  const alert = this.alertCtrl.create({
    title: 'New Friend!',
    subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    buttons: ['OK']
  });
  alert.present();
}


}
