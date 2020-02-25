import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from  '../models/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe( (posts:Post[]) => {
      this.posts = posts
    });
  }

  getPostsByUserId(userId):void{
    console.log("Test get by id:",userId);
    this.postService.getPostsByUserId(userId).subscribe((posts:Post[])=>{
      this.posts = posts
    })
  }

  filterById(input):void{
    console.log("Filter Posts")
    this.postService.getPosts().subscribe( (posts:Post[])=>{
      this.posts = posts.filter( post => 
          post.userId == input
      )
    })
  }
}
