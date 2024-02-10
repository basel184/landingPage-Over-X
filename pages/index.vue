<template>
    <div>
     <div class="section" id="section2" style="padding-bottom:0;">
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
            <br>
             <nuxt-link
              style="background: #142930;padding: 20px 50px 20px 50px;border-radius: 20px;color: #C6DCE3;"
              :to="localePath('/check_out')">
              {{ $t('Subscribe') }}
             </nuxt-link>
         </div>
        <div class="col-12 col-md-5">
          <img
            class="img_sec1"
            src="@/assets/img/sec1.png"
            alt />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
     style="background-color: #142930;">
       <div class="container">
       <div class="row section2"
        style="padding: 85px 0 85px 0;" >
          <div class="col-12 col-md-6">
            <img
            style="width: 90%;"
            src="@/assets/img/sec2.png"
            alt
            />
         </div>
         <div class="col-12 col-md-6 pt-3">
            <p style="color:#C6DCE3;font-size: 30px;">
              {{ $t('landingPage.sec2') }}
            </p>
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
      style="background: #C6DCE3;">
       <div class="container">
       <div class="row" >
         <div class="col-12 col-md-12" style="text-align: center;">
            <u style="color: #142930; font-size: 30px;font-weight: 500;">
              {{ $t('landingPage.sec3(1)') }}
            </u>
            <br>
            <u style="color: #142930;font-size: 26px;font-weight: 500;">
              {{ $t('landingPage.sec3(2)') }}
            </u>
            <br>
            <u style="color: #142930; font-size: 26px;font-weight: 500;">
              {{ $t('landingPage.sec3(3)') }}
            </u>
            <br>
            <div>
              <video class="video"  controls>
                <source src="/videos/2.mp4" type="video/mp4" />
                <!-- يمكنك إضافة مصادر إضافية هنا لدعم متصفحات متعددة -->
              </video>
            </div>
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
      style="background-color: #142930;">
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
     <div class="section" id="section2" 
      style="background-color: #C6DCE3;">
       <div class="container">
       <div class="row EditRow" style="padding: 50px 0 50px 0;">
        <div class="col-12 col-md-6">
          <u class="choice_difficult2" style="color: #142930;font-size: 40px;">
                  {{ $t('landingPage.sec5-title') }}
          </u>
            <br>
            <ul style="color: #142930;font-size: 20px;">

               <li>
                 {{ $t('landingPage.sec5(1)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(2)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(3)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(4)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(5)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(6)') }}
               </li>
               <li>
                 {{ $t('landingPage.sec5(7)') }}
               </li>
            </ul>
         </div>
         <div class="col-12 col-md-6">
           <img
             style="width: 65%;padding-top: 45px"
             src="@/assets/img/sec5.png"
             alt
           />
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
      style="background-color: #142930;">
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
     <div class="section" id="section2" 
      style="background-color: #C6DCE3;">
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
     <div class="section" id="section2" 
      style="background-color: #142930;">
       <div class="container">
        <div style="text-align: center;">
         <u  style="color: #CCF4E5;font-size: 32px;font-weight: 500;">
          {{ $t('landingPage.sec8-title') }}
         </u>
        </div>
       <div class="row EditRow">
        <div class="col-12 col-md-3">
          <img
            class="sec9_img_1"
            style="width: 92%;position: absolute;bottom: -50px;"
            src="@/assets/img/sec8.png"
            alt
          />
          <img
            class="sec9_img_2"
            style="width: 92%"
            src="@/assets/img/sec8.png"
            alt
          />
        </div>
        <div class="col-12 col-md-9" style="padding-top: 50px;">
            <ul style="color: #CCF4E5;font-size: 21px;font-weight: 500;line-height: 2em;">
              <li>
                {{ $t('landingPage.sec8(1)') }}
              </li>
              <li>
                {{ $t('landingPage.sec8(2)') }}
              </li>
              <li>
                {{ $t('landingPage.sec8(3)') }}
              </li>
              <li>
                {{ $t('landingPage.sec8(4)') }}
              </li>
              <li>
                {{ $t('landingPage.sec8(5)') }}
              </li>
              <li>
                {{ $t('landingPage.sec8(6)') }}
              </li>
            </ul>
        </div>
       </div>
       </div>
     </div>
     <div class="section" id="section8" 
      style="background: #C6DCE3;">
       <div class="container">
       <div class="section3 row">
         <div class="col-12 col-md-12"
          style="text-align: center;">
            <p style="color: #142930;font-size: 27px;font-weight: 500;">
              {{ $t('landingPage.sec9(1)') }}
            </p>
            <br>
            <nuxt-link
              style="background: #142930;padding: 20px 50px 20px 50px;border-radius: 20px;color: #C6DCE3;"
              :to="localePath('/check_out')">
              {{ $t('Subscribe') }}
            </nuxt-link>
            <img
            style="margin: 40px 0;"
            width="100%"
            src="@/assets/img/sec9.png"
            alt
             />
             <p style="color: #142930; font-size: 27px;font-weight: 500;">
               {{ $t('landingPage.sec9(2)') }}
             </p>
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
      style="background-color: #142930;">
       <div class="container">
        <div>
         <p
          style="color: #CCF4E5;font-size:27px;">
             {{ $t('landingPage.sec10_description') }}
         </p>
        </div>
       <div class="row EditRow" >
        <div class="col-12 col-md-9">
          <ul style="color: #CCF4E5;font-size: 22px;line-height: 3em;">
            <li>
              {{ $t('landingPage.sec10(1)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(2)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(3)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(4)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(5)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(6)') }}
            </li>
            <li>
              {{ $t('landingPage.sec10(7)') }}
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3" style="text-align: center;">
            <img
            class="sec10_img"
            src="@/assets/img/sec10.png"
            alt
            />
            <a href="https://www.overtime.eg/" target="_blank" style="color: #CCF4E5;font-size:27px;">
              www.overtime.eg
            </a>
         </div>
       </div>
       </div>
     </div>
     <div class="section" id="section2" 
      style="background-color: #C6DCE3;">
      <div class="container">
       <div class="row EditRow" >
        <div class="col-12 col-md-3" style="text-align: center;">
          <div style="background:#142930;margin: 0 0 30px 0;padding: 35px 0 35px 0;border-radius: 30px;">
            <img src="@/assets/img/Missions.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_mission') }}
              </p>
          </div>
          <div style="background:#142930;padding: 35px 0 35px 0;border-radius: 30px;">
            <img src="@/assets/img/friend.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_friend') }}
              </p>
          </div>
        </div>
        <div class="col-12 col-md-3" style="text-align: center;">
          <div class="jop" style="background:#142930;margin: 0 0 30px 0;padding: 35px 0 35px 0;border-radius: 30px;">
            <img src="@/assets/img/job.svg">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_job') }}
              </p>
          </div>
          <div style="background:#142930;padding: 35px 0 35px 0;border-radius: 30px;">
            <img src="@/assets/img/promoCode.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_PromoCode') }}
              </p>
          </div>
        </div>
        <div class="col-12 col-md-3" style="text-align: center;">
          <div
          class="jop"
          style="background:#142930;margin: 0 0 30px 0;padding: 35px 0 35px 0;border-radius: 30px;">
            <img 
            src="@/assets/img/Services.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_services') }}
              </p>
          </div>
          <div style="background:#142930;padding: 35px 0 35px 0;border-radius: 30px;">
            <img src="@/assets/img/home.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_prokerage') }}
              </p>
          </div>
        </div>
        <div class="col-12 col-md-3" style="text-align: center;">
          <u style="color: #142930;font-size: 45px;">
            {{ $t('landingPage.sec11_title1') }}
          </u>
          <br>
          <u style="color: #142930;font-size: 45px;">
            {{ $t('landingPage.sec11_title2') }}
          </u>
          <div style="background:#142930;padding: 79px 0 128px 0;margin: 40px 0 0 0;border-radius: 30px;">
            <img src="@/assets/img/product.svg" alt="">
              <p class="sec11_p" style="font-size: xx-large;color: #C6DCE3;">
                {{ $t('landingPage.sec11_products') }}
              </p>
          </div>
        </div>
       </div>
       </div>
     </div>
     <div class="section" id="section11"
      style="background-color: #142930;padding-bottom:0;">
       <div class="container">
        <p style="font-size: 40px;color: #C6DCE3;text-align: center;">
          {{ $t('landingPage.sec12-title') }}
        </p>
       <div class="row EditRow">
        <div class="col-12 col-md-6">
          <p style="font-size: 27px;color: #C6DCE3;">
            {{ $t('landingPage.sec12-description') }}
          </p>
         </div>
        <div class="col-12 col-md-6">
          <img
          class="sec11_image"
          src="@/assets/img/sec11.svg" alt/>
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
  .section{
    padding: 50px 0 50px 0;
  }
  #app.rtl{
  .sec6_image{
    width: 100%;
    padding-top: 200px;
    margin-right: -165px;
  }
  .img_sec1{
    width: 150%;
    margin-right: -150px;
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