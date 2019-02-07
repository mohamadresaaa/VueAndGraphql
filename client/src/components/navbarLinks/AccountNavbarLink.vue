<template>
    <v-menu class="hidden-sm-and-down" v-if="user" transition="slide-x-transition" bottom right>
      <v-btn light color="white darken-3" slot="activator">
        {{ user.name === null ? user.username : user.name }}
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" router :to="item.route">
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="handleSignOutUser">
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      items: [
        { text: 'Profile', route: '/profile' }
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