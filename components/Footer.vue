<template>
    <div>
        <footer class="footer-distributed">
        
          <div class="footer-left" style="text-align: center;">
        
            <!--<h3>Company<span>logo</span></h3>-->
        
            <img width="200" src="@/assets/img/logo_acdemy.svg" alt="">

            <p class="footer-links">
                <nuxt-link :to="localePath('/comming-soon')">
                  {{ $t('academy.Courses') }}
                </nuxt-link>
            
                <nuxt-link :to="localePath('/')">
                  {{ $t('academy.marketing_skills') }}
                </nuxt-link>
            
            
                <nuxt-link :to="localePath('/contact-us')">
                  {{ $t('academy.Connect_us') }}
                </nuxt-link>

            </p>
        
          </div>
      
          <div class="footer-center">
        
            <div style="padding-left: 10px;">
              <i class="fa fa-map-marker"></i>
              <p style="font-size: larger;font-weight: 700;">{{ $t('Head_Office') }} :</p>
              <p class="address_descrption">
              <a target="_blank" class="linkFooter"
              href="https://maps.app.goo.gl/u9jcSbQ6WnLyL3tU8e">
              {{ $t('address_descrption1') }}
              <br>
              {{ $t('address_descrption2') }}
            </a></p>
            </div>
        
            <div style="padding-left: 10px;">
              <i class="fa fa-phone"></i>
              <p style="font-size: larger;font-weight: 700;">{{ $t('check_out.phone_number') }} :</p>
              <br>
              <p class="address_descrption">
              <a class="linkFooter"
              href="tel:+201211117644">{{ $t('tel_1') }}</a></p>
            </div>
        
            <div style="padding-left: 10px;">
              <i class="fa fa-envelope"></i>
              <p style="font-size: larger;font-weight: 700;">{{ $t('E-mail') }} :</p>
              <br>
              <p class="address_descrption">
              <a class="linkFooter"
              href="mailto:info@overtime.academy">info@overtime.academy</a></p>
            </div>
        
          </div>
      
          <div class="footer-right">
        
            <p class="footer-company-about">
            <span style="font-size: larger;font-weight: 700;">
            {{ $t('about_company_title') }}</span>
            {{ $t('about_company_descrption') }}
            </p>
        
            <div class="footer-icons">
            
              <a target="_blank"
              href="https://www.facebook.com/profile.php?id=61550477788009&_rdc=1&_rdr">
              <img src="@/assets/img/social/facebook.png" width="30" alt=""></a>
              <a target="_blank" 
              href="https://twitter.com/OvertimeBroker">
              <img src="@/assets/img/social/twitter.png" width="30" alt=""></a>
              <a href="https://www.linkedin.com/company/over-time-marketing">
              <img src="@/assets/img/social/linkedin.png" width="30" alt=""></a>
              <a href="https://www.instagram.com/overtime.brokerage/">
              <img src="@/assets/img/social/instagram.png" width="30" alt=""></a>
              <a target="_blank"
              href="https://www.tiktok.com/@overtimehub">
              <img src="@/assets/img/social/tiktok.png" width="30" alt=""></a>

            </div>
        
          </div>
          <div>
            <p class="footer-company-name"
            style="text-align: center;background: #33383b;padding-top: 10px;color: #fff;
            padding-bottom: 10px;margin-top: 30px;">Copyrights Overtime Marketing L.L.C ©</p>
          </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer-distributed{
  background: #000;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  font: bold 16px ;
  padding: 22px 0px 0px 0px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
  width: 40%;
}

/* The company logo */

.footer-distributed h3{
  color:  #ffffff;
  margin: 0;
}

.footer-distributed h3 span{
  color:  lightseagreen;
}

/* Footer links */

.footer-distributed .footer-links{
  color:  #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a{
  display:inline-block;
  line-height: 1.8;
  font-weight:400;
  text-decoration: none;
  color:  inherit;
}

.footer-distributed .footer-company-name{
  color:  #9dd153;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
  width: 35%;
}

.footer-distributed .footer-center i{
  background-color:  #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope{
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p{
  display: inline-block;
  color: #ffffff;
  font-weight:400;
  vertical-align: middle;
  margin:0;
}

.footer-distributed .footer-center p span{
  display:block;
  font-weight: normal;
  font-size:14px;
  line-height:2;
}

.footer-distributed .footer-center p a{
  color:  #9dd153;
  text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
  width: 20%;
}

.footer-distributed .footer-company-about{
  line-height: 20px;
  color:  #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span{
  display: block;
  color:  #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons{
  margin-top: 25px;
}

.footer-distributed .footer-icons a{
  display: inline-block;
  width: 35px;
  height: 37px;
  cursor: pointer;
  background-color:  #fff;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}
#app.rtl{
  .address_descrption{
    margin-right: 70px;
  }
}
#app.ltr{
  .address_descrption{
    margin-left: 70px;
  }
}
.linkFooter:hover{
color: #fff!important;
}
/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {
  .footer-right{
  line-height: 20px;
  color:  #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
  text-align: center;
}

  .footer-distributed{
    font: bold 14px ;
  }
  #app.rtl .address_descrption{
    margin-right: 55px;
  }
  #app.ltr .address_descrption{
    margin-left: 55px;
  }
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right{
    display: block;
    width: 100%;
    margin-bottom: 40px;
  }

  .footer-distributed .footer-center i{
    margin-left: 0;
  }

}
</style>