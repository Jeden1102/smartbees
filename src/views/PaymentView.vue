<template>
    <div class="flex  flex-wrap justify-center">
        <TransitionGroup name="bounce">
            <CodeModal @show-code-modal="showModal('code')" v-if="showCodeModal" class="fixed left-50 top-50"/>
            <LoginModal @show-login-modal="showModal('login')" v-if="showLoginModal" class="fixed left-50 top-50"/>
            <OrderConfirmationModal @show-order-modal="showModal('order')" v-if="showOrderConfirmationModal" class="fixed left-50 top-50"/>
        </TransitionGroup >
        <LoadingModal v-if="loading" class="fixed left-0 top-0"></LoadingModal>
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
            <Summary  @show-order-modal="showModal('order')"  class="w-full sm:w-96"/>
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
import OrderConfirmationModal from '../components/OrderConfirmationModal.vue';
import { mapState } from 'vuex';

    export default {
        components:{
            UserDetails,
            DeliveryOptions,
            PaymentOptions,
            Summary,
            CodeModal,
            LoginModal,
            LoadingModal,
            OrderConfirmationModal
        },
        data() {
            return {
                showCodeModal:false,
                showLoginModal:false,
                showOrderConfirmationModal:false,
            }
        },
        computed: {
        ...mapState([
            'loading',
        ])
        },
        methods: {
            showModal(type){
                if(type == 'login'){
                    this.showCodeModal = false;
                    this.showLoginModal = !this.showLoginModal;
                }else if(type=='order'){
                    this.showOrderConfirmationModal = !this.showOrderConfirmationModal;
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