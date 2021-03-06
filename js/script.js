new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameState: false,
        turns: []
    },
    methods: {
        start: function(){
            this.gameState= true;
            this.monsterHealth= 100;
            this.playerHealth = 100;
            this.turns = [];

        },
        attack: function(){
            var damage = this.damageDealt(3,10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for '+ damage
            })

            if(this.checkWin()){
                return;
            }
           
            this.monsterAttacks();
        },
        special_attack: function(){
            var damage = this.damageDealt(10,20)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for '+ damage
            })

            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
           
            
        },
        heal: function(){
            if(this.playerHealth<=90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10 '
            })
            this.monsterAttacks();
        },
        give_up: function(){
            this.gameState = false;
        },
        monsterAttacks: function(){
            damage = this.damageDealt(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for '+ damage
            })

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