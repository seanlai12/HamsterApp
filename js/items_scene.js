enchant();

var ItemButton = Class.create(Sprite, {
    initialize: function() {
        Sprite.apply(this,[98, 52]);
        this.image = Game.instance.assets['res/items_button.png'];
        this.addEventListener(Event.TOUCH_START, this.update);
    },

    update: function() {
        game = Game.instance;
        var itemScreen = new ItemScreen();
        game.pushScene(itemScreen);
    }
});

var ItemScreen = Class.create(Scene, {
    initialize: function() {
        Scene.apply(this);
        game = Game.instance;
        itemsMenuScene = new Sprite(400, 440);
        itemsMenuScene.image = game.assets['res/items_menu.png'];
        this.addChild(itemsMenuScene);

        this.addEventListener(Event.TOUCH_START, this.closeScene);
    },

    closeScene: function(evt) {
        if (evt.y > (440)) {
            game = Game.instance;
            game.popScene();
        }
    }
});
