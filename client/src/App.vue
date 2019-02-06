<template>
  <v-app>
    <Navbar/>
    <v-content class="ma-4">
      <router-view>
      </router-view>
      <!-- Auth Error Snackbar -->
      <v-snackbar v-if="authError" v-model="authErrorSnackbar" :timeout='5000' color="info" bottom>
        {{authError.message}}
        <v-btn dark flat to="/sign_in">Sign in</v-btn>
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
      authErrorSnackbar: false
    }
  },
  watch: {
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if(value !== null) {
        this.authErrorSnackbar = true;
      }
    }
  },
  computed: {
    ...mapGetters(['authError'])
  },
  components: { Navbar }
}
</script>
