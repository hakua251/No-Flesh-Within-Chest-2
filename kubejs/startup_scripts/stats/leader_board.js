// priority: 999
LeaderboardsEvents.registryLeaderboards(event => {
	event.register(
		new ResourceLocation('infinity:portals_opened_stat'),
		new LeaderboardFromStat(
			new ResourceLocation('infinity:portals_opened_stat'),
			Text.translatable('leaderboard.infinity.portals_opened_stat'),
			$InfinityStats.PORTALS_OPENED_STAT,
			false,
			LeaderboardFromStat.DEFAULT
		)
	)
	event.register(
		new ResourceLocation('infinity:dimensions_opened_stat'),
		new LeaderboardFromStat(
			new ResourceLocation('infinity:dimensions_opened_stat'),
			Text.translatable('leaderboard.infinity.dimensions_opened_stat'),
			$InfinityStats.DIMS_OPENED_STAT,
			false,
			LeaderboardFromStat.DEFAULT
		)
	)
	
	event.register(
		new ResourceLocation('infinity:worlds_destroyed_stat'),
		new LeaderboardFromStat(
			new ResourceLocation('infinity:worlds_destroyed_stat'),
			Text.translatable('leaderboard.infinity.worlds_destroyed_stat'),
			$InfinityStats.WORLDS_DESTROYED_STAT,
			false,
			LeaderboardFromStat.DEFAULT
		)
	)

	// event.register(
	// 	new ResourceLocation('kubejs:test'),
	// 	new Leaderboard(
	// 		global.TICKS_ON_FIRE,
	// 		Text.translatable('leaderboard.kubejs.test'),
	// 		player => {
	// 			return Text.of(player.getStats().getValue(global.TICKS_ON_FIRE))
	// 		},
	// 		player => {
	// 			return player.getStats().getValue(global.TICKS_ON_FIRE)
	// 		},
	// 		Comparator.comparingInt(player => player.getStats().getValue(global.TICKS_ON_FIRE)).reversed(),
	// 		player => player.getStats().getValue(global.TICKS_ON_FIRE) >= 0
	// 	)
	// )
})