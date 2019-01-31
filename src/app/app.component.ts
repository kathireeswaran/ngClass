import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>You will never walk alone {{name}}</h1>
  <p [ngClass]="{classone:cone, classtwo:ctwo}">Change Color</p>
  <button (click) = "changeData()">Click me</button>
  `,
  styles:[`.classone{color:red} .classtwo{background-color:green}`]
})
export class AppComponent  { name = 'Welcome Angular 2';
cone:boolean=true;
ctwo:boolean=false;
changeData():void
{
this.cone=!this.cone;
this.ctwo=!this.ctwo;
} }
 