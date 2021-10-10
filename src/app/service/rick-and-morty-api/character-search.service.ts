import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '@app/model/character';
import { environment } from '../../../environments/environment';
import { SearchResult } from '@app/model/serach-result';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CharacterSearchService {

  private readonly pageSize = 20;
  private url = environment.rickAndMortyApiBaseUrl + '/character';
  private errorFallback: SearchResult<Character> = {info: {pageSize: this.pageSize, page: 0, count: 0, pages: 1}, results: []};

  constructor(private http: HttpClient) {}

  public findByName(name: string, page: number = 0): Observable<SearchResult<Character>> {
    const params = new HttpParams()
      .set('page', String(page + 1))
      .set('name', name);
    return this.http.get<SearchResult<Character>>(this.url, {params}).pipe(
      catchError(_ => of(this.errorFallback)),
      map(r => ({...r, info: {...r.info, pageSize: 20, page}}))
    );
  }
}
