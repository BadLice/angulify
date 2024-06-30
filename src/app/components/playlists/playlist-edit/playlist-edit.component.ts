import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from '../../../services/playlists/playlists.service';
import { Playlist } from '../../../interfaces/Playlist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css'],
})
export class PlaylistEditComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  playlistsService = inject(PlaylistsService);
  playlist: Playlist | undefined = undefined;
  playlistForm: FormGroup | undefined;
  id: string;
  success$ = new Subject<boolean>();
  showSuccessMessage: boolean | undefined;

  constructor() {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.playlistsService.getPlaylistById(this.id).subscribe((playlist) => {
      this.playlist = playlist;
      this.playlistForm = new FormGroup({
        name: new FormControl(playlist.name, [Validators.required]),
        description: new FormControl(playlist.description),
        public: new FormControl(playlist.public),
      });
    });

    this.success$.subscribe((success) => {
      this.showSuccessMessage = success;
      setTimeout(() => {
        this.showSuccessMessage = undefined;
      }, 1000);
    });
  }

  getImageUrl() {
    return (
      this.playlist?.images.sort(({ height: a }, { height: b }) => b - a)?.[0]
        ?.url ?? ''
    );
  }

  onSubmit() {
    this.playlistsService
      .editPlaylistDetails(this.id, this.playlistForm?.value)
      .subscribe((response) => {
        // we have a success when response is null
        this.success$.next(!response);
      });
  }
}
