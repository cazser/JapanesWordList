<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import wordList from './WordList';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import { onMounted, ref } from 'vue';
const y = ref(false);
const toggle= ()=>{
  y.value = !y.value;
}
const inputRef= ref(null);

const curIndex = ref(0);
const onSubmit=(e)=>{
  e.preventDefault();
  
  if(inputRef.value.value === wordList[curIndex.value].日文){
    const synUtterance = new window.SpeechSynthesisUtterance();
    synUtterance.text = inputRef.value.value;
    synUtterance.lang = "ja-JP";
    synUtterance.pitch = 1; //音调高低0～2，默认1
    synUtterance.rate = 1;
    window.speechSynthesis.speak(synUtterance);
    next();
  }else{
    const synUtterance = new window.SpeechSynthesisUtterance();
    synUtterance.text = "いいえ";
    synUtterance.lang = "ja-JP";
    synUtterance.pitch = 1; //音调高低0～2，默认1
    synUtterance.rate = 1;
    window.speechSynthesis.speak(synUtterance);
  }
         
}
const onHelp=(e)=>{
  e.preventDefault();
  const synUtterance = new window.SpeechSynthesisUtterance();
    synUtterance.text = wordList[curIndex.value].日文;
    synUtterance.lang = "ja-JP";
    synUtterance.pitch = 0; //音调高低0～2，默认1
    synUtterance.rate = 1;
    window.speechSynthesis.speak(synUtterance);
}
const next = ()=>{
  if(curIndex.value<wordList.length){
    inputRef.value.value="";
    curIndex.value++;
  }else{
    y.value = false;
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
  <Button>
    播放
  </Button>
  <Dialog v-model:visible="y">
    <template #default>
            <div>
              写出中文对应的日文
              <form>
                {{wordList[curIndex].中文}}:<input ref="inputRef"
                class="input" placeholder="填写对应的日文"/>
                <Button :small="true" @click="onSubmit">
                  提交
                </Button>
                <Button :small="true" @click="onHelp">
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
  margin: 40px;
}
.wordListCell{
  min-width: 200px;
  display: inline-block;
}

.input{
  padding: 4px;
  margin: 8px;

}
</style>
