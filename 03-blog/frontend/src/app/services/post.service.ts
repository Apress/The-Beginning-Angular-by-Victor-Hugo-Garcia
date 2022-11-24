import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class PostService {

 constructor( private http: HttpClient ) {}

 getAllPost() {
   return this.http.post('/api/post/getAllPost', {});
 }

 getPostsByAuthor() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

  return this.http.post('/api/post/getPostsByAuthor', 
  { author_id: currentUser.id });
 }

}
