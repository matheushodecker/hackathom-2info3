<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // Importa os componentes do Swiper
import "swiper/swiper-bundle.css"; // Importa os estilos do Swiper
</script>

<template >
  <section id="img">

</section>
  <H2 class="txt-inicio">Adicionadas recentemente</H2>
  <Swiper
    :slides-per-view="5"  
    :space-between="70" 
    :loop="false"      
    longSwipes    
    grabCursor       
    pagination       
         style="border-right: 10px solid transparent; border-left: 15px solid transparent; border-top: 10px solid transparent; border-bottom: 20px solid transparent;"
  >
    <!-- Slides -->
    <SwiperSlide>
      <div class="column-img">Slide 1</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 2</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 3</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 4</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 5</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 7</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 8</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 8</div>
    </SwiperSlide>
  </Swiper>
  <H2 class="txt-inicio">Adicionadas recentemente</H2>
  <Swiper
  :slides-per-view="5"  
    :space-between="70" 
    :loop="false"      
    longSwipes    
    grabCursor       
    pagination       
         style="border-right: 10px solid transparent; border-left: 15px solid transparent; border-top: 10px solid transparent; border-bottom: 20px solid transparent;"  
       
  >
    <!-- Slides -->
    <SwiperSlide>
      <div class="column-img">Slide 1</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 2</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 3</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 4</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 5</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 6</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 7</div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="column-img">Slide 8</div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.txt-inicio {
     color: black;
    margin-top: 50px;
    margin-left: 135px;
    font-size: 20pt;
    font-family: "Libre Bodoni", serif;
}
/* Adicione um pouco de estilo aos slides */
.column-img {
  height: 300px;
  width: 300px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.swiper-button-next,
.swiper-button-prev {
 display: none;
}

#img {
  background-image: url(/src/assets/img/casa-de-luxo-7-1.jpg);
  background-size: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: 90vh;
}
.column {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;
}
.column-img{
  height: 300px;
  width: 300px;
  margin-bottom: 50px;
  border-radius: 20px;;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
