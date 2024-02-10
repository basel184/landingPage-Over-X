<template>
  <header id="header" :class="fixed ? 'fixed-nav' : 'normal'" class="bg-white">
    <div class="container-fluid">
      <nav class="d-flex">
        <div class="logo">
          <nuxt-link exact active-class="active" :to="localePath('/')">
            <!-- <img src="../assets/img/main-logo.svg" /> -->
            <img src="@/assets/img/logo_acdemy.svg" class="main_logo" />
          </nuxt-link>
        </div>

        <ul class="list-unstyledd linksbar align-items-center" id="linksbar">
          <li class="close-meanu cp d-none text-E p-5" @click="closeSideBar">
            <i class="fas fa-times fa-2x text-wight"></i>
          </li>

          <li @click="closeSideBar">
            <nuxt-link :to="localePath('/comming-soon')">
              {{ $t('academy.Courses') }}
            </nuxt-link>
          </li>
          <li @click="closeSideBar">
            <nuxt-link :to="localePath('/')">
              {{ $t('academy.marketing_skills') }}
            </nuxt-link>
          </li>
          <li @click="closeSideBar">
            <nuxt-link :to="localePath('/contact-us')">
              {{ $t('academy.Connect_us') }}
            </nuxt-link>
          </li>

          <li class="language">
            <div class="dropdown">
              <button
                class="n-arrow btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="d-flex" v-if="$i18n.locale === 'ar'">
                  <span style="color: #9dd153;">العربيه</span>
                  <span>
                    <img
                      src="@/assets/img/egypt.png"
                      class="flag img-cover mx-2 margin-S-5"
                    />
                  </span>
                </div>
                <div class="d-flex" v-else>
                  <span style="color: #9dd153;">English</span>
                  <span>
                    <img
                      src="@/assets/img/flag.png"
                      class="flag img-cover mx-2 margin-S-5"
                    />
                  </span>
                </div>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" 
              style="background: #9dd153;">
                <li @click="closeSideBar">
                  <nuxt-link style="color: #fff;"
                    :to="switchLocalePath('ar')"
                    class="dropdown-item cp text-new-blue"
                  >
                    العربيه
                  </nuxt-link>
                </li>
                <li @click="closeSideBar">
                  <nuxt-link style="color: #fff;"
                    class="dropdown-item cp text-new-blue"
                    :to="switchLocalePath('en')">
                    English
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul
          class="list-unstyledd user-action position-relative d-flex align-items-center"
        >
          <li class="open-meanu cp mr-2 ml-2">
            <div class="d-none meanu-button" @click="openSideBar">
              <i class="fas fa-bars siz-20"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      ar: true,
      fixed: false,
    }
  },

  beforeMount() {
    if (this.$i18n.locale === 'ar') this.ar = true
    else this.ar = false
  },

  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById('header')
      if (window.scrollY > navBar.offsetTop + 200) this.fixed = true
      else this.fixed = false
    }
  },

  methods: {
    toggleNavClass() {
      if (this.fixed == false) return 'nav'
      else return 'fixed-nav'
    },
    openSideBar() {
      document.getElementById('linksbar').classList.add('opening')
    },
    closeSideBar() {
      document.getElementById('linksbar').classList.remove('opening')
    },
  },
  time(date) {
    return this.$moment(date).fromNow()
  },
}
</script>

<style lang="scss" scoped>
header {
  box-shadow: 1px 1px 5px #ccc;
  transition: all 0.5s ease-in;
  width: 100vw;

  z-index: 20;

  &.fixed-nav {
    transition: all 0.5s ease-in;

    position: fixed;
    top: 0;
    left: 0;
  }
}

nav {
  align-items: center;
  justify-content: space-between;
}

#app.rtl {
  .button_en{
    display: none;
  }
  .noifay .tx-dark {
    display: block !important;
  }

  // .dropdown-menu li div {
  //   display: flex !important;
  // }

  .custom-font-size {
    font-size: 17px;
  }
}

#app.ltr {
  .button_ar{
    display: none;
  }
  .custom-font-size {
    font-size: 13px;
  }
}

