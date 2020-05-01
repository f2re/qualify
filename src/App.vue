<template>
    <div id="app"  >

        <NavBar/>
        <questionaire/>

        <div class="content" >
        <!-- Branch YES begin -->

        <oneItem    branch="1"
                    order="1"
                    name="qestion2" 
                    ftype="text" 
                    inputprepend="https://"
                    required="required"
                    paramname="textfield" >
            <p slot="header">Question 2?</p>
        </oneItem>

        <oneItem    branch="1"
                    order="2"
                    name="qestion3" 
                    ftype="name" 
                    required="required"
                    paramname="namefield" >
            <p slot="header">What is your name?</p>
        </oneItem>

        <oneItem    branch="1"
                    order="3"
                    name="qestion4" 
                    ftype="email" 
                    required="required"
                    paramname="emailfield" >
            <p slot="header">Email</p>
        </oneItem>

        <oneItem    branch="1"
                    order="4"
                    name="qestion5" 
                    ftype="phone" 
                    required="required"
                    paramname="phonefield" >
            <p slot="header">Mobile</p>
        </oneItem>

        <oneItem    branch="1"
                    order="5"
                    name="qestion6" 
                    ftype="radio" 
                    paramname="radiofield"
                    :dataforrender="radio1" >
            <p slot="header">Radio</p>
        </oneItem>

        <oneItem    branch="1"
                    order="6"
                    name="qestion7" 
                    ftype="checkbox" 
                    paramname="checkfield"
                    :dataforrender="checkbox1" >
            <p slot="header">Checkbox</p>
        </oneItem>

        <oneItem    branch="1"
                    order="7"
                    name="qestion8" 
                    ftype="checkbox" 
                    paramname="checkfield2"
                    :dataforrender="checkbox2" >
            <p slot="header">Checkbox 2</p>
        </oneItem>
    
        <oneItem    branch="1"
                    order="8"
                    name="qestion9" 
                    ftype="textarea" 
                    paramname="multilinefield" >
            <p slot="header">Question 9</p>
        </oneItem>

        <oneItem    branch="1"
                    order="9"
                    name="qestion10" 
                    ftype="textarea" 
                    paramname="multilinefield10" >
            <p slot="header">Question 10</p>
        </oneItem>

        <oneItem    branch="1"
                    order="10"
                    name="qestion11" 
                    ftype="textarea" 
                    paramname="multilinefield11" >
            <p slot="header">Question 11</p>
        </oneItem>

        <oneItem    branch="1"
                    order="11"
                    name="qestion12" 
                    ftype="radio" 
                    paramname="radiofield12"
                    :dataforrender="radio12" >
            <p slot="header">Radio 12</p>
        </oneItem>

        <oneItem    branch="1"
                    order="12"
                    name="qestion13" 
                    ftype="buttons" 
                    paramname="buttonsfield13" >
            <p slot="header">Question 13?</p>
        </oneItem>

        <oneItem    branch="1"
                    order="13"
                    name="qestion14" 
                    ftype="textarea" 
                    paramname="multilinefield14" >
            <p slot="header">Question 14</p>
        </oneItem>

        <oneItem    branch="1"
                    order="14"
                    name="qestion15" 
                    ftype="textarea" 
                    paramname="multilinefield15" >
            <p slot="header">Question 15</p>
        </oneItem>

        <oneItem    branch="1"
                    order="15"
                    name="qestion16" 
                    ftype="buttons" 
                    paramname="buttonsfield16" >
            <p slot="header">Question 16?</p>
        </oneItem>

        <oneItem    branch="1"
                    order="16"
                    name="qestion17" 
                    ftype="textarea" 
                    paramname="multilinefield17" >
            <p slot="header">Question 17</p>
        </oneItem>

        <oneItem    branch="1"
                    order="17"
                    name="qestion18" 
                    ftype="textarea" 
                    paramname="multilinefield18" >
            <p slot="header">Question 18</p>
        </oneItem>

        <oneItem    branch="1"
                    order="18"
                    name="qestion19" 
                    ftype="sendbutton" >
            <p slot="header">Send request</p>
        </oneItem>

        <!-- Branch YES end -->


        <!-- Branch NO begin -->
        <oneItem    branch="2"
                    order="1"
                    name="qestion1" 
                    ftype="checkbox" 
                    paramname="checkfield1"
                    :dataforrender="checkbox1b2" >
            <p slot="header">Checkbox 1</p>
        </oneItem>

        <oneItem    branch="2"
                    order="2"
                    name="qestion2" 
                    ftype="textarea" 
                    paramname="multilinefield2" >
            <p slot="header">Question 2</p>
        </oneItem>

        <oneItem    branch="2"
                    order="3"
                    name="qestion3" 
                    ftype="name" 
                    required="required"
                    paramname="namefield" >
            <p slot="header">What is your name?</p>
        </oneItem>

        <oneItem    branch="2"
                    order="4"
                    name="qestion4" 
                    ftype="email" 
                    required="required"
                    paramname="emailfield" >
            <p slot="header">Email</p>
        </oneItem>

        <oneItem    branch="2"
                    order="5"
                    name="qestion5" 
                    ftype="phone" 
                    required="required"
                    paramname="phonefield" >
            <p slot="header">Mobile</p>
        </oneItem>

        <oneItem    branch="2"
                    order="6"
                    name="qestion6" 
                    ftype="textarea" 
                    paramname="multilinefield6" >
            <p slot="header">Question 6</p>
        </oneItem>

        <oneItem    branch="2"
                    order="7"
                    name="qestion7" 
                    ftype="buttons" 
                    paramname="buttonsfield7" >
            <p slot="header">Question 7?</p>
        </oneItem>

        <oneItem    branch="2"
                    order="8"
                    name="qestion8" 
                    ftype="textarea" 
                    paramname="multilinefield8" >
            <p slot="header">Question 8</p>
        </oneItem>

        <oneItem    branch="2"
                    order="9"
                    name="qestion9" 
                    ftype="buttons" 
                    paramname="buttonsfield9" >
            <p slot="header">Question 9?</p>
        </oneItem>

        <oneItem    branch="2"
                    order="10"
                    name="qestion10" 
                    ftype="checkbox" 
                    paramname="checkfield10"
                    :dataforrender="checkbox10b2" >
            <p slot="header">Checkbox 10</p>
        </oneItem>

        <oneItem    branch="2"
                    order="11"
                    name="qestion11" 
                    ftype="date" 
                    paramname="datefield" >
            <p slot="header">What date 11?</p>
        </oneItem>

        <oneItem    branch="2"
                    order="12"
                    name="qestion12" 
                    ftype="textarea" 
                    paramname="multilinefield12" >
            <p slot="header">Question 12</p>
        </oneItem>

        <oneItem    branch="2"
                    order="13"
                    name="qestion13" 
                    ftype="sendbutton" >
            <p slot="header">Send request</p>
        </oneItem>
        <!-- Branch NO end -->
        </div>

        <b-modal v-model="$store.state.showThank" hide-footer title="ThankYou">
            <p class="my-4">Thank you for your data!</p>
            <a href="/home" class="btn btn-outline-primary">Return to Home page</a>
        </b-modal>
        <FooterBar/>


    </div>
