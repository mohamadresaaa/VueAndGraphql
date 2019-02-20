<template>
    <v-list v-if="user">
        <v-list-group class="hidden-md-and-up black--text">
            <!-- subtitle -->
            <v-list-tile slot="activator">
                <v-list-tile-title>Account</v-list-tile-title>
            </v-list-tile>

            <!-- items -->
            <v-list-tile v-for="(item, index) in items" :key="index" router :to="item.route">
                <v-list-tile-title v-text="item.text"></v-list-tile-title>    
                <v-icon class="black--text" v-text="item.icon"></v-icon>
            </v-list-tile>

            <!-- sign out -->
            <v-list-tile @click="handleSignOutUser">
                <v-list-tile-title>Sign out</v-list-tile-title>    
                <v-icon class="white--text">arrow_forward</v-icon>
            </v-list-tile>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            items: [
                { icon: '', text: 'change password', route: '/user/changePassword' }
            ]
        }
    },
    methods: {
        handleSignOutUser(){
            this.$store.dispatch('signOut');
        }
    }
}
</script>