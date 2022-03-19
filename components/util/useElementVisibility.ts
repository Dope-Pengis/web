import { defineComponent, h, reactive, ref } from "vue";
import type { RenderableComponent } from "@vueuse/core";
import { useElementVisibility } from "~~/composables/useElementVisibility";
import { PropType } from "nuxt3/dist/app/compat/capi";

export const UseElementVisibility = defineComponent({
  name: "UseElementVisibility",
  props: {
    as: {
      type: String,
    },
    offset: {
      type: String as PropType<"middle" | "top" | "bottom" | "none">,
      default: 0,
    },
  },
  emits: ["visible"],
  setup(props, { slots, emit }) {
    const target = ref();
    const isVisible = useElementVisibility(target, {
      offset: props.offset,
    });
    const data = reactive({
      isVisible,
    });

    watch(isVisible, (visible: boolean) => emit("visible", visible));

    return () => {
      if (slots.default)
        return h(props.as || "div", { ref: target }, slots.default(data));
    };
  },
});

export default UseElementVisibility;
