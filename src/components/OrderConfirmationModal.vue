<template>
    <div class=" bg-gray-800 bg-opacity-50 code-box z-20 w-full h-full flex items-center justify-center">
        <div class=" bg-gray-100 p-8 rounded-lg">
            <img class="mx-auto my-8" src="/src/assets/box.svg" alt="">
            <h2 class="text-3xl font-bold">Zamówienie złożone pomyślnie!</h2>
            <h3 class="text-2xl ">Na twój adres e-mail zostało wysłane potwierdzenie.</h3>
            <p class="text-2xl">Unikalny kod zamówienia : <span class="font-bold">{{ orderCode }}</span></p>
        <div class="flex space-x-4">
        <button @click="showOrderModalMethod" class="w-full p-2  bg-white text-black border-2 border-gray-500 my-2 font-bold hover:bg-gray-200  transition">Powrót</button>
        </div>
        </div>
    </div>  
</template>

<script>
import { mapState } from 'vuex';


    export default {
        methods: {
            showOrderModalMethod(){
                this.$emit('show-order-modal')
            }
        },
        computed: {
        ...mapState([
            'orderCode',
        ])
    },
    }
</script>

<style scoped>
.code-box{
    left:0;
    top:0;
}
</style>