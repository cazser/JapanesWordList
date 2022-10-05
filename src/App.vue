<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import wordList from './WordList';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import { ref } from 'vue';
const y = ref(false);
const toggle= ()=>{
  y.value = !y.value;
}
</script>

<template>
  <h1>单词表</h1>
  <Button @click="toggle">
    练习
  </Button>
  <Dialog v-model:visible="y">
    <template #default>
            <div>
              写出中文对应的日文,
              <form>
                <input />
                <Button>
                  提交
                </Button>
                <Button>
                  帮助
                </Button>
              </form>
            </div>
          </template>
        <template #leftbutton>
         <span @click="onclick"> 下一个 </span> 
        </template>
        <template #rightbutton >
          <span @click="onclick">
          结束
          </span>
        </template>
  </Dialog>
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
