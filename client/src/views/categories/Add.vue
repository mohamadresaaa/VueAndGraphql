<template>
    <div>
        <v-card>
            <v-card-title>
                <h2>Add a New Category</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field v-model="title" label="Title" prepend-icon="title"></v-text-field>
                    <v-text-field v-model="url" label="Url"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="submit" class="success mt-3 mr-1">Save</v-btn>
                    <v-btn flat router to="/admin/categories" class="black white--text mt-3 mx-1">Back</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>