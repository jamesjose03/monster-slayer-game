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
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1 , min);
            this.monsterHealth -= damage;

            if(this.monsterHealth <=0)
            {
                alert('You won!')
                this.gameState = false;
                return;
            }
            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1 , min);
            this.playerHealth -= damage;

            if(this.playerHealth <=0)
            {
                alert('You lost!')
                this.gameState = false;
                
            }
        },
        special_attack: function(){

        },
        heal: function(){

        },
        give_up: function(){

        }
    }
})