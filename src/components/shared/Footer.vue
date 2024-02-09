<template>
	<footer>
		<!-- Sección superior del pie de página -->
		<div class="footerTop">
			<div class="footer__logoSocial">
				<img
					src="../img/logo_infoDisney.png"
					alt="InfoDisney Logo"
				/>
				<p>
					<a href="mailto:help@info-disney.com">help@info-disney.com</a>
					<span class="footer__socialMedia">
						<img
							src="../img/logos/Instagram.png"
							alt="Instagram Logo"
						/>
						<img
							src="../img/logos/Twitter.png"
							alt="Twitter Logo"
						/>
						<img
							src="../img/logos/YouTube.png"
							alt="YouTube Logo"
						/>
						<img
							src="../img/logos/TikTok.png"
							alt="TikTok Logo"
						/>
					</span>
				</p>
			</div>
			<div class="footer__infoBox">
				<h5>BORING STUFF</h5>
				<p class="footer__infoContent">
					PRIVACY POLICY <br />
					TERMS
				</p>
			</div>
			<div class="footer__infoBox">
				<h5>WEB SITE</h5>
				<p class="footer__infoContent">
					ABOUT US <br />
					HOME
				</p>
			</div>
			<div class="footer__infoBox">
				<h5>SUPPORT</h5>
				<p class="footer__infoContent">
					<router-link to="contact">CONTACT</router-link> <br />
					FAQ
				</p>
			</div>
		</div>
		<!-- Sección inferior del pie de página -->
		<div class="footerBottom">
			<h4>INFO DISNEY</h4>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>
	.footerTop {
		display: flex;
		justify-content: space-between;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-top: 2vw;
		padding-bottom: 2vw;
		border-top: 0.1rem solid #ff5757;
		background-color: #fff;
	}

	.footer__logoSocial {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.footer__socialMedia {
		display: flex;
		justify-content: space-between;
	}

	.footer__socialMedia img {
		width: 0.8rem;
	}

	.footer__infoBox {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		color: #ff5757;
		text-align: center;
	}

	.footer__infoContent {
		font-size: x-small;
	}

	a {
		color: #ff5757;
		text-decoration: none;
	}

	.footerBottom {
		display: flex;
		justify-content: center;
		color: #fff;
		background-color: #ff5757;
	}

	/* Media query */
	@media (max-width: 550px) {
		.footerTop {
			flex-direction: column;
			padding-top: 1em;
		}

		.footer__logoSocial img {
			width: 10em;
		}

		.footer__socialMedia {
			display: flex;
			justify-content: space-between;
		}

		.footer__socialMedia img {
			width: 0.8rem;
		}

		.footer__infoBox {
			margin-top: 1em;
		}

		.footerBottom {
			font-size: small;
		}
	}
	/* End of media query */
</style>
