<template>
    <div>
     <div class="section" id="section1" style="padding-bottom:0;">
       <div class="container">
       <div class="row EditRow">
        <div class="col-12 col-md-7">
            <p class="choice_difficult1"
             style="color: #000000; font-size: 40px;font-weight: 600;margin-top: 73px;">
             {{ $t('landingPage.sec1(1)') }}
            </p>
            <p class="choice_difficult2"
             style="color: #56C100;font-size: 30px;font-weight: 600;">
             {{ $t('landingPage.sec1(2)') }}
            </p>
         </div>
        <div class="col-12 col-md-5">
          <img
            class="img_sec1"
            src="@/assets/img/Home.svg"
            alt />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2">
       <div class="container">
       <div class="row section2"
        style="padding: 85px 0 85px 0;" >
         <div class="col-12 col-md-6 pt-3">
            <p style="color:#C6DCE3;font-size: 30px;">
              {{ $t('landingPage.sec2') }}
            </p>
         </div>
         <div class="col-12 col-md-6">
            <img
            style="width: 90%;"
            src="@/assets/img/Home2.png"
            alt
            />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section1">
       <div class="container">
       <div class="row" >
         <div class="col-6 col-md-3" style="text-align: center;">
          <img
            
            src="@/assets/img/Our Work.svg"
            alt />
         </div>
         <div class="col-6 col-md-3" style="text-align: center;">
          <img
            
            src="@/assets/img/Our Work (1).svg"
            alt />
         </div>
         <div class="col-6 col-md-3" style="text-align: center;">
          <img
            
            src="@/assets/img/Our Work (2).svg"
            alt />
         </div>
         <div class="col-6 col-md-3" style="text-align: center;">
          <img
            
            src="@/assets/img/Our Work (3).svg"
            alt />
         </div>
         <div class="col-12" style="padding-bottom: 50px;padding-top: 100px;">
           <div style="padding-bottom: 50px;"
             class="intro-calc position-relative d-flex justify-content-center align-items-center"
           >
             <div class="bg-right d-none d-lg-block">
               <img src="@/assets/img/leftbg.png" alt />
             </div>
           
             <h4 class="font-weight-bold tx-dark-blue w-md-60 text-center m-auto">
               <span
                 v-text="
                   $t('OvertimeBusinessClients.title')
                 "
               />
               <span class="tx-orange">{{ $t('overtime') }}</span>
             </h4>
             <div class="bg-left d-none d-lg-block">
               <img style="transform: rotate(180deg);"  src="@/assets/img/leftbg.png" alt />
             </div>
           </div>
           <div class="slider-carousel">
           <div class="swiper-container">
               <swiper class="swiper-wrapper" :options="swiperOptions">
                 <swiper-slide class="swiper-slide" v-for="(item, index) in vendors" :key="index">
                   <img :src="item.logo" :alt="item.caption" />
                 </swiper-slide>
               </swiper>
               <!--<div class="swiper-pagination"></div>-->
               <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>
             </div>
           </div>
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2">
       <div class="container">
          <div style="text-align: center;">
            <u class="choice_difficult1" style="color: #C6DCE3; font-size: 30px;">
             {{ $t('landingPage.sec4_title') }}
            </u>
          </div>
        <br>
       <div class="row EditRow">
        <div class="col-12 col-md-6">
            <u class="choice_difficult2" style="color: #C6DCE3;font-size: 40px;">
                  {{ $t('landingPage.sec4_market') }}
            </u>
            <br>
           <ul style="color: #C6DCE3;font-size: 20px;">
              <li>
                {{ $t('landingPage.sec4(1)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(2)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(3)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(4)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(5)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(6)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(7)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(8)') }}
              </li>
              <li>
                {{ $t('landingPage.sec4(9)') }}
              </li>
           </ul>
         </div>
        <div class="col-12 col-md-6">
           <img
             style="width: 65%;padding-top: 45px"
             src="@/assets/img/sec4.png"
             alt
           />
         </div>

       </div>
       </div>
     </div>
     <div class="section" id="section3">
       <div class="container">
       <div class="row EditRow" style="padding: 50px 0 50px 0;">
        <div class="col-12 col-md-12">
          <img
             src="@/assets/img/Home.png"
             alt
           />
         </div>
         <div class="col-12 col-md-12">
           <img
             src="@/assets/img/Home (1).png"
             alt
           />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2">
       <div class="container">
       <div class="row EditRow">
        <div class="col-12 col-md-8">
          <u class="choice_difficult2" style="color: #C6DCE3;font-size: 40px;">
                  {{ $t('landingPage.sec6-title') }}
          </u>
                 <br>
              <ul style="color: #56C100;">
                 <li>
                   {{ $t('landingPage.sec6(1)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(2)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(3)') }}
                 </li>
              </ul>
              <ul style="color: #D8E6ED;">
                <li>
                   {{ $t('landingPage.sec6(4)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(5)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(6)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(7)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(8)') }}
                 </li>
              </ul>
              <ul style="color: #56C100;">
                <li>
                   {{ $t('landingPage.sec6(9)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(10)') }}
                 </li>
              </ul>
              <ul style="color: #D8E6ED;">
                <li>
                   {{ $t('landingPage.sec6(11)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(12)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(13)') }}
                 </li>
                 <li>
                   {{ $t('landingPage.sec6(14)') }}
                 </li>
              </ul>
         </div>
        <div 
        class="col-12 col-md-4">
            <img
             class="sec6_image"
             src="@/assets/img/sec6.png"
             alt
            />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section4">
       <div class="container">
        <div style="text-align: center;">
        <u class="choice_difficult2" style="color: #142930;font-size: 40px;font-weight: 600;">
          {{ $t('landingPage.sec7-title') }}
        </u>
        </div>
       <div class="row EditRow" style="padding-top: 50px;">
        <div class="col-12 col-md-6" style="text-align: center;">
           <img
             src="@/assets/img/sec7-1.png"
             alt
           />
           <div>
            <u  style="color: #142930;font-size: 20px;font-weight: 600;">
                {{ $t('landingPage.sec7-name2') }}
            </u>
            <br>
            <u  style="color: #56C100;font-size: 20px;font-weight: 600;">
                 {{ $t('landingPage.sec7-description2') }}
            </u>
           </div>
         </div>
        <div class="col-12 col-md-6" style="text-align: center;">
            <img
              src="@/assets/img/sec7-2.png"
              alt
            />
            <div>
             <u  style="color: #142930;font-size: 20px;font-weight: 600;">
                 {{ $t('landingPage.sec7-name1') }}
             </u>
             <br>
             <u  style="color: #56C100;font-size: 20px;font-weight: 600;">
                 {{ $t('landingPage.sec7-description1') }}
             </u>
            </div>
        </div>
       </div>
       </div>
     </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import axios from "axios";
  export default {
    data() {
    return {
      swiperOptions: {
        autoplay: {
        delay: 1000, // تأخير الانتقال بين الشرائح بالمللي ثانية
        disableOnInteraction: false, // يتم تعطيل التحويل التلقائي عند التفاعل مع السلايدر
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
      },
      ar: true,
      fixed: false,
      phoneData: null,
      countryName: '',
      dialCode: '',
      errors: '',
      done: false,
      msg: '',
      show: false,
      spinner: false,
      sent: false,
    }
    },
    head() {
      return {
        earnings: true,
        title: this.$t('academy.title'),
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
  mounted() {
    this.$nextTick(() => {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    });
  },
  created() {
  this.getVendors();
  },
  methods:{
    async getVendors() {
      try {
        this.loading = true;
        const response = await axios.get(`https://admin.overtime.marketing/api/seller/vendors`);
        this.loading = false;
        this.vendors = response?.data?.vendors ?? {};
      } catch (error) {
        this.loading = false;
        if (!error.response) {
          this.$notify({
            group: "foo",
            text: "No internet access",
            type: "error",
          });
        } else if (error.response.status == 400) {
          this.$notify({
            group: "foo",
            text: error.response.data.message,
            type: "error",
          });
        } else if (error.response.status == 401) {
          if (await this.$refresh()) {
            this.getOrder();
          }
        } else if (error.response.status == 404) {
          this.$notify({
            group: "foo",
            text: error.response.data.message,
            type: "error",
          });
          this.$router.go(-1);
        } else {
          this.$notify({
            group: "foo",
            text: error.response.statusText,
            type: "error",
          });
        }
      }
    },
  },
  watch: {
      sent(newVal, oldVal) {
        if (newVal === true)
          window.setTimeout(() => {
            this.sent = false
          }, 1000)
      },
    },
  }
</script>
  
  <style lang="scss" scoped>
  #section1{
  background: url("@/assets/img/Home (1).svg");
  background-repeat: no-repeat;
  background-size: auto;
}
#section2{
  background: url("@/assets/img/About.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
#section3{
  background: url("@/assets/img/over time marketing LLC websitehla.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
#section4{
  background: url("@/assets/img/over time marketing LLC websitehla (1).svg");
  background-repeat: no-repeat;
  background-size: auto;
}
  .video{
    width: 550px;
    padding-top: 20px;
  }
  .sec9_img_2{
      display: none;
  }
  .sec10_img{
    width: 140%;
  }
  #app.rtl{
  .sec6_image{
    width: 100%;
    padding-top: 200px;
    margin-right: -165px;
  }
  .img_sec1{
    width: 100%;
  }
  .sec11_image{
    position: relative;
    right: 78%;
    width: 58%;
    top: 10%;
  }
  .sec3_en{
    display: none;
  }
  .sec3_ar{
    width: 702px;
  }
  .circle_en{
    display: none;
  }
  .person_en{
    display: none;
  }
    
  .sec2_en{
    display: none;
  }
  .circle_ar{
      width: 522px;
  }
  .person_ar{
      width: 645px;
  }
  .choice_difficult1{
  
    color: #fff;
  }
  .choice_difficult2{
  
    color: #fff;
  }
  }
  #app.ltr{
  .sec11_p{
    font-size: x-large!important;
  }
  .sec11_image{
  transform: rotateY(190deg);
  position: relative;
  left: 70%;
  width: 65%;
  top: 32%;
  }
  .sec6_image{
    width: 100%;
    padding-top: 200px;
  }
  .img_sec1{
    transform: rotateY(190deg);
    width: 150%;
    margin-left: -150px;
  }
  .sec2_ar{
    display: none;
  }
  
  .circle_en{
      width: 522px;
  }
  .person_en{
      width: 645px;
  }
  .circle_ar{
    display: none;
  }
  .person_ar{
    display: none;
  }
  .sec3_ar{
    display: none;
  }
  .sec3_en{
      width: 702px;
  }
  }
  .no_real_estates {
    font-size: 50px;
    color: #707070;
    margin-top: 5px;
  }
  
  @media (max-width: 600px) {
    .video{
    width: 330px;
    }
    .jop{
      margin: 30px 0 30px 0 !important;
    }
    .sec9_img_1{
      display: none;
    }
    .sec10_img{
    width: 100%;
    }
    .sec6_image{
    width: 65%!important;
    padding-top: 45px!important;
    margin-right: 0px!important;
    }
    #app.rtl{
    .sec11_image{
    right: 46%;
    width: 56%;
    top: 0%;
    }
    .img_sec1{
    width: 100%;
    margin-right: 0px;
    }
    .sec3_ar{
      width: 372px;
    }
    .person_ar{
      width: 360px;
    }
    .circle_ar{
      width: 370px;
    }

    }
    #app.ltr{
    .sec11_image{
    left: 53%;
    width: 50%;
    top: 0%;
    }
    .img_sec1{
    transform: rotateY(190deg);
    width: 100%;
    margin-left: 0px;
    }
    .sec3_ar{
      display: none;
    }
    .person_ar{
      display: none;
    }
    .circle_ar{
      display: none;
    }
    .choice_difficult1{
      font-size: 40px!important;
    }
    .choice_difficult2{
      font-size: 40px!important;
    }
    .sec3_en{
      width: 372px;
    }
    .person_en{
      width: 360px;
    }
    .circle_en{
      width: 370px;
    }

    }
    .no_real_estates {
      font-size: 25px;
    }
  }
  </style>