
alert("otions");


function save_options() {
  var terms = document.getElementById('Terms').value;
  
  chrome.storage.sync.set({
    excludeTerms: terms,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('Status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

/*
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  */
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value terms = "A4C" and "Groupon"
  chrome.storage.sync.get({
    excludeTerms: ["A4C", "Groupon"]
  }, function(items) {
    document.getElementById('Terms').value = "Test";
  });

/*
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
  */
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('Save').addEventListener('click',    save_options);