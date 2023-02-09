import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  groceries = ['tea', 'milk', 'honey', 'chocolate'];

  removeItem(item: string) {
    const indexToRemove = this.groceries.indexOf(item);
    this.groceries =
        this.groceries.filter((_, i) => i !== indexToRemove);
  }

  render() {
    return html`
      ${map(this.groceries, (item) =>
        html`<button @click=${() => this.removeItem(item)}>x</button> ${item}<br>`
      )}
    `;
  }
}