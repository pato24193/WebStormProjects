var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Start");
function readGithub() {
    return __awaiter(this, void 0, void 0, function* () {
        let promiseObj = new Promise((resolve, reject) => {
            let xHttp = new XMLHttpRequest();
            xHttp.open("GET", 'https://api.github.com/search/repositories?q=angular');
            xHttp.onload = function () {
                if (this.status == 200) {
                    return resolve(xHttp.responseText);
                }
            };
            xHttp.send();
        });
        console.log(yield promiseObj);
        console.log("End");
    });
}
readGithub();
