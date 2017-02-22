enchant();
 
window.onload = function() {
    var game = new Game(400, 640);
    game.preload('res/loadingscreen.png',
                 'res/bg.png',
                 'res/hamstar.png',
                 'res/itemmenu.png',
                 'res/settingsmenu.png',
                 'res/shopmenu.png',
                 'res/monstermenu.png',
                 'res/items_button.png',
                 'res/shop_button.png',
                 'res/list_button.png',
                 'res/settings_button.png');
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
            item_button.y = 540;
            shop_button = new ShopButton();
            shop_button.x = game.width - (game.width/4 * 3);
            shop_button.y = 540;
            monster_button = new MonsterButton();
            monster_button.x = game.width - (game.width/4 * 2);
            monster_button.y = 540;
            settings_button = new SettingsButton();
            settings_button.x = game.width - (game.width/4 * 1);
            settings_button.y = 540;


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
            itemMenuScene = new Sprite(400, 440);
            itemMenuScene.image = game.assets['res/itemmenu.png'];
            this.addChild(itemMenuScene);

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
            var itemScreen = new ItemScreen();
            game.pushScene(itemScreen);
        }
    });

    var ShopScreen = Class.create(Scene, {
        initialize: function() {
            Scene.apply(this);
            game = Game.instance;
            itemMenuScene = new Sprite(400, 440);
            itemMenuScene.image = game.assets['res/shopmenu.png'];
            this.addChild(itemMenuScene);

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
            this.image = Game.instance.assets['res/monster_button.png'];
            this.addEventListener(Event.TOUCH_START, this.update);
        },

        update: function() {
            game = Game.instance;
            var itemScreen = new ItemScreen();
            game.pushScene(itemScreen);
        }
    });

    var MonsterScreen = Class.create(Scene, {
        initialize: function() {
            Scene.apply(this);
            game = Game.instance;
            itemMenuScene = new Sprite(400, 440);
            itemMenuScene.image = game.assets['res/monstermenu.png'];
            this.addChild(itemMenuScene);

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
            var itemScreen = new ItemScreen();
            game.pushScene(itemScreen);
        }
    });

    var SettingsScreen = Class.create(Scene, {
        initialize: function() {
            Scene.apply(this);
            game = Game.instance;
            itemMenuScene = new Sprite(400, 440);
            itemMenuScene.image = game.assets['res/settingsmenu.png'];
            this.addChild(itemMenuScene);

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
