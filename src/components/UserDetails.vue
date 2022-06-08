<template>
    <div class="flex flex-col">
        <div class="header-payment">
            <img class="h-6" src="/src/assets/user.png" alt="">
            <p>1. twoje dane</p>
        </div>
        <button @click="showLoginModalMethod" class="w-full p-2 border-2 border-red-500 text-red-500 my-2 font-bold hover:bg-red-500 hover:text-white transition">Logowanie</button>
        <p>Masz już konto ? Kliknij żeby się zalogować.</p>
        <div class="flex items-center  space-x-2">
            <input v-model="userDetails.newAccount" class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="newAccount" type="checkbox">
            <label for="newAccount">Stwórz nowe konto</label>
        </div>
        <form class="w-full" action="">
            <Transition name="bounce">
            <div v-if="userDetails.newAccount">
                <input v-model="userDetails.username" type="text" class="input-payment" placeholder="Nazwa użytkownika">
                <input v-model="userDetails.password" type="password" class="input-payment" placeholder="Hasło">
                <input v-model="userDetails.passwordRepeat" type="password" class="input-payment" placeholder="Powtórz hasło">
            </div>
            </Transition>
            <input v-model="userDetails.email" type="e-mail" class="input-payment" placeholder="Adres e-mail*">
            <input v-model="userDetails.name" type="text" class="input-payment" placeholder="Imię*">
            <input v-model="userDetails.surname" type="text" class="input-payment" placeholder="Nazwisko*">
                <select v-model="userDetails.country" id="country" name="country" autocomplete="country-name" class="my-2 block w-full p-2 border border-gray-500 bg-white rounded-sm text-gray-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
            <input type="text" v-model="userDetails.address" class="input-payment" placeholder="Adres*">
            <div class="flex space-x-1">
                <input v-model="userDetails.postCode" type="text" class="input-payment" placeholder="Kod pocztowy*">
                <input v-model="userDetails.city" type="text" class="input-payment" placeholder="Miasto*">
            </div>
            <input v-model="userDetails.phoneNumber" type="text" class="input-payment" placeholder="Telefon*">
            <div class="flex items-center  space-x-2">
                <input  v-model="userDetails.setNewAddress" class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="otherAdress" type="checkbox">
                <label for="otherAdress">Dostawa pod inny adres</label>
            </div>
            <Transition name="bounce">
            <div v-if="userDetails.setNewAddress" class="newAddress">
                <select v-model="userDetails.newAddress.country" id="country" name="country" autocomplete="country-name" class="my-2 block w-full p-2 border border-gray-500 bg-white rounded-sm text-gray-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                </select>
                <input type="text" v-model="userDetails.newAddress.address" class="input-payment" placeholder="Adres*">
                <div class="flex space-x-2">
                    <input v-model="userDetails.newAddress.postCode" type="text" class="input-payment" placeholder="Kod pocztowy*">
                    <input v-model="userDetails.newAddress.city" type="text" class="input-payment" placeholder="Miasto*">
                </div>
            </div>
            </Transition>
        </form>
    </div>
</template>

<script>

    export default {
        methods: {
            showLoginModalMethod(){
                this.$emit('show-login-modal')
            }
        },
        data() {
            return {
                userDetails:{
                    newAccount:false,
                    setNewAddress:false,
                    username:'',
                    password:'',
                    passwordRepeat:'',
                    name:'',
                    email:'',
                    surname:'',
                    country:'United States',
                    address:'',
                    postCode:'',
                    city:'',
                    phoneNumber:'',
                    newAddress:{
                        country:'United States',
                        address:'',
                        postCode:'',
                        city:'',
                    },
                },
            }
        },
         watch: {
            userDetails: {
                handler(val){
                this.$store.commit("setUserDetails",this.userDetails)
                },
                deep: true
            }
}
    }
</script>

<style  >
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>