// 'gallery-image'というクラスを持つ全ての画像要素を取得する
const galleryImages = document.querySelectorAll('.gallery-image');

// 取得した各画像に対して、クリックイベントを追加する
galleryImages.forEach(image => {
    // 画像がクリックされたときの処理
    image.addEventListener('click', () => {
        // 1. 黒い背景（オーバーレイ）を作成
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');

        // 2. 拡大表示用の画像要素を作成
        const modalImage = document.createElement('img');
        modalImage.src = image.src; // クリックされた画像のソースをコピー
        modalImage.alt = image.alt; // altテキストもコピー
        modalImage.classList.add('modal-content');

        // 3. オーバーレイに拡大画像を追加
        overlay.appendChild(modalImage);

        // 4. ページ（body）にオーバーレイを追加して表示
        document.body.appendChild(overlay);

        // 5. オーバーレイがクリックされたら、自身を削除して拡大表示を閉じる
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});