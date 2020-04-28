<template>
    <div>
        <b-container>
        <b-row style="padding:50px; padding-left:20px;">
           <b-col cols="2"></b-col>
            <b-col cols="8">
              <p><strong>You're just a few minutes away from seeing some great options.</strong></p>
              <p>Tell us a bit about you and what you need and we'll match you with personalised deals.</p>
              <hr>
              <p>Do you have an existing website?</p>
              <b-button variant="outline-primary"
                        v-bind:class="{active:buttonCheck=='yes'}"
                        v-on:click="buttonCheck='yes';$store.commit('setBranchYes')" >Yes</b-button>
                <br>
              <b-button variant="outline-primary"
                        v-bind:class="{active:buttonCheck=='no'}"
                        v-on:click="buttonCheck='no';$store.commit('setBranchNo')" >No</b-button>
            </b-col>
             <b-col cols="2"></b-col>

        </b-row>
        </b-container>
    </div>

</template>

<script>
    export default {
        name: 'questionaire',
        data() {
            return {
                // toggle class of buttons
                buttonCheck:0,
            }
        }
    }
</script>

<style scoped>
hr {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
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


</style>