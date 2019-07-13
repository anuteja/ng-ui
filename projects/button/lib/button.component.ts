import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <p>
      {{ text }}
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
