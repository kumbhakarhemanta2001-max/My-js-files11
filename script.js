
var qData = [
    { q: "যদি '+' মানে '÷', '-' মানে '+', '×' মানে '-' এবং '÷' মানে '×' হয়, তবে: [(80 + 20) ÷ 5] - (12 × 4) = ?", a: "28", opts: ["20", "24", "28", "32"] },
    { q: "সিরিজটি পূরণ করুন: 2, 12, 36, 80, 150, ?", a: "252", opts: ["210", "242", "252", "258"] },
    { q: "বিজোড় শব্দটি বাছুন:", a: "লুডু", opts: ["ক্রিকেট", "ফুটবল", "হকি", "লুডু"] },
    { q: "বেমানান সংখ্যাটি বাছুন: 126, 217, 344, 513, 630", a: "630", opts: ["217", "344", "513", "630"] },
    { q: "যদি SYSTEM-এর কোড SYSMET এবং NEARER-এর কোড AENRER হয়, তবে FRACTION-এর কোড কী?", a: "CARFNOIT", opts: ["CARFNOIT", "CARFTION", "FRACNOIT", "ARFCNOIT"] },
    { q: "A হল B-এর ভাই। C হল A-এর বাবা। D হল E-এর ভাই। E হল B-এর কন্যা। তাহলে D-এর ঠাকুরদা/দাদু কে?", a: "C", opts: ["A", "B", "C", "D"] },
    { q: "SYLLOGISM: (1) কিছু পেন গ্লাস। (2) সব গ্লাস দেওয়াল। সিদ্ধান্ত: (I) কিছু দেওয়াল পেন। (II) কিছু দেওয়াল গ্লাস।", a: "উভয়ই সঠিক", opts: ["শুধুমাত্র I সঠিক", "শুধুমাত্র II সঠিক", "উভয়ই সঠিক", "কোনটিই নয়"] },
    { q: "একজন লোক উত্তর-পশ্চিম দিকে মুখ করে ছিলেন। তিনি 90° ঘড়ির কাঁটার দিকে, তারপর 135° ঘড়ির কাঁটার বিপরীত দিকে ঘুরলেন। এখন তিনি কোন দিকে মুখ করে আছেন?", a: "পশ্চিম", opts: ["পূর্ব", "দক্ষিণ", "পশ্চিম", "উত্তর-পূর্ব"] },
    { q: "যদি 15 আগস্ট 2011 সোমবার হয়, তবে 17 সেপ্টেম্বর 2011 কী বার ছিল?", a: "শনিবার", opts: ["শুক্রবার", "শনিবার", "রবিবার", "মঙ্গলবার"] },
    { q: "ROSE : 6821 :: CHAIR : 73459 :: SEARCH : ?", a: "214673", opts: ["214673", "214763", "216473", "214637"] },
    { q: "সিরিজটি পূর্ণ করুন: AD, EH, IL, MP, ?", a: "QT", opts: ["QU", "QT", "RS", "RV"] },
    { q: "একটি সারিতে 40 জন ছাত্র আছে। সুমিত বামদিক থেকে 15তম এবং অলক ডানদিক থেকে 10তম। তাদের মাঝে কতজন আছে?", a: "15", opts: ["14", "15", "16", "17"] },
    { q: "12:1726 :: 8: ?", a: "510", opts: ["512", "510", "508", "506"] },
    { q: "প্রশ্নচিহ্নে কী বসবে? 0, 7, 26, 63, 124, ?", a: "215", opts: ["210", "215", "216", "218"] },
    { q: "যদি মাসের 3 তারিখ সোমবার হয়, তবে ওই মাসের 21 তারিখের 3 দিন পর কি বার হবে?", a: "শুক্রবার", opts: ["বৃহস্পতিবার", "শুক্রবার", "শনিবার", "বুধবার"] },
    { q: "1, 2, 6, 15, 31, 56, ?", a: "92", opts: ["82", "90", "92", "94"] },
    { q: "পাঁচটি ব্যাগ P, Q, R, S, T-এর মধ্যে P, Q-এর থেকে ভারী। R, S-এর থেকে হালকা। T, P-এর থেকে হালকা কিন্তু S-এর থেকে ভারী। সবথেকে ভারী কে?", a: "Q", opts: ["P", "Q", "R", "S"] },
    { q: "ঘড়িতে 4:20 বাজে। ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত?", a: "10°", opts: ["0°", "10°", "20°", "25°"] },
    { q: "একজন মহিলার দিকে তাকিয়ে বিজয় বললেন, 'উনি হলেন আমার দাদুর একমাত্র সন্তানের কন্যা'। মহিলাটি বিজয়ের কে হন?", a: "বোন", opts: ["মা", "বোন", "পিসি", "কন্যা"] },
    { q: "MISSING NO: 7, 15, 31, 63, 127, ?", a: "255", opts: ["254", "255", "256", "260"] },
    { q: "যদি 'MASTER' কে 'NBTUFS' লেখা হয়, তবে 'PUZZLE' কে কী লেখা হবে?", a: "QVAAFM", opts: ["QVAAFM", "QVBBFM", "QVAAGM", "RVAAFM"] },
    { q: "মানুষ : ফুসফুস :: মাছ : ?", a: "ফুলকা", opts: ["পাখনা", "ফুলকা", "চামড়া", "চোখ"] },
    { q: "বিজোড় জোড়াটি বাছুন (Square-Cube relation):", a: "9-729", opts: ["4-64", "9-729", "25-125", "49-343"] },
    { q: "A, B, C, D, E পাঁচজন বন্ধু একটি বৃত্তাকার টেবিলে কেন্দ্রের দিকে মুখ করে বসে আছে। A, E এবং B-এর মাঝে। D, C-এর ঠিক ডানদিকে। E, D-এর বামদিকে। তাহলে B-এর অবস্থান কী?", a: "A-এর বামদিকে", opts: ["A-এর বামদিকে", "A-এর ডানদিকে", "E-এর বামদিকে", "C-এর পাশে"] },
    { q: "2, 10, 30, 68, 130, ?", a: "222", opts: ["210", "220", "222", "250"] },
    { q: "যদি DELHI = 25, তবে CALCUTTA = ?", a: "64", opts: ["56", "64", "72", "81"] },
    { q: "একটি দর্পণে ঘড়ির সময় 10:25 দেখাচ্ছে। প্রকৃত সময় কত?", a: "1:35", opts: ["1:35", "2:35", "11:35", "12:35"] },
    { q: "যদি 'GO' = 32 এবং 'SHE' = 49 হয়, তবে 'SOME' = ?", a: "56", opts: ["56", "58", "62", "64"] },
    { q: "MISSING NO: 3, 7, 16, 35, ?", a: "74", opts: ["70", "72", "74", "75"] },
    { q: "5, 11, 25, 55, 117, ?", a: "243", opts: ["241", "243", "245", "239"] }
];

    var curQ = 0, userScore = 0, qTimer, secLeft = 40;

    function beginQuizNow() {
        document.getElementById("start-area").style.display = "none";
        document.getElementById("quiz-main-container").style.display = "block";
        displayNextQuestion();
    }

    function runTimer() {
        secLeft = 40;
        document.getElementById("timer-box").innerHTML = secLeft;
        clearInterval(qTimer);
        qTimer = setInterval(function() {
            secLeft--;
            document.getElementById("timer-box").innerHTML = secLeft;
            if(secLeft <= 0) { clearInterval(qTimer); revealCorrectAns(); }
        }, 1000);
    }

    function displayNextQuestion() {
        if (curQ >= qData.length) { showFinalSummary(); return; }
        runTimer();
        var currentData = qData[curQ];
        document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + " / " + qData.length;
        document.getElementById("main-q-text").innerHTML = (curQ + 1) + ". " + currentData.q;
        var optContainer = document.getElementById("main-opt-container");
        optContainer.innerHTML = "";
        currentData.opts.forEach(function(val) {
            var b = document.createElement("button");
            b.className = "opt-btn";
            b.innerHTML = val;
            b.onclick = function() { validateUserChoice(b, val); };
            optContainer.appendChild(b);
        });
    }

    function validateUserChoice(btn, selected) {
        clearInterval(qTimer);
        var allButtons = document.querySelectorAll(".opt-btn");
        allButtons.forEach(function(item) { item.disabled = true; });

        if (selected === qData[curQ].a) {
            btn.classList.add("correct-ans");
            userScore++;
            document.getElementById("score-val").innerHTML = userScore;
            document.getElementById("snd-right").play().catch(e => {});
        } else {
            btn.classList.add("wrong-ans");
            document.getElementById("snd-wrong").play().catch(e => {});
            allButtons.forEach(function(item) { 
                if(item.innerHTML === qData[curQ].a) item.classList.add("correct-ans"); 
            });
        }
        setTimeout(moveForward, 1200);
    }

    function revealCorrectAns() {
        var allButtons = document.querySelectorAll(".opt-btn");
        allButtons.forEach(function(item) {
            if(item.innerHTML === qData[curQ].a) item.classList.add("correct-ans");
            item.disabled = true;
        });
        document.getElementById("snd-wrong").play().catch(e => {});
        setTimeout(moveForward, 1200);
    }

    function moveForward() {
        curQ++;
        displayNextQuestion();
    }

    function showFinalSummary() {
        document.getElementById("question-area").style.display = "none";
        document.getElementById("quiz-progress").style.display = "none";
        document.getElementById("timer-box").style.display = "none";
        var resPanel = document.getElementById("result-area");
        var remark = document.getElementById("remark-box");
        resPanel.style.display = "block";
        var per = (userScore / qData.length) * 100;
        if(per >= 90) remark.innerHTML = "<span class='remark-outstanding'>অসাধারণ! আপনার প্রস্তুতি দারুণ। 🌟</span>";
        else if(per >= 70) remark.innerHTML = "<span class='remark-outstanding'>খুব ভালো! আরেকটু চেষ্টা করলে আরও ভালো হবে। 👍</span>";
        else remark.innerHTML = "<span class='remark-practice'>আরও অনুশীলনের প্রয়োজন। হাল ছাড়বেন না! 📚</span>";
        document.getElementById("res-score").innerHTML = "আপনার স্কোর: " + userScore + " / " + qData.length;
    }