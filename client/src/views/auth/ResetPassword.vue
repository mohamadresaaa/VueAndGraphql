<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Reset password</v-toolbar-title>
              </v-toolbar>
              <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleResetPassword">
                    <v-card-text>
                        <v-text-field v-model="newPassword" :rules="newPasswordRules" name="newPassword" label="New password" type="password"></v-text-field>
                        <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" name="confirmPassword" label="Confirm password" type="password"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" :disabled="!isFormValid || loading" color="primary" type="submit">
                            change password
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
    name: 'resetPassword',
    data() {
        return {
            isFormValid: true,
            newPassword: '',
            confirmPassword: '',
            newPasswordRules: [
                newPassword => !!newPassword || 'new password is required',
                newPassword => newPassword.length >= 8 || 'new password must be at least 8 characters',
            ],
            confirmPasswordRules: [
                confirmPassword => confirmPassword === this.newPassword || 'passwords must match'
            ]
        }
    },
    computed: {
        ...mapGetters(['loading', 'message'])
    },
    methods: {
        handleResetPassword(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('resetPassword', {
                    activeCode: this.$route.params.activeCode, 
                    newPassword: this.newPassword
                });
            }
        }
    }
}
</script>