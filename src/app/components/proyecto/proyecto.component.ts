
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, HttpClientModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {
 @Input() proyecto:any= ""; 
 ngOnInit(){
  console.log(this.proyecto)
 }
}
