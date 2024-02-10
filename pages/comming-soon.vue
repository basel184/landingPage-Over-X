<template>
    <div>
        <div class="wrapper">
         <h1>{{ $t('academy.Coming_soon') }}<span class="dot">.</span></h1>
         <div class="icons pt-5">
           <a href="https://overtime.marketing/"><img style="padding: 29px 0;" src="https://overtime.marketing/_nuxt/img/logo%20marketing.2690237.png" alt=""></a>
           <a href="https://business.overtime.marketing/"><img src="https://business.overtime.marketing/_nuxt/img/logo.b20bf9b.png" alt=""></a>
           <nuxt-link class="link" :to="localePath('/')">
             {{ $t('academy.marketing_skills') }}
           </nuxt-link>
         </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
body {
  background: #00091B;
  color: #fff;
}


@keyframes fadeIn {
  from {top: 20%; opacity: 0;}
  to {top: 100; opacity: 1;}
  
}

@-webkit-keyframes fadeIn {
  from {top: 20%; opacity: 0;}
  to {top: 100; opacity: 1;}
  
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  animation: fadeIn 1000ms ease;
  -webkit-animation: fadeIn 1000ms ease;
  
}

h1 {
  font-size: 50px;
  margin-bottom: 0;
  line-height: 1;
  color: #000;
  font-weight: 700;
}

.dot {
  color: #9dd153;
}

p {
  margin: 18px;
  font-weight: normal;
  
}

.icons {
  text-align: center;
  
}
@media (max-width: 600px) {
.icons {
display: flex;
flex-direction: column;
}  
h1{
    font-size: 20px;
}
.icons img {
    margin: 10px 0!important;
    width: 40%!important;
}
}
.icons img {
  color: #00091B;
  background: #fff;
  width: 20%;
  padding: 13px;
  margin: 0 10px;
  border-radius: 35px;
  border: 2px solid #fff;
  transition: all 200ms ease;
  text-decoration: none;
  position: relative;
}
.link {
  color: #00091B;
  background: #fff;
  width: 20%;
  padding: 13px;
  margin: 0 10px;
  border-radius: 35px;
  border: 2px solid #fff;
  transition: all 200ms ease;
  text-decoration: none;
  position: relative;
}
.icons img:hover, .icons img:active {
  color: #fff;
  background: none;
  cursor: pointer !important;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  text-decoration: none;
  
}
</style>