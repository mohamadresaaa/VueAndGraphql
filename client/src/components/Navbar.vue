<template>
    <nav>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link to="/">
                    <span class="white--text">hexzm</span>
                </router-link>
                <span class="font-weight-light text-lowercase">.org</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Auth link -->
            <v-btn light color="white darken-3" class="hidden-sm-and-down text-lowercase" router v-for="(link, index) in authLinks" :key="index" :flat="link.icon == null ? true : false" :to="link.route">
                {{ link.text }}
                <v-icon v-if="link.icon" dark right>{{ link.icon }}</v-icon>
            </v-btn>

            <!-- sign out -->
            <v-btn light v-if="user" color="white darken-3" class="text-lowercase" @click="handleSignOutUser">
                Sign out
                <v-icon dark right>arrow_forward</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue accent-2">
            <v-layout column align-center>
                <v-flex class="mt-5 mb-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" src="https://avatars3.githubusercontent.com/u/41260098?s=460&v=4">
                    </v-avatar>
                    <span class="white--text subheading ml-2">Mohamadreza Mosalli</span>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile>
                    <v-flex xs12 sm12 md12>
                        <v-text-field label="search" placeholder="Search..." solo></v-text-field>
                    </v-flex>
                </v-list-tile>

                <!-- default navigation link -->
                <DefaultNavigationLinks/>
                
                <!-- auth navigation link -->
                <AuthNavigationLinks :user="user" />

                <!-- account navigation link -->
                <AccountNavigationLink :user="user" />
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import DefaultNavigationLinks from './navigationLinks/DefaultNavigationLinks';
import AuthNavigationLinks from './navigationLinks/AuthNavigationLinks';
import AccountNavigationLink from './navigationLinks/AccountNavigationLink';

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            drawer: false
        };
    },
    methods: {
        handleSignOutUser(){
            this.$store.dispatch('signOut');
        }
    },
    computed: {
        ...mapGetters(['user']),
        authLinks() {
            let items = [
                { icon: 'lock', text: 'Sign in', route: '/sign_in' },
                { icon: null, text: 'Sign up', route: '/sign_up' }
            ];

            if(this.user) return items = null;

            return items;
        }
    },
    components: { DefaultNavigationLinks, AuthNavigationLinks, AccountNavigationLink }
}
</script>
