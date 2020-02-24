import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts():Observable<Post[]>{
     return this.http.get<Post[]>(`${this.postsURL}`)         
  }

  getPostsById(userId):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postsURL}?userId=${userId}`)
  }
}
