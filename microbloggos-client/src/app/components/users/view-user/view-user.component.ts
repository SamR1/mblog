import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
    providers: [FormatDatePipe]
})
export class ViewUserComponent implements OnInit {

  user = null;

  constructor(private http: Http, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
      const id = this.activatedRoute.snapshot.params.id;
      const apiUrl = 'http://localhost:3000/api/users/' + id;
      this.http.get(apiUrl).subscribe(
          res => {
              this.user = res.json();
          },
          err => console.log(err));
  }

}
