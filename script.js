// 为了不眼花，我先放 6 张测试卡牌。
// 完整的 100 条 CAQ 题库
// 完整的 100 条 CAQ 双语题库
const caqData = [
    {id:1, text_cn:"具有批判性、怀疑态度，不容易被打动。", text_en:"Is critical, skeptical, not easily impressed."},
    {id:2, text_cn:"可靠且有责任感。", text_en:"Is dependable and responsible."},
    {id:3, text_cn:"兴趣广泛（无论这些兴趣是深是浅）。", text_en:"Has a wide range of interests (regardless of how deep or superficial)."},
    {id:4, text_cn:"是一个健谈的人。", text_en:"Is a talkative person."},
    {id:5, text_cn:"乐于奉献，对他人慷慨。", text_en:"Is giving, generous toward others (regardless of the motivation)."},
    {id:6, text_cn:"挑剔、一丝不苟、仔细且精确。", text_en:"Is fastidious, meticulous, careful and precise."},
    {id:7, text_cn:"倾向于保守价值观；强调传统价值观和信仰。", text_en:"Favors conservative values in a variety of areas; emphasizes traditional values and beliefs."},
    {id:8, text_cn:"似乎具有高度的智力能力。", text_en:"Appears to have a high degree of intellectual capacity."},
    {id:9, text_cn:"对不确定性和复杂性感到不适。", text_en:"Is uncomfortable with uncertainty and complexity."},
    {id:10, text_cn:"在应对压力和焦虑时会出现躯体症状。", text_en:"Develops physical symptoms in reaction to stress and anxiety."},
    {id:11, text_cn:"对亲近的人具有保护欲。", text_en:"Is protective of those close to him/her."},
    {id:12, text_cn:"倾向于自我防御；无法承认个人缺点或失败。", text_en:"Tends to be self-defensive; unable to acknowledge personal shortcomings or failures."},
    {id:13, text_cn:"容易被冒犯；对批评或侮辱很敏感。", text_en:"Takes offense easily; is sensitive to anything that can be construed as a criticism or insult."},
    {id:14, text_cn:"真正的顺从；容易妥协。", text_en:"Genuinely submissive; accepts domination comfortably; gives in easily."},
    {id:15, text_cn:"擅长富有想象力的游戏、角色扮演和幽默等社交技巧。", text_en:"Is skilled in social techniques of imaginative play, pretending and humor."},
    {id:16, text_cn:"具有内省性；审视自己的想法和感受。", text_en:"Is introspective; thinks about self; examines own thoughts and feelings."},
    {id:17, text_cn:"表现出同情心和体贴。", text_en:"Behaves in a sympathetic and considerate manner."},
    {id:18, text_cn:"主动制造幽默；自发地发表有趣的言论。", text_en:"Initiates humor; makes spontaneous funny remarks."},
    {id:19, text_cn:"寻求他人的安慰和肯定。", text_en:"Seeks reassurance from others."},
    {id:20, text_cn:"行为举止迅速。", text_en:"Behaves and acts quickly."},
    {id:21, text_cn:"唤起他人的养育欲；让别人想保护ta。", text_en:"Arouses nurturant feelings in others; behaves in ways that lead others to feel caring."},
    {id:22, text_cn:"感到生活缺乏意义。", text_en:"Feels a lack of meaning in life."},
    {id:23, text_cn:"倾向于将自己的错误和失败归咎于他人。", text_en:"Tends to blame others for own mistakes, failures, and shortcomings."},
    {id:24, text_cn:"以自己理性、合乎逻辑和客观而自豪。", text_en:"Prides self on being rational, logical and objective."},
    {id:25, text_cn:"具有过度的自我控制；不必要地推迟享乐。", text_en:"Has excessive self-control; postpones pleasures unnecessarily."},
    {id:26, text_cn:"富有成效；能把事情做完。", text_en:"Is productive; gets things done."},
    {id:27, text_cn:"对他人居高临下；表现得比别人优越。", text_en:"Is condescending toward others; acts superior to others."},
    {id:28, text_cn:"倾向于引起人们的喜爱和接纳。", text_en:"Tends to arouse liking and acceptance in people."},
    {id:29, text_cn:"常被他人寻求建议和安慰。", text_en:"Is turned to or sought out for advice and reassurance."},
    {id:30, text_cn:"面对挫折和逆境时容易放弃和退缩。", text_en:"Gives up and withdraws when possible in the face of frustration and adversity."},
    {id:31, text_cn:"认为自己外表有吸引力。", text_en:"Regards self as physically attractive."},
    {id:32, text_cn:"似乎意识到自己给别人留下的印象。", text_en:"Seems to be aware of the impression he/she makes on others."},
    {id:33, text_cn:"态度平静、放松。", text_en:"Is calm, relaxed in manner."},
    {id:34, text_cn:"易怒；对微小的挫折反应过度。", text_en:"Is irritable; overreacts to minor frustrations."},
    {id:35, text_cn:"热情；有建立亲密关系的能力；有同情心。", text_en:"Has warmth; has the capacity for close relationships; compassionate."},
    {id:36, text_cn:"倾向于削弱、阻挠或暗中破坏他人。", text_en:"Tends to undermine, obstruct, or sabotage other people."},
    {id:37, text_cn:"狡猾、欺骗、具有操纵欲；利用他人。", text_en:"Is guileful, deceitful, manipulative, opportunistic; takes advantage of others."},
    {id:38, text_cn:"对他人怀有敌意。", text_en:"Has hostility toward others."},
    {id:39, text_cn:"以不同寻常的方式思考问题；思维非传统。", text_en:"Thinks about ideas in unusual ways; has unconventional thought processes."},
    {id:40, text_cn:"通常感到恐惧；易受真实或想象的威胁伤害。", text_en:"Is generally fearful; is vulnerable to real or imagined threat."},
    {id:41, text_cn:"做出道德判断；以对错评判自己和他人。", text_en:"Makes moral judgments; judges self and others in terms of right and wrong."},
    {id:42, text_cn:"不愿致力于明确的行动；倾向拖延做决定。", text_en:"Reluctant to commit self to any definite course of action; tends to delay making decisions."},
    {id:43, text_cn:"具有夸张或生动的面部表情或手势。", text_en:"Has large or vivid facial expressions or gestures."},
    {id:44, text_cn:"评估他人的动机；试图弄清行动背后的意图。", text_en:"Evaluates the motives of others; tries to figure out intentions."},
    {id:45, text_cn:"心理脆弱；应对压力的能力较差。", text_en:"Is psychologically frail, vulnerable; has poor ability to cope with stress."},
    {id:46, text_cn:"倾向于幻想和做白日梦。", text_en:"Tends to fantasize and daydream."},
    {id:47, text_cn:"容易感到内疚（即使自己没有过错）。", text_en:"Has a readiness to feel guilty."},
    {id:48, text_cn:"与人保持距离；避免亲密关系。", text_en:"Keeps people at a distance; avoids close relationships."},
    {id:49, text_cn:"基本上不信任大多数人；质疑他们的动机。", text_en:"Is basically distrustful of people in general; questions their motivations."},
    {id:50, text_cn:"在态度和行为上不可预测且多变。", text_en:"Is unpredictable and changeable in attitudes and behavior."},
    {id:51, text_cn:"高度重视智力和认知层面的事物。", text_en:"Places high value on intellectual and cognitive matters."},
    {id:52, text_cn:"行为自信果断；敢于发声以获得想要的东西。", text_en:"Behaves in an assertive fashion; not afraid to express opinions."},
    {id:53, text_cn:"冲动；缺乏自我控制；无法推迟享乐。", text_en:"Is impulsive; has little self-control; unable to postpone pleasure."},
    {id:54, text_cn:"善于交际、合群；看重与他人在一起。", text_en:"Is sociable, gregarious; emphasizes being with others."},
    {id:55, text_cn:"有自我挫败倾向；破坏自己获得想要东西的机会。", text_en:"Is self-defeating; acts in ways that frustrate own chances."},
    {id:56, text_cn:"对幽默有反应并懂得欣赏。", text_en:"Responds to and appreciates humor."},
    {id:57, text_cn:"是一个有趣、丰富多彩的人。", text_en:"Is an interesting, colorful person."},
    {id:58, text_cn:"似乎享受感官体验（触觉、味觉、身体接触等）。", text_en:"Appears to enjoy sensuous experiences (e.g., touch, taste, smell)."},
    {id:59, text_cn:"过度关心自己的身体、健康。", text_en:"Is concerned about own body, its health and adequacy of functioning."},
    {id:60, text_cn:"具有洞察力，非常了解自己的需求、动机和行为。", text_en:"Has insight into and understands own needs, motives and behavior; knows self well."},
    {id:61, text_cn:"喜欢别人依赖自己；喜欢被需要。", text_en:"Likes others to be dependent on him/her; likes to be thought needed."},
    {id:62, text_cn:"倾向于叛逆和不顺从。", text_en:"Tends to be rebellious and nonconforming."},
    {id:63, text_cn:"受社会压力影响（如受欢迎程度、社会规范）。", text_en:"Is influenced by social pressures."},
    {id:64, text_cn:"具有社会洞察力；对他人想法和感受的线索保持警觉。", text_en:"Is socially perceptive; is alert to cues from other people."},
    {id:65, text_cn:"抵制限制和规则；试图看自己能逃脱哪些规矩。", text_en:"Resists limits and rules; sees what he/she can get away with."},
    {id:66, text_cn:"享受审美印象；对美学敏感（艺术、音乐等）。", text_en:"Enjoys aesthetic impressions; is aesthetically sensitive."},
    {id:67, text_cn:"自我放纵；倾向于娇惯自己。", text_en:"Is self-indulgent; tends to pamper himself or herself."},
    {id:68, text_cn:"骨子里是焦虑的。", text_en:"Is basically anxious."},
    {id:69, text_cn:"对任何请求帮忙的事很敏感；觉得被强加于人。", text_en:"Is sensitive to anything that can be construed as a demand or request for favors."},
    {id:70, text_cn:"行为合乎道德；有个人价值体系并忠于它。", text_en:"Behaves ethically; has a personal value system and is faithful to it."},
    {id:71, text_cn:"有野心；设定很高的个人目标。", text_en:"Is ambitious; sets high personal goals."},
    {id:72, text_cn:"对自己是否胜任感到怀疑；有不足感。", text_en:"Has doubts about own adequacy as a person; appears to have feelings of inadequacy."},
    {id:73, text_cn:"倾向于在许多情况中看到性暗示。", text_en:"Tends to see sexual overtones in many situations."},
    {id:74, text_cn:"对自己感到满意；主观上没有自我烦恼。", text_en:"Feels satisfied with self; is unaware of self-concern."},
    {id:75, text_cn:"容易理解和描述。", text_en:"Is easy to understand and describe."},
    {id:76, text_cn:"想象他人的需求感受与自己相同；将感情投射到他人身上。", text_en:"Imagines that the needs, wishes and feelings of others are the same as his/her own."},
    {id:77, text_cn:"交往时显得直率、坦白、坦诚。", text_en:"Appears straightforward, candid, frank in dealing with others."},
    {id:78, text_cn:"觉得被生活欺骗和迫害；自怜。", text_en:"Feels cheated and victimized by life; self-pitying; feels sorry for self."},
    {id:79, text_cn:"倾向于反复思考，有挥之不去、占据头脑的想法。", text_en:"Tends to ruminate and have persistent, preoccupying thoughts."},
    {id:80, text_cn:"对他人有性兴趣。", text_en:"Is sexually interested in others."},
    {id:81, text_cn:"外表有吸引力；长相好看。", text_en:"Is physically attractive; is good looking."},
    {id:82, text_cn:"情绪波动大；情绪起伏不定。", text_en:"Has fluctuating moods; moods go up and down."},
    {id:83, text_cn:"能看透重要问题的核心；不被无关细节困住。", text_en:"Able to see to the heart of important problems; does not get sidetracked."},
    {id:84, text_cn:"开朗、快乐。", text_en:"Is cheerful, happy."},
    {id:85, text_cn:"倾向通过行动和非语言行为交流，而不是语言。", text_en:"Tends to communicate through actions, deeds, and non-verbal behavior."},
    {id:86, text_cn:"否认焦虑和冲突的存在；欺骗自己一切都好。", text_en:"Denies the presence of anxiety and conflicts; deceives self into thinking everything is fine."},
    {id:87, text_cn:"倾向于把清晰简单的情况解释得很复杂。", text_en:"Tends to interpret clear-cut, simple situations in complicated ways."},
    {id:88, text_cn:"具有个人魅力。", text_en:"Is personally charming."},
    {id:89, text_cn:"将自己与他人比较；对地位、外貌、成就等差异保持警觉。", text_en:"Compares self with others; is alert to real or imagined differences."},
    {id:90, text_cn:"关心哲学问题（宗教、价值观、生命意义等）。", text_en:"Is concerned with philosophical problems, for example, religions, values, meaning of life."},
    {id:91, text_cn:"看重自己和他人的权力。", text_en:"Values power in self and others."},
    {id:92, text_cn:"具有社交泰然自若的风度；在社交场合轻松自如。", text_en:"Has social poise and presence; appears socially at ease."},
    {id:93, text_cn:"表现出符合文化定义的男性化或女性化风格。", text_en:"Behaves in a masculine/feminine style or manner."},
    {id:94, text_cn:"直接表达敌意和愤怒感。", text_en:"Expresses hostility and angry feelings directly."},
    {id:95, text_cn:"喜欢给建议；爱管别人闲事。", text_en:"Gives advice; concerns self with the business of others."},
    {id:96, text_cn:"看重独立性和自主性；强调免受他人干涉的自由。", text_en:"Values own independence and autonomy; emphasizes freedom to think and act."},
    {id:97, text_cn:"是一个不动感情的人；倾向于不体验强烈情绪。", text_en:"Is an unemotional person; tends not to experience strong emotions."},
    {id:98, text_cn:"口头表达流利；能很好地表达想法。", text_en:"Is verbally fluent; can express ideas well in words."},
    {id:99, text_cn:"具有自我戏剧化的倾向；容易夸大感受；寻求关注。", text_en:"Is self-dramatizing; theatrical; prone to exaggerate feelings; seeks attention."},
    {id:100, text_cn:"以同样的方式对待每个人。", text_en:"Relates to everyone in the same way."}
];

