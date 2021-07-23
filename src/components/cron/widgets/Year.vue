<template>
  <el-radio-group v-model="type" size="mini">
    <div>
      <el-radio :label="1" border>每年</el-radio>
    </div>

    <div>
      <el-radio :label="2" border>周期</el-radio>
      <span class="text mr10">从</span>
      <el-input-number v-model="type2from" controls-position="right" :min="1970" :max="2099" size="mini"></el-input-number>
      <span class="text ml10 mr10">至</span>
      <el-input-number v-model="type2to" controls-position="right" :min="1970" :max="2099" size="mini"></el-input-number>
      <span class="text ml10">年</span>
    </div>

    <div>
      <el-radio :label="3" border>循环</el-radio>
      <span class="text mr10">从</span>
      <el-input-number v-model="type3from" controls-position="right" :min="1970" :max="2099"  size="mini"></el-input-number>
      <span class="text ml10 mr10">年开始，每</span>
      <el-input-number v-model="type3space" controls-position="right" :min="1" :max="99"  size="mini"></el-input-number>
      <span class="text ml10">年执行一次</span>
    </div>

    <div>
      <el-radio :label="4" border>指定</el-radio>
      <el-select
        size="mini"
        multiple
        v-model="type4value"
      >
        <el-option
          v-for="item in type4range"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
  </el-radio-group>
</template>

<script>
import {cronMixin} from '../mixins/mixin'
export default {
  mixins:[cronMixin],
  data(){
    return {
      valueIndex: 6,
      type : 1,
      type2from: new Date().getFullYear(),
      type2to: new Date().getFullYear(),
      type3from: new Date().getFullYear(),
      type3space: 1,
      type4range: Array(2099 - 1970 + 1).fill().map((ele,index)=>index + 1970),
      type4value: [new Date().getFullYear()],
    }
  },
}
</script>

<style>

</style>