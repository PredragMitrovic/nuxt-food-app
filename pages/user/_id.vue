<template>
    <div>
        <form @submit.prevent="edittSelectedUser">
            <input type="text" v-model="modal.name">
            <button type="submit"> Submit new user </button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
                id: this.$route.params.id,
                modal: {
                    name: '',
                    id: ''
                }
        }
    },
    methods: {
        selectedUser() {
            let allUsers = this.getterFoodData
            let Selectuser = allUsers.find( u => u.id === Number(this.$route.params.id));
            this.modal.name = Selectuser.name;
            this.modal.id = Selectuser.id;
        },

        async edittSelectedUser() {
            await this.EDIT_VALUE(this.modal)
            this.$router.push('/')
        },
        ...mapActions([
            'EDIT_VALUE'
        ])
    },
    computed: {
        ...mapGetters([
            'getterFoodData',
        ])
    },
    mounted () {
        this.selectedUser()
    },
};

</script>

<style lang="scss" scoped>

</style>