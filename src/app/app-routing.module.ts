import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'me',
    component: MeComponent,
    title: 'Me',
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    title: 'Playlists',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
