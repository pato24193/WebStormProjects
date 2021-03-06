import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-promise-example',
  templateUrl: './promise-example.component.html',
  styleUrls: ['./promise-example.component.css']
})
export class PromiseExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.processGetDataFromAPI();
  }

  getDataFromAPI(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open('GET', url);
      request.send();

      request.onload = function() {
        if (this.status === 200) {
          // Success
          resolve(this.response);
        } else {
          // Failed
          reject(new Error(this.statusText));
        }
      };
    });
  }

  processGetDataFromAPI() {
    this.getDataFromAPI('http://localhost:8080/info?apiKey=eaf118ab-babf-43ed-a788-b66d2f0ca00').then(
      (dataFromAPI) => {
        console.log('Success: ' + dataFromAPI);
      },
      (errorWhenReadAPI) => {
        console.error('Failed: ', errorWhenReadAPI);
      }
    );
  }
}
