import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/Post';
import { map, catchError } from 'rxjs/operators';
import { Comment } from '../models/Comment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts():Observable<Post[]>{
     return this.http.get<Post[]>(`${this.postsURL}`)
     .pipe(map( response => response as Post[])
     , catchError( error => throwError( new Error(error)))
     )
  }

  getPostsByUserId(userId):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postsURL}?userId=${userId}`)
    .pipe(map(res => res as Post[])
    , catchError( err => throwError( new Error(err)))
    )  
  }

  getCommentsByPostId(postId):Observable<Comment[]>{
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .pipe(map (res => res as Comment[])
    , catchError( err => throwError( new Error(err)))
    )
  }
}
