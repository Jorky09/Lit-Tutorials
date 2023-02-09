import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
// TODO: import map directive.

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime'])

  render() {
    return html`
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}