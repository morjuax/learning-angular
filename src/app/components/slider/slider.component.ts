import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() titleSlider: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
