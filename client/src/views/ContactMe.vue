<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md12>
      <v-card>
        <!-- background image -->
        <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="335px">
        
        <!-- subtitle -->
        <v-layout column fill-height>
            <v-card-title>
              <h1 class="font-weight-medium white--text text-capitalize mb-3">contact me</h1>
            </v-card-title>
          </v-layout>
        </v-img>

        <!-- phone -->
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(+98) 903-908-7325</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <!-- email -->
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>mohamadrezamosalli@gmail.com</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <!-- github page -->
          <v-list-tile>
            <v-list-tile-action>
                <v-icon color="indigo">device_hub</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>github.com/mohamadrezamosalli</v-list-tile-title>
              <v-list-tile-sub-title>Github</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <!-- location -->
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Tehran</v-list-tile-title>
              <v-list-tile-sub-title>Iran</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'contactMe'
}
</script>