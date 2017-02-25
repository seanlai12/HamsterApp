

var Monster = Class.create(Sprite, {
    initialize: function(monsterName) {
        var monsterImageFilepath = 'res/' + monsterName + '.png', goingUp;
        Sprite.apply(this,[110, 145]);
        this.image = Game.instance.assets[monsterImageFilepath];
        this.addEventListener(Event.ENTER_FRAME, this.update);
        this.addEventListener(Event.TOUCH_START, this.reactToTouch);

        this.goingUp = true;
        this.roamingTimer = 0;
        this.restingTimer = 2;
        game = Game.instance;
        this.roamingDestX = Math.random()*game.width;
        this.roamingDestY = Math.random()*(game.height-100);
        this.speed = 2;
    },

    update: function(evt)
    {
        this.roamingTimer += evt.elapsed * 0.001;
        this.restingTimer -= evt.elapsed * 0.001;

        if (this.x == this.roamingDestX && this.y == this.roamingDestY)
        {
            //set destination
            //TODO: Fix roaming destinations to within the floor of scene
            game = Game.instance;
            this.roamingDestX = Math.random()*(game.width-this.width) + this.width/2;
            this.roamingDestY = Math.random()*(game.height-330) + this.height/2;

            //Rest up to 5 seconds
            this.restingTimer = Math.random()*5;
        }

        //TODO: Fix the movement below so it doesn't always traverse in a line
        if (this.restingTimer <= 0)
        {
            if (this.x != this.roamingDestX)
            {
                if (this.x < this.roamingDestX)
                {
                    this.x += Math.min(this.roamingDestX - this.x, this.speed);
                }
                else
                {
                    this.x -= Math.min(this.x - this.roamingDestX, this.speed);
                }
            }
            if (this.y != this.roamingDestY)
            {
                if (this.y < this.roamingDestY)
                {
                    this.y += Math.min(this.roamingDestY - this.y, this.speed);
                }
                else
                {
                    this.y -= Math.min(this.y - this.roamingDestY, this.speed);
                }
            }
        }
        
    },

    reactToTouch: function() {
        alert("Stop poking me!");
    }




});