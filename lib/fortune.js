
var fortunes = [
    "Defeat your fears or your fears defeat you.",
    "Rivers need sources.",
    "Don't fear unfamilliar.",
    "You're gonna be nicely surprised.",
    "Be simpler wherever you can be."
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};
