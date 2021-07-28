<template>
  <div class="control">
    <div class="control-item" v-for="(item, index) in data" :key="index">
      <div class="name">{{ item.name }}</div>
      <div class="icon">
        <span
          v-for="(item2, index2) in item.children"
          :class="[`icon${item2.type}`]"
          :key="index2"
          @mousedown="keydownClick('down', item2)"
          @mouseup="keydownClick('up', item2)"
          :style="[spanStyleFuc()]"
          >{{ item2.name }}</span
        >
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  emits:['control'],
  props: {
    borderColor: {
      type: String,
      default: "rgba(69, 162, 255, 1)",
    },
    acColor: {
      type: String,
      default: "rgba(69, 162, 255, 1)",
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      data: [
        {
          name: "聚焦",
          children: [
            { name: "-", type: "ptzFocusIn" },
            { name: "+", type: "ptzFocusOut" },
          ],
        },
        {
          name: "变倍",
          children: [
            { name: "-", type: "zoomIn" },
            { name: "+", type: "zoomOut" },
          ],
        },
        {
          name: "光圈",
          children: [
            { name: "-", type: "ptzIrisSmall" },
            { name: "+", type: "ptzIrisBig" },
          ],
        },
      ],
    });
    const keydownClick = (type: string, item: any) => {
      emit("control", { mouse: type, ...item });
      activeColor(type, item.type);
    };
    const activeColor = (mouse: string, type: string) => {
      let el: any = document.getElementsByClassName(`icon${type}`)[0];
      if (!el) return;
      if (mouse == "down") {
        el.style.background = props.acColor;
      } else {
        el.style.background = "transparent";
      }
    };
    const spanStyleFuc = () => {
      return {
        border: `1px solid ${props.borderColor}`,
        color: props.borderColor,
      };
    };
    return {
      ...toRefs(state),
      spanStyleFuc,
      keydownClick,
    };
  },
});
</script>
<style  scoped>
.control {
  color: white;
  min-width: 200px;
}
.control-item {
  display: flex;
  flex-direction: row;
  padding: 1em 0;
}
.control-item .name {
  flex: 0 0 60px;
  line-height: 20px;
  text-align: left;
  font-size: 1em;
}
.control-item .icon {
  flex: auto;
  position: relative;
}
.control-item .icon span {
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  position: absolute;
  user-select: none;
  font-size: 20px;
}
.control-item .icon span:hover {
  cursor: pointer;
}
.control-item .icon span:active {
  transform: scale(0.95);
}
.control-item .icon span:first-child {
  left: 0px;
}
.control-item .icon span:last-child {
  right: 0px;
}
</style>