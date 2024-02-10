<template>
  <div>
  <div class="container mt-5">
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">{{ $t('check_out.Your_cart') }}</span>
        <span class="badge badge-secondary badge-pill">1</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">{{ $t('check_out.course') }}</h6>
          </div>
          <span class="text-muted">15</span>
        </li>
        <li v-if="discountApplied && e == false" class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0"> {{ $t('landingPage.sec11_PromoCode') }}</h6>
          </div>
          <span class="text-success">20%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span> {{ $t('check_out.total') }}</span>
          <strong>{{ coursePrice }}</strong>
        </li>
      </ul>

      <form class="card p-2" @submit.prevent="applyPromoCode">
        <div class="input-group">
          <input type="text" class="form-control"
          v-model="promoCode" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit"
             class="btn btn-secondary" @click="applyPromoCode">{{ $t('check_out.activation') }}</button>
          </div>
        </div>
        <p v-if="e" class="error-message">{{ errMsg }}</p>
        <p v-if="discountApplied && e == false">{{ $t('check_out.20%_discount') }}</p>
      </form>
    </div>
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3" style="color: black;">{{ $t('check_out.Enter_your_data') }}</h4>
      <form @submit.prevent="checkout" class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="name">{{ $t('check_out.name') }}</label>
            <input type="text" class="form-control"
            id="name" v-model="formData.name"
            placeholder="" value="" required>
            <div v-if="invalid_feedback && formData.name == ''" class="invalid-feedback">
              {{ $t('check_out.enter_name') }}
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="phone">{{ $t('check_out.phone_number') }}</label>
            <input  class="form-control"
            type="tel" id="phone"
            v-model="formData.phone"
            placeholder="" value="" required>
            <div v-if="invalid_feedback && formData.phone == ''" class="invalid-feedback">
              {{ $t('check_out.enter_phone') }}
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">{{ $t('check_out.email') }}</label>
          <input type="email"
          v-model="formData.email"
          class="form-control" id="email" placeholder="you@example.com" required>
          <div v-if="invalid_feedback && formData.email == ''" class="invalid-feedback">
            {{ $t('check_out.enter_email') }}
          </div>
        </div>

        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">{{ $t('check_out.Order_now') }}</button>
      </form>
    </div>
  </div>
</div>
</div>
</template>
<script >
const DISPLAY_MODE = {
  POPUP: 'POPUP', // or whatever value you want to assign
  INSIDE_PAGE: 'INSIDE_PAGE',
  SIDE_PAGE: 'SIDE_PAGE',
  SEPARATED: 'SEPARATED'
};
const merchantRefNum = Date.now()
export default {
  head() {
      return {
        earnings: true,
        title: this.$t('academy.checkout'),
        htmlAttrs: {
          lang: this.$i18n.locale,
          amp: true,
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('realestatePage.description2'),
          },
        ],
      }
  },
  data() {
    return {
      invalid_feedback: false,
      e: false,
      errMsg:'',
      formData: {
        name: '',
        email: '',
        phone: '',
      },
      coursePrice: 15, // تعديل سعر الكورس حسب الحاجة
      promoCode: '',
      discountApplied: false
    }
  },
  head() {
    return {
      script: [
        {
          src: "https://www.atfawry.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js",
          async: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js",
          async: true,
        },
      ],
    };
  },
  async mounted() {
  },
  methods:{
    applyPromoCode() {
      this.$axios
        .get(`/check-seller?code=${this.promoCode}`)
        .then((res) => {
        this.e = false
        this.coursePrice = 15 - 3; // خصم 20%
        this.discountApplied = true;
        })
        .catch((err) => {
          console.error(err)
          this.e = true
          this.errMsg = err.response.data.message
        })
    },
    checkout() {
      if(this.formData.name != '' &&  this.formData.phone != '' &&  this.formData.email != '' ) {
      const configuration = {
        // locale: 'en', //default en
        locale: 'ar',
        mode: DISPLAY_MODE.POPUP, // required, allowed values [POPUP, INSIDE_PAGE, SIDE_PAGE , SEPARATED]
      }
     // document.getElementById('overFawry').style.display = 'block'
      FawryPay.checkout(this.buildChargeRequest(), configuration)
      } else {
        this.invalid_feedback = true
      }
    },
    buildChargeRequest() {
      this.$axios.$post('/Fawry_Payment', {
        merchantRefNumber: merchantRefNum,
        Price: this.coursePrice,
        customerEmail: this.formData.email,
        customerMobile: this.formData.phone,
        type: 'courses',
        type_id: 15,
      })
      const chargeRequest = {
        merchantCode: 'siYxylRjSPwp6hU2uLkDRg==',
        merchantRefNum,      
        customerMobile: this.formData.phone,
        customerEmail: this.formData.email,
        customerProfileId: 11,
        chargeItems: [
          {
            itemId: 15,
            description: `اشتراك في الكورس`,
            price: this.coursePrice,
            quantity: 1,
          },
        ],
        returnUrl: `${process.env.TEMP_PAGE}?merchantRefNumber=${merchantRefNum}&promoCode=${this.promoCode}&name=${this.formData.email}&phone=${this.formData.phone}&email=${this.formData.name}&price=${this.coursePrice}`,
        authCaptureModePayment: false,
        secKey: '62343ac8-cfd8-451f-9bc8-4a72dc287570',
      }
      chargeRequest.signature = this.signRequest(chargeRequest)
      return chargeRequest
    },
    signRequest(chargeRequest) {
      let signString =
        chargeRequest['merchantCode'] + chargeRequest.merchantRefNum
      signString +=
        chargeRequest.customerProfileId != null
          ? chargeRequest.customerProfileId
          : ''
      signString +=
        chargeRequest.returnUrl != null ? chargeRequest.returnUrl : ''
      let items = chargeRequest.chargeItems.sort(function (x, y) {
        let a = x.itemId.toUpperCase(),
          b = y.itemId.toUpperCase()
        return a == b ? 0 : a > b ? 1 : -1
      })
      items.forEach((item) => {
        signString +=
          item.itemId + '' + item.quantity + '' + item.price.toFixed(2)
      })
      signString += chargeRequest.secKey
      return sha256(signString)
    },
  }
}
</script>
<style scoped>
.invalid-feedback{
  display: block !important;;
}
.error-message {
  color: red;
  margin-top: 10px;
}

label {
  font-weight: bold;
  color: black;
}

button {
  background-color: #9dd153;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
}

button:hover {
  background-color: #2a2a5f;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  background-color: #9dd153;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #2a2a5f;
}
</style>