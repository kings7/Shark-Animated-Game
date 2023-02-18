namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true, effects.splatter)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.disintegrate, 150)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 150)
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.gameOver(false)
})
let submarine: Sprite = null
let myFood: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2100, function () {
    myFood = sprites.create(assets.image`food`, SpriteKind.Food)
    myFood.setPosition(scene.screenWidth(), randint(5, 115))
    myFood.vx = -75
})
game.onUpdateInterval(2100, function () {
    submarine = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    submarine.setPosition(scene.screenWidth(), randint(5, 115))
    submarine.vx = -50
})
