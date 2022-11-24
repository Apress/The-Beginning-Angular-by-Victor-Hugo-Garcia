import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 posts: any[] = [];
 @ViewChild('addPost') addBtn!: ElementRef;
 @ViewChild('editPost') editBtn!: ElementRef;

 constructor( 
  private postService: PostService,
  private auth: AuthService, 
  private router: Router,
  private commonService: CommonService
 ) { 
  this.commonService.postToEdit_Observable.subscribe(res => {
    this.editBtn.nativeElement.click();
  });
 }

 ngOnInit() {
   this.getPosts();

   this.commonService.postAdded_Observable.subscribe((res) => {
    this.getPosts();
   });
 }

 getPosts() {
   this.postService.getPostsByAuthor().subscribe({
    next: (result: any) => {
      this.posts = result['data'];
      console.log( this.posts );
    }
   });
 }

 resetPost() {
  this.commonService.setPostToAdd();
 }

 logout() {
  this.auth.logout();
  this.router.navigate(['']);
 }

}
