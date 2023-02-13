import type { SVGTemplateResult } from "lit";

import { LitElement, html, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const createElement = (chars: string): SVGTemplateResult => svg`
  <text
    dominant-baseline="hanging"
    font-family="monospace"
    font-size="24px">
    ${chars}
  </text>
`;

@customElement('repeat-pattern')
export class RepeatPattern extends LitElement {    
  @property({type: String}) chars = "hola mundo";
  
  render() {
    return html`
      <svg height="100%" width="100%">
        ${createElement(this.chars)}
      </svg>
    `;
  }
}