<template>
    <div>
        <main-menu/>
        <Nuxt />
         <p> This is place for footer </p>
    </div>
</template>

<script>


import MainMenu from '../components/MainMenu.vue';

export default {
    components: {
        MainMenu  
    }
}
</script>


<style>
body {
    color: red;
}
</style>