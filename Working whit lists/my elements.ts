import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js'
// TODO: import repeat directive.
import {repeat} from 'lit/directives/repeat.js';
    
@customElement('my-element')
class MyElement extends LitElement {
  @state()
  tasks = [
    { id: 'a', label: 'Learn Lit'},
    { id: 'b', label: 'Feed the cat'},
    { id: 'c', label: 'Go for a walk'},
    { id: 'd', label: 'Take a nap'},
  ]

  render() {
    return html`
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <ul>
        <!-- TODO: Replace below using repeat directive. -->
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.label} (${task.id})</label>
            </li>
          `
        )}
        ${map(
          this.tasks,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `
        )}
      </ul>
    `;
  }

  private _sort(dir: number) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }
}
