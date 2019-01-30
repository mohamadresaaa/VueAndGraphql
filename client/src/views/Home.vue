<template>
  <div class="home">
    <h1>This is an home page {{ names }}</h1>
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
