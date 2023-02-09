import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
// TODO: Add a reactive property
  @property()
  message: string = 'Hola de nuevo.';

  render() {
    return html`
      <p>TODO: ${this.message}</p>
    `;
  }
}