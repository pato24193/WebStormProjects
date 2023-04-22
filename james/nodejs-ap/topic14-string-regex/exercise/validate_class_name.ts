import {CustomValidation} from "./custom_validation";

let classNameRegex = "[CAP]\\d{4}[GHIKLM]";
console.log(CustomValidation.isValidWithRegex('C0386K', classNameRegex));
