

var Monster = Class.create(Sprite, {
    initialize: function(monsterName) {
        var monsterImageFilepath = 'res/' + monsterName + '.png', goingUp;
        Sprite.apply(this,[110, 145]);
        this.image = Game.instance.assets[monsterImageFilepath];
        this.addEventListener(Event.ENTER_FRAME, this.update);
        this.addEventListener(Event.TOUCH_START, this.reactToTouch);
        this.timer = 0;
        this.goingUp = true;
        this.handling = false;
        this.randX = 0;
        this.randY = 0;
        this.speed = 1;
    },

    update: function(evt)
    {

        var game;
        game = Game.instance;

        this.timer += evt.elapsed * 0.001;

        if(this.timer >= 1 && !this.handling)
        {
            this.handling = true;
            this.randX = Math.random() * (400 - 0) + 0;
            this.randY = Math.random() * (640 - 0) + 0;
            this.move(Math.ceil(this.randX),Math.ceil(this.randY));
        }


    },

    move: function(xvalue, yvalue)
    {
        while(this.x != xvalue && this.y != yvalue)
        {
            //this.x -= this.speed;
            //this.y += this.speed;
            this.x = xvalue;
            this.y = yvalue;
        }
        this.handling = false;
        this.timer = 0;
          
    },  

    reactToTouch: function() {
        alert("Stop poking me");
    }




});