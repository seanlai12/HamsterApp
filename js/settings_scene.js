enchant();

var SettingsButton = Class.create(Sprite, {
    initialize: function() {
        Sprite.apply(this,[98, 52]);
        this.image = Game.instance.assets['res/settings_button.png'];
        this.addEventListener(Event.TOUCH_START, this.update);
    },

    update: function() {
        game = Game.instance;
        var settingsScreen = new SettingsScreen();
        game.pushScene(settingsScreen);
    }
});

var SettingsScreen = Class.create(Scene, {
    initialize: function() {
        Scene.apply(this);
        game = Game.instance;
        settingsMenuScene = new Sprite(400, 440);
        settingsMenuScene.image = game.assets['res/settings_menu.png'];
        this.addChild(settingsMenuScene);

        this.addEventListener(Event.TOUCH_START, this.closeScene);
    },

    closeScene: function(evt) {
        if (evt.y > (440)) {
            game = Game.instance;
            game.popScene();
        }
    }
});
