import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'cmp-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  movieID!: string | null;
  movies!: Movie[];
  movie!: Movie | undefined;

  total!: number;

  constructor(private location: Location, private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movieID = this.getMovieID();
    this.movie = this.getMovieByID();
    this.total = this.calculatePrice(this.movie);
  }

  backToPreviousPage() {
    this.location.back();
  }

  getMovieID(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }

  getMovieByID(): Movie | undefined {
    this.movies = this.moviesService.movieList;
    return this.movies.find( (movie) => movie.id === this.movieID);
  }

  calculatePrice(movie: Movie | undefined): number {
    const price = this.movie?.price as number;
    const quantity = this.movie?.quantity as number;
    const total = (price * quantity);
    return total;
  }

}
