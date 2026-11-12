"use strict";
const copy = {
  en: {
    walkTitle: "Try a cloud passing over a solar panel",
    walkDownload: "Download example CSV",
    walkBack: "Previous step",
    walkNext: "Next step",
    walkload: "1. Load the example",
    walkloadBody: "Download the example CSV below. In REDT, select Start simulator, then Simulation. In Data, choose Open training file and select redt-mppt-example.csv. Keep Use timestamps enabled. The file contains 121 one-second samples with a simulated cloud passing from about 30 to 70 seconds.",
    walkloadTip: "In Plot → Full series, select irradiance to see the drop and recovery before pressing Play.",
    walktrain: "2. Train on the CSV",
    walktrainBody: "Open Training. If this is your first file, the counter should show Train on 1 of 1. Press Train MPPT. REDT uses the file’s light and temperature data to fit a voltage target derived from its simulated I–V curve.",
    walktrainTip: "Try Generate variants to create synthetic profiles with the same timestamps. For independent evaluation, reserve a different measured day and keep it out of training.",
    walkfield: "3. Configure the panels",
    walkfieldBody: "Open Field. For a simple trial, choose one panel and switch the MPPT scope to isolated panel. For an array trial, set Rows and Columns up to 5×5 and select series string. Use the matrix to focus or mark panels and adjust Tilt, connection and model assignment.",
    walkfieldTip: "Use Camera and Heat map to inspect the field. Weather controls let you test manual conditions such as cloud cover, wind and sun angle.",
    walkrun: "4. Replay the cloud event",
    walkrunBody: "In Compare, choose a 60 s Energy period before starting. Use Data → Restart file to return to the beginning, then press Play. The simulator evaluates every controller on the same conditions.",
    walkrunTip: "At 60 simulated seconds the Wh totals stop accumulating. Try Full run to include the recovery after the cloud.",
    walkcompare: "5. Read the results",
    walkcompareBody: "Compare shows power now (W) and energy accumulated during the selected interval (Wh). Open Power charts and look for the dip near the cloud event. Compare P&O, hill climbing, PID, fixed voltage and the trained model.",
    walkcompareTip: "This example replays the training file. To test generalization, replay a separate measured file. PID follows the simulated MPP reference.",
    walktools: "6. Explore and export",
    walktoolsBody: "Use Plot to switch between environment, measurements and MPPT curves. Full series compares the input files, and Training → Models and validation shows classifier results. The Physical Twin view exposes readings and logs for the instrument.",
    walktoolsTip: "Use the desktop version for live UDP and file dialogs to save comparisons as CSV or JSON and export the trained model.",

    skip:"Skip to content",research:"Research",energy:"Energy systems",simulator:"Simulator",
    institution:"Yamagata University (Asharif Laboratory)",
    title:"Renewable Energy\nDigital Twins",
    intro:"Explore how sunlight, wind, and temperature differences can power distributed systems. REDT connects physical experiments with digital models so researchers can replay measurements and study operating conditions.",
    solarAction:"Explore the solar simulator",systemsAction:"Meet the energy systems ↘",heroCaption:"FROM FIELD MEASUREMENT TO SIMULATION",
    researchTitle:"A bridge between experiments and models",
    "brandName": "Renewable Energy Digital Twins",
    "researchCopy": "Follow a measurement from the physical twin to the simulator, then compare the virtual response with the original readings.",
    "flowLabel": "REDT DATA FLOW",
    "flowMeasure": "Measure",
    "flowLog": "Log",
    "flowModel": "Model",
    "flowCompare": "Compare",
    "physicalTitle": "Physical twin",
    "physicalAlt": "Physical REDT device with a solar panel, sensors and antenna",
    "physicalCopy": "The instrument measures light, temperature and electrical output, then sends readings to the local logger.",
    "physicalTag": "Sensor readings",
    "loggerAlt": "REDT Data Logger interface",
    "loggerCopy": "The logger runs on a local Windows server. It receives and records timestamped measurements as CSV and JSONL.",
    "loggerTag": "Local server · CSV / JSONL",
    "studioAlt": "REDT Signal Studio showing a fit over measured light data",
    "studioCopy": "Analyze the measured time series, fit a model and export observed or synthetic series for the simulator.",
    "studioTag": "Analysis · scenario CSV",
    "virtualTitle": "Virtual twin",
    "simulatorAlt": "Virtual solar test site in the REDT simulator",
    "virtualCopy": "Load a scenario in the simulator and compare the virtual response with the physical twin under matching conditions.",
    "virtualTag": "Measured ↔ simulated",
    "feedbackTitle": "Use the comparison to refine the model",
    "feedbackCopy": "Bring simulation results back to Signal Studio for comparison with the measured series. Differences help guide the next model or experiment.",
    "loggerDownload": "Download Data Logger v0.1 · Windows ZIP ↓",
    "studioDownload": "Download Signal Studio v1.13 · Windows ZIP ↓",
    "pauseMotion": "Pause motion",
    "resumeMotion": "Resume motion",
    energyTitle:"Three ways to harvest energy",example:"RESEARCH EXAMPLE",solar:"Solar",wind:"Wind",heat:"Thermoelectric",prev:"Previous slide",next:"Next slide",
    available:"AVAILABLE MODULE",launchTitle:"Enter the solar lab",
    launchCopy:"Switch between the physical twin and a virtual solar field. Adjust the weather and panel layout, inspect a single unit, and compare time-series plots.",
    launchButton:"Open REDT simulator ↗",roadmap:"Small wind turbine and Seebeck effect modules are planned.",simLabel:"SOLAR PV / DIGITAL TWIN",
    snowTitle:"Designing for snowy regions",snowCopy:"The presentation proposes a snow-assisted thermoelectric charging station. A temperature difference can generate electricity through the Seebeck effect.",
    credit:"Illustrations and research concepts from the REDT project presentation.",source:"Site repository ↗",
    back:"← Back to the project",playerTitle:"REDT Simulator",playerNote:"For keyboard controls, click inside the simulator first. The browser version uses sample data or local files. Live UDP requires the desktop version.",
    start:"Start simulator",loading:"Loading the Unity simulator…",playerFailure:"Could not load the Unity build. Reload the page to try again.",
    unavailable:"The Unity browser build is not online yet.",full:"Fullscreen",desktop:"Windows download",building:"The simulator files are being prepared."
  },
  ja: {
    walkTitle: "太陽光パネルを通過する雲を試す",
    walkDownload: "サンプルCSVをダウンロード",
    walkBack: "前のステップ",
    walkNext: "次のステップ",
    walkload: "1. サンプルを読み込む",
    walkloadBody: "下のCSVをダウンロードします。Start simulator、Simulationの順に選び、DataのOpen training fileでCSVを開きます。Use timestampsを有効にします。1秒間隔の121点があり、約30〜70秒に雲の通過を再現します。",
    walkloadTip: "Plot → Full seriesで日射強度を選ぶと、実行前に低下と回復を確認できます。",
    walktrain: "2. CSVで学習する",
    walktrainBody: "Trainingを開きます。最初のファイルならTrain on 1 of 1と表示されます。Train MPPTを押すと、日射と温度から模擬I–V曲線に基づく目標電圧を学習します。",
    walktrainTip: "Generate variantsで時刻を保持した合成系列を作れます。独立評価には別の日の実測データを学習から除外して使用します。",
    walkfield: "3. パネルを設定する",
    walkfieldBody: "Fieldを開き、最初は単独パネルを選びます。アレイを試すには最大5×5に設定して直列ストリングを選びます。マトリクスでパネルを選択・マークし、傾斜、接続、モデル割当を調整できます。",
    walkfieldTip: "CameraとHeat mapで配置を確認できます。Weatherでは雲量、風、太陽角度などを手動設定できます。",
    walkrun: "4. 雲の通過を再生する",
    walkrunBody: "開始前にCompareでEnergy periodを60秒に設定します。Data → Restart fileで先頭に戻り、Playを押します。各制御方式は同じ条件で評価されます。",
    walkrunTip: "60秒でWhの積算が止まります。Full runにすると雲通過後の回復も含められます。",
    walkcompare: "5. 結果を読む",
    walkcompareBody: "Compareには瞬時電力（W）と選択期間の積算電力量（Wh）が表示されます。Power chartsで雲による低下を確認し、各制御方式を比較します。",
    walkcompareTip: "この例では学習ファイルを再生します。汎化性能は別の実測ファイルで評価します。PIDは模擬MPP電圧に追従します。",
    walktools: "6. その他の機能と出力",
    walktoolsBody: "Plotでは環境、測定値、MPPTのグラフを切り替えられます。Full seriesで入力系列を比較し、Training → Models and validationで分類結果を確認できます。Physical Twinでは機器の測定値とログを確認できます。",
    walktoolsTip: "UDP受信と保存ダイアログによる比較結果のCSV・JSON保存、学習モデルの出力にはデスクトップ版を使います。",

    skip:"本文へ移動",research:"研究概要",energy:"エネルギーシステム",simulator:"シミュレーター",
    institution:"山形大学（アシャリフ研究室）",
    title:"再生可能エネルギーの\nデジタルツイン",
    intro:"太陽光・風・温度差を活用した分散型エネルギーシステムを探ります。REDTは実機実験とデジタルモデルをつなぎ、測定データを再現しながら運転条件を検討する研究です。",
    solarAction:"太陽光シミュレーターを見る",systemsAction:"エネルギーシステムを知る ↘",heroCaption:"現地計測からシミュレーションへ",
    researchTitle:"実験とモデルをつなぐ",
    "brandName": "再生可能エネルギーのデジタルツイン",
    "researchCopy": "実機ツインで得た測定値をシミュレーターまでたどり、仮想モデルの応答を元の測定値と照合します。",
    "flowLabel": "REDTのデータの流れ",
    "flowMeasure": "計測",
    "flowLog": "記録",
    "flowModel": "モデル化",
    "flowCompare": "比較",
    "physicalTitle": "実機ツイン",
    "physicalAlt": "太陽光パネル、センサー、アンテナを備えたREDTの実機",
    "physicalCopy": "実機で光、温度、電気出力を計測し、測定値をローカルのロガーに送信します。",
    "physicalTag": "センサーの測定値",
    "loggerAlt": "REDT Data Loggerの画面",
    "loggerCopy": "ローカルのWindowsサーバー上で測定値を受信し、時刻付きのCSVとJSONLとして記録します。",
    "loggerTag": "ローカルサーバー ・ CSV / JSONL",
    "studioAlt": "光の測定値と近似曲線を表示したREDT Signal Studioの画面",
    "studioCopy": "計測した時系列を解析してモデルを当てはめ、実測または合成した時系列をシミュレーター用に出力します。",
    "studioTag": "時系列解析 ・ シナリオCSV",
    "virtualTitle": "仮想ツイン",
    "simulatorAlt": "REDTシミュレーターの仮想太陽光実験場",
    "virtualCopy": "シナリオを読み込み、条件をそろえて仮想モデルの応答を実機ツインの測定値と照合します。",
    "virtualTag": "実測値 ↔ シミュレーション値",
    "feedbackTitle": "比較結果をモデルの改善に活かす",
    "feedbackCopy": "シミュレーション結果をSignal Studioに戻し、実測時系列と比較します。差をもとに次のモデルや実験を検討します。",
    "loggerDownload": "Data Logger v0.1をダウンロード ・ Windows ZIP ↓",
    "studioDownload": "Signal Studio v1.13をダウンロード ・ Windows ZIP ↓",
    "pauseMotion": "アニメーションを停止",
    "resumeMotion": "アニメーションを再開",
    energyTitle:"自然エネルギーを活用する三つの方式",example:"研究例",solar:"太陽光",wind:"風力",heat:"熱電",prev:"前のスライド",next:"次のスライド",
    available:"利用可能なモジュール",launchTitle:"太陽光ラボを開く",
    launchCopy:"実機ツインと仮想太陽光発電所を切り替え、気象やパネル配置を調整します。個別パネルの確認や時系列グラフの比較もできます。",
    launchButton:"REDTシミュレーターを開く ↗",roadmap:"小型風力タービンとゼーベック効果のモジュールは開発予定です。",simLabel:"太陽光発電 ／ デジタルツイン",
    snowTitle:"雪国に向けたシステム設計",snowCopy:"研究発表では、雪を活用した熱電式充電ステーションが提案されています。ゼーベック効果により、温度差から電力を得られます。",
    credit:"イラストと研究構想はREDTの研究発表資料に基づきます。",source:"サイトのリポジトリ ↗",
    back:"← プロジェクトへ戻る",playerTitle:"REDT シミュレーター",playerNote:"キーボードを使うには、まず画面内をクリックしてください。Web版ではサンプルやローカルファイルを使用できます。UDP受信にはデスクトップ版が必要です。",
    start:"シミュレーターを起動",loading:"Unityシミュレーターを読み込み中…",playerFailure:"Unityビルドを読み込めませんでした。ページを再読み込みしてください。",
    unavailable:"UnityのWeb版はまだ公開されていません。",full:"全画面",desktop:"Windows版をダウンロード",building:"シミュレーターのファイルを準備中です。"
  }
};
const slides = [
  { image:"solar.webp",color:"#f3e8c9",
    en:["SOLAR SIMULATOR AVAILABLE","Solar photovoltaics","Photovoltaic cells turn sunlight into electricity. REDT compares irradiance, shade and panel temperature with electrical behavior.","An array digital twin with adjustable clouds, tilt and series connections.","REDT solar mascot carrying a photovoltaic panel"],
    ja:["太陽光シミュレーター利用可能","太陽光発電","太陽電池は光を電気に変換します。REDTでは日射強度・影・パネル温度が電気特性に与える影響を比較します。","雲、傾斜角、直列接続を調整できる太陽光発電アレイのデジタルツイン。","太陽光パネルを持つREDTのマスコット"] },
  { image:"wind.webp",color:"#dce8d8",
    en:["SIMULATOR PLANNED","Small wind turbines","Wind turns a rotor that drives a generator. Turbine behavior depends on wind speed, startup and shutdown thresholds, and the electrical load.","Dynamic analysis of small wind turbines, including cut-in and cut-out conditions.","REDT palm tree mascot with a small wind turbine"],
    ja:["シミュレーター開発予定","小型風力タービン","風でローターを回転させ、発電機を駆動します。風速、起動・停止の条件、電気負荷が運転に影響します。","運転開始・停止風速を含む小型風力タービンの動的解析。","小型風車を持つヤシの木のREDTマスコット"] },
  { image:"thermal.webp",color:"#e0eaf2",
    en:["SIMULATOR PLANNED","Thermoelectric generation","The Seebeck effect produces a voltage across a temperature difference. A thermoelectric module can use that voltage to supply electrical power.","A snow-assisted bicycle charging station that uses a hot side and a cold side.","REDT evergreen mascot carrying thermoelectric equipment"],
    ja:["シミュレーター開発予定","熱電発電","ゼーベック効果では、温度差によって電圧が生じます。熱電モジュールはその電圧を利用して電力を供給できます。","高温側と低温側を利用する、雪国向けの熱電式自転車充電ステーション。","熱電機器を備えた針葉樹のREDTマスコット"] }
];
let language = new URLSearchParams(location.search).get("lang");
if (!["en","ja"].includes(language)) { try { language = localStorage.getItem("redt.lang"); } catch {} }
if (!["en","ja"].includes(language)) language = navigator.language.startsWith("ja") ? "ja" : "en";
let active = 0;
const carousel = document.querySelector("#energy-carousel");

