<template>
  <div class="round-main" ref="Round">
    <div class="content">
      <div class="num">{{ data.count }}</div>
    </div>
    <div class="title">{{ data.name }}</div>
  </div>
</template>
<script lang='ts'>
interface ListProps {
  name: string;
  count: number;
}
import {
  defineComponent,
  reactive,
  toRefs,
  PropType,
  onMounted,
  ref,
  nextTick,
} from "vue";
interface DataProps {
  data: ListProps;
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<ListProps>,
      required: true,
      default: () => ({ name: "总告警", count: 2000 }),
    },
    color: {
      type: String,
      default: "white",
    },
    side: {
      type: Number,
      default: 150,
    },
  },
  setup(props) {
    const Round: any = ref(null);
    const state = reactive<DataProps>({
      data: props.data,
    });
    onMounted(() => {
      nextTick(() => {
        Round.value.style.color = props.color;
        Round.value.style.transform = `scale(${props.side / 150})`;
      });
    });
    return {
      ...toRefs(state),
      Round,
    };
  },
});
</script>
<style  scoped>
.round-main {
  height: 150px;
  width: 150px;
  background: url("../assets/round/img_circle.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
  position: relative;
  padding-bottom: 20px;
}
.content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffe100;
  font-size: 25px;
  font-weight: 700;
  font-family: "myFamily";
}
.title {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #e2e2ee;
  font-size: 15px;
}
</style>