"use strict";
let sales = 123456789, course = 'TypeScript', is_published = true;
let level;
level = 1;
level = 'a';
function sampleFunction(sampleData) {
    return Math.pow(sampleData, 3);
}
function a(b) {
}
let numbers = [1, 2, 3];
let nums = [1, 2, 3];
let tuple0 = [1, 'Ranjeev'];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
    Size[Size["Extra"] = 3] = "Extra";
})(Size || (Size = {}));
;
var Sizer;
(function (Sizer) {
    Sizer[Sizer["Help"] = 0] = "Help";
    Sizer[Sizer["Me"] = 1] = "Me";
    Sizer[Sizer["NoticeMePapaFlammy"] = 69420] = "NoticeMePapaFlammy";
})(Sizer || (Sizer = {}));
;
let sizer_keys = Object.keys(Sizer);
sizer_keys = sizer_keys
    .filter(e => isNaN(Number(e)));
sizer_keys.forEach((key, index) => {
    console.log(`Entry ${key} has an index of ${index}.`);
});
let sizer_values = Object.values(Sizer)
    .filter(v => !isNaN(Number(v)));
console.log('\n');
sizer_values.forEach(v => {
    console.log(`Values, correspondingly: ${v}`);
});
//# sourceMappingURL=index.js.map