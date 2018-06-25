import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  cards=[1,2,3,4,5,6,7,8,9,10,11,12];

  img = [
    '../../assets/images/mobile/s8.png',

  ]
  company = [
    'samsung',

  ]
  model = [
    'Galaxy S9',

  ]
  price = [
    '$ 1200',

  ]
  version = [
    'G960',

  ]
  year = [
    '2018',

  ]
  os = [
    'Android 8.0',
  ]
  screenType = [
    'Super AMOLED',

  ]
  screenResolution = [
    '2690x1440',

  ]
  screenSize = [
    '5.8 inch',

  ]
  frontCamera = [
    '8 MP',

  ]
  mainCamera = [
    '12 MP',

  ]
  numberOfProcessorCores = [
    '8',

  ]
  cpu = [
    'Octa-Core, 2.7GHz, 1.7Ghz',

  ]
  ram = [
    '4 GB',

  ]
  memoryCardSlot = [
    'Yes',

  ]
  memory = [
    '64 GB',

  ]
  standartNetwork = [
    'GSM850, GSM900, DCS1800, PCS1900',

  ]
  accessToTheInternet = [
    'GPRS, EDGE',
  ]
  networkRangeLte4G = [ 
    'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
    
  ]  
  gps = [
    'Yes',

  ]
  bluetooth = [
    'Yes',

  ]
  wifiNetwork = [
    'Yes',
  
  ]
  network3G = [
    'Yes',
  
  ]
  nfc = [
    'Yes',
  
  ]
  networkLte4G = [
    'Yes',
  
  ]
  chorgingConnectorType = [
    'USB Type-C',
  
  ]
  talkTime = [
    'Up to 22 h (3G)',
  
  ]
  batteryType = [
    'Non-Removable Li-Ion',
  
  ]
  batteryCapacity = [
    '3000 mAh',
  
  ]
  weight = [
    '163 g',
  
  ]
  thickness = [
    '8.5 mm',
  
  ]
  height = [
    '147.7 mm',
  
  ]
  width = [
    '68.7 mm',
  
  ]
  audio = [
    'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',

  ]  
  simCardQuantity = [
    '2 SIM',

  ]




  info = [
    {
      img: this.img,
      compony: this.company,
      model: this.model,
      price: this.price,
    }
  ];
  general = [
    {
      version: this.version,
      year: this.year,
      os: this.os,
    }
  ];
  display = [
    {
      screenType: this.screenType,
      screenResolution: this.screenResolution,
      screenSize: this.screenSize,
    }
  ];
  camera = [
    {
      frontCamera: this.frontCamera,
      mainCamera: this.mainCamera,
    }
  ];
  memoryCpu = [
    {
      numberOfProcessorCores: this.numberOfProcessorCores,
      cpu: this.cpu,
      ram: this.ram,
      memoryCardSlot: this.memoryCardSlot,
      memory: this.memory,
    }
  ];
  network = [
    {
      standartNetwork: this.standartNetwork,
      accessToTheInternet: this.accessToTheInternet,
      networkRangeLte4G: this.networkRangeLte4G,
      gps: this.gps,
      bluetooth: this.bluetooth,
      wifiNetwork: this.wifiNetwork,
      network3G: this.network3G,
      nfc: this.nfc,
      networkLte4G: this.networkLte4G,
    }
  ];
  power = [
    {
      chorgingConnectorType: this.chorgingConnectorType,
      talkTime: this.talkTime,
      batteryType: this.batteryType,
      batteryCapacity: this.batteryCapacity,
    }
  ];
  other = [
    {
      weight: this.weight,
      thickness: this.thickness,
      height: this.height,
      width: this.width,
      audio: this.audio,
      simCardQuantity: this.simCardQuantity,
    }
  ];

  mobiles;tablets = [
    this.info,
    this.general,    
    this.display,
    this.camera,
    this.memoryCpu,
    this.network,
    this.power,
    this.other
  ];

  accessories = [ 
    this.info,
  ]

  products = [
    this.mobiles,
    this.tablets,
    this.accessories
  ];

  
  constructor() { }

  ngOnInit() {}


}
