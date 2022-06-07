import {createStore} from 'vuex';
const store = createStore({
    state:{
        userDetails:{},
        deliveryMethod:'',
        paymentMethod:'',
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
    },
    modules:{},
});
export default store;