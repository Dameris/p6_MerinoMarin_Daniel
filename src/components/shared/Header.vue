<template>
    <header>
        <div class="headerTop">
            <span>
                <router-link to="favorites" class="headerLinks">FAVORITES</router-link>
                <router-link to="about-us" class="headerLinks">ABOUT US</router-link>
            </span>
            <router-link to="/"><img src="../img/logo_infoDisney.png" alt="InfoDisney Logo"
                    class="headerLogo"></router-link>
            <span>
                <router-link to="logIn" class="btnLogIn">LOG IN</router-link>
                <router-link to="signUp" class="btnSignUp">SIGN UP</router-link>
            </span>
        </div>
        <div class="headerBottom">
            <input type="checkbox" id="__btnSwitch">
            <label for="__btnSwitch" class="btnSwitch"></label>
            <input type="search" name="search" class="searchInput" placeholder="SEARCH" spellcheck>
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
    margin-right: 0.5vw;
}

.headerLinks:hover {
    color: #FFAFAF;
}

.headerLinks:focus {
    outline: none;
}

/* Animation for header logo */
.headerLogo {
    -webkit-animation: text-flicker-in-glow 4s linear both;
    animation: text-flicker-in-glow 4s linear both;
}

@-webkit-keyframes text-flicker-in-glow {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0;
        text-shadow: none;
    }

    10.1% {
        opacity: 1;
        text-shadow: none;
    }

    10.2% {
        opacity: 0;
        text-shadow: none;
    }

    20% {
        opacity: 0;
        text-shadow: none;
    }

    20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }

    20.6% {
        opacity: 0;
        text-shadow: none;
    }

    30% {
        opacity: 0;
        text-shadow: none;
    }

    30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    30.6% {
        opacity: 0;
        text-shadow: none;
    }

    45% {
        opacity: 0;
        text-shadow: none;
    }

    45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    55.1% {
        opacity: 0;
        text-shadow: none;
    }

    57% {
        opacity: 0;
        text-shadow: none;
    }

    57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }

    60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }

    60.1% {
        opacity: 0;
        text-shadow: none;
    }

    65% {
        opacity: 0;
        text-shadow: none;
    }

    65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    75.1% {
        opacity: 0;
        text-shadow: none;
    }

    77% {
        opacity: 0;
        text-shadow: none;
    }

    77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    85.1% {
        opacity: 0;
        text-shadow: none;
    }

    86% {
        opacity: 0;
        text-shadow: none;
    }

    86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }
}

@keyframes text-flicker-in-glow {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0;
        text-shadow: none;
    }

    10.1% {
        opacity: 1;
        text-shadow: none;
    }

    10.2% {
        opacity: 0;
        text-shadow: none;
    }

    20% {
        opacity: 0;
        text-shadow: none;
    }

    20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }

    20.6% {
        opacity: 0;
        text-shadow: none;
    }

    30% {
        opacity: 0;
        text-shadow: none;
    }

    30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    30.6% {
        opacity: 0;
        text-shadow: none;
    }

    45% {
        opacity: 0;
        text-shadow: none;
    }

    45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
    }

    55.1% {
        opacity: 0;
        text-shadow: none;
    }

    57% {
        opacity: 0;
        text-shadow: none;
    }

    57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }

    60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
    }

    60.1% {
        opacity: 0;
        text-shadow: none;
    }

    65% {
        opacity: 0;
        text-shadow: none;
    }

    65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    75.1% {
        opacity: 0;
        text-shadow: none;
    }

    77% {
        opacity: 0;
        text-shadow: none;
    }

    77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    85.1% {
        opacity: 0;
        text-shadow: none;
    }

    86% {
        opacity: 0;
        text-shadow: none;
    }

    86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }

    100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
    }
}

/* Emd pf animation for header logo */

.btnLogIn,
.btnSignUp {
    padding: 1vh 1vw;
    margin-right: 0.5vw;
    color: #fff;
    border: none;
    border-radius: 0.3vw;
    cursor: pointer;
    text-decoration: none;
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
.btnSignUp:active,
.headerLinks:active {
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

/* End of Button Switch */
</style>