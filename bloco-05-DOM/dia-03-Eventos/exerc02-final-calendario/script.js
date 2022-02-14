function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
whereDays = document.querySelector("#days");
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// console.log(dezDaysList.length);

function daysOfTheWeek (){

   for (let i = 0 ;i<dezDaysList.length;i+=1){
    let contentOfDays = dezDaysList[i]; 
    newTagForDays = document.createElement("li");
    
    if(dezDaysList[i] === 31 || dezDaysList[i] === 24 ){
      newTagForDays.className = "day holiday";
    }else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
      newTagForDays.classList = "day friday";
    } else if( dezDaysList[i] === 25){
      newTagForDays.className = "day holiday friday";
    } else   {
      newTagForDays.className = "day";
    }
     
    newTagForDays.innerHTML = "<h2>"+contentOfDays+"</h2>";
    whereDays.appendChild(newTagForDays);
  }
}

daysOfTheWeek();


//q02
// console.log(whereDays.parentElement);   // whereDaysContainer  ou days-container 
let whereButtonContainer = document.querySelector(".buttons-container");
let contentOfButtonHoliday = "Feriados";
let newTagButtonHoliday = document.createElement("button");

newTagButtonHoliday.innerText = contentOfButtonHoliday;
newTagButtonHoliday.id = "btn-holidays";
whereButtonContainer.parentElement.appendChild(newTagButtonHoliday);



//q03
const whereIdHoliday  = document.getElementById("btn-holidays");
const whereClassHoliday = document.querySelectorAll(".holiday");
// const whereClassHoliday = document.getElementsByClassName("holiday");   //serve também
function changeColorHoliday(){
  
  if ( whereClassHoliday[0].style.background === "red"){
    for(let i =0 ; i<whereClassHoliday.length;i+=1 ) {
      whereClassHoliday[i].style.background = "rgb(238,238,238)";  
    }

  }else {
    for(let i =0 ; i<whereClassHoliday.length;i+=1 ) {
      whereClassHoliday[i].style.background = "red";  
    }
  }

  
}


whereIdHoliday.addEventListener("click" , changeColorHoliday)


// //1° SELECIONAR ONDE VAI ENTRAR 
// let ondeEstou = document.querySelector("#pai");
// // console.log(ondeEstou);

// //2° conteudo que vou jogar dentro do elemento criado
// let contentOfElement = "Texto de teste, depois vira parametro da minha funçao";

// //3°criar meu elemento = TAG  <p>,<div>, etc
// let newTag = document.createElement("div");

// //4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))
// newTag.innerText = contentOfElement;

// //5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"
// ondeEstou.appendChild(newTag);
/////////////////////////////////////////////////////////////////////////////////////
