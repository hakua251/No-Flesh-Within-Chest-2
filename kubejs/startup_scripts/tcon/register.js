StartupEvents.registry("item", event => {

	event.create("chest_thinker:bloodmeat_ingot")
		.rarity('uncommon')
		.texture("chest_thinker:item/bloodmeat_ingot")
		.maxStackSize(64)
})
StartupEvents.registry('fluid', event => {
	event.create("chest_thinker:melted_bloodmeat_ingot")
		.thickTexture(0xC80616)
		.bucketColor(0xC80616)
})