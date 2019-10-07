<template lang='pug'>
  div
    el-button(v-on:click='toggleLogo', type="primary")  {{displayLogo ? 'Hide' : 'Show'}}
    div(style='margin: 10px 0px;')
      el-switch(v-model="displayLogo")
    Logo(v-if='displayLogo')
    

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import Logo from '~/components/Logo.vue';

@Component({
  components: {
    Logo,
  },
})
export default class extends Vue {
  private displayLogo: boolean = true;

  constructor() {
    super();
  }
  
  toggleLogo() {
    this.displayLogo = !this.displayLogo;
  }
}
</script>

<style>
</style>
