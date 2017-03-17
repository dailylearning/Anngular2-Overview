import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { PostsComponent }  from './components/posts.component';
import { PostService }  from './services/post.service';

import { appRoutes }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  providers:    [ PostService ],
  declarations: [ AppComponent, UserComponent, AboutComponent, PostsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
