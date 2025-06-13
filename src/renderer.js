const { clipboard, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

const settingsPath = path.join(__dirname, '..', 'settings.json');
let settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));

document.getElementById('emailBtn').addEventListener('click', () => {
  clipboard.writeText(settings.email);
});

document.getElementById('resumeBtn').addEventListener('click', () => {
  clipboard.writeText(settings.resume);
});

document.getElementById('linkedinBtn').addEventListener('click', () => {
  clipboard.writeText(settings.linkedin);
});

document.getElementById('githubBtn').addEventListener('click', () => {
  clipboard.writeText(settings.github);
});

