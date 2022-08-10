export namespace AppModels {

  export class Movie {
    public id: string;
    public title: string;
    public year: string;
    public poster: string;
  }

  export class MovieDetails extends Movie {
    constructor() {
      super();
    }
    public rated: string;
    public released: string;
    public runtime: string;
    public genre: string;
    public director: string;
    public writer: string;
    public actors: string;
    public plot: string;
    public language: string;
    public country: string;
    public awards: string;
    public metascore: string;
    public rating: string;
    public votes: string;
    public type: string;
    public boxOffice: string;
  }

  export class RequestListParameters {
    constructor() {
      this.pageNo = 1;
      this.searchText = '';
    }
    pageNo: number;
    searchText: string;
  }

  export class MovieListResponse {
    public search: Array<Movie>;
    public totalResults: string;
    public response: string;
  }

}
