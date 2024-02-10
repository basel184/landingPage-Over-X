<template>
  <div class="onePageContant d-flex justify-content-center align-items-center">
    <div class="text-center">
      <img src="@/assets/img/error.svg" alt />
      <p class="tx-dark-blue font-weight-bold siz-20 mt-3">
        {{ $t('errorPage.sorry') }}
      </p>
      <p class="tx-dark-blue font-weight-bold siz-20">
        {{ $t('errorPage.message') }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$t('title.home'),
    }
  },
}
</script>

<style scoped>
.onePageContant {
  height: 100vh;
}
</style>
