enchant();
 
window.onload = function() {
    var game = new Game(400, 640);
    game.preload('res/loadingscreen.png',
                 'res/bg.png',
                 'res/hamstar.png',
                 'res/items_button.png',
                 'res/items_menu.png',
                 'res/shop_button.png',
                 'res/shop_menu.png',
                 'res/monsters_button.png',
                 'res/monsters_menu.png',
                 'res/settings_button.png',
                 'res/settings_menu.png');
    game.fps = 30;
    game.scale = 1;
    game.onload = function() {
        var mainScreen = new MainScreen();
        var loadingScreen = new LoadingScreen();
        game.pushScene(mainScreen);
        game.pushScene(loadingScreen);
    }
    game.start();

    var LoadingScreen = Class.create(Scene, {
        initialize: function() {
            Scene.apply(this);
            game = Game.instance;

            label = new Label('Loading Game');
            label.x = game.width/2 - label.width/2;
            label.y = game.height/2 - label.height/2;
            label.color = 'white';
            label.font = '32px strong';
            label.textAlign = 'center';
            label._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            this.scoreLabel = label;

            bg = new Sprite(400,640);
            bg.image = game.assets['res/loadingscreen.png'];

            this.addEventListener(Event.TOUCH_START, this.startGame);

            this.addChild(bg);
            this.addChild(label);
        },

        startGame: function(evt)
        {
            game = Game.instance;
            game.popScene();
        }
    });

    var MainScreen = Class.create(Scene, {
        initialize: function()
        {
            var item_button;

            Scene.apply(this);
            game = Game.instance;

            gameScene = new Sprite(400,640);
            gameScene.image = game.assets['res/bg.png'];

            item_button = new ItemButton();
            item_button.x = 0;
            item_button.y = 580;
            shop_button = new ShopButton();
            shop_button.x = game.width - (game.width/4 * 3);
            shop_button.y = 580;
            monster_button = new MonsterButton();
            monster_button.x = game.width - (game.width/4 * 2);
            monster_button.y = 580;
            settings_button = new SettingsButton();
            settings_button.x = game.width - (game.width/4 * 1);
            settings_button.y = 580;

            this.item_button = item_button;

            this.addChild(gameScene);
            this.addChild(item_button);
            this.addChild(shop_button);
            this.addChild(monster_button);
            this.addChild(settings_button);
        }
    });

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
};
