import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any;
profile: any;
role:any;
  constructor(private authservice: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe(profile => {
      this.user = profile.user;
      
    },
    err => {
      console.log(err);
      return false;
    });
   
  }
  newlink1(event:any) {
 
    console.log('role1');
    console.log(this.user.role);
    if(this.user.role == 'Admin') {
      this.router.navigate(['/news']);[]
     }   else {
      this.flashMessage.show('You dont have permission to view this link', {cssClass: 'alert-danger', timeout: 3000});
      return true;
    }
 }
  newlink2(event:any) {

    if(this.user.role == 'Admin' || this.user.role == 'Client') {
      this.router.navigate(['/about']);
     } else {
      this.flashMessage.show('You dont have permission to view this link', {cssClass: 'alert-danger', timeout: 3000});
      return true;
    }
}
}
