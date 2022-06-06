<template>
    <div class="flex">
        <div class="flex w-96">
            <!-- user details -->
            <UserDetails/>
        </div>
        <div class="flex">
            <div>
                <!-- dostawa -->
            </div>
            <div>
                <!-- płatnosc -->
            </div>
        </div>
        <div class="flex">
            <!-- summary -->
        </div>
    </div>
</template>

<script>
import UserDetails from '../components/UserDetails.vue';
    export default {
        components:{
            UserDetails
        }
    }
</script>

<style  >

</style>