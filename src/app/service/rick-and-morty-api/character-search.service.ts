import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '@app/model/character';
import { environment } from '../../../environments/environment';
import { SearchResult } from '@app/model/serach-result';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CharacterSearchService {

  private url = environment.rickAndMortyApiBaseUrl + '/character';
  private errorFallback: SearchResult<Character> = {info: {count: 0, pages: 0}, results: []};

  constructor(private http: HttpClient) {}

  public findByName(name: string, page: number = 0): Observable<SearchResult<Character>> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('name', name);
    return this.http.get<SearchResult<Character>>(this.url, {params})
      .pipe(catchError(_ => of(this.errorFallback)));
  }
}