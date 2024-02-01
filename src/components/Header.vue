<template>
    <header>
        <div class="headerTop">
            <p class="headerLinks">
                Favorites &nbsp;
                About Us
            </p>
            <img src="../img/logo_infoDisney.png" alt="InfoDisney Logo">
            <p>
                LogIn
                SignUp
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

<style>
.headerTop,
.headerBottom {
    color: #000;
    display: flex;
    justify-content: space-between;
    padding-left: 1vw;
    padding-right: 1vw;
}

.headerTop {
    background-color: #fff;
    align-items: center;
    min-height: 10vh;
}

.headerBottom {
    background-color: #FF5757;
    min-height: 5vh;
    align-items: center;
}

/* Button Switch for Dark/Light Mode */
.btnSwitch {
    display: inline-block;
    width: 55px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
    position: relative;
}

#__btnSwitch~.btnSwitch {
    background: #fff;
    transition: all ease 0.6s;
}

.btnSwitch::after {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    background: #000;
    border-radius: 100px;
    top: 4px;
    left: 5px;
    transition: all ease 0.6s;
}

#__btnSwitch:checked~.btnSwitch::after {
    left: 28px;
    background: #fff;
    transition: all ease 0.6s;
}

#__btnSwitch:checked~.btnSwitch {
    background: #000;
    transition: all ease 0.6s;
}

#__btnSwitch {
    display: none;
}
/* End of Button Switch */
</style>