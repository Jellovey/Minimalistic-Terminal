let input = document.getElementById("Terminal");
    let submitBtn = document.getElementById("Submit");
    let output = document.getElementById("Output");
    
    submitBtn.addEventListener("click", function() {
      let command = input.value;
      
      if (command.startsWith("echo ")) {
        let text = command.substring(5);
        output.textContent = text; 
      } else if (command.startsWith("hello")) {
        output.textContent = "Hello, World!"
      } else if (command == "date") {
          let now = new Date();
          let formattedDate = now.toLocaleDateString(); // Форматируем дату
          let formattedTime = now.toLocaleTimeString(); // Форматируем время
           output.textContent = "Date and time: " + formattedDate + " " + formattedTime;
      } else if (command.startsWith("create ")) {
          let fileName = command.substring(7);
          output.textContent = "File " + fileName + " created!";
      } else if (command == "help") {
          output.textContent = "Commands: echo, hello, date, help, dial-up."
      } else if (command.startsWith("dial-up ")) {
          let username = command.substring(8);
          output.textContent = "Connect to " + username + "...";
          setTimeout(() => {
            output.textContent = "Connected with " + username + "!";
          }, 11000);
      } else {
          output.textContent = "Undefined/Unknown Command.";
      } 
    });
