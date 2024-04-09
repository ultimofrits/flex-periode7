const colors = document.getElementsByClassName("colors__color");
let secondColor = false;





for(let i = 0; i < colors.length; i++ ){

    //nummer inclusief 1 -360 inclusief => hue
    // percentage inclusief 11 - 80 inclusief => saturation
    // percentage inclusief 11 -100 inclusief => lightness
    colors[i].style.animationDelay = i/10 + "s";
    let randomhue = Math.floor( Math.random() * (360 - 1) + 1);
    let randomsaturation = Math.floor( Math.random() * (79 - 11) + 11) + "%";
    let randomlightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    colors[i].children[0].style.background = `hsl(${randomhue}, ${ randomsaturation}, ${ randomlightness})`; 
    
    
    /* onclick */
    colors[i].onclick= function(){
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(colors[i].children[0].style.background);
        console.log(colors[i].children[0].style);
        document.title = colors[i].children[0].style.background;



    }
}



