import { Component } from '@angular/core';
import { ProyectoComponent } from '../proyecto/proyecto.component';
import { Title } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoComponent, NgFor],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos:any[]= [{"titulo": "MateSpeak", "subtitulo":"Aplicacion para class room", "imagen":`../assets/img/`, "nameimagen":"MateSpeak.jpg", "contenido": "Comienza tu viaje lingüístico con Mate Speak, se parte de nuestra comunidad global y experimenta una forma emocionante y efectiva de aprender un nuevo idioma." },
  {"titulo": "Surshop", "subtitulo":"Ecommerce para multiples productos", "imagen":`../assets/img/`, "nameimagen":"surshop.jpg", "contenido": "Comienza tu viaje lingüístico con Mate Speak, se parte de nuestra comunidad global y experimenta una forma emocionante y efectiva de aprender un nuevo idioma." },
  {"titulo": "HungryTime", "subtitulo":"Aplicacion para comida Rapida", "imagen":`../assets/img/`, "nameimagen":"HungryTime.jpg", "contenido": "Comienza tu viaje lingüístico con Mate Speak, se parte de nuestra comunidad global y experimenta una forma emocionante y efectiva de aprender un nuevo idioma." }
  ]
}
