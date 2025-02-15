// priority: 1000

const customMoonTagKey = $DefaultLunarEvents.createEvent('custom_moon', () => {
    new $LunarEvent($ImmutableMap.of(),
        new $LunarEventClientSettings(
            new $ColorSettings('6766ff', 'ffffff'),
            40,
            null,
            null,
        ),
        new $LunarTextComponents(
            $CustomTranslationTextComponent(
                'enhancedcelestials.name.custom_moon'
            ),
            $CustomTranslationTextComponent(
                'enhancedcelestials.notification.custom_moon.rise'
            ),
            $CustomTranslationTextComponent(
                'enhancedcelestials.notification.custom_moon.set'
            ),
        ),
        new $LunarMobSettings($ImmutableMap.of(),
            new $LunarMobSpawnInfo(true, false, true, $MobSpawnSettings.EMPTY),
            [],
            new $FlipCondition($AnyCondition.INSTANCE)),
        $DropSettings.EMPTY)
})