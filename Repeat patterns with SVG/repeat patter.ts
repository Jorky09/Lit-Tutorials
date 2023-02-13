import type { SVGTemplateResult } from "lit";

import { LitElement, html, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const createElement = (chars: string): SVGTemplateResult => svg`
  <text
    id="chars"
    dominant-basline="hanging"
    font-family="monospace"
    font-size="24px">
    ${chars}
  </text>
`;

const createMotif = (
  numPrints: number,
  offset: number = 0,
): SVGTemplateResult => {
  const rotation = 360 / numPrints;

  const prints = [];
  let currRotation = offset;
  for (let index = 0; index < numPrints; index++) {
    currRotation += rotation;
    prints.push(svg`
      <use
        href="#chars"
        transform="rotate(${currRotation}, 0, 0)">
      </use>
    `);
  }

  return svg`<g transform="translate(50, 50)">${prints}</g>`;
};

@customElement('repeat-pattern')
export class RepeatPattern extends LitElement {
  @property({type: String}) chars = "obo";
  @property({type: Number, attribute: "num-prints"}) numPrints = 7;
  @property({
    type: Number,
    attribute: "rotation-offset",
  }) rotationOffset = 0;

  render() {
    return html`
      <svg height="100%" width="100%">
        <defs>
          ${createElement(this.chars)}
        </defs>
        ${createMotif(
          this.numPrints,
          this.rotationOffset,
        )}
      </svg>
    `;
  }
}