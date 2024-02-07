<template>
	<footer>
		<div class="footer__top">
			<div class="box__logo__social">
				<img
					src="../img/logo_infoDisney.png"
					alt="InfoDisney Logo"
				/>
				<p>
					<br />
					<a href="mailto:help@info-disney.com">help@info-disney.com</a>
					<span class="social__media">
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
			<div class="info__boxes">
				<h5>BORING STUFF</h5>
				<p class="content__info">
					PRIVACY POLICY <br />
					TERMS
				</p>
			</div>
			<div class="info__boxes">
				<h5>WEB SITE</h5>
				<p class="content__info">
					ABOUT US <br />
					HOME
				</p>
			</div>
			<div class="info__boxes">
				<h5>SUPPORT</h5>
				<p class="content__info">
					<router-link to="contact">CONTACT</router-link> <br />
					FAQ
				</p>
			</div>
		</div>
		<div class="footer__bottom">
			<h4>INFO DISNEY</h4>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style>
	.footer__top {
		display: flex;
		justify-content: space-between;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-top: 2vw;
		padding-bottom: 2vw;
		border-top: 0.1rem solid #ff5757;
		background-color: #fff;
	}

	.box__logo__social {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.social__media {
		display: flex;
		justify-content: space-between;
	}

	.info__boxes {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		color: #ff5757;
		text-align: center;
	}

	h6 {
		font-weight: 900;
	}

	.content__info {
		font-size: x-small;
	}

	a {
		color: #ff5757;
		text-decoration: none;
	}

	.footer__bottom {
		display: flex;
		justify-content: center;
		color: #fff;
		background-color: #ff5757;
	}
</style>
