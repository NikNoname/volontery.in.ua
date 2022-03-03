import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  showModal = false;
  joinContent = `<div class="row">
    <div class="col-12">
        <p class="lead">
        Привіт! Якщо ти вирішив доєднатися до волонтерського руху в Україні напиши наступну інформацію
        <a href="https://t.me/volontery_in_ua_bot" target="_blank">сюди</a>:
        </p>
        <ul>
            <li>Контактні дані: це може бути телефон, телеграм, інстаграм, адреса.</li>
            <li>Чим можеш допомогти? Або чим ви займаєтесь, якщо ви організація</li>
            <li>Місто в якому ти знаходишся</li>
            <li>Контактна особа або назва організації</li>
            <li>Будь яка інша інформація, яку вважаєш необхідною</li>
        </ul>
        <p class="lead">
        Будь готовий, що з тобою можуть зконтактувати для уточнення та верифікації інформації.
        </p>
    </div>
</div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