function renderSlide(index) {
  active = (index + slides.length) % slides.length;
  if (!carousel) return;
  const slide = slides[active];
  const [status,title,description,example,alt] = slide[language];
  const mascot = document.querySelector("#mascot");
  mascot.src = slide.image;
  mascot.alt = alt;
  document.querySelector("#system-mark").src = slide.image.replace(".webp", "-mark.webp");
  mascot.parentElement.style.background = slide.color;
  document.querySelector("#slide-index").textContent = `0${active + 1} / 03`;
  document.querySelector("#slide-status").textContent = status;
  document.querySelector("#slide-title").textContent = title;
  document.querySelector("#slide-description").textContent = description;
  document.querySelector("#slide-example").textContent = example;
  document.querySelectorAll("[data-slide]").forEach(button => button.setAttribute("aria-pressed", String(Number(button.dataset.slide) === active)));
}
function applyLanguage(lang) {
  language = lang;
  try { localStorage.setItem("redt.lang",lang); } catch {}
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-alt]").forEach(image => { image.alt = copy[lang][image.dataset.alt]; });
  document.querySelectorAll("[data-t]").forEach(node => { if (copy[lang][node.dataset.t]) node.textContent = copy[lang][node.dataset.t]; });
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed",String(button.dataset.lang === lang)));
  if (carousel) {
    carousel.setAttribute("aria-label",copy[lang].energy);
    document.querySelector("#previous").setAttribute("aria-label",copy[lang].prev);
    document.querySelector("#next").setAttribute("aria-label",copy[lang].next);
    renderSlide(active);
  }
  document.dispatchEvent(new CustomEvent("redt-language",{detail:lang}));
}
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click",() => applyLanguage(button.dataset.lang)));
document.querySelectorAll("[data-slide]").forEach(button => button.addEventListener("click",() => renderSlide(Number(button.dataset.slide))));
document.querySelector("#previous")?.addEventListener("click",() => renderSlide(active - 1));
document.querySelector("#next")?.addEventListener("click",() => renderSlide(active + 1));
carousel?.addEventListener("keydown",event => {
  const delta = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
  if (delta) { event.preventDefault(); renderSlide(active + delta); }
});
const motionButton = document.querySelector("#flow-motion");
if (motionButton) {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  motionButton.hidden = reducedMotion.matches;
  reducedMotion.addEventListener("change", event => { motionButton.hidden = event.matches; });
  motionButton.addEventListener("click", () => {
    const paused = document.body.classList.toggle("motion-paused");
    motionButton.dataset.t = paused ? "resumeMotion" : "pauseMotion";
    motionButton.textContent = copy[language][motionButton.dataset.t];
  });
}
applyLanguage(language);

const guideButtons = [...document.querySelectorAll("[data-guide]")];
const guidePanels = document.querySelectorAll("[data-guide-panel]");
const guideNavigation = document.querySelectorAll("[data-guide-direction]");
let guideStep = 0;

function showGuideStep(index) {
  if (index < 0 || index >= guideButtons.length) return;
  guideStep = index;
  const current = guideButtons[index].dataset.guide;
  guideButtons.forEach((step, i) => step.setAttribute("aria-pressed", String(i === index)));
  guidePanels.forEach(panel => { panel.hidden = panel.dataset.guidePanel !== current; });
  guideNavigation.forEach(button => {
    const next = index + Number(button.dataset.guideDirection);
    button.disabled = next < 0 || next >= guideButtons.length;
  });
}
guideButtons.forEach((button, index) => button.addEventListener("click", () => showGuideStep(index)));
guideNavigation.forEach(button => button.addEventListener("click", () => showGuideStep(guideStep + Number(button.dataset.guideDirection))));
