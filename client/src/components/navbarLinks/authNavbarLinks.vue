<template>
    <div v-if="!user">
        <v-btn light color="white darken-3" class="hidden-sm-and-down text-lowercase" router v-for="(item, index) in items" :key="index" :flat="item.icon == null ? true : false" :to="item.route">
            {{ item.text }}
            <v-icon v-if="item.icon" dark right>{{ item.icon }}</v-icon>
        </v-btn>
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