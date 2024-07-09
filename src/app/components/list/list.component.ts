import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cmp-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  movieForm!: FormGroup;

  listOfMovie: Movie[] = [];

  data:Movie[] = [
    {
      id: '0',
      name: 'Batman Begins',
      description: 'Comment un homme seul peut-il changer le monde ? Telle est la question qui hante Bruce Wayne depuis cette nuit tragique où ses parents furent abattus sous ses yeux, dans une ruelle de Gotham City',
      price: 40,
      quantity: 5
    },
    {
      id: '1',
      name: 'Piranha 2 3D',
      description: 'Autrefois un centre d\'attraction familial, le parc aquatique que possède Chet est désormais une attraction pour un tout autre genre.',
      price: 15,
      quantity: 30
    },
    {
      id: '2',
      name: 'Lucy',
      description: 'Lucy se retrouve malgré elle au cœur d’une expérimentation humaine incroyable. A Taipei, Lucy, une jeune étudiante, se retrouve malgré elle au cœur d’une expérimentation humaine incroyable, orchestrée par la mafia coréenne. Après avoir absorbé accidentellement une drogue, elle voit ses capacités cérébrales décuplées. ',
      price: 5,
      quantity: 2
    },
    {
      id: '3',
      name: 'Bandidas',
      description: 'Deux bombes pour faire sauter la banque !! Avec Penelope Cruz, Salma Hayek, Steve Zahn.1880. La dure loi du Far West n\'épargne pas le Mexique. Sara, fille d\'un riche banquier, et Maria, issue d\'une famille de paysans, avaient peu de chances de partager le même destin. Jusqu\'au jour où Tyler Jackson, représentant de la New York Bank and Trust, les unit dans le malheur, brisant leurs deux familles pour s\'emparer illégalement de terres mexicaines et permettre ainsi l\'extension du chemin de fer américain.',
      price: 40,
      quantity: 5
    }
  ];

  randomData!: Movie;

  constructor(private fb: FormBuilder, private moviesService: MoviesService ) {}

  ngOnInit(): void {
    this.randomData = this.getRandomMovie(this.data);
    this.initForm(this.randomData);

    this.listOfMovie = this.moviesService.movieList;
  }

  getRandomMovie(data: Movie[]):Movie {
    const random = Math.floor(Math.random() * data.length);
    return this.data[random];
  }

  initForm(data:Movie) {
    this.movieForm = this.fb.group({
      id: [data.id, [Validators.required]],
      name: [data.name, [Validators.required]],
      description: [data.description, [Validators.required]],
      price: [data.price, [Validators.required]],
      quantity: [data.quantity, [Validators.required]]
    });
  }

  addMovieToList() {
    const movie = new Movie();
    movie.id = this.movieForm.value?.id;
    movie.name = this.movieForm.value?.name;
    movie.description = this.movieForm.value?.description,
    movie.price = this.movieForm.value?.price,
    movie.quantity = this.movieForm.value?.quantity;

    this.listOfMovie = this.moviesService.addMovieToList(movie);

    this.movieForm.reset();
  }

}
