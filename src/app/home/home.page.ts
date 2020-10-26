import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  playersForm: FormGroup;
  quantity = 2;

  constructor() {}

  ngOnInit() {
    this.createForm(2);
  }

  onChangeQuantity(){
    this.createForm(this.playersForm.value.quantity);
  }

  createForm(quantity: number){
    this.playersForm = new FormGroup({
      quantity: new FormControl(quantity)
    });
    for (let i = 0; i < quantity; i++){
      this.playersForm.addControl(`player${i}`, new FormControl(null));
    }
    this.quantity = quantity;
  }

  onPlay(){
    console.log(this.playersForm.value);
  }



}
