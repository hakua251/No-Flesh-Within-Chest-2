// priority: 1000
ServerEvents.recipes(event => {
    event.shaped('minecraft:enchanted_golden_apple', [
        ['minecraft:gold_block', 'minecraft:gold_block', 'minecraft:gold_block'],
        ['minecraft:gold_block', 'minecraft:golden_apple', 'minecraft:gold_block'],
        ['minecraft:gold_block', 'minecraft:gold_block', 'minecraft:gold_block']
    ])
})
