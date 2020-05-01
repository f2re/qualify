import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// include Vuex storage
Vue.use(Vuex)

Vue.use(VueReCaptcha, {
  siteKey: '6Lenue8UAAAAAIYrK9uKPHl5Le5xVwmLhMOqQFNv',
  loaderOptions: {
    useRecaptchaNet: true
  }
})

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
      'clientdetails':'https://hooks.zapier.com/hooks/catch/7349379/o5v5mqe/',
      
    },
    // user data fields
    userDataFields:['namefield','emailfield','phonefield'],
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
        
        // data.container.nextSibling.scrollIntoView({block: "end", behavior: "smooth"});
      }else{
        // change data in storage
        // state.requestData = state.requestData.splice( maxord-1, 1, _v );
      }
      console.log(state.requestData);
    },
    
    // send axios request
    sendRequest(){

      // Execute reCAPTCHA with action "login".      
      store.$app.$recaptcha('login').then((token)=>{
        // print token
        console.log(token);
        if ( token ){
          
          // send axios request to server
          axios.post( 'https://us-central1-skipil-qualify-edbee.cloudfunctions.net/sendRecaptcha', {token:token} )
          .then(function (response) {
            console.log(response);
          });
          // send request to save user data
          store.commit('sendRequestToSrv');
        }
      });


    },

    // save user data to servers
    sendRequestToSrv(state){

      axios.post( state.urlsForBranch[ state.selectedBranch ], state.requestData.join('&') )
      .then(function (response) {
        console.log(response);
      });

      // send user data
      let userdata=[];
      // set branch
      userdata.push('branch='+state.selectedBranch);
      // search needed param
      for ( var i=0; i< state.userDataFields.length; i++  ){
        for ( var j=0; j< state.requestData.length; j++  ){
          if (state.requestData[j].indexOf(state.userDataFields[i]+'=')!==-1 ){
            userdata.push(state.requestData[j]);
          }
        }
      }

      axios.post( state.urlsForBranch[ 'clientdetails' ], userdata.join('&') )
      .then(function (response) {
        console.log(response);
      });

      // show thanks modal
      state.showThank = true;

    },


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

