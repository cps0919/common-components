<template>
  <div class="my-menu">
    <div class="strech-title" :style="[itemStyleFuc()]">菜单管理</div>
    <transition-group name="staggered-fade">
      <div class="content" v-if="visible">
        <span
          class="item"
          :style="[itemStyleFuc()]"
          v-for="(item, index) in data"
          :key="index"
          @mouseenter="hover('enter', index)"
          @mouseleave="hover('leave', index)"
          @click="menuClick(item)"
        >
          {{ item.name }}
        </span>
      </div>
    </transition-group>
  </div>
</template>
<script lang='ts'>
import { defineComponent, PropType, reactive, toRefs, onMounted } from "vue";
interface DataProps {
  name: string;
  link: string;
}

export default defineComponent({
  name: "stretch-menu",
  emits: ['menuClick'],
  props: {
    data: {
      type: Array as PropType<Array<DataProps>>,
      default: () => [
        { name: "首页", link: "/home/main" },
        { name: "视频", link: "/video/main" },
        { name: "电子地图", link: "/video/main" },
        { name: "智能巡检", link: "/video/main" },
        { name: "大数据分析", link: "/video/main" },
        { name: "系统配置", link: "/video/main" },
      ],
    },
    color: {
      type: String,
      default: "#e2e2e2",
    },
    acColor: {
      type: String,
      default: "#d89b0a",
    },
    borderColor: {
      type: String,
      default: "rgb(69, 162, 255)",
    },
    bgColor: {
      type: String,
      default: "radial-gradient(rgb(9, 39, 68), rgb(2, 6, 39))",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      data: props.data,
      visible: props.visible,
    });
    onMounted(() => {
      document.addEventListener("click", (e: any) => {
        e.stopPropagation();
        let className: string = e.target.className;
        if (className == "strech-title") {
          state.visible = !state.visible;
        } else state.visible = false;

        // let className = e.target.parentNode.className.split(" ")[1];
        // if (className != "strech-title") {
        //   state.visible = false;
        // }
      });
    });
    const itemStyleFuc = () => {
      return {
        border: `3px double ${props.borderColor}`,
        color: props.color,
        background: props.bgColor,
      };
    };
    const hover = (type: string, index: number) => {
      let el: any = document.getElementsByClassName("item")[index];
      if (!el) return;
      if (type == "enter") el.style.color = props.acColor;
      else if (type == "leave") el.style.color = props.color;
    };
    const menuClick = (e: DataProps) => {
      console.log(e);
      emit("menuClick", e);
    };
    return {
      ...toRefs(state),
      itemStyleFuc,
      hover,
      menuClick,
    };
  },
});
</script>
<style  scoped>
.my-menu {
  position: relative;
}
.my-menu .content {
  position: absolute;
}

.my-menu .strech-title,
.my-menu .item {
  display: block;
  line-height: 30px;

  box-sizing: border-box;
  margin-top: 5px;
  text-align: center;
  min-width: 100px;
  user-select: none;
}

.my-menu .item:hover,
.my-menu .strech-title:hover {
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>