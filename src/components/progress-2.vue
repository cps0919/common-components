<template>
  <div class="progress" :style="[contentStyleFuc]">
    <div class="progress_bg" :style="[progressStyleComputed]">
      <span class="num" v-if="progressVisible">{{ `${data.progress}%` }}</span>
    </div>
    <div class="title" v-if="titleVisible">标题内容</div>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, reactive, toRefs, PropType } from "vue";
export default defineComponent({
  props: {
    height: {
      type: String,
      default: "30px",
    },
    width: {
      type: String,
      default: "500px",
    },
    bgColor: {
      type: String,
      default: "rgba(44, 62, 80, 0.7)",
    },
    progressBgColor: {
      type: Object as PropType<{ success: string; primary: string }>,
      default: () => ({
        primary: "#5bc0de",
        success: "rgb(103, 194, 58)",
      }),
    },
    title: {
      type: String,
      default: "标题内容",
    },
    progress: {
      type: Number,
      default: 60,
    },
    progressVisible: {
      type: Boolean,
      default: true,
    },
    titleVisible: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#e2e2e2",
    },
  },
  setup(props) {
    const state = reactive({
      data: {
        title: props.title,
        progress: props.progress,
      },
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
      let left = `-${100 - Number(props.progress)}%`;
      let backgroundColor =
        props.progress == 100
          ? props.progressBgColor.success
          : props.progressBgColor.primary;
      return {
        backgroundColor,
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
  background-size: 20px 20px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  animation-name: progressAnimation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
@keyframes progressAnimation {
  form {
    background-position-x: 10px;
  }
  20% {
    background-position-x: 20px;
  }
  40% {
    background-position-x: 40px;
  }
  60% {
    background-position-x: 60px;
  }
  80% {
    background-position-x: 80px;
  }
  to {
    background-position-x: 100px;
  }
}
.progress_bg .num {
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
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