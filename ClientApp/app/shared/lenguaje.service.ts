import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

export class Lenguaje {
  id: number;
  name: string;
  logo: string;
  rating: number;
}

@Injectable()
export class LenguajeService {
  baseUrl: string;

  constructor(@Inject('BASE_URL') baseUrl: string, private http: Http) {
    this.baseUrl = baseUrl;
  }

  getLenguajes() {
    return this.http.get(`${this.baseUrl}api/lenguajes`)
      .map(res => res.json().map(this.transformImgPath));
  }

  getLenguaje(id: number) {
    return this.http.get(`${this.baseUrl}api/lenguajes/${id}`)
    .map(res => this.transformImgPath(res.json()));
  }

  addLenguaje(lenguaje: Lenguaje) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    return this.http.post(`${this.baseUrl}api/lenguajes`, lenguaje, options);
  }

  // Server gives back the name of the file, this translates it
  // to something that webpack can understand
  transformImgPath(lenguaje) {
    lenguaje.logo = `dist/${lenguaje.logo}`;
    return lenguaje;
  }

}
