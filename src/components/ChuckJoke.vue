<template>
  <div class="chuck">
    <h1>Chuck Norris:</h1>
    <h2>
      {{ joke }}
    </h2>
    <img :src="image" alt="">
  </div>
</template>

<script>
import axios from 'Axios'
export default {
  name: 'ChuckJoke',
  created () {
    this.fetchData()
  },
  data () {
    return {
      joke: null,
      image: null
    }
  },

  methods: {
    fetchData () {
      axios.get('https://api.chucknorris.io/jokes/random').then(response => {
        this.joke = response.data['value']
      })

      var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=chuck%20norris&limit=1&offset=' + parseInt(Math.random() * 1000, 10)

      axios.get(url).then(response => {
        this.image = response.data['data'][0]['images']['fixed_height_still']['url']
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
