<template>
    <div>
        <h1>Artist : {{ name }}</h1>

         <table class="table table-hover">
        <thead>
            <tr>
            <td>Artist</td>
            <td>{{ name }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Type</td>
              <td>{{ data.type }}</td>
          </tr>
          <tr>
              <td>Gender</td>
              <td>{{ data.gender }}</td>
          </tr>
          <tr>
              <td>Country</td>
              <td>{{ data.country }}</td>
          </tr>
          <tr>
              <td>Begin</td>
              <td>{{ data['life-span'].begin }}</td>
          </tr>
          <tr>
              <td>End</td>
              <td>{{ data['life-span'].ended }}</td>
          </tr>

        </tbody>
      </table>
    </div>
</template>

<script>

import axios from "axios"

const URL_ARTIST = 'https://musicbrainz.org/ws/2/artist/?query=artist:'

export default {
    name: 'Artists',
    props: ['name'],
    data(){
        return {
            data: this.fetch()
        }
    },
    methods: {
        fetch(){
            
            console.log('URL_ARTIST + this.name.trim() + "&fmt=json" ===> ', URL_ARTIST + this.name + "&fmt=json");
            axios
            .get(URL_ARTIST + this.name + "&fmt=json")
            .then(response => {       
          
            this.data = response.data.artists[0];

            })
        }
    },
    mounted(){
        this.fetch()
    }
}
</script>

<style>

</style>