#app.rtl {
  .handelDropDownMenu {
    display: flex !important;
    margin: auto;
  }

  .myMargin {
    margin-right: 5px;
  }
}

.navbar-dropdown-links {
  top: -7px !important;
  right: 0 !important;
  min-width: 16rem;

  li {
    margin: 20px 0 !important;

    &:first-child {
      margin-top: 10px !important;
    }

    img {
      margin-inline-end: 10px;
    }
  }
}

.logo {
  width: 6%;
}

.profile-setting {
  display: flex;
}

.profile-img-dropdown {
  top: 9px !important;
}

.linksbar {
  display: flex;
  justify-content: space-between;

  li {
    margin-inline-start: 75px;

    a {
      color: #262262;

      font-weight: 400;
      transition: all 0.4s ease-in-out;

      &.active {
        color: #000;

        font-weight: 600;
      }

      &:hover {
        color: #9dd153;
      }
    }
  }
}

.profile-setting {
  justify-content: space-between;
  align-items: center;

  .balance {
    justify-content: center;
    align-items: center;
    display: flex;

    a {
      border-radius: 10px;
      padding: 7px 2px;
      font-weight: bold;
      font-size: 12px;
    }
  }

  .language {
    .dropdown-menu {
      min-width: 8rem;
      top: -2px !important;
      right: 0px !important;
    }

    span {
      img {
        margin-inline-start: 9px;
      }
    }
  }

  .link-icone {
    border: 1px solid #ccc;
    display: block;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fav {
    margin: 0 10px;
  }

  .noifay {
    .dropdown-toggle {
      .number-alert {
        justify-content: center;
        align-items: center;
        display: flex;
        color: #fff;
        font-size: 12px;
        width: 16px;
        border-radius: 50%;
        height: 16px;
        background-color: #ff0000;
        top: -3px;
        right: -2px;
        font-weight: bold;
      }
    }
  }

  .nav-profile-pic {
    width: 41px;
    border-radius: 50%;
    height: 40px;
  }
}

#app.rtl {
  .giltch-padding {
    padding-right: 5px;
    padding-left: 5px;
  }
}

#app.ltr {
  .logo {
    width: 8%;
  }

  .noifay {
    .dropdown-toggle {
      .number-alert {
        right: inherit;
        left: -2px;
      }
    }
  }

  .navbar-dropdown-links {
    left: 0 !important;
    right: inherit !important;
  }

  .language {
    .dropdown-menu {
      right: inherit !important;
      left: 0px !important;
    }
  }
}

@media (max-width: 1199.98px) {
  .dropdown-links .dropdown {
    display: none !important;
  }

  .insted-drop {
    display: block !important;
  }

  .meanu-button,
  .close-meanu {
    display: block !important;
  }

  .linksbar {
    background: #222;
    width: 100vw;
    height: 100%;
    color: #fff;
    top: -100%;
    left: 0;
    right: 0;
    z-index: 100;
    display: block !important;
    position: fixed;
    transition: all 0.3s ease-in-out;

    &.opening {
      top: 0;

      li {
        margin-top: 20px;
        display: block;

        a {
          color: #fff;
          // color: #000 !important;
          font-size: 18px !important;
          font-weight: normal !important;
          margin-inline-start: 20px;

          &.active {
            color: #9dd153 !important;
            // color: #000 !important;
          }
        }
      }
    }
  }
}

#app.ltr {
  .linksbar li {
    margin-inline-start: 75px;
    font-size: 13px;
  }
}

@media (max-width: 767.89px) {
  .logo {
    img {
      width: 90px;
    }
  }

  .profile-setting .balance {
    display: none;
  }

  .profile-img-dropdown {
    top: -6px !important;
  }
}

.notfiy {
  display: flex;
  justify-content: center;
  color: #9dd153;

  &:hover {
    color: #9dd153;
    // background-color: gray;
    background-color: #bbbbbb;
  }
}

.main_logo {
  width: 90px;
  height: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.nuxt-link-exact-active {
  font-weight: 600 !important;
}
</style>
