import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
// TODO: Import directives
import {range} from 'lit/directives/range.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  static styles = css`
    /* playground-fold */
    :host {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
    /* playground-fold-end */

  `;

  render() {
    return html`
      <p>Let's play a game!</p>
      <div id="board">
        <!-- TODO: Place squares here. -->
        ${map(range(8), (row) => map(range(8), (col) => html`
          <div class="${getColor(row, col)}">${getLabel(row, col)}</div>
        `))}
      </div>
    `;
  }
}

const getColor = (row: number, col: number) =>
  (row + col) % 2 ? 'white' : 'black';
const getLabel = (row: number, col: number) =>
  `${String.fromCharCode(65 + col)}${8 - row}`;