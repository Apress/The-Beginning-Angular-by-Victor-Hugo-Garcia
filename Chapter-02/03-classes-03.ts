class Vehicle {
    protected brand: string = "";
    protected color: string;    
    protected wheels: number;

    constructor( wheels: number, color: string ) {
        this.color = color;        
        this.wheels = wheels;
    }

    setColor( color: string ) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}

class Automobil extends Vehicle {
    constructor( color: string, brand: string) {
        super( 4, color );
        this.brand = brand;
    }    
}

let v1 = new Vehicle( 2, "white");
let a1 = new Automobil( "red", "porsche" );