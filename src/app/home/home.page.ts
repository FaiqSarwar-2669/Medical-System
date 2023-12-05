import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textfield: any = {
    'email': '',
    'password': '',
  }
  hide: boolean = true
  constructor(private router: Router, private service: Service) { }

  signup() {
    this.router.navigate(['/tab2'])
  }
  showPassword() {
    this.hide = !this.hide;
  }
  signin() {
    if (this.textfield.email.trim() === '') {
      this.service.presentToast('Enter Email', 'danger')
    } else if (this.textfield.password.trim() === '') {
      this.service.presentToast('Enter password', 'danger')
    } else {
      this.service.loginUser(this.textfield).then((res: any) => {
        console.log("1")
        if (res) {
          console.log("2")
          if (res.message) {
            console.log("3")
            console.log(res.message);
            this.service.presentToast(res.message, 'success');
          }
        }
      }).catch((err: any) => {
        console.log(err)
      })
    }

  }
}
