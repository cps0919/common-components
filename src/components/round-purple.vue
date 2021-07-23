<template>
  <div class="round-purple" ref="Round">
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
      default: 150,
    },
  },
  setup(props) {
    const Round: any = ref(null);
    onMounted(() => {
      nextTick(() => {
        if (!Round) return;
        Round.value.style.color = props.color;
        Round.value.style.transform = `scale(${props.side / 150})`;
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
.round-purple {
  background: url("../assets/round/purple-1-1.png") center,
    url("../assets/round/purple-1-2.gif") no-repeat center;
  background-repeat: no-repeat;
  position: relative;
  height: 220px;
  width: 220px;
}
.content {
  font-size: 1.5em;
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