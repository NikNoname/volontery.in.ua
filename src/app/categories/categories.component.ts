import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { categories } from './categories.constant';
import { VolunteerItem } from '../shared/interfaces/volunteer-item.interface';
import { volunteers } from '../shared/volunteers.constant';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit, OnDestroy {
  category: string | undefined;
  items: Array<VolunteerItem> = [];

  private readonly untilDestroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.untilDestroy$)).subscribe(params => {
      const key = params.get('category')

      if (!key || !categories.hasOwnProperty(key)) this.router.navigate(['404'])

      this.category = categories[key!!];
      this.items = volunteers.filter(item => item.categories.includes(key!!))
    });
  }

  ngOnDestroy(): void {
    this.untilDestroy$.next();
    this.untilDestroy$.complete();
  }
}
