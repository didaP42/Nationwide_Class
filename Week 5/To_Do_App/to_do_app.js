//Windows Onload
$(() => {
  //* gets ADD BUTTON from HTML page
  const addBtn = $("#submit");

  //adds event listener on the button
  addBtn.on("click", (e) => {
    e.preventDefault();

    //gets user input
    let userInput = $("#input-box");
    // gets to-di-list container
    const toDoList = $("#to-do-list");
    // create to-do-arrays to hold all to-dos
    const toDosArr = [];
    // appends user input to to-dos-array
    toDosArr.push(userInput.val());

    console.log(toDosArr);

    $.each(toDosArr, (idx, el) => {
      // create a div  with some css
      const div = $("<div>").css("background-color", "#ED6495");
      // create element for each todo
      const toDo = $("<h2>").text(el);
      // append the toDo (h2) to the div
      div.append(toDo);

      const btn = $("<button>").attr("type", "button").text("COMPLETED");
      div.append(btn);

      // appends the todo and btn to the todo-list
      toDoList.append(div);

      //* ====== btn event listener
      btn.on("click", (e) => {
        // console.log(e.currentTarget).parent()

        // changes the color of the toDo
        div.css("background-color", "#ED6495");
        // grab the completed container
        const completed = $("#completed");

        // appends
        div.append(btn.text("REMOVE"));
        completed.append(div);

        btn.on("click", (e) => {
          btn.prev().remove();
          e.target.remove();
        });
      });
    });

    // // clears input
    userInput.val("");
  });
});
