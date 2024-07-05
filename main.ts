// Primitive Types and Non Primitive types are basic data types that are directly supported by the p
// rogramming language. In TypeScript, the primitive types include:

//1. Boolean: Represents a logical value indicating true or false.

let isDone: boolean = false;
 
//2. Number: Represents a number value.
let decimal: number = 6;
let hex: number = 0xf00d;   
let binary: number = 0b1010;
let octal: number = 0o744;

//3. String: Represents a sequence of characters.
let color: string = "blue";
color = 'red';

// 4.Null: Represents an intentional absence of any object value
let nullVariable: null = null;

// 5. Undefined: Represents an intentional absence of any object value
let undefinedVariable: undefined = undefined;

// Non Primitive Types

// 1. Array
let list: number[] = [1, 2, 3]; 

// 2. Tuple

let x: [string, number];
x = ["hello", 10];

// 3. Enum

enum Color {Red, Green, Blue}

let c: Color = Color.Green

// 4.Classes: Blueprint for creating objects with specific methods and properties.

class Point {
    x: number;
    y: number;
}   

let point: Point = new Point();

// 5. Interface: A blueprint for creating objects with specific methods and properties.

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// Functions: Represents a function that can be called.

function sum(x: number, y: number): number {
    return x + y;
}