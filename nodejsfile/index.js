import path from "path";
import { homedir } from "os";
import { exec } from "child_process";

const DownloadFolder = path.join(homedir(), "Downloads");

// Function to execute the task
const executeTask = () => {
  if (!DownloadFolder) return;
  
  exec(`ls ${DownloadFolder}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error listing files: ${error.message}`);
      return;
    }

    const data = stdout.split("\n");
    const hasCrDownloads = data.some((file) => file.includes(".crdownload"));

    if (!hasCrDownloads) {
      exec("shutdown /a", (err, stdout, stderr) => {
        if (err) {
          console.error(`Error canceling shutdown: ${err.message}`);
        } else {
          console.log("Shutdown canceled successfully");
        }
      });
    }
  });
};

// Listen for messages from Chrome extension
process.stdin.on("data", (data) => {
  try {
    const message = JSON.parse(data);
    if (message.action === "executeTask") {
      executeTask();
    }
  } catch (error) {
    console.error(`Error parsing message: ${error.message}`);
  }
});
