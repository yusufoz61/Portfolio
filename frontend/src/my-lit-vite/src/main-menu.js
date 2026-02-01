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
        
        h1 {
            color: var(--text);
            font-family: var(--font-main), sans-serif; 
        }
    `;

    render() {
        return html`
            <body>
                <h1>Hello Lit!</h1>
            </body>
           `;
    }
}

customElements.define('main-menu', MainMenu);
