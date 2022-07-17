<template>
    <div>
      <h1> {{ user.name }}</h1>
      <p> {{ user.username }}</p>
      <p> {{ user.id }}</p>
      <a href="#"  @click="findId">Delete </a>
      <nuxt-link :to="`/user/${user.id}`">Edit  user</nuxt-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['user'],
    methods: {
    findId(){
      this.DELETE_USER(this.user.id)
    },
        ...mapActions([
            'DELETE_USER'
        ])
    },
};

</script>

<style lang="scss" scoped>

</style>