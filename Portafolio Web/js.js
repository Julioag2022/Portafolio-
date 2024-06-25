document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate__fadeIn');
            card.style.opacity = '1';
        }, index * 200); // Retraso de 200ms entre cada imagen
    });
});




:root {
    --color_primario: #0f0f0f00;
    --color_primario_suave: #080808;
    --color_blanco: #fff;
    --altura_header: 80px;
    --padding_left_right: 2rem;
    --ancho_maximo: 1200px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #090C04;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='331' height='331' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%230B1F0A' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23050F04'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a{
    text-decoration: none;
}
ol,ul{
    list-style: none;
}
.header {
    height: var(--altura_header);
    background-color: var(--color_primario);
}
.navbar {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 var(--padding_left_right);
}
.menu_hamburguesa{
    display: none;
}
.menu_hamburguesa:checked + .ul_links {
    height: calc(100vh - var(--altura_header));
}
.logo {
    color: var(--color_blanco);
}
.labe_hamburguesa {
}
.list_icon {
    color: var(--color_blanco);
    cursor: pointer;
}
.ul_links {
    width: 100%;
    background-color: var(--color_primario_suave);
    position: absolute;
    top: var(--altura_header);
    left: 0;
    height: 0;
    overflow: hidden;
    /* height: calc(100vh - var(--altura_header)); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    transition: all .3s;
}
.li_links {
}
.link {
    font-size: 3em;
    color: var(--color_blanco);
    font-weight: bold;
}

@media (min-width:768px){
    .labe_hamburguesa {
        display: none;
    }
    .ul_links{
        position: static;
        width: auto;
        height: auto;
        flex-direction: row;
        gap: 2rem;
    }
    .link{
        font-size: 1.2rem;
        transition: all .3s;
        padding: .2rem .7rem;
    }
    .link:hover{
        background-color: #242325;
    }
}


.foto-mia{
    height: 11rem;
    width: 9rem;
    border-radius: 15px;
    border: solid;
    margin: 2rem;
    box-shadow: 4px 4px 2px #193805ce;
}

.otroco{
    color: #4fe920d0;
}


h1{
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.829);
}
h2{
    color: rgba(255, 255, 255, 0.829);
}
p{
    font-size: 14px;
    color: rgba(255, 255, 255, 0.801);
}


.cabezera-pagina{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: 75vh;
    background-color: rgba(0, 0, 0, 0);}

     body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }

        .container {
            width: 80%;
            margin: auto;
        }

        h2 {
            text-align: center;
        }

        .progress-bar {
            margin: 20px 0;
            color: white;
        }

        .progress-bar span {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
        }

        .progress {
            background-color: #e0e0e0;
            border-radius: 25px;
            overflow: hidden;
        }

        .progress div {
            height: 30px;
            border-radius: 25px;
            text-align: center;
            color: white;
            line-height: 30px;
        }

        .html-css {
            width: 100%;
            background-color: #4caf50;
        }

        .javascript {
            width: 80%;
            background-color: #2196f3;
        }

        .python {
            width: 80%;
            background-color: #f39c12;
        }

        .mysql {
            width: 100%;
            background-color: #533e57;
        }


        .projects-section {
            padding: 80px 0;
            background-color: #16151523;
        }
        
        .projects {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .project-card {
            position: relative;
            width: 300px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            opacity: 0; /* Initially hidden */
        }
        
        .project-card img {
            width: 100%;
            height: auto;
            transition: transform 0.3s;
        }
        
        .project-card:hover img {
            transform: scale(1.1);
        }
        
        .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7);
            overflow: hidden;
            width: 100%;
            height: 0;
            transition: .5s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .project-card:hover .overlay {
            height: 100%;
        }
        
        .overlay h3 {
            font-size: 20px;
            margin: 10px 0;
        }
        
        .overlay p {
            font-size: 14px;
            margin: 0 20px;
        }
        
        .animate__animated {
            opacity: 1; /* Ensure visibility after animation */
            animation-duration: 1s;
        }
        
        @media (max-width: 768px) {
            .project-card {
                width: calc(50% - 20px);
            }
        }
        