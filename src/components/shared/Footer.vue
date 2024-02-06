<template>
    <footer>
        <div class="footerTop">
            <div class="boxLogoSocial">
                <img src="../img/logo_infoDisney.png" alt="InfoDisney Logo">
                <p>
                    <a href="mailto:help@info-disney.com">help@info-disney.com</a> <br>
                    <span class="socialMedia">
                        <img src="../img/logos/Instagram.png" alt="Instagram Logo">
                        <img src="../img/logos/Twitter.png" alt="Twitter Logo">
                        <img src="../img/logos/YouTube.png" alt="YouTube Logo">
                        <img src="../img/logos/TikTok.png" alt="TikTok Logo">
                    </span>
                </p>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
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

<style>
.footerTop {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding-left: 1vw;
    padding-right: 1vw;
}

.boxLogoSocial {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.socialMedia {
    display: flex;
    justify-content: space-between;
}

.footerBottom {
    color: #fff;
    background-color: #FF5757;
    display: flex;
    justify-content: center;
}
</style>