const update = document.getElementById('btn-update');

const updateMethod = () => {

    update.addEventListener('click', () => {
        console.log('update 준비');
        const formTitle = document.getElementById('title').value;
        const formContent = document.getElementById('content').value;
        const formId = document.getElementById('id').value;

        const article = {
            title: formTitle,
            content: formContent
        }

        const url = '/api/v1/posts/' + formId;

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(response => {
            if (response.ok) {
                alert('글이 수정되었습니다.');
                window.location.href = '/';
            }
        }).catch(error => {
            alert(JSON.stringify(error));
        });
    });
}

updateMethod();