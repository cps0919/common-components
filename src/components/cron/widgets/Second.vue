<template>
  <el-radio-group v-model="type" size="mini">
    <div>
      <el-radio :label="1" border>每秒</el-radio>
    </div>

    <div>
      <el-radio :label="2" border>周期</el-radio>
      <span class="text mr10">从</span>
      <el-input-number v-model="type2from" controls-position="right" :min="0" :max="59" size="mini"></el-input-number>
      <span class="text ml10 mr10">至</span>
      <el-input-number v-model="type2to" controls-position="right" :min="0" :max="59" size="mini"></el-input-number>
      <span class="text ml10">秒</span>
    </div>

    <div>
      <el-radio :label="3" border>循环</el-radio>
      <span class="text mr10">从</span>
      <el-input-number v-model="type3from" controls-position="right" :min="0" :max="59" size="mini"></el-input-number>
      <span class="text ml10 mr10">秒开始，每</span>
      <el-input-number v-model="type3space" controls-position="right" :min="1" :max="59" size="mini"></el-input-number>
      <span class="text ml10">秒执行一次</span>
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
  name: 'Second',
  mixins:[cronMixin],
  data(){
    return {
      valueIndex: 0,
      type : 1,
      type2from: 0,
      type2to: 1,
      type3from: 0,
      type3space: 1,
      type4range: Array(60).fill().map((ele,index)=>index),
      type4value: [0],
    }
  }
}
</script>

<style>

</style>