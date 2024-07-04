import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {

  let user = localStorage.getItem('newUser')

  if (user) {

    return true;

  } else {
    alert('please log in')

    return false;
  }


};
