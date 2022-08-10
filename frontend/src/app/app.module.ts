import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LayoutComponent } from 'src/app/components/layout-area/layout/layout.component';
import { HeaderComponent } from 'src/app/components/layout-area/header/header.component';
import { Page404Component } from 'src/app/components/layout-area/page404/page404.component';
import { SpinnerComponent } from 'src/app/components/layout-area/spinner/spinner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MovieCardComponent } from 'src/app/components/movies-area/movie-card/movie-card.component';
import { MovieListComponent } from 'src/app/components/movies-area/movie-list/movie-list.component';
import { MovieDetailsComponent } from 'src/app/components/movies-area/movie-details/movie-details.component';
import { SpinnerInterceptorService } from 'src/app/services/spinner.interceptor.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieListComponent,
    Page404Component,
    MovieDetailsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatStepperModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptorService,
    multi: true,
}],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
