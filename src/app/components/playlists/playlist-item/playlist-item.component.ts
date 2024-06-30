import { Component, inject, Input } from '@angular/core';
import { Playlist } from '../../../interfaces/Playlist';
import { User } from '../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css'],
})
export class PlaylistItemComponent {
  @Input() playlist!: Playlist;
  @Input() me: User | undefined;
  router = inject(Router);

  goToPlaylistEdit() {
    return this.router.navigate(['/playlist', this.playlist.id]);
  }
}
