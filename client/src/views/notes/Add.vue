<template>
    <div>
        <v-card>
            <!-- title -->
            <v-card-title>
                <h2>Add a New Note</h2>
            </v-card-title>

            <v-card-text>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddNote" class="px-3">
                    
                    <!-- error alert -->
                    <v-layout v-if="error" row class="mb-3">
                        <v-flex xs12>
                            <formAlert :message="error.message"></formAlert>
                        </v-flex>
                    </v-layout>
                    
                    <!-- title field -->
                    <v-text-field v-model="title" :rules="titleRules" label="Title"></v-text-field>
                    
                    <!-- content field -->
                    <v-textarea outline v-model="content" :rules="contentRules" label="Content"></v-textarea>
                    
                    <v-spacer></v-spacer>
                    
                    <!-- submit button -->
                    <v-btn :loading="loading" :disabled="!isFormValid || loading" color="success" class="mt-3 mr-1" type="submit">
                        Save
                        <span slot="loader">Loading...</span>
                    </v-btn>

                    <!-- back button -->
                    <v-btn router to="/notes" class="mt-3 mx-1">Back</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import formAlert from '../../components/FormAlert';

export default {
    name: 'addNote',
    data() {
        return {
            title: '',
            content: '',
            titleRules: [title => !!title || 'Title is required'],
            contentRules: [content => !!content || 'Content is required'],
            isFormValid: true
        }
    },
    computed: {
        ...mapGetters(['loading', 'error', 'user'])
    },
    methods: {
        handleAddNote(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('addNote', {
                    title: this.title,
                    content: this.content,
                    userId: this.user._id
                });
            }
        }
    },
    components: { formAlert }
}
</script>