export class User {
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
}