namespace SpriteKind {
    export const greg = SpriteKind.create()
    export const Wizard = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wizard, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.greg, function (sprite, otherSprite) {
    if (gregConvo == true) {
        gregConvo = false
        gregScene()
        delete_sprites()
        spritesscene_greg()
        begin_convo_w_greg()
        greg_boolean()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (choice == 1) {
        yes = true
        while (yes) {
            tiles.setCurrentTilemap(tilemap`level2`)
            tutorialGreg.setPosition(64, 19)
            scene.cameraFollowSprite(playerModelTwo)
            yes = false
        }
    }
})
function greg_boolean () {
    choice = game.askForNumber("Right?", 1)
    if (choice == 1) {
        tutorialGreg.sayText("alright, here you go")
        pause(2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        playerModelTwo = sprites.create(img`
            . . . . . f f f f f . . . . . . . . 
            . . . . f f . . . f f . . . . . . . 
            . . . . f . . . . . f . . . . . . . 
            . . . . f . . . . . f . . . . . . . 
            . . . . f f . . . f f . . . . . . . 
            . . . . . f f f f f . . . . . . . . 
            . . . . . . . f . . . . . . . . . . 
            . . . . . f f f f f . . e . . . . . 
            . . f f f f . f . f f e e b b b b b 
            . . . . . . . f . . . . e . . . . . 
            . . . . . . . f . . . . . . . . . . 
            . . . . . . . f . . . . . . . . . . 
            . . . . . . f f f . . . . . . . . . 
            . . . . . f f . f f . . . . . . . . 
            . . . . f f . . . f f . . . . . . . 
            . . . . f . . . . . f . . . . . . . 
            `, SpriteKind.Player)
        info.setLife(5)
        playerModelTwo.setPosition(61, 96)
        controller.moveSprite(playerModelTwo, 35, 35)
        tutorialGreg.sayText("This is the submachine sword")
        pause(2000)
        tutorialGreg.sayText("press A to fire, B to exit", 5000, false)
    } else {
        tutorialGreg.sayText("wrong choice")
        pause(1000)
        // while loop for firewall
        while (0 < info.life()) {
            projectile = sprites.createProjectileFromSprite(img`
                ..442222222f2222
                .4442222222ff222
                .44422222122f222
                444422222122f222
                444422222122f222
                444422222122f222
                444422222122f222
                444422222122f222
                444222222122f222
                442522222122f222
                .42.52222122f222
                .24.52222122f222
                244.55222122f222
                2444.5222122f222
                244445222212f222
                24444.522212f222
                244444552212f222
                .24444.52221f222
                ..2444452221f222
                ...244452221f222
                ....244.52221222
                .....2.452221222
                ......2452221222
                .......252221222
                .......252221222
                .......422221222
                ......4422221222
                ......4522221222
                ......4522221222
                .....44522221222
                .....4.252221222
                ....44.252221222
                ....452552221222
                ...4552552221222
                ...4525522221222
                ..4.255522221f22
                ..4.255522221f22
                ..4.255522221f22
                ..42554222221f22
                ..425542222212f2
                ..255542222212f2
                ..245542222212f2
                ..245522222221f2
                ..245522222221f2
                ..2452222222212f
                ..2.52222222221f
                ..2.52222222221f
                ..2.54222222221f
                ..25444222222221
                ..25444222222221
                ..25444422222221
                ...2444422222221
                ...5244422222221
                ...5244442222221
                ...5424442222221
                ...5442442222221
                ...5444244222221
                ....54442422221f
                ....54442422221f
                ....54444222212f
                ....54444222212f
                ....54444422212f
                .....5444422122f
                .....5444422122f
                ......544422122f
                ......544422122f
                .......54421222f
                .......54421222f
                ........5421222f
                ........5421222f
                .........221222f
                ........4212222f
                ........2412222f
                ........241222f2
                .......4241222f2
                .......2441222f2
                .......2441222f2
                ......42415222f2
                .....424415222f2
                .....42441522f22
                .....42441522f22
                ....424441522f22
                ...4424441522f22
                ...4.24441222f22
                ...4244441222f22
                ...424444122f222
                ...424444122f222
                ...424444122f222
                ...424445112f222
                ...424445212f222
                ...4.2445221f222
                ...4.2445221f222
                ...4..2522221222
                ....4.2522221222
                ....4.222222f122
                ....4..22222f122
                ....4.522222f212
                ....4.522222f212
                .....4522222f212
                .....45222222f12
                .....55222222f12
                .....55222222f12
                .....55222222f12
                .....55222222122
                .....55222222122
                .....552222211f2
                .....552222212f2
                .....552222212f2
                .....552222122f2
                .....45.222122f2
                .....45.222122f2
                ......552221222f
                ......452221222f
                ......4.2222122f
                ......4..252112f
                ......4..252212f
                ......4..2222212
                ......4..2222221
                ......4..2222222
                ..........222222
                `, tutorialGreg, -100, 0)
            pause(300)
        }
    }
}
// submachine sword bullets
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (choice == 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 5 . 5 5 5 5 5 5 5 1 e e . . 
            . . 5 5 5 5 5 5 5 5 5 1 e e e . 
            . 5 5 . 5 5 5 5 5 5 5 1 e e e e 
            . . 5 5 5 5 5 5 5 5 5 1 e e e e 
            . 5 5 . 5 5 5 5 5 5 5 1 e e e e 
            . . 5 5 5 5 5 5 5 5 5 1 e e e . 
            . 5 5 . 5 5 5 5 5 5 5 1 e e . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerModelTwo, 50, 0)
    }
})
// damage for firewall
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (!(choice == 1)) {
        info.changeLifeBy(-1)
    }
})
function background_wizard () {
    tiles.setCurrentTilemap(tilemap`level8`)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfcccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffccccccfcccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccfccccccfcccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccffcccccfcccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffccccfccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccffcccfccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccfffcfccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfffbbffffbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbfffbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbf55fffbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbfff55555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbb
        bbbbbbbbbbbbbbfffffffffffffffbbbbbbbbbbfbffffffbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbffffffbbbbbfbbbbbbbbbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbb5555555bbbbbbbbbbbbbbbbffffbfbbbbbbbbbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbb
        bbbbbbbbbbb55555555bbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff1bffbbbbbbbb
        bbbbbbbbbbb555555555bbbbbbbbbbbbbbbbbbb5bbbbbbbbbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11fff11ffbbbbbbb
        bbbbbbbbbbb555555555bbbbbbbbbbbbbbbb5555bbbbbbbbbbb555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111f1fffffbbbbbbb
        bbbbbbbbbbb555555555bbbbbbbbbbbbbb5555555bbbbbbbbbbb5555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111bbbbbbbb
        bbbbbbbbbbbb5555555bbbbbbbbbbbbbbb5555555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbb
        bbbbbbbbbbbbb5555bbbbbbbbbbbbbbbbb5555555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111f11111bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111f111bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111f111111bbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11ff11111bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111bbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbb1bbbbbb1bbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbb1bbbb11b1bb
        bbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1b11bb11111bb111bb1bb
        bbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bb111bbb11111bbbb11b
        bbbbbbbbbbbbbbbbbbbb1cc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbb1111b1bbbbbbbb1b
        bbbbbbbbbbbbbbbbbbbb1ccc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1cc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb1bbbbbbbb1b
        bbbbbbbbbbbbbbbbbbbb1ccc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbb11bb11bbbbbb1bb111bbb1b
        bbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbbbbbbbbb111111cccc1bbbbbbbbbbbb1bbbbb1bbbbb1111bbbbb1b
        bbbbbbbbbbbbbbbbbbbb11c11bbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbbbbb11111ccccccccc1bbbbbbbbbbbb1bbbbbb11bbb11bbbbbbb1b
        bbbbbbbbbbbbbbbbbbb11111bbbbbbbbbb11ccccc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbb1111ccccccccccccc1bbbbbbbbbbb11bbbbbbbb11111bbbbbbbb1
        bbbbbbbbbbbbbbbbbbb15511bbbbbbbbbb1cccccc1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1ccc1bbbbbbbbbbbbbbbbbbb11ccccccccccccccc1bbbbbbbbbbb1bbbbbb11111b1b111bbbbb1
        bbbbbbbbbbbbbbbbbb1155511bbbbbbbb1111111c1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111c1bbbbbbbbbbbbbbbbbbb131111ccccccccccc1bbbbbbbbbbb1bbbbbbbbbbbb11bbbbbbbb1
        bbbbbbbbbbbbbbbbb11555551bbbbbbbbb19999911bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb17111bbbbbbbbbbbbbbbbbbb1333311111111111111bbbbbbbbb1bbbbbbb1bbbbb1bbbbbbbbb1
        bbbbbbbbbbbbbbbbb155555511bbbbbbbb19999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb177111bbbbbbbbbbbbbbbbbb133333333333333331bbbbbbbbbb1bbbbbb11111111bb11111bb1
        bbbbbbbbbbbbbbbbb155555551bbbbbbbb19999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb17777711bbbbbbbbbbbbbbbbb133333333333333331bbbbbbbbb11bbbbbbb11bbb1b111bbbbbb1
        bbbbbbbbbbbbbbbbb155555551bbbbbbbb19999911bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb177777711bbbbbbbbbbbbbbbb133333333333333331bbbbbbbbb1bbbbbbbbb11bb1bbb1bbbbb1b
        bbbbbbbbbbbbbbbbb155555511bbbbbbbb1999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb17777777711bbbbbbbbbbbbbb133333333333333331bbbbbbbb111bbbbbbbb11bb1b11bbbbbb1b
        bbbbbbbbbbbbbbbbb11155551bbbbbbbbb1999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1177777777711bbbbbbbbbbbbb133333333333333331bbbbbbb11111bbbbbbbb11111bbb1bbb111
        bbbbbbbbbbbbbbbbbbb111111bbbbbbbbb1199991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb17777777777711bbbbbbbbbbbb133333333333333331bbbbbbb1bb1b1bbbbbbbb1b1bbb1bbbb111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111911bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb177777777777771bbbbbbbbbbb133333333333333331bbbbbb1bbb1b1bbbbbbb11b1bb1bbbbb111
        bbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11eeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbb1177777777777111bbbbbbbbbbb133333333333333311bbbbbb1bbb1bb1bbbbbb11b111bbbbb1b11
        bbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbb1777777711111bbbbbbbbbbbbbb11111111111111111bbbbbbb11bbb1bb11bb11111111bb1111bb1
        bbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbeeeee111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1bbb1bb1bbbb11111bb1bbb1
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1bbbb1b1111111111bb1bbb1
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1bbb1bb1111111b1bbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbb111b1111bbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbb
        bbbbb666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbb1bbbbbbb
        bbbbb666666666611111166666666666666661666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbb1bbbbbbb
        bbbbb666661166666166666661666666116661166666166666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb1bbbbbb
        bbbbb666611666666166666611666666116661166666166666bbbbbbbbbb7777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb1bbbbbb
        bbbbb666616666666166666116666666111611166666116666bbbb77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb1bbbbbb
        bbbbb666116666666166666166666661161616166661116666bbbbbbf777777777777777777f7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb1bbbbbb
        bbbbb666116666666166666161166661661616116661616666bbbbbbfff7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbb1bbbbbb
        bbbbb666611166666166666166111661666116616661616666bbbbbbfffff7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbb1bbbbbb
        bbbbb666666116666166666166616661666116616661116666bbbbbbbffffff7777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbb1bbbbbb
        bbbbb666666616666166666116116661666116616611616666bbbbbbbfffffffff77777ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb1bbbbbb
        bbbbb666111116611111166661166661666666611616611666bbbbbbbbfffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb1bbbbbb
        bbbbb666666666666666666666666666666666661616661666bbbbbbbbfffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbb1bbbbbb
        bbbbb666666666666666666666666666666666666616661616bbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbb1bbbbbb
        bbbbb666666666666666666666666666666666666666666666bbbbbbbbbfffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb1bbbbbb
        bbbbb666666666666666666666666666666666666666666666bbbbbbbfffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb1bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbb1bbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbffffbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbb11111bb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbb1bbbbbbbbb1bbb1bb
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11e111eeeeeeeee11111ee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    pause(3000)
}
function delete_sprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.greg)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Wizard)
    pause(5000)
}
function save_name (text: string) {
    playerName = text
    return playerName
}
function spritesscene_greg () {
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        f888888888888888888888888888888888888888888888888888777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        fffff88888888888888888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccffff8888888888888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ccccccccffff8888888888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccccccccfffff888888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccccccccccccffff888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccccccccccccccccffff88888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ccccccccccccccccccccccffff88888888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccccccccccccccccccccccfffff8888888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ccccccccccccccccccccccccccccccfff8888888888888888888777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        cccccccccccccccccccccccccccccccccfff8888888888888888777777777777888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888
        ccccccccccccccccccccccccccccccccccccfff8888888888888877777777777888888888888888888888888888888888888888888888888888888888777777788888888888888888888888888888888
        cccccccccccccccccccccccccccccccccccccccff88888888888877777777777888888888888888888888888888888888888888888888888888888877777777778888888888888888888888888888888
        cccccccccccccccccccccccccccccccccccccccccff888888888877777777777888888888888888888888888888888888888888888888888888887777777777777888888888888888888888888888888
        cccccccccccccccccccccccccccccccccccccccccccf77777777777777777777888888888888888888888888888888888888888888888888887777777777777777788888888888888888888888888888
        cccccccccccccccccccccccccccccccccccccccccccc77777777777777777777777777788888888888888888888888888888888888888888887777777777777777777888888888888888888888888888
        cccccccccccccccccccccccccccccccccccccccccccc777777777777777777777777777888888888888888888888888888888888888888888877777777777777777777888888888888888888888888ff
        ccccccccccccccccccccccccccccccccccccccccccccccccccffe777777777777777777888888888888888888888888888888888888888888777777777777777777777888888ffffffffffffffffffcc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceee8888888888888888888888888888888888888888888888888888888888777777777777777777777ffffffcccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeef888888888888888888888888888888888888888888888888888888888777777777777777777777cccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeecfff888888888888888888888888888888888888888888888888888888777777777777777777777cccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeeccccff888888888888888888888888888888888888888888888888888877777777777777777777ccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeeccccccfff88888888888888888888888888888888888888888888fffff7777777777777777777777ccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeecccccccccfff88888888888888888888888888888888888888ffffcccc777777777777777777777777ccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeeccccccccccccfffff88888888888888888888888888888ffffcccccccc777777777777777777777777ccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeecccccccccccccccccfffff8888888888888888888888ffccccccccccccc77777777777777777777777ccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccfffffffffffffff8888fffccccccccccccccc77777777777777777777777ccccccccccccccccccccccc
        cccccccccccccc77777777cccc777ccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccccccff8ffcccccccccccccccccc7777777777777777777777cccccccccccccccccccccccc
        ccccccccccccc777777777777c777ccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccc777777777777777777777ccccccccccccccccccccccccc
        ccccccccccccc7777777777777777ccccccccccccccccccccccceeecccccccccccccccccccccccccccccccccccfccccccccccccccccccccccc7777777777777777777ccccccccccccccccccccccccccc
        cccccccccccc77777777777777777ccccccccccccccccccccccceeecccccccccccccccccccccccccccccccccffccccccccccccccccccccccccc77777777777777777cccccccccccccccccccccccccccc
        cccccccccccc77777777777777777ccccccccccccccccccccccceeecccccccccccccccccccccccccccccccffccccccccccccccccccccccccccc7777777777777777ccccccccccccccccccccccccccccc
        cccccccccccc77777777777777777ccccccccccccccccccccccceeecccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccc777777777ccccccccccccccccccccccccccccccc
        cccccccccccc77777777777777777cccccccffffffffffffffffeeeffffffffcccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        ccccccccccc777777777777777777cccffff6666666666666666eee66666666ffffffffccccccccccffccccccccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        ccccccccccc77777777777777777777766666666666666666666eee6666666666666666fffffffffcfcccccccccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        ccccccccccc77777777777777777777766666666666666666666eee6666666666666666666666666fffffffffccccccccccccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        ccccccccccc77777777777777777777766666666666666666666eee6666666666666666666666666666666666fffffffcccccccccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        ccccccccccc77777777777777777777766666666666666666666eee66666666666666666666666666666666666666666ffffffcccccccccccccccccccccceeeccccccccccccccccccccccccccccccccc
        cccccccccccc7777777777777777776666666666666666666666eee66666666666666666666666666666666666666666666666ffffffcccccccccccccccceeeccccccccccccccccccccccccccccccccc
        cccccccccccc7777777777777777776666666666666666666666eee66666666666666666666666666666666666666666666666666666ffffcccccccccccceeeccccccccccccccccccccccccccccccccc
        cccccccccccf7777777777777777766666666666666666666666eee666666666666666666666666666666666666666666666666666666666fffffccccccceeeccccccccccccccccccccccccccccccccc
        cccccccccfff7777777777777777666666666666666666666666eee6666666666666666666666666666666666666666666666666666666666666fffffccceeeccccccccccccccccccccccccccccccccc
        ccccccccff667777777777777777776666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666fffeeeccccccccccccccccccccccccccccccccc
        cccccccf66667777777777777777776666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eeefcccccccccccccccccccccccccccccccc
        ccccccf666667777777777777777776666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eeeffffccccccccccccccccccccccccccccc
        ccccff6666666666eeee66777777776666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee6666ffffccccccccccccccccccccccccc
        cfff666666666666eeee66666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee6666666ffffffcccccccccccccccccccc
        f666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee6666666666666ffffffcccccccccccccc
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee6666666666666666666ffffffffcccccc
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee66666666666666666666666666ffffffc
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee6666666666666666666666666666666ff
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eeee66666666666666666666666666666666666666666666666666666666666666666666eeee66666666666666666666666666666666
        6666666666666666eee666666666666666666666666666666666eeee66666666666666666666666666666666666666666666666666666666666666666666eeee66666666666666666666666666666666
        6666666666666666eee6666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee66666666666666666666666666666666
        6666666666666666eee6666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee66666666666666666666666666666666
        6666666666666666eee6666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee66666666666666666666666666666666
        6666666666666666eee6666666666666666666666666666666666eee666666666666666666666666666666666666666666666666666666666666666666666eee66666666666666666666666666666666
        6666666666666666eee6666666666666666666666666666666666eee666666666666666666666666677777777777777777777777777777777777777777777eee77777777777777777777777777777777
        7777777777777777eee7777777777777777777777777777777777eee777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777777777
        7777777777777777eee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    player1_v2 = sprites.create(img`
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
    tutorialGreg = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b 5 f 5 b . . . . . . 
        . . . . . b b f b b . . . . . . 
        . . . . . b f f f b . . . . . . 
        . . . b b b f f f b b b . . . . 
        . . . f b b 2 b 2 b b f . . . . 
        . . f . 2 2 b b b 2 2 . f . . . 
        b b . . . b b b b b . . . b b . 
        b b . . . b b b b b . . . b b . 
        . . . . . 2 b b b 2 . . . . . . 
        . . . . b . 2 2 2 . b . . . . . 
        . . . . b b . . . b b . . . . . 
        . . . . . b . . . b . . . . . . 
        . . . . f f . . . f f . . . . . 
        `, SpriteKind.greg)
    player1_v2.setPosition(61, 96)
    controller.moveSprite(player1_v2, 20, 20)
    tutorialGreg.setPosition(102, 96)
}
function gregScene () {
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777727777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777fffffffffff777777777777777777777777777777777772277777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb77777777777777777777777
        77777777777777777777777777777777777fffff777777777fff7777777777777777777777777777777772777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb77777777777777777777777
        777777777777777777777777777777777ff77777777777777777f7777777777777777777777777777777227f7777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb77777777777777777777777
        7777777777777777777777777777777fff7777777777777777777ff7777777777777777777777777777727ff7777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb77777777777777777777777
        777777777777777777777777777777ff7777777777777777777777ff777777777777777777777777777727ff7777777777777f77777777777777bbbbffffffffffffffbbbb7777777777777777777777
        77777777777777777777777777777f7777777777777777777777777f777777777777777777777777777227f777777777777ff777777777777777bbbbffffffffffffffbbbb7777777777777777777777
        777777777777777777777777777ff77777777777777777777777777ff77777777777777f77777777777277f777777777777f7772277777777777bbbbffffffffffffffbbbb7777777777777777777777
        777777777777777777777777777f7777777777777777777777777777f77777777777777f77777777777277f7777777777ff77722777777777777bbb5555ffffff5555bbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f7777777777777727777777777727f77777777777f777277777777777777bbb5555ffffff5555bbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f7777777777777727777777777727f77777777777f772277777777777777bbb5555ffffff5555bbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f777777777777772f777777777727f7777777777f7722777777777777777bbbbbffffffffffffbbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f7777777777777772777777777227f777777777f77227777777777777777bbbbbffffffffffffbbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f7777777777777772777777777277f77777777f772777777777777777777bbbbbffffffffffffbbbbb7777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f7777777777777772777777777277f77777777f722777777777777777777bbbbbffffffffffffbbbbbb777777777777777777777
        77777777777777777777777777f77777777777777777777777777777f777777777777777277777777727f777777777f727777777777777777777bbbbbffffffffffffbbbbbbb77777777777777777777
        77777777777777777777777777f77777777777777777777777777777f777777777777777277777777227f77777777f7727777777777777777777bbbbbffffffffffffbbbbbbb77777777777777777777
        77777777777777777777777777f77777777777777777777777777777f777777777777777227777777277f77777777f77277777777777777777bbbbbbbfffffffffff2222bbbbbbb77777777777777777
        77777777777777777777777777f7777777777777777777777777777f7777777777777777727777777277f77777777f77277777777777777777bbbbbbbffffffffff22222bbbbbbb77777777777777777
        77777777777777777777777777f7777777777777777777777777777f777777777777777772777777727f777777777f7277777777777777bbbbbbb222bfffffffff22222bbbbbbbb77777777777777777
        777777777777777777777777777f77777777777777777777777777f7777777777777777772777777727f777777777f7277777777777777bbbbb22222222ffffff22222bbbbbbbbbbbb77777777777777
        777777777777777777777777777f7777777777777777777777777f77777777777777777772777777277f777777777f72777777777777bbbbbb222222222222ff222222bbbbbbbbbbbb77777777777777
        7777777777777777777777777777f77777777777777777777777ff7777777777777777777f277777277f7777777777f2277777777777bbbbb222bbbb22222222222222bbbbb77bbbbb77777777777777
        7777777777777777777777777777ff7777777777777777777777f77777777777777777777f27777727f77777777777ff227777777777bbbb2222bbbb22222222222222bbb2227bbbbb77777777777777
        77777777777777777777777777777ff77777777777777777777f777777777777777777777f27777727f777777777777f722777777777bbb2222bbbbbbbb2222222222bbbb2227bbbbb77777777777777
        777777777777777777777777777777ff777777777777777777ff777777777777777777777f27777727f7777777777777ff7227777777bb22222bbbbbbbbbb222bbbbbbbbb22277777777777777777777
        7777777777777777777777777777777ff7777777777777777ff7777777777777777ff7777722777727f77777777777777f7722777777772222bbbbbbbbbbb22bbbbbbbbb222fffff7777777777777777
        777777777777777777777777777777777ff777777777777ff777777777777777777f777777f2777727f777777777777777f77722777777222bbbbbbbbbbbb22bbbbbbbbb222fffff7777777777777777
        7777777777777777777777777777777777fff77777777fff7777777777777777777f777777f2777727f7777777777777777f77727777772222bbbbbbbbbbb22bbbbbbbb2222ffffff777777777777777
        777777777777777777777777777777777777ff77777fff7777777777777777777ff7777777f277772f77777777777777777f7777277777fff2bbbbbbbbbbb22bbbbbbbb2222fffffff77777777777777
        77777777777777777777777777777777777777ff77ff77777777777777777777f777777777f277727f777777777777777777f777277777fff222bbbbbbbbb22bbbbbbb2222277ffffff7777777777777
        777777777777777777777777777777777777777ff7f7777777777777777777ff7777777777f277727f777777777777777777f777277777fff22222bbbbbbb222bbbbb2222227777fffff777777777777
        77777777777777777777fffffff7777777777777ff777777777777777777ff777777777777f72772f7777777777777777777f77727777ffff2bbb222bbb22222bbbbb2222227777fffff777777777777
        77777777777777777777f77777777777777777777f777777777777777fff777777777777777f2772f7777777777777777777f77727777ffff2bbbb2222bbbbb222222bbbb2277777fffff77777777777
        77777777777777777777f77777777777777777777f7777777777777ff777777777777777777f2772f7777777777777777777f2222777fffff2bbbbb2222bbbbbbb22bbbbb77777777ffff77777777777
        77777777777777777777f77777777777777777777f77777777777ff777777777777777777777f272f777777777777777722222777777ffff22bbbbbb22bbbbbbbbbbbbbb777777777fffff7777777777
        777777777777777777777f7777777777777777777f777777777ff77777777777777777777777f2727777777777772222277ff777777fffff777bbbbbbbbbbbbbbbbbbbbb7777777777fffff777777777
        7777777777777777777777f777777777777777777f777777fff77777777777777777777777777222777777722222277777ff7777777ffff77777bbbbbbbbbbbbbbbbbbb777777777777ffff777777777
        77777777777777777777777ff7777777777777777f7777ff77777777777777777777777777777f2f77777772f7777777ff77777777ffff7777777bbbbbbbbbbbbbbbbb7777777777777fffff77777777
        777777777777777777777777fff77777777777777f77ff7777777777777777777777777777777f2777777777ffffffff777777777fffff77777777bbbbbbbbbbbbbbbb77777777777777fffff7777777
        777777777777777777777777777fff77777777777f7f777777777777777777777777777777777f277777777777777777777777777fffff7777777777bbbbbbbbbbbbb777777777777777fffff7777777
        77777777777777777777777777777fffffffffffffff7777777777777777777777777777777777f7777777777777777777777ffffffff77777777777bbbbbbbbbbbbb7777777777777777ffff7777777
        77777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777777777777777ffffffff7777777777777bbbbbbbbbbbb77777777777777777fff7777777
        77777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777fffffff777777777777777bbbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777ffff777777777777777777bbbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbb77777777777777777777777777777
        77777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb77777777777777777777777777777
        77777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbb77777777777777777777777777777
        77777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777777777777777777777777222222277777777777777777777777777777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
}
function begin_convo_w_greg () {
    tutorialGreg.sayText("Hello " + playerName, 1000, false)
    pause(2000)
    tutorialGreg.sayText("You're choices matter, 1 is yes, 2 is no unless specified", 5000, false)
    pause(6000)
}
// Loss condition
info.onLifeZero(function () {
    game.gameOver(false)
})
function set_players () {
    The_Rizzard = sprites.create(img`
        . . . . . 1 8 8 8 8 8 . . . . . 
        . . . . 1 1 1 1 8 . . . . . . . 
        . . . . f d f 1 8 . . . . . . . 
        . . . d d d d d 8 . . . . . . . 
        . . . 1 1 1 1 8 8 . . . . . . . 
        . . . 1 1 1 1 8 8 . . . . . . . 
        . . . . 1 1 8 8 8 . . . . . . . 
        . . . . . 8 8 8 5 8 . . . . . . 
        . . . 8 8 8 5 8 8 8 8 8 . . e . 
        . . 8 8 8 8 8 5 5 8 8 8 . e e . 
        . 8 8 8 5 8 8 8 8 8 8 8 . e . . 
        . d d . 8 8 5 8 8 8 . d e . . . 
        . d d . 8 8 8 8 8 8 . d d . . . 
        . . . . 8 5 8 5 8 8 8 . . . . . 
        . . . . 5 8 8 8 8 8 5 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        `, SpriteKind.Wizard)
    The_Rizzard.sayText("You ready for a challenge?")
    pause(3000)
    playerModelTwo.setPosition(34, 87)
    The_Rizzard.setPosition(147, 86)
    ready = game.askForNumber("Ready?", 1)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.value = 800
    statusbar.setLabel("HP")
    statusbar.setColor(7, 2, 3)
    statusbar.attachToSprite(The_Rizzard)
}
function wizard_boolean () {
    if (ready == 1) {
        The_Rizzard.sayText("I am the great wizard ohio")
        pause(2000)
        The_Rizzard.sayText("face my wrath")
        pause(2000)
        The_Rizzard = sprites.create(img`
            . . . . . 1 8 8 8 8 8 . . . . . 
            . . . . 1 1 1 1 8 . . . . . . . 
            . . . . f d f 1 8 . . . . . . . 
            . . . d d d d d 8 . . . . . . . 
            . . . 1 1 1 1 8 8 . . . . . . . 
            . . . 1 1 1 1 8 8 . . . . . . . 
            . . . . 1 1 8 8 8 . . . . . . . 
            . . . . . 8 8 8 5 8 . . . . . . 
            . . . 8 8 8 5 8 8 8 8 8 . . e . 
            . . 8 8 8 8 8 5 5 8 8 8 . e e . 
            . 8 8 8 5 8 8 8 8 8 8 8 . e . . 
            . d d . 8 8 5 8 8 8 . d e . . . 
            . d d . 8 8 8 8 8 8 . d d . . . 
            . . . . 8 5 8 5 8 8 8 . . . . . 
            . . . . 5 8 8 8 8 8 5 8 8 . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
            `, SpriteKind.Wizard)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888bbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbb8fff88888888888888888888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb8fffff8fffffffff8888888bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbb88fffffffffffffff8888888bbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbb88fffffffffffffff888888bbbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbb8888fffffff88888888888bbbbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbddddfffdd88888888888bbbbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbddddddddddddd88888888bbbbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbdfffdddfffdddd8888888bbbbbbbbb888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb8888bbbbbbbbbbbbbbbbbbbdfffdddfffdddd8888888bbbbbbbb8888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bfbbbbbbbbb88888bbbbbbbbbbbbbbbbbbdfffdddfffddddd888888bbbbbbbb8888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22fbbbbbbbbbb8888bbbbbbbbbbbbbbbbbbddddddddddddddd888888bbbbbbbb8888bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbb2bfbbbbbbbbbbb8888bbbbbbbbbbbbbbbbbdddddddddddddddd88888bbbbbbb8888bbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbb2fbbbbbbbbbbbb88888bbbbbbbbbbbbbb111ddddddddddddddd88888bbbbbbb8888bbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbb2bbbbbbbbb2bfbbbbbbbbbbbbb88888bbbbbbbbbbbbb1111dddddddddddddd88888bbbbbb8888bbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbb2bbbbbbbbb2bfbbbbbbbbbbbbb888888bbbbbbbbbbbb11111dddddddddddddd8888bbbbb88888bbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbb2bbbbbbbbb2bfbbbbbbbbbbbbbb888888bbbbbbbbbbbb1111dddddddddddddd8888bbbbb8888bbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbb2bbbbbbbbb2bfbbbbbbbbbbbbbbb8888888bbbbbbbbbb1111111111111111118888bbbb88888bbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbb2bbbbbbbbb2fbbbbbbbbbfbbbbbbb8888888bbbbbbbbbb1111111111111111188888bbb8888bbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbffbbbbbbb2bbbbbbbb2bfbbbbbbbbbfbbbbbbbb88888888bbbbbbbbb111111111111111188888b888888bbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbfbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbb2bbbbbbbb2bfbbbbbbbbffb22bbbbbbb888888888bbb888111111111111111188888888888bbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbf2bbbbbbb2bfbbbbbbbbfb22bbbbbbbbbb888888888888881111111111111118888888888bbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffbbbbbbfffbbbbbbbbbbbbbbbfbbbbbbbbb2bbbbbbb2fbbbbbbbbb22bbbbbbbbbbbbbb888888888888811111111111111188888888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffbfffffbbbbbbbbbbbbbbbbffbbbbbbbbb2bbbbbb2bfbbbbbbbb22bbbbbbbbbbbbbbbbbb8888888888111111111111118888888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbb2bbbbbb2bfbbbbbbbb2bbbbbbbbbbbbbbbbbbbbb888888888811111111888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbb2bbbbbb2bfbbbbbbbb2bbbbbbbbbbbbbbbbbbbbbb88888888888111115888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbb2bbbbb2bfbbbbbbbb22bbbbbbbbbbbbbbbbbbbbb88888888888888555888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbb2bbbbb2fbbbbbbbbbf2bbbbbbbbbbbbbbbbbbbbb88888888888888555888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbfbbbbbbbbbbbbbbffbbbbbbbbbbbbbbb2bbbbb2fbbbbbbbbbfb2bbbbbbbbbbbbbbbbbbbb88888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbfbbbbbbbbbbbbffbbbbbbbbbbbbbbbbb2bbbb2bfbbbbbbbbbbf2bbbbbbbbbbbbbbbbbbb888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbbbbbbbbbfffbbbbbbbbbbbbbbbbbbb2fbbb2bfbbbbbbbbbbbf22bbbbbbbbbbbbbbbbb8888555888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbffffffffbbbbbbbbbbbbbbbbbbbbbb2fbbb2fbbbbbbbbbbbbbf2bbbbbbbbbbbbbbbbb8888555888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2fbbb2fbbbbbbbbbbbbbbf22bbbbbbbbbbbbbbb8888555888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbb2fbbbbbbbbbbbbbbbf2bbbbbbbbbbbbbbb8888888888555888888888888888bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbb2fbbbbbbbbbbbbbbbf22bbbbbbbbbbbbbb88888888885558888888555555888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2fbb2fbbbbbbbbbbbbbbbbf2bbbbbbbbbbbbb888555888885558888888555555888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2fb2fbbbbbbbbbbbbbbbbbfb2bbbbbbbbbbbb888555888885558888888555555888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bf2fbbbbbbbbbbbbbbbbbfb2bbbbbbbbbbbb888555888885558888888888888888bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2f2fbbbbbbbbbbbbbbbbfbb2bbbbbbbbbbbb8888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2f2fbbbbbbbbb2bbbbbfbbb2bbbbbbbbbbbb8888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2ffbbbbbbffbb2bbbfbbbb2bbbbbbbbbbb88888855588888888888888888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfb2222fbbbbbbbbbbbbbbbb88888855585558888855588888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff22222bbbbbbbbbbbbb88888855585558888855588888888888bbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb885558888855588888555888855588888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb885558888855588888888888855588888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb885558888855588888888888855588888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888bbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888bbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888bbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888888888888888fffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff888fffffffffffffffffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffff888fffffffffffffffffffffffffffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else {
        game.splash("No? :(")
        pause(2000)
        Too_bad = game.askForNumber("Too bad. 1: What!?! 2: Nooo")
        if (Too_bad == 1) {
            game.splash("Too bad.")
            The_Rizzard = sprites.create(img`
                ..........11188888888888........
                ..........11188888888888........
                ........21111122188.............
                ........12111221188.............
                ........f22d22f1188.............
                ........ff222ff1188.............
                ......ddddd2ddddd88.............
                ......ddddddddddd88.............
                ......ddddddddd8888.............
                .....ddddffffdd8888.............
                ....ddddffddfdd8888.............
                ....ddddfdddfdd8888.............
                ........ddddfd88888.............
                .........ddddd88888.............
                ..........88d88885588...........
                .....55555888888855ddd..........
                .....55ddd8885588888ddd.......ee
                .....5ddd88885588888ddd5......ee
                .....5ddd88888855558d555d...eeee
                ....5555d88888855558555d55..eeee
                ...5d55dd58888888888dd55d55.ee..
                ...5dd5d5588888888888dd5dd..ee..
                ..d5dd5.8888855888888.dd5dee....
                .555dd5.8888855888888...55ee....
                .5dddd5.8888888888888...d5dd....
                .ddddd..8888888888888...dddd....
                .d..ddd.8855588558888888........
                .d.dd.d.8855588558888888........
                ........55888888888885558888....
                ........55888888888885558888....
                ......888888888888888888888888..
                ......888888888888888888888888..
                `, SpriteKind.Wizard)
            pause(2000)
        } else {
            game.splash("Too bad.")
            The_Rizzard = sprites.create(img`
                ..........11188888888888........
                ..........11188888888888........
                ........21111122188.............
                ........12111221188.............
                ........f22d22f1188.............
                ........ff222ff1188.............
                ......ddddd2ddddd88.............
                ......ddddddddddd88.............
                ......ddddddddd8888.............
                .....ddddffffdd8888.............
                ....ddddffddfdd8888.............
                ....ddddfdddfdd8888.............
                ........ddddfd88888.............
                .........ddddd88888.............
                ..........88d88885588...........
                .....55555888888855ddd..........
                .....55ddd8885588888ddd.......ee
                .....5ddd88885588888ddd5......ee
                .....5ddd88888855558d555d...eeee
                ....5555d88888855558555d55..eeee
                ...5d55dd58888888888dd55d55.ee..
                ...5dd5d5588888888888dd5dd..ee..
                ..d5dd5.8888855888888.dd5dee....
                .555dd5.8888855888888...55ee....
                .5dddd5.8888888888888...d5dd....
                .ddddd..8888888888888...dddd....
                .d..ddd.8855588558888888........
                .d.dd.d.8855588558888888........
                ........55888888888885558888....
                ........55888888888885558888....
                ......888888888888888888888888..
                ......888888888888888888888888..
                `, SpriteKind.Wizard)
            pause(2000)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    background_wizard()
    set_players()
})
let Too_bad = 0
let ready = 0
let The_Rizzard: Sprite = null
let player1_v2: Sprite = null
let playerName = ""
let projectile2: Sprite = null
let projectile: Sprite = null
let playerModelTwo: Sprite = null
let yes = false
let choice = 0
let statusbar: StatusBarSprite = null
let gregConvo = false
let tutorialGreg: Sprite = null
save_name(game.askForString("what is your name"))
let player1 = sprites.create(img`
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
tutorialGreg = sprites.create(img`
    . . . . . . . . . . . . 1 1 1 1 
    . . . . . . . . . . . 1 1 f 1 1 
    . . . . . b b b b b . 1 1 f 1 1 
    . . . . . b 5 f 5 b . 1 1 1 1 1 
    . . . . . b b f b b 1 . 1 f 1 1 
    . . . . . b f f f b . . 1 1 1 1 
    . . . b b b f f f b b b . . . . 
    . . . f b b 2 b 2 b b f . . . . 
    . . f . 2 2 b b b 2 2 . f . . . 
    b b . . . b b b b b . . . b b . 
    b b . . . b b b b b . . . b b . 
    . . . . . 2 b b b 2 . . . . . . 
    . . . . b . 2 2 2 . b . . . . . 
    . . . . b b . . . b b . . . . . 
    . . . . . b . . . b . . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.greg)
tutorialGreg.setPosition(64, 19)
gregConvo = true
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 42, 42)
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(5)
