import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
form:any={
  'fullname':'',
  'nickname':'',
  'dateofbirth':'',
  'email':'',
  'gender':'',
  'password':'',
  'confirmpassword':'',
  'image':'',
}
  constructor() { }

  ngOnInit() {
  }
  signup(){
    if(this.form.fullname.trim() === ''){
      console.log('Enter Full Name')
    }else if(this.form.nickname.trim() === ''){
      console.log('Enter Nick Name')
    }else if(this.form.dateofbirth.trim() === '' ){
      console.log('Enter date of birth')
    }else if(this.form.email.trim() === '' ){
      console.log('Enter email')
    }else if(this.form.gender.trim() === ''){
      console.log('Enter gender')
    }else if(this.form.password.trim() === '' ){
      console.log('Enter Password')
    }else if(this.form.confirmpassword.trim() === ''){
      console.log('Enter confirm password')
    }else if(this.form.password.trim() === this.form.confirmpassword.trim()){
      console.log(this.form)
    }
  }
  async open(){
    console.log('helo')
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt 
      });
    
      var imageUrl = image.webPath;
      console.log(imageUrl)

  }
}
