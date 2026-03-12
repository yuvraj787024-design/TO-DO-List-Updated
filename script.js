function add() {
  let input =document.querySelector(".text");
  let timeText=document.querySelector(".time");
  let time =timeText.value.trim();
  
  
  let text =input.value.trim();
  let li=document.createElement("li");
  if (text==="" || time==="") {
    alert("Please Enter the Task and time First");
    return;
  }
  li.innerHTML=`<span>${text}</span><span>${time}</span><button onclick="this.parentElement.remove()">delete</button><button onclick ="edit(this)">edit</button>`;
  document.querySelector(".list").appendChild(li);
  input.value="";
  timeText.value="";
}

function edit(button) {
  let li = button.parentElement;

  let textSpan = li.children[0]; // task text
  let timeSpan = li.children[1]; // time

  let newText = prompt("Edit your task:", textSpan.innerText);
  let newTime = prompt("Edit time:", timeSpan.innerText);

  if (newText !== null && newText.trim() !== "") {
    textSpan.innerText = newText;
  }

  if (newTime !== null && newTime.trim() !== "") {
    timeSpan.innerText = newTime;
  }
}