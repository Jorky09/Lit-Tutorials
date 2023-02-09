import {LitElement, html} from 'lit';
import {customElement, state, query} from 'lit/decorators.js';

@customElement('todo-list')
export class ToDoList extends LitElement {
  @state()
  private _listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false }
  ];

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
         <!-- TODO: Render list items. -->
         ${this._listItems.map((item) =>
           html`<li>${item.text}</li>`
             )}
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }

  // TODO: Add click handler.
  @query('#newitem')
  input!: HTMLInputElement;
  
  addToDo() {
    this._listItems = [...this._listItems,
      {text: this.input.value, completed: false}];
    this.input.value = '';
  }
}