import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { PresentacionComponent } from '../presentacion/presentacion.component';

@Component({
  selector: 'app-presentaciones',
  standalone: true,
  imports: [FotoComponent, PresentacionComponent],
  templateUrl: './presentaciones.component.html',
  styleUrl: './presentaciones.component.css'
})
export class PresentacionesComponent {

}
