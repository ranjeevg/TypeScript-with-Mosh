// /* Note: TS comments this way for our demos because the compiler treats double-slashes as folder paths */
// console.log("Vanilla JavaScript says hello :)");

/* apparently we need to compile it first before running it in the terminal - like so: tsc [filename].ts in the console */

/* now for some TS: */
// let age: number = 0;

// // testing out some logic here
// while (age < 27) {
//     age += 10;

//     // wrap around to my current age
//     if (age >= 30) {
//         age = 27;
//     }
//     // show test age
//     console.log(age);
// }

// console.log("khattam shud :)");

/* Section 2: Fundamentals */

// // Apparently TypeScript lets us use this notation 
// // for legibility. Such a relief TBH.
// let sales: number = 123_456_789,
//     course: string = 'TypeScript',
//     is_published: boolean = true;

// // note: apparently we don't need to annotate these basic types -
// // the compiler is smart enough to know. 
// // HOWEVER, if you don't provide a value, the variable 
// // is assigned a type of any.
// // But that way lies the madness of plain JavaScript.
// let level;
// // For example, I can do this:
// level = 1;
// level = 'a';

// Moving on beyond that paakhand:
// let's have a look at how TS functions work.

// best practice is to annotate the function argument type,
// or else the compiler implicitly assumes it to be an any type.
// By default, the TypeScript compiler doesn't allow that; 
// either annotate the argument, 
// or set the 'NoImplicitAny' property in tsconfig.json to false.
// function sampleFunction(sampleData: number) {
    
//     // because why not?
//     return Math.pow(sampleData, 3);
// }

// // ... and yet they allow this? Hmm.
// // ... actually,, best to allow the option in the case 
// //     the user has to migrate old JS code where no 
// //     data type matches. 
// function a(b:any) {

// }

// ... moving on.
// Arrays:

// Vanilla JS would allow an array like so:
// let numbers = [1,2,'3'];
// because JavaScript.

// TypeScript arrays work differently:
// let numbers: number[] = [1,2,3];

// // again, with regular types,
// // we could have skipped the type annotation there.
// let nums = [1,2,3];

// // Moving on to tuples:
// // a specific array (an n-tuple) 
// // where each index value is of a specific type.
// // also of a fixed length.
// let tuple0: [number, string] = [1, 'Ranjeev'];

// enums
// basically like C# enums
// if you don't specify sizes, 
// the compiler assumes 0-based incremental values.
// const enum Size { Small, Medium, Large, Extra };

// for the memes
const enum Sizer { Help = 0, Me = 1, NoticeMePapaFlammy = 69420 };

// get keys for enum above
// annotate the type as a matter of good habit.
// let sizer_keys: String[] = Object.keys(Sizer);

// // apparently, to hack around the double values shown:
// sizer_keys = sizer_keys
//     .filter(e => isNaN(Number(e)));

// // iterating over the fetched keys
// sizer_keys.forEach((key, index) => {
//     // apparently the Object.keys method returns both the key and the value, in pairs.
//     // and apparently the syntax for reading a string value in a string literal is different too.
//     console.log(`Entry ${key} has an index of ${index}.`);
// });

// // now for the values.
// let sizer_values = Object.values(Sizer)
//     .filter(v => !isNaN(Number(v))); // adjust according to what's needed.
// console.log('\n');

// sizer_values.forEach(v => {
//     console.log(`Values, correspondingly: ${v}`);
// });

// we're beginning to get to typescript types
// example: setting an instance of type Sizer

let customSize: Sizer = Sizer.NoticeMePapaFlammy;

console.log(customSize);

// note: he mentioned that setting the enums as consts in TS optimizes the generated JS file. 
// I've done that for the enums we've used.

// FUNCTIONS

// signing return values for functions is best practice, 
// even though the TS compiler is smart enough to check in most cases.
// Also allows the console to detect mismatched function return values.

function returnTaxAmt(annualIncome: number) : number {
    return annualIncome * 1200;
}

// for functions returning nothing, just specify the return type as void
// and, also, we can force enums and classes as types
// .. just like in a sensible, statically typed language.
function sideEffectsOnly (argument: Sizer) : void 
{
    argument *= 2; // we had to do something in this example - TS compiler won't let us not use the param
}

let dummy: number = returnTaxAmt(0);
console.log(dummy);

// amnd apparently tsconfig.json has an option to turn on compiler errors for unused function arguments
// "noUnusedParameters" : "true"

// similarly, we might have an unspecified branch of an if that leads to default return ('undefined' in JS)
// we can turn on a compiler error for it in tsconfig.json: "noImplicitReturns"
// turned it on

// an example: 
function implicitReturnExample (arg: number) {

    let x: number = arg;
    if (arg > 25000) return arg * 1200;

    // as it is now, if arg is less than that, it returns undefiined
    // let's fix that
    // let's also use the unused var x somehow
    x += arg;
    return arg * 1250;
}

// another setting to check for unused local variables
// "noUnusedLocals": "true"

// using the same dummy variable from above
console.log("\n"); // for formatting

dummy = implicitReturnExample(120);
console.log(dummy);

// you can also mark function parameters as optional by putting a ? next to the name
// note: this will trigger a compiler error, as the possibility exists that it is undefined 
//  and not the value specified
function lipsum (loremIpsum: string, dolorSitAmet? : string) : string {

    // we need to check for if dolorSitAmet is undef or not
    if (typeof(dolorSitAmet) === "undefined") return loremIpsum;

    return loremIpsum + " " + dolorSitAmet;
}

let dummyString = lipsum("Tommy");
console.log("\n");
console.log(dummyString);

dummyString = lipsum("Tommy", "Wiseau");
console.log("\n");
console.log(dummyString);