import { Component } from '@angular/core';
import { ProyectoComponent } from '../proyecto/proyecto.component';
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
  {"titulo": "Surshop", "subtitulo":"Ecommerce para multiples productos", "imagen":`../assets/img/`, "nameimagen":"surshop.jpg", "contenido": "En el desarrollo de este proyecto creamos una tienda denominada SurShop con el fin de simplificar el proceso de publicación de productos a la venta y a la vez mejorar la interfaz." },
  {"titulo": "HungryTime", "subtitulo":"Aplicacion para comida Rapida", "imagen":`../assets/img/`, "nameimagen":"HungryTime.jpg", "contenido": "En el desarrollo es tienda denominada Hungry Time con el fin de publicar de productos de comida rápida a la venta  en una interfaz limpia, que busca promocionar pizzas y hamburguezas." }
  ]
}
