import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VolunteerItem } from '../shared/interfaces/volunteer-item.interface';
import { categories } from '../categories/categories.constant';
import { cities } from '../cities/cities.constant';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() item!: VolunteerItem;
  @Input() fromCity = false;

  showModal = false;
  city: string = '';
  categories: string = ''

  constructor() { }

  ngOnInit(): void {
    this.categories = this.item.categories.map(category => categories[category]).join(", ");
    this.city = cities[this.item.city];
  }

}
