new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameState: false
    },
    methods: {
        start: function(){
            this.gameState= true;
            this.monsterHealth= 100;
            this.playerHealth = 100;

        },
        attack: function(){
            var damage = this.damageDealt(3,10)
            this.monsterHealth -= damage;

            if(this.checkWin()){
                return;
            }
           
            this.monsterAttacks();
        },
        special_attack: function(){
            var damage = this.damageDealt(10,20)
            this.monsterHealth -= damage;

            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
           
            
        },
        heal: function(){

        },
        give_up: function(){

        },
        monsterAttacks: function(){
            damage = this.damageDealt(5,12);
            this.playerHealth -= damage;
            this.checkWin();
        },
        damageDealt: function(min,max){
            return Math.max(Math.floor(Math.random() * max) + 1 , min);
        },
        checkWin: function(){
            if(this.monsterHealth<=0){
                if(confirm('You won! Play again? ')){
                    this.start();
                }else{
                    this.gameState = false;
                }
                return true;
            }else if(this.playerHealth<=0){
                if(confirm('You lost! Play again? ')){
                    this.start();
                }else{
                    this.gameState = false;
                }
            }
            return false;
        }
    }
})