export const navItems = [
  { name: "について", link: "#about" },
  { name: "プロジェクト", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "接触", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "私はクライアントとのコラボレーションを優先し、オープンなコミュニケーションを促進します",
    
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "タイムゾーン通信に柔軟に対応",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "技術スタック",
    description: "私は常に改善しようと努めています",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "開発に情熱を持つ技術愛好家。",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "現在、AIと機械学習の分野に取り組んでいます",
    description: "内部情報",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "一緒にプロジェクトを始めてみませんか。",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "探索できる3D太陽系惑星",
    des: "Three.js を使用した魅力的な 3D 惑星シミュレーションで太陽系の驚異を探索しましょう.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - ビデオ会議アプリ",
    des: "Yoom でビデオ会議を簡素化しましょう。同僚や友人とシームレスに接続できます。",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI画像SaaS - Canvaアプリケーション",
    des: "最新のテクノロジー スタックを使用した AI 機能と支払いおよびクレジット システムを備えた、本物の Software-as-a-Service アプリです。",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "アニメーション化された Apple Iphone 3D ウェブサイト",
    des: "GSAP アニメーションと Three.js 3D 効果を組み合わせて、Apple iPhone 15 Pro の Web サイトを再作成しました。",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Shivam とのコラボレーションは、本当に楽しかったです。彼のプロ意識、迅速さ、そして優れた成果を出すための献身は、私たちのプロジェクト全体を通して明らかでした。Adrian の開発のあらゆる側面に対する熱意は、本当に際立っています。Web サイトとブランドの向上を目指すなら、Adrian は理想的なパートナーです。",
    name: "ドウェイン・ジョンソン",
    title: "監督",
  },
  {
    quote:
      "Shivamと一緒に働くのは素晴らしかったです。",
    name: "マイケル・ジョンソン",
    title: "アルファストリームテクノロジーズディレクター",
  },
];

export const companies = [
  {
    id: 1,
    name: "曇り",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "アプリ書き込み",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "ホスティング",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "ストリーム",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "ドッカー.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "ソフトウェア エンジニアリング インターン - Intel Corporation",
    desc: "LLM を使用して、AI カリキュラムと評価機能を備えた最新の学習管理システム (LMS) を開発しました。ChatGPT にヒントを得たデータベース ツールである SQL Copilot の開発を主導しました。",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "データアナリストインターン - Jindal Steel and Power",
    desc: "記述的分析手法を実装した結果、ビジネス パターンの特定における効率が 20% 向上しました。Qlik Sense ダッシュボードと視覚化を作成し、レポートとデータ分析の時間を 30% 短縮しました。",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "ビジュアルコンピューティングインターン　ー　マラッカ工科大学",
    desc: "OpenCV 技術を適用して、多様なデータセット全体でアルゴリズムのパフォーマンスを強化しました。処理速度と画像認識アルゴリズムが最適化され、パターン認識タスクの精度が 30% 向上しました。",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "フリーランス開発者",
    desc: "初期の構想から展開まで、さまざまなプロジェクトの開発を主導しました。React.js や Next.js などの最新テクノロジーを使用して、動的で応答性の高い Web アプリケーションの構築を専門としています。",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Suzuki0916",
  },
  {
    id: 2,
    img: "/twit.svg",
    // url: "https://x.com/shivxmr",
  },
  {
    id: 3,
    img: "/link.svg",
    // url: "https://www.linkedin.com/in/shivxmr/",
  },
];
