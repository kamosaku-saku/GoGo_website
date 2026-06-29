(function () {
	const navLinks = [
		{ href: "index.html",  en: "Home",                    jp: "ホーム"                  },
		{ href: "about.html",  en: "About exchange in UTokyo", jp: "東大での交換留学について" },
		{ href: "events.html", en: "Events",                   jp: "イベント"                },
		{ href: "sns.html",    en: "SNS",                      jp: "SNS"                    },
	];

	const path = window.location.pathname;

	function isCurrentPage(href) {
		if (href === "index.html") {
			return path.endsWith("index.html") || path.endsWith("/");
		}
		return path.endsWith(href);
	}

	const listItems = navLinks.map(function (link) {
		const current = isCurrentPage(link.href) ? ' aria-current="page"' : "";
		return `<li><a href="${link.href}"${current} data-en="${link.en}" data-jp="${link.jp}">${link.en}</a></li>`;
	}).join("\n\t\t\t\t");

	const header = document.querySelector("header.site-header");
	if (!header) return;

	header.innerHTML = `
		<div class="site-branding">
			<a href="index.html">
				<img src="images/logo.png" data-en-src="images/logo.png" data-jp-src="images/logo_jp.png" alt="Todai Study Abroad GoGo logo">
			</a>
		</div>

		<nav class="primary-navigation" aria-label="Main navigation">
			<button class="menu-toggle" type="button" aria-label="Open navigation menu" data-en="Menu" data-jp="メニュー">
				Menu
			</button>

			<ul class="nav-list">
				${listItems}
			</ul>

			<div class="language-switcher">
				<button class="language-button active-language" data-lang="jp">JP</button>
				<button class="language-button" data-lang="en">EN</button>
			</div>
		</nav>
	`;
})();
