import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { title: 'Domposer', description: 'Un creador de sitios web con funcionalidades avanzadas para HTML y CSS.' },
    { title: 'Bay.js', description: 'Una librería ligera para componentes web sin necesidad de configuración adicional.' },
    { title: 'Cookiemunch', description: 'Un plugin de cookies personalizable y minimalista.' },
    { title: 'Screen Time Converter', description: 'Convierte el tiempo de actividades en datos visuales interactivos.' },
    { title: 'inline.svg', description: 'Paquete NPM que permite manipular archivos SVG en línea.' },
    { title: 'PCDJ', description: 'Colaboración en diseño de software para DJ profesionales.' }
  ];
}
