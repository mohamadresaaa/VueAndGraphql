<template>
    <div>
        <h1 class="font-weight-medium text-capitalize">category list</h1>
        <v-layout row wrap class="mb-3">
            <v-tooltip bottom>
              <v-btn router to="/admin/categories/add" slot="activator" flat color="grey">
                  <v-icon small left>create_new_folder</v-icon>
                  <span class="caption text-capitalize">new category</span>
              </v-btn>
              <span>Create a new category</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn slot="activator" flat color="grey" @click="sortBy('title')">
                    <v-icon small left>sort_by_alpha</v-icon>
                    <span class="caption text-capitalize">sort title</span>
                </v-btn>
                <span>Sort by title of category</span>
            </v-tooltip>
        </v-layout>

      <v-card v-for="(category, index) in categories" :key="index" class="mb-3">
        <v-layout row wrap class="pa-3">
          <v-flex xs6 md6>
            <div class="caption grey--text">Category title</div>
            <div class="primary--text">{{category.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="text-xs-center">
              <v-btn router to="/notes/edit" fab dark small color="primary">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="red">
                <v-icon dark>delete</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.getCategories();
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    getCategories(){
      this.$store.dispatch('getCategories');
    },
    sortBy(prop) {
      return this.categories.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
}
</script>