<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>
                <h1 class="font-weight-medium text-capitalize">security</h1>
                <v-divider></v-divider>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap>
                    <v-flex class="pa-2" xs12 sm6 md4 lg4>
                        <v-container grid-list-xl>
                            <v-layout row wrap>
                                <v-card class="mx-auto" color="secondary" dark width="400">
                                    <v-card-title>
                                        <h1 class="headline font-weight-bold lime--text">2 Factor Auth</h1>
                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="showTwoFactorAuth = !showTwoFactorAuth">
                                            <v-icon>
                                                {{ showTwoFactorAuth ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
                                            </v-icon>
                                        </v-btn>
                                    </v-card-title>

                                    <v-slide-y-transition>
                                        <v-card-text v-show="showTwoFactorAuth">
                                            Two Factor Authentication: We'll ask for a security code when we need to confirm that it's you logging
                                            in.
                                            <v-btn flat color="success" class="text-lowercase">Enable</v-btn>
                                            <v-btn flat color="red" class="text-lowercase">Disabled</v-btn>
                                        </v-card-text>
                                    </v-slide-y-transition>
                                </v-card>
                            </v-layout>
                        </v-container>
                    </v-flex>

                    <v-flex class="pa-2" xs12 sm6 md4 lg4>
                        <v-container grid-list-xl>
                            <v-layout row wrap>
                                <v-card class="mx-auto" color="secondary" dark width="400">
                                    <v-card-title>
                                        <h1 class="headline font-weight-bold light-blue--text">Password</h1>
                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="showChangePassword = !showChangePassword">
                                            <v-icon>
                                                {{ showChangePassword ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
                                            </v-icon>
                                        </v-btn>
                                    </v-card-title>

                                    <v-slide-y-transition>
                                        <v-card-text v-show="showChangePassword">
                                            Change Password: Changing your password will also reset your key.
                                        </v-card-text>
                                    </v-slide-y-transition>
                                </v-card>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showTwoFactorAuth: false,
                showChangePassword: false
            }
        }
    }
</script>