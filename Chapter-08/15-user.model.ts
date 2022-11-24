export class User {
    private id = '';
    private username = '';
    private password = '';

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUserName() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    setId( id: string ) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}
