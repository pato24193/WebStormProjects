import {CustomValidation} from "./custom_validation";

let phoneNumberRegex = "\\(\\d{2}\\)-\\(0\\d{9}\\)";
console.log(CustomValidation.isValidWithRegex('(58)-(0123456789)', phoneNumberRegex));
