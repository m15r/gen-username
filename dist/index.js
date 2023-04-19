"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsername = void 0;
const adjectives = require('./dictionaries/adjectives.json');
const nouns = [
    ...require('./dictionaries/nouns/animals.json'),
    ...require('./dictionaries/nouns/household.json')
];
function generateRandomNumber(length) {
    const min = parseInt('1' + (length > 0 ? '0'.repeat(length - 1) : ''));
    const max = parseInt('9'.repeat(length));
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function generateUsername(options) {
    var _a;
    const dictionaries = [adjectives, nouns];
    const parts = dictionaries.map(dy => {
        const word = dy[Math.floor((Math.random() * dy.length))];
        return (options === null || options === void 0 ? void 0 : options.capitalize) ? capitalize(word) : word;
    });
    let username = parts.join((_a = options === null || options === void 0 ? void 0 : options.seperator) !== null && _a !== void 0 ? _a : '');
    if (options === null || options === void 0 ? void 0 : options.numberLength)
        username += generateRandomNumber(options.numberLength).toString();
    return username;
}
exports.generateUsername = generateUsername;
