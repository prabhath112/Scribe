import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
firstName :string="Prabhath ";
lastName :string="Kumar";
phoneNumber :number=1234567890;
bo:boolean=true;
logo:string="https://angular.io/assets/images/logos/angular/angular.svg";
google:string="https://google.com"
disabledBtn: boolean=false;
buttonActive(inp : boolean){
  this.disabledBtn=inp;
  inp=inp?true:false;
  alert("Button is disabled");
}
}
