export const skills = [
    { title: "前端設計", value: ["HTML", "CSS：Scss、Sass", "UI框架：Bootstrap、MUI、Tailwind"] },
    // { title: "前端測試", value: ["單元測試：Jest", "React Testing Library"] },
    { title: "資料庫", value: ["MongoDB", "Oracle SQL"] },
    { title: "JS / 前端框架 / 後端框架", value: ["jQuery", "React.js (Next.js / Vite.js)：React Hook、Redux", "Ajax / Axios：串接 API ", "Node.js、Express.js、Flask"] },
    { title: "其他工具", value: ["版本控制：Git", "Wireframe/Prototype：Whimsical、Figma", "Python", "VBA"] },
    { title: "英文能力：多益750分", value: [] },
]


export const projects = [
    { 
        title: "Profolio", 
        link: "https://profolio-nine.vercel.app/",
        src: "/images/Profolio",
        img: 1,
        desc: [
            "以React.js + TypeScript開發前端網站，UI框架則使用Tailwind", 
            "可根據使用者瀏覽器設定切換為深/淺色模式", 
            "作品集照片點開可左右切換瀏覽其他作品集圖片", 
            "使用技術: React.js、Tailwind"
        ] },
    { 
        title: "Hotel Booking Web", 
        link: "https://booking-web-khaki.vercel.app/",
        src: "/images/BookingHotel",
        img: 8,
        desc: [
            "以Mern進行全端開發，前端以Vite.js搭配SCSS，後端使用Node.js + Express.js + MongoDB", 
            "可設定地點/日期/人數查詢上有空房的飯店，並在登入的狀態下進行訂房", 
            "使用技術: Vite.js、SCSS、Node.js、Express.js"
        ] },
    { 
        title: "Car Showcase", 
        link: "https://car-showcase-xi-one.vercel.app/",
        src: "/images/CarShowcase",
        img: 3,
        desc: [
            "以Next.js+TypeScript開發，Tailwind設計UI，資料串接RapidAPI", 
            "可輸入汽車品牌或型號搜尋，並且可篩選汽車燃料類型及年份", 
            "點擊汽車View More可觀看汽車照片及具體汽車規格", 
            "使用技術: Next.js、TypeScript、Tailwind"
        ] }
]

export const work = [
    { 
        title: "經紀商品PM - 富邦證券",
        desc: [
            "營運報表系統建置：與部門同仁進行需求訪談以建置營運報表系統，前端使用HTML、CSS、Bootstrap及jQuery進行開發，後端使用Flask建置，系統功能含營運數據檢視/查詢、上傳檔案比對資料及產製報表讓使用者下載",
            "規劃系統開發/優化項目：跨部門與業務通路、資訊單位、數位金融部門溝通，規劃系統開發及優化項目，如T+0(應收在途交割款借貸)系統開發、因應升息調整客戶借款利率之系統調整優化、CRM(客戶關係管理)系統開發規格之商品模組(融資/不限用途借貸)需求規劃",
            "報表數據分析/自動化：自SQL撈取營運數據進行分析，使用Python/VBA自動抓取交易所統計資料及產製績效報表，及自動寄發信件予旗下分公司，簡化80%以上人工作業",
            "業務經營管理：商品業務績效追蹤及管理，並進行內部行銷活動規劃及成效追蹤",
        ]
    }
]

export const school = [
    {
        type: "row",
        title: "學歷",
        desc: [
            "2018/09－2020/06 國立高雄科技大學 財務管理所",
            "2014/09－2018/06 國立高雄科技大學 財務管理系",
        ],
    },
    // {
    //     type: "row",
    //     title: "前端",
    //     desc: [
    //         "網頁設計與應用 - 大學學分",
    //         "動畫互動網頁程式入門 - 墨雨設計/Hahow",
    //         "動畫互動網頁特效入門 - 墨雨設計/Hahow",
    //         "學米私塾課",
    //     ],
    // },
]