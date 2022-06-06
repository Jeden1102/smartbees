<template>
    <div>
        <div class="header-payment">
            <img class="h-6" src="/src/assets/user.png" alt="">
            1. twoje dane
        </div>
        <button class="w-full p-2 border-2 border-red-500 text-red-500 my-2 font-bold hover:bg-red-500 hover:text-white transition">Logowanie</button>
        <p>Masz już konto ? Kliknij żeby się zalogować.</p>
        <input id="newAccount" type="checkbox">
        <label for="newAccount">Stwórz nowe konto</label>
        <form class="w-full" action="">
            <input type="text" class="input-payment" placeholder="Nazwa użytkownika">
        </form>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>