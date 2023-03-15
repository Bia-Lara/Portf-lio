<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Habilidades</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/habilidades.css">
    <link href="https://fonts.cdnfonts.com/css/kollektif?styles=28735" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>   
</head>
<body>
    <div>
        <?php
			include "menu.html"
		?>
    </div>

    <div>
        <section class="habilidades">
            <div class="htitulo">
                <h1>HABILIDADES</h1>
            </div>

            <div class="conteudos">
                <div class="linguagens">
                    <div class="linguagens1">
                        <div class="linguagem l1 html">
                            <img src="img/html.png" alt="">
                        </div>

                        <div class="linguagem css">
                            <img src="img/css.png" alt="">
                        </div>

                        <div class="linguagem javascript">
                            <img src="img/javascript.png" alt="">
                        </div>
                    </div>
                    
                    <div class="linguagens2">
                        <div class="linguagem l1 python">
                            <img src="img/python.png" alt="">
                        </div>

                        <div class="linguagem java">
                            <img src="img/java.png" alt="">
                        </div>

                        <div class="linguagem sql">
                            <img src="img/sql.png" alt="">
                        </div>
                    </div>
                    
                </div>

                <div class="descricao">
                    <span id="descricaospan">/*Passe o mouse em uma habilidade <br> para ver mais*/</span>
                </div>
            </div>
        </section>
    </div>
    

    <div>
        <?php
			include "footer.html"
		?>
    </div>

    
    <script src="script.js"></script>
</body>
</html>