import { Routes } from '@angular/router';

import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { PostsComponent }  from './components/posts.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: PostsComponent
  }
];
