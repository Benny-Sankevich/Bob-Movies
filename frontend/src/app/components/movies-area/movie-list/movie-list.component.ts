import { Component, OnInit } from '@angular/core';
import { AppModels } from 'src/app/models/AppModels';
import { MovieService } from 'src/app/services/movie-service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movies: Array<AppModels.Movie>;
  public parameters: AppModels.RequestListParameters;
  public pageSize = 10;
  public totalSize = 10;
  constructor(private movieService: MovieService) {
    this.parameters = new AppModels.RequestListParameters();
  }

  public async ngOnInit(): Promise<void> {
    await this.getMoviesList();
  }

  public handlePage(e: any): void {
    if (e.pageIndex <= 0) return;
    this.parameters.pageNo = e.pageIndex;
    this.getMoviesList();
  }

  public async onSearch(): Promise<void> {
    if (this.parameters.searchText != '' && this.parameters.searchText.length <= 2)
      return;

    if (this.parameters.searchText != '') {
      this.parameters.pageNo = 1;
    }
    await this.getMoviesList();
  }

  private async getMoviesList(): Promise<void> {
    const result = await this.movieService.getMoviesList(this.parameters);
    this.movies = result.search;
    this.totalSize = result.totalResults;
  }
}
