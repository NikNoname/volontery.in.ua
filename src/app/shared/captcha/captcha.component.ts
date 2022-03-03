import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dictionary } from './dictionary.constant';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaptchaComponent implements OnInit {
  input: string = '';
  correct = dictionary[Math.floor(Math.random() * dictionary.length)];
  captcha = this.correct.split('').sort(() => 0.5 - Math.random()).join('')

  @Output() valid: EventEmitter<void> = new EventEmitter();
  @Output() invalid: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  check(): void {
    if (this.input.toLowerCase() === this.correct.toLowerCase()) this.valid.emit()
    else this.invalid.emit()
  }
}
