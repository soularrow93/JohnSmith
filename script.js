// script.js

// Get folders
const folders = ['Photos', 'Documents', 'Music'];

// Display folders
const folderList = document.getElementById('folders');

folders.forEach(folder => {
  let li = document.createElement('li');
  li.textContent = folder;

  folderList.appendChild(li); 
});

// Get IP and port
const ip = '192.168.1.100'; // Use actual IP
const port = '5500'; // Use actual port 

// Get URLs  
const localhostURL = `http://localhost:${port}`;
const lanURL = `http://${ip}:${port}`;
const wanURL = `http://${externalIP}:${port}`; // Get public IP

// Display URLs
const urlList = document.getElementById('url');

let li1 = document.createElement('li');
li1.textContent = `Localhost: ${localhostURL}`;

let li2 = document.createElement('li');
li2.textContent = `LAN: ${lanURL} (on same network)`;

let li3 = document.createElement('li'); 
li3.textContent = `WAN: ${wanURL} (external network)`;

urlList.appendChild(li1);
urlList.appendChild(li2); 
urlList.appendChild(li3);