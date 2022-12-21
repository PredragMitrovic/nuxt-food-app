<template>
  <main>
      <user :user="user"  v-for=" user in getterFoodData" :key="user.id"/>
  </main>
</template>

<script>

import { mapGetters , mapActions} from 'vuex';
import user from '@/components/user.vue';


export default {
  components: {
    user
  },
  computed: {
    ...mapGetters([
      'getterFoodData',
    ])
  },
  methods: {

    ...mapActions([
      'GET_FOODDATA'
    ])
  },
  mounted () {
   if(!this.getterFoodData.length) this.GET_FOODDATA()
  },
};

</script>
