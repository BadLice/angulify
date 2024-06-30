import { Component, inject } from '@angular/core';
import { PlaylistsService } from '../../services/playlists/playlists.service';
import { Playlist } from '../../interfaces/Playlist';
import { User } from '../../interfaces/User';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent {
  usersService = inject(UsersService);
  playlistsService = inject(PlaylistsService);
  playlists: Playlist[] | undefined = undefined;
  me: User | undefined;

  async ngOnInit() {
    this.usersService.$me.subscribe((me) => (this.me = me));
    this.playlistsService.getMyPlaylists().subscribe((playlists) => {
      this.playlists = playlists.items;
    });
  }
}
