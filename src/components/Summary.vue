<template>
    <div>
        <div class="header-payment">
            <img class="h-6" src="/src/assets/card.png" alt="">
            <p>4. podsumowanie</p>
        </div>
        <div class="flex py-4" v-for="product in products">
            <div class="bg-gray-500 w-28 h-12">
            </div>
            <div class="flex flex-col">
                <div class="flex font-bold justify-between w-full space-x-12 px-2">
                    <p >{{product.name}}</p>
                    <p >{{product.price.toFixed(2)}} zł</p>
                </div>
                <div class="text-left px-3" >
                    Ilość : {{ product.quantity }}
                </div>
            </div>
        </div>
        <div class="p-2 border-y border-dashed border-blue-400 my-1">
            <div class="flex justify-around">
                <p>Suma częściowa</p>
                <p>115,00zł</p>
            </div>
            <div v-if="promoCodeValue" class="flex justify-around  font-bold">
                <p>Kod bonusowy</p>
                <p>- {{(sumPrice*promoCodeValue).toFixed(2)}} zł</p>
            </div>
            <div class="flex justify-around text-xl font-bold">
                <p>Łącznie</p>
                <p>{{(sumPrice-(sumPrice*promoCodeValue)).toFixed(2)}}zł</p>
            </div>
        </div>
        <div class="my-4">
            <textarea  id="about" name="about" rows="3" class="my-3 shadow-sm focus:ring-red-500 resize-none focus:border-red-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Komentarz"></textarea>
        </div>
        <div class="flex items-center  space-x-2">
            <input class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="newsletter" type="checkbox">
            <label for="newsletter">Zapisz się, aby otrzymać newsletter</label>
        </div>
        <div class="flex items-center  space-x-2">
            <input v-model="regulations" class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="regulamin" type="checkbox">
            <label for="regulamin">Zapoznałem/am się z <a class="text-blue-400" href="">Regulaminem</a>  zakupów</label>
        </div>
        <button @click="finalizeOrder" class="w-full p-2 py-6 border-2 border-red-500 text-white my-2 font-bold hover:bg-red-600 bg-red-500 transition uppercase rounded-sm">Potwierdź zakup</button>
        <Transition name="bounce">
        <div v-if="errors.length>0" class="w-full min-h-20 bg-yellow-300 text-black font-bold p-2">
            <img src="/src/assets/warning.png" class="h-8 w-8" alt="">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        </Transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
    export default {
        data() {
            return {
                products:[
                    {name:"Testowy produkt",quantity:1,price:115}
                ],
                sumPrice:115,
                errors:[],
                regulations:false,
            }
        },
        computed: {
        ...mapState([
            'userDetails',
            'deliveryMethod',
            'paymentMethod',
            'promoCodeValue',
        ])
        },
        methods: {
            validateField(){
                this.errors = [];
                let requiredFields = [
                    {name:'name',translation:'Imię'},
                    {name:'surname',translation:'Nazwisko'},
                    {name:'city',translation:'Miasto'},
                    {name:'address',translation:'Adres'},
                    {name:'postCode',translation:'Kod pocztowy'},
                    {name:'country',translation:'Kraj'},
                    {name:'phoneNumber',translation:'Telefon'},
                ];
                // if(this.userDetails.setNewAddress){
                //     requiredFields.push({name:'newAddress.city',translation:"Miasto"})
                //     requiredFields.push({name:'newAddress.address',translation:"Adres"})
                //     requiredFields.push({name:'newAddress.postCode',translation:"Kod pocztowy"})
                //     requiredFields.push({name:'newAddress.country',translation:"Kraj"})
                // }
                requiredFields.forEach(element => {
                    let nazwa = element.name
                    if(!this.userDetails[nazwa]){
                        console.log(nazwa)
                        this.errors.push(`Pole ${element.translation} jest wymagane.`)
                    }
                });
                if(!this.regulations){
                    this.errors.push("Zaakceptuj regulamin serwisu.")
                }
                if(this.errors.length>0){
                    return false;
                }

                return true;
            },
            finalizeOrder(){
                let validated = this.validateField();
                if(validated){
                    console.log('axios')
                    axios.post(`${import.meta.env.VITE_API_URL}order`,this.userDetails).then(res=>{
                        console.log(res)
                        this.$store.commit('setOrderCode',res.data)
                    this.$emit('show-order-modal');
                    }).catch(err=>{
                        this.errors.push(err.response.data.message)
                        console.log(err.response)
                    })
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>