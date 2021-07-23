<template>
  <div class="direction" ref="direction">
    <div class="direction_bg direction_bg1" ref="direction_bg1"></div>
    <div class="direction_bg direction_bg2" ref="direction_bg2"></div>
    <div class="direction_bg direction_bg3" ref="direction_bg3"></div>
    <div
      :class="[`item${index + 1}`, 'item']"
      v-for="(item, index) in 8"
      :key="index"
      :style="[styleFuc()]"
      alt=""
      @mousedown="controlClick('down', index + 1)"
      @mouseup="controlClick('up', index + 1)"
    ></div>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  nextTick,
} from "vue";
interface DataProps {}

export default defineComponent({
  name: "direction-control",
  props: {
    bgColor: {
      type: String,
      default: "rgba(69, 162, 255, 1)",
    },
    acBgColor: {
      type: String,
      default: "red",
    },
  },
  setup(props, { emit }) {
    const direction: any = ref(null);
    const direction_bg1: any = ref(null);
    const direction_bg2: any = ref(null);
    const direction_bg3: any = ref(null);
    let state = reactive<DataProps>({});
    const controlClick = (type: string, e: number) => {
      let el: any = document.getElementsByClassName(`item${e}`)[0];

      if (type == "down") {
        el.style.borderBottom = `30px solid  ${props.acBgColor}`;
      } else {
        el.style.borderBottom = `30px solid  ${props.bgColor}`;
      }
      //e,从上顺时针1，2，3，。。。，8
      emit("direction", { mouse: type, direction: e });
    };
    onMounted(() => {
      nextTick(() => {
        direction.value.style.border = `2px solid ${props.bgColor}`;
        direction.value.style.boxShadow = `inset 0 0 10px 1px ${props.bgColor}`;
        direction_bg1.value.style.background = `${props.bgColor}`;
        direction_bg2.value.style.background = `${props.bgColor}`;
        direction_bg3.value.style.background = `${props.bgColor}`;
      });
    });
    const styleFuc = () => {
      return {
        borderBottom: `30px solid ${props.bgColor}`,
      };
    };
    return {
      ...toRefs(state),
      controlClick,
      direction,
      styleFuc,
      direction_bg1,
      direction_bg2,
      direction_bg3,
    };
  },
});
</script>
<style  scoped>
.direction {
  margin: 0 auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
}
.item {
  position: absolute;
  overflow: hidden;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  width: 0px;
  height: 0px;
  transform-origin: 50% 50%;
}
.direction_bg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.direction_bg1 {
  width: 20%;
  height: 20%;
  opacity: 1;
  z-index: 5;
}
.direction_bg2 {
  width: 35%;
  height: 35%;
  opacity: 0.5;
  z-index: 2;
}
.direction_bg3 {
  width: 50%;
  height: 50%;
  opacity: 0.2;
  z-index: 1;
}
.item:hover {
  cursor: pointer;
}
.item1 {
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
}
.item2 {
  top: 20%;
  right: 5%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.item3 {
  top: 50%;
  right: -7%;
  transform: translate(-50%, -50%) rotate(90deg);
}
.item4 {
  bottom: 10%;
  right: 4%;
  transform: translate(-50%, -50%) rotate(135deg);
}
.item5 {
  bottom: -3%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg);
}
.item6 {
  bottom: 10%;
  left: 20%;
  transform: translate(-50%, -50%) rotate(225deg);
}
.item7 {
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%) rotate(270deg);
}
.item8 {
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%) rotate(315deg);
}
</style>