
var StatusBar = Class.create(Bar, {
    initialize: function(barType) {
        Bar.apply(this,[30,490]);

        this.image = Game.instance.assets['res/' + barType + '.png'];
        
        this.maxvalue = 150;
        this.value = 150;

        this.addEventListener(Event.ENTER_FRAME, this.update);
    },

    update: function(evt)
    {
        this.value -= .01;
    }

});
