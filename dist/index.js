"use strict";
;
let customSize = 69420;
console.log(customSize);
function returnTaxAmt(annualIncome) {
    return annualIncome * 1200;
}
function sideEffectsOnly(argument) {
    argument *= 2;
}
let dummy = returnTaxAmt(0);
console.log(dummy);
function implicitReturnExample(arg) {
    let x = arg;
    if (arg > 25000)
        return arg * 1200;
    x += arg;
    return arg * 1250;
}
console.log("\n");
dummy = implicitReturnExample(120);
console.log(dummy);
function lipsum(loremIpsum, dolorSitAmet) {
    if (typeof (dolorSitAmet) === "undefined")
        return loremIpsum;
    return loremIpsum + " " + dolorSitAmet;
}
let dummyString = lipsum("Tommy");
console.log("\n");
console.log(dummyString);
dummyString = lipsum("Tommy", "Wiseau");
console.log(dummyString);
function lipsum2(loremIpsum, dolorSitAmet = "dolor sit amet") {
    return loremIpsum + " " + dolorSitAmet;
}
console.log("\n");
dummyString = lipsum2("Tommy", "Wiseau");
console.log(dummyString);
dummyString = lipsum2("Tommy");
console.log(dummyString);
//# sourceMappingURL=index.js.map