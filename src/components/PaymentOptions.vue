<template>
    <div class="flex flex-col relative">
        <div class="header-payment">
            <img class="h-6" src="/src/assets/card.png" alt="">
            <p>3. metoda płatności</p>
        </div>
        <div class="flex flex-col items-start justify-center space-y-6 p-4">
        <TransitionGroup name="bounce">
            <div v-if="deliveryMethod != 'dpd2'" v-for="deliveryMethod in deliveryMethods" class="flex items-center space-x-4">
                <input  @change="changePaymentMethod($event)" class="focus:ring-red-500  text-red-600 border-gray-300" type="radio" name="paymentMethod" :value="deliveryMethod.name" :id="deliveryMethod.name">
                <label :for="deliveryMethod.name" class="flex items-center justify-between w-full  space-x-4">
                    <img :src="deliveryMethod.img" class="w-16" alt="">
                    <span>{{deliveryMethod.text}}</span>
                </label>
            </div>
            <div v-else v-for="deliveryMethod in deliveryMethodsSelect" class="flex items-center space-x-4">
                <input  @change="changePaymentMethod($event)" checked class="focus:ring-red-500  text-red-600 border-gray-300" type="radio" name="paymentMethod"  :value="deliveryMethod.name" :id="deliveryMethod.name">
                <label :for="deliveryMethod.name" class="flex items-center justify-between w-full  space-x-4">
                    <img :src="deliveryMethod.img" class="w-16" alt="">
                    <span>{{deliveryMethod.text}}</span>
                </label>
            </div>
        </TransitionGroup>
        </div>
        <button @click="showCodeModalMethod" class="w-full p-2 border-2 border-gray-500 text-gray-500 my-2 font-bold hover:bg-gray-500 hover:text-white transition">Dodaj kod rabatowy</button>
    </div>
</template>
<script>
import CodeModal from '../components/CodeModal.vue';
import { mapState } from 'vuex';

    export default {
        components:{
            CodeModal
        },
        data() {
            return {
                deliveryMethods:[
                    {
                        img:"/src/assets/payu.png",text:"PayU",name:"payu"
                    },
                    {
                        img:"/src/assets/Przelew.png",text:"Przelew bankowy - zwykły",name:"przelew"
                    },
                ],
                deliveryMethodsSelect:[
                    {
                        img:"/src/assets/cash-on-delivery.png",text:"Płatność przy odbiorze",name:"odbior"
                    },
                ]
            }
        },
        computed: {
            ...mapState([
                'deliveryMethod',
            ])
        },
        methods: {
            showCodeModalMethod(){
                this.$emit('show-code-modal')
            },
            changePaymentMethod(ev){
                let method = ev.target.value;
                console.log(method)
                this.$store.commit("setPaymentMethod",method)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>