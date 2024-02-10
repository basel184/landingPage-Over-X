<template>
  <div id="app" :dir="$dir()" :class="$dir()" class="text-capitalize">
    <noInternet v-if="$nuxt.isOffline" />
    <nuxt style="min-height: 100vh" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Tajawal', sans-serif;
  direction: rtl;
  text-align: right;
  background-color: #f6f6f6;
  overflow-x: hidden;
}
#app.ltr {
  font-family: 'Outfit', sans-serif;
  direction: ltr;
  text-align: left;
}

/* reest */
ul {
  padding: 0;
  margin: 0;
}
.btn {
  box-shadow: none;
  border: 0;
}
.btn:focus {
  box-shadow: none;
}

/*Steps Form*/
.steps {
  width: 147px;
  .line {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 2px;
    background-color: rgba(204, 204, 204, 0.541);
  }
  .step-num {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
    border: 2px solid #9dd153;
    &.done {
      background-color: #9dd153;
    }
    &.active {
      width: 30px;
      height: 30px;
      color: #fff;
      background-color: #9dd153;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>
