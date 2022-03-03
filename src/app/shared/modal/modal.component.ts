import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  @Input() isActive = false;
  @Input() content!: string;

  captchaResult: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