// 下面接原有的 const categories = [...] 等代码

const categories = [
    { id: 1, name: "1级 (极不符合)", limit: 5 },
    { id: 2, name: "2级", limit: 8 },
    { id: 3, name: "3级", limit: 12 },
    { id: 4, name: "4级", limit: 16 },
    { id: 5, name: "5级 (中立)", limit: 18 },
    { id: 6, name: "6级", limit: 16 },
    { id: 7, name: "7级", limit: 12 },
    { id: 8, name: "8级", limit: 8 },
    { id: 9, name: "9级 (极符合)", limit: 5 }
];

const unsortedArea = document.getElementById('unsorted-area');
const sortBoard = document.getElementById('sort-board');

// 更新 1-9 级计数器
function updateCounters() {
    categories.forEach(cat => {
        const col = document.getElementById(`category-${cat.id}`);
        const countSpan = document.getElementById(`count-${cat.id}`);
        const currentCount = col.querySelectorAll('.caq-card').length;
        
        countSpan.innerText = currentCount;
        
        if (currentCount === cat.limit) {
            countSpan.style.color = '#ef4444'; 
            countSpan.style.fontWeight = 'bold';
        } else {
            countSpan.style.color = '#334155';
            countSpan.style.fontWeight = 'normal';
        }
    });
}

