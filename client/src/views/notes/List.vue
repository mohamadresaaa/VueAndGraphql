<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">notes list</h1>
    <v-layout row wrap class="mb-3">
        <v-tooltip bottom>
            <v-btn router to="/notes/add" slot="activator" flat color="grey">
                <v-icon small left>create_new_folder</v-icon>
                <span class="caption text-capitalize">new note</span>
            </v-btn>
            <span>Create a new note</span>
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
            <div class="primary--text">{{note.title}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text">Created at</div>
            <div>{{note.createdAt}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
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
  name: 'notes',
  mounted() {
    this.handleGetNotes();
  },
  computed: {
    ...mapGetters(['user', 'notes'])
  },
  methods: {
    handleGetNotes() {
      this.$store.dispatch('getNotes', {
        userId: this.user._id
      });
    }
  },
}
</script>