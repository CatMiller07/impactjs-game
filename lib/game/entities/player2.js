ig.module(
'game.entities.player2'
)
.requires(
'impact.entity'
)
.defines(function() {
      EntityPlayer2 = ig.Entity.extend({

        size: {x:16, y: 16},
        flip: false,
        gravityFactor: 1,
        maxVel: {x: 100,y: 150},
         speed: 150,
         jump_speed: -200,
        friction: {x: 600,y: 0},
        animSheet: new ig.AnimationSheet('media/sm-egg.png', 16, 16),

        init: function(x,y,settings) {
           this.parent(x, y, settings);
           this.addAnim('idle',1,[2]);

        } ,
        update: function() {
            this.parent();
            if(ig.input.state("left")){
                this.accel.x = -this.speed;
            } else if(ig.input.state("right")){
                this.accel.x = this.speed;
            }else{
                this.accel.x = 0;
            }

            if(ig.input.pressed("jump") && this.standing){
                this.vel.y = this.jump_speed;
            }
       }                               
     });
});