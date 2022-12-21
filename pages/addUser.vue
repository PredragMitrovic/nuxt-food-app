<template>
    <div>    
        <form @submit.prevent="addUserEEE">

            <input type="text" v-model="dataPostSet.name">
            <button type="submit"> Submit new user </button>
        </form>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    key(route) {
		return route.fullPath
	},
    data() {
        return {
            bigestId: '',
            dataPostSet: {
                "id": '',
                "name": "",
            }
        } 
    },
    methods: {
        addUniqId() {
            let id = this.getterFoodData;
            let allId = []
            id.forEach(element => allId.push(element.id));
            this.bigestId = Math.max.apply(Math, allId)
             this.dataPostSet.id = this.bigestId + 1;
        },
		async addUserEEE(){
			await this.CREATE_USER(this.dataPostSet);
			this.$router.push('/')
		},
        ...mapActions([
            'CREATE_USER'
        ])
    },
    computed: {
        ...mapGetters([
            'getterFoodData'
        ])
    },
    mounted () {
        this.addUniqId()
    },
};

</script>

<style lang="scss" scoped>

</style>