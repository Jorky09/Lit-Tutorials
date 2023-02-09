import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <p>Hola mundo! De Mi llave.</p>
    `;
  }
}
