export default class Validator {
    constructor(input) {
        this.input = input;
    }
    validatorsToBeUsed = [];
    use = Function => {
        this.validatorsToBeUsed.push(Function);
    }
    validate = () => {
        return this.validatorsToBeUsed.every(validator => validator(this.input))
    }
    static String = (input, strict) => {
        return strict ? typeof input === 'string' : typeof String(input) === 'string';
    }
    static URL = input => {
        return /^(http|https):\/\/[a-zA-Z0-9-_%&@#:/]+/.test(input)
    }
    static IMAGE_URL = (input, strict) => {
        const test = /[a-zA-Z0-9/-]+.(jpeg|jpg|png|ico)$/.test(input);
        return strict ? (Validator.URL(input) && test) : test;
    }
}