// 初始化 1-9 级列
categories.forEach(cat => {
    const col = document.createElement('div');
    col.className = 'category-column';
    col.id = `category-${cat.id}`;
    col.innerHTML = `<div class="category-title">${cat.name} <br> ( <span id="count-${cat.id}">0</span> / ${cat.limit} )</div>`;
    sortBoard.appendChild(col);

    col.addEventListener('dragover', (e) => { e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
    
    col.addEventListener('drop', (e) => {
        e.preventDefault();
        col.classList.remove('drag-over');
        
        const currentCount = col.querySelectorAll('.caq-card').length;
        if (currentCount >= cat.limit) {
            alert(`【${cat.name}】的名额已经满啦（最多 ${cat.limit} 张）！`);
            return; 
        }

        const draggedCardId = e.dataTransfer.getData('text/plain');
        col.appendChild(document.getElementById(draggedCardId));
        updateCounters();
    });
});

// 给粗筛区（3个大池子）和发牌区添加拖拽接收功能（它们没有数量限制）
const dropZones = ['primary-dislike', 'primary-neutral', 'primary-like', 'unsorted-area'];
dropZones.forEach(zoneId => {
    const zone = document.getElementById(zoneId);
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const draggedCardId = e.dataTransfer.getData('text/plain');
        zone.appendChild(document.getElementById(draggedCardId));
        updateCounters(); // 卡片移出 1-9 级时，更新数字
    });
});

