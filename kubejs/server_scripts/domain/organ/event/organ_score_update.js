// priority: 999
ChestCavityEvents.updateOrganScore(event => {
    const chestCavity = event.chestCavity
    if (!chestCavity) return
    if (isScoreChanged('kubejs:extreme_strength')) {
        ExtremeStrengthUpdateOrganScore(event)
    }
    if (isScoreChanged('kubejs:extreme_fitness')) {
        ExtremeFitnessUpdateOrganScore(event)
    }
    if (isScoreChanged('kubejs:attack_dodge')) {
        AttackDodgeUpdateOrganScore(event)
    }
})


/**
 * 
 * @param {Internal.ChestCavityInstance} chestCavity 
 * @param {String} organScoreName 
 * @returns 
 */
function isScoreChanged(chestCavity, organScoreName) {
    return chestCavity.getOldOrganScore(organScoreName) != chestCavity.getOrganScore(organScoreName)
}