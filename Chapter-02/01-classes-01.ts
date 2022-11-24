class Person {
    private firstName: string;
    private lastName: string;
    private birthDate: Date;

    constructor(firstName: string, lastName: string, birthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    setFirstName( firstName: string ) {
        this.firstName = firstName;
    }

    setLastName( lastName: string ) {
        this.lastName = lastName;
    }
}

let person1 = new Person("George", "Martin", new Date("2019-08-03"));

console.log( person1.getFirstName() );

person1.setFirstName("Brandon");

console.log( person1.getFirstName() );