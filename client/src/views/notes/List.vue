<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">notes list</h1>

    <!-- loading -->
    <Loading v-if="loading" :loading="loading" />

    <v-layout v-if="!loading" row wrap class="mb-3">
      <v-tooltip bottom>
        <v-btn router to="/notes/add" slot="activator" flat color="grey">
          <v-icon small left>create_new_folder</v-icon>
          <span class="caption text-capitalize">new note</span>
        </v-btn>
        <span>Create a new note</span>
      </v-tooltip>

      <v-tooltip bottom>
        <v-btn slot="activator" flat color="grey" @click="sortBy('title')">
          <v-icon small left>sort_by_alpha</v-icon>
          <span class="caption text-capitalize">sort title</span>
        </v-btn>
        <span>Sort by title of note</span>
      </v-tooltip>

      <v-tooltip bottom>
        <!-- total notes -->
        <v-btn slot="activator" flat color="grey" disabled>
          <span class="caption text-capitalize">total ({{ notes.length }})</span>
        </v-btn>

        <!-- tooltip -->
        <span>Total number of notes</span>
      </v-tooltip>
    </v-layout>
    <v-card v-for="(note, index) in notes" :key="index" class="mb-3">
      <v-layout row wrap class="pa-3">
        <v-flex xs12 md6>
          <div class="caption grey--text">Title</div>
          <div class="primary--text">
            <router-link :to="'/notes/' + note._id">
              {{note.title}}
            </router-link>
          </div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="caption grey--text">Created at</div>
          <div>{{ calendarTime(note.createdAt) }}</div>
        </v-flex>
        <v-flex xs12 sm4 md2>
          <div class="text-xs-center">
            <v-btn @click="loadNote(note)" fab dark small color="primary">
              <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon dark>delete</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- edit Note dialog -->
    <v-dialog v-model="editNoteDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="editNoteDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Note</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="handleUpdateNote()" :disabled="!isFormValid">Update</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddTodo" class="px-3">
            <!-- title field -->
            <v-text-field v-model="title" :rules="titleRules" label="Title"></v-text-field>
                    
            <!-- content field -->
            <v-textarea outline v-model="content" :rules="contentRules" label="Content"></v-textarea>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loading from '../../components/Loading';
  import { calendarTime } from '../../lib/dateTime.js';

  export default {
    name: 'notes',
    data() {
      return {
        editNoteDialog: false,
        title: '',
        content: '',
        titleRules: [title => !!title.trim() || 'Title is required'],
        contentRules: [content => !!content.trim() || 'Content is required'],
        isFormValid: true
      }
    },
    mounted() {
      this.handleGetNotes();
    },
    computed: {
      ...mapGetters(['loading', 'user', 'notes'])
    },
    methods: {
      calendarTime,
      handleGetNotes() {
        this.$store.dispatch('getNotes', {
          userId: this.user._id
        });
      },
      handleUpdateNote() {
        this.$store.dispatch('updateNote', {
          noteId: this.NoteId,
          userId: this.user._id,
          title: this.title,
          content: this.content
        });
        this.editNoteDialog = false;
      }, 
      loadNote({ _id, user, title, content }, editNoteDialog = true) {
        this.editNoteDialog = editNoteDialog;
        this.NoteId = _id;
        this.title = title;
        this.content = content;
      },
      sortBy(prop) {
        return this.notes.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
      }
    },
    components: { Loading }
  }
</script>