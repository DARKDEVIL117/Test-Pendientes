import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Login } from './auth.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  idUser: any = "";

  constructor(private http: HttpClient) { }


  login(nombreUsuario : string,  contrasena: string){
    const url = `${environment.urlBase}/auth/login`

    const body = {nombreUsuario, contrasena}

    console.log(body);
    
    return this.http.post<Login>(url,body)
    

  }





  validarToken (): Observable<any> {

    const url= `${environment.urlBase}/api/auth/renew`;

    return this.http.get<Login> (url)
    .pipe(
      map(resp=>{
        
        return resp;

      }),
      catchError(err => of(false))
    )
    ;
  }

  registerUser(nombres: string, apellidos: string,  nombreUsuario : string,  contrasena: string, descripcion: string, permitirBuscar: boolean){
    const url= `${environment.urlBase}/usuarios`;
    const body = {nombres, apellidos, nombreUsuario, contrasena, descripcion, permitirBuscar}
    console.log(body);
    
    return this.http.post<Login>(url,body)

  }



}
