<template>
    <div class="s-nav">

        <b-container>
            <b-navbar toggleable="lg" type="dark" variant="primary">
                <b-navbar-brand href="#">Qualify</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item class="navitem" href="#">Home</b-nav-item>
                        <b-nav-item class="navitem" href="#">About</b-nav-item>
                        <b-nav-item class="navitem" href="#">Services</b-nav-item>
                        <b-nav-item class="navitem" href="#">Blog</b-nav-item>
                        <b-nav-item class="navitem" href="#">Contact</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>

        </b-container>

    </div>

</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
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
    
    .s-nav {
        background-color: #000000;
    }
</style>