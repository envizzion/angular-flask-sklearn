import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8-prediction';
  loggedIn = false;
  userType:string;

  getUser(user:string){
    this.userType=user;
    if(this.userType=="admin" || this.userType=="client"){
      this.loggedIn=true;
    }
  }

  logout(){
    this.loggedIn=false;
  
  }
}
