<template>
    <div>
        <h1>Listes des titres : {{ name }}</h1>

        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="data in datas" :key="data.title" @click="showTitle(data.id)">
            <td>{{ data.title }}</td>
            <td>{{ data.artist }}</td>
          </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
import axios from "axios"

const URL_TITLE = 'https://musicbrainz.org/ws/2/cdstub/?query=title:'

export default {
    name: 'Titles',
    props: ['name'],
    data(){
        return {
            datas: this.fetch()
        }
    },
    methods: {
        fetch(){
            
            console.log('URL_TITLE + this.name.trim() + "&fmt=json" ===> ', URL_TITLE + this.name.trim() + "&fmt=json");
            axios
            .get(URL_TITLE + this.name.trim() + "&fmt=json")
            .then(response => {       
          
            this.datas = response.data.cdstubs;

            })
        },

        showTitle(id){
            this.$router.push({name : 'Title', params : {id : id}})
        }
    },
    mounted(){
        this.fetch()
    }
}
</script>

<style>

</style>