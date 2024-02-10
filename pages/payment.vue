<template>
  <div class='content' style="padding: 30px 0;">
    <div v-if="value == 'PAID'" style="text-align: center;">
      <i class="fa-regular fa-circle-check symbol_S"></i>
      <div class='title pt-5'>{{ $t('fawry.paid') }}</div>
      <div v-if="value == 'PAID'" class='text'>{{ $t('fawry.sent_your_email') }}</div>
      
    </div>
    <div v-if="value != 'PAID'" style="text-align: center;">
      <i class="fa-regular fa-circle-xmark symbol"></i>
      <div class='title pt-5'>{{ $t('fawry.un_paid') }}</div>
      <div v-if="referenceNumber != null" class='title pt-5'>{{ $t('fawry.price') }} {{ price }} EG {{ $t('fawry.referenceNumber') }} </div>
      <br>
      <span class="mt-5"
      style="color: #9dd153;font-weight: 600;background: #fff;padding: 7px;border: 6px solid rgb(157, 209, 83);border-radius: 30px;"
       v-if="referenceNumber != null">
        {{ referenceNumber }} </span>
      <div v-if="referenceNumber != null" class='title pt-5'>{{ $t('fawry.un_paid_1') }}</div>
      <button v-if="referenceNumber != null" class="mt-5"
      style="background: #142930;padding: 20px 50px 20px 50px;border-radius: 20px;color: #C6DCE3;"
      @click="reloadPage">{{ $t('fawry.reload') }}</button>
    </div>

    
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
        referenceNumber:null,
        price:null
      }
    },
    async created() {
      await this.check()
  },
  
    methods: {
      reloadPage() {
      location.reload(); 
      },
      async check() {
        const  merchantRefNumber_check  = this.$route.query.merchantRefNumber_check 
        //const  promoCodee  = this.$route.query.promoCode
        //const  name  = this.$route.query.name
        //const  phone  = this.$route.query.phone
        //const  email  = this.$route.query.email
        //const  price  = this.$route.query.price
        console.log(this.$route.query)
        try {
          const response = await this.$axios.$get(
            `/checkPaid?merchantRefNumber=${merchantRefNumber_check}`
          )
          const { transaction } = response
          this.value = transaction.orderStatus
          this.referenceNumber = this.$route.query.referenceNumber
          this.price = this.$route.query.price
          //const data = new FormData();
          //data.append("merchantRefNumber", merchantRefNumber_check);
          //data.append("orderStatus", "PAID");
          //data.append("is_paid", this.value == 'PAID' ? 1 : 0  );
          //data.append("price", price);
          //data.append("user_id", promoCodee);
          //data.append("merchantRefNumber", merchantRefNumber_check);
          //this.$axios.$post(`fawryCallBackUrl`, data)
          //const data = new FormData();
          //data.append("name", name);
          //data.append("phone", phone);
          //data.append("email", email);
          //data.append("is_paid", this.value == 'PAID' ? 1 : 0  );
          //data.append("price", price);
          //data.append("user_id", promoCodee);
          //data.append("merchantRefNumber", merchantRefNumber_check);
          //this.$axios.$post(`store-course`, data)
          //const hasCodeBeenExecuted = localStorage.getItem('codeExecuted');
          //const currentUrl = window.location.href;
          //if(!hasCodeBeenExecuted || localStorage.getItem('lastUrl') !== currentUrl ){
          //if(this.value == 'PAID' && promoCodee!= null){
          //  this.$axios.$post(`paidSaller/${promoCodee}`)
          //  this.$axios.$post(`SeneMail/${email}`)
          //  this.$axios.$put(`updateCourses/${merchantRefNumber_check}`)
          //}else if (this.value == 'PAID'){
          //  this.$axios.$post(`SeneMail/${email}`)
          //  this.$axios.$put(`updateCourses/${merchantRefNumber_check}`)
          //}
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