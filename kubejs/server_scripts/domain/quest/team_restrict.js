// priority: 500
// 阻止玩家创建Party和加入Patry，但这人会允许创建ServerTeam
MAAEvents.ftbPlayerJoinParty(event => {
    event.cancel()
})
// 阻止玩家邀请
MAAEvents.ftbPlayerInviteParty(event => {
    event.cancel()
})

// 允许声明盟友

// MAAEvents.ftbCreateParty(event => {
//     event.cancel()
// })
// 现在不允许创建ServerTeam了
// MAAEvents.ftbCreateServerTeam(event => {
//     event.cancel()
// })