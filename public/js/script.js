const newPostBtn = document.getElementById('newPost');
newPostBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //Get parent div
    const parentDiv = newPostBtn.parentNode;

    //Create holding div after parent div
    const newPostDiv = document.createElement('div');
    newPostDiv.setAttribute('class', 'newPostBox');
    parentDiv.insertAdjacentElement('afterend', newPostDiv);
    
    // Create a new form element
    const newForm = document.createElement('form');
    newForm.setAttribute('action', '/dashboard/newpost')
    newForm.setAttribute('method', 'POST');
    
    // Create a new text input element for the title
    const newInputTitle = document.createElement('input');
    newInputTitle.setAttribute('class', 'newPostTitle');
    newInputTitle.setAttribute('name', 'titleText');
    newInputTitle.setAttribute('type', 'text');
    newInputTitle.setAttribute('placeholder', 'Enter blog title here...');

    // Create a new text input element for the body text
    const newInputText = document.createElement('textarea');
    newInputText.setAttribute('class', 'newPostText');
    newInputText.setAttribute('name', 'bodyText');
    newInputText.setAttribute('type', 'text');
    newInputText.setAttribute('placeholder', 'Enter blog content here...');
  
    // Create a new submit button element
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'newPostSubmit');
    newButton.textContent = 'Submit New Blog';
  
    // Append the text input and submit button elements to the form element
    newForm.appendChild(newInputTitle);
    newForm.appendChild(newInputText);
    newForm.appendChild(newButton);
  
    // Append the new form element to the holding div
    newPostDiv.appendChild(newForm);
})