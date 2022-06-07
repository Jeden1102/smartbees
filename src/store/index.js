import {createStore} from 'vuex';
const store = createStore({
    state:{
        userDetails:{},
        deliveryMethod:'paczkomaty',
        deliveryPrice:10.99,
        paymentMethod:'payu',
        promoCode:'',
        promoCodeValue:'',
        orderCode:'',
        loading:false,
    },
    getters:{},
    actions:{},
    mutations:{
        setDeliveryMethod(state,payload){
            if(payload=="dpd2"){
                state.paymentMethod = "odbior";
            }
            state.deliveryMethod = payload;
        },
        setPaymentMethod(state,payload){
            state.paymentMethod = payload;
        },
        setUserDetails(state,payload){
            state.userDetails = payload;
        },
        setPromoCode(state,payload){
            state.promoCode = payload;
        },
        setPromoCodeValue(state,payload){
            state.promoCodeValue = payload;
        },
        removePromoCode(state){
            state.promoCode = '';
            state.promoCodeValue = '';
        },
        setOrderCode(state,payload){
            state.orderCode = payload
        },
        setDeliveryMethodPrice(state,payload){
            state.deliveryPrice=payload
        }
    },
    modules:{},
});
export default store;