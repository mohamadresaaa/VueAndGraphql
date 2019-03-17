<template>
    <v-layout row wrap>
        <v-flex xs12 md12 justify-center>
            <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center mt-5">
                    <h1 id="title" class="display-4 font-weight-black primary--text">404 !</h1>
                    <p class="display-3 mt-5 font-weight-black secondary--text">NOT FOUND</p>
                </v-card-text>
                <v-card-text class="text-xs-center mt-5">
                    <v-btn router to="/" large color="primary">go to Home</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<style>
    #title {
        text-shadow: rgba(68, 137, 228, 0.3) 5px 1px, rgba(68, 137, 228, 0.2) 10px 3px
    }
</style>

<script>
    export default {
        name: 'notFound'
    }
</script>