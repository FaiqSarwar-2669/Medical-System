import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({ providedIn: "root" })

export class Service {
  constructor(private toastController: ToastController, private http: HttpClient) { }



  base_Url = 'http://127.0.0.1:8000/api/';

  headers = new HttpHeaders({
    'Accept': 'application/json',
  });

  registerUser(UserData: any) {
    return new Promise((reject, resolve) => {
      const formdata = new FormData()
      formdata.append('fullname',UserData.fullname)
      formdata.append('nickname',UserData.nickname)
      formdata.append('dob',UserData.dateofbirth)
      formdata.append('email',UserData.email)
      formdata.append('image',UserData.image)
      formdata.append('Gender',UserData.gender)
      formdata.append('password',UserData.confirmpassword)
      this.http.post(this.base_Url + 'signUp/', formdata, { headers: this.headers }).pipe().subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      })
    })
  }

  loginUser(loginData:any){
    return new Promise((reject,resolve)=>{
      this.http.post(this.base_Url+'login/',loginData,{headers:this.headers}).pipe().subscribe({
        next: (res) =>{
          resolve(res)
        },
        error: (err)=>{
          reject(err)
        }
      })
    })
  }

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