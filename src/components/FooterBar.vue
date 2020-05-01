<template>
    <div class="skipil-nav footer">


        <b-container>
            <b-navbar toggleable="lg" type="dark" variant="primary">
                <span class="copy" center>2020 copyright, All rights reserved.</span>

               

                

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item class="navitem" href="#">Home</b-nav-item>
                        <b-nav-item class="navitem" href="#">About</b-nav-item>
                        <b-nav-item class="navitem" href="#">Services</b-nav-item>
                        <b-nav-item class="navitem" href="#">Blog</b-nav-item>
                        <b-nav-item class="navitem" href="#">Contact</b-nav-item>
                    </b-navbar-nav>

                
            </b-navbar>

        </b-container>

    </div>

</template>

<script>
    export default {
        name: 'FooterBar',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

.navbar-nav {
    flex-direction: unset;
}
    .bg-primary {
        background-color: #000000 !important;
    }
    
    .navbar-dark .navbar-nav .nav-link {
        color: #FFFFFF;
    }
    
    .navbar-dark .navbar-nav .nav-link:hover {
        color: #FFFFFF;
    }
    
    .navbar-dark .navbar-brand {
        font-family: "Montserrat", Sans-serif;
        font-size: 28px;
        font-weight: 400;
    }
    
    .navbar-dark .navbar-brand:hover {
        color: #FD173D;
    }
    
    a.nav-link {
        color: #ffffff;
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    .skipil-nav {
        background-color: #000000;
        margin-top: 150px;
    }

    .copy{
        color: #FFFFFF;
        padding-top: 30px;
        padding-bottom: 30px;
    }

.footer {
  flex-shrink: 0;
}
</style>