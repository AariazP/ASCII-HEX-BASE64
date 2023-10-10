import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public form:FormGroup;

  public hex:string;
  public base64:string;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      text: ['']
    });



  }


  public convert(): void {

    this.hex = this.form.value.text;
    this.base64 = this.form.value.text;

    let hexValue:string = "";

    for (let i = 0; i < this.hex.length; i++) {
      hexValue +=  this.hex.charCodeAt(i).toString(16);
    }

    this.hex = hexValue;
    this.base64 = btoa(this.form.value.text);


  }



}
