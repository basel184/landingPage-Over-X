<template>
  <div class='content'>
    <i v-if="value == 'PAID'" class="fa-regular fa-circle-check symbol_S"></i>
    <i v-if="value != 'PAID'" class="fa-regular fa-circle-xmark symbol"></i>
    <div class='title pt-5'>{{ value == 'PAID' ? $t('fawry.paid') : $t('fawry.un_paid') }}</div>
    <div v-if="value == 'PAID'" class='text'>{{ $t('fawry.sent_your_email') }}</div>
  </div>
  </template>
  <script>
  export default {
    head() {
      return {
        earnings: true,
        title: this.$t('academy.payment_process'),
      }
    },
    data() {
      return {
        value: null,
      }
    },
    async created() {
      await this.check()
  },
  
    methods: {
      async check() {
        const  merchantRefNumber  = this.$route.query.merchantRefNumber
        const  promoCodee  = this.$route.query.promoCode
        const  name  = this.$route.query.name
        const  phone  = this.$route.query.phone
        const  email  = this.$route.query.email
        const  price  = this.$route.query.price
        try {
          const response = await this.$axios.$get(
            `/checkPaid?merchantRefNumber=${merchantRefNumber}`
          )
          const { transaction } = response
          this.value = transaction.orderStatus
          const data = new FormData();
          data.append("name", name);
          data.append("phone", phone);
          data.append("email", email);
          data.append("is_paid", this.value == 'PAID' ? 1 : 0  );
          data.append("price", price);
          data.append("user_id", promoCodee);
          this.$axios.$post(`/store-course`, data)
          const hasCodeBeenExecuted = localStorage.getItem('codeExecuted');
          const currentUrl = window.location.href;
        //if(!hasCodeBeenExecuted || localStorage.getItem('lastUrl') !== currentUrl ){
          if(this.value == 'PAID' && promoCodee!= null){
          this.$axios.$put(`/paidSaller/${promoCodee}`)
          }
        //}
        //localStorage.setItem('codeExecuted', true);
        //localStorage.setItem('lastUrl', currentUrl);

        } catch (error) {
          console.error(error)
        }
      },
    },
  }
  </script>

<style>

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.title { 
  font-weight: bold;
  color: #000000;
}

.symbol {
  -webkit-text-stroke: 13px #ffffff;
  font-size: 150px;
  color: #ff2c3c;
  font-weight: 600;
}
.symbol_S {
  -webkit-text-stroke: 13px #ffffff;
  font-size: 150px;
  color: #069e01;
  font-weight: 600;
}
.text { 
  margin-top: 15px;
  font-size: 25px;
  color: #000000;
  text-align: center; 
  font-weight: 600;
}
</style>