<template>
    <div>
        <h1>Music : {{ data.title }}</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Title</td>
                <td>{{ data.title }}</td>
            </tr>
            </thead>
            <tbody>
            
            <tr @click="showArtist(data.artist)">
                <td>Artist</td>
                <td>{{ data.artist }}</td>
            </tr>
            <tr>
                <td>Count</td>
                <td>{{ data.count }}</td>
            </tr>
            <tr>
                <td>Score</td>
                <td>{{ data.score }}</td>
            </tr>
                
                
            
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from "axios"

const URL_TITLE = 'https://musicbrainz.org/ws/2/cdstub/?query=discid:'

export default {
    name: 'Title',
    props: ['id'],
    data(){
        return {
            data: this.fetch()
        }
    },
    methods: {
        fetch(){
            
            console.log('URL_TITLE + this.name.trim() + "&fmt=json" ===> ', URL_TITLE + this.id + "&fmt=json");
            axios
            .get(URL_TITLE + this.id + "&fmt=json")
            .then(response => {       
          
            this.data = response.data.cdstubs[0];

            console.log("data = ", this.data);
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