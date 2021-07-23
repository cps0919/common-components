<template>
  <div class="my_cron">
    <el-popover
      placement="bottom"
      :show-arrow="false"
      :width="800"
      trigger="manual"
      :visible="visible"
    >
      <template #reference>
        <div>
          <el-input
            placeholder="请输入内容"
            @focus="inputFocus"
            v-model="inputVal"
            readonly
          >
          </el-input>
        </div>
      </template>
      <div class="vue-element-cron">
        <div>
          <el-input
            v-if="showValue"
            :value="valueArr.join('')"
            placeholder="生成表达式"
            readonly
          >
          </el-input>
        </div>
        <el-tabs v-model="activeTab" stretch>
          <el-tab-pane v-if="useSeconds" label="秒" name="Second">
            <Second @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane label="分" name="Minute">
            <Minute @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane label="时" name="Hour">
            <Hour @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane label="日" name="Date">
            <MDay @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane label="月" name="Month">
            <Month @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane label="周" name="Day">
            <WDay @change="hanleValueChange" />
          </el-tab-pane>
          <el-tab-pane v-if="useYears" label="年" name="Year">
            <Year @change="hanleValueChange" />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="top" style="text-align: right">
        <el-button type="default" size="small" @click="visible = false"
          >取消</el-button
        >
        <el-button type="primary" size="small" @click="inputTrigger"
          >确定</el-button
        >
      </div>
    </el-popover>
  </div>
</template>

<script>
// import cron from "cron-validate";
import Second from "./widgets/Second";
import Minute from "./widgets/Minute";
import Hour from "./widgets/Hour";
import MDay from "./widgets/MDay";
import Month from "./widgets/Month";
import WDay from "./widgets/WDay";
import Year from "./widgets/Year";

const DEFAULT_CRON = "* * * * ?";

export default {
  name: "Cron",
  components: {
    Second,
    Minute,
    Hour,
    MDay,
    Month,
    WDay,
    Year,
  },
  props: {
    showValue: {
      type: Boolean,
      default: true,
    },
    useSeconds: {
      type: Boolean,
      default: true,
    },
    useYears: {
      type: Boolean,
      default: true,
    },
    val: String,
  },
  data() {
    return {
      activeTab: "Second",
      valueArr: [],
      visible: false,
      // inputVal: this.val,
    };
  },
  computed: {
    inputVal: {
      get() {
        return this.val;
      },
      set() {},
    },
  },

  created() {
    this.initValueArr();
  },

  // watch: {
  //   valueArr(value) {
  //     this.$emit("change", value.join(" "));
  //   },
  // },

  methods: {
    initValueArr() {
      const { useSeconds, useYears } = this;
      let cron = DEFAULT_CRON;
      cron = useSeconds ? "* " + cron : cron;
      cron = useYears ? cron + " *" : cron;
      this.valueArr = cron.split(" ");
    },
    inputFocus() {
      this.visible = true;
    },
    inputTrigger() {
      this.visible = false;
      // this.inputVal = this.valueArr.join(" ");
      this.$emit("valChange", this.valueArr.join(" "));
      this.initValueArr();
    },
    setCron() {},

    getCron() {
      return this.valueArr.join(" ");
    },

    hanleValueChange(data) {
      const { index, value } = data;
      // this.$set(this.valueArr, index, value);
      this.valueArr[index] = value;

      // this.inputVal = this.valueArr.join(" ");
      // console.log(
      //   cron(this.getCron(), {
      //     override: {
      //       useSeconds: true,
      //       useYears: true,
      //       useBlankDay: true,
      //       useLastDayOfMonth: true,
      //       useLastDayOfWeek: true,
      //       useNearestWeekday: true,
      //       useNthWeekdayOfMonth: true,
      //     },
      //   })
      // );
    },
  },
};
</script>

<style>
.my_cron {
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.vue-element-cron .el-input__inner {
  text-align: center;
}

.vue-element-cron .el-radio-group > div:not(:last-child) {
  margin-bottom: 10px;
}

.vue-element-cron .el-input-number {
  width: 100px;
}

.vue-element-cron .el-select {
  width: 300px;
}

.vue-element-cron .el-select.single {
  width: 100px;
}

.vue-element-cron .text {
  font-size: 12px;
}

.vue-element-cron .show-value {
  font-size: 14px;
  font-weight: bold;
}
.vue-element-cron .show-value::after {
  content: "";
  display: block;
  margin-top: 10px;
}

.vue-element-cron .ml10 {
  margin-left: 10px;
}

.vue-element-cron .mr10 {
  margin-right: 10px;
}
.el-tabs__item {
  color: white !important;
}
</style>