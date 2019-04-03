<template>
  <div>
    <v-layout v-if="!loading" justify-center align-center wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex class="pa-2" xs12 sm6 md3 v-for="(category, index) in categories" :key="index">
            <v-container grid-list-xl pa-0>
              <v-card class="mx-auto" color="secondary" dark max-width="400">
                <v-card-title>
                  <span class="title font-weight-light" style="color: #E1BF7F;">Title</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                  invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-tile class="grow">
                    <v-list-tile-avatar color="grey darken-3">
                      <v-img class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
                      </v-img>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>Evan You</v-list-tile-title>
                    </v-list-tile-content>

                    <!-- <v-layout align-center justify-end class="pb-4 pr-3">
                      <v-icon class="mr-1">favorite</v-icon>
                      <span class="subheading mr-2">256</span>
                      <span class="mr-1">·</span>
                      <v-icon class="mr-1">share</v-icon>
                      <span class="subheading">45</span>
                    </v-layout> -->
                  </v-list-tile>
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
    name: 'home',
    created() {
      this.handleGetCategories();
    },
    computed: {
      ...mapGetters(["loading", "categories"])
    },
    methods: {
      handleGetCategories() {
        this.$store.dispatch("getCategories");
      }
    }
  };
</script>