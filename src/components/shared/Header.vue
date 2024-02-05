<template>
    <header>
        <div class="headerTop">
            <span>
                <router-link to="favorites" class="headerLinks">FAVORITES</router-link>
                <router-link to="about-us" class="headerLinks">ABOUT US</router-link>
            </span>
            <router-link to="/"><img src="../img/logo_infoDisney.png" alt="InfoDisney Logo"></router-link>
            <span>
                <router-link to="logIn" class="btnLogIn">LOG IN</router-link>
                <router-link to="signUp" class="btnSignUp">SIGN UP</router-link>
            </span>

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
.headerTop,
.headerBottom {
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

.headerLinks {
    color: #FF5757;
    text-decoration: none;
}

.btnLogIn,
.btnSignUp {
    padding: 10px 20px;
    margin-right: 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btnLogIn {
    background-color: #FFAFAF;
}

.btnSignUp {
    background-color: #FF5757;
}

.btnLogIn:hover {
    background-color: #FFCFCF;
}

.btnSignUp:hover {
    background-color: #FF7777;
}

.btnLogIn:focus,
.btnSignUp:focus {
    outline: none;
}

.btnLogIn:active,
.btnSignUp:active {
    transform: translateY(1px);
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

/* End of Button Switch */</style>