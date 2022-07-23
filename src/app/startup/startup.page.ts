
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.page.html',
  styleUrls: ['./startup.page.scss'],
})
export class StartupPage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router: Router) { }
  skipbtnClick= function () {
    this.router.navigateByUrl('/stock');
  };

}
