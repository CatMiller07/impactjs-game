ig.module(
'game.entities.player'
)
.requires(
'impact.entity'
)
.defines(function() {
    EntityPlayer = ig.Entity.extend({

            size: {x:16, y: 16},
            flip: false,
            gravityFactor: 1,
            maxVel: {x: 100,y: 150},
            friction: {x: 300,y: 0},
            animSheet: new ig.AnimationSheet('media/player.png', 16, 16),
            speed: 150,
            jump_speed: -200,
          
            init: function(x,y,settings) {
                this.parent(x, y, settings);
                this.addAnim('idle',1,[4]);
                
            },
           update: function(){
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
