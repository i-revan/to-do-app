var input = document.querySelector("input");
var addBtn = document.querySelector("#add");
var invalidData = document.querySelector("#invalid");
var list = document.querySelector("ul");
var updateBtn = document.querySelector("#update");
var clearBtn = document.querySelector("#clear");
var count = document.querySelector("#count");
var editBtnClick = false;
input.addEventListener("keyup", function (e) {
  if (e.target.value.trim().length < 4 || e.target.value == "") {
    invalidData.style.display = "inline";
    addBtn.setAttribute("disabled", " ");
    updateBtn.setAttribute("disabled", " ")
  }
  else {
    invalidData.style.display = "none";
    addBtn.removeAttribute("disabled");
    updateBtn.removeAttribute("disabled")
  }
  if (editBtnClick==true) {
    addBtn.setAttribute("disabled", " ")
  }
});
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.trim() == "") {
    addBtn.setAttribute("disabled", " ");
  } else {
    var listItem = document.createElement("li");
    listItem.classList.add("list-unstyled");
    listItem.classList.add("my-2");
    var itemWrapper = document.createElement("div");
    itemWrapper.classList.add("row");
    var spanWrapper = document.createElement("div");
    spanWrapper.classList.add("col-5");
    spanWrapper.classList.add("text-break")
    spanWrapper.classList.add("d-flex");
    spanWrapper.classList.add("justify-content-right");
    var btnWrapper = document.createElement("div");
    btnWrapper.classList.add("col-7");
    var span = document.createElement("span");
    span.textContent = input.value;
    spanWrapper.append(span);
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("myBtn");
    deleteBtn.textContent = "Clear";
    var doneBtn = document.createElement("button");
    doneBtn.classList.add("btn");
    doneBtn.classList.add("btn-info");
    doneBtn.classList.add("myBtn");
    doneBtn.textContent = "Done";
    var editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.classList.add("myBtn");
    editBtn.textContent = "Edit";
    btnWrapper.append(deleteBtn, doneBtn, editBtn);
    itemWrapper.append(spanWrapper, btnWrapper);
    listItem.append(itemWrapper);
    list.append(listItem);
    count.innerHTML++;
    deleteBtn.addEventListener("click", function () {
      deleteBtn.parentElement.parentElement.parentElement.remove();
      count.innerHTML--;
    });
    doneBtn.addEventListener("click", function () {
      doneBtn.parentElement.previousElementSibling.style.textDecoration =
        "line-through";
    });
    editBtn.addEventListener("click", function () {
      updateBtn.style.display = "inline";
      input.value = editBtn.parentElement.previousElementSibling.textContent;
      editBtnClick = true;
      addBtn.setAttribute("disabled", " ");
      clearBtn.setAttribute("disabled"," ")
      for (
        let index = 0;
        index < document.querySelectorAll(".myBtn").length;
        index++
      ) {
        document
          .querySelectorAll(".myBtn")
          [index].setAttribute("disabled", " ");
      }
      input.focus();
      updateBtn.addEventListener("click", function (e) {
        e.preventDefault();
        editBtn.parentElement.previousElementSibling.textContent = input.value;
        updateBtn.style.display = "none";
        input.value = "";
        addBtn.removeAttribute("disabled");
        clearBtn.removeAttribute("disabled"," ")
        for (
          let index = 0;
          index < document.querySelectorAll(".myBtn").length;
          index++
        ) {
          document.querySelectorAll(".myBtn")
            [index].removeAttribute("disabled");
        }
      });
    });
    input.value = "";
  }
});
clearBtn.addEventListener("click", function () {
  while (list.firstChild) {
    list.firstChild.remove();
  }
  count.innerHTML = 0;
});
