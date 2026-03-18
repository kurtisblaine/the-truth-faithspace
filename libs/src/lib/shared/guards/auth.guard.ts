import { Injectable } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return user(this.auth).pipe(
      take(1),
      map((currentUser) => {
        if (currentUser) {
          return true;
        }
        this.router.navigate(["/server"]);
        return false;
      })
    );
  }
}
