import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-text',
  template: `
  <div>
      {{ searchText }}
  </div>
  `
})
export class SearchTextComponent {
  @Input() searchText: string;

  constructor() { }

}
