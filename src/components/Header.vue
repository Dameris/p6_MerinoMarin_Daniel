<template>
    <header>
        <div class="headerTop">
            <p class="headerLinks">
                Favorites &nbsp;
                About Us
            </p>
            <img src="p6_MerinoMarin_Daniel/src/img/logo_infoDisney.png" alt="InfoDisney Logo">
            <p>
                LogIn
                SignUp
            </p>
        </div>
        <div class="headerBottom">
            <p>Dark</p>
            <p>Search</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style>
    .headerTop,
    .headerBottom {
        color: #FF5757;
        display: flex;
        justify-content: space-between;
    }

    .headerTop {
        background-color: #fff;
    }

    .headerBottom {
        background-color: #000;
    }

    .headerLinks {
        padding-left: 1vw;
    }

    
</style>