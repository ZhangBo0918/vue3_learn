<script lang="ts" setup>
import { Directive } from 'vue';
const vMove: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY, "-----起始", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "---改变");
      }
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      })
    }
    moveEl.addEventListener("mousedown", mouseDown);
  }
}
type Props = {
  modelValue: boolean
}
const propData = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="propData.modelValue" class="dialog" v-move>
    <div class="dialog-header">
      <div>标题</div>
      <div @click="close">X</div>
    </div>
    <div class="dialog-content">
      内容
    </div>
  </div>
</template>

<style lang="less">
.dialog {
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  &-content {
    padding: 10px;
  }
}
</style>