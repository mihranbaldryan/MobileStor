import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() card;

  constructor(protected router:Router){
    
    }
          
    // ProductPage(){
   
    //   this.router.navigate(['ProductPage']);
    //    }

  

  mobile = [

    {
      img: '../../assets/images/mobile/s9.png',
      company: 'Samsung',
      model: 'Galaxy S9',
      price: '$ 1199',
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
    },
    
    {
      img: '../../assets/images/mobile/iphonex.jpg',
      company: 'Apple',
      model: 'Iphone X 256GB',
      price: '$ 1599',
      version: 'Iphone X',
      year: '2017',
      os: 'iOS',
      screenType: 'Super Retina HD display, all-screen OLED Multi-Touch, HDR display',
      screenResolution: '2436x1125',
      screenSize: '5.8 inch',
      frontCamera: '7 MP',
      mainCamera: '12 MP + 12 MP',
      numberOfProcessorCores: '6',
      cpu: 'A11 Bionic Embedded M11 motion coprocessor',
      ram: '3 GB',
      memoryCardSlot: 'No',
      memory: '256 GB',
      standartNetwork: 'GSM 850 / 900 / 1800 / 1900',
      accessToTheInternet: 'GPRS, EDGE',
      networkRangeLte4G: 'LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)',
      gps: 'Yes',
      bluetooth: 'Yes',
      wifiNetwork: 'Yes',
      network3G: 'Yes',
      nfc: 'Yes',
      networkLte4G: 'Yes',
      charingConnectorType: 'Lightning connector',
      talkTime: 'Up to 21 h (3G)',
      batteryType: 'Li-Ion',
      batteryCapacity: '2716 mAh',
      weight: '174 g',
      thickness: '7.7 mm',
      height: '143.6 mm',
      width: '70.9 mm',
      audio: 'AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)',
      simCardQuantity: '1 SIM',
    },
    
    {
      img: '../../assets/images/mobile/nokia8.jpg',
      company: 'Nokia',
      model: '8 Sirocco',
      price: '$ 899',
      version: '8 Sirocca',
      year: '2018',
      os: 'Android',
      screenType: 'QHD pOLED',
      screenResolution: '2560x1440',
      screenSize: '5.5 inch',
      frontCamera: '5 MP',
      mainCamera: '12 MP',
      numberOfProcessorCores: 'Octa core (4 x 2.36 GHz Kryo + 4 x 1.9 GHz Kryo)',
      cpu: 'Qualcomm® Snapdragon™',
      ram: '6 GB',
      memoryCardSlot: 'No',
      memory: '128 GB',
      standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
      // accessToTheInternet: 'GPRS, EDGE',
      networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 20(800), 28(700), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500)',
      gps: 'Yes',
      bluetooth: 'Yes',
      wifiNetwork: 'Yes',
      network3G: 'Yes',
      nfc: 'Yes',
      networkLte4G: 'Yes',
      charingConnectorType: 'USB Type-C',
      talkTime: 'Up to 22 h (3G)',
      batteryType: 'Li-Ion',
      batteryCapacity: '3260 mAh',
      weight: '177 g',
      thickness: '7.5 mm',
      height: '140.93 mm',
      width: '72.97 mm',
      //audio: 'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
      //simCardQuantity: '2 SIM',
    },
    
    {
      img: '../../assets/images/mobile/sonyxz.jpeg',
      company: 'Sony',
      model: 'Xperia XZ dual',
      price: '$ 599',
      version: 'Sony F8332',
      year: '2016',
      os: 'Android',
      screenType: 'IPS LCD capacitive touchscreen, 16M colors',
      screenResolution: '1920x1080',
      screenSize: '5.2 inch',
      frontCamera: '13 MP',
      mainCamera: '23 MP',
      // numberOfProcessorCores: '8',
      cpu: 'Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)',
      ram: '3 GB',
      memoryCardSlot: 'Yes',
      memory: '64 GB',
      // standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
      accessToTheInternet: 'GPRS, EDGE',
      networkRangeLte4G: 'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 19(800), 20(800), 26(850), 28(700), 29(700), 32(1500), 38(2600), 39(1900), 40(2300), 41(2500)',
      gps: 'Yes',
      bluetooth: 'Yes',
      wifiNetwork: 'Yes',
      network3G: 'Yes',
      nfc: 'Yes',
      networkLte4G: 'Yes',
      charingConnectorType: 'Type-C 1.0 reversible connector; USB Host',
      talkTime: 'Up to 17 h 30min (3G)',
      batteryType: 'Non-Removalbe Li-Ion',
      batteryCapacity: '2900 mAh',
      weight: '161 g',
      thickness: '8.1 mm',
      height: '146 mm',
      width: '72 mm',
      audio: 'Vibration; MP3, WAV ringtones',
      simCardQuantity: '2 SIM',
    },
    
    {
      img: '../../assets/images/mobile/htcu11.jpg',
      company: 'HTC',
      model: 'U 11',
      price: '$ 899',
      version: 'HTC U11',
      year: '2017',
      os: 'Android',
      screenType: 'Super LCD5 capacitive touchscreen, 16M colors',
      screenResolution: '2960x1440',
      screenSize: '5.5 inch',
      frontCamera: '16 MP',
      mainCamera: '12 MP',
      // numberOfProcessorCores: '8',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      ram: '4 GB',
      memoryCardSlot: 'Yes',
      memory: '64 GB',
      // standartNetwork: 'GSM850, GSM900, DCS1800, PCS1900',
      accessToTheInternet: 'GPRS, EDGE',
      networkRangeLte4G: 'LTE band 1(2100), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 17(700), 20(800), 28(700), 32(1500), 38(2600), 39(1900), 40(2300), 41(2500)',
      gps: 'Yes',
      bluetooth: 'Yes',
      wifiNetwork: 'Yes',
      network3G: 'Yes',
      nfc: 'Yes',
      networkLte4G: 'Yes',
      charingConnectorType: 'Type-C 1.0 reversible connector',
      talkTime: 'Up to 25 h 30 min (3G)',
      batteryType: 'Non-Removalbe Li-Ion',
      batteryCapacity: '3000 mAh',
      weight: '169 g',
      thickness: '7.9 mm',
      height: '153.9 mm',
      width: '75.9 mm',
      audio: 'Vibration; MP3, WAV ringtones',
      simCardQuantity: '2 SIM',
    }
      
  ]
  
