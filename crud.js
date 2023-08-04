var container=document.querySelector('.container');
var input=document.querySelector('#input1');
var add=document.querySelector('#add');
var count=document.querySelector('#head2');
var initCount=0;
var newCount=document.createElement('span');    
    newCount.textContent=initCount
    count.appendChild(newCount);

    if(initCount==0){
        var comment=document.createElement('h2');
        comment.setAttribute('id','comment');
        comment.textContent='No Pending Task';
        container.appendChild(comment);
    }

add.addEventListener('click',()=>{
    initCount=initCount+1;
    newCount.textContent=initCount;
    if(initCount==1){
        container.removeChild(comment);        
    }    
    var newDiv=document.createElement('div');
    newDiv.setAttribute('class','item')
    var text=document.createElement('h3');
    text.textContent=input.value;
    input.value='';
    var newStatusBtn=document.createElement('button');
    newStatusBtn.setAttribute('id','status');
    newStatusBtn.textContent='Pending';
    var newActionBtn=document.createElement('button');
    newActionBtn.setAttribute('id','action');
    newActionBtn.textContent='Mark As Done';
    newActionBtn.addEventListener('click',()=>{
        newStatusBtn.style.backgroundColor='lightGreen';
        newStatusBtn.style.color='black';
        newStatusBtn.textContent='Done';
        newActionBtn.style.backgroundColor='black';
        newActionBtn.style.color='black';
        newActionBtn.textContent='';
    })
    var newBtn=document.createElement('button');
    newBtn.setAttribute('id','delete');
    newBtn.textContent='Delete';
    container.appendChild(newDiv)
    newDiv.appendChild(text);
    newDiv.appendChild(newStatusBtn);
    newDiv.appendChild(newActionBtn);
    newDiv.appendChild(newBtn);
    newBtn.addEventListener('click',()=>{
        container.removeChild(newDiv);
        initCount=initCount-1;
        newCount.textContent=initCount;
        if(initCount==0){
            container.appendChild(comment);        
        }  
    })
})

