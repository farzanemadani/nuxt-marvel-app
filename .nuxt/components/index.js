export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as Pagination } from '../../components/pagination.vue'
export { default as CharacterCard } from '../../components/character/Card.vue'
export { default as CharacterCategory } from '../../components/character/Category.vue'
export { default as CharacterList } from '../../components/character/List.vue'
export { default as CharacterSection } from '../../components/character/Section.vue'
export { default as CharacterSkeletonLoader } from '../../components/character/SkeletonLoader.vue'
export { default as BaseAlert } from '../../components/base/Alert.vue'
export { default as BaseButton } from '../../components/base/Button.vue'
export { default as BaseEllipse } from '../../components/base/Ellipse.vue'
export { default as BaseForm } from '../../components/base/Form.vue'
export { default as BaseIcon } from '../../components/base/Icon.vue'
export { default as BaseImage } from '../../components/base/Image.vue'
export { default as BaseInput } from '../../components/base/Input.vue'
export { default as SearchForm } from '../../components/search/Form.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
