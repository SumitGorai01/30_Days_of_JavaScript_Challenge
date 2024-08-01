function logLocalStorage() {
    console.log('localStorage content:', JSON.stringify(localStorage));
}

function removeItem(key) {
    console.log('Before removal:');
    logLocalStorage();
    localStorage.removeItem(key);
    console.log('After removal:');
    logLocalStorage();
}

window.onload = function() {
    // Setup initial data
    localStorage.setItem('item1', 'Value 1');
    localStorage.setItem('item2', 'Value 2');

    // Remove an item and log the localStorage content
    removeItem('item2'); 
};