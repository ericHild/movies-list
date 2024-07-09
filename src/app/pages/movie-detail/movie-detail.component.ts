import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DetailComponent
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