// 生成卡片
caqData.forEach(item => {
    const cardElement = document.createElement('div');
    cardElement.className = 'caq-card';
    cardElement.id = `card-${item.id}`;
    cardElement.draggable = true;
    cardElement.innerHTML = `
        <div class="id-number"># ${item.id}</div>
        <div class="card-text">${item.text_cn}</div>
        <div class="card-text-en">${item.text_en}</div>
    `;

    cardElement.addEventListener('dragstart', (e) => {
        cardElement.classList.add('dragging');
        e.dataTransfer.setData('text/plain', cardElement.id);
    });

    cardElement.addEventListener('dragend', () => cardElement.classList.remove('dragging'));
    unsortedArea.appendChild(cardElement);
});
// --- 一键导出功能 ---
document.getElementById('export-btn').addEventListener('click', () => {
    // 检查是不是 100 张牌都分进 1-9 级了
    let totalAssignedCards = 0;
    for (let i = 1; i <= 9; i++) {
        const col = document.getElementById(`category-${i}`);
        totalAssignedCards += col.querySelectorAll('.caq-card').length;
    }

    if (totalAssignedCards < 100) {
        alert(`测试未完成！\n你目前只把 ${totalAssignedCards} 张卡片放入了 1-9 级评分区。\n请将剩余的 ${100 - totalAssignedCards} 张卡片全部分类后再导出。`);
        return;
    }

    // 构建 CSV 内容 (加上 BOM 头解决 Excel 中文乱码问题)
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "评级 (1-9),卡片序号,卡片描述\n";

    // 遍历 1-9 级，收集数据
    for (let i = 1; i <= 9; i++) {
        const col = document.getElementById(`category-${i}`);
        const cards = col.querySelectorAll('.caq-card');
        cards.forEach(card => {
            const id = card.id.replace('card-', '');
            const text = card.querySelector('.card-text').innerText;
            // 把数据拼成一行行的 CSV 格式，处理一下文本里的逗号避免错位
            csvContent += `${i},${id},"${text}"\n`; 
        });
    }

    // 触发下载
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "我的CAQ个人评估结果.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});