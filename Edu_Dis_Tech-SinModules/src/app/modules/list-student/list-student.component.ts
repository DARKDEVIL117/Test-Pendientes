import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListStudentComponent {
  value1: boolean = true;
  value2: boolean = false;

  valor1() {
    console.log(this.value1);
  }

  valor2() {
    console.log(this.value2);
  }

  Config: any = {
    slidesPerView: 4,
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 1
      }
    }
  }
}