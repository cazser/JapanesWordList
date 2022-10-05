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
const curIndex = ref(0);
const onSubmit=(e)=>{
  e.preventDefault();
}
const onHelp=(e)=>{
  e.preventDefault();
}
const next = ()=>{
  if(curIndex.value<wordList.length){
    curIndex.value++;
  }
}
const end=()=>{
  y.value = false;
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
                {{wordList[curIndex].中文}}<input />
                <Button @click="onSubmit">
                  提交
                </Button>
                <Button @click="onHelp">
                  帮助
                </Button>
              </form>
            </div>
          </template>
        <template #leftbutton>
         <span @click="next"> 下一个 </span> 
        </template>
        <template #rightbutton >
          <span @click="end">
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
