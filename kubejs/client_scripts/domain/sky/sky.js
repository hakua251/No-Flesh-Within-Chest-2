// priority: 500
// NativeEvents.onEvent($RenderLevelStageEvent,/**@param {Internal.RenderLevelStageEvent} event*/(event) => {
//     if (event.getStage() != $RenderLevelStageEventStage.AFTER_SKY) return
//     const level = Client.level
//     if (level == null || !level.isOverworld()) return

//     const poseStack = event.getPoseStack()

//     $RenderSystem.depthMask(false)
//     $RenderSystem.enableBlend()
//     $RenderSystem.defaultBlendFunc()
//     $RenderSystem.setShaderColor(1.0, 1.0, 1.0, 0.2)

//     const textureManager = Client.getTextureManager()
//     let texture = new ResourceLocation('kubejs', 'textures/env/aether_sky.png')

//     textureManager.bindForSetup(texture)
//     $RenderSystem.setShaderTexture(0, texture)

//     $RenderSystem.setShader(() => $GameRenderer.getPositionTexShader())


//     const tessellator = $Tesselator.getInstance()
//     const bufferBuilder = tessellator.getBuilder()
//     bufferBuilder.begin($VertexFormat.Mode.QUADS, $DefaultVertexFormat.POSITION_TEX)

//     for (let face = 0; face < 6; face++) {
//         poseStack.pushPose()
//         if (face == 1) {
//             poseStack.mulPose(new Quaternionf().rotateX(JavaMath.toRadians(90.0)))
//         } else if (face == 2) {
//             poseStack.mulPose(new Quaternionf().rotateX(JavaMath.toRadians(-90.0)))
//             poseStack.mulPose(new Quaternionf().rotateY(JavaMath.toRadians(180.0)))
//         } else if (face == 3) {
//             poseStack.mulPose(new Quaternionf().rotateX(JavaMath.toRadians(180.0)))
//         } else if (face == 4) {
//             poseStack.mulPose(new Quaternionf().rotateZ(JavaMath.toRadians(90.0)))
//             poseStack.mulPose(new Quaternionf().rotateY(JavaMath.toRadians(-90.0)))
//         } else if (face == 5) {
//             poseStack.mulPose(new Quaternionf().rotateZ(JavaMath.toRadians(-90.0)))
//             poseStack.mulPose(new Quaternionf().rotateY(JavaMath.toRadians(90.0)))
//         }

//         let matrix4f = poseStack.last().pose()
//         let tex = $UVRange.TEXTURE_FACES[face]
//         bufferBuilder.vertex(matrix4f, -100.0, -100.0, -100.0).uv(tex.getMinU(), tex.getMinV()).endVertex()
//         bufferBuilder.vertex(matrix4f, -100.0, -100.0, 100.0).uv(tex.getMinU(), tex.getMaxV()).endVertex()
//         bufferBuilder.vertex(matrix4f, 100.0, -100.0, 100.0).uv(tex.getMaxU(), tex.getMaxV()).endVertex()
//         bufferBuilder.vertex(matrix4f, 100.0, -100.0, -100.0).uv(tex.getMaxU(), tex.getMinV()).endVertex()

//         poseStack.popPose()
//     }

//     $BufferUploader.drawWithShader(bufferBuilder.end())
//     $RenderSystem.setShaderColor(1.0, 1.0, 1.0, 1.0)
//     $RenderSystem.disableBlend()
//     $RenderSystem.depthMask(true)
// })

// RenderJSEvents.AddWorldRender(event => {
//     event.addWorldRender((context) => {
//         // 生成巨型石头
//         let bufferSource = context.bufferSource
//         let poseStack = context.poseStack
//         let playerPos = Client.gameRenderer.getMainCamera().getPosition()
//         poseStack.pushPose()
//         let blockPos = new BlockPos(0, 58, 0)

//         poseStack.translate(blockPos.getX() - playerPos.x(), blockPos.getY() - playerPos.y(), blockPos.getZ() - playerPos.z())
//         poseStack.scale(100, 100, 100)

//         Client.getBlockRenderer().renderSingleBlock(Blocks.STONE.defaultBlockState(), poseStack, bufferSource, 255, $OverlayTexture.NO_OVERLAY, $ModelData.EMPTY, null)
//         poseStack.popPose()
//     })
// })