import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
firstName :string ="Prabhath";
lastName :string ="Kumar";
age:number=23;

}
