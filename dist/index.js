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
    if (arg > 25000)
        return arg * 1200;
    return arg * 1250;
}
//# sourceMappingURL=index.js.map