// Log sessionStorage content
console.log("Before Removal:", sessionStorage.getItem("sessionUser"));

// Remove item
sessionStorage.removeItem("sessionUser");

// Log sessionStorage content after removal
console.log("After Removal:", sessionStorage.getItem("sessionUser"));