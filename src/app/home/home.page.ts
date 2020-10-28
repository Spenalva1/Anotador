import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form = new FormArray([]);
  formIsValid = false;
  quantity = 2;


  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.updateForm();
  }

  get playersList(){
    return this.form.get('players') as FormArray;
  }

  onChangeQuantity(playersQuantity: number){
    this.quantity = playersQuantity;
    this.updateForm();
  }

  updateForm(){
    while (+this.quantity !== this.form.controls.length) {
      if (this.quantity < this.form.controls.length) {
        this.form.controls.pop();
      } else if (this.quantity > this.form.controls.length) {
        this.form.controls.push(this.fb.control('', {validators: Validators.required}));
      }
    }
    this.validateForm();
  }

  validateForm() {
    this.formIsValid = this.form.controls.map(control => control.value).filter(value => value.length <= 0 ).length === 0;
  }

  onPlay(){

    const data = {players: []};
    this.form.controls.forEach(input => {
      data.players.push(input.value);
    });
    this.router.navigateByUrl('/scorer/' + JSON.stringify(data));
  }



}
