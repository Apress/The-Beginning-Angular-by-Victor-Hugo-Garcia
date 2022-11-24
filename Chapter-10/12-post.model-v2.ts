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
}