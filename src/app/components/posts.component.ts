import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  posts: Post[];

  constructor(

    private postService: PostService

  ) {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
