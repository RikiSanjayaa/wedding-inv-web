export function loadComments() {
    return JSON.parse(localStorage.getItem("comments")) || [];
  }
  
  export function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  