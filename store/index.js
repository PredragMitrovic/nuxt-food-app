import axios from 'axios'

export const state = () => ({
     foodData: []
 })
 
 export const getters = {
     getterFoodData: state => {
         return state.foodData
     }
 }
 
 export const mutations = {
    updatefoodData: (state, data) => {
        state.foodData = data
    },
    REMOVE_USER: (state, id) => {
        state.foodData = state.foodData.filter(p => p.id !== id)
    },
    ADD_USER: (state, data) => {
        state.foodData.unshift(data)
    },
    EDIT_VALUE: (state, data) => {
        const index = state.foodData.findIndex(u => u.id === data.id)
        state.foodData[index] = data
    }

 }
 
 export const actions = {
    async GET_FOODDATA( context, data ) {
         const callData = await axios.get('https://jsonplaceholder.typicode.com/users')
         const users = callData.data
         context.commit('updatefoodData', users)
     },

     async DELETE_USER (context, id) {
         console.log(id)
         await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
         context.commit("REMOVE_USER", id)
     },

     async CREATE_USER(context, data) {
          const callDataCreated = await axios.post('https://jsonplaceholder.typicode.com/users', data)
          context.commit('ADD_USER', callDataCreated.data)
     },

       async EDIT_VALUE (context, data) {
            const callDataEdit = await axios.put('https://jsonplaceholder.typicode.com/users/' + data.id, data)
            context.commit('EDIT_VALUE', callDataEdit.data);
        }
 }