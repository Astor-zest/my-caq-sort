window.onload = function() {
    try {
        // --- 1. 题库与专家数据 ---
        const caqData = [
            {id:1, text_cn:"具有批判性、怀疑态度，不容易被打动。", text_en:"Is critical, skeptical, not easily impressed."}, {id:2, text_cn:"可靠且有责任感。", text_en:"Is dependable and responsible."}, {id:3, text_cn:"兴趣广泛（无论这些兴趣是深是浅）。", text_en:"Has a wide range of interests (regardless of how deep or superficial)."}, {id:4, text_cn:"是一个健谈的人。", text_en:"Is a talkative person."}, {id:5, text_cn:"乐于奉献，对他人慷慨。", text_en:"Is giving, generous toward others (regardless of the motivation)."}, {id:6, text_cn:"挑剔、一丝不苟、仔细且精确。", text_en:"Is fastidious, meticulous, careful and precise."}, {id:7, text_cn:"倾向于保守价值观；强调传统价值观和信仰。", text_en:"Favors conservative values in a variety of areas; emphasizes traditional values and beliefs."}, {id:8, text_cn:"似乎具有高度的智力能力。", text_en:"Appears to have a high degree of intellectual capacity."}, {id:9, text_cn:"对不确定性和复杂性感到不适。", text_en:"Is uncomfortable with uncertainty and complexity."}, {id:10, text_cn:"在应对压力和焦虑时会出现躯体症状。", text_en:"Develops physical symptoms in reaction to stress and anxiety."},
            {id:11, text_cn:"对亲近的人具有保护欲。", text_en:"Is protective of those close to him/her."}, {id:12, text_cn:"倾向于自我防御；无法承认个人缺点或失败。", text_en:"Tends to be self-defensive; unable to acknowledge personal shortcomings or failures."}, {id:13, text_cn:"容易被冒犯；对批评或侮辱很敏感。", text_en:"Takes offense easily; is sensitive to anything that can be construed as a criticism or insult."}, {id:14, text_cn:"真正的顺从；容易妥协。", text_en:"Genuinely submissive; accepts domination comfortably; gives in easily."}, {id:15, text_cn:"擅长富有想象力的游戏、角色扮演和幽默等社交技巧。", text_en:"Is skilled in social techniques of imaginative play, pretending and humor."}, {id:16, text_cn:"具有内省性；审视自己的想法和感受。", text_en:"Is introspective; thinks about self; examines own thoughts and feelings."}, {id:17, text_cn:"表现出同情心和体贴。", text_en:"Behaves in a sympathetic and considerate manner."}, {id:18, text_cn:"主动制造幽默；自发地发表有趣的言论。", text_en:"Initiates humor; makes spontaneous funny remarks."}, {id:19, text_cn:"寻求他人的安慰和肯定。", text_en:"Seeks reassurance from others."}, {id:20, text_cn:"行为举止迅速。", text_en:"Behaves and acts quickly."},
            {id:21, text_cn:"唤起他人的养育欲；让别人想保护ta。", text_en:"Arouses nurturant feelings in others; behaves in ways that lead others to feel caring."}, {id:22, text_cn:"感到生活缺乏意义。", text_en:"Feels a lack of meaning in life."}, {id:23, text_cn:"倾向于将自己的错误和失败归咎于他人。", text_en:"Tends to blame others for own mistakes, failures, and shortcomings."}, {id:24, text_cn:"以自己理性、合乎逻辑和客观而自豪。", text_en:"Prides self on being rational, logical and objective."}, {id:25, text_cn:"具有过度的自我控制；不必要地推迟享乐。", text_en:"Has excessive self-control; postpones pleasures unnecessarily."}, {id:26, text_cn:"富有成效；能把事情做完。", text_en:"Is productive; gets things done."}, {id:27, text_cn:"对他人居高临下；表现得比别人优越。", text_en:"Is condescending toward others; acts superior to others."}, {id:28, text_cn:"倾向于引起人们的喜爱和接纳。", text_en:"Tends to arouse liking and acceptance in people."}, {id:29, text_cn:"常被他人寻求建议和安慰。", text_en:"Is turned to or sought out for advice and reassurance."}, {id:30, text_cn:"面对挫折和逆境时容易放弃和退缩。", text_en:"Gives up and withdraws when possible in the face of frustration and adversity."},
            {id:31, text_cn:"认为自己外表有吸引力。", text_en:"Regards self as physically attractive."}, {id:32, text_cn:"似乎意识到自己给别人留下的印象。", text_en:"Seems to be aware of the impression he/she makes on others."}, {id:33, text_cn:"态度平静、放松。", text_en:"Is calm, relaxed in manner."}, {id:34, text_cn:"易怒；对微小的挫折反应过度。", text_en:"Is irritable; overreacts to minor frustrations."}, {id:35, text_cn:"热情；有建立亲密关系的能力；有同情心。", text_en:"Has warmth; has the capacity for close relationships; compassionate."}, {id:36, text_cn:"倾向于削弱、阻挠或暗中破坏他人。", text_en:"Tends to undermine, obstruct, or sabotage other people."}, {id:37, text_cn:"狡猾、欺骗、具有操纵欲；利用他人。", text_en:"Is guileful, deceitful, manipulative, opportunistic; takes advantage of others."}, {id:38, text_cn:"对他人怀有敌意。", text_en:"Has hostility toward others."}, {id:39, text_cn:"以不同寻常的方式思考问题；思维非传统。", text_en:"Thinks about ideas in unusual ways; has unconventional thought processes."}, {id:40, text_cn:"通常感到恐惧；易受真实或想象的威胁伤害。", text_en:"Is generally fearful; is vulnerable to real or imagined threat."},
            {id:41, text_cn:"做出道德判断；以对错评判自己和他人。", text_en:"Makes moral judgments; judges self and others in terms of right and wrong."}, {id:42, text_cn:"不愿致力于明确的行动；倾向拖延做决定。", text_en:"Reluctant to commit self to any definite course of action; tends to delay making decisions."}, {id:43, text_cn:"具有夸张或生动的面部表情或手势。", text_en:"Has large or vivid facial expressions or gestures."}, {id:44, text_cn:"评估他人的动机；试图弄清行动背后的意图。", text_en:"Evaluates the motives of others; tries to figure out intentions."}, {id:45, text_cn:"心理脆弱；应对压力的能力较差。", text_en:"Is psychologically frail, vulnerable; has poor ability to cope with stress."}, {id:46, text_cn:"倾向于幻想和做白日梦。", text_en:"Tends to fantasize and daydream."}, {id:47, text_cn:"容易感到内疚（即使自己没有过错）。", text_en:"Has a readiness to feel guilty."}, {id:48, text_cn:"与人保持距离；避免亲密关系。", text_en:"Keeps people at a distance; avoids close relationships."}, {id:49, text_cn:"基本上不信任大多数人；质疑他们的动机。", text_en:"Is basically distrustful of people in general; questions their motivations."}, {id:50, text_cn:"在态度和行为上不可预测且多变。", text_en:"Is unpredictable and changeable in attitudes and behavior."},
            {id:51, text_cn:"高度重视智力和认知层面的事物。", text_en:"Places high value on intellectual and cognitive matters."}, {id:52, text_cn:"行为自信果断；敢于发声以获得想要的东西。", text_en:"Behaves in an assertive fashion; not afraid to express opinions."}, {id:53, text_cn:"冲动；缺乏自我控制；无法推迟享乐。", text_en:"Is impulsive; has little self-control; unable to postpone pleasure."}, {id:54, text_cn:"善于交际、合群；看重与他人在一起。", text_en:"Is sociable, gregarious; emphasizes being with others."}, {id:55, text_cn:"有自我挫败倾向；破坏自己获得想要东西的机会。", text_en:"Is self-defeating; acts in ways that frustrate own chances."}, {id:56, text_cn:"对幽默有反应并懂得欣赏。", text_en:"Responds to and appreciates humor."}, {id:57, text_cn:"是一个有趣、丰富多彩的人。", text_en:"Is an interesting, colorful person."}, {id:58, text_cn:"似乎享受感官体验（触觉、味觉、身体接触等）。", text_en:"Appears to enjoy sensuous experiences (e.g., touch, taste, smell)."}, {id:59, text_cn:"过度关心自己的身体、健康。", text_en:"Is concerned about own body, its health and adequacy of functioning."}, {id:60, text_cn:"具有洞察力，非常了解自己的需求、动机和行为。", text_en:"Has insight into and understands own needs, motives and behavior; knows self well."},
            {id:61, text_cn:"喜欢别人依赖自己；喜欢被需要。", text_en:"Likes others to be dependent on him/her; likes to be thought needed."}, {id:62, text_cn:"倾向于叛逆和不顺从。", text_en:"Tends to be rebellious and nonconforming."}, {id:63, text_cn:"受社会压力影响（如受欢迎程度、社会规范）。", text_en:"Is influenced by social pressures."}, {id:64, text_cn:"具有社会洞察力；对他人想法和感受的线索保持警觉。", text_en:"Is socially perceptive; is alert to cues from other people."}, {id:65, text_cn:"抵制限制和规则；试图看自己能逃脱哪些规矩。", text_en:"Resists limits and rules; sees what he/she can get away with."}, {id:66, text_cn:"享受审美印象；对美学敏感（艺术、音乐等）。", text_en:"Enjoys aesthetic impressions; is aesthetically sensitive."}, {id:67, text_cn:"自我放纵；倾向于娇惯自己。", text_en:"Is self-indulgent; tends to pamper himself or herself."}, {id:68, text_cn:"骨子里是焦虑的。", text_en:"Is basically anxious."}, {id:69, text_cn:"对任何请求帮忙的事很敏感；觉得被强加于人。", text_en:"Is sensitive to anything that can be construed as a demand or request for favors."}, {id:70, text_cn:"行为合乎道德；有个人价值体系并忠于它。", text_en:"Behaves ethically; has a personal value system and is faithful to it."},
            {id:71, text_cn:"有野心；设定很高的个人目标。", text_en:"Is ambitious; sets high personal goals."}, {id:72, text_cn:"对自己是否胜任感到怀疑；有不足感。", text_en:"Has doubts about own adequacy as a person; appears to have feelings of inadequacy."}, {id:73, text_cn:"倾向于在许多情况中看到性暗示。", text_en:"Tends to see sexual overtones in many situations."}, {id:74, text_cn:"对自己感到满意；主观上没有自我烦恼。", text_en:"Feels satisfied with self; is unaware of self-concern."}, {id:75, text_cn:"容易理解和描述。", text_en:"Is easy to understand and describe."}, {id:76, text_cn:"想象他人的需求感受与自己相同；将感情投射到他人身上。", text_en:"Imagines that the needs, wishes and feelings of others are the same as his/her own."}, {id:77, text_cn:"交往时显得直率、坦白、坦诚。", text_en:"Appears straightforward, candid, frank in dealing with others."}, {id:78, text_cn:"觉得被生活欺骗和迫害；自怜。", text_en:"Feels cheated and victimized by life; self-pitying; feels sorry for self."}, {id:79, text_cn:"倾向于反复思考，有挥之不去、占据头脑的想法。", text_en:"Tends to ruminate and have persistent, preoccupying thoughts."}, {id:80, text_cn:"对他人有性兴趣。", text_en:"Is sexually interested in others."},
            {id:81, text_cn:"外表有吸引力；长相好看。", text_en:"Is physically attractive; is good looking."}, {id:82, text_cn:"情绪波动大；情绪起伏不定。", text_en:"Has fluctuating moods; moods go up and down."}, {id:83, text_cn:"能看透重要问题的核心；不被无关细节困住。", text_en:"Able to see to the heart of important problems; does not get sidetracked."}, {id:84, text_cn:"开朗、快乐。", text_en:"Is cheerful, happy."}, {id:85, text_cn:"倾向通过行动和非语言行为交流，而不是语言。", text_en:"Tends to communicate through actions, deeds, and non-verbal behavior."}, {id:86, text_cn:"否认焦虑和冲突的存在；欺骗自己一切都好。", text_en:"Denies the presence of anxiety and conflicts; deceives self into thinking everything is fine."}, {id:87, text_cn:"倾向于把清晰简单的情况解释得很复杂。", text_en:"Tends to interpret clear-cut, simple situations in complicated ways."}, {id:88, text_cn:"具有个人魅力。", text_en:"Is personally charming."}, {id:89, text_cn:"将自己与他人比较；对地位、外貌、成就等差异保持警觉。", text_en:"Compares self with others; is alert to real or imagined differences."}, {id:90, text_cn:"关心哲学问题（宗教、价值观、生命意义等）。", text_en:"Is concerned with philosophical problems, for example, religions, values, meaning of life."},
            {id:91, text_cn:"看重自己和他人的权力。", text_en:"Values power in self and others."}, {id:92, text_cn:"具有社交泰然自若的风度；在社交场合轻松自如。", text_en:"Has social poise and presence; appears socially at ease."}, {id:93, text_cn:"表现出符合文化定义的男性化或女性化风格。", text_en:"Behaves in a masculine/feminine style or manner."}, {id:94, text_cn:"直接表达敌意和愤怒感。", text_en:"Expresses hostility and angry feelings directly."}, {id:95, text_cn:"喜欢给建议；爱管别人闲事。", text_en:"Gives advice; concerns self with the business of others."}, {id:96, text_cn:"看重独立性和自主性；强调免受他人干涉的自由。", text_en:"Values own independence and autonomy; emphasizes freedom to think and act."}, {id:97, text_cn:"是一个不动感情的人；倾向于不体验强烈情绪。", text_en:"Is an unemotional person; tends not to experience strong emotions."}, {id:98, text_cn:"口头表达流利；能很好地表达想法。", text_en:"Is verbally fluent; can express ideas well in words."}, {id:99, text_cn:"具有自我戏剧化的倾向；容易夸大感受；寻求关注。", text_en:"Is self-dramatizing; theatrical; prone to exaggerate feelings; seeks attention."}, {id:100, text_cn:"以同样的方式对待每个人。", text_en:"Relates to everyone in the same way."}
        ];

        const expertScores = {
            "1": {"ideal_1995": 5.0, "hysteria": 2.2, "paranoia": 6.3}, "2": {"ideal_1995": 9.0, "hysteria": 3.9, "paranoia": 3.1}, "3": {"ideal_1995": 7.0, "hysteria": 3.7, "paranoia": 4.2}, "4": {"ideal_1995": 5.0, "hysteria": 6.3, "paranoia": 4.9}, "5": {"ideal_1995": 8.0, "hysteria": 4.2, "paranoia": 2.8}, "6": {"ideal_1995": 5.0, "hysteria": 5.2, "paranoia": 5.3}, "7": {"ideal_1995": 5.0, "hysteria": 6.4, "paranoia": 5.6}, "8": {"ideal_1995": 6.0, "hysteria": 4.4, "paranoia": 5.7}, "9": {"ideal_1995": 4.0, "hysteria": 7.3, "paranoia": 6.4}, "10": {"ideal_1995": 3.0, "hysteria": 7.0, "paranoia": 4.1},
            "11": {"ideal_1995": 7.0, "hysteria": 4.2, "paranoia": 3.8}, "12": {"ideal_1995": 3.0, "hysteria": 7.6, "paranoia": 6.6}, "13": {"ideal_1995": 3.0, "hysteria": 6.0, "paranoia": 7.2}, "14": {"ideal_1995": 4.0, "hysteria": 4.2, "paranoia": 2.0}, "15": {"ideal_1995": 7.0, "hysteria": 5.3, "paranoia": 3.7}, "16": {"ideal_1995": 6.0, "hysteria": 2.9, "paranoia": 4.9}, "17": {"ideal_1995": 8.0, "hysteria": 4.6, "paranoia": 3.0}, "18": {"ideal_1995": 6.0, "hysteria": 4.8, "paranoia": 2.9}, "19": {"ideal_1995": 5.0, "hysteria": 7.0, "paranoia": 3.6}, "20": {"ideal_1995": 5.0, "hysteria": 5.4, "paranoia": 4.4},
            "21": {"ideal_1995": 5.0, "hysteria": 4.9, "paranoia": 2.7}, "22": {"ideal_1995": 3.0, "hysteria": 3.9, "paranoia": 4.1}, "23": {"ideal_1995": 2.0, "hysteria": 5.9, "paranoia": 8.1}, "24": {"ideal_1995": 5.0, "hysteria": 4.6, "paranoia": 7.0}, "25": {"ideal_1995": 3.0, "hysteria": 4.8, "paranoia": 6.2}, "26": {"ideal_1995": 8.0, "hysteria": 4.1, "paranoia": 4.7}, "27": {"ideal_1995": 3.0, "hysteria": 4.9, "paranoia": 6.2}, "28": {"ideal_1995": 8.0, "hysteria": 5.0, "paranoia": 2.8}, "29": {"ideal_1995": 7.0, "hysteria": 3.3, "paranoia": 3.6}, "30": {"ideal_1995": 3.0, "hysteria": 5.8, "paranoia": 3.2},
            "31": {"ideal_1995": 6.0, "hysteria": 5.6, "paranoia": 4.7}, "32": {"ideal_1995": 7.0, "hysteria": 3.8, "paranoia": 4.3}, "33": {"ideal_1995": 7.0, "hysteria": 2.8, "paranoia": 2.9}, "34": {"ideal_1995": 4.0, "hysteria": 5.0, "paranoia": 6.2}, "35": {"ideal_1995": 9.0, "hysteria": 3.0, "paranoia": 2.7}, "36": {"ideal_1995": 2.0, "hysteria": 6.4, "paranoia": 5.8}, "37": {"ideal_1995": 1.0, "hysteria": 5.4, "paranoia": 5.0}, "38": {"ideal_1995": 2.0, "hysteria": 6.7, "paranoia": 8.1}, "39": {"ideal_1995": 5.0, "hysteria": 2.6, "paranoia": 6.8}, "40": {"ideal_1995": 2.0, "hysteria": 5.8, "paranoia": 6.3},
            "41": {"ideal_1995": 4.0, "hysteria": 6.8, "paranoia": 7.1}, "42": {"ideal_1995": 3.0, "hysteria": 4.1, "paranoia": 4.2}, "43": {"ideal_1995": 6.0, "hysteria": 6.6, "paranoia": 3.6}, "44": {"ideal_1995": 6.0, "hysteria": 3.1, "paranoia": 6.3}, "45": {"ideal_1995": 1.0, "hysteria": 6.0, "paranoia": 6.7}, "46": {"ideal_1995": 6.0, "hysteria": 4.8, "paranoia": 6.2}, "47": {"ideal_1995": 4.0, "hysteria": 4.4, "paranoia": 3.7}, "48": {"ideal_1995": 2.0, "hysteria": 4.7, "paranoia": 8.1}, "49": {"ideal_1995": 1.0, "hysteria": 4.3, "paranoia": 8.7}, "50": {"ideal_1995": 4.0, "hysteria": 5.9, "paranoia": 4.6},
            "51": {"ideal_1995": 7.0, "hysteria": 3.6, "paranoia": 5.0}, "52": {"ideal_1995": 6.0, "hysteria": 4.3, "paranoia": 5.8}, "53": {"ideal_1995": 2.0, "hysteria": 4.3, "paranoia": 3.4}, "54": {"ideal_1995": 6.0, "hysteria": 7.2, "paranoia": 3.1}, "55": {"ideal_1995": 2.0, "hysteria": 5.2, "paranoia": 5.8}, "56": {"ideal_1995": 7.0, "hysteria": 5.1, "paranoia": 3.7}, "57": {"ideal_1995": 6.0, "hysteria": 4.3, "paranoia": 4.9}, "58": {"ideal_1995": 6.0, "hysteria": 4.1, "paranoia": 2.7}, "59": {"ideal_1995": 5.0, "hysteria": 6.9, "paranoia": 5.0}, "60": {"ideal_1995": 9.0, "hysteria": 1.0, "paranoia": 1.8},
            "61": {"ideal_1995": 1.0, "hysteria": 5.6, "paranoia": 5.2}, "62": {"ideal_1995": 5.0, "hysteria": 2.8, "paranoia": 4.9}, "63": {"ideal_1995": 4.0, "hysteria": 7.6, "paranoia": 4.4}, "64": {"ideal_1995": 7.0, "hysteria": 2.7, "paranoia": 4.4}, "65": {"ideal_1995": 4.0, "hysteria": 4.3, "paranoia": 4.0}, "66": {"ideal_1995": 6.0, "hysteria": 4.7, "paranoia": 3.8}, "67": {"ideal_1995": 4.0, "hysteria": 5.8, "paranoia": 3.7}, "68": {"ideal_1995": 3.0, "hysteria": 7.2, "paranoia": 7.4}, "69": {"ideal_1995": 4.0, "hysteria": 5.2, "paranoia": 6.6}, "70": {"ideal_1995": 9.0, "hysteria": 3.3, "paranoia": 4.4},
            "71": {"ideal_1995": 8.0, "hysteria": 5.0, "paranoia": 6.2}, "72": {"ideal_1995": 4.0, "hysteria": 7.1, "paranoia": 7.0}, "73": {"ideal_1995": 4.0, "hysteria": 6.4, "paranoia": 5.7}, "74": {"ideal_1995": 7.0, "hysteria": 6.8, "paranoia": 5.4}, "75": {"ideal_1995": 8.0, "hysteria": 3.7, "paranoia": 4.1}, "76": {"ideal_1995": 2.0, "hysteria": 5.8, "paranoia": 8.3}, "77": {"ideal_1995": 8.0, "hysteria": 3.1, "paranoia": 3.1}, "78": {"ideal_1995": 1.0, "hysteria": 5.1, "paranoia": 6.8}, "79": {"ideal_1995": 3.0, "hysteria": 2.6, "paranoia": 7.0}, "80": {"ideal_1995": 6.0, "hysteria": 6.6, "paranoia": 3.3},
            "81": {"ideal_1995": 5.0, "hysteria": 5.2, "paranoia": 4.9}, "82": {"ideal_1995": 4.0, "hysteria": 6.6, "paranoia": 5.1}, "83": {"ideal_1995": 8.0, "hysteria": 2.2, "paranoia": 3.8}, "84": {"ideal_1995": 6.0, "hysteria": 6.2, "paranoia": 2.9}, "85": {"ideal_1995": 5.0, "hysteria": 6.7, "paranoia": 5.0}, "86": {"ideal_1995": 3.0, "hysteria": 9.0, "paranoia": 6.1}, "87": {"ideal_1995": 4.0, "hysteria": 3.8, "paranoia": 6.9}, "88": {"ideal_1995": 5.0, "hysteria": 4.8, "paranoia": 3.9}, "89": {"ideal_1995": 5.0, "hysteria": 6.6, "paranoia": 6.8}, "90": {"ideal_1995": 6.0, "hysteria": 3.1, "paranoia": 6.1},
            "91": {"ideal_1995": 5.0, "hysteria": 5.0, "paranoia": 7.0}, "92": {"ideal_1995": 7.0, "hysteria": 5.0, "paranoia": 4.0}, "93": {"ideal_1995": 6.0, "hysteria": 7.7, "paranoia": 5.2}, "94": {"ideal_1995": 5.0, "hysteria": 2.3, "paranoia": 3.6}, "95": {"ideal_1995": 5.0, "hysteria": 5.1, "paranoia": 5.7}, "96": {"ideal_1995": 9.0, "hysteria": 4.1, "paranoia": 6.7}, "97": {"ideal_1995": 3.0, "hysteria": 4.9, "paranoia": 4.4}, "98": {"ideal_1995": 7.0, "hysteria": 4.2, "paranoia": 5.2}, "99": {"ideal_1995": 4.0, "hysteria": 8.2, "paranoia": 5.3}, "100": {"ideal_1995": 4.0, "hysteria": 4.4, "paranoia": 5.6}
        };

        // --- 2. 状态变量与框架构建 ---
        let currentPhase = 1; 
        let realSelfScores = {}; 
        let idealSelfScores = {}; 
        let importedIdealSelfScores = {};
        let resultChart = null;

        const toastRegion = document.getElementById('toast-region');
        const phaseSteps = [1, 2, 3].map(step => document.getElementById(`phase-step-${step}`));

        function showToast(message, type = 'info', duration = 4200) {
            if (!toastRegion) {
                alert(message);
                return;
            }
            const toast = document.createElement('div');
            toast.className = `toast is-${type}`;
            toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
            toast.textContent = message;
            toastRegion.appendChild(toast);
            window.setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(8px)';
                window.setTimeout(() => toast.remove(), 220);
            }, duration);
        }

        function updatePhaseIndicator(activeStep) {
            phaseSteps.forEach((step, index) => {
                if (!step) return;
                const stepNumber = index + 1;
                step.classList.toggle('is-active', stepNumber === activeStep);
                step.classList.toggle('is-complete', stepNumber < activeStep);
                if (stepNumber === activeStep) step.setAttribute('aria-current', 'step');
                else step.removeAttribute('aria-current');
            });
        }

        const categories = [
            { id: 1, name: "1级", limit: 5, desc: "极不符合 (最不像我)" },
            { id: 2, name: "2级", limit: 8, desc: "非常不符合" },
            { id: 3, name: "3级", limit: 12, desc: "比较不符合" },
            { id: 4, name: "4级", limit: 16, desc: "稍微不符合" },
            { id: 5, name: "5级", limit: 18, desc: "完全中立 / 不确定" },
            { id: 6, name: "6级", limit: 16, desc: "稍微符合" },
            { id: 7, name: "7级", limit: 12, desc: "比较符合" },
            { id: 8, name: "8级", limit: 8, desc: "非常符合" },
            { id: 9, name: "9级", limit: 5, desc: "极符合 (最代表我)" }
        ];

        const unsortedArea = document.getElementById('unsorted-area');
        const sortBoard = document.getElementById('sort-board');
        
        // 关键防护：如果 HTML 没保存对，这里会直接弹窗警告
        if (!unsortedArea || !sortBoard) {
            alert("页面初始化失败：未找到完整的卡片分类区域，请检查网页文件是否完整后重新加载。");
            return;
        }

        function updateCounters() {
            let totalAssigned = 0;
            categories.forEach(cat => {
                const col = document.getElementById(`category-${cat.id}`);
                if(!col) return;
                const countSpan = document.getElementById(`count-${cat.id}`);
                const currentCount = col.querySelectorAll('.caq-card').length;
                totalAssigned += currentCount;
                countSpan.innerText = currentCount;
                col.classList.toggle('is-complete', currentCount === cat.limit);
                col.classList.toggle('is-over', currentCount > cat.limit);
                if (currentCount === cat.limit) {
                    countSpan.style.color = '#0b8f83'; countSpan.style.fontWeight = 'bold';
                } else {
                    countSpan.style.color = currentCount > cat.limit ? '#d64545' : '#69778f';
                    countSpan.style.fontWeight = currentCount > cat.limit ? 'bold' : 'normal';
                }
            });

            const assignedTotal = document.getElementById('assigned-total');
            const progress = document.getElementById('distribution-progress');
            const progressFill = progress?.querySelector('.progress-fill');
            if (assignedTotal) assignedTotal.textContent = totalAssigned;
            if (progress) progress.setAttribute('aria-valuenow', String(totalAssigned));
            if (progressFill) progressFill.style.width = `${Math.min(totalAssigned, 100)}%`;
        }

        // 构建 1-9 级容器
        categories.forEach(cat => {
            const col = document.createElement('div');
            col.className = 'category-column';
            col.id = `category-${cat.id}`;
            col.innerHTML = `
                <div class="category-title">${cat.name}</div>
                <div class="category-desc">${cat.desc}</div>
                <div class="category-count">( <span id="count-${cat.id}">0</span> / ${cat.limit} )</div>
            `;
            sortBoard.appendChild(col);

            col.addEventListener('dragover', (e) => { e.preventDefault(); col.classList.add('drag-over'); });
            col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
            col.addEventListener('drop', (e) => {
                e.preventDefault();
                col.classList.remove('drag-over');
                if (col.querySelectorAll('.caq-card').length >= cat.limit) {
                    showToast(`【${cat.name}】已达到 ${cat.limit} 张，请先移出一张卡片。`, 'error');
                    return;
                }
                const draggedCardId = e.dataTransfer.getData('text/plain');
                if(draggedCardId) {
                    const card = document.getElementById(draggedCardId);
                    if(card) col.appendChild(card);
                }
                updateCounters();
            });
        });

        // 粗筛区接收事件
        const dropZones = ['primary-dislike', 'primary-neutral', 'primary-like', 'unsorted-area'];
        dropZones.forEach(zoneId => {
            const zone = document.getElementById(zoneId);
            if(!zone) return;
            zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
            zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                const draggedCardId = e.dataTransfer.getData('text/plain');
                if(draggedCardId) {
                    const card = document.getElementById(draggedCardId);
                    if(card) zone.appendChild(card);
                }
                updateCounters(); 
            });
        });

        // 核心：生成100张卡片
        caqData.forEach(item => {
            const cardElement = document.createElement('div');
            cardElement.className = 'caq-card';
            cardElement.id = `card-${item.id}`;
            cardElement.draggable = true;
            cardElement.tabIndex = 0;
            cardElement.setAttribute('aria-label', `卡片 ${item.id}：${item.text_cn}。按回车键打开快捷移动菜单。`);
            cardElement.title = '拖拽、右键，或在触屏设备上轻点以移动卡片';
            cardElement.innerHTML = `<div class="id-number"># ${item.id}</div><div class="card-text">${item.text_cn}</div><div class="card-text-en">${item.text_en}</div>`;
            cardElement.addEventListener('dragstart', (e) => {
                cardElement.classList.add('dragging');
                cardElement.setAttribute('aria-grabbed', 'true');
                e.dataTransfer.setData('text/plain', cardElement.id);
            });
            cardElement.addEventListener('dragend', () => {
                cardElement.classList.remove('dragging');
                cardElement.setAttribute('aria-grabbed', 'false');
            });
            cardElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || (event.shiftKey && event.key === 'F10')) {
                    event.preventDefault();
                    const rect = cardElement.getBoundingClientRect();
                    openCardMenu(cardElement, rect.left + 8, Math.min(rect.bottom + 6, window.innerHeight - 20));
                }
            });
            cardElement.addEventListener('click', (event) => {
                if (window.matchMedia('(pointer: coarse)').matches) {
                    event.stopPropagation();
                    const rect = cardElement.getBoundingClientRect();
                    openCardMenu(cardElement, rect.left + 8, Math.min(rect.bottom + 6, window.innerHeight - 20));
                }
            });
            unsortedArea.appendChild(cardElement);
        });

        updatePhaseIndicator(1);
        updateCounters();

        // --- 3. 右键菜单极速分类系统 ---
        const contextMenu = document.getElementById('custom-context-menu');
        let currentTargetCard = null;

        if(contextMenu) {
            document.addEventListener('click', event => {
                if (!event.target.closest('.context-menu') && !event.target.closest('.caq-card')) {
                    contextMenu.style.display = 'none';
                }
            });
            document.addEventListener('contextmenu', (e) => {
                const card = e.target.closest('.caq-card');
                if (card) {
                    e.preventDefault();
                    openCardMenu(card, e.clientX, e.clientY);
                } else {
                    contextMenu.style.display = 'none';
                }
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') contextMenu.style.display = 'none';
            });
        }

        function openCardMenu(card, clientX, clientY) {
            if (!contextMenu || !card) return;
            currentTargetCard = card;
            const parentId = card.parentElement.id;
            contextMenu.replaceChildren();

            if (parentId === 'unsorted-area') {
                addMenuOption('移至：不符合我的', 'primary-dislike');
                addMenuOption('移至：中立 / 不确定', 'primary-neutral');
                addMenuOption('移至：符合我的', 'primary-like');
            } else if (parentId === 'primary-dislike') {
                addMenuOption('移至：1级 · 极不符合', 'category-1');
                addMenuOption('移至：2级 · 非常不符合', 'category-2');
                addMenuOption('移至：3级 · 比较不符合', 'category-3');
                addMenuOption('退回发牌区', 'unsorted-area');
            } else if (parentId === 'primary-neutral') {
                addMenuOption('移至：4级 · 稍微不符合', 'category-4');
                addMenuOption('移至：5级 · 完全中立', 'category-5');
                addMenuOption('移至：6级 · 稍微符合', 'category-6');
                addMenuOption('退回发牌区', 'unsorted-area');
            } else if (parentId === 'primary-like') {
                addMenuOption('移至：7级 · 比较符合', 'category-7');
                addMenuOption('移至：8级 · 非常符合', 'category-8');
                addMenuOption('移至：9级 · 极符合', 'category-9');
                addMenuOption('退回发牌区', 'unsorted-area');
            } else if (parentId.startsWith('category-')) {
                addMenuOption('退回发牌区', 'unsorted-area');
            } else {
                return;
            }

            contextMenu.style.display = 'block';
            contextMenu.style.left = '0px';
            contextMenu.style.top = '0px';
            const menuRect = contextMenu.getBoundingClientRect();
            const safeLeft = Math.max(8, Math.min(clientX, window.innerWidth - menuRect.width - 8));
            const safeTop = Math.max(8, Math.min(clientY, window.innerHeight - menuRect.height - 8));
            contextMenu.style.left = `${safeLeft}px`;
            contextMenu.style.top = `${safeTop}px`;
            contextMenu.querySelector('.context-menu-item')?.focus();
        }

        function addMenuOption(text, targetId) {
            const item = document.createElement('div');
            item.className = 'context-menu-item';
            item.tabIndex = 0;
            item.setAttribute('role', 'menuitem');
            item.innerText = text;
            const moveCard = () => {
                const targetContainer = document.getElementById(targetId);
                if (!targetContainer) return;
                
                if (targetId.startsWith('category-')) {
                    const catId = parseInt(targetId.replace('category-', ''));
                    const cat = categories.find(c => c.id === catId);
                    if (targetContainer.querySelectorAll('.caq-card').length >= cat.limit) {
                        showToast(`【${cat.name}】已达到 ${cat.limit} 张，请先移出一张卡片。`, 'error');
                        return;
                    }
                }
                targetContainer.appendChild(currentTargetCard);
                updateCounters();
                currentTargetCard?.focus();
                contextMenu.style.display = 'none';
            };
            item.addEventListener('click', moveCard);
            item.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    moveCard();
                }
            });
            contextMenu.appendChild(item);
        }

        // --- 4. 计算与按钮逻辑 ---
        function saveScoresTo(targetObj) {
            for (let i = 1; i <= 9; i++) {
                const col = document.getElementById(`category-${i}`);
                if(!col) continue;
                const cards = col.querySelectorAll('.caq-card');
                cards.forEach(card => { targetObj[card.id.replace('card-', '')] = i; });
            }
        }

        function isSortComplete() {
            let totalAssigned = 0;
            for (let i = 1; i <= 9; i++) {
                const col = document.getElementById(`category-${i}`);
                if(col) totalAssigned += col.querySelectorAll('.caq-card').length;
            }
            return totalAssigned === 100;
        }

        function getPearsonCorrelation(x, y) {
            let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0; const n = x.length;
            for (let i = 0; i < n; i++) { sumX += x[i]; sumY += y[i]; sumXY += x[i] * y[i]; sumX2 += x[i] * x[i]; sumY2 += y[i] * y[i]; }
            const step1 = (n * sumXY) - (sumX * sumY);
            const step2 = (n * sumX2) - (sumX * sumX);
            const step3 = (n * sumY2) - (sumY * sumY);
            const step4 = Math.sqrt(step2 * step3);
            if (step4 === 0) return 0;
            return step1 / step4;
        }
        // --- CSV 导入与解析逻辑 ---
        const importBtn = document.getElementById('import-btn');
        const csvUpload = document.getElementById('csv-upload');

        function parseCsvRow(row) {
            const cells = [];
            let value = '';
            let inQuotes = false;
            for (let i = 0; i < row.length; i++) {
                const char = row[i];
                if (char === '"') {
                    if (inQuotes && row[i + 1] === '"') {
                        value += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (char === ',' && !inQuotes) {
                    cells.push(value);
                    value = '';
                } else {
                    value += char;
                }
            }
            cells.push(value);
            return cells;
        }

        function hasExpectedDistribution(scoreMap) {
            return categories.every(category => {
                const count = Object.values(scoreMap).filter(score => score === category.id).length;
                return count === category.limit;
            });
        }

        if (importBtn && csvUpload) {
            importBtn.addEventListener('click', () => {
                if (currentPhase !== 1) {
                    showToast('CSV 只能在“真实自我”阶段导入。', 'error');
                    return;
                }
                csvUpload.click();
            });

            csvUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = function(event) {
                    const text = String(event.target.result || '').replace(/^\uFEFF/, '');
                    const lines = text.split(/\r?\n/);
                    const importedRealScores = {};
                    const importedIdealScores = {};
                    const seenIds = new Set();

                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i].trim();
                        if (!line) continue;

                        const cells = parseCsvRow(line);
                        const id = Number.parseInt(cells[0], 10);
                        const realScore = Number.parseInt(cells[2], 10);
                        const idealScore = Number.parseInt(cells[3], 10);
                        const rowIsValid = cells.length >= 4
                            && Number.isInteger(id) && id >= 1 && id <= 100
                            && Number.isInteger(realScore) && realScore >= 1 && realScore <= 9
                            && Number.isInteger(idealScore) && idealScore >= 1 && idealScore <= 9
                            && !seenIds.has(id);

                        if (!rowIsValid) continue;
                        seenIds.add(id);
                        importedRealScores[id] = realScore;
                        importedIdealScores[id] = idealScore;
                    }

                    const isComplete = seenIds.size === 100
                        && hasExpectedDistribution(importedRealScores)
                        && hasExpectedDistribution(importedIdealScores);

                    if (isComplete) {
                        for (let id = 1; id <= 100; id++) {
                            const card = document.getElementById(`card-${id}`);
                            const realCol = document.getElementById(`category-${importedRealScores[id]}`);
                            if (card && realCol) realCol.appendChild(card);
                        }
                        importedIdealSelfScores = importedIdealScores;
                        updateCounters();
                        showToast('已恢复 100 张卡片的真实自我与理想自我位置，可以继续微调。', 'success', 5200);
                    } else {
                        importedIdealSelfScores = {};
                        showToast('未能导入：请使用本工具导出的完整 CSV，并确认两组评分都符合规定分布。', 'error', 6200);
                    }
                    csvUpload.value = '';
                };
                reader.onerror = () => {
                    showToast('文件读取失败，请重新选择 CSV 文件。', 'error');
                    csvUpload.value = '';
                };
                reader.readAsText(file, 'UTF-8');
            });
        }
        const submitBtn = document.getElementById('submit-btn');
        if(submitBtn) {
            submitBtn.addEventListener('click', () => {
                if (!isSortComplete()) {
                    showToast('请先将全部 100 张卡片放入 1–9 级精细分类区。', 'error');
                    return;
                }

                if (currentPhase === 1) {
                    saveScoresTo(realSelfScores);
                    
                    // 检查是否有导入的【理想自我】数据
                    const hasImportedIdeal = Object.keys(importedIdealSelfScores).length === 100;

                    if (hasImportedIdeal) {
                        // 如果有导入记录，直接按历史“理想状态”还原卡片位置
                        for (let i = 1; i <= 100; i++) {
                            const targetScore = importedIdealSelfScores[i];
                            const card = document.getElementById(`card-${i}`);
                            const col = document.getElementById(`category-${targetScore}`);
                            if (card && col) col.appendChild(card);
                        }
                    } else {
                        // 如果没有导入记录，所有卡片退回发牌区
                        const allCards = document.querySelectorAll('.caq-card');
                        allCards.forEach(card => unsortedArea.appendChild(card));
                    }
                    updateCounters();

                    document.getElementById('main-title').innerText = "第二阶段：理想的自我";
                    document.getElementById('main-title').style.color = "#7ee2d1";
                    document.getElementById('main-desc').innerHTML = "请暂时放下现实限制，根据您<strong>真正期待成为的样子</strong>重新审视卡片。若已导入历史数据，可以直接在原有理想自我分布上微调。";
                    
                    // 隐藏导入按钮
                    const importContainer = document.getElementById('import-container');
                    if (importContainer) importContainer.style.display = 'none';

                    submitBtn.innerHTML = "生成双重自我报告 <span aria-hidden=\"true\">→</span>";
                    updatePhaseIndicator(2);
                    showToast('已保存真实自我分布，现在请完成理想自我分类。', 'success');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    currentPhase = 2; 

                } else if (currentPhase === 2) {
                    saveScoresTo(idealSelfScores);

                    let realArr = [], idealSelfArr = [], expertIdealArr = [], hysArr = [], paraArr = [];
                    for (let i = 1; i <= 100; i++) {
                        realArr.push(realSelfScores[i]);
                        idealSelfArr.push(idealSelfScores[i]);
                        expertIdealArr.push(expertScores[i].ideal_1995);
                        hysArr.push(expertScores[i].hysteria);
                        paraArr.push(expertScores[i].paranoia);
                    }

                    const r_self = getPearsonCorrelation(realArr, idealSelfArr).toFixed(2);
                    const r_expert = getPearsonCorrelation(realArr, expertIdealArr).toFixed(2);
                    const r_hys = getPearsonCorrelation(realArr, hysArr).toFixed(2);
                    const r_para = getPearsonCorrelation(realArr, paraArr).toFixed(2);

                    document.getElementById('res-self').innerText = r_self;
                    document.getElementById('res-ideal').innerText = r_expert;
                    document.getElementById('res-hys').innerText = r_hys;
                    document.getElementById('res-para').innerText = r_para;
                    
                    document.getElementById('sorting-phase').style.display = 'none'; 
                    document.getElementById('results-area').style.display = 'block'; 
                    document.getElementById('main-title').innerText = '评估完成：双重自我报告';
                    document.getElementById('main-title').style.color = '#ffffff';
                    document.getElementById('main-desc').innerHTML = '您已完成真实自我与理想自我的双重排序。下面的结果用于观察<strong>人格结构、内在张力与成长方向</strong>。';
                    updatePhaseIndicator(3);
                    
                    const canvas = document.getElementById('myChart');
                    if(canvas && typeof Chart !== 'undefined') {
                        if (resultChart) resultChart.destroy();
                        resultChart = new Chart(canvas.getContext('2d'), {
                            type: 'bar',
                            data: {
                                labels: ['个人理想自我', '专家理想人格（1995）', '歇斯底里参照剖面', '偏执参照剖面'],
                                datasets: [{
                                    label: '与真实自我的相关系数',
                                    data: [r_self, r_expert, r_hys, r_para],
                                    backgroundColor: ['rgba(53, 106, 230, 0.78)', 'rgba(11, 143, 131, 0.78)', 'rgba(197, 120, 24, 0.72)', 'rgba(118, 86, 214, 0.72)'],
                                    borderColor: ['#356ae6', '#0b8f83', '#c57818', '#7656d6'],
                                    borderWidth: 1,
                                    borderRadius: 7,
                                    barThickness: 34
                                }]
                            },
                            options: {
                                indexAxis: 'y',
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        min: -1,
                                        max: 1,
                                        ticks: { color: '#69778f', stepSize: 0.25 },
                                        grid: { color: '#e3e7ee' },
                                        title: { display: true, text: 'Pearson r', color: '#69778f' }
                                    },
                                    y: { grid: { display: false }, ticks: { color: '#34425c', font: { size: 12, weight: '600' } } }
                                },
                                plugins: {
                                    legend: { display: false },
                                    tooltip: { callbacks: { label: context => ` r = ${Number(context.raw).toFixed(2)}` } }
                                }
                            }
                        });
                    } else {
                        showToast('图表组件未能加载，但下方分数与 AI 解读仍可正常使用。', 'error');
                    }
                    document.getElementById('results-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        const exportBtn = document.getElementById('export-btn');
        if(exportBtn) {
            exportBtn.addEventListener('click', () => {
                const escapeCsvCell = value => `"${String(value).replace(/"/g, '""')}"`;
                const padTimePart = (value, length = 2) => String(value).padStart(length, '0');
                const generatedDate = new Date();
                const offsetMinutes = -generatedDate.getTimezoneOffset();
                const offsetSign = offsetMinutes >= 0 ? '+' : '-';
                const absoluteOffset = Math.abs(offsetMinutes);
                const offsetText = `${offsetSign}${padTimePart(Math.floor(absoluteOffset / 60))}:${padTimePart(absoluteOffset % 60)}`;
                const datePart = `${generatedDate.getFullYear()}-${padTimePart(generatedDate.getMonth() + 1)}-${padTimePart(generatedDate.getDate())}`;
                const timePart = `${padTimePart(generatedDate.getHours())}:${padTimePart(generatedDate.getMinutes())}:${padTimePart(generatedDate.getSeconds())}.${padTimePart(generatedDate.getMilliseconds(), 3)}`;
                const generatedAt = `${datePart}T${timePart}${offsetText}`;
                const fileTimePart = `${padTimePart(generatedDate.getHours())}-${padTimePart(generatedDate.getMinutes())}-${padTimePart(generatedDate.getSeconds())}`;

                const rows = ['卡片序号,卡片描述(中),真实自我评分(1-9),理想自我评分(1-9),测评生成时间(ISO 8601)'];
                caqData.forEach(item => {
                    rows.push(`${item.id},${escapeCsvCell(item.text_cn)},${realSelfScores[item.id]},${idealSelfScores[item.id]},${escapeCsvCell(generatedAt)}`);
                });
                const blob = new Blob([`\uFEFF${rows.join('\r\n')}`], { type: 'text/csv;charset=utf-8' });
                const downloadUrl = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = `CAQ双重测评_${datePart}_${fileTimePart}.csv`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);
                showToast(`测评存档已生成，并记录时间：${generatedAt}`, 'success', 5200);
            });
        }
        // --- 5. AI 个性化分析 (DeepSeek) ---
        const aiAnalyzeBtn = document.getElementById('ai-analyze-btn');
        const apiKeyInput = document.getElementById('api-key-input');
        const apiKeyToggle = document.getElementById('api-key-toggle');
        const aiModelSelect = document.getElementById('ai-model-select');
        const aiLoading = document.getElementById('ai-loading');
        const aiResultBox = document.getElementById('ai-result-box');

        function appendInlineMarkdown(parent, text) {
            const strongPattern = /\*\*(.+?)\*\*/g;
            let cursor = 0;
            let match;
            while ((match = strongPattern.exec(text)) !== null) {
                if (match.index > cursor) parent.appendChild(document.createTextNode(text.slice(cursor, match.index)));
                const strong = document.createElement('strong');
                strong.textContent = match[1];
                parent.appendChild(strong);
                cursor = match.index + match[0].length;
            }
            if (cursor < text.length) parent.appendChild(document.createTextNode(text.slice(cursor)));
        }

        function renderMarkdownSafely(markdown, container) {
            container.replaceChildren();
            const lines = String(markdown || '').replace(/\r/g, '').split('\n');
            let activeList = null;
            let activeListType = null;

            const closeList = () => {
                activeList = null;
                activeListType = null;
            };

            lines.forEach(rawLine => {
                const line = rawLine.trim();
                if (!line) {
                    closeList();
                    return;
                }

                const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
                if (headingMatch) {
                    closeList();
                    const heading = document.createElement(headingMatch[1].length === 2 ? 'h2' : 'h3');
                    appendInlineMarkdown(heading, headingMatch[2]);
                    container.appendChild(heading);
                    return;
                }

                const unorderedMatch = line.match(/^[-*]\s+(.+)$/);
                const orderedMatch = line.match(/^\d+[.)]\s+(.+)$/);
                if (unorderedMatch || orderedMatch) {
                    const listType = unorderedMatch ? 'ul' : 'ol';
                    if (!activeList || activeListType !== listType) {
                        activeList = document.createElement(listType);
                        activeListType = listType;
                        container.appendChild(activeList);
                    }
                    const item = document.createElement('li');
                    appendInlineMarkdown(item, (unorderedMatch || orderedMatch)[1]);
                    activeList.appendChild(item);
                    return;
                }

                closeList();
                if (line.startsWith('> ')) {
                    const quote = document.createElement('blockquote');
                    appendInlineMarkdown(quote, line.slice(2));
                    container.appendChild(quote);
                    return;
                }

                const paragraph = document.createElement('p');
                appendInlineMarkdown(paragraph, line);
                container.appendChild(paragraph);
            });
        }

        function buildTraitEvidence() {
            const profiles = caqData.map(item => {
                const real = Number(realSelfScores[item.id]);
                const ideal = Number(idealSelfScores[item.id]);
                return { ...item, real, ideal, gap: ideal - real };
            });

            const formatTrait = item => `- #${item.id}｜真实 ${item.real}，理想 ${item.ideal}｜${item.text_cn}`;
            const formatList = items => items.length ? items.map(formatTrait).join('\n') : '- 无达到条件的条目';

            const highTraits = profiles.filter(item => item.real >= 8).sort((a, b) => b.real - a.real || a.id - b.id);
            const lowTraits = profiles.filter(item => item.real <= 2).sort((a, b) => a.real - b.real || a.id - b.id);
            const growthPriorities = profiles.filter(item => item.gap >= 2).sort((a, b) => b.gap - a.gap || b.ideal - a.ideal).slice(0, 10);
            const reductionPriorities = profiles.filter(item => item.gap <= -2).sort((a, b) => a.gap - b.gap || b.real - a.real).slice(0, 10);
            const stableCores = profiles.filter(item => item.real >= 7 && Math.abs(item.gap) <= 1).sort((a, b) => b.real - a.real).slice(0, 10);

            return {
                highTraits: formatList(highTraits),
                lowTraits: formatList(lowTraits),
                growthPriorities: formatList(growthPriorities),
                reductionPriorities: formatList(reductionPriorities),
                stableCores: formatList(stableCores)
            };
        }

        function getApiErrorMessage(status, apiMessage) {
            if (status === 401) return 'API Key 无效或已失效，请检查后重试。';
            if (status === 402) return '当前 API 账户余额不足，请在 DeepSeek 控制台检查账户状态。';
            if (status === 429) return '请求过于频繁，请稍候片刻再试。';
            if (status >= 500) return 'DeepSeek 服务暂时不可用，请稍后重试。';
            return apiMessage || `请求失败（HTTP ${status}）。`;
        }

        if (apiKeyToggle && apiKeyInput) {
            apiKeyToggle.addEventListener('click', () => {
                const shouldShow = apiKeyInput.type === 'password';
                apiKeyInput.type = shouldShow ? 'text' : 'password';
                apiKeyToggle.textContent = shouldShow ? '隐藏' : '显示';
                apiKeyToggle.setAttribute('aria-label', shouldShow ? '隐藏 API Key' : '显示 API Key');
                apiKeyToggle.setAttribute('aria-pressed', String(shouldShow));
            });
        }

        if(aiAnalyzeBtn) {
            aiAnalyzeBtn.addEventListener('click', async () => {
                const apiKey = apiKeyInput.value.trim();
                if (!apiKey) {
                    showToast('请先输入 DeepSeek API Key。', 'error');
                    apiKeyInput.focus();
                    return;
                }

                // 1. 收集图表上的相关系数得分
                const r_self = document.getElementById('res-self').innerText;
                const r_expert = document.getElementById('res-ideal').innerText;
                const r_hys = document.getElementById('res-hys').innerText;
                const r_para = document.getElementById('res-para').innerText;

                // 2. 汇总极端特质、稳定核心与真实—理想差距
                const evidence = buildTraitEvidence();

                // 3. 构建给大模型的 Prompt
                const systemPrompt = `你是一名熟悉加州成人 Q 分类（California Adult Q-Sort, CAQ）、人格心理学与人本主义咨询表达的结果解读助手。你的任务是帮助用户形成可检验的自我理解，而不是给出临床诊断。

必须遵守以下原则：
1. Q 分类是固定分布的个体内相对排序。高低分表示某项特质在本次自我描述中的相对突出程度，不等于绝对强弱、好坏或疾病指标。
2. Pearson 相关系数只表示两个完整人格剖面的结构相似度。不得把单一相关值直接称为“健康分”“患病概率”或诊断结论；没有常模依据时不得擅自划定高、中、低阈值。
3. 区分“数据直接显示”“综合推测”和“需要结合生活情境验证”。推测必须使用“可能、或许、值得观察”等审慎措辞。
4. 优先寻找多条数据相互印证的模式，也要主动指出高低特质、相关系数及真实—理想差距之间的矛盾或张力，不做单线条人格标签。
5. 不虚构成长经历、家庭关系、职业、创伤、病史或现实事件；不使用宿命化、羞辱性、夸张或制造恐惧的语言。
6. 报告要具体、有洞察力且温暖克制。每个重要判断尽量附 1–3 个题号、分数或相关系数作为证据。`;

                const userPrompt = `请依据以下 CAQ 数据，生成一份供本人自我反思的深度解读。

【剖面相关数据｜Pearson r，范围 -1 至 1】
- 真实自我 vs 个人理想自我：${r_self}
- 真实自我 vs 专家理想人格（1995）参照剖面：${r_expert}
- 真实自我 vs 歇斯底里参照剖面：${r_hys}
- 真实自我 vs 偏执参照剖面：${r_para}

【当前最突出的特质｜真实自我 8–9 级】
${evidence.highTraits}

【当前最不突出的特质｜真实自我 1–2 级】
${evidence.lowTraits}

【稳定核心｜真实自我较高，且理想分与真实分接近】
${evidence.stableCores}

【希望增强的方向｜理想分至少比真实分高 2 级，按差距排序】
${evidence.growthPriorities}

【希望降低的方向｜真实分至少比理想分高 2 级，按差距排序】
${evidence.reductionPriorities}

【写作任务】
全文约 1400–1800 个中文字符。直接进入报告，不要写“好的”“感谢分享”“以下是报告”等开场，不要使用表情符号，不要复述全部数据。必须且只能使用以下三个二级标题：

## 【一、性格核心画像】
- 从核心驱力、自我认同、信息加工与行动风格、情绪调节、人际关系五个角度整合解读。
- 同时写出优势与同一特质在压力下可能付出的代价；识别至少一组看似矛盾但可以并存的特质。
- 关键判断使用“（依据：#题号 真实分；#题号 真实分）”简短标注证据，不要机械罗列。

## 【二、心理状态与内在张力】
- 将四个相关系数与真实—理想差距结合解释，重点讨论自我一致、成长愿望、可能的压力点与保护性资源。
- 对“歇斯底里/偏执”只称为参照剖面相似度，明确其不能用于诊断；不要把负相关自动解释成绝对积极。
- 提出 2–3 个最值得本人结合现实情境核对的问题。问题要具体，避免泛泛而谈。

## 【三、自我成长建议】
- 给出恰好 3 项优先级明确的“成长实验”，分别对应最关键的张力。
- 每项都用加粗小标题，并包含：目标、一个可在一周内执行的微行动、可观察信号、复盘问题。
- 建议必须来自本次数据，不给通用鸡汤，不要求用户改变稳定且认同的核心特质。
- 最后一段用两句话说明：本报告是基于一次自我排序的探索性解释，会随情境与时间变化，不能替代专业评估。`;

                // 4. UI 状态切换
                aiAnalyzeBtn.disabled = true;
                const originalButtonContent = aiAnalyzeBtn.innerHTML;
                aiAnalyzeBtn.innerHTML = '<span aria-hidden="true">✦</span> 正在分析…';
                aiLoading.style.display = 'flex';
                aiResultBox.style.display = 'none';
                aiResultBox.setAttribute('aria-busy', 'true');

                const controller = new AbortController();
                const timeoutId = window.setTimeout(() => controller.abort(), 180000);

                try {
                    const selectedModel = aiModelSelect?.value || 'deepseek-v4-pro';
                    const response = await fetch('https://api.deepseek.com/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify({
                            model: selectedModel,
                            messages: [
                                { role: 'system', content: systemPrompt },
                                { role: 'user', content: userPrompt }
                            ],
                            thinking: { type: selectedModel === 'deepseek-v4-pro' ? 'enabled' : 'disabled' },
                            temperature: 0.45,
                            max_tokens: 6000
                        }),
                        signal: controller.signal
                    });

                    if (!response.ok) {
                        let errorData = {};
                        try { errorData = await response.json(); } catch (_) { /* 响应可能不是 JSON */ }
                        throw new Error(getApiErrorMessage(response.status, errorData.error?.message));
                    }

                    const data = await response.json();
                    const choice = data.choices?.[0];
                    const aiText = choice?.message?.content?.trim();
                    if (!aiText) throw new Error('模型没有返回可显示的分析内容，请重试。');

                    renderMarkdownSafely(aiText, aiResultBox);
                    aiResultBox.style.display = 'block';
                    if (choice.finish_reason === 'length') {
                        showToast('本次分析达到输出上限，结尾可能不完整；可切换深度模式后重试。', 'info', 6000);
                    }
                    aiResultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });

                } catch (error) {
                    let errorMessage;
                    if (error.name === 'AbortError') {
                        errorMessage = '分析请求超时，请检查网络后重试。';
                    } else if (error instanceof TypeError) {
                        errorMessage = '无法连接 DeepSeek API，请检查网络连接或浏览器的跨域访问限制。';
                    } else {
                        errorMessage = `分析失败：${error.message}`;
                    }
                    showToast(errorMessage, 'error', 6500);
                } finally {
                    window.clearTimeout(timeoutId);
                    aiAnalyzeBtn.disabled = false;
                    aiAnalyzeBtn.innerHTML = originalButtonContent;
                    aiLoading.style.display = 'none';
                    aiResultBox.setAttribute('aria-busy', 'false');
                }
            });
        }
    } catch (error) {
        alert("页面运行遇到问题：" + error.message + "\n请重新加载页面；若问题持续，请检查三个网页文件是否完整。");
    }
};
