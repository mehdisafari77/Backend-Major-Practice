const selectForm = document.getElementById("select-form")



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune")
      .then(function (res) {
        const data = res.data;
        alert(data);
      });
  };

  function displayTaskList(arr){
    while(taskListContainer.firstChild){
      taskListContainer.removeChild(taskListContainer.firstChild)
    }
    
    for (let i = 0; i < arr.length; i++){
      const newTask = document.createElement("div");
      
      newTask.innerHTML = `<p>${arr[i].text}</p><button class="delete-btn" value ="${arr[i].id}">Delete</button>`
      
      taskListContainer.appendChild(newTask);
      
      let deleteBtns = document.getElementsByClassName('delete-btn');
      
      for (let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', deleteTask)
      }
    }
  }