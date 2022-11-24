import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
 providedIn: 'root'
})
export class CommonService {

  public postAdded_Observable = new Subject();
  public postToEdit_Observable = new Subject();

  postToEdit: Post = new Post('', '');
  public postToAdd_Observable = new Subject();

  constructor() {

  }

  notifyPostAddition(msg: string) {     
    this.postAdded_Observable.next(msg);
  }

  notifyPostEdit(msg: string) {
    this.postToEdit_Observable.next(msg);
  }
  
  setPostToEdit(post: any) {
    this.postToEdit = new Post(post.title, post.text);
    this.postToEdit.setId(post._id);
    this.notifyPostEdit('');
  }

  notifyPostToAdd(msg: string) {
    this.postToAdd_Observable.next(msg);
  }

  setPostToAdd() {
    this.postToEdit = new Post('', '');
    this.postToEdit.setId('');
    this.notifyPostToAdd('');
  }
  
}
