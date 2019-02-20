<template>
    <v-list v-if="user && user.role === 'admin'">
        <v-list-group class="black--text">
            <!-- subtitle -->
            <v-list-tile slot="activator">
                <v-list-tile-title>Services</v-list-tile-title>
            </v-list-tile>
            
            <!-- items -->
            <v-list-tile v-for="(item, index) in items" :key="index" router :to="item.route">
                <v-list-tile-title v-text="item.text"></v-list-tile-title>    
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
                { text: 'Todos', route: '/todos' },
                { text: 'Notes', route: '/notes' }
            ]
        }
    }
}
</script>