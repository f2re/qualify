<template>
    <div >
        <transition name="fade" >
            <b-container class="mb-5"
                v-if="isShow">
                <b-row style="padding-left:20px;" >
                <b-col cols="2"></b-col>
                    <b-col cols="8">
                    <hr>
                    <slot name="header"></slot>
                    
                    <span class="input-notifer fix-width"
                          v-if="isField()"
                          v-bind:class="{complete:retdata!=''}">
                        <b-form-input class="mb-3 "                                
                                :name="name" 
                                v-model="retdata"
                                :required="required"
                                v-on:keyup.enter="clickButton"
                                :type="ftype" ></b-form-input>
                    </span>

                    <b-form-textarea class="mb-3"
                            v-if="ftype=='textarea'"
                            v-model="retdata"
                            :name="name" ></b-form-textarea>

                    <div v-if="ftype=='buttons'" class="d-flex flex-column">
                        <b-button variant="outline-primary" class="mr-3"
                            v-bind:class="{active:retdata=='yes'}"
                            v-on:click="retdata='yes';clickButton()" >Yes</b-button>
                        <b-button variant="outline-primary"
                            v-bind:class="{active:retdata=='no'}"
                            v-on:click="retdata='no';clickButton()" >No</b-button>
                    </div>

                    
                    <b-form-radio-group class="mb-3  d-flex flex-column" 
                            v-if="ftype=='radio'"
                            :name="name" 
                            v-model="retdata">
                            <b-form-radio class="radio-container"
                              v-for="r in dataforrender"
                              :key="r.value"
                              :value="r.value" >{{r.label}}</b-form-radio>
                    </b-form-radio-group>

                    <b-form-checkbox-group class="mb-3 d-flex flex-column"
                            v-if="ftype=='checkbox'"
                            :name="name" 
                            v-model="retdata" >
                            <b-form-checkbox class="check-container"
                              v-for="r in dataforrender"
                              :key="r.value"
                              :value="r.value" >{{r.label}}</b-form-checkbox>                    
                    </b-form-checkbox-group>

                    <b-button variant="outline-primary" 
                              v-if="showButton()"
                              v-on:click="clickButton">Submit</b-button>
                    
                    <b-button variant="outline-primary" 
                              v-if="ftype=='sendbutton'"
                              v-on:click="$store.commit('sendRequest')">Send request</b-button>

                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
            </b-container>
        </transition>
    </div>

</template>

<script>

    export default {
        name: 'oneItem',
        props: [ 'branch', 'order','name', 'ftype', 'paramname', 'dataforrender', 'required' ],
        data() {
            return {
                // toggle class of buttons
                buttonCheck:0,
                // data for return
                retdata:'',
            }
        },
        watch:{
          isShow(newval, oldval){
            if ( newval!= oldval ){
              let _vue = this;
              setTimeout(function(){
                _vue.$el.scrollIntoView({block: "center", behavior: "smooth"});
              }, 200);
              
            }
          }
        },
        computed:{
          isShow:function(){
            if ( this.$store.state.selectedBranch==this.branch && this.$store.state.currentItem>=this.order ){
              return true;
            }
            return false;
          }
        },
        // component methods
        methods: {
            // calculate and compose data to return
            returnedData: function(){
                let _vue = this;
                return {
                    'field':_vue.paramname,
                    'value':_vue.retdata
                };
            },
            // test if this component is field
            isField: function() {
                if ( [ 'email','date','text','mobile' ].indexOf(this.ftype)!==-1 ){
                    return true;
                }
                return false;
            },
            // show submit button
            showButton: function(){
                if ( [ 'buttons','sendbutton' ].indexOf(this.ftype)==-1 ){
                    return true;
                }
                return false;
            },
            // click on button scroll and send request
            clickButton:function(){
              
              this.$store.commit('nextStep',{ 'order':this.order, 'data':this.returnedData(), 'container':this.$el } );
              return;
            }
        },
        created: function () {
          if ( [ 'checkbox','radio' ].indexOf(this.ftype)!==-1 ){
            this.retdata=[];
          }
        },
    }
</script>

<style scoped>
hr {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
button.btn.btn-outline-primary{
    width: 220px;
    margin-bottom: 10px;;
        color: #333333;
    border-color: #CCCCCC;
}
button.btn.btn-outline-primary:hover,
button.btn.btn-outline-primary.active{
    background-color: #FD173D;
    border-color: #FD173D;
    color: #ffffff;
}

.fix-width{
  width: 220px;
}




span.input-notifer.complete input{
    border: 1px solid #FD173D;
}

span.input-notifer{
    position:relative;
    display:block;
}
span.input-notifer.complete::before{
    content: " ";
    position: absolute;
    display: inline-block;
    background: #FD173D url("../assets/tick-white.svg") no-repeat scroll center center / 45%;
    width: 0px;
    height: 0px;
    padding: 12px;
    right: -11px;
    top: -11px;
    border-radius: 12px;
    z-index: 10;
}

/**
 * radio button styles
 */

 /* The container */
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.radio-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .radio-checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .radio-checkmark {
  background-color: #FD173D;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radio-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .radio-checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .radio-checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}



/**
 * checkbox container
 */

 /* The container */
.check-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.check-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.check-container:hover input ~ .check-checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.check-container input:checked ~ .check-checkmark {
  background-color: #FD173D;
}

/* Create the checkmark/indicator (hidden when not checked) */
.check-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check-container input:checked ~ .check-checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.check-container .check-checkmark:after {
  left: 9px;
  top: 3px;
  width: 8px;
  height: 14px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>