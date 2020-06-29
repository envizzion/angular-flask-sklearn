import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
submitted=false;
hasAlert=false;
alertMessage:string;
alertType:string;
dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private service: Service ,private spinnerService: NgxSpinnerService) {


   }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      year: ['', Validators.pattern(new RegExp("[0-9 ]{4}"))],
      mileage: ['', Validators.pattern(new RegExp("^\\d+$"))],
      fault: ['', Validators.required],
  });
  }



  close(alert: any) {
    this.hasAlert = false;
  }



  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dataForm.invalid) {
        return;
    }

    let data={
    YEAR :this.dataForm.controls["year"].value,
    MILEAGE:this.dataForm.controls["mileage"].value,
    FAULT:this.dataForm.controls["fault"].value
    
  }  

  // console.log(data)
  this.hasAlert=false;
  this.spinnerService.show();

  this.service.saveData(data).subscribe(
    response => {
      console.log(response);
      this.spinnerService.hide();
      this.hasAlert=true;
      this.alertMessage = "Data Saved Successfully";
      this.alertType="success"
    },
    error => {
      console.log(error);
      this.hasAlert=true;
      this.alertMessage = "Request Failed Please Try Again";
      this.alertType="danger"
      this.spinnerService.hide();

    });

  }

  clearFields(){
    this.hasAlert=false;
    this.submitted=false;
    this.dataForm.reset()

    
    
  }
  get f() { return this.dataForm.controls; }

}


