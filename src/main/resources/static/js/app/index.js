const save = document.getElementById('btn-save');

const saveMethod = () => {
    save.addEventListener('click', () => {

        const formTitle = document.getElementById('title').value;
        const formContent = document.getElementById('content').value;
        const formAuthor = document.getElementById('author').value;

        const article = {
            title: formTitle,
            content: formContent,
            author: formAuthor
        }

        const url = '/api/v1/posts';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(response => {
            if (response.ok) {
                alert('글이 등록 되었습니다.')
                window.location.href = '/';
            }
        }).catch(error => {
            alert(JSON.stringify(error));
        });

    })
};

saveMethod();
