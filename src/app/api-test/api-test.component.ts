import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  optionsList = [];

  constructor(private http: HttpClient) { }

  sendRecoveryLink() {
    const formData: any = new FormData();
    formData.append('email', 'ovtrvyrminybmsnzwh@twzhhq.online');
    this.http.post<any>(
      'http://localhost/pegate_api/public/shared/sendRecoveryLink',
      formData,
      {
        headers: {
          ['X-ID']: '1',
          ['X-Token']: '123132131',
        },
      }
    )
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
      );
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost/pegate_api/public/shared/getOptgroupsWithOptions')
      .subscribe(responseData => {
        console.log(responseData);
        this.optionsList = responseData;
      });
  }

}
