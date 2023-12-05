import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Service } from '../service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  form: any = {
    'fullname': '',
    'nickname': '',
    'dateofbirth': '',
    'email': '',
    'gender': '',
    'password': '',
    'confirmpassword': '',
    'image': '',
  }
  frontimage: any
  constructor(private services: Service) { }

  ngOnInit() {
  }
  signup() {
    if (this.form.fullname.trim() === '') {
      this.services.presentToast('Enter Full Name', 'danger')
    } else if (this.form.nickname.trim() === '') {
      this.services.presentToast('Enter Nick Name', 'danger')
    } else if (this.form.dateofbirth.trim() === '') {
      this.services.presentToast('Enter date of birth', 'danger')
    } else if (this.form.email.trim() === '') {
      this.services.presentToast('Enter Email', 'danger')
    } else if (this.form.gender.trim() === '') {
      this.services.presentToast('Enter gender', 'danger')
    } else if (this.form.password.trim() === '') {
      this.services.presentToast('Enter Password', 'danger')
    } else if (this.form.confirmpassword.trim() === '') {
      this.services.presentToast('Enter confirm password', 'danger')
    } else if (this.form.password.trim() != this.form.confirmpassword.trim()) {
      this.services.presentToast('Password not match', 'danger')
    }else if (this.form.password.trim() === this.form.confirmpassword.trim()) {
      this.services.registerUser(this.form).then((res:any)=>{
        console.log(res)
      }).catch((err:any)=>{
        console.log(err)
      })
      console.log(this.form)
    }
  }
  open = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });
    this.frontimage = image.webPath
    this.form.image = await this.convertImageToFile(this.frontimage)
  }
  async convertImageToFile(imagePath: string) {
    const response = await fetch(imagePath);
    const blob = await response.blob();

    const fileName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  }
}
