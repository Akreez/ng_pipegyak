import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  empList = [
    {id: 1, name:"Erős István", city: "Szeged", salary: 395.8 },
    {id: 2, name:"Tar Ernő", city: "Hatvan", salary: 397.2 },
    {id: 3, name:"Per Katalin", city: "Szeged", salary: 392.5 },
    {id: 4, name:"Cson Áron", city: "Hatvan", salary: 387.9 },
    {id: 5, name:"Lib Aranka", city: "Pécs", salary: 385.6 },
    {id: 6, name:"Fin Árpád", city: "Pécs", salary: 388.7 },
    {id: 7, name:"Lór Péter", city: "Hatvan", salary: 395.6 },
    {id: 8, name:"Sim Elek", city: "Szeged", salary: 393.2 }
  ]

}
