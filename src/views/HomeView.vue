<template>
  <div class="home">
    <HeroComponent></HeroComponent>
    <div class="content-container">
      <div class="title-subtext container">
        <h1>Simplify Your Digital Life !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
        </p>
      </div>

      <div class="text-image container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
        </p>
        <img src="../assets/logo.png">
      </div>

      <div class="card-background container">
        <img src="../assets/logo.png">
        <div class="card-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto odio id aliquam, ut cum? Non totam harum voluptatum unde! Mollitia praesentium corporis provident similique dicta quasi quo vero recusandae.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from '@/components/Hero.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
  }
}
</script>
