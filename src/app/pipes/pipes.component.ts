import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent{
  title1:string="Hello, Good Morning";  //for string interpolation
  name="";      //used for two-way binding and uppercase and lowercase pipes
  marks:any="";   //used for two-way binding and percent pipe
  date=new Date(); //for date pipe
  person=[        //for json pipe
    {
      "id":1,
      "Name":"Kushwanth"
    },
    {
      "id":2,
      "Name":"Vignesh"
    }
  ]
  money=60000;      //for currency pipe
  words:string="Blaze Automation"   //for slice pipe
}
