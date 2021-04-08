import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historial;
  }
  buscar(query: string) {
    this.gifsService.buscarGifs(query);
  }

  constructor(private gifsService: GifsService) {}
}
