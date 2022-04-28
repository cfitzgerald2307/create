controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`autumn0`)
    generate()
    for (let index = 0; index <= 8; index++) {
        mySprite = sprites.create(board[index], SpriteKind.Projectile)
        mySprite.setPosition(xpositions[index], ypositions[index])
    }
    for (let index = 0; index <= 8; index++) {
        mySprite = sprites.create(numbers[index], SpriteKind.Projectile)
        mySprite.setPosition(xpositions[index], ypositions[index])
    }
    pause(5000)
    qorder = []
    for (let index = 0; index <= 8; index++) {
        qorder.push(numList.removeAt(randint(0, numList.length)))
    }
})
function generate () {
    board = []
    for (let index = 0; index < 9; index++) {
        board.push(colors._pickRandom())
    }
}
let qorder: number[] = []
let board: Image[] = []
let mySprite: Sprite = null
let xpositions: number[] = []
let ypositions: number[] = []
let numbers: Image[] = []
let numList: number[] = []
let colors: Image[] = []
colors = [assets.image`myImage6`, assets.image`myImage7`, assets.image`myImage8`]
numList = [
0,
1,
2,
3,
4,
5,
6,
7,
8
]
numbers = [
assets.image`myImage9`,
assets.image`myImage10`,
assets.image`myImage11`,
assets.image`myImage12`,
assets.image`myImage13`,
assets.image`myImage14`,
assets.image`myImage15`,
assets.image`myImage16`,
assets.image`myImage17`
]
ypositions = [
25,
25,
25,
50,
50,
50,
75,
75,
75
]
xpositions = [
25,
50,
75,
25,
50,
75,
25,
50,
75
]
scene.setBackgroundImage(assets.image`autumn`)
