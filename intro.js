///Name: Mohamed abo ria
//ID: 213933138

const main =document.querySelector('.main');


let intro;
intro=document.createElement("div");
intro.classList.add('intro');


let info;
info = document.createElement("p");
info.classList.add('info');
info.innerHTML = `
    <h1>Greetings,</h1>
    <p>I'm excited to introduce myself as a passionate coding student, eager to explore the captivating world of programming. My name is Mohamed, and I've embarked on a journey to understand the intricate language of code and its boundless applications.</p>
    <p>Armed with a curiosity for problem-solving and a penchant for creativity, I'm diving headfirst into languages like JavaScript and Java.</p>
<br />
<p> as my first project, I have made a simple game site that can show you the game name,price,description and age rating,<br /> the site has many function that can help ypu chose the game you like<br />
1) a search function to help you find the game you are looking for.<br />
2) buttons that can display the Games you are interested in such as horror,action....
<br /><br /><br>
<p> To go to the project page click on the button below<br>Warm regards,<br>Mohamed abo ria</p>
    `;
intro.append(info);


let picture;
picture=document.createElement("div");
picture.classList.add('picture');

let pic = document.createElement("img");
pic .classList.add('pic');
pic.src ="images/intro.jpg"
picture.append(pic);

let button=document.createElement("button");
button.classList.add('butt');
button.innerHTML="click here";
button.addEventListener("click",goto);

main.append(intro,picture,button);


function goto(){
    window.location.assign('final.html');
}
