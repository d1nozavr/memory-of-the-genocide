document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        if (content.style.display === 'block') content.style.maxHeight = content.scrollHeight + "px";

        else content.style.maxHeight = null;
    });
});
