<template>
    <div class=" bg-gray-800 bg-opacity-50 code-box z-20 w-full h-full flex items-center justify-center">
        <div class=" bg-gray-100 p-8 rounded-lg">
            <img src="/src/assets/code.svg" class="mx-auto my-8 w-60" alt="">
        <input v-model="code" type="text" class="input-payment" placeholder="Kod promocyjny">
        <div v-if="error" class="bg-red-500 p-2 text-white">
            {{ error }}
        </div>
        <div class="flex space-x-4">
            <button @click="applyCode" class="w-full p-2 border-2 border-gray-500 text-gray-500 my-2 font-bold hover:bg-gray-500 hover:text-white transition">Zatwierdź</button>
            <button @click="showCodeModalMethod" class="w-full text-gray-600 p-2 border-2 border-red-500 my-2  font-bold hover:bg-red-500 hover:text-white transition">Anuluj</button>
        </div>
        </div>
    </div>  
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                code:'',
                error:'',
            }
        },
        methods: {
            applyCode(){
                this.$store.state.loading = true;
                axios.get(`${import.meta.env.VITE_API_URL}code/${this.code}`).then(res=>{
                    console.log(res);
                    if(res.data.length==0){
                        this.error = "Taki kod promocyjny nie istnieje"
                    }else{
                        this.error = '';
                        if(res.data[0].valid){
                             this.$store.commit('setPromoCode',res.data[0].name)
                             this.$store.commit('setPromoCodeValue',res.data[0].value)
                             this.$emit('show-code-modal')
                        }else{
                            this.error = "Ten kod promocyjny stracił ważność"
                        }
                    }
                this.$store.state.loading = false;
                })
                console.log()
            },
            showCodeModalMethod(){
                this.$emit('show-code-modal')
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