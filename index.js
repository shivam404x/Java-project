// step -1 select the form tag

// let todoArr;

let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];

document.querySelector("form").addEventListener("submit", getdata);
displayTable(todoArr);

// if (JSON.parse(localStorage.getItem("todo")) == null) {
//   todoArr = [];
// } else {
//   todoArr = JSON.parse(localStorage.getItem("todo"));
// }

// Step -2 catch values from input tag

function getdata(e) {
  e.preventDefault();

  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  console.log(taskName, taskPriority);

  let taskObj = {
    taskName,
    taskPriority,
    favCount: 0
  };

  todoArr.push(taskObj); // [{},{},{}]

  localStorage.setItem("todo", JSON.stringify(todoArr));

  console.log(taskObj);

  displayTable(todoArr);
}

function displayTable(arr) {
  //arr = [{},{},{}]

  document.querySelector("tbody").innerText = "";
  arr.forEach((el) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.taskName;

    const td2 = document.createElement("td");
    td2.innerText = el.taskPriority;

    const addToFav = document.createElement("button");
    addToFav.innerText = "Add To Fav";

    addToFav.addEventListener("click", function () {
      favArr.push(el);
      localStorage.setItem("fav", JSON.stringify(favArr));
      alert("Todo Added to Fav");
    });

    row.append(td1, td2, addToFav);

    document.querySelector("tbody").append(row);
  });
}

// const nm = localStorage.getItem("name");
// console.log(nm);
