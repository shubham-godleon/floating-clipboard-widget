const fs = require('fs');
const path = require('path');
const { ipcRenderer } = require('electron'); 

const settingsPath = path.join(__dirname, '..', 'settings.json');
const settings = JSON.parse(fs.readFileSync(settingsPath));

document.getElementById('email').value = settings.email;
document.getElementById('resume').value = settings.resume;
document.getElementById('linkedin').value = settings.linkedin;
document.getElementById('github').value = settings.github;

document.getElementById('saveBtn').addEventListener('click', () => {
    const updated = {
      email: document.getElementById('email').value,
      resume: document.getElementById('resume').value,
      linkedin: document.getElementById('linkedin').value,
      github: document.getElementById('github').value
    };
    
    ipcRenderer.send('save-settings', updated);
});