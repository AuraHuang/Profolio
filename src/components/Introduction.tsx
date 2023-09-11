import React from 'react'
import { SectionTitle } from '../subcomponents'

const Introduction = () => {
  return (
    <div id='introduction' className=' pt-10'>
        <SectionTitle title={"自傳"} />
        <div className=' p-5 rounded border'>
            <h6>【關於我】</h6>
            我是一位來自台南的北漂青年，對新事物總是充滿好奇且熱於學習。接觸前端開發後，喜歡將畫面實踐出來獲得的成就感，目標轉職為前端工程師。
            <br />
            <br />
            <h6>【前端開發初體驗】</h6>
            前份工作任職於富邦證，擔任產品企劃專員，因同仁們多使用Excel進行資料處理，但當數據量大時，容易發生處理速度緩慢或當機等問題。為了解決這個問題，我主動與部門同仁進行需求訪談，並<b>獨立建置營運報表系統提供同仁進行資料查詢/處理、比對上傳資料及下載彙整報表等功能</b>，自建置完成上線後已持續使用2年，<b>中間亦陸續優化介面及優化細部功能，提升使用者體驗</b>，這也是第一次深入接觸前端開發，對於<b>HTML、CSS、JS及Flask</b>都有更深的認識。
            <br />
            <br />
            <h6>【跨單位/領域合作經驗】</h6>
            身為產品企劃專員，常需要跨部門協作，這使我對於<b>系統架構和開發流程有更深入理解</b>，如規劃T+0新業務系統開發和升息調整客戶借款利率的系統調整優化，這些<b>專案涉及系統邏輯設計、UI介面刻劃及使用者測試</b>，這些經驗使我能夠有效地與團隊合作，並且能更<b>了解如何和使用者/工程師溝通</b>。
            <br />
            <br />
            <h6>【自學和轉職目標】</h6>
            儘管非本科系，但我持續積極自學，以建立堅實的基礎並提升前端開發技能，並<b>規劃下一階段學習Vue.js及前端測試工具(如Jest及React Testing Library)</b>，期許能成為具備卓越技術能力和高度工具掌握度開發人員。
            
        </div>
    </div>
  )
}

export default Introduction