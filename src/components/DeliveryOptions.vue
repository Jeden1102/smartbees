<template>
    <div class="flex flex-col">
        <div class="header-payment">
            <img class="h-6" src="/src/assets/user.png" alt="">
            <p>2. metoda dostawy</p>
        </div>
        <div class="flex flex-col items-start justify-center space-y-6 p-4">
            <div v-for="deliveryMethod in deliveryMethods" class="flex items-center space-x-4">
                <input class="focus:ring-red-500  text-red-600 border-gray-300" type="radio" name="deliveryMethod" :id="deliveryMethod.name">
                <label :for="deliveryMethod.name" class="flex items-center justify-between w-full  space-x-4">
                    <img :src="deliveryMethod.img" class="w-20" alt="">
                    <span>{{deliveryMethod.text}}</span>
                    <span class="font-bold text-right ">{{deliveryMethod.price.toFixed(2)}} zł</span>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                deliveryMethods:[
                    {
                        img:"/src/assets/inpost.png",text:"Paczkomaty 24/7",price:10.99,name:"paczkomaty"
                    },
                    {
                        img:"/src/assets/dpd.svg",text:"Kurier DPD",price:18.00,name:"dpd1"
                    },
                    {
                        img:"/src/assets/dpd.svg",text:"Kurier DPD pobranie",price:22.00,name:"dpd2"
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>