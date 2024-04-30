import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentacionesComponent } from './components/presentaciones/presentaciones.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavitemsComponent } from './components/navitems/navitems.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            NavbarComponent,
            PresentacionesComponent,
            ProyectosComponent,
            NavitemsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
  
}
