import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieList:Movie[] = [];

  constructor() { }

  addMovieToList(movie: Movie) {
    this.movieList.push(movie);
    return this.movieList;
  }

}
