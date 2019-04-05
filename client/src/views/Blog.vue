<template>
  <div>
    <!-- subtitle -->
    <v-layout wrap>
        <v-flex xs12 sm12 md12>
          <v-layout row wrap>
            <v-flex class="pa-2" xs12 sm12 md12>
                <v-card>
                  <v-breadcrumbs :items="breadcrumbs">
                    <template v-slot:divider>
                      <v-icon>forward</v-icon>
                    </template>
                  </v-breadcrumbs>
                </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-layout>
    
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
      <v-layout v-if="!loading" wrap>
        <v-flex xs12 sm12 md3>
          <v-layout row wrap>
            <v-flex class="pa-2" xs12 sm12 md12>
              <v-container grid-list-xl pa-0>
                <v-card>
                  <v-toolbar dark color="secondary">
                    <v-toolbar-title>
                      <span>Categories</span>
                      <v-btn flat icon dark small @click="showCategories = !showCategories">
                        <v-icon>arrow_drop_down</v-icon>
                      </v-btn>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-list two-line v-if="showCategories">
                    <template v-for="(item, index) in categories">
                      <v-list-tile :key="item.title" avatar @click="handleGetCategories">
                        <v-list-tile-content>
                          <router-link style="text-decoration: none" :to="`/categories/${item.url}`">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                          </router-link>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider
                        v-if="index + 1 < categories.length"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list>
                </v-card>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md9>
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
      showCategories: true,
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Blog',
          disabled: true,
          href: '/blog'
        }
      ],
      articles: [
        { title: 'Design a new website', person:'mohamadreza mosalli', due: '1st Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person:'saeed oraji', due: '10th Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person:'ali mohamadi', due: '20th Dec 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person:'the ninja', due: '20th Oct 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
      selected: [2],
        items: [
          {
            action: '15 min',
            headline: 'Brunch this weekend?',
            title: 'Ali Connors',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            action: '2 hr',
            headline: 'Summer BBQ',
            title: 'me, Scrott, Jennifer',
            subtitle: "Wish I could come, but I'm out of town this weekend."
          },
          {
            action: '6 hr',
            headline: 'Oui oui',
            title: 'Sandra Adams',
            subtitle: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            action: '12 hr',
            headline: 'Birthday gift',
            title: 'Trevor Hansen',
            subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
          },
          {
            action: '18hr',
            headline: 'Recipe to try',
            title: 'Britta Holt',
            subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
          }
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
