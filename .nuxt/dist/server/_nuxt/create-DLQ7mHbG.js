import { mergeProps, useSSRContext, defineComponent, mergeModels, useModel, ref, unref, withAsyncContext, reactive, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import _sfc_main$5 from "./nuxt-icon-w-vSMVtT.js";
import { _ as __nuxt_component_0$1 } from "./VButton-gXoB32oK.js";
import "hookable";
import { u as useFetch } from "./fetch-BFN7ySGn.js";
import { u as useCategoryStore } from "../server.mjs";
import "./nuxt-link-Cj5qoeIm.js";
import "ufo";
import "ohash";
import "./asyncData-CDOB01oL.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
const _sfc_main$4 = {
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-16e0c253>${ssrInterpolate(__props.title)}</h1>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Title.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-16e0c253"]]);
const useClickOutside = (component, callback, excludeComponent) => {
  if (!component) {
    throw new Error("A target component has to be provided.");
  }
  if (!callback) {
    throw new Error("A callback has to be provided.");
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    options: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const componentRef = ref();
    ref();
    const isActive = ref(false);
    const selectedOption = ref();
    useClickOutside(
      componentRef,
      () => {
        isActive.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VSelect", { active: unref(isActive) }]
      }, _attrs))}><button type="button" class="select-button" role="combobox" aria-label="select button" aria-haspopup="listbox"${ssrRenderAttr("aria-expanded", unref(isActive))} aria-controls="select-dropdown"><span class="selected-value">${ssrInterpolate(unref(selectedOption) || "Выбрать")}</span><i class="arrow right"></i></button>`);
      if (_ctx.options) {
        _push(`<ul class="select-dropdown" role="listbox" id="select-dropdown"><!--[-->`);
        ssrRenderList(_ctx.options, (option, index) => {
          _push(`<li role="option"><input type="radio"${ssrRenderAttr("id", `option-${option.value}-${index}`)}${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(model.value, option.value)) ? " checked" : ""}><label${ssrRenderAttr("for", `option-${option.value}-${index}`)}>${ssrInterpolate(option.text)}</label></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VSelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    type: {}
  }, {
    "model": {},
    "modelModifiers": {}
  }),
  emits: ["update:model"],
  setup(__props) {
    const model = useModel(__props, "model");
    const isError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VInput" }, _attrs))} data-v-7294c89d><input${ssrRenderAttrs((_temp0 = mergeProps({
        class: ["VInput__native", { "is-error": unref(isError) }]
      }, _ctx.$attrs, { type: _ctx.type }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))} data-v-7294c89d>`);
      if (_ctx.$slots.label) {
        _push(`<label class="VInput__label" data-v-7294c89d>`);
        ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isError)) {
        _push(`<p class="VInput__error" data-v-7294c89d>Введите ${ssrInterpolate(_ctx.type === "number" ? "число" : "не менее 3 символов")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7294c89d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "VTextarea",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VTextarea" }, _attrs))} data-v-c7530ae2><textarea${ssrRenderAttrs(_temp0 = mergeProps({ class: "VTextarea__native" }, _ctx.$attrs, {
        class: {
          "has-label": _ctx.$slots.label
        },
        value: __props.modelValue
      }), "textarea")} data-v-c7530ae2>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
      if (_ctx.$slots.label) {
        _push(`<label class="VTextarea__label" data-v-c7530ae2>`);
        ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VTextarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c7530ae2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: measures } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/measures", "$iyMDuBlEhi")), __temp = await __temp, __restore(), __temp);
    const { categories } = useCategoryStore();
    const recipe = reactive({
      category: "",
      title: "",
      ingridients: [],
      description: "",
      images: []
    });
    const isDisabled = ref(true);
    const ingridient = ref({
      name: "",
      quantity: 0,
      measure: null
    });
    function addIngridient() {
      recipe.ingridients.push({
        ...ingridient.value
      });
      clearIngridientFields();
    }
    function clearIngridientFields() {
      ingridient.value.name = "";
      ingridient.value.quantity = 0;
      ingridient.value.measure = null;
    }
    function removeIngridient(index) {
      recipe.ingridients.splice(index, 1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTitle = __nuxt_component_0;
      const _component_CommonVSelect = _sfc_main$3;
      const _component_CommonVInput = __nuxt_component_2;
      const _component_nuxt_icon = _sfc_main$5;
      const _component_CommonVButton = __nuxt_component_0$1;
      const _component_CommonVTextarea = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonTitle, {
        title: "Добавить рецепт",
        class: "create__title"
      }, null, _parent));
      _push(`<form class="form"><div class="form__item"><h3>Категория</h3>`);
      _push(ssrRenderComponent(_component_CommonVSelect, {
        options: unref(categories),
        modelValue: unref(recipe).category,
        "onUpdate:modelValue": ($event) => unref(recipe).category = $event
      }, null, _parent));
      _push(`</div><div class="form__item"><h3>Заголовок</h3>`);
      _push(ssrRenderComponent(_component_CommonVInput, {
        modelValue: unref(recipe).title,
        "onUpdate:modelValue": ($event) => unref(recipe).title = $event,
        type: "text",
        placeholder: "Введите заголовок"
      }, null, _parent));
      _push(`</div><div class="form__item ingridients"><h3>Инргидиенты</h3>`);
      if (unref(recipe).ingridients.length) {
        _push(`<div class="ingridients__list"><!--[-->`);
        ssrRenderList(unref(recipe).ingridients, (item, index) => {
          _push(`<div class="ingridients__item"><p class="ingridients__text">${ssrInterpolate(item.name)} - ${ssrInterpolate(item.quantity)} ${ssrInterpolate(item.measure)}</p><span class="ingridients__remove">`);
          _push(ssrRenderComponent(_component_nuxt_icon, {
            name: "close",
            onClick: ($event) => removeIngridient(index)
          }, null, _parent));
          _push(`</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ingridients__fields">`);
      _push(ssrRenderComponent(_component_CommonVInput, {
        model: unref(ingridient).name,
        "onUpdate:model": ($event) => unref(ingridient).name = $event,
        type: "text",
        placeholder: "Введите ингридиент"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonVInput, {
        model: unref(ingridient).quantity,
        "onUpdate:model": ($event) => unref(ingridient).quantity = $event,
        type: "number",
        placeholder: "Введите количество"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonVSelect, {
        options: unref(measures),
        modelValue: unref(ingridient).measure,
        "onUpdate:modelValue": ($event) => unref(ingridient).measure = $event,
        class: "ingridients__select"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_CommonVButton, {
        small: "",
        onClick: addIngridient,
        disabled: unref(isDisabled)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Добавить Инргидиент`);
          } else {
            return [
              createTextVNode("Добавить Инргидиент")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="form__item"><h3>Способ приготовления</h3>`);
      _push(ssrRenderComponent(_component_CommonVTextarea, {
        placeholder: "Введите текст",
        id: "steps",
        modelValue: unref(recipe).description,
        "onUpdate:modelValue": ($event) => unref(recipe).description = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CommonVButton, {
        small: "",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Сохранить`);
          } else {
            return [
              createTextVNode("Сохранить")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-DLQ7mHbG.js.map
