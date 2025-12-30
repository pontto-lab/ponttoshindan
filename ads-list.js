// 🛒 ぽんっとラボ 共通アフィリエイト・プール
const adPool = {
    // 【金運・成功】系
    money: [
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fnep-mens%2Ftaka-100154%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/nep-mens/cabinet/takasago/100154w.jpg?_ex=128x128" alt="" style="border: none;" /><br>金運招福 パイソン長財布</a>',
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fsaifuland%2Fbysa011025%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/saifuland/cabinet/bysa011/bysa011025.jpg?_ex=128x128" alt="" style="border: none;" /><br>3Dレーザー彫 神龍 水晶玉</a>',
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fparkerofficial%2F10000241%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/parkerofficial/cabinet/07474156/11881629/imgrc0187445337.jpg?_ex=128x128" alt="" style="border: none;" /><br>成功者の筆記具 PARKER ソネット</a>'
    ],
    // 【恋愛・対人】系
    love: [
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fapeacefulworld%2Fapw-003%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/apeacefulworld/cabinet/apw-003/apw-003-01.jpg?_ex=128x128" alt="" style="border: none;" /><br>LOVE フレグランスミスト</a>',
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Ftrendicon%2F026iuhat%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/trendicon/cabinet/03717280/03719930/03736352/026iuhat-01.jpg?_ex=128x128" alt="" style="border: none;" /><br>恋が叶う スワロフスキーネックレス</a>'
    ],
    // 【浄化・癒やし・健康】系
    health: [
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Flucas%2Flucas-pocket%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/lucas/cabinet/lucas2/pocket4_top.jpg?_ex=128x128" alt="" style="border: none;" /><br>ホワイトセージ 浄化スプレー</a>',
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fnissoplus%2Fnp-fx21wt-2s%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/nissoplus/cabinet/item/2s2/main/230713_2s01.jpg?_ex=128x128" alt="" style="border: none;" /><br>超軽量 筋膜リリースガン</a>'
    ],
    // 【その他・ラッキーアイテム】
    random: [
        '<a href="//af.moshimo.com/af/c/click?a_id=5322069&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fnplanning%2Fnp-cl-2026-ct-588%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade"><img src="//thumbnail.image.rakuten.co.jp/@0_mall/nplanning/cabinet/11177680/11177721/imgrc0136083393.jpg?_ex=128x128" alt="" style="border: none;" /><br>2026年 吉日カレンダー</a>'
    ]
};

// 📢 広告を表示させるための魔法の関数
function showRandomAd(categoryId, elementId) {
    const targetEl = document.getElementById(elementId);
    if (!targetEl) return;
    
    // 指定されたカテゴリか、なければランダムから選ぶ
    const ads = adPool[categoryId] || adPool['random'];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    
    targetEl.innerHTML = `
        <div style="background:#fffcf5; border:1px solid #ffd700; border-radius:12px; padding:10px; margin-top:20px; text-align:center;">
            <p style="font-size:10px; font-weight:bold; color:#ba68c8; margin-bottom:5px;">✨ あなたへの開運アイテム ✨</p>
            <div style="font-size:11px;">${randomAd}</div>
        </div>
    `;
}
