<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">category list</h1>

    <!-- loading -->
    <Loading v-if="loading" :loading="loading" />

    <v-layout v-if="!loading" row wrap class="mb-3">
      <v-tooltip bottom>
        <!-- create category link -->
        <v-btn router to="/admin/categories/add" slot="activator" flat color="grey">
          <v-icon small left>create_new_folder</v-icon>
          <span class="caption text-capitalize">new category</span>
        </v-btn>

        <!-- tooltip -->
        <span>Create a new category</span>
      </v-tooltip>
      <v-tooltip bottom>
        <!-- sort categories -->
        <v-btn slot="activator" flat color="grey" @click="sortBy('title')">
          <v-icon small left>sort_by_alpha</v-icon>
          <span class="caption text-capitalize">sort title</span>
        </v-btn>

        <!-- tooltip -->
        <span>Sort by title of category</span>
      </v-tooltip>

      <v-tooltip bottom>
        <!-- total categories -->
        <v-btn slot="activator" flat color="grey" disabled>
          <span class="caption text-capitalize">total ({{ categories.length }})</span>
        </v-btn>

        <!-- tooltip -->
        <span>Total number of categories</span>
      </v-tooltip>
    </v-layout>

    <v-card v-for="category in categories" :key="category._id" class="mb-3">
      <v-layout row wrap class="pa-3">

        <!-- category title -->
        <v-flex xs6 md6>
          <div class="caption grey--text">Category title</div>
          <div class="primary--text">{{category.title}}</div>
        </v-flex>

        <!-- actions button -->
        <v-flex xs6 sm4 md2>
          <div class="text-xs-center">
            <v-btn @click="editCategoryDialog = true" fab dark small color="primary">
              <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon dark>delete</v-icon>
            </v-btn>
          </div>
        </v-flex>

      </v-layout>
    </v-card>

    <!-- edit todo dialog -->
    <v-dialog v-model="editCategoryDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="editCategoryDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Category</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="editCategoryDialog = false">Update</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleEditCategory" class="px-3">
            <!-- title field -->
            <v-text-field v-model="title" :rules="titleRules" label="Title" prepend-icon="title"></v-text-field>

            <!-- url field -->
            <v-text-field v-model="url" :rules="urlRules" label="Url"></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loading from '../../components/Loading';

  export default {
    name: 'categories',
    data() {
      return {
        editCategoryDialog: false
      }
    },
    created() {
      this.handleGetCategories();
    },
    computed: {
      ...mapGetters(['loading', 'categories'])
    },
    methods: {
      handleGetCategories() {
        this.$store.dispatch('getCategories');
      },
      sortBy(prop) {
        return this.categories.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
      }
    },
    components: { Loading }
  }
</script>