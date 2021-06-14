    function initCanvas() {
        var ctx = document.getElementById('my_canvas').getContext('2d');
        var backgroundImage = new Image();
        var naveImage = new Image(); // nave
        var enemiespic1 = new Image(); // enemigo 1
        var enemiespic2 = new Image(); // enemigo 2

        // backgroundImage y naveImage
        backgroundImage.src = "images/background-pic.jpg"; //Background picture
        naveImage.src = "images/spaceship-pic.png"; //Spaceship picture
        // Enemigos fotos
        enemiespic1.src = "imagenes/enemigo1.png";
        enemiespic2.src = "imagenes/enemigo2.png"; //Enemies picture

        // width and height (canvas)
        var cW = ctx.canvas.width; // 700px 
        var cH = ctx.canvas.height; // 600px

        // template for naves
        var enemyTemplate = function (options) {
            return {
                id: options.id || '',
                x: options.x || '',
                y: options.y || '',
                w: options.w || '',
                h: options.h || '',
                image: options.image || enemiespic1
            }
        }

        // Primer Nave Enemiga
        var enemies = [
            new enemyTemplate({
                id: "enemy3",
                x: 100,
                y: -20,
                w: 50,
                h: 30
            }),
        ]

        // Primer Nave Enemiga

        var renderEnemies = function (enemyList) {
            for (var i = 0; i < enemyList.length; i++) {
                var enemy = enemyList[i];
                ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
                launcher.hitDetectLowerLevel(enemy);
            }
        }

        function Launcher() {
            // bullet location (ubicación de balas)
            this.y = 500,
                this.x = cW * .5 - 25,
                this.w = 100,
                this.h = 100,
                this.direccion,
                this.bg = "white", // bullet color (color de bala)
                this.misiles = [];

            this.gameStatus = {
                over: false,
                message: "",
                fillStyle: 'red',
                font: 'italic bold 36px Arial, sans-serif',

            }

            this.render = function () {
                if (this.direccion === 'left') {
                    this.x -= 5;
                } else if (this.direccion === 'right') {
                    this.x += 5;
                } else if (this.direccion === "downArrow") {
                    this.y += 5;
                } else if (this.direccion === "upArrow") {
                    this.y -= 5;
                }
                ctx.fillStyle = this.bg;
                ctx.drawImage(backgroundImage, 10, 10); // background image
                ctx.drawImage(naveImage, this.x, this.y, 100, 90); // we need to make sure spaceship is at the same location as the bullets

                for (var i = 0; i < this.misiles.length; i++) {
                    var m = this.misiles[i];
                    ctx.fillRect(m.x, m.y -= 5, m.w, m.h);
                    this.hitDetect(m, i);
                    if (m.y <= 0) { // If a missile goes past the canvas boundaries, remove it
                        this.misiles.splice(i, 1)
                    }
                }

                if (enemies.length === 0) {
                    clearInterval(animateInterval);
                    ctx.fillStyle = 'yellow';
                    ctx.font = this.gameStatus.font;
                    ctx.fillText('Ganaste', cW * .5 - 80, 50);
                }
            }
            this.hitDetect = function (m, mi) {
                for (var i = 0; i < enemies.length; i++) {
                    var e = enemies[i];

                    if (m.x <= e.x + e.w && m.x + m.w >= e.x &&
                        m.y >= e.y && m.y <= e.y + e.h) {
                        enemies.splice(i, 1);
                        document.querySelector('.barra').innerHTML = "Destruido" + e.id;
                    }
                }
            }
            this.hitDetectLowerLevel = function (enemy) {
                if (enemy.y > 550) {
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'You Died!!!!';
                }
                if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                    (enemy.x < this.x + 45 && enemy.x > this.x - 45)) {
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'You Died!!';
                }


                if (this.gameStatus.over === true) {
                    clearInterval(animateInterval);
                    ctx.fillStyle = this.gameStatus.fillStyle;
                    ctx.font = this.gameStatus.font;

                    ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50)
                }
            }
        }

        var launcher = new Launcher();

        function animate() {
            ctx.clearRect(0, 0, cW, cH);
            launcher.render();
            renderEnemies(enemies);
        }
        var animateInterval = setInterval(animate, 6);

        var left_btn = document.getElementById('left_btn')
        var right_btn = document.getElementById('right_btn')
        var fire_btn = document.getElementById('fire_btn')

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 37) // left arrow
            {
                launcher.direccion = 'left';
                if (launcher.x < cW * .2 - 130) {
                    launcher.x += 0;
                    launcher.direccion = '';
                }
            }
        });

        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 37) {
                launcher.x += 0;
                launcher.direccion = '';
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 39) // right arrow
            {
                launcher.direccion = 'right';
                if (launcher.x > cW - 110) {
                    launcher.x -= 0;
                    launcher.direccion = '';
                }

            }
        });

        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 39) // right arrow
            {
                launcher.x -= 0;
                launcher.direccion = '';
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 38) // up arrow
            {
                launcher.direccion = 'upArrow';
                if (launcher.y < cH * .2 - 80) {
                    launcher.y += 0;
                    launcher.direccion = '';
                }
            }
        });

        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 38) // up arrow
            {
                launcher.y -= 0;
                launcher.direccion = '';
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 40) // down arrow
            {
                launcher.direccion = 'downArrow';
                if (launcher.y > cH - 110) {
                    launcher.y -= 0;
                    launcher.direccion = '';
                }
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 40) // down arrow
            {
                launcher.y += 0;
                launcher.direccion = '';
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 80) // restart game
            {
                location.reload();
            }
        });

        left_btn.addEventListener('mousedown', function (event) {
            launcher.direccion = 'left'
        });

        left_btn.addEventListener('mouseup', function (event) {
            launcher.direccion = ''
        });

        right_btn.addEventListener('mousedown', function (event) {
            launcher.direccion = 'right'
        });

        right_btn.addEventListener('mouseup', function (event) {
            launcher.direccion = ''
        });

        fire_btn.addEventListener('mousedown', function (event) {
            launcher.misiles.push({
                x: launcher.x + launcher.w * .5,
                y: launcher.y,
                w: 3,
                h: 10
            });
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 32) {
                launcher.misiles.push({
                    x: launcher.x + launcher.w * .5,
                    y: launcher.y,
                    w: 3,
                    h: 10
                });
            }
        });


    }


    window.addEventListener('load', function (event) {
        initCanvas();

    });