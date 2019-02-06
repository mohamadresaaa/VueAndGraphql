<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card color="blue-grey lighten-5">
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm5>
                        <h2 class="font-weight-medium text-capitalize ma-3">sign up</h2>
                    </v-flex>
                </v-layout>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleSignUp" class="px-3">
                    
                    <v-layout v-if="error" row class="mb-3">
                        <v-flex xs12>
                            <formAlert :message="error.message"></formAlert>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="username" :rules="usernameRules" label="Username" required outline></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="email" :rules="emailRules" type="email" label="Email" required outline></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="password" :rules="passwordRules" type="password" label="Password" required outline></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm4>
                            <v-btn :loading="loading" :disabled="!isFormValid" color="primary" type="submit">
                                Sign up
                                <span slot="loader">Loading...</span>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm2>
                            <h3 class="mt-3 mb-3">Already have an account?
                                <router-link to="/sign_in">Sign in</router-link>
                            </h3>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import formAlert from '../../components/FormAlert';

export default {
    data() {
        return {
            isFormValid: true,
            username: '',
            email: '',
            password: '',
            usernameRules: [
                // check if username in input
                username => !!username || 'Username is required',
                username => username.length >= 5 || 'Username must be at least 5 characters'
            ],
            emailRules: [
                // check if email in input
                email => !!email || 'Email is required',
                email => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) || 'Email must be valid'
            ],
            passwordRules: [
                // check if email in input
                password => !!password || 'Password is required',
                password => password.length >= 8 || 'Password must be at least 8 characters'
            ]
        }
    },
    methods: {
        handleSignUp(){
            if(this.$refs.form.validate()){
                this.store.dispatch('signUp', { 
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
            }
        }
    },
    computed: {
        ...mapGetters(['loading', 'error'])
    },
    components: { formAlert }
}
</script>