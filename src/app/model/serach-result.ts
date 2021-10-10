export interface SearchResult<T> {
  info: SearchResultInfo;
  results: Array<T>;
}

export interface SearchResultInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}
