import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class UserService{
  users: Array<{name:string,email:string,phone:number}>=[];

}
