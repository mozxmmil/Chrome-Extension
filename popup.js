document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button1");

  button.addEventListener("click", () => {
    chrome.downloads.search({ state: "in_progress" }, (result) => {
      if (result.length <= 0) {
        alert("No downloads in progress");
        button.style.cursor = "not-allowed";
      } else {
        // Send message to native application
        chrome.runtime.sendNativeMessage(
          "com.vscode",
          { action: "executeTask" },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error(
                `Error communicating with native messaging host: ${chrome.runtime.lastError.message}`
              );
            } else {
              console.log("Message sent successfully");
              // Optionally perform additional actions after sending message
            }
          }
        );
      }
    });
  });
});
