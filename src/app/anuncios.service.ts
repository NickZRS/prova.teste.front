import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncios } from './anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  url = "http://localhost:3000/anuncios";

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<Anuncios[]>{
    return this.http.get<Anuncios[]>(this.url);
  }

  save(anuncio: Anuncios): Observable<Anuncios>{
    return this.http.post<Anuncios>(this.url, anuncio);

  }



}
