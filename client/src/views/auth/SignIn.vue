<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card color="blue-grey lighten-5">
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm5>
                        <h2 class="font-weight-medium text-capitalize ma-3">sign in</h2>
                    </v-flex>
                </v-layout>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleSignIn" class="px-3">
                    <v-layout v-if="error" row class="mb-3">
                        <v-flex xs12>
                            <formAlert :message="error.message"></formAlert>
                        </v-flex>
                    </v-layout>
                    
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field :rules="emailRules" v-model="email" label="Email" required outline></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field :rules="passwordRules" v-model="password" type="password" label="Password" required outline></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm4>
                            <v-btn :loading="loading" :disabled="!isFormValid || loading" color="primary" type="submit">
                                Sign in
                                <span slot="loader">Loading...</span>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm2>
                            <h3 class="mt-3 mb-3">Don't have an account?
                                <router-link to="/sign_up">Sign up</router-link>
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
            email: '',
            password: '',
            emailRules: [
                // check if email in input
                email => !!email || 'Email is required',
                email => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) || 'Email must be valid'
            ],
            passwordRules: [
                // check if email in input
                password => !!password || 'Password is required'
            ]
        }
    },
    computed: {
        ...mapGetters(['loading','error','user'])
    },
    watch: {
        user(value){
            if(value)
                this.$router.push('/');
        }
    },
    methods: {
        handleSignIn(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('signIn', { 
                    email: this.email,
                    password: this.password
                });
            }
        }
    },
    components: { formAlert }
}
</script>