import { Component, Input } from '@angular/core';
import { Playlist } from '../../../interfaces/Playlist';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css'],
})
export class PlaylistItemComponent {
  @Input() playlist!: Playlist;
  @Input() me: User | undefined;
}
