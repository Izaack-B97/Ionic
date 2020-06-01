import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  // getAlbums(){
  //   this.http.get('https://jsonplaceholder.typicode.com/albums')
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  //   return this.http.get('https://jsonplaceholder.typicode.com/albums');
  // }
}
