<template>
  <div class="note-book">
    <NoteListVue />
    <EditNoetAreaVue />
    <NoetPreviewAreaVue />
  </div>
</template>
  
<script setup lang='ts'>
import NoteListVue from '../components/NoteList.vue';
import EditNoetAreaVue from '../components/EditNoetArea.vue';
import NoetPreviewAreaVue from '../components/NoetPreviewArea.vue';

</script>
  
<style scoped lang="less">
.note-book {
  // width: 100vw;
  height: 100vh;
  display: flex;
  background-color: antiquewhite;
}
</style>