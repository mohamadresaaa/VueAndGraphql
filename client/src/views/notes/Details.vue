<template>
  <div>
    <!-- loading -->
    <Loading v-if="loading" :loading="loading" />

    <v-card v-if="!loading" class="mt-3">
      <v-layout row wrap class="pa-3">
        <v-flex xs12 md12>
          <div class="grey--text mb-1">
            <h1 class="font-weight-medium text-capitalize">{{ note.title }}</h1>
          </div>
          <v-divider></v-divider>
          <div class="mt-3">{{ note.content }}</div>
          <v-btn router to="/notes" class="mt-3 mx-1">Back</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Loading from '../../components/Loading';

  export default {
    name: 'detailsNote',
    mounted() {
      this.handleGetNote();
    },
    computed: {
      ...mapGetters(['loading', 'user', 'note'])
    },
    methods: {
      handleGetNote() {
        this.$store.dispatch('getNote', {
          id: this.$route.params.id,
          userId: this.user._id
        });
      }
    },
    components: { Loading }
  }
</script>