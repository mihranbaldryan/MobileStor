import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery'
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isOptional = false;





  company="samsung";
  price=100000;
  model="Mihran";

  addCard={
    price: this.price,
    company: this.company,
    model: this.model,
    
  };


  constructor(private _formBuilder: FormBuilder,private productsService:ProductsService) {}
  
  years:number[] = [];
  opSystems:string[] = [];
  rams:number[] = [0.5];
  memoryList:number[] = [];
  accessInet = new FormControl();
  accessInetList: string[] = [];
  simCards: number[] = [];
  audio = new FormControl();
  audioList:string[] = [];
  companyList:string[] = [];


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
  //    firstCtrl0: ['', Validators.required],
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required],

    });
  
    for(let i=2018;i>=2001;i--){
      this.years.push(i);
    }
    for(let i=1;i<=16;i++){
      this.rams.push(i)
    }
    this.opSystems.push('Android','iOS','Windows');
    this.memoryList.push(4,8,10,16,32,64,128,256);
    this.accessInetList.push('GPRS','EDGE');
    this.simCards.push(1,2,3)
    this.audioList.push('MP3','M4A','3GA','AAC','OGG','OGA','WAV','WMA','AMR','AWB','FLAC','MID','MIDI','XFM','MXMF','IMY','RTTTL','RTX','OTA','DFF','DSF','APE')
    this.companyList.push('Samsung','Apple','Lenovo','Nokia','Motorola','HTC','Microsoft','Sony','Micromax','Fly','LG')
  
  





   
  
  }  







  add(){
 

    this.productsService.product[0].push( {

      img: '../../assets/images/mobile/s9.png',
      company:  this.company,
      model:  this.model,
      price: this.price,
      version: 'Samsung G955',
      year: '2018',
      os: 'Android 8.0',
      screenType: 'Super AMOLED',
      screenResolution: '2960x1440',
      screenSize: '5.8 inch',
      frontCamera: '8 MP',
      mainCamera: '12 MP',
      numberOfProcessorCores: '8',
      cpu: 'Octa-Core, 2.7GHz, 1.7GHz',
      ram: '4 GB',
      memoryCardSlot: 'Yes',
      memory: '64 GB',
      standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
      accessToTheInternet: 'GPRS, EDGE',
      networkRangeLte4G: 'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
      gps: 'Yes',
      bluetooth: 'Yes',
      wifiNetwork: 'Yes',
      network3G: 'Yes',
      nfc: 'Yes',
      networkLte4G: 'Yes',
      charingConnectorType: 'USB Type-C',
      talkTime: 'Up to 22 h (3G)',
      batteryType: 'Non-Removalbe Li-Ion',
      batteryCapacity: '3000 mAh',
      weight: '163 g',
      thickness: '8.5 mm',
      height: '147.7 mm',
      width: '68.7 mm',
      audio: 'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
      simCardQuantity: '2 SIM',
    })
    console.log(this.productsService.product[0]);
    

    }



}
