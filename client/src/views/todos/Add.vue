<template>
    <div>
        <v-card>
            <!-- title -->
            <v-card-title>
                <h2>Add a New Todo</h2>
            </v-card-title>

            <v-card-text>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddTodo" class="px-3">
                    <!-- content field -->
                    <v-text-field v-model="content" :rules="contentRules" label="Content"></v-text-field>
                    
                    
                    <!-- status field -->
                    <v-switch v-model="status" :label="`Status: ${ status === true ? 'complete' : 'uncomplete' }`"></v-switch>
                    
                    <v-spacer></v-spacer>
                    
                    <!-- submit button -->
                    <v-btn :loading="loading" :disabled="!isFormValid || loading" color="success" class="mt-3 mr-1" type="submit">
                        Save
                        <span slot="loader">Loading...</span>
                    </v-btn>

                    <!-- back button -->
                    <v-btn router to="/todos" class="mt-3 mx-1">Back</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'addTodo',
    data() {
        return {
            content: '',
            status: false,
            contentRules: [content => !!content.trim() || 'Content is required'],
            isFormValid: true
        }
    },
    computed: {
        ...mapGetters(['loading', 'user'])
    },
    methods: {
        handleAddTodo(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('addTodo', {
                    content: this.content,
                    status: this.status,
                    userId: this.user._id
                });
            }
        }
    }
}
</script>