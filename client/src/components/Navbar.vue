<template>
    <nav>
        <v-toolbar app dark color="secondary">
            <v-toolbar-side-icon v-if="!activeSearchBox" @click="drawer = !drawer"></v-toolbar-side-icon>
            
            <!-- website name -->
            <v-toolbar-title v-if="!activeSearchBox" class="headline text-uppercase">
                <router-link style="text-decoration: none" to="/">
                    <span class="white--text">hexzm</span>
                </router-link>
                <span class="font-weight-light text-lowercase">.org</span>
            </v-toolbar-title>

            <v-btn class="hidden-md-and-up" v-if="activeSearchBox" @click="activeSearchBox = false" icon>
                <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-spacer v-if="!activeSearchBox"></v-spacer>

            <v-btn v-if="!activeSearchBox" class="hidden-md-and-up" @click="activeSearchBox = true" icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-text-field v-if="activeSearchBox" solo-inverted flat hide-details label="Search"></v-text-field>

            <!-- search box -->
            <v-text-field class="hidden-sm-and-down" solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
            
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <!-- auth link -->
            <AuthNavbarLinks :user="user" />

            <!-- account actions -->
            <AccountNavbarLink :user="user" />

        </v-toolbar>
        <v-navigation-drawer app v-model="drawer">

            <!-- avatar of user -->
            <v-layout v-if="user" column align-center id="avatarBackground">
                <v-flex class="mt-5 mb-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" :src="user.avatar">
                    </v-avatar>
                    <span class="white--text subheading ml-2">{{ user.name === null ? user.username : user.name }}</span>
                </v-flex>
            </v-layout>
            <v-list>
                <!-- default navigation links -->
                <DefaultNavigationLinks/>
                
                <!-- auth navigation links -->
                <AuthNavigationLinks :user="user" />

                <!-- service navigation links -->
                <ServiceNavigationLinks :user="user" />

                <!-- admin navigation links -->
                <AdminNavigationLinks :user="user" />

                <!-- account navigation links -->
                <AccountNavigationLinks :user="user" />
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<style>
    #avatarBackground{
        background-color: #333644
    }
</style>

<script>
// navbar link component
import AuthNavbarLinks from './navbarLinks/AuthNavbarLinks';
import AccountNavbarLink from './navbarLinks/AccountNavbarLink'

// navagation link component
import DefaultNavigationLinks from './navigationLinks/DefaultNavigationLinks';
import AuthNavigationLinks from './navigationLinks/AuthNavigationLinks';
import AccountNavigationLinks from './navigationLinks/AccountNavigationLinks';
import AdminNavigationLinks from './navigationLinks/AdminNavigationLinks';
import ServiceNavigationLinks from './navigationLinks/ServiceNavigationLinks';

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            drawer: false,
            avatar: null,
            activeSearchBox: false
        };
    },
    computed: {
        ...mapGetters(['user'])
    },
    components: { AuthNavbarLinks, AccountNavbarLink, DefaultNavigationLinks, AuthNavigationLinks, AccountNavigationLinks, AdminNavigationLinks, ServiceNavigationLinks }
}
</script>
