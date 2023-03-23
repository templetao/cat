import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    return () => (
      <>
        <div>{refCount.value}</div>
        <div onClick={onClick}>+1</div>
      </>
    );
  },
});
