import { Component, OnInit } from '@angular/core';
import { Crypto } from '../crypto'
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cryptos', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(50%)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(50%)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add Currency';
  cryptoType: string = '-- Select --';
  cryptoVol: number = 0.0;
  currencies2 = [
    {symbol: 'BTC', name: 'Bitcoin'},
    {symbol: 'XRP', name: 'Ripple'},
    {symbol: 'ETH', name: 'Etherium'},
    {symbol: 'LTC', name: 'Litecoin'},
    {symbol: 'BCH', name: 'Bitcoin Cash'},
    {symbol: 'BCN', name: 'Bytecoin'},
    {symbol: 'XMR', name: 'Monero'},  
  ]
  currencies = {
    'BTC': 'Bitcoin',
    'XRP': 'Ripple',
    'ETH' : 'Etherium',
    'LTC' : 'Litecoin',
    'BCH' : 'Bitcoin Cash',
    'BCN' : 'Bytecoin',
    'XMR' : 'Monero',  
  }
  
  cryptos = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.cryptos.length;
  }

  addCrypto() {
    var c = new Crypto(this.cryptoType, this.currencies[this.cryptoType], this.cryptoVol);
    this.cryptos.push(c);
    this.cryptoType = '-- Select --';
    this.cryptoVol = 0;
    this.itemCount = this.cryptos.length;
  }

  removeCrypto(i) {
    this.cryptos.splice(i, 1);
    this.itemCount = this.cryptos.length;
  }

}
