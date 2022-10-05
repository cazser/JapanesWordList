<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import wordList from './WordList';
</script>

<template>
  <h1>单词表</h1>
  
  <ol class="wordList">
  
    <li v-for="word of wordList">
        <span class="wordListCell">{{word.日文}}</span>
        <span>{{word.中文}}</span>
    </li>
  
  </ol>  
</template>

<style scoped>
.wordList{
  margin: 20px;
}
.wordListCell{
  min-width: 200px;
  display: inline-block;
}
</style>
