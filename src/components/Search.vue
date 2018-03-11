// adaptado de http://taha-sh.com/blog/building-an-awesome-reusable-autocomplete-input-component-in-vue-21-part-one
<template lang="html">
  <div>
    <div>
      <p>
        <input v-model="keyword" placeholder="Search..."
          @input="onInput($event.target.value)"
          @keydown.down="moveDown"
          @keydown.up="moveUp"
          @keydown.enter="select">
        <ul v-show="isOpen" class="options-list">
          <li  v-for="(option, index) in fOptions" v-bind:key="option.title" @mouseenter="highlightedPosition = index" @mousedown="select">
            <article>
              <figure>
                <p class="thumbnail">
                  <img :src="option.thumbnail">
                </p>
              </figure>
              <p class="option-text">
                <strong>{{ option.title }}</strong>
                <br> {{ option.description }}
              </p>
            </article>
          </li>
        </ul>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      isOpen: false,
      keyword: '',
      highlightedPosition: 0,
      options: [{
        title: 'First Scene',
        description: 'lorem ipsum dolor amet.',
        thumbnail: 'http://lorempicsum.com/nemo/200/200/1'
      }, {
        title: 'Second Scene',
        description: 'lorem ipsum dolor amet.',
        thumbnail: 'http://lorempicsum.com/nemo/200/200/2'
      }, {
        title: 'Third Scene',
        description: 'lorem ipsum dolor amet.',
        thumbnail: 'http://lorempicsum.com/nemo/200/200/3'
      }, {
        title: 'Fourth Scene',
        description: 'lorem ipsum dolor amet.',
        thumbnail: 'http://lorempicsum.com/nemo/200/200/4'
      }]
    }
  },
  computed: {
    fOptions () {
      const re = new RegExp(this.keyword, 'i')
      return this.options.filter(o => o.title.match(re))
    }
  },
  methods: {
    onInput (value) {
      console.log('keyword = ' + this.keyword + ' | isOpen = ' + this.isOpen)
      this.highlightedPosition = 0
      this.isOpen = true
    },
    select () {
      /*
      const selectedOption = this.fOptions[this.highlightedPosition]
      this.$emit('select', selectedOption)
      this.isOpen = false
      this.keyword = selectedOption.title
      */
    }
  }
}
</script>
<style>
  @import '../assets/search.css'
</style>
