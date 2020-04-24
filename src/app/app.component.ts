import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cypress-test';

  logout() {
    this.http.post('api/logout', {}).subscribe(() => {});
  }

  constructor(private http: HttpClient) {}
}
