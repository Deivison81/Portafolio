import { Component } from '@angular/core';
import { ItemsobremiComponent } from '../itemsobremi/itemsobremi.component';

@Component({
  selector: 'app-navitems',
  standalone: true,
  imports: [ItemsobremiComponent],
  templateUrl: './navitems.component.html',
  styleUrl: './navitems.component.css'
})
export class NavitemsComponent {

}
