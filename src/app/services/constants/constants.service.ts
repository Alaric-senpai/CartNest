import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  loginvisible: boolean = false;

  setvisible(){
    this.loginvisible = true;
  }

  setinvisible(){
    this.loginvisible = false;
  }

  togglevisibility(){
    if(this.loginvisible == true){
      this.loginvisible = false
    }else{
      this.loginvisible = true;
    }
  }
}
