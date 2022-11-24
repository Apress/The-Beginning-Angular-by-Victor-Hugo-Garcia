export class Post {
    private id = '';
    private title;
    private text;
    private author_id = '';
 
    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
 
    getTitle() {
        return this.title;
    }
 
    getText() {
        return this.text;
    }

    getId() {
        return this.id;
    }

    setTitle(title: string) {
        this.title = title;
    }
      
    setText(text: string) {
        this.text = text;
    }
      
    setId(id: string) {
        this.id = id;
    }
      
}
