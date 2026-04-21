// priority: 500
StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('advance_wither_skull')
        .setCooldownSeconds(3)
        .setBaseManaCost(20)
        .setManaCostPerLevel(10)
        .setBaseSpellPower(1)
        .setSpellPowerPerLevel(1)
        .setCastType('instant')
        .setSchool('irons_spellbooks:blood')
        .setMinRarity('legendary')
        .setMaxLevel(1)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            const spell = ctx.spell
            const entity = ctx.entity
            const level = ctx.level
            const spellLevel = ctx.spellLevel
            let weaknessEffect = entity.getEffect('minecraft:weakness')
            let damage = spell.getSpellPower(spellLevel, entity) * weaknessEffect.getDuration() / 20 * weaknessEffect.getAmplifier()
            let skull = new $WitherSkullProjectile(entity, level, 6, damage)
            let spawn = entity.getEyePosition().add(entity.getForward())
            skull.moveTo(spawn.x(), spawn.y() - skull.getBoundingBox().getYsize() / 2, spawn.z(), entity.yRot + 180, entity.xRot)
            level.addFreshEntity(skull)
        })
})
