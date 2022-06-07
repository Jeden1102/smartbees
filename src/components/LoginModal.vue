<template>
    <div class=" bg-gray-800 bg-opacity-50 code-box z-20 w-full h-full flex items-center justify-center">
        <div class=" bg-gray-100 p-8 rounded-lg">
        <img class="mx-auto my-8" src="/src/assets/login.svg" alt="">
        <input type="text" class="input-payment" placeholder="Nazwa użytkownika">
        <input type="password" class="input-payment" placeholder="Hasło">
        <div class="flex space-x-4">
        <button @click="showLoginModalMethod" class="w-full p-2  bg-white text-black border-2 border-gray-500 my-2 font-bold hover:bg-gray-200  transition">Zaloguj</button>
        <button @click="showLoginModalMethod" class="w-full bg-red-500 text-white p-2 border-2 border-red-500 my-2  font-bold hover:bg-red-600 hover:text-white transition">Anuluj</button>
        </div>
        </div>
    </div>  
</template>

<script>
    export default {
        methods: {
            showLoginModalMethod(){
                this.$emit('show-login-modal')
            }
        },
    }
</script>

<style scoped>
.code-box{
    left:0;
    top:0;
}
</style>