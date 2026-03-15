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
            alert("❌ 致命错误：找不到网页的卡片框架！请务必将 index.html 里面的所有代码清空后，用我给的 HTML 重新粘贴保存一次。");
            return;
        }

        function updateCounters() {
            categories.forEach(cat => {
                const col = document.getElementById(`category-${cat.id}`);
                if(!col) return;
                const countSpan = document.getElementById(`count-${cat.id}`);
                const currentCount = col.querySelectorAll('.caq-card').length;
                countSpan.innerText = currentCount;
                if (currentCount === cat.limit) {
                    countSpan.style.color = '#ef4444'; countSpan.style.fontWeight = 'bold';
                } else {
                    countSpan.style.color = '#475569'; countSpan.style.fontWeight = 'normal';
                }
            });
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
                if (col.querySelectorAll('.caq-card').length >= cat.limit) { alert(`【${cat.name}】名额已满（最多 ${cat.limit} 张）！`); return; }
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
            cardElement.innerHTML = `<div class="id-number"># ${item.id}</div><div class="card-text">${item.text_cn}</div><div class="card-text-en">${item.text_en}</div>`;
            cardElement.addEventListener('dragstart', (e) => { cardElement.classList.add('dragging'); e.dataTransfer.setData('text/plain', cardElement.id); });
            cardElement.addEventListener('dragend', () => cardElement.classList.remove('dragging'));
            unsortedArea.appendChild(cardElement);
        });

        // --- 3. 右键菜单极速分类系统 ---
        const contextMenu = document.getElementById('custom-context-menu');
        let currentTargetCard = null;

        if(contextMenu) {
            document.addEventListener('click', () => { contextMenu.style.display = 'none'; });

            document.addEventListener('contextmenu', (e) => {
                const card = e.target.closest('.caq-card');
                if (card) {
                    e.preventDefault(); 
                    currentTargetCard = card;
                    const parentId = card.parentElement.id;
                    contextMenu.innerHTML = ''; 
                    
                    if (parentId === 'unsorted-area') {
                        addMenuOption('➡️ 移至：不符合我', 'primary-dislike');
                        addMenuOption('➡️ 移至：中立 / 不确定', 'primary-neutral');
                        addMenuOption('➡️ 移至：符合我', 'primary-like');
                    } else if (parentId === 'primary-dislike') {
                        addMenuOption('➡️ 移至：1级 (极不符合)', 'category-1');
                        addMenuOption('➡️ 移至：2级 (非常不符合)', 'category-2');
                        addMenuOption('➡️ 移至：3级 (比较不符合)', 'category-3');
                        addMenuOption('↩️ 退回：发牌区', 'unsorted-area');
                    } else if (parentId === 'primary-neutral') {
                        addMenuOption('➡️ 移至：4级 (稍微不符合)', 'category-4');
                        addMenuOption('➡️ 移至：5级 (完全中立)', 'category-5');
                        addMenuOption('➡️ 移至：6级 (稍微符合)', 'category-6');
                        addMenuOption('↩️ 退回：发牌区', 'unsorted-area');
                    } else if (parentId === 'primary-like') {
                        addMenuOption('➡️ 移至：7级 (比较符合)', 'category-7');
                        addMenuOption('➡️ 移至：8级 (非常符合)', 'category-8');
                        addMenuOption('➡️ 移至：9级 (极符合)', 'category-9');
                        addMenuOption('↩️ 退回：发牌区', 'unsorted-area');
                    } else if (parentId.startsWith('category-')) {
                        addMenuOption('↩️ 退回：发牌区', 'unsorted-area');
                    } else {
                        return;
                    }

                    contextMenu.style.left = e.pageX + 'px';
                    contextMenu.style.top = e.pageY + 'px';
                    contextMenu.style.display = 'block';
                } else {
                    contextMenu.style.display = 'none';
                }
            });
        }

        function addMenuOption(text, targetId) {
            const item = document.createElement('div');
            item.className = 'context-menu-item';
            item.innerText = text;
            item.addEventListener('click', () => {
                const targetContainer = document.getElementById(targetId);
                if (!targetContainer) return;
                
                if (targetId.startsWith('category-')) {
                    const catId = parseInt(targetId.replace('category-', ''));
                    const cat = categories.find(c => c.id === catId);
                    if (targetContainer.querySelectorAll('.caq-card').length >= cat.limit) {
                        alert(`【${cat.name}】名额已满（最多 ${cat.limit} 张）！\n请先移出其他卡片。`);
                        return;
                    }
                }
                targetContainer.appendChild(currentTargetCard);
                updateCounters();
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

        const submitBtn = document.getElementById('submit-btn');
        if(submitBtn) {
            submitBtn.addEventListener('click', () => {
                if (!isSortComplete()) { alert('请将全部 100 张卡片分配完毕后再继续！'); return; }

                if (currentPhase === 1) {
                    saveScoresTo(realSelfScores);
                    const allCards = document.querySelectorAll('.caq-card');
                    allCards.forEach(card => unsortedArea.appendChild(card));
                    updateCounters();

                    document.getElementById('main-title').innerText = "第二阶段：理想的自我";
                    document.getElementById('main-title').style.color = "#10b981"; 
                    document.getElementById('main-desc').innerHTML = "请抛开现实限制，根据您<strong>内心期望成为的理想样子</strong>，再次将这100张卡片分配到1-9级中。";
                    submitBtn.innerText = "📊 提交并生成最终双重对比折线报告";
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
                    
                    const canvas = document.getElementById('myChart');
                    if(canvas) {
                        new Chart(canvas.getContext('2d'), {
                            type: 'line',
                            data: {
                                labels: ['个人理想自我', '专家理想人格(1995)', '歇斯底里倾向', '偏执倾向'],
                                datasets: [{
                                    label: '真实自我与各维度的相关系数 (Pearson r)',
                                    data: [r_self, r_expert, r_hys, r_para],
                                    borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.15)', borderWidth: 3, pointBackgroundColor: '#10b981', pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 6, pointHoverRadius: 8, fill: true, tension: 0.3 
                                }]
                            },
                            options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: -1.0, max: 1.0, title: { display: true, text: '相关系数 (r)' }, grid: { color: '#e2e8f0' } }, x: { grid: { display: false } } }, plugins: { legend: { labels: { font: { size: 14 } } } } }
                        });
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        const exportBtn = document.getElementById('export-btn');
        if(exportBtn) {
            exportBtn.addEventListener('click', () => {
                let csvContent = "data:text/csv;charset=utf-8,\uFEFF卡片序号,卡片描述(中),真实自我评分(1-9),理想自我评分(1-9)\n";
                caqData.forEach(item => { csvContent += `${item.id},"${item.text_cn}",${realSelfScores[item.id]},${idealSelfScores[item.id]}\n`; });
                const link = document.createElement("a"); link.setAttribute("href", encodeURI(csvContent)); link.setAttribute("download", "双重CAQ测评数据.csv"); document.body.appendChild(link); link.click(); document.body.removeChild(link);
            });
        }
    } catch (error) {
        alert("❌ 代码运行遇到了错误：" + error.message + "\n如果一直弹这个框，请检查复制是否漏了内容。");
    }
};