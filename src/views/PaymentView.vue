<template>
    <div class="flex  flex-wrap justify-center">
        <TransitionGroup name="bounce">
            <CodeModal @show-code-modal="showModal('code')" v-if="showCodeModal" class="fixed left-50 top-50"/>
            <LoginModal @show-login-modal="showModal('login')" v-if="showLoginModal" class="fixed left-50 top-50"/>
        </TransitionGroup >
        <!-- <LoadingModal class="fixed left-0 top-0">TEST</LoadingModal> -->
        <div class="flex w-full sm:w-96 m-4">
            <!-- user details -->
            <UserDetails @show-login-modal="showModal('login')"/>
        </div>
        <div class="flex w-full sm:w-96 flex-col  m-4">
            <div class="w-full sm:w-96">
                <!-- dostawa -->
                <DeliveryOptions/>
            </div>
            <div class="w-full sm:w-96 ">
                <!-- płatnosc -->
                <PaymentOptions @show-code-modal="showModal('code')"/>
            </div>
        </div>
        <div class="flex w-full sm:w-96 m-4">
            <!-- summary -->
            <Summary class="w-full sm:w-96"/>
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
import LoadingModal from '../components/LoadingModal.vue';
    export default {
        components:{
            UserDetails,
            DeliveryOptions,
            PaymentOptions,
            Summary,
            CodeModal,
            LoginModal,
            LoadingModal
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

<style >

</style>