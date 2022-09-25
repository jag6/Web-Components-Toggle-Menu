customElements.define('header-component', class extends HTMLElement {
	connectedCallback() {
		//set shadow to open in order to perform events
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<link href="components/header.css" rel="stylesheet" type="text/css" />
			<header>
				<div class="header-inner">
					<nav class="nav">
						<ul>
							<li><a>HI</a></li>
						</ul>	
					</nav>
				</div>
				<div id="hamburger-icon" class="hamburger-icon">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="nav-overlay">
					<nav id="mobile-nav" class="mobile-nav">
						<span href="javascript:void(0)" id="close-btn" class="close-btn">&times;</span>
						<ul>
							<li><a>HI</a></li>
						<ul>
					</nav>
				</div>
			</header>
		`;
		//toggle menu
		const mobileNav = this.shadowRoot.querySelector('#mobile-nav');
		this.shadowRoot.querySelector("#hamburger-icon").addEventListener('click', () => {
			mobileNav.style.height = "100%";
		});
		this.shadowRoot.querySelector("#close-btn").addEventListener('click', () => {
			mobileNav.style.height = "0%";
		});
	}
});