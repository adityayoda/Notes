let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  const getDateTime = document.createElement("p");
  if (addTitle.value == "") {
    return alert("Please add Note Title")
  }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});

//function for showNotes
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  let date = new Date();
  
  notesObj.forEach(function (element, index,checkbox) {
    html += `

        <div class="note">
           <input type="checkbox" class="delete-checkbox" id="${checkbox}">
           <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
            <p class="note-date"> ${date}</p>
        </div>
            `;
  });

  let notesElm = document.getElementById("notes");
  
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
    

  } else {
    notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
    
  }


}

//function for deleteNote
function deleteNote(index) {
  let confirmDel = confirm("Delete this note?");
  if (confirmDel == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

}


//function for deleteCheckboxesChecked
function deleteCheckboxesChecked(index) {
  let confirmDel = confirm("Delete all checked note?");
  if (confirmDel == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    var list = document.getElementsByTagName('input')
    for (var i = 0; i < list.length; ++i) {
      var note = list[i]
      if (note.checked)
        note.parentElement.hidden = true
    }
  
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

}

//function for editNote

function editNote(index) {
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editing a note")
  }

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj);

  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  })
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

showNotes();

//function for serchTxt
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
  let inputVal = search.value;
  //console.log('input evnt fired',inputVal);
  let noteTitle = document.getElementsByClassName('note');
  Array.from(noteTitle).forEach(function (element) {
    let noteTitle = element.getElementsByTagName("h3")[0].innerText;
    if (noteTitle.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";

    }

    //console.log(noteTitle);
  })
})

 // function for archiveNote
function archiveNote(index){
  let notes = localStorage.getItem("notes");
  if (notes==1){
    document.getElementById("index").style.display="inline";
    return 0;
  }else{
      
    document.getElementById("index").style.display="none";
     return notes=1;
    }
  } 

 // function for backupNote
  function backupNote(index){
    
    console.log("button was clicked");
  }
// function for showAllNotes
  function showAllNote(index){
    console.log("button was clicked");
  }