<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card color="blue-grey lighten-5">
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm5>
                        <h2 class="font-weight-medium text-capitalize ma-3">sign up</h2>
                    </v-flex>
                </v-layout>
                <v-form @submit.prevent="handleSignUp" class="px-3">
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="username" label="Username" required outline></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="email" label="Email" required outline></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field v-model="password" type="password" label="Password" required outline></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm4>
                            <v-btn color="primary" type="submit">Sign up</v-btn>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center align-content-center row>
                        <v-flex xs12 sm6 offset-sm2>
                            <h3 class="mt-3 mb-3">Already have an account?
                                <router-link to="/signup">Sign in</router-link>
                            </h3>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        handleSignUp(){
            this.store.dispatch('signup', { 
                username: this.username,
                email: this.email,
                password: this.password
            });
        }
    },
}
</script>