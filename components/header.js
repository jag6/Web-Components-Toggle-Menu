class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
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
		const mobileNav = this.querySelector('#mobile-nav');
		this.querySelector("#hamburger-icon").addEventListener('click', () => {
			mobileNav.style.height = "100%";
		});
		this.querySelector("#close-btn").addEventListener('click', () => {
			mobileNav.style.height = "0%";
		});
	}
}

customElements.define('header-component', Header);