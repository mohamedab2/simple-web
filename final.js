///Name: Mohamed abo ria
//ID: 213933138

///**open the intro first when checking ***///



const jsonEndpoint = './final.json';

// Create a function to fetch the JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Call the fetchData function to get the JSON data
fetchData(jsonEndpoint)
  .then(data => {
    if (data) {
      initializePage(data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

function initializePage(data) {

let div=document.querySelector('.main');

////////the site header////////
let title;
let site=document.createElement('div');
site.classList.add('site');

title=document.createElement("p");
title.classList.add('title');
title.innerHTML = "Game Haven";
site.append(title);

const HP=document.createElement("button");   ///button that actives the homepage function on click
HP.classList.add('HP');
HP.innerHTML= 'home page';
HP.addEventListener('click',homepage);
site.append(HP);


const OW=document.createElement("button");   ///button that actives the openWorld function on click
OW.classList.add('OW');
OW.innerHTML='open world games';
OW.addEventListener('click',openWorld)
site.append(OW);


const Action=document.createElement("button"); ///button that actives the ActionGame function on click
Action.classList.add('Action');
Action.innerHTML='Action';
Action.addEventListener('click',ActionGame);
site.append(Action);


const horror=document.createElement("button"); ///button that actives the HorrorGame function on click
horror.classList.add('horror');
horror.innerHTML='Horror';
horror.addEventListener('click',HorrorGame);
site.append(horror);

const input=document.createElement("input");  ///input that receives the name of the game that the user is looking for
input.classList.add('input');
input.placeholder='enter game name';
site.append(input);

const Search=document.createElement("button");  ///button that actives the search function on click
Search.classList.add('Search');
Search.innerHTML='Search';
Search.addEventListener('click',search);
site.append(Search);




div.append(site);
/////////////////////


////////////////////

const container=document.createElement('div');   ///defines the games div content
container.classList.add('container');

let Game;
let game;
let description;
let age;
let price;
let pic;




//main for to get the data
for (let i = 0; i < data.Games.length; i++) {

    Game=document.createElement("div");
    Game.classList.add("game");
    
    description=document.createElement("p");
    description.classList.add("des");
    description.innerHTML=data.Games[i].description;
    Game.append(description);
    
    
    pic=document.createElement("img");
    pic.classList.add("img");
    pic.src=data.Games[i].pic;
    Game.appendChild(pic);
    
    
    game=document.createElement("p");
    game.classList.add("name");
    game.innerHTML=data.Games[i].Game;
    Game.appendChild(game);
    
    price=document.createElement("p");
    price.classList.add("price");
    price.innerHTML=data.Games[i].price;
    Game.append(price)
    
    
    age=document.createElement("p");
    age.classList.add("age");
    age.innerHTML=data.Games[i].age;
    Game.append(age);
    
    
    container.append(Game);
    
    
}

div.append(container)

////////////////////////////////////////////////////


///////////function to return to the home page
function homepage() {
  removeAllChildren();

  for (let i=0;i<data.Games.length;i++){
    Game=document.createElement("div");
    Game.classList.add("game");
    
    description=document.createElement("p");
    description.classList.add("des");
    description.innerHTML=data.Games[i].description;
    Game.append(description);
    
    
    pic=document.createElement("img");
    pic.classList.add("img");
    pic.src=data.Games[i].pic;
    Game.appendChild(pic);
    
    
    game=document.createElement("p");
    game.classList.add("name");
    game.innerHTML=data.Games[i].Game;
    Game.appendChild(game);
    
    price=document.createElement("p");
    price.classList.add("price");
    price.innerHTML=data.Games[i].price;
    Game.append(price)
    
    
    age=document.createElement("p");
    age.classList.add("age");
    age.innerHTML=data.Games[i].age;
    Game.append(age);
    
    
    container.append(Game);
  }


}
//////////////////////////////////////////


///////////////function to show only the open world games
function openWorld() {
    removeAllChildren();
  
        for (let i = 0; i < data.Games.length; i++) {

          if (data.Games[i].type === 'open world') {
            Game=document.createElement("div");
            Game.classList.add("game");
            
            description=document.createElement("p");
            description.classList.add("des");
            description.innerHTML=data.Games[i].description;
            Game.append(description);
            
            
            pic=document.createElement("img");
            pic.classList.add("img");
            pic.src=data.Games[i].pic;
            Game.appendChild(pic);
            
            
            game=document.createElement("p");
            game.classList.add("name");
            game.innerHTML=data.Games[i].Game;
            Game.appendChild(game);
            
            price=document.createElement("p");
            price.classList.add("price");
            price.innerHTML=data.Games[i].price;
            Game.append(price)
            
            
            age=document.createElement("p");
            age.classList.add("age");
            age.innerHTML=data.Games[i].age;
            Game.append(age);
            
            
            container.append(Game);
            
      }
    }
    div.append(container);
} 
//////////////////////////////////


//////// a function to show only the action games
function ActionGame(){
  removeAllChildren();

  for(let i=0; i<data.Games.length; i++){

    if(data.Games[i].type =='Action'){
      Game=document.createElement("div");
      Game.classList.add("game");
      
      description=document.createElement("p");
      description.classList.add("des");
      description.innerHTML=data.Games[i].description;
      Game.append(description);
      
      
      pic=document.createElement("img");
      pic.classList.add("img");
      pic.src=data.Games[i].pic;
      Game.appendChild(pic);
      
      
      game=document.createElement("p");
      game.classList.add("name");
      game.innerHTML=data.Games[i].Game;
      Game.appendChild(game);
      
      price=document.createElement("p");
      price.classList.add("price");
      price.innerHTML=data.Games[i].price;
      Game.append(price)
      
      
      age=document.createElement("p");
      age.classList.add("age");
      age.innerHTML=data.Games[i].age;
      Game.append(age);
      
      
      container.append(Game);
    }
  }
}
//////////////////////////////////////



///////////////function to show horror games
function HorrorGame(){
  removeAllChildren();

  for(let i=0; i<data.Games.length; i++){
    if (data.Games[i].type =='Horror'){
      Game=document.createElement("div");
      Game.classList.add("game");
      
      description=document.createElement("p");
      description.classList.add("des");
      description.innerHTML=data.Games[i].description;
      Game.append(description);
      
      
      pic=document.createElement("img");
      pic.classList.add("img");
      pic.src=data.Games[i].pic;
      Game.appendChild(pic);
      
      
      game=document.createElement("p");
      game.classList.add("name");
      game.innerHTML=data.Games[i].Game;
      Game.appendChild(game);
      
      price=document.createElement("p");
      price.classList.add("price");
      price.innerHTML=data.Games[i].price;
      Game.append(price)
      
      
      age=document.createElement("p");
      age.classList.add("age");
      age.innerHTML=data.Games[i].age;
      Game.append(age);
      
      
      container.append(Game);
    }
  }

}

/////////////////////////////////////

function search() {    ///a search function
  removeAllChildren();
  
 const inputValue = input.value.toLowerCase(); // Convert the input to lowercase for case-insensitive search

  for (let i = 0; i < data.Games.length; i++) {
    if (data.Games[i].Game.toLowerCase().startsWith(inputValue)) {
      
      Game=document.createElement("div");
      Game.classList.add("game");
      
      description=document.createElement("p");
      description.classList.add("des");
      description.innerHTML=data.Games[i].description;
      Game.append(description);
      
      
      pic=document.createElement("img");
      pic.classList.add("img");
      pic.src=data.Games[i].pic;
      Game.appendChild(pic);
      
      
      game=document.createElement("p");
      game.classList.add("name");
      game.innerHTML=data.Games[i].Game;
      Game.appendChild(game);
      
      price=document.createElement("p");
      price.classList.add("price");
      price.innerHTML=data.Games[i].price;
      Game.append(price)
      
      
      age=document.createElement("p");
      age.classList.add("age");
      age.innerHTML=data.Games[i].age;
      Game.append(age);
      
      
      container.append(Game);
    }
  }
}


  

////////function to remove the games
  function removeAllChildren() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }



}

