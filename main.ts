namespace SpriteKind {
    export const treasure = SpriteKind.create()
}
function Spawn_Enemy () {
	
}
function Spawn_Treasure () {
    treasure = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.treasure)
    treasure_List = tiles.getTilesByType(assets.tile`transparency16`)
}
let treasure_List: tiles.Location[] = []
let treasure: Sprite = null
let blue_girl = sprites.create(img`
    . . . . . f f f f f . . . . 
    . . . . f 9 9 6 6 1 f . . . 
    . f f f 6 f f f 9 f 9 f f . 
    f 9 9 6 6 6 f 9 f 9 9 9 9 f 
    f 9 f f f f 9 9 9 f f f 9 f 
    f f 9 9 9 9 9 9 9 9 9 9 f f 
    . . f 9 f 9 9 9 9 f 9 f . . 
    . . f 9 9 9 9 9 9 9 9 f . . 
    . . f 6 9 9 f f 6 9 9 f . . 
    . . . f f 9 9 6 6 f f . . . 
    . . . f 9 f f f f 9 f . . . 
    . . f 9 6 6 9 9 9 9 9 f . . 
    . . f 9 f 6 9 9 9 f 1 f . . 
    . . . f f 1 9 9 9 f f . . . 
    . . . . f 1 f f 6 f . . . . 
    . . . . f f f f f f . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(blue_girl)
let red_boy = sprites.create(img`
    . . . . . f . . . . . . 
    . . . . f 5 f . . . f . 
    . . . . f 4 f . . f 5 f 
    . f . f 2 2 f f . f 4 f 
    f 2 f f 2 2 4 4 f 2 4 f 
    f 2 2 2 2 2 2 2 2 2 f . 
    . f 2 f 2 2 2 2 f 2 f . 
    . f 4 2 2 2 2 2 2 2 f . 
    . f 5 4 2 f f 2 2 2 f . 
    . . f f 2 2 2 2 f f . . 
    . . f 2 f f f f 4 f . . 
    . f 2 2 2 2 2 2 2 4 f . 
    . f 2 f 2 2 2 2 f 5 f . 
    . . f f 2 2 2 5 f f . . 
    . . . f 2 f f 5 f . . . 
    . . . f f f f f f . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(red_boy)
tiles.setCurrentTilemap(tilemap`level1`)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, blue_girl)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, red_boy)
tiles.placeOnRandomTile(blue_girl, assets.tile`myTile20`)
tiles.placeOnRandomTile(red_boy, assets.tile`myTile20`)
