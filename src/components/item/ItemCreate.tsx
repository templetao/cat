import { defineComponent, PropType } from "vue";
import { MainLayouts } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemList.module.scss'

export const ItemCreate = defineComponent({
  setup: (props,context) => {
    return () => {
      <MainLayouts>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <div>main</div>
        </>
      }}</MainLayouts>
    }
  }
})