import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const router = inject(Router)

  if (user && token) {
    return true;
  }
  alert("You are unauthorized user, Please login");
  router.navigate(['/login']);
  return false;


};
