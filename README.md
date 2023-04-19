# Random Unique Username Generator

Simple lightweight script that generates random and unique usernames.

## Install

```
npm i gen-username
```

## Usage

```ts
import { generateUsername } from "gen-username"

generateUsername({
    maxLength: 16,
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
|--------------|-------------|-----------|-----------------|
| maxLength    | `number`    | Maximum username length. Trailing number included. | `32` |
| capitalize   | `boolean`   | Capitalize words | `false` |
| separator    | `string`    | Separator between words  | `""` |
| numberLength | `number`    | Length of random trailing number. Use `0` to disable. | `3` |