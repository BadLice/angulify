import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../../interfaces/Playlist';
import { PaginatedResponse } from '../../interfaces/PaginatedResponse';
import { PlaylistDetails } from '../../interfaces/PlaylistDetails';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  http = inject(HttpClient);

  constructor() {}

  getMyPlaylists() {
    return this.http.get<PaginatedResponse<Playlist>>(
      `${environment.baseUrl}/me/playlists`,
    );
  }

  getPlaylistById(id: string) {
    return this.http.get<Playlist>(`${environment.baseUrl}/playlists/${id}`);
  }

  editPlaylistDetails(id: string, details: PlaylistDetails) {
    return this.http.put(`${environment.baseUrl}/playlists/${id}`, details);
  }
}
