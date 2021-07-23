<template>
  <div class="round-greed" ref="Round">
    <div class="content">
      <div>{{ data.count }}</div>
      <div>{{ data.name }}</div>
    </div>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onMounted,
  PropType,
  nextTick,
} from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "white",
    },
    data: {
      type: Object as PropType<{ name: string; count: string }>,
      default: () => ({ name: "质量指数", count: "80%" }),
    },
    side: {
      type: Number,
      default: 250,
    },
  },
  setup(props) {
    const Round: any = ref(null);
    onMounted(() => {
      nextTick(() => {
        Round.value.style.color = props.color;
        Round.value.style.transform = `scale(${props.side / 250})`;
      });
    });
    const state = reactive({
      data: props.data,
    });
    return {
      ...toRefs(state),
      Round,
    };
  },
});
</script>
<style  scoped>
.round-greed {
  height: 250px;
  width: 250px;
  background: url("../assets/round/greed-1-5.png") center,
    url("../assets/round/greed-1-1.png") no-repeat center,
    url("../assets/round/greed-1-4.png") center,
    url("../assets/round/greed-1-2.png") center,
    url("../assets/round/greed-1-3.gif") center;
  background-repeat: no-repeat;
  position: relative;
}
.content {
  font-size: 1.2em;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.content > div:nth-child(1) {
  padding-bottom: 0.5em;
}
</style>