<template>
    <div>
        <h1>Listes des Artistes : {{ name }}</h1>

        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Artist</th>
            <th>Type</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="data in datas" :key="data.name" @click="showArtist(data.name)">
            <td>{{ data.name }}</td>
            <td>{{ data.type }}</td>
            <td>{{ data.country }}</td>
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
            datas: this.fetch()
        }
    },
    methods: {
        fetch(){
            
            console.log('URL_ARTIST + this.name.trim() + "&fmt=json" ===> ', URL_ARTIST + this.name.trim() + "&fmt=json");
            axios
            .get(URL_ARTIST + this.name.trim() + "&fmt=json")
            .then(response => {       
          
            this.datas = response.data.artists;

            })
        },

        showArtist(name){
            this.$router.push({name : 'Artist', params : {name : name}})
        }
    },
    mounted(){
        this.fetch()
    }
}
</script>

<style>

</style>