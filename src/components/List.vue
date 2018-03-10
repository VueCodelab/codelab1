<template>
  <div class="list">
    <h1>List</h1>
    <input type="text" v-bind="text" />
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
      <div>{{ text }}</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      text: '',
      items: ['primer item']
    }
  }
}
</script>

<style scoped>
  .list {
    font-size: 30px;
  }
  input {
    outline: none;
    font-size: 30px;
    padding: 10px;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>
