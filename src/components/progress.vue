<template>
  <div class="progress" ref="ProgressRef">
    <div class="title">{{ data.name }}</div>
    <div class="count">
      {{ data.value }}&ensp;<slot name="company">(m/s)</slot>
    </div>
    <div class="content" >
      <div :style="[contentDivStylefc()]"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  toRefs,
} from "vue";

export default defineComponent({
  name: "progress",
  props: {
    data: {
      type: Object as PropType<{ name: string; value: number }>,
      default: () => ({ name: "一楼层", value: 50 }),
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    bgColor: {
      type: String,
      default: "#b4a3e9",
    },
    color: {
      type: String,
      default: "white",
    },
    progressColor: {
      type: String,
      default: "rgb(230, 162, 60)",
    },
  },
  setup(props) {
    const ProgressRef: any = ref(null);
    const state = reactive({});
    onMounted(() => {
      console.log(props);
      nextTick(() => {
        ProgressRef.value.style.backgroundColor = props.bgColor;
        ProgressRef.value.style.color = props.color;
        ProgressRef.value.style.boxShadow = `inset 0 0 10px 1px rgba(44, 62, 80, 0.4)`;
        //   box-shadow:0 0 10px 1px rgb(69 162 255 / 80%) inset;background:radial-gradient(#092744, #020627)
      });
    });
   
    const contentDivStylefc = () => {
      return {
        background: props.progressColor,
        width: "50%",
      };
    };
    const colorRgb = (str: string, opacity: number) => {
      var sColor = str.toLowerCase();
      if (sColor) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgba(" + sColorChange.join(",") + "," + opacity + ")";
      } else {
        return sColor;
      }
    };
    return {
      ...toRefs(state),
      ProgressRef,
      contentDivStylefc,
    };
  },
});
</script>
<style  scoped>
.progress {
  color: white;
  padding:1em;
  border-radius: 5px;
}
.progress .title {
  font-size: 1em;
}
.progress .content {
  width: 100%;
  min-width: 200px;
  border-radius: 3px;
  background: rgba(44, 62, 80, 0.7);
}
.progress .content div {
  height: 6px;
  border-radius: 3px;
}
.progress .count {
  text-align: right;
  padding: 0.5em 0;
}
</style>