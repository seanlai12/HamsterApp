enchant();

var MonsterButton = Class.create(Sprite, {
    initialize: function() {
        Sprite.apply(this,[98, 52]);
        this.image = Game.instance.assets['res/monsters_button.png'];
        this.addEventListener(Event.TOUCH_START, this.update);
    },

    update: function() {
        game = Game.instance;
        var monsterScreen = new MonsterScreen();
        game.pushScene(monsterScreen);
    }
});

var MonsterScreen = Class.create(Scene, {
    initialize: function() {
        Scene.apply(this);
        game = Game.instance;
        monstersMenuScene = new Sprite(400, 440);
        monstersMenuScene.image = game.assets['res/monsters_menu.png'];
        this.addChild(monstersMenuScene);

        this.addEventListener(Event.TOUCH_START, this.closeScene);
    },

    closeScene: function(evt) {
        if (evt.y > (440)) {
            game = Game.instance;
            game.popScene();
        }
    }
});
