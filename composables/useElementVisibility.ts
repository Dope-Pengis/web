import { ConfigurableWindow, defaultWindow } from "@vueuse/core";
import type { MaybeRef } from "@vueuse/shared";
import { tryOnMounted } from "@vueuse/shared";
import { ref, unref } from "vue-demi";

export interface VisibilityScrollTargetOptions extends ConfigurableWindow {
  scrollTarget?: MaybeRef<Element | null | undefined>;
  offset?: "none" | "middle" | "top" | "bottom";
}

/**
 * Tracks the visibility of an element within the viewport.
 *
 * @see https://vueuse.org/useElementVisibility
 * @param element
 * @param options
 */
export function useElementVisibility(
  element: MaybeRef<Element | null | undefined>,
  {
    window = defaultWindow,
    scrollTarget,
    offset = "none",
  }: VisibilityScrollTargetOptions = {}
) {
  const elementIsVisible = ref(false);
  const getPixelOffset = (): number => {
    const winHeight =
      window.innerHeight || document.documentElement.clientHeight;

    switch (offset) {
      case "none":
        return 0;
      case "middle":
        return winHeight / 2 || 0;
      case "bottom":
        return winHeight || 0;
    }
  };

  const pxOffset = ref<number>(getPixelOffset());

  const testBounding = () => {
    if (!window) return;

    const document = window.document;
    if (!unref(element)) {
      elementIsVisible.value = false;
    } else {
      const rect = (unref(element) as HTMLElement).getBoundingClientRect();
      elementIsVisible.value =
        rect.top + (elementIsVisible.value ? 0 : pxOffset.value) <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.right >= 0;
    }
  };

  tryOnMounted(testBounding);

  if (window)
    tryOnMounted(() => {
      useEventListener(unref(scrollTarget) || window, "scroll", testBounding, {
        capture: false,
        passive: true,
      });
      useEventListener(
        unref(scrollTarget) || window,
        "resize",
        getPixelOffset,
        {
          capture: false,
          passive: true,
        }
      );
    });

  return elementIsVisible;
}
