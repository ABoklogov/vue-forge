# VueForge

UI component library for Vue 3.

## Installation

```bash
npm install vue-forge
```

## Quick start

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueForge from 'vue-forge'
import 'vue-forge/style.css'

const app = createApp(App)

app.use(VueForge, {
  defaultSize: 'm',   // глобальный дефолт для всех компонентов
})

app.mount('#app')
```

## Components

- `VfButton`
- `VfTextInput`

## Sizes

All components support a `size` prop. Built-in sizes:

| Size | Height | Font size | Radius |
|------|--------|-----------|--------|
| `xxxs` | 24px | 12px | 8px |
| `xxs`  | 28px | 12px | 8px |
| `xs`   | 32px | 14px | 8px |
| `s`    | 38px | 14px | 8px |
| `m`    | 44px | 14px | 12px |
| `l`    | 50px | 16px | 12px |
| `xl`   | 60px | 20px | 16px |
| `xxl`  | 72px | 24px | 20px |

Default size is `m`. Change it globally:

```ts
app.use(VueForge, { defaultSize: 's' })
```

### Using a size

```vue
<VfButton size="s">Small</VfButton>
<VfButton size="m">Medium</VfButton>
<VfButton size="l">Large</VfButton>
```

### Overriding sizes

Every size is driven by CSS custom properties. Override them in your app:

```css
:root {
  --vf-size-m-height: 48px;
  --vf-size-m-font-size: 15px;
  --vf-size-m-radius: 10px;
  --vf-size-m-padding-x: 20px;
}
```

### Adding a custom size

Declare CSS variables for a new size — no rebuild needed:

```css
:root {
  --vf-size-xl-height: 60px;
  --vf-size-xl-font-size: 20px;
  --vf-size-xl-radius: 16px;
  --vf-size-xl-padding-x: 24px;
}
```

```vue
<VfButton size="xl">Extra large</VfButton>
```

### Per-component override

```vue
<script setup>
import { provide } from 'vue'
import { DEFAULT_SIZE_KEY } from 'vue-forge'

provide(DEFAULT_SIZE_KEY, 's')   // all children default to 's'
</script>
```

## Playground

Live demo: https://yourname.github.io/vue-forge/

## License

MIT