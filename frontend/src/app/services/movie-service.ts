import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModels } from 'src/app/models/AppModels';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/services/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  public async getMoviesList(parameters: AppModels.RequestListParameters): Promise<any> {
    try {
      const response = await this.http.post<AppModels.MovieListResponse>(environment.baseUrl + 'GetMoviesList', parameters).toPromise();
      return response;
    } catch (error) {
      this.notificationService.error(error);
    }
  }

  public async getMovieDetails(movieId: string): Promise<any> {
    try {
      const response = await this.http.post<AppModels.MovieDetails>(environment.baseUrl + 'GetMovieDetails', {movieId}).toPromise();
      return response;
    } catch (error) {
      this.notificationService.error(error);
    }
  }
}
