# Random Unique Username Generator

Simple lightweight script that generates unique usernames for you.

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
| maxLength    | `number`    | Maximum username length | `32` |
| capitalize   | `boolean`   | Start each word with a capital letter | `false` |
| separator    | `string`    | Separator between words  | `undefined` |
| numberLength | `number`    | Length of random trailing number | `0` |
