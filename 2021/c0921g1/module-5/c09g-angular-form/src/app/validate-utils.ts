import {AbstractControl} from '@angular/forms';

export class ValidateUtils {

  checkAge18(abstractControl: AbstractControl): any {
    // yyyy-mm-dd
    const yearStudent =
      Number(abstractControl.value.substr(0, 4));
    const yearCur =
      new Date().getFullYear();

    return yearCur - yearStudent >= 18 ? null : {not18: true};
  }
}
