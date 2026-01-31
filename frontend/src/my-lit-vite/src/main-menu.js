import { LitElement, html, css } from 'lit';

export class MainMenu extends LitElement {

    static get properties() {
        return {
            title: { type: String },
        }
    }

    constructor() {
        super();
    }


    static styles = css`
    `;

    render() {
        return html`<h1>Hello Lit!</h1>`;
    }
}

customElements.define('main-menu', MainMenu);
