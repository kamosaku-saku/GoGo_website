(function () {
	const footer = document.querySelector("footer.site-footer");

	if (!footer) {
		return;
	}

	footer.innerHTML = `
		<div class="footer-left">
			<div class="footer-branding">
				<img
					src="images/logo.png"
					data-en-src="images/logo.png"
					data-jp-src="images/logo_jp.png"
					alt="Todai Study Abroad GoGo logo"
				>

				<p
					data-en="Todai Study Abroad GoGo"
					data-jp="東大留学GoGo"
				>
					Todai Study Abroad GoGo
				</p>
			</div>

			<p
				class="footer-email"
				data-en="contact: ut.ryugakugogo2023@gmail.com"
				data-jp="お問い合わせ: ut.ryugakugogo2023@gmail.com"
			>
				contact: ut.ryugakugogo2023@gmail.com
			</p>
		</div>

		<div class="footer-social">
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSdWifzuKk-0l-K4alhIVgGrR2_svNSfy4mpbCFQKbQre_RAtA/viewform"
				target="_blank"
				rel="noopener"
				aria-label="Join our Discord through Google Form"
			>
				<img src="images/discord-icon.png" alt="Discord">
			</a>

			<a
				href="https://www.instagram.com/utokyo_ryugaku_gogo"
				target="_blank"
				rel="noopener"
				aria-label="Follow us on Instagram"
			>
				<img src="images/instagram-icon.jpg" alt="Instagram">
			</a>

			<a
				href="https://note.com/ut_ryugaku_gogo"
				target="_blank"
				rel="noopener"
				aria-label="Read our note articles"
			>
				<img src="images/note-icon.png" alt="note">
			</a>
		</div>

		<nav class="footer-navigation" aria-label="Footer navigation">
			<ul>
				<li>
					<a
						href="index.html"
						data-en="Home"
						data-jp="ホーム"
					>
						Home
					</a>
				</li>

				<li>
					<a
						href="about.html"
						data-en="Studying Abroad from UTokyo"
						data-jp="東大からの留学について"
					>
						Studying Abroad from UTokyo
					</a>
				</li>

				<li>
					<a
						href="events.html"
						data-en="Events"
						data-jp="イベント"
					>
						Events
					</a>
				</li>

				<li>
					<a
						href="sns.html"
						data-en="SNS"
						data-jp="SNS"
					>
						SNS
					</a>
				</li>
			</ul>
		</nav>
	`;
})();
