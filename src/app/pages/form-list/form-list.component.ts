import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ListComponent
  ],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
