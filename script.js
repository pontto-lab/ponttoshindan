const results = [
  {
    title: "☁️ おっとりマイペースタイプ",
    text: "無理せず自分のペースで進める、やさしい人。"
  },
  {
    title: "✨ 直感ひらめきタイプ",
    text: "ピンときたら即行動！感覚派の天才肌。"
  },
  {
    title: "📘 まじめコツコツタイプ",
    text: "努力は裏切らない。信頼される存在。"
  },
  {
    title: "🎈 自由人マイワールドタイプ",
    text: "あなたの世界観は唯一無二。"
  },
  {
    title: "🌙 闇ふわ優しいタイプ",
    text: "やさしさの裏に、ちょっと疲れやすい心。休もうね。"
  }
];

function showResult() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");

  const loadingText = document.getElementById("loadingText");
  loadingText.textContent = "ぽん…";

  setTimeout(() => loadingText.textContent = "ぽん……", 400);
  setTimeout(() => loadingText.textContent = "ぽんっ！！", 800);

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    const r = results[Math.floor(Math.random() * results.length)];
    document.getElementById("resultTitle").textContent = r.title;
    document.getElementById("resultText").textContent = r.text;
    document.getElementById("result").classList.remove("hidden");
  }, 1100);
}
