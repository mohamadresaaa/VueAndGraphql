<template>
    <div>
        <v-list-tile ripple v-for="(item, index) in items" :key="index" router :to="item.route">
            <!-- icon -->
            <v-list-tile-action>
                <v-icon class="black--text">
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
    data() {
        return {
            items: [
                { icon: 'home', text: 'Home', route: '/' },
                { icon: 'library_books', text: 'Blog', route: '/Blog' },
                { icon: 'person', text: 'About me', route: '/about_me' },
                { icon: 'contact_support', text: 'Contact me', route: '/contact_me' },
            ]
        }
    },
}
</script>