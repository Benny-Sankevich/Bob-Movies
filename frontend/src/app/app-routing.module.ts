import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/components/layout-area/page404/page404.component';
import { MovieListComponent } from 'src/app/components/movies-area/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
