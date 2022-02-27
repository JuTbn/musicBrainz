<template>
  <div>
    <img src="./assets/music-brainz.svg" class="mb-2">

    <div class="container m-12">

       <h1>What are you looking for ?</h1>

       <div class="selector" @click="changeSearch" >
        <span id="select-artist" class="select selected">Artist</span>
        <span>|</span>
        <span id="select-title" class="select">Title</span>
        
      </div>

      <div class="input-group m-2">
        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" autofocus v-model="search">
        <button id="btn-title" type="button" class="btn btn-secondary" @click="showSearch(searchCategorie)">Search</button>
        
        
      </div>
    </div>
    

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      search : '',
      searchCategorie : 'Artists',
    }
  },
  methods:{
    
    changeSearch(){
      let selectArtist = document.querySelector('#select-artist');
      let selectTitle = document.querySelector('#select-title');

      if (this.searchCategorie == 'Titles'){
        this.searchCategorie = "Artists";
        
        selectArtist.classList.add('selected')
        selectTitle.classList.remove('selected')
      }
      else if(this.searchCategorie == "Artists"){
        this.searchCategorie = "Titles"
        selectTitle.classList.add('selected')
        selectArtist.classList.remove('selected')
      }
    },


    showSearch: function (categorie){
      this.$router.push({name : 'Home', params : {name : this.search}})
      this.$router.push({name : categorie, params : {name : this.search}})
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.selector{
  font-size: 2rem;
  background-color: hsl(324, 47%, 90%);
  border-radius: 20px ;
}
.select{
  cursor: pointer;
  padding: 10px;
}
.selected{
  background-color: hsl(324, 47%, 65%);
  border-radius: 20px;
}
</style>
