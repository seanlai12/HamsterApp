

var Monster = Class.create(Sprite, {
    initialize: function(monsterName) {
        var monsterImageFilepath = 'res/' + monsterName + '.png', goingUp;
        Sprite.apply(this,[110, 145]);
        this.image = Game.instance.assets[monsterImageFilepath];
        this.addEventListener(Event.ENTER_FRAME, this.update);
        this.addEventListener(Event.TOUCH_START, this.reactToTouch);

        this.goingUp = true;
    },

    update: function(evt)
    {
        var ySpeed, game;
        game = Game.instance;
        ySpeed = 100;

        if (this.y <= 100)
        {
            this.goingUp = false;
        }
        else if (this.y >= game.height-100)
        {
            this.goingUp = true;
        }

        if (this.goingUp)
        {
            this.y -= 15;
        }
        else
        {
            this.y += 15;
        }
    },

    reactToTouch: function() {
        alert("Stop poking me");
    }




});