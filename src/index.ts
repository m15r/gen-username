type Options = {
    maxLength?: number
    capitalize?: boolean
    separator?: string
    numberLength?: number
}

const adjectives = require('../dictionaries/adjectives.json')

const nouns = [
    ...require('../dictionaries/nouns/animals.json'),
    ...require('../dictionaries/nouns/household.json')
]

function generateRandomNumber(length: number) {
    const min = parseInt('1' + (length > 0 ? '0'.repeat(length - 1) : ''))
    const max = parseInt('9'.repeat(length))
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function generateUsername(options?: Options) {
    const dictionaries = [adjectives,nouns]
    const maxLength = options?.maxLength ?? 32
    const numberLength = options?.numberLength ?? 3
    let username: string | undefined = undefined
    while (!username || (username?.length + numberLength) > maxLength) {
        const parts = dictionaries.map(dy => {
            const word = dy[Math.floor((Math.random()*dy.length))]
            return options?.capitalize ? capitalize(word) : word
        })
        username = parts.join(options?.separator ?? '')
    }
    if (numberLength > 0) username += generateRandomNumber(options?.numberLength ?? 3).toString()
    return username
}