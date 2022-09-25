const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <link href="components/footer.css" rel="stylesheet" type="text/css" />
    <footer>
        <p>Web Components</p>
    </footer>
`;

class Footer extends HTMLElement {
	connectedCallback() {
		//set shadow to closed since no events will be performed on it
    	const shadowRoot = this.attachShadow({ mode: 'closed' });
    	shadowRoot.appendChild(footerTemplate.content);
	}
}

customElements.define('footer-component', Footer);