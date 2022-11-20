/*
 * @Author: aibo chang 
 * @Date: 2022-09-02 07:46:44 
 * @Last Modified by: aibo chang
 * @Last Modified time: 2022-09-02 07:51:06
 */

import { ref } from 'vue'

let v = ref<string>('')

const renderDom = () => {
  return (
    <>
      <input type="text" v-model={v.value} />
      <div>
        {v.value}
      </div>
    </>
  )
}

export default renderDom