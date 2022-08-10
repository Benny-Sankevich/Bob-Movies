import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppModels } from 'src/app/models/AppModels';
import { MovieService } from 'src/app/services/movie-service';
import { MovieDetailsComponent } from 'src/app/components/movies-area/movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input()
  public movieDetails: AppModels.Movie;

  public constructor(
    public dialog: MatDialog,
    private movieService: MovieService
  ) {}

  public async showMovieDetails(): Promise<void> {
    const movie = await this.movieService.getMovieDetails(this.movieDetails.id);

    this.dialog.open(MovieDetailsComponent, {
      width: '70%',
      data: movie,
      panelClass: 'custom-dialog-container',
    });
  }
}
