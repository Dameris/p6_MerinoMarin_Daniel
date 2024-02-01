<template>
    <header>
        <div class="headerTop">
            <p class="headerLinks">
                FAVORITES
                ABOUT US
            </p>
            <img src="../img/logo_infoDisney.png" alt="InfoDisney Logo">
            <p>
                LOG IN
                SIGN UP
            </p>
        </div>
        <div class="headerBottom">
            <input type="checkbox" id="__btnSwitch">
            <label for="__btnSwitch" class="btnSwitch"></label>
            <p>Search</p>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
@import url("../assets/css/source/layout/_header.scss");
</style>