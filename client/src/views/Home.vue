<template>
  <v-container text-xs-center>
    <!-- <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="100" :width="10" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout> -->

    <v-flex xs12>
      <v-btn color="success" router to="/profile">profile</v-btn>
      <ul v-if="!loading">
        <li v-for="(category, index) in categories" :key="index">
          {{ category.title }} - {{ category.url }}
        </li>
      </ul>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  created() {
    this.handleGetCategories();
  },
  computed: {
    ...mapGetters(["loading", "categories"])
  },
  methods: {
    handleGetCategories() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getCategories");
    }
  }
};
</script>
