<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div v-show="$apollo.loading" class="font-weight-medium text-capitalize">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      loading...
    </div>
    <div v-if="!$apollo.loading">
      my team
      <ul>
        <li v-for="(name, index) in names" :key="index">
          {{name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gql } from 'apollo-boost';

export default {
  apollo: {
    names: {
      query: gql`
        query{
          names
        }
      `
    }
  }
}
</script>
