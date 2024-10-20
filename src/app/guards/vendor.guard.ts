import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const vendorGuard: CanActivateFn = (route, state) => {
  // return true;
  const role = sessionStorage.getItem('role')
  if(role === 'vendor' ){
    return true
  }else{
    const router = inject(Router)
    return router.navigate(['/login'])
  }
};
