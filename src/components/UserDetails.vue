<template>
    <div class="flex flex-col">
        <div class="header-payment">
            <img class="h-6" src="/src/assets/user.png" alt="">
            <p>1. twoje dane</p>
        </div>
        <button @click="showLoginModalMethod" class="w-full p-2 border-2 border-red-500 text-red-500 my-2 font-bold hover:bg-red-500 hover:text-white transition">Logowanie</button>
        <p>Masz już konto ? Kliknij żeby się zalogować.</p>
        <div class="flex items-center  space-x-2">
            <input class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="newAccount" type="checkbox">
            <label for="newAccount">Stwórz nowe konto</label>
        </div>
        <form class="w-full" action="">
            <input type="text" class="input-payment" placeholder="Nazwa użytkownika">
            <input type="password" class="input-payment" placeholder="Nazwa użytkownika">
            <input type="password" class="input-payment" placeholder="Hasło">
            <input type="text" class="input-payment" placeholder="Powtórz hasło">
            <input type="text" class="input-payment" placeholder="Imię*">
            <input type="text" class="input-payment" placeholder="Nazwisko*">
                <select id="country" name="country" autocomplete="country-name" class="my-2 block w-full p-2 border border-gray-500 bg-white rounded-sm text-gray-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
            <input type="text" class="input-payment" placeholder="Adres*">
            <div class="flex space-x-2">
                <input type="text" class="input-payment" placeholder="Kod pocztowy*">
                <input type="text" class="input-payment" placeholder="Miasto*">
            </div>
            <input type="text" class="input-payment" placeholder="Telefon*">
            <div class="flex items-center  space-x-2">
                <input class="h-4 w-4 text-red-600 focus:ring-red-500 p-1 border-gray-300 rounded" id="otherAdress" type="checkbox">
                <label for="otherAdress">Dostawa pod inny adres</label>
            </div>
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
    }
</script>

<style lang="scss" scoped>

</style>