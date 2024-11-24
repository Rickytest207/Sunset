document.addEventListener('DOMContentLoaded', function() {
    // Functionality for showing the definition box on click
    const header = document.getElementById('volunteers-header');
    const definitionBox = document.getElementById('volunteers-definition');
    
    header.addEventListener('click', function() {
        if (definitionBox.style.display === 'block') {
            definitionBox.style.display = 'none';
        } else {
            definitionBox.style.display = 'block';
        }
    });

    // Functionality for autoplaying videos when they come into view
    const videos = document.querySelectorAll('video, iframe');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.tagName === 'IFRAME') {
                    video.contentWindow.postMessage('{"method":"play"}', '*');
                } else {
                    video.play();
                }
            } else {
                const video = entry.target;
                if (video.tagName === 'IFRAME') {
                    video.contentWindow.postMessage('{"method":"pause"}', '*');
                } else {
                    video.pause();
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videos.forEach(video => {
        observer.observe(video);
    });
});
