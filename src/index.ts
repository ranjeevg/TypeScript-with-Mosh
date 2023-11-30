// /* Note: TS comments this way for our demos because the compiler treats double-slashes as folder paths */
// console.log("Vanilla JavaScript says hello :)");

// /* apparently we need to compile it first before running it in the terminal - like so: tsc [filename].ts in the console */

// /* now for some TS: */
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

// Apparently TypeScript lets us use this notation 
// for legibility. Such a relief TBH.
let sales: number = 123_456_789,
    course: string = 'TypeScript',
    is_published: boolean = true;

    // note: apparently we don't need to annotate these basic types -
    // the compiler is smart enough to know. 
    // HOWEVER, if you don't provide a value, the variable 
    // is assigned a type of any.
    // But that way lies the madness of plain JavaScript.
    let level;
    // For example, I can do this:
    level = 1;
    level = 'a';

    // Moving on beyond that paakhand:
    // let's have a look at how TS functions work.

    function sampleFunction(sampleData: number) {

    }
