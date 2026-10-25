import { computed, inject } from 'vue'
import { builtinSizes, DEFAULT_SIZE_KEY } from '@/constants'
import { VfSize } from '@/types'

export function useSize(size: () => VfSize | undefined, fallback = 'm') {
  const globalDefault = inject(DEFAULT_SIZE_KEY, fallback)

  const resolved = computed(() => size() ?? globalDefault)

  const isBuiltin = computed(() =>
    (builtinSizes as readonly string[]).includes(resolved.value),
  )

  const sizeClass = computed(() =>
    isBuiltin.value ? `vf-size-${resolved.value}` : undefined,
  )

  const sizeStyle = computed(() => {
    if (isBuiltin.value) return undefined
    const s = resolved.value
    return {
      height: `var(--vf-size-${s}-height)`,
      fontSize: `var(--vf-size-${s}-font-size)`,
      borderRadius: `var(--vf-size-${s}-radius)`,
      paddingLeft: `var(--vf-size-${s}-padding-x)`,
      paddingRight: `var(--vf-size-${s}-padding-x)`,
    }
  })

  return { sizeClass, sizeStyle }
}