// Primitive Types and Non Primitive types are basic data types that are directly supported by the p
// rogramming language. In TypeScript, the primitive types include:
//1. Boolean: Represents a logical value indicating true or false.
var isDone = false;
//2. Number: Represents a number value.
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//3. String: Represents a sequence of characters.
var color = "blue";
color = 'red';
// 4.Null: Represents an intentional absence of any object value
var nullVariable = null;
// 5. Undefined: Represents an intentional absence of any object value
var undefinedVariable = undefined;
// Non Primitive Types
// 1. Array
var list = [1, 2, 3];
// 2. Tuple
var x;
x = ["hello", 10];
// 3. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 4.Classes: Blueprint for creating objects with specific methods and properties.
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
var point3d = { x: 1, y: 2, z: 3 };
// Functions: Represents a function that can be called.
function sum(x, y) {
    return x + y;
}
