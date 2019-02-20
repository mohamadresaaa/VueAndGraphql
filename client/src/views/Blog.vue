<template>
  <div>
    <!-- subtitle -->
    <h1 class="font-weight-medium text-capitalize mb-3">blog</h1>
    
    <!-- loading -->
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="100" :width="10" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
    
    <!-- categories -->
    <v-menu v-if="!loading" min-width=200 offset-y>
      <v-btn class="text-capitalize" slot="activator" color="secondary" dark>
        Categories
      </v-btn>
      <v-list>
        <v-list-tile v-for="(category, index) in categories" :key="index">
          <v-list-tile-title>{{ index+1 }}.{{ category.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-layout v-if="!loading" justify-center align-center wrap>
        <v-flex xs12>
          <!-- articles -->
          <v-layout row wrap>
            <v-flex class="pa-2" xs12 sm6 md4 v-for="(article, index) in articles" :key="index">
              <v-container grid-list-xl pa-0>
                <v-card>
                  <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">{{article.due}}</span><br>
                      <span>{{article.title}}</span>
                      <div class="mt-3">{{article.content}}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="text-capitalize">read more</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: 'blog',
  data() {
    return {
      articles: [
        { title: 'Design a new website', person:'mohamadreza mosalli', due: '1st Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person:'saeed oraji', due: '10th Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person:'ali mohamadi', due: '20th Dec 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person:'the ninja', due: '20th Oct 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  created() {
    this.handleGetCategories();
  },
  computed: {
    ...mapGetters(["loading", "categories"])
  },
  methods: {
    handleGetCategories() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getCategories");
    }
  }
}
</script>
