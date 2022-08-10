import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModels } from 'src/app/models/AppModels';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA) public movie: AppModels.MovieDetails,
    public dialog: MatDialog
  ) {}
}
