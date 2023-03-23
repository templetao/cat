import { defineComponent, ref } from "vue";

const App = defineComponent({
  setup() {
    const count = ref(0);
    return () => (<div>
      {count.value}
    </div>)
  },
});
