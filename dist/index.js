"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsername = void 0;
const adjectives = require('../dictionaries/adjectives.json');
const nouns = [
    ...require('../dictionaries/nouns/animals.json'),
    ...require('../dictionaries/nouns/household.json')
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
    var _a, _b, _c, _d;
    const dictionaries = [adjectives, nouns];
    const maxLength = (_a = options === null || options === void 0 ? void 0 : options.maxLength) !== null && _a !== void 0 ? _a : 32;
    const numberLength = (_b = options === null || options === void 0 ? void 0 : options.numberLength) !== null && _b !== void 0 ? _b : 3;
    let username = undefined;
    while (!username || ((username === null || username === void 0 ? void 0 : username.length) + numberLength) > maxLength) {
        const parts = dictionaries.map(dy => {
            const word = dy[Math.floor((Math.random() * dy.length))];
            return (options === null || options === void 0 ? void 0 : options.capitalize) ? capitalize(word) : word;
        });
        username = parts.join((_c = options === null || options === void 0 ? void 0 : options.separator) !== null && _c !== void 0 ? _c : '');
    }
    if (numberLength > 0)
        username += generateRandomNumber((_d = options === null || options === void 0 ? void 0 : options.numberLength) !== null && _d !== void 0 ? _d : 3).toString();
    return username;
}
exports.generateUsername = generateUsername;
