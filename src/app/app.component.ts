import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IpService } from './shared/services/ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  fromUA: boolean | undefined;

  private readonly untilDestroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private readonly ip: IpService) {}

  ngOnInit(): void {
    this.ip.getIpAddress()
      .pipe(takeUntil(this.untilDestroy$))
      .subscribe(({ ip }) => {
        this.ip.getCountryByIp(ip).pipe(takeUntil(this.untilDestroy$)).subscribe(({ country_code }) => {
          this.fromUA = country_code.toUpperCase() === "UA";
        });
      })
  }

  ngOnDestroy(): void {
    this.untilDestroy$.next();
    this.untilDestroy$.complete();
  }
}
