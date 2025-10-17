// 'gallery-image'というクラスを持つ全ての画像要素を取得する
const galleryImages = document.querySelectorAll('.gallery-image');

// 取得した各画像に対して、クリックイベントを追加する
galleryImages.forEach(image => {
    // 画像がクリックされたときの処理
    image.addEventListener('click', () => {
        // --- モーダル要素の作成 ---
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');

        const container = document.createElement('div');
        container.classList.add('modal-container');

        const modalImage = document.createElement('img');
        modalImage.classList.add('modal-content');
        modalImage.src = image.src; // srcを先に設定

        // --- ヘッダー要素の作成 ---
        const header = document.createElement('div');
        header.classList.add('modal-header');

        const altText = document.createElement('span');
        altText.classList.add('modal-alt-text');
        altText.innerText = image.alt;

        const closeButton = document.createElement('span');
        closeButton.classList.add('modal-close-button');
        closeButton.innerHTML = '&times;';

        // --- 要素の組み立て ---
        header.appendChild(altText);         // ヘッダーにaltテキストを追加
        header.appendChild(closeButton);     // ヘッダーに閉じるボタンを追加
        
        container.appendChild(header);       // コンテナにヘッダーを追加
        container.appendChild(modalImage);   // コンテナに画像を追加

        overlay.appendChild(container);      // オーバーレイにコンテナを追加
        document.body.appendChild(overlay);  // ページにオーバーレイを追加して表示

        // ★★★★★ ここが重要 ★★★★★
        // 画像が読み込まれてサイズが確定した後に、コンテナの幅を画像の幅に設定する
        modalImage.onload = () => {
            container.style.width = `${modalImage.offsetWidth}px`;
        };

        // --- イベントリスナーの設定 ---
        const closeModal = () => {
            document.body.removeChild(overlay);
        };

        closeButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
        
        container.addEventListener('click', (e) => {
            e.stopPropagation(); // コンテナ（画像やヘッダー）のクリックでは閉じないようにする
        });
    });
});