import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  historyGifs: string[] = [];

  constructor(private gifsService: GifsService) { }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchGif(tag: string): void {
    this.gifsService.searchTag(tag);
  }

}
