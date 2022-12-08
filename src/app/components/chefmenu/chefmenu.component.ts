import { Component, OnInit } from '@angular/core';



import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-chefmenu',
  templateUrl: './chefmenu.component.html',
  styleUrls: ['./chefmenu.component.css']
})
export class ChefmenuComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  profile: any;
  username: string
  profileisSet = false
  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log(this.userIsAuthenticated)
    if (this.userIsAuthenticated) {
      console.log(this.userIsAuthenticated)
    }

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        console.log(isAuthenticated)
        this.userIsAuthenticated = isAuthenticated;
        if (this.userIsAuthenticated) {
          console.log(this.userIsAuthenticated)
        }
      });


  }

  
  
  onLogout() {
    this.authService.logout();
  }




  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }


}
