import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import { AuthService} from '../../../services/auth.service';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
    providers: [FormatDatePipe]
})
export class ViewUserComponent implements OnInit {

  user      = null;
  userPosts = null;

  constructor(private http: Http,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private postsService: PostsService) { }

  ngOnInit() {
      this.refresh();
  }

  refresh() {
      const id = this.activatedRoute.snapshot.params.id;
      const apiUrl = 'http://localhost:3000/api/users/' + id;
      this.http.get(apiUrl).subscribe(
          res => {
              this.user = res.json().user;
              this.userPosts = res.json().posts;
          },
          err => console.log(err));
  }

  delete(id) {
      this.postsService.deletePost(id).subscribe(
          res => {
              if (res.status === 200) {
                  this.refresh();
              }
          },
          err => {
              console.log(err.message);
          });
  }

}
