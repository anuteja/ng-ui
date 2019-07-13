import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  styles: [],
  template: `
    <p>
      {{ text }}
    </p>
  `
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
