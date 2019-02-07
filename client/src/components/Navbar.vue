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

            <!-- auth link -->
            <AuthNavbarLinks :user="user" />

            <!-- account actions -->
            <AccountNavbarLink :user="user" />

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

                <!-- search box -->
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
// navbar link component
import AuthNavbarLinks from './navbarLinks/AuthNavbarLinks';
import AccountNavbarLink from './navbarLinks/AccountNavbarLink'

// navagation link component
import DefaultNavigationLinks from './navigationLinks/DefaultNavigationLinks';
import AuthNavigationLinks from './navigationLinks/AuthNavigationLinks';
import AccountNavigationLink from './navigationLinks/AccountNavigationLink';

import { mapGetters } from 'vuex';
import { posix } from 'path';

export default {
    data() {
        return {
            drawer: false
        };
    },
    computed: {
        ...mapGetters(['user'])
    },
    components: { AuthNavbarLinks, AccountNavbarLink, DefaultNavigationLinks, AuthNavigationLinks, AccountNavigationLink }
}
</script>
