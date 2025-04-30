import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Rafaela',
    surName: 'Mav',
    age: 25,
    email: 'efi@aueb',
    address: 'Athens Greece'
  }

  person1: Person = {
    givenName: 'Manolis',
    surName: 'Manolas',
    age: 35,
    email: 'Manos@aueb.gr',
    address: 'Athens Greece'
  }
}
