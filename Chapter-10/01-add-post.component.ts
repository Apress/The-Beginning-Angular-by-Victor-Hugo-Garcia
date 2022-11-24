import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
 selector: 'app-add-post',
 templateUrl: './add-post.component.html',
 styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 postForm: FormGroup;
 submitted = false;

 constructor( private formBuilder: FormBuilder ) {
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
 }

}