import { Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { FormListComponent } from './pages/form-list/form-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form-list'
  },
  {
    path: 'form-list',
    component: FormListComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  }
];
