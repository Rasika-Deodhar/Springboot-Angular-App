import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private apiUrl = 'http://10.20.6.36:8016/getAllUsers';

  constructor(private httpClient:HttpClient) {
   }

   getAllUsers(){
     return this.httpClient.get('http://10.20.6.36:8016/getAllUsers').pipe(
       map(response=>response)
     );
   }

   addUser(user:any){
      return this.httpClient.post('http://10.20.6.36:8016/addUser',user).pipe(
        map(response=>response)
      );
   }

   updateUser(user:any){
      return this.httpClient.post('http://10.20.6.36:8016/updateUser',user).pipe(
        map(response=>response)
      );
   }

   deleteUser(userId:number){
      return this.httpClient.delete('http://10.20.6.36:8016/deleteUser/' + userId);
      // .pipe(
      //   map(response=>response)
      // );
   }

   getUserById(userId:number){
      return this.httpClient.get('http://10.20.6.36:8016/getUserById/' + userId).pipe(
        map(response=>response)
      );
   }
  
}
