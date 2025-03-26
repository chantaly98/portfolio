export function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
  }
  
  export function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  
  export function setupPopupListeners() {
    // Add event listeners to each project box
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box, index) {
      var popupId = 'popup' + (index + 1); // Generate unique popup ID
      box.addEventListener('click', function() {
        showPopup(popupId);
      });
    });
  
    // Add event listeners to close buttons
    var closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(function(closeBtn) {
      closeBtn.addEventListener('click', function() {
        var popupId = closeBtn.dataset.popupId; // Get popup ID from data attribute
        hidePopup(popupId);
      });
    });
  }
  