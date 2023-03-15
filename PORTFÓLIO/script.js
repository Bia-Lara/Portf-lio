var html= document.querySelector('.html');
var css= document.querySelector('.css');
var javascript= document.querySelector('.javascript');
var python= document.querySelector('.python');
var java= document.querySelector('.java');
var sql= document.querySelector('.sql');
var span= document.querySelector('#descricaospan');

html.addEventListener("mouseover", e=>{
    span.innerHTML=" A linguagem HTML é uma linguagem <br> de marcação de hipertexto. <br><br>"+ 
    " Tenho experiência à 4 anos nessa <br> linguagem, meu primeiro contato foi  no <br> meu 1º ano de ensino médio, e <br> desde então estou  me aprimorando <br>cada vez mais";
    
});

css.addEventListener("mouseover", e=>{
    span.innerHTML=" A linguagem css é uma linguagem <br> de estilo usada para descrever <br> a apresentação de um documento <br> escrito em HTML ou em XML .<br><br>"+
    "Como o HTML, também tenho experiência <br> a 4 anos. É a linguagem <br> que mais gosto de aprender coisas <br> novas e faço  diversos projetos para <br> aprender mais.";
    
});

javascript.addEventListener("mouseover", e=>{
    span.innerHTML="JavaScript é uma linguagem de programação <br> usada por desenvolvedores para fazer páginas <br> interativas da Internet. <br><br> "+
    " Minha experiência com essa linguagem é <br> de 3 anos, comecei a aprender <br> no meu 2º ano do ensino médio <br>  e desde então utilizo em <br> muitos de meus projetos.";
    
});

python.addEventListener("mouseover", e=>{
    span.innerHTML="Python é uma linguagem de programação <br> amplamente usada em aplicações da Web,<br> desenvolvimento de software, ciência de dados <br> e machine learning.<br><br> "+
    "Meu primeiro contato com o python <br> foi no meu 1º ano do ensino <br> médio e consigo fazer pequenos projetos.";
    
});

java.addEventListener("mouseover", e=>{
    span.innerHTML="Java é uma linguagem de programação <br> e plataforma de computação.<br><br> "+
    "Java é uma das minhas linguagens <br> favoritas, meu primeiro contato foi no <br> 2º ano do ensino médio, e <br> consigo fazer projetos orientados a objetos.";
    
});

sql.addEventListener("mouseover", e=>{
    span.innerHTML="A Linguagem de consulta estruturada (SQL) <br> é uma linguagem de programação para <br> armazenar e processar informações em um <br> banco de dados relacional.<br><br> "+
    "Sql é outra linguagem que gosto <br> muito, pois gosto de mecher com <br> banco de dados, além de fazer <br> sua conexão com as demais linguagens.<br> Meu primeiro contato foi no 2º <br> ano do ensino médio.";
    
});