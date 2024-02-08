"use strict";
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
let customSize = Sizer.NoticeMePapaFlammy;
console.log(customSize);
//# sourceMappingURL=index.js.map