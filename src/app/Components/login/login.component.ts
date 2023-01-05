import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  alert: any
  result: any = {}
  product_id: any
  togglePassword($event) {
    const togglePassword = document.querySelector('#showpassword');
    const password = document.querySelector('#password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  }
  CustomerLogin(regForm: any) {
    const data = JSON.stringify(this.model)
    console.log(data);
    this.http.post('http://mobikart-alb-1848800874.us-east-1.elb.amazonaws.com/processLogin', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe((res) => {

      this.result = res
      if (this.result.success) {
        //console.log(this.result.data)
        localStorage.setItem('user', JSON.stringify(this.result.data))
        var stored = JSON.parse(localStorage.getItem('user'))
        console.log(stored)
        this.router.navigate(['/'])
      }
      else this.alert = "Invalid Username or Password"
      //console.log("Result ",this.result)
      //console.log("Sucess",this.result.success)
    })

  }
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)

  }

}
