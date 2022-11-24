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
      } else {
        console.log( 'Error adding post' );
      }
    },
    error: (e: any) => {},
    complete: () => { console.info('complete') }
  });
 }