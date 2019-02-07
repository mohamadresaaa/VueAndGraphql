<template>
    <v-alert outline :value="true" transition="scale-transition" dismissible>
      {{ message.replace('GraphQL error:', '') }}
    </v-alert>
</template>

<script>
export default {
  props: ['message']
};
</script>