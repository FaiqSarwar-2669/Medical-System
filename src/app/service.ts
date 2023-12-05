import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';


@Injectable({ providedIn: "root" })

export class Service{
    constructor(private toastController:ToastController){}



    async presentToast(message: string, type: string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 3000,
          position: 'top',
          color: type, // Color of the toast (e.g., 'primary', 'success', 'warning', 'danger',)
        });
        await toast.present();
      }
}