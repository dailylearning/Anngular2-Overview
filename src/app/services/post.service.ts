import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  apiRoot: string;
  apiPostsUrl: string;
  constructor(
    private http: Http
  ) {
    this.apiRoot = 'https://jsonplaceholder.typicode.com';
    console.log('Post service initializing...');
    this.apiPostsUrl = this.apiRoot + '/posts';
  }

  getPosts() {
    return this.http.get(this.apiPostsUrl).map(
      res => res.json();
    );
  }
}
