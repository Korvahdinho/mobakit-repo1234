import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: any = []

  constructor(private router: Router, private http: HttpClient) {
    window.scrollTo(0, 0);
  }
  toggleMute(myVideo) {

    let video = <HTMLVideoElement>document.getElementById(myVideo);

    video.muted = !video.muted;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.http.get('http://mobikart-alb-1848800874.us-east-1.elb.amazonaws.com/getLimitData/8').subscribe((res) => {
      //console.log(res);
      this.models = res;
      console.log(this.models)
      console.log(JSON.parse(localStorage.getItem('user')))
      console.log(JSON.parse(localStorage.getItem('101')))
    });

  }

}
