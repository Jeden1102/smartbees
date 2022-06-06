<template>
    <div class="flex space-x-6">
        <CodeModal @show-code-modal="showModal('code')" v-if="showCodeModal" class="fixed left-50 top-50"/>
        <LoginModal @show-login-modal="showModal('login')" v-if="showLoginModal" class="fixed left-50 top-50"/>
        <div class="flex w-96">
            <!-- user details -->
            <UserDetails @show-login-modal="showModal('login')"/>
        </div>
        <div class="flex w-96 flex-col space-y-4">
            <div class="w-96">
                <!-- dostawa -->
                <DeliveryOptions/>
            </div>
            <div class="w-96">
                <!-- płatnosc -->
                <PaymentOptions @show-code-modal="showModal('code')"/>
            </div>
        </div>
        <div class="flex w-96">
            <!-- summary -->
            <Summary class="w-96"/>
        </div>
    </div>
</template>

<script>
import UserDetails from '../components/UserDetails.vue';
import DeliveryOptions from '../components/DeliveryOptions.vue';
import PaymentOptions from '../components/PaymentOptions.vue';
import Summary from '../components/Summary.vue';
import CodeModal from '../components/CodeModal.vue';
import LoginModal from '../components/LoginModal.vue';
    export default {
        components:{
            UserDetails,
            DeliveryOptions,
            PaymentOptions,
            Summary,
            CodeModal,
            LoginModal
        },
        data() {
            return {
                showCodeModal:false,
                showLoginModal:false,
            }
        },
        methods: {
            showModal(type){
                if(type == 'login'){
                    this.showCodeModal = false;
                    this.showLoginModal = !this.showLoginModal;
                }else{
                    this.showLoginModal = false;
                    this.showCodeModal = !this.showCodeModal;
                }
            }
        },
    }
</script>

<style  >

</style>