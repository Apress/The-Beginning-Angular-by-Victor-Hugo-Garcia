import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPostService } from '../../services/add-post.service';
import { Post } from '../../models/post.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
 selector: 'app-add-post',
 templateUrl: './add-post.component.html',
 styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 postForm: FormGroup;
 submitted = false;
 post: Post = new Post('', '');

 @ViewChild('closeBtn') closeBtn!: ElementRef;

 constructor( 
  private formBuilder: FormBuilder,
  private addPostService: AddPostService,
  private commonService: CommonService
 ) {
  this.postForm = this.formBuilder.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });
 }

 ngOnInit() {}

 get f() { return this.postForm.controls; }

 onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.postForm.invalid) {
      return;
  }

  this.post = new Post(this.f['title'].value, this.f['text'].value);

  this.addPostService.addPost( this.post ).subscribe({
    next: (result: any) => {
      if (result ['status'] === 'success') {
        this.closeBtn.nativeElement.click();
        this.commonService.notifyPostAddition('');
      } else {
        console.log( 'Error adding post' );
      }
    },
    error: (e: any) => {},
    complete: () => { console.info('complete') }
  });
 }

}