tablet = [

{
  img:["../../assets/images/tablet/AppleiPadPro.jpg"],
  company :'Apple',
  model:' iPad Pro 10.5 ',
  price:'$ 899',
  // version :'G960',
  year:'2017',
  os :'iOS 10.3.2, upgradable to iOS 11.2.5',
  screenType :'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
  screenResolution :'2224x1668',
  screenSize:'10.5 inch',
  frontCamera:'7 MP',
  mainCamera: '12 MP',
  // numberOfProcessorCores :'8',
  cpu:'Apple A10X Fusion',
  ram:'4 GB',
  memoryCardSlot :'No',
  memory :'64 GB',
  // standartNetwork :'GSM850, GSM900, DCS1800, PCS1900',
  // accessToTheInternet:'GPRS, EDGE',
  // networkRangeLte4G:'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
  gps:'Yes',
  bluetooth : 'Yes',
  wifiNetwork: 'Yes',
  network3G:'No',
  nfc:'No',
  networkLte4G :'No',
  charingConnectorType:'3.0, proprietary reversible connector; magnetic connector',
  talkTime:'Up to 10 h (multimedia)',
  batteryType:'Non-removable Li-Ion',
  batteryCapacity:'8134 mAh',
  weight :'469 g',
  thickness: '6.1 mm (0.24 in)',
  height:'250.6 mm (9.87 in)',
  width:'174.1 mm (6.85 in)',
  // audio:'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
  // simCardQuantity: '2 SIM',
},



{
  img:["../../assets/images/tablet/SamsungGalaxyTabS2.jpg"],
  company :'Samsung',
  model:'Galaxy Tab S2 8.0 T719 ',
  price:'$ 399',
  // version :'G960',
  year:'2015',
  os :'Android 6.0.1',
  screenType :'Super AMOLED capacitive touchscreen, 16M colors',
  creenResolution :'2048x1536',
  screenSize:'8.0 inch',
  frontCamera:'2.1 megapixel',
  mainCamera: '8 MP',
  // numberOfProcessorCores :'8',
  cpu:'Quad-core 1.8 GHz Cortex-A72 & quad-core 1.4 GHz Cortex-A53',
  ram:'3 GB',
  memoryCardSlot :'Yes',
  // memory :'64 GB',
  standartNetwork :'GSM 850 / 900 / 1800 / 1900',
  accessToTheInternet:'GPRS, EDGE',
  // networkRangeLte4G:'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
  gps:'Yes',
  bluetooth : 'Yes',
  wifiNetwork: 'Yes',
  network3G:'Yes',
  // nfc:'Yes',
  // networkLte4G :'Yes',
  charingConnectorType:'microUSB v2.0',
  talkTime:'Up to 27 h (3G)',
  batteryType:'Li-Ion',
  batteryCapacity:'4000 mAh',
  weight :'265 g (9.59 oz)',
  thickness: '5.6 mm (0.22 in)',
  height:'198.6 mm (7.82 in)',
  width:'134.8 mm ( 5.31 in)',
  audio:'Vibration; MP3, WAV ringtones',
  // simCardQuantity: '2 SIM',
},


{
  img:["../../assets/images/tablet/LenovoTab7.jpg"],
  company :'Lenovo',
  model:' Tab 7 (TB-7504X) ',
  price:'$ 149',
  // version :'G960',
  year:'2017',
  os :'Android 7.0',
  screenType :'IPS LCD Multiouch',
  screenResolution :'1280x720',
  screenSize:'7.0 inch',
  frontCamera:'2 MP',
  mainCamera: '5 MP',
  numberOfProcessorCores :'4',
  cpu:'MediaTek MT8735B, 1.3GHZ',
  ram:'1 GB',
  memoryCardSlot :'Yes',
  memory :'16 GB',
  // standartNetwork :'GSM850, GSM900, DCS1800, PCS1900',
  // accessToTheInternet:'GPRS, EDGE',
  // networkRangeLte4G:'B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B12(700), B13(700), B17(700), B18(800), B19(800), B20(800), B25(1900), B26(850), B28(700), B32(1500), B66(AWS-3)',
  gps:'Yes',
  bluetooth : 'Yes',
  wifiNetwork: 'Yes',
  network3G:'Yes',
  nfc:'Yes',
  networkLte4G :'Yes',
  // charingConnectorType:'USB Type-C',
  // talkTime:'Up to 22 h (3G)',
  batteryType:'Li-Po',
  batteryCapacity:'3500 mAh',
  weight :'260 g',
  thickness: '8.4 mm',
  height:'193 mm',
  width:'98.7 mm',
  // audio:'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
  // simCardQuantity: '2 SIM',
},




{
  img:["../../assets/images/tablet/AppleiPadPro12.9.jpg"],
  company :'Apple',
  model:' iPad Pro 12.9  ',
  price:'$ 1099',
  // version :'G960',
  year:'2017',
  os :'iOS 10.3.2, upgradable to iOS 11.2',
  screenType :'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
  screenResolution :'2732x2048',
  screenSize:'12.9 inch',
  frontCamera:'7 MP',
  mainCamera: '12 MP',
  // numberOfProcessorCores :'8',
  cpu:'Apple A10X Fusion',
  ram:'4 GB',
  memoryCardSlot :'No',
  memory :'64 GB',
  standartNetwork :'GSM 850 / 900 / 1800 / 1900',
  accessToTheInternet:'GPRS, EDGE',
  networkRangeLte4G:'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 27(800), 28(700), 29(700), 30(2300), 38(2600), 39(1900), 40(2300), 41(2500)',
  gps:'Yes',
  bluetooth : 'Yes',
  wifiNetwork: 'Yes',
  network3G:'Yes',
  nfc:'Yes',
  networkLte4G :'Yes',
  charingConnectorType:'3.0, proprietary reversible connector; magnetic connector',
  talkTime:'Up to 10 h (multimedia)',
  batteryType:'Built‐in 41‐watt‐hour rechargeable lithium‑polymer battery',
  batteryCapacity:'10 891 mAh',
  weight :'692 g',
  thickness: '6.9 mm (0.27 in)',
  height:'305.7 mm (12.04 in)',
  width:'220.6 mm (8.69 in)',
  // audio:'MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE',
  // simCardQuantity: '2 SIM',
},

{
  img:["../../assets/images/tablet/SamsungGalaxyTabS3.jpg"],
  company :'Samsung',
  model:'Galaxy Tab S3 9.7 T825 ',
  price:'$ 799',
  // version :'G960',
  year:'2017',
  os :'Android 7.0',
  screenType :'Super AMOLED capacitive touchscreen, 16M colors',
  screenResolution :'2048x1536',
  screenSize:'9.7 inch',
  frontCamera:'5 MP',
  mainCamera: '13 MP',
  // numberOfProcessorCores :'8',
  cpu:'Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo)',
  ram:'4 GB',
  memoryCardSlot :'Yes',
  memory :'32 GB',
  standartNetwork :'GSM 850 / 900 / 1800 / 1900',
  ccessToTheInternet:'GPRS, EDGE',
  networkRangeLte4G:'LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 17(700), 20(800), 28(700), 40(2300)',
  gps:'Yes',
  bluetooth : 'Yes',
  wifiNetwork: 'Yes',
  network3G:'Yes',
  // nfc:'Yes',
  networkLte4G :'Yes',
  charingConnectorType:'Type-C 1.0',
  talkTime:'Up to 27 h (3G)',
  batteryType:'Non-removable',
  batteryCapacity:'6000 mAh',
  weight :'434 g (15.13 oz)',
  thickness: '6 mm (0.24 in)',
  height:'237.3 mm (9.34 in)',
  width:'169 mm (6.65 in)',
  audio:'Vibration; MP3, WAV ringtones',
  // simCardQuantity: '2 SIM',
  },

]


  accessories = [

    {
      img: '../../assets/images/accessories/appleairpod.jpeg',
      company: 'Apple',
      model: 'EarPods lightning',
      price: '$ 45',
    },
    
    {
      img: '../../assets/images/accessories/bearts.png',
      company: 'Beats',
      model: 'EP On-Ear',
      price: '$ 119',
    },

    {
      img: '../../assets/images/accessories/applekoch.jpg',
      company: 'Apple',
      model: 'USB power adapter 5W',
      price: '$ 25',
    },

    {
      img: '../../assets/images/accessories/cabelusb.jpg',
      company: 'Havit',
      model: 'HV-CB534 Micro USB',
      price: '$ 10',
    },

    {
      img: '../../assets/images/accessories/pill.jpg',
      company: 'Beeats',
      model: 'Loudspeaker Beats Pill+',
      price: '$ 299',
    }
  
  ]

  product = [
    this.mobile,
    this.tablet,
    this.accessories
  ]


  ngOnInit() {
  //   for (let all in this.product) {
  //     console.log(all); 
  //   }
  //   for (let m in this.mobile) {
  //     console.log(m); 
  //   }
  //   for (let t in this.tablet) {
  //     console.log(t); 
  //   }
  //   for (let a in this.accessories) {
  //     console.log(a); 
  //   }
  }

  moreEvent(event) {
    return this.card;
  }


}
