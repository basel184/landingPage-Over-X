<template>
    <div class="jops">
      <div class="container-fluid">
        <div class="row pt-3">
          <div class="col-md-3 p-0 rounded"></div>
          <div class="col-md-9">
            <div class="product-section">
              <div
                class="product-heading w-md-90 h4 font-weight-bold d-flex justify-content-between align-items-center"
              >
                <div class="p-1 padding-S-30 mb-1">
                  {{ $t('contact-us.title') }}
                </div>
              </div>
              <div class="cardStyle">
                <div class="card" style="width: 50%">
                  <div style="color: #000" v-html="record.about_us" class="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        record: {},
      }
    },
  
    head() {
      return {
        title: this.$t('contact-us.title'),
      }
    },
  
    async created() {
      await this.getSetting()
    },
  
    methods: {
      async getSetting() {
        try {
          const RESPONSE = await this.$axios.$get(
            '/brokerage-settings?about_us=1'
          )
          this.record = RESPONSE.record
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .cardStyle {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  </style>