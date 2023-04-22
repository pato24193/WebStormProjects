export class CustomValidation {

    static isValidWithRegex(str: string, regex: string): boolean {
        const regexObj = new RegExp(regex);
        return regexObj.test(str);
    }
}
