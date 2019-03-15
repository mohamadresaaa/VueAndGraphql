<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">todo list</h1>

    <!-- loading -->
    <Loading v-if="loading" :loading="loading" />

    <v-layout v-if="!loading" row wrap class="mb-3">
      <v-tooltip bottom>
        <v-btn router to="/todos/add" slot="activator" flat color="grey">
          <v-icon small left>create_new_folder</v-icon>
          <span class="caption text-capitalize">new todo</span>
        </v-btn>
        <span>Create a new todo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <v-btn slot="activator" flat color="grey" @click="sortBy('content')">
          <v-icon small left>sort_by_alpha</v-icon>
          <span class="caption text-capitalize">sort content</span>
        </v-btn>
        <span>Sort by content of todo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <v-btn slot="activator" flat color="grey" @click="sortBy('status')">
          <v-icon small left>sort_by_alpha</v-icon>
          <span class="caption text-capitalize">sort status</span>
        </v-btn>
        <span>Sort by status of todo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <!-- total todos -->
        <v-btn slot="activator" flat color="grey" disabled>
          <span class="caption text-capitalize">total ({{ todos.length }})</span>
        </v-btn>

        <!-- tooltip -->
        <span>Total number of todos</span>
      </v-tooltip>
    </v-layout>
    <v-card v-for="(todo, index) in todos" :key="index" class="mb-3">
      <v-layout row wrap :class="`pa-3 project ${todo.status === true ? 'complete' : 'uncomplete'}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Content</div>
          <div>{{todo.content}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Due by</div>
          <div>{{ relativeTime(todo.createdAt) }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div>
            <v-chip small :class="`${todo.status === true ? 'complete' : 'uncomplete'} white--text caption`">{{todo.status
              === true ? 'complete' : 'uncomplete'}}</v-chip>
          </div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="text-xs-center">
            <v-btn v-if="!todo.status" fab dark small color="success">
              <v-icon dark>done</v-icon>
            </v-btn>
            <v-btn @click="loadTodo(todo)" fab dark small color="primary">
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
    <v-dialog v-model="editTodoDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="editTodoDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Todo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="editTodoDialog = false">Update</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddTodo" class="px-3">
            <!-- content field -->
            <v-text-field v-model="content" :rules="contentRules" label="Content"></v-text-field>

            <!-- status field -->
            <v-switch v-model="status" :label="`Status: ${ status === true ? 'complete' : 'uncomplete' }`"></v-switch>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
  .project.complete {
    border-left: 4px solid #2ecc71;
  }

  .project.uncomplete {
    border-left: 4px solid #e74c3c;
  }

  .v-chip.complete {
    background-color: #2ecc71;
  }

  .v-chip.uncomplete {
    background-color: #e74c3c;
  }
</style>

<script>
  import { mapGetters } from 'vuex';
  import Loading from '../../components/Loading';
  import { relativeTime } from '../../lib/dateTime.js';

  export default {
    name: 'todos',
    data() {
      return {
        editTodoDialog: false,
        content: '',
        status: null,
        contentRules: [content => !!content.trim() || 'Content is required'],
        isFormValid: true
      }
    },
    mounted() {
      this.handleGetTodos();
    },
    computed: {
      ...mapGetters(['loading', 'user', 'todos'])
    },
    methods: {
      relativeTime,
      handleGetTodos() {
        this.$store.dispatch('getTodos', {
          userId: this.user._id
        });
      },
      loadTodo({ _id, user, content, status }, editTodoDialog = true) {
        this.editTodoDialog = editTodoDialog;
        this.todoId = _id;
        this.userId = user;
        this.content = content;
        this.status = status;
      },
      sortBy(prop) {
        return this.todos.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
      }
    },
    components: { Loading }
  }
</script>