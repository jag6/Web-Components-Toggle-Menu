class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
			<p>Web Components</p>
		</footer>
		`;
	}
}

customElements.define('footer-component', Footer);