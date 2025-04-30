"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_name;
class Employee {
    constructor(id, name, address) {
        _Employee_name.set(this, void 0);
        this.id = id || 0;
        __classPrivateFieldSet(this, _Employee_name, name || "", "f");
        this.address = address || "";
    }
    get Name() {
        return __classPrivateFieldGet(this, _Employee_name, "f");
    }
    get NameWithAddress() {
        return `${__classPrivateFieldGet(this, _Employee_name, "f")} stays at ${this.address}`;
    }
    set Name(name) {
        __classPrivateFieldSet(this, _Employee_name, name, "f");
    }
    set Address(address) {
        this.address = address;
    }
    get Id() {
        return this.id;
    }
    set iid(id) {
        this.id = id;
    }
}
_Employee_name = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
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
//# sourceMappingURL=class.js.map