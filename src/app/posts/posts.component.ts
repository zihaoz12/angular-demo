import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from  '../models/Post';
import { Observable, interval, Subscription } from 'rxjs';
import { Comment } from '../models/Comment';

import { DemoModalComponent } from '../demo-modal/demo-modal.component'
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  

  posts: Post[];
  currentDate = new Date();
  timer$: Observable<number>;
  timerSubscription: Subscription;
  textLength:number = 20;
  toggle:boolean = true;
  showDetail:boolean = true;
  isExpand: boolean = true;

  comments: Comment[];

  demoModalRef: MatDialogRef<DemoModalComponent>

  showPosts:boolean = false;

  constructor(
    private postService: PostsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // this.postService.getPosts().subscribe( (posts:Post[]) => {
    //   this.posts = posts
    // });

    // this.timer$ = interval(500);
    // this.timerSubscription = this.timer$.subscribe();
}

  renderPosts():void{
    console.log("get Posts!!");
    this.postService.getPosts().subscribe( (posts:Post[])=> {
      this.posts = posts
    })
    this.showPosts = true;
  }

  clearPosts(){
    console.log('Clear')
    this.showPosts = false;
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

  readMore(){
    console.log('read more');
    this.showDetail = !this.showDetail;
  }

  get format(){
    return this.toggle ? "shortDate" : "fullDate";
  }

  get collaspeText(){
    return this.showDetail ? this.textLength : 10000;
  }


  toggleFormat(){
    console.log("toggle format")
    this.toggle = !this.toggle
  }

  isExpandToggle(){
    this.isExpand = !this.isExpand
  }

  openModal(postId) {
    this.postService.getCommentsByPostId(postId).subscribe((comments:Comment[]) => {
      this.comments = comments;
      this.demoModalRef = this.dialog.open(DemoModalComponent,{
        data:{
          comments: this.comments
        }
      });
    }) 
    console.log("Open modal");
    
  }

  ngOnDestroy(){
    // const temp = this.timer$.subscribe();
    // temp.unsubscribe();
    // this.timerSubscription.unsubscribe();
  }
}
