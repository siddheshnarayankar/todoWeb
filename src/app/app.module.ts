import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule} from '@angular/http'
import { Http, Response } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ServiceService } from './service.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]),
    RouterModule.forRoot([
      { path: '', redirectTo: 'userlist', pathMatch: 'full' },
      { path: 'userlist', component: UserlistComponent }
    ]),
    RouterModule.forRoot([
      { path: 'userdetails/:id', redirectTo: 'userdetails/:id', pathMatch: 'full' },
      { path: 'userdetails/:id', component: UserDetailsComponent }
      
    ]),
   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
