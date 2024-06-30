import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MeComponent } from './components/me/me.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { NgOptimizedImage } from '@angular/common';
import { SessionExpiredInterceptor } from './interceptors/session-expired.interceptor';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistItemComponent } from './components/playlists/playlist-item/playlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserNavComponent,
    MeComponent,
    PlaylistsComponent,
    PlaylistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionExpiredInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
