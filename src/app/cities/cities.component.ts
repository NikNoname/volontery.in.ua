import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { cities } from './cities.constant';
import { VolunteerItem } from '../shared/interfaces/volunteer-item.interface';
import { volunteers } from '../shared/volunteers.constant';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent implements OnInit, OnDestroy {
  city: string | undefined;
  items: Array<VolunteerItem> = [];

  private readonly untilDestroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.untilDestroy$)).subscribe(params => {
      const key = params.get('city')

      if (!key || !cities.hasOwnProperty(key)) this.router.navigate(['404'])

      this.city = cities[key!!];
      this.items = volunteers.filter(item => item.city === key)
    });
  }

  ngOnDestroy(): void {
    this.untilDestroy$.next();
    this.untilDestroy$.complete();
  }
}
