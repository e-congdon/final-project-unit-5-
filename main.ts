let blue_girl = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . f 9 9 6 6 1 f . . . . 
    . . f f f 6 f f f 9 f 9 f f . . 
    . f 9 9 6 6 6 f 9 f 9 9 9 9 f . 
    f 9 9 f f f f 9 9 9 f f f 9 9 f 
    . f f 9 9 9 9 9 9 9 9 9 9 f f . 
    . . . f 9 f 9 9 9 9 f 9 f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f 6 9 9 f f 6 9 9 f . . . 
    . . . . f f 9 9 6 6 f f . . . . 
    . . . . f 9 f f f f 9 f . . . . 
    . . . f 9 6 6 9 9 9 9 9 f . . . 
    . . . f 9 f 6 9 9 9 f 1 f . . . 
    . . . . f f 1 9 9 9 f f . . . . 
    . . . . . f 1 f f 6 f . . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(blue_girl)
let red_boy = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . . f 5 f . . . f . . . 
    . . . . . . f 4 f . . f 5 f . . 
    . . . f . f 2 2 f f . f 4 f . . 
    . . f 2 f f 2 2 4 4 f 2 4 f . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    . . . f 2 f 2 2 2 2 f 2 f . . . 
    . . . f 4 2 2 2 2 2 2 2 f . . . 
    . . . f 5 4 2 f f 2 2 2 f . . . 
    . . . . f f 2 2 2 2 f f . . . . 
    . . . . f 2 f f f f 4 f . . . . 
    . . . f 2 2 2 2 2 2 2 4 f . . . 
    . . . f 2 f 2 2 2 2 f 5 f . . . 
    . . . . f f 2 2 2 5 f f . . . . 
    . . . . . f 2 f f 5 f . . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(red_boy)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(blue_girl, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(red_boy, sprites.castle.tileGrass1)
scene.cameraFollowSprite(red_boy)
scene.cameraFollowSprite(blue_girl)
