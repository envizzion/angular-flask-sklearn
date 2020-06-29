import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-view-prediction',
  templateUrl: './view-prediction.component.html',
  styleUrls: ['./view-prediction.component.css']
})
export class ViewPredictionComponent implements OnInit {

  submitted=false;
hasAlert=false;
alertMessage:string;
alertType:string;
dataForm: FormGroup;
predictedFault:string;
gotResult=false;
image:any
  constructor(private formBuilder: FormBuilder,private service: Service,private domSanitizer: DomSanitizer,private spinnerService: NgxSpinnerService) {


   }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      year: ['', Validators.pattern(new RegExp("[0-9 ]{4}"))],
      mileage: ['', Validators.pattern(new RegExp("^\\d+$"))],
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
    year :this.dataForm.controls["year"].value,
    mileage:this.dataForm.controls["mileage"].value,
    
  }  

  // console.log(data)

  this.gotResult=false;
  this.spinnerService.show();
  this.hasAlert=false;
  this.service.getPrediction(data).subscribe(
  
    response => {
      this.gotResult=true;
      this.spinnerService.hide();
      let result = response as Result
      this.predictedFault=result.fault ;
     this.image= this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + result.image);

      // console.log(response);
    },
    error => {
      console.log(error);
      this.hasAlert=true;
      this.alertType="danger";
      this.alertMessage="The Request Failed Please Try Again"
      this.spinnerService.hide();

    });

  }
  clearFields(){
    this.hasAlert=false;
    this.submitted=false;
    this.dataForm.reset()
    this.gotResult=false
    
    
  }
  get f() { return this.dataForm.controls; }

}

interface Result{
  fault:string,
  image:string
}
