Chrome Extension: Download Monitor
Description
The Download Monitor Chrome extension allows users to monitor and manage downloads directly from their browser. It provides a convenient way to check if any downloads are in progress and take actions accordingly.

Features
Download Monitoring: Checks if any downloads are currently in progress.
Automatic Shutdown: After all downloads complete, the extension triggers an automatic shutdown of your PC.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
Load the Extension:

Open Google Chrome.
Navigate to chrome://extensions/.
Enable Developer mode (toggle switch in the top right corner).
Click on Load unpacked and select the cloned repository folder.
Usage
When browsing and downloading files, click the extension icon to check for active downloads.
If downloads are found, the extension will send a message to a native application (configure com.vscode or adjust as per your setup).
After all downloads complete, the extension triggers an automatic shutdown of your PC.
Configuration
Ensure your Chrome extension is configured to communicate with a compatible native messaging host (com.vscode in this example).
Troubleshooting
Specified Native Messaging Host Not Found: Ensure the native messaging host is registered correctly in your system and matches the configuration in your extension.
Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Support
For any issues or questions, please open an issue.