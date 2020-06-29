import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usertype="Select User"
  userName:any;
  password:any;
  hasAlert=false;
  alertMessage:string;
  alertType:string;

  @Output()
  user= new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  login(){
    this.hasAlert = false;
    if(this.usertype=="Select User"){
      this.alertMessage="Please select a user Type"
      this.alertType="warning";
      
    }
   else if(this.usertype=="admin"){
     if(admin.userName!=this.userName || admin.password!=this.password){
      this.alertMessage="Wrong User Name or password"
      this.alertType="danger";
     }
     else{
      this.alertMessage="Successfully logged in as an Admin"
      this.alertType="success";
      this.user.emit("admin")
     }
   }
   else if(this.usertype=="client"){
    if(client.userName!=this.userName || admin.password!=this.password){
     this.alertMessage="Wrong User Name or password"
     this.alertType="danger";
    }
    else{
      this.alertMessage="Successfully logged in as a Client"
      this.alertType="success";
      this.user.emit("client")
    }
  }

  this.hasAlert = true;
  }

  setUser(val:string){
    this.usertype=val;
    
  }

  close(alert: any) {
    this.hasAlert = false;
  }
}

const admin={ userName:"admin",password:"1234"}
const client={ userName:"client",password:"5678"}