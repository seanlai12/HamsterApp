enchant();

var ShopButton = Class.create(Sprite, {
    initialize: function() {
        Sprite.apply(this,[98, 52]);
        this.image = Game.instance.assets['res/shop_button.png'];
        this.addEventListener(Event.TOUCH_START, this.update);
    },

    update: function() {
        game = Game.instance;
        var shopScreen = new ShopScreen();
        game.pushScene(shopScreen);
    }
});

var ShopScreen = Class.create(Scene, {
    initialize: function() {
        Scene.apply(this);
        game = Game.instance;
        shopMenuScene = new Sprite(400, 440);
        shopMenuScene.image = game.assets['res/shop_menu.png'];
        this.addChild(shopMenuScene);

        this.addEventListener(Event.TOUCH_START, this.closeScene);
    },

    closeScene: function(evt) {
        if (evt.y > (440)) {
            game = Game.instance;
            game.popScene();
        }
    }
});
