import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textfield: any={
    'email':'',
    'password':'',
  }
  hide:boolean=true
  constructor(private router: Router,private service:Service ) {}

signup(){
  this.router.navigate(['/tab2'])
}
showPassword(){
  this.hide = !this.hide;
}
signin(){
  if(this.textfield.email.trim() === ''){
    this.service.presentToast('Enter Email','danger')
  }else if(this.textfield.password.trim() === ''){
    this.service.presentToast('Enter password','danger')
  }else{
    console.log(this.textfield)
  }
  
}
}
