import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // return true;
  const role = sessionStorage.getItem('role')
  if(role === 'admin' ){
    return true
  }else{
    const router = inject(Router)
    return router.navigate(['/login'])
  }
};
