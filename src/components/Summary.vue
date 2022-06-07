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
            <div class="flex justify-around text-xl font-bold">
                <p>Łącznie</p>
                <p>115,00zł</p>
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
            <input class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="regulamin" type="checkbox">
            <label for="regulamin">Zapoznałem/am się z <a class="text-blue-400" href="">Regulaminem</a>  zakupów</label>
        </div>
        <button @click="finalizeOrder" class="w-full p-2 py-6 border-2 border-red-500 text-white my-2 font-bold hover:bg-red-600 bg-red-500 transition uppercase rounded-sm">Potwierdź zakup</button>
        {{ userDetails }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data() {
            return {
                products:[
                    {name:"Testowy produkt",quantity:1,price:115}
                ]
            }
        },
        computed: {
        ...mapState([
            'userDetails',
            'deliveryMethod',
            'paymentMethod',
        ])
        },
        methods: {
            finalizeOrder(){
                console.log(this.userDetails);
                console.log(this.deliveryMethod);
                console.log(this.paymentMethod);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>