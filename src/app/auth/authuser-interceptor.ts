import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthuserService } from "./authuser.service";

@Injectable()
export class AuthInterceptoruser implements HttpInterceptor {
  constructor(private authService: AuthuserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {


    const authToken = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
