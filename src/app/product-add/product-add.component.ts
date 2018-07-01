import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  isEditable = true ;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  years:number[] = [];
  opSystems:string[] = [];
  rams:string[] = ['0.5 GB'];
  memoryList:number[] = [];
  accessInet = new FormControl();
  accessInetList: string[] = [];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
      firstCtrl4: ['', Validators.required],
      firstCtrl5: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required]

    });
  
    for(let i=2018;i>=2001;i--){
      this.years.push(i);
    }
    for(let i=1;i<=16;i++){
      this.rams.push(i + ' GB')
    }
    this.opSystems.push('Androud','iOS','Windows');
    this.memoryList.push(4,8,10,16,32,64,128,256);
    this.accessInetList.push('GPRS','EDGE');
    
  }  
}
