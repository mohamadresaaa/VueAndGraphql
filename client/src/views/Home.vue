<template>
  <v-container text-xs-center>
    <Loading v-if="loading" :loading="loading" />
    <v-flex xs12>
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
import Loading from '../components/Loading';

export default {
  name: 'home',
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
  },
  components: { Loading }
};
</script>
