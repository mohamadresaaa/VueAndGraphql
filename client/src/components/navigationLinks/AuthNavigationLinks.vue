<template>
    <div v-if="!user">
        <v-list-tile ripple class="hidden-md-and-up" v-for="(item, index) in items" :key="index" router :to="item.route">
            <!-- icon -->
            <v-list-tile-action>
                <v-icon v-if="item.icon" class="black--text">
                    {{item.icon}}
                </v-icon>
            </v-list-tile-action>

            <!-- text -->
            <v-list-tile-content>
                <v-list-tile-title class="black--text">
                    {{item.text}}
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            items: [
                { icon: 'lock', text: 'Sign in', route: '/sign_in' },
                { icon: null, text: 'Sign up', route: '/sign_up' }
            ]
        }
    },
}
</script>