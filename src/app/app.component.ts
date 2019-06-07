import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fronend-NEW';

  /*For mac*/
  private apiUrl = 'http://localhost:8080/api';

  /*For Windows*/

  // private apiUrl = 'http://localhost/api';


  getURL() {
    return this.apiUrl;
  }
}
