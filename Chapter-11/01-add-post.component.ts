onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.postForm.invalid) {
      return;
  }

  this.post.setText(this.f['title'].value);
  this.post.setText(this.f['text'].value);

  if (this.post.getId() === '') {
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
  } else {
    this.addPostService.updatePost( this.post ).subscribe({
      next: (result: any) => {
        if (result ['status'] === 'success') {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition('');
        } else {
          console.log( 'Error updating post' );
        }
      },
      error: (e: any) => {},
      complete: () => { console.info('complete') }
    });
  } 
 }