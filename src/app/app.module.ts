import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import AuthService from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { ErrorRedirectionComponent } from './error-redirection/error-redirection.component';
import AuthGuardService from './services/auth-guard.service';

// For routing creation:
const appRoutes: Routes = [
  {
    path: 'appareils',
    canActivate: [AuthGuardService],
    component: AppareilViewComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: AppareilViewComponent
  }, 
  {
    path: 'appareils/:id',
    canActivate: [AuthGuardService],
    component: SingleAppareilComponent
  },
  {
    path: 'not-found',
    component: ErrorRedirectionComponent
  }, 
  {
    path: '**',
    redirectTo: '/not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    ErrorRedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
