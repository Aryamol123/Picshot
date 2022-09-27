const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];



window.addEventListener('load',dayNightMode);
window.addEventListener('load',defaultSetting)
input.addEventListener('keydown',(event)=>{
    if(event.key === "Enter")
    loadImg();
})

function loadImg(){
    grid.innerHTML = ""
   
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page&client_id=spXt3MjEwqgwfqgO7wIjvt2YUD7F9K8TDZjhADqTBTA'
     fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            alert(response.status)
        }
     }).then(data=>{
         const imageNodes = [];
         for(let i = 0 ;i<data.results.length ; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick',function(){
                window.open(data.results[i].links.download,'_blank');

            })
            grid.appendChild(imageNodes[i]);
         }
     })


}

function defaultSetting(){
    // grid.innerHTML = " ";
    input.value = "car"
    const url = 'https://api.unsplash.com/search/photos/?query=car&per_page&client_id=spXt3MjEwqgwfqgO7wIjvt2YUD7F9K8TDZjhADqTBTA'
     fetch(url).then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            alert(response.status)
        }
     }).then(data=>{
         const imageNodes = [];
         for(let i = 0 ;i<data.results.length ; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick',function(){
                window.open(data.results[i].links.download,'_blank');

            })
            grid.appendChild(imageNodes[i]);
         }
     })
}
function dayNightMode(){
    const date = new Date();
    const hours = date.getHours();


    if(hours >= 7 && hours <= 19){
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
    }else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    }
}