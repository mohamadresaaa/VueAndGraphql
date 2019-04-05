<template>
  <div>
    <!-- categories -->
    <v-card>
      <v-card-title>
        <h1 class="font-weight-medium text-capitalize">Categories</h1>
        <v-tooltip bottom>
          <!-- create category link -->
          <v-btn router to="/admin/categories/add" slot="activator" flat color="grey">
            <v-icon small left>create_new_folder</v-icon>
            <span class="caption text-capitalize">new category</span>
          </v-btn>

          <!-- tooltip -->
          <span>Create a new category</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" outline></v-text-field>
      </v-card-title>
      <v-data-table :loading="loading" :headers="headers" :items="categories" :search="search">
        <template v-slot:items="props">
          <td>{{ props.item.title }}</td>
          <td>
            <v-btn @click="loadCategory(props.item)" flat icon dark small color="primary">
              <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn @click="handleDeleteCategory(props.item._id)" flat icon dark small color="red">
              <v-icon dark>delete</v-icon>
            </v-btn>
          </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>

    <!-- edit todo dialog -->
    <v-dialog v-model="editCategoryDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="secondary">
          <v-btn icon dark @click="editCategoryDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Category</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="handleUpdateCategory()" :disabled="!isFormValid">Update</v-btn>
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

  export default {
    name: 'categories',
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Title',
            align: 'left',
            value: 'title'
          },
          {
            text: 'Actions',
            sortable: false
          }
        ],
        editCategoryDialog: false,
        title: '',
        url: '',
        titleRules: [title => !!title.trim() || 'Title is required'],
        urlRules: [url => !!url.trim() || 'Url is required'],
        isFormValid: true
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
      handleUpdateCategory() {
        this.$store.dispatch('updateCategory', {
          categoryId: this.categoryId,
          title: this.title,
          url: this.url
        });
        this.editCategoryDialog = false;
      },
      handleDeleteCategory(categoryId) {
        this.$store.dispatch('deleteCategory', {
          categoryId
        });
      },
      loadCategory({ _id, title, url }, editCategoryDialog = true) {
        this.editCategoryDialog = editCategoryDialog;
        this.categoryId = _id;
        this.title = title;
        this.url = url;
      }
    }
  }
</script>