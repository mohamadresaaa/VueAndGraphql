<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Change password</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <formAlert v-if="error" :message="error.message" class="mb-3" />
                <v-form v-model="isFormValid" lazy-validation ref="form">
                  <v-text-field v-model="oldPassword" :rules="oldPasswordRules" name="oldPassword" label="Old password" type="password"></v-text-field>
                  <v-text-field v-model="newPassword" :rules="newPasswordRules" name="newPassword" label="New password" type="password"></v-text-field>
                  <v-text-field v-model="confirmNewPassword" :rules="confirmNewPasswordRules" name="confirmNewPassword" label="Confirm new password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loading" :disabled="!isFormValid || loading" @click="handleChangePassword" color="primary" type="submit">
                    change password
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
    name: 'forgotPassword',
    data() {
        return {
            isFormValid: true,
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            oldPasswordRules: [
                // check if oldPassword in input
                oldPassword => !!oldPassword || 'Old password is required',
            ],
            newPasswordRules: [
                // check if newPassword in input
                newPassword => !!newPassword || 'New password is required',
                newPassword => newPassword.length >= 8 || 'New password must be at least 8 characters',
            ],
            confirmNewPasswordRules: [
                confirmNewPassword => confirmNewPassword === this.newPassword || 'Passwords must match'
            ]
        }
    },
    computed: {
        ...mapGetters(['loading','error','user'])
    },
    methods: {
        handleChangePassword(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('changePassword', { 
                    email: this.email
                });
            }
        }
    },
    components: { formAlert }
}
</script>