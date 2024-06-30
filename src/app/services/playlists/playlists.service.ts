import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../../interfaces/Playlist';
import { PaginatedResponse } from '../../interfaces/PaginatedResponse';

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
}
