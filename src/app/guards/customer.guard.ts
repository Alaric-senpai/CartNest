import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const customerGuard: CanActivateFn = (route, state) => {
  const role = sessionStorage.getItem('role')
  if(role === 'customer' ){
    return true
  }else{
    const router = inject(Router)
    return router.navigate(['/login'])
  }
};
