<template>
  <div>
    <v-layout v-if="!loading" justify-center align-center wrap>
      <v-flex xs12>
        <!-- categories -->
        <v-layout row wrap>
          <v-flex class="pa-2" xs6 sm4 md2 v-for="(category, index) in categories" :key="index">
            <v-container grid-list-xl pa-0>
              <v-card>
                <v-card-text class="text-xs-center">
                  {{ category.title }}
                </v-card-text>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
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
      },
      genrateColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      }
    },
    components: {
      Loading
    }
  };
</script>