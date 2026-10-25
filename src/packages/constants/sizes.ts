import { InjectionKey } from "vue"

export const builtinSizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const

type VfBuiltinSize = (typeof builtinSizes)[number]
export type VfSize = VfBuiltinSize | (string & {})

export const DEFAULT_SIZE_KEY: InjectionKey<VfSize> = Symbol('vf-default-size')
export const DEFAULT_SIZE_FALLBACK: VfSize = 'm'