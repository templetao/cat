import { defineComponent, PropType } from 'vue'
import { Icon } from './Icon'
import s from './FloatButton.module.scss'
export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
          <Icon name="add" class={s.icon}/>
      </div>
    )
  }
})