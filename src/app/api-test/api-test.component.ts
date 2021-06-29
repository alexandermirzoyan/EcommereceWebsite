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

  login() {
    this.http.post<any>(
      'http://localhost/pegate_api/public/shared/login',
      {
        email: 'ovtrvyrminybmsnzwh@twzhhq.online',
        password: 'Qwerty98!',
        captcha: '',
      },
    )
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost/pegate_api/public/shared/getOptgroupsWithOptions')
      .subscribe(responseData => {
        console.log(responseData);
        this.optionsList = responseData;
      });
  }

}
