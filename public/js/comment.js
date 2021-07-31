const commentFormHandler = async function(event) {
    event.preventDefault();

    const comment_id = document.querySelector('#newComment').dataset.postid;
    const new_comment = document.querySelector('#postComment').value.trim();

    if (new_comment) {
        await fetch('/api/comments', {
            method : 'POST',
            body: JSON.stringify({
                comment_id,
                new_comment,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document
    .querySelector('#newComment')
    .addEventListener('submit', commentFormHandler);


