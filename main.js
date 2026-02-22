const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

async function loadModule(name) {
    const container = document.getElementById('screen-content');
    try {
        const response = await fetch(`modules/${name}.html`);
        if (!response.ok) throw new Error();
        container.innerHTML = await response.text();
        
        // Перезапуск скриптов внутри подгруженного модуля
        const scripts = container.querySelectorAll('script');
        scripts.forEach(s => {
            const newScript = document.createElement("script");
            newScript.text = s.text;
            document.body.appendChild(newScript).parentNode.removeChild(newScript);
        });
    } catch (e) {
        container.innerHTML = `<div style="text-align:center; padding:50px;">ОШИБКА ДОСТУПА: МОДУЛЬ ${name.toUpperCase()} НЕ НАЙДЕН</div>`;
    }
}

// По умолчанию загружаем главную
window.onload = () => loadModule('home');