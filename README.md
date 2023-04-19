# Username Generator

Simple lightweight script that generates unique usernames for you.



```ts
import { generateUsername } from "generate-username"

generateUsername({
    capitalize: true,
    numberLength: 3
})

// JuicyFork330
// LightLlama539
// NosyPelican558
```

## Methods

### generateUsername

| Options      | Type        |           | Default value   |
|--------------|-------------|-----------|---|
| capitalize   | `boolean`   | Start each word with a capital letter | `false` |
| separator    | `string`    | Separator between words  | `undefined` |
| numberLength | `number`    | Length of random trailing number | `0` |
