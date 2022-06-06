<template>
    <div class=" bg-gray-800 bg-opacity-50 code-box z-20 w-full h-full flex items-center justify-center">
        <div class=" bg-gray-100 p-8 rounded-lg">
        Wprowadź kod promocyjny
        <input type="text" class="input-payment" placeholder="Kod promocyjny">
        <div class="flex space-x-4">
        <button @click="showCodeModalMethod" class="w-full p-2 border-2 border-gray-500 text-gray-500 my-2 font-bold hover:bg-gray-500 hover:text-white transition">Zatwierdź</button>
        <button @click="showCodeModalMethod" class="w-full text-gray-600 p-2 border-2 border-red-500 my-2  font-bold hover:bg-red-500 hover:text-white transition">Anuluj</button>
        </div>


        </div>
    </div>  
</template>

<script>
    export default {
        methods: {
            showCodeModalMethod(){
                this.$emit('show-code-modal')
            }
        },
    }
</script>

<style scoped>
.code-box{
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>