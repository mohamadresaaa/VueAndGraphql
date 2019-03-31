<template>
  <v-app>
    <Navbar/>
    <v-content class="ma-4">
      <router-view>
      </router-view>

      <!-- auth error snackbar -->
      <v-snackbar v-if="authError" v-model="authErrorSnackbar" :timeout='5000' color="info" bottom>
        {{authError.message}}
        <v-btn dark flat to="/sign_in">Sign in</v-btn>
      </v-snackbar>

      <!-- message snackbar -->
      <v-snackbar v-if="message" v-model="messageSnackbar" :color="message.color" bottom>
        {{ message.content === 'Network error: Failed to fetch' ? 'Your connection to the Internet is disconnected' : message.content.replace('GraphQL error:', '') }}
        <v-btn dark flat @click="closeMessage">Close</v-btn>
      </v-snackbar>
      
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      authErrorSnackbar: false,
      messageSnackbar: false
    }
  },
  watch: {
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if(value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    message(value) {
      // if message is not null, show message snackbar
      if(value !== null) {
        this.messageSnackbar = true;
      }
    }
  },
  computed: {
    ...mapGetters(['authError', 'message'])
  },
  methods: {
    closeMessage() {
      this.$store.dispatch('message');
    }
  },
  components: { Navbar }
}
</script>
