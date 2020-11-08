
<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
<!--        <div class="swiper-scrollbar"></div>-->
    </div>
</template>
<script>
    import Swiper, { Navigation, Pagination } from 'swiper';
    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination]);
    import 'swiper/swiper-bundle.css';
    import {mapGetters} from "vuex";
    export default {
        components: {

        },

        data () {
            return {


            }
        },



        mounted () {

            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters

                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        },


    }
</script>

<style>
    .swiper-slide {
        height: 250px!important;
        background-color: #1d68a7;
    }
</style>
