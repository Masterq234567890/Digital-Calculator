document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('animation-container').style.display = 'none';
        document.getElementById('main-page').style.display = 'flex';
        document.getElementById('master-logo-top').style.display = 'block';
    }, 5000);

    const codeBtn = document.getElementById('code-btn');
    const diagramBtn = document.getElementById('diagram-btn');
    const mainPage = document.getElementById('main-page');
    const codeSection = document.getElementById('code-section');
    const diagramSection = document.getElementById('diagram-section');
    const masterLogo = document.getElementById('master-logo-top');
    const copyBtn = document.getElementById('copy-btn');
    const codeContent = document.getElementById('code-content');

    function showSection(section, subscribeId, containerId) {
        mainPage.style.display = 'none';
        masterLogo.style.display = 'none';
        section.style.display = 'flex';
        document.getElementById(subscribeId).style.display = 'block';
        
        setTimeout(() => {
            document.getElementById(subscribeId).style.display = 'none';
            document.getElementById(containerId).style.display = 'flex';
            masterLogo.style.display = 'block';
        }, 3000);
    }

    codeBtn.addEventListener('click', () => {
        showSection(codeSection, 'subscribe-animation-code', 'code-box-container');
    });

    diagramBtn.addEventListener('click', () => {
        showSection(diagramSection, 'subscribe-animation-diagram', 'diagram-box-container');
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(codeContent.innerText).then(() => {
            alert('Code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
