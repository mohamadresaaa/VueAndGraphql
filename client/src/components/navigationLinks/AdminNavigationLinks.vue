<template>
    <v-list v-if="isAdmin">
        <v-list-group class="black--text">
            <v-list-tile slot="activator">
                <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
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
            isAdmin: false,
            items: [
                { text: 'Categories', route: '/admin/categories' }
            ]
        }
    },
    watch: {
        user(value){
            if(value.role === 'admin')
                this.isAdmin = true;
        }
    }
}
</script>