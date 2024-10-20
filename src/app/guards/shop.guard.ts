import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const shopGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('shopidentifier')){
    return true;
  }else{
    const router = inject(Router);
    return router.navigate(['/vendor/register']);
  }
};
