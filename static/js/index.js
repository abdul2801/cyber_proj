const settingsToggle = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const siteContainer = document.getElementById('site-container');

const changeApiButton = document.getElementById('change-api-button');
const changeApiPanel = document.getElementById('change-api-panel')

const darkenedOverlay = document.getElementById('overlay');

const submitApiChangesButton = document.getElementById('update-api-button');

const apiKeyInput = document.getElementById('api-key-input');
const cseIdInput = document.getElementById('cse-id-input');

var cseId;
var apiKey;

  
  settingsToggle.addEventListener('click', () => {
    if (settingsPanel.classList.contains('hidden')) {
      settingsPanel.classList.remove('hidden');
      
      setTimeout(() => {
        settingsPanel.style.opacity = '1';
        settingsPanel.style.visibility = 'visible';
      }, 10); 
    } else {
      
      settingsPanel.style.opacity = '0';
      setTimeout(() => {
        settingsPanel.style.visibility = 'hidden';
        settingsPanel.classList.add('hidden');
      }, 500); 
    }
  });

  changeApiButton.addEventListener('click', () => {
    if (changeApiPanel.classList.contains('hidden')) {
      changeApiPanel.classList.remove('hidden');
      darkenedOverlay.style.display = "block";
      
      setTimeout(() => {
        darkenedOverlay.style.opacity = '1';
        changeApiPanel.style.opacity = '1';
        changeApiPanel.style.visibility = 'visible';
      }, 10); 
    } else {
      
      darkenedOverlay.style.opacity = '0';
      changeApiPanel.style.opacity = '0';
      setTimeout(() => {
        darkenedOverlay.style.display = "none"
        changeApiPanel.style.visibility = 'hidden';
        changeApiPanel.classList.add('hidden');
      }, 500); 
    }
  });

  submitApiChangesButton.addEventListener('click', () => {
    if (changeApiPanel.classList.contains('hidden')) {
      changeApiPanel.classList.remove('hidden');
      darkenedOverlay.style.display = "block";
      
      setTimeout(() => {
        darkenedOverlay.style.opacity = '1';
        changeApiPanel.style.opacity = '1';
        changeApiPanel.style.visibility = 'visible';
      }, 10); 
    } else {
      
      darkenedOverlay.style.opacity = '0';
      changeApiPanel.style.opacity = '0';
      setTimeout(() => {
        darkenedOverlay.style.display = "none"
        changeApiPanel.style.visibility = 'hidden';
        changeApiPanel.classList.add('hidden');
      }, 500); 
    }
    setCookie("apiKey", apiKeyInput.value);
    setCookie("cseID", cseIdInput.value);
    updateLoadedApi();
  });

  siteContainer.addEventListener('click', () => {
    if (!settingsPanel.classList.contains('hidden')) {
      settingsPanel.style.opacity = '0';
      setTimeout(() => {
        settingsPanel.style.visibility = 'hidden';
        settingsPanel.classList.add('hidden');
      }, 500);
    }

    if (!changeApiPanel.classList.contains('hidden')) {
      changeApiPanel.style.opacity = '0';
      darkenedOverlay.style.opacity = '0';
      setTimeout(() => {
        changeApiPanel.style.visibility = 'hidden';
        darkenedOverlay.style.display = "none";
        changeApiPanel.classList.add('hidden');
      }, 500);
    }
  })
  
  document.addEventListener("DOMContentLoaded", function() {
    updateLoadedApi();
  });

  function setCookie(name, value) {
    const expires = new Date();
    
    expires.setFullYear(expires.getFullYear() + 25);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function checkCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      
      if (cookie.startsWith(name + '=')) {
        return true; 
      }
    }
    return false; 
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      
      if (cookie.startsWith(name + '=')) {
        
        const cookieParts = cookie.split('=');
        if (cookieParts.length === 2) {
          
          return cookieParts[1];
        }
      }
    }
    return null; 
  }

function updateApi() {
  if(checkCookie("apiKey") && checkCookie("cseID")) {
    apiKey = getCookie("apiKey");
    cseId = getCookie("cseID");
  }
}

function updateLoadedApi() {
  const apiLabel = document.getElementById('api-key-label');
  const cseIdLabel = document.getElementById('cse-id-label');

  const apiLabelPanel = document.getElementById('api-key-label-panel');
  const cseIdLabelPanel = document.getElementById('cse-id-label-panel');

  apiLabel.textContent = "API Key: " + getCookie("apiKey");
  cseIdLabel.textContent = "CSE ID: " + getCookie("cseID");

  apiLabelPanel.textContent = "Current API Key: " + getCookie("apiKey");
  cseIdLabelPanel.textContent = "Current CSE ID: " + getCookie("cseID");
}