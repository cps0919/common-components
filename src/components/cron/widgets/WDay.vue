<template>
  <el-radio-group v-model="type" size="mini">
    <div>
      <el-radio :label="1" border>每周</el-radio>
    </div>

    <div>
      <el-radio :label="5" border>不指定</el-radio>
    </div>

    <div>
      <el-radio :label="2" border>周期</el-radio>
      <span class="text mr10">从</span>
      <el-select class="single" size="mini" v-model="type2from">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span class="text ml10 mr10">至</span>
      <el-select class="single" size="mini" v-model="type2to">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div>
      <el-radio :label="3" border>循环</el-radio>
      <span class="text mr10">从</span>
      <el-select class="single" size="mini" v-model="type3from">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span class="text ml10 mr10">开始，每</span>
      <el-input-number
        v-model="type3space"
        controls-position="right"
        :min="1"
        :max="31"
        size="mini"
      ></el-input-number>
      <span class="text ml10">天执行一次</span>
    </div>

    <div>
      <el-radio :label="8" border>指定周</el-radio>
      <span class="text mr10">本月第</span>
      <el-input-number
        v-model="type8week"
        controls-position="right"
        :min="1"
        :max="6"
        size="mini"
      ></el-input-number>
      <span class="text ml10 mr10">周的</span>
      <el-select class="single" size="mini" v-model="type8day">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div>
      <el-radio :label="9" border>本月最后一个</el-radio>
      <el-select class="single" size="mini" v-model="type9value">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div>
      <el-radio :label="4" border>指定</el-radio>
      <el-select size="mini" multiple v-model="type4value">
        <el-option
          v-for="item in dayList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </el-radio-group>
</template>

<script>
import { cronMixin, dayListMixin } from "../mixins/mixin";
export default {
  name: "Day",
  mixins: [cronMixin, dayListMixin],
  data() {
    return {
      valueIndex: 5,
      type: 5,
      type2from: 1,
      type2to: 2,
      type3from: 1,
      type3space: 1,
      type4value: [],
      type7value: 1,
      type8week: 1,
      type8day: 1,
      type9value: 1,
    };
  },
  created() {
    // this.$set(this.type4value,0,this.dayList[0].value)
    this.type4value[0] = this.dayList[0].value;
  },
};
</script>

<style>
</style>