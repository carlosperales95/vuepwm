<template>
  <main class="home">
    <HeroComponent></HeroComponent>
    <div class="content-container">
      <div class="title-subtext container padding-big">
        <h1 class="title font-big font-bold">Simplify Your Digital Life !</h1>
        <p class="subtitle font-medium padding-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
        </p>
      </div>

      <div class="caroussel-background container padding-null">
        <CarousselComponent/>
      </div>

      <div class="text-image container padding-big">
        <p class="card font-regular font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
        </p>
        <img src="../assets/backexample.png"/>
      </div>

      <StairList/>

      <div class="card-image container padding-null">
        <img src="../assets/backexample.png"/>
        <div class="card-container">
          <p class="font-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
          </p>
        </div>
      </div>

      <div class="card-background container padding-null">
        <div class="card-container-relative">
          <p class="font-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
          </p>
        </div>
      </div>
      <CredentialBoard/>
    </div>
  </main>
</template>

<script>
import CarousselComponent from '@/components/Caroussel.vue';
import CredentialBoard from '@/components/CredentialBoard.vue';
import HeroComponent from '@/components/Hero.vue';
import StairList from '@/components/StairList.vue';


export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    CarousselComponent,
    StairList,
    CredentialBoard,
  }
}
</script>
