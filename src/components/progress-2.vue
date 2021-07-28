<template>
  <div class="progress" :style="[contentStyleFuc]">
    <div class="progress_bg" :style="[progressStyleComputed]">
      <span class="num" v-if="progressVisible">{{
        `${100 - Number(data.progress)}%`
      }}</span>
    </div>
    <div class="title" v-if="titleVisible">标题内容</div>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType, reactive, toRefs } from "vue";
interface DataProps {
  name: string;
  progress: number;
}
export default defineComponent({
  props: {
    height: {
      type: String,
      default: 40,
    },
    width: {
      type: String,
      default: 200,
    },
    bgColor: {
      type: String,
      default: "rgba(44, 62, 80, 0.7)",
    },
    progressBgColor: {
      type: String,
      default: "rgb(103, 194, 58)",
    },
    data: {
      type: Object as PropType<DataProps>,
      default: () => ({ name: "", progress: 50 }),
    },
    progressVisible: {
      type: Boolean,
      default: true,
    },
    titleVisible: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "#e2e2e2",
    },
  },
  setup(props) {
    const state = reactive({
      data: props.data,
      progressVisible: props.progressVisible,
      titleVisible: props.titleVisible,
    });
    const contentStyleFuc = computed(() => ({
      color: props.color,
      background: props.bgColor,
      height: props.height,
      width: props.width,
    }));
    const progressStyleComputed = computed(() => {
      let left = `-${100 - Number(props.data.progress)}%`;
      return {
        backgroundColor: props.progressBgColor,
        left,
      };
    });
    return {
      ...toRefs(state),
      contentStyleFuc,
      progressStyleComputed,
    };
  },
});
</script>
<style  scoped>
.progress {
  min-width: 200px;
  height: 60px;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  font-size: 1em;
}
.progress:hover {
  cursor: pointer;
}

.progress_bg {
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  /* background-color: rgb(103, 194, 58); */
  background-size: 15px 15px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  animation-name: progressAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes progressAnimation {
  form {
    background-position-x: 10px;
  }
  to {
    background-position-x: 10px;
  }
}
.progress_bg .num {
  position: absolute;
  right: -25px;
  top: 5%;
  font-size: 0.5em;
}

.title {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>