function uniciarCanvas (){

        var ctx = document.getElementById('my_canvas').getContext('2d');
        var backgroundImage = new Image ();
        var naveImagen = new Image();
        var enemigoUno = new Image();
        var enemigoDos = new Image();
        var enemigoTres = new Image ();

        backgroundImage.src = "image/fondodos.jpg"; 
        naveImagen.src = "image/dos.png"; 
        enemigoUno.src = "image/dos.png";
        enemigoDos.src = "image/seis.png";
        enemigoTres.src = "image/enemigo1.png";

        var cW = ctx.canvas.width;
        var cH = ctx.canvas.height;
        



        var templateEnemies = function (options) {

                // const x = Math.round( Math.random() * 200 + cW)
                // const y = Math.round( Math.random() * 100 + cH)


                return {
                    id: options.id || '',
                    x: options.x || '',
                    y: options.y || '',
                    w: options.w || '',
                    h: options.h || '',
                    image: options.image || enemigoUno
                }
        }
      
        var enemies = [ 
            new templateEnemies ({id: 'enemigo1', x: 1400, y: 200, w: 70, h: 40, image: enemigoDos }),
            new templateEnemies ({id: 'enemigo1', x: 1400, y: 50, w: 70, h: 40}),
            new templateEnemies ({id: 'enemigo1', x: 1600, y: 150, w: 80, h: 50 }),
            new templateEnemies ({id: 'enemigo1', x: 1400, y: 250, w: 70, h: 40}),
            new templateEnemies ({id: 'enemigo1', x: 1600, y: 350, w: 80, h: 50}),
            new templateEnemies ({id: 'enemigo1', x: 1600, y: 550, w: 80, h: 50 }),
            new templateEnemies ({id: 'enemigo1', x: 1400, y: 650, w: 70, h: 40}),
            new templateEnemies ({id: 'enemigo1', x: 1600, y: 700, w: 80, h: 50}),
        ]



        // var enemies = [ 
        //     new templateEnemies ({id: 'enemigo1', x: 1400, y: 50, w: 70, h: 40}),
        //     new templateEnemies ({id: 'enemigo1', x: 1600, y: 150, w: 80, h: 50, image: enemigoDos }),
        //     new templateEnemies ({id: 'enemigo1', x: 1400, y: 250, w: 70, h: 40}),
        //     new templateEnemies ({id: 'enemigo1', x: 1600, y: 350, w: 80, h: 50, image: enemigoTres}),
            // new templateEnemies ({id: 'enemigo1', x: 1400, y: [{altura}], w: 70, h: 40}),
        //     new templateEnemies ({id: 'enemigo1', x: 1600, y: 550, w: 80, h: 50, image: enemigoDos }),
        //     new templateEnemies ({id: 'enemigo1', x: 1400, y: 650, w: 70, h: 40}),
        //     new templateEnemies ({id: 'enemigo1', x: 1600, y: 700, w: 80, h: 50, image: enemigoTres}),
        // ]


        let control = 0
        let direccionY = true

        function moverY(num) {
            if (direccionY) {
                return num
            } else {
                return -num
            }
        }

        var mostrarEnemigos = function(enemyList){
            for (var i = 2; i < enemyList.length; i++) {
                var enemy = enemyList[i];
                ctx.drawImage(enemy.image, enemy.x -= .7, enemy.y, enemy.w, enemy.h);
            }
            ctx.drawImage(enemyList[0].image, enemyList[0].x -= .6, enemyList[0].y += moverY(.3), enemyList[0].w, enemyList[0].h)
            ctx.drawImage(enemyList[1].image, enemyList[1].x -= .8, enemyList[1].y += moverY(.1), enemyList[1].w, enemyList[1].h)
        }
        

        function animate (){
            ctx.clearRect(0, 0, cW, cH);
            
            control++
            if (control == 300) {
                direccionY = !direccionY
                control = 0
            }




            mostrarEnemigos(enemies);
            launcher.render()
        }

        var animateInterval = setInterval(animate, 5);
        
        // let contadorEnemigos=8

        // let agregarEnemigos = (cantidad)=> {
        //     let enemigos = []

        //     for (let i = 1; i <= cantidad; i++) {
        //         enemigos.push( templateEnemies() )
        //     }
        //     return enemigos
        // }

        // const actualizar = setInterval(() => {
        //     enemies =[]
        //     enemies = agregarEnemigos(contadorEnemigos)
        //     contadorEnemigos += 8
        // }, 15000);

        // clearInterval(actualizar)

        function Launcher() {
            this.y = 330,
            this.x =cW*.5 -880,
            this.w = 100,
            this.h = 100,
            this.direction,
            this.bg= 'white',
            this.misiles =[],

            this.render = function() {
                if (this.direction === 'left'){
                    if (this.x - 5 >= 50) {
                        this.x -=5
                    }
                    
                } else if (this.direction === 'right') {
                    if (this.x + 5 <= 700) {
                        this.x +=5
                    }
                    
                } else if (this.direction == 'down') {
                    if (this.y + 5 <= 700) {
                        this.y += 5
                    }
                    
                } else if (this.direction == 'up') {
                    if (this.y - 5 >= 100) {
                        this.y -= 5
                    }
                    
                } 
                ctx.fillStyle = this.bg;
                // ctx.drawImage(backgroundImage, 10, 10);
                ctx.drawImage(naveImagen, this.x, this.y, 100, 90)
            }
        }

        var launcher = new Launcher ();
        
    
        document.addEventListener('keydown', function(event) {
        if(event.keyCode === 37) {
            launcher.direction = 'left';           
            }
        });

        document.addEventListener('keyup', function(event) {
            if(event.keyCode === 37) {
                launcher.direction = '';
            }
        });

        document.addEventListener('keydown', function(event) {
            if(event.keyCode === 39) {
                launcher.direction = 'right';
            }
        });
    
        document.addEventListener('keyup', function(event) {
            
            if(event.keyCode === 39) {
                launcher.direction = '';
            }
        });
        
        document.addEventListener('keydown', function(event) {
            
            if(event.code === "ArrowUp") {
                launcher.direction = 'up';
            }
        });

        document.addEventListener('keyup', function(event) {
            
            if(event.code === "ArrowUp") {
                launcher.direction = '';
            }
        });
        
        document.addEventListener('keyup', function(event) {
            
            if(event.code === "ArrowDown") {
                launcher.direction = '';
            }
        });
        
        document.addEventListener('keydown', function(event) {
            if(event.code === "ArrowDown") {
                launcher.direction = 'down';
            }
        });
    
        

}

window.addEventListener('load', function (event) {
uniciarCanvas();
});

