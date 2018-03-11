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
          <li  v-for="(option, index) in fOptions" v-bind:key="option.title" @mouseenter="highlightedPosition = index" @mousedown="select"
            :class="{'highlighted': index === highlightedPosition}">
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
        thumbnail: 'http://lorempicsum.com/futurama/64/64/1'
      }, {
        title: 'Second Scene',
        description: 'Vivamus auctor quam sed',
        thumbnail: 'http://lorempicsum.com/futurama/64/64/2'
      }, {
        title: 'Third Scene',
        description: 'Cras pretium libero eget orci',
        thumbnail: 'http://lorempicsum.com/futurama/64/64/3'
      }, {
        title: 'Fourth Scene',
        description: 'Donec finibus nunc nec',
        thumbnail: 'http://lorempicsum.com/futurama/64/64/4'
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
      this.highlightedPosition = 0
      this.isOpen = !!value
      console.log('keyword = ' + this.keyword + ' | isOpen = ' + this.isOpen + ' | fOptions.length ' + this.fOptions.length)
    },
    moveDown () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.fOptions.length
    },
    moveUp () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0 ? this.fOptions.length - 1 : this.highlightedPosition - 1
    },
    select () {
      const selectedOption = this.fOptions[this.highlightedPosition]
      this.$emit('select', selectedOption)
      this.isOpen = false
      this.keyword = selectedOption.title
      console.log('Selected "' + selectedOption.title + '"')
    }
  }
}
</script>
<style>
  @import '../assets/search.css'
</style>
