import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-up-btn',
  templateUrl: './up-btn.component.html',
  styleUrls: ['./up-btn.component.scss']
})
export class UpBtnComponent implements OnInit {
  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(30),
    map(() => window.scrollY > 3),
    tap(() => console.log('sas'))
  );
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit() {}
}
