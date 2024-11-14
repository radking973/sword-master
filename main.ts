let mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . f f f f . f . f f f f . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f . . . . . f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
