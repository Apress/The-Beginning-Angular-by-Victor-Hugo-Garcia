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

class Employee extends Person {
    private department: string = "";

    constructor( 
        firstName: string, 
        lastName: string, 
        birthDate: Date,
        department?: string ) {

            super(firstName, lastName, birthDate);
            
            if ( department ) this.department = department;
    }

    setDepartment( department: string ) {
        this.department = department;
    }

    getDepartment(): string {
        return this.department;
    }
}

let emp1 = new Employee( "Mary Jane", "Watson", new Date("1965-06-01") );