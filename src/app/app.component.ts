import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directives'; //for directives
  structural=["ngIf","ngFor","ngSwitch"];
  attribute = ["ngClass","ngStyle","ngModel"];

  isActive=false; //for ngClass nad ngStyle directives
  canSave=true;

  num1:number=10;
  num2:number=20;

  op:string="" //used for two-way binding

  text="Hello, Good Morning. I am currently working as a Intern at Blaze Automation"; //used for summary custom piping
  //used for wishing custom piping
  person={"Name":"Vignesh","gender":"m"};  
  person1={"Name":"Niharika","gender":"f"};
  person2={"Name":"Kushwanth","gender":"m"};
  wish="Good Morning..!";
}