</template>

<script>
    import NavBar from './components/NavBar'
    import questionaire from './components/questionaire'
    import FooterBar from './components/FooterBar'
    import oneItem from './components/oneItem'

    export default {
        name: 'App',
        components: {
            questionaire,
            oneItem,
            NavBar,
            FooterBar
        },
        data() {
            return {
                // store check box array
                checkbox1:[
                    { 'label':'Check1',
                      'value':1  },
                    { 'label':'Check2',
                      'value':2  },
                    { 'label':'Check3',
                      'value':3  },
                    { 'label':'Check4',
                      'value':4  },
                    { 'label':'Check5',
                      'value':5  },
                    { 'label':'Check6',
                      'value':6  },
                    { 'label':'Check7',
                      'value':7  },
                ],
                // store check box array
                checkbox2:[
                    { 'label':'Check1',
                      'value':1  },
                    { 'label':'Check2',
                      'value':2  },
                    { 'label':'Check3',
                      'value':3  },
                    { 'label':'Check4',
                      'value':4  },
                    { 'label':'Check5',
                      'value':5  },
                    { 'label':'Check6',
                      'value':6  },
                ],
                // store check box array
                // branch 2
                checkbox10b2:[
                    { 'label':'Check1',
                      'value':1  },
                    { 'label':'Check2',
                      'value':2  },
                    { 'label':'Check3',
                      'value':3  },
                    { 'label':'Check4',
                      'value':4  },
                ],
                // store check box array
                // branch 2
                checkbox1b2:[
                { 'label':'Check1',
                      'value':'a'  },
                    { 'label':'Check2',
                      'value':'b'  },
                    { 'label':'Check3',
                      'value':'c'  },
                    { 'label':'Check4',
                       'value':'d'  },
                    { 'label':'Check5',
                       'value':'e'  },
                ],
                // store Radio button array Question 6
                radio1:[
                    { 'label':'Radio1',
                      'value':1  },
                    { 'label':'Radio2',
                      'value':2  },
                    { 'label':'Radio3',
                      'value':3  },
                ],
                // store Radio button array Question 12
                radio12:[
                    { 'label':'Radio1',
                      'value':1  },
                    { 'label':'Radio2',
                      'value':2  },
                    { 'label':'Radio3',
                      'value':3  },
                    { 'label':'Radio4',
                      'value':4  },
                    { 'label':'Radio5',
                      'value':5  },
                    { 'label':'Radio6',
                      'value':6  },
                ],
            }
        },
        methods: {
          recaptcha() {
              this.$recaptcha('login').then((token) => {
                console.log(token) // Will print the token
              })
          }
          // async recaptcha() {
          //   // (optional) Wait until recaptcha has been loaded.
          //   await this.$recaptchaLoaded()

          //   // Execute reCAPTCHA with action "login".
          //   const token = await this.$recaptcha('login')

          //   return token;
          // }
        }
    }
</script>

<style>

.custom-control-input:checked ~ .custom-control-label::before{
  background-color: #FD173D!important;
  border-color: #FD173D!important;
}
.custom-control-label{
  cursor: pointer;
}
.radio-container .custom-control-label::before{
  top: 0.0rem;
  left: -2.0rem;
  width: 1.5rem;
  height: 1.5rem;
}
.radio-container .custom-control-label::after{
  top: 0.0rem;
  left: -2.0rem;
  width: 1.5rem;
  height: 1.5rem;
}

/**
 * checkboxes
 */

.check-container  .custom-control-label::before{
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  left:-2.0rem;
   border-radius: 0!important;
}
.check-container .custom-control-label::after{
  top:0;
  left:-2.0rem;
  width: 1.5rem;
  height: 1.5rem;
}

html, body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1 0 auto;
}
</style>