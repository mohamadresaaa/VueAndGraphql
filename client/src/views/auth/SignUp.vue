<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <formAlert v-if="error" :message="error.message" class="mb-3" />
                <v-form v-model="isFormValid" lazy-validation ref="form">
                  <v-text-field v-model="username" :rules="usernameRules" prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
                  <v-text-field v-model="email" :rules="emailRules" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h4 class="mt-3 mb-3">Already have an account?
                    <router-link to="/sign_in">Sign in</router-link>
                </h4>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loading" :disabled="!isFormValid || loading" @click="handleSignUp" color="primary" type="submit">
                    Sign up
                    <span slot="loader">Loading...</span>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
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
                this.$store.dispatch('signUp', { 
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