<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Two Factor Authenticate</v-toolbar-title>
                </v-toolbar>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleTwoFactorAuthenticate">
                    <v-card-text>
                        <v-text-field v-model="code" :rules="codeRules" prepend-icon="code" name="code" label="Code" type="email"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" :disabled="!isFormValid || loading" color="primary" type="submit">
                            send
                            <span slot="loader">Loading...</span>
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'twoFactorAuthenticate',
    data() {
        return {
            isFormValid: true,
            code: '',
            // check if code in input
            codeRules: [ code => !!code || 'code is required' ]
        }
    },
    computed: {
        ...mapGetters(['loading', 'user'])
    },
    watch: {
        user(value){
            if(value)
                this.$router.push('/');
        }
    },
    methods: {
        handleTwoFactorAuthenticate(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('twoFactorAuthenticate', {
                    code: this.code
                });
            }
        }
    },
}
</script>