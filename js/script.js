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

        }
    }
})