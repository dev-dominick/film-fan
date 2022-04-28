const newFormHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector("#new_review").value.trim();
 

  if (content) {
    const response = await fetch(`/api/reviews/`, {
      method: 'POST',
      body: JSON.stringify({content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('#add-review')
  .addEventListener('click', newFormHandler);
