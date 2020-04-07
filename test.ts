namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
function test1() {
    const status = statusbars.createSprite(50, 3, 50, StatusBarKind.Health)
    statusbars.setColor(status, 0x7, 0x5)
    // statusbars.setFlag(status, StatusBarFlag.InvertFillDirection, true);
    // statusbars.setFlag(status, StatusBarFlag.SmoothTransition, false);
    // statusbars.setFlag(status, StatusBarFlag.LabelAtEnd, true);

    statusbars.setValue(status, 40);

    statusbars.setLabel(status, "HP", 0x7);

    statusbars.setBarBorder(status, 1, 0xb);
    status.top = 5;
    status.left = 5;


    const player = sprites.create(img`
        . . . . . . f f f f . . . . . .
        . . . . f f f 2 2 f f f . . . .
        . . . f f f 2 2 2 2 f f f . . .
        . . f f f e e e e e e f f f . .
        . . f f e 2 2 2 2 2 2 e e f . .
        . . f e 2 f f f f f f 2 e f . .
        . . f f f f e e e e f f f f . .
        . f f e f b f 4 4 f b f e f f .
        . f e e 4 1 f d d f 1 4 e e f .
        . . f e e d d d d d d e e f . .
        . . . f e e 4 4 4 4 e e f . . .
        . . e 4 f 2 2 2 2 2 2 f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
    `)

    const sb2 = statusbars.createSprite(4, 20, 40, StatusBarKind.Health);
    statusbars.setBarBorder(sb2, 1, 0xb);
    statusbars.attachStatusBarToSprite(sb2, player, -4, - (image.font5.charHeight / 2))
    controller.moveSprite(player)
    statusbars.setLabel(sb2, "HP", 0x7);

    let curr = 40;
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        curr -= 5;
        statusbars.setValue(sb2, curr)
    })

    scene.setBackgroundColor(0x1)
}

function testIcon() {
    tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
            `,
            [myTiles.tile0,sprites.castle.tileGrass3],
            TileScale.Sixteen
        ))

    const player = sprites.create(img`
        . . . . . . . f f . . . . . . . . . . .
        . . . . f f f f 2 f f . . . . . . . . .
        . . f f e e e e f 2 f f . . . . . . . .
        . f f e e e e e f 2 2 f f . . . . . . .
        . f e e e e f f e e e e f . . . . . . .
        . f f f f f e e 2 2 2 2 e f . . . . . .
        f f f e 2 2 2 f f f f e 2 f . . . . . .
        f f f f f f f f e e e f f f . . . . . .
        f e f e 4 4 e b f 4 4 e e f . . . . . .
        . f e e 4 d 4 b f d d e f . . . . . . .
        . . f e e e 4 d d d e e . c . . . . . .
        . . . f 2 2 2 2 e e d d e c c c c c c c
        . . . f 4 4 4 e 4 4 d d e c d d d d d .
        . . . f f f f f e e e e . c c c c c . .
        . . f f f f f f f f . . . c . . . . . .
        . . f f f . . f f . . . . . . . . . . .
    `)
    player.x -= 16;

    const enemy = sprites.create(img`
        . . . . f f f f f . . . . . .
        . . f f 1 1 1 1 b f f . . . .
        . f b 1 1 1 1 1 1 1 b f . . .
        . f 1 1 1 1 1 1 1 1 1 f . . .
        f d 1 1 1 1 1 1 1 f f f f . .
        f d 1 1 1 d d 1 c 1 1 1 b f .
        f b 1 1 f c d f 1 b 1 b f f .
        f 1 1 1 1 1 b f b f b f f . .
        f 1 b 1 b d f c f f f f . . .
        f b f b f c f c c c f . . . .
        f f f f f f f f f f . . . . .
        . . . f f f f f f . . . . . .
        . . . f f f f f f . . . . . .
        . . . f f f f f f f . . f . .
        . . . . f f f f f f f f f . .
        . . . . . f f f f f f f . . .
    `);
    const enemySb = statusbars.createSprite(20, 4, 40, StatusBarKind.EnemyHealth);
    statusbars.setBarBorder(enemySb, 1, 0xc);
    statusbars.attachStatusBarToSprite(enemySb, enemy, 3);
    statusbars.setValue(enemySb, 10)

    const health = statusbars.createSprite(5, 40, 100, StatusBarKind.Health);
    const magic = statusbars.createSprite(40, 5, 100, StatusBarKind.Magic);
    statusbars.setBarBorder(health, 1, 0xc);
    statusbars.setBarBorder(magic, 1, 0xb);
    health.x = player.left - 7;
    health.y -= 3;
    statusbars.setValue(health, 75)
    magic.bottom = health.bottom;
    magic.left = health.right + 1;
    statusbars.setValue(magic, 30)
}

testIcon()