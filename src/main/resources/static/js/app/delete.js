const deleteBtn = document.getElementById('btn-delete');

deleteBtn.addEventListener('click', () => {
    const formId = document.getElementById('id').value;

    const url = '/api/v1/posts/' + formId;

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response => {
        if (response.ok) {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }
    }).catch(error => {
        alert(JSON.stringify(error));
    });
});