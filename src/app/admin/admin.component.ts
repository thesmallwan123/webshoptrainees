import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router,) { }

  ngOnInit() {
    //check cookie
    if (this.cookieService.get('loggedin') == "IUAW**W%#ZMD?KDW}"){
      console.log("Logged in");
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

}
