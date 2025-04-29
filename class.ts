class Employee{

    private id: number;
    #name: string;
    private address: string;

    constructor(id?: number, name?: string, address?: string) {
        this.id = id || 0;
        this.#name = name || "";
        this.address = address || "";
    }

    get Name():string{
        return this.#name;
    }

    get NameWithAddress():string{
        return `${this.#name} stays at ${this.address}`;
    }

    set Name(name:string){
        this.#name = name;
    }

    set Address(address:string){
        this.address = address;
    }

    get Id():number{
        return this.id;
    }

    set iid(id:number){
        this.id = id;
    }

}

class Manager extends Employee{

    constructor(id?: number, name?: string, address?: string) {
        super(id, name, address);
    }

}




let john = new Employee();
john.Name = "John Doe";
john.Address = "123 Main St";
john.iid = 1;


console.log(john); // Employee { id: 1, name: 'John Doe', address: '123 Main St' }

console.log(john.Name); // John Doe
console.log(john.NameWithAddress); // John Doe stays at 123 Main St
console.log(john.Id); // 1