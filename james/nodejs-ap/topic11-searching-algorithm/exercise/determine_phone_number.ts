const VIETTEL_TELECOM = '03';
const MOBIPHONE_TELECOM = '07';
const VINAPHONE_TELECOM = '08';

function filterPhoneNumber(phoneNumbers: string[], telecom: string): string[] {
    let phoneNumberByTelecom = [];

    for (let phoneNumber of phoneNumbers) {
        if (phoneNumber.substr(0, 2) === telecom) {
            phoneNumberByTelecom.push(phoneNumber);
        }
    }

    return phoneNumberByTelecom;
}


let a = ['0708234324', '0332432432', '0732321111', '0834322322', '03333333333', '032321214521'];
console.log(filterPhoneNumber(a, VIETTEL_TELECOM));
console.log(filterPhoneNumber(a, MOBIPHONE_TELECOM));
console.log(filterPhoneNumber(a, VINAPHONE_TELECOM));
