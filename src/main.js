import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// include Vuex storage
Vue.use(Vuex)

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const store = new Vuex.Store({
  state: {
    // current item, which have param "order"
    currentItem: 0,
    // selected branch on first question
    selectedBranch: false,
    // data stack for send request
    requestData:[],
    // show modal trigger
    showThank:false,
    // branch urls
    urlsForBranch:{
      1:'https://hooks.zapier.com/hooks/catch/7349379/o5v5tdc/',
      2:'https://hooks.zapier.com/hooks/catch/7349379/o5v5dzd/',
      'clientdetails':'https://hooks.zapier.com/hooks/catch/7349379/o5v5mqe/'
    }
  },
  mutations: {
    // selec branch, when click Yes
    setBranchYes(state) {
      // set branch number to 1
      state.selectedBranch = 1;
      // reset current item
      state.currentItem    = 1;
      // reset request data
      state.requestData    = [];
    },
    // select Branch when click no
    setBranchNo(state){
      // set branch number to 1
      state.selectedBranch = 2;
      // reset current item
      state.currentItem    = 1;
      // reset request data
      state.requestData    = [];
    },
    // show next question
    nextStep(state,data){
      // extract order data from commit
      var maxord = data.order;
      var _v = data.data.field+'='+data.data.value;
      if ( state.currentItem <= maxord ){
        // increace current item index for step to next
        state.currentItem++;
        // push data to save on store
        state.requestData.push( _v );
        // scroll down
        // var container = this.$app.$el.querySelector(".app");
        // container.scrollTop = container.scrollHeight;
        // console.log(state.requestData);
        // data.container.nextSibling.scrollIntoView({block: "end", behavior: "smooth"});
      }else{
        // change data in storage
        state.requestData = state.requestData.splice( maxord-1, 1, _v );
      }
    },
    
    // send axios request
    sendRequest(state){

      // show thanks modal
      state.showThank = true;

      // send axios request to server
      // console.log(state.requestData);
      axios.post( state.urlsForBranch[ state.selectedBranch ], state.requestData.join('&') )
      .then(function (response) {
        console.log(response);
      });
    }
  },
  getters: {
    currentItem: state => {state.currentItem},
    selectedBranch: state => {state.selectedBranch}
  }
});


const app = new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

// add vue app to store
store.$app = app; 

