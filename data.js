// Bilingual Civics Quiz Data
const flashcardData = [
    {
        q_en: "What is the supreme law of the land?",
        q_cn: "美国的最高法律是什么？",
        a_en: ["the Constitution"],
        a_cn: ["宪法"]
    },
    {
        q_en: "What does the Constitution do?",
        q_cn: "宪法的作用是什么？",
        a_en: ["sets up the government", "defines the government", "protects basic rights of Americans"],
        a_cn: ["建立政府", "定义政府", "保护美国人的基本权利"]
    },
    {
        q_en: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        q_cn: "宪法的前三个字说明自治的概念。这三个字是什么？",
        a_en: ["We the People"],
        a_cn: ["我们人民 (We the People)"]
    },
    {
        q_en: "What is an amendment?",
        q_cn: "什么是修正案？",
        a_en: ["a change (to the Constitution)", "an addition (to the Constitution)"],
        a_cn: ["（宪法的）更正", "（宪法的）补充"]
    },
    {
        q_en: "What do we call the first ten amendments to the Constitution?",
        q_cn: "宪法的前十项修正案称为什么？",
        a_en: ["the Bill of Rights"],
        a_cn: ["权利法案"]
    },
    {
        q_en: "What is one right or freedom from the First Amendment?*",
        q_cn: "列举宪法第一条修正案中的一项权利或自由。",
        a_en: ["speech", "religion", "assembly", "press", "petition the government"],
        a_cn: ["言论自由", "宗教自由", "集会结社的自由", "出版自由", "向政府请愿的自由"]
    },
    {
        q_en: "How many amendments does the Constitution have?",
        q_cn: "宪法有几条修正案？",
        a_en: ["twenty-seven (27)"],
        a_cn: ["二十七 (27)"]
    },
    {
        q_en: "What did the Declaration of Independence do?",
        q_cn: "《独立宣言》的作用是什么？",
        a_en: ["announced our independence (from Great Britain)", "declared our independence (from Great Britain)", "said that the United States is free (from Great Britain)"],
        a_cn: ["宣布脱离英国", "宣告独立", "说明美国脱离英国而独立"]
    },
    {
        q_en: "What are two rights in the Declaration of Independence?",
        q_cn: "《独立宣言》中有哪两项权利？",
        a_en: ["life", "liberty", "pursuit of happiness"],
        a_cn: ["生命 (Life)", "自由 (Liberty)", "追求幸福 (Pursuit of happiness)"]
    },
    {
        q_en: "What is freedom of religion?",
        q_cn: "什么是宗教自由？",
        a_en: ["You can practice any religion, or not practice a religion."],
        a_cn: ["你可以信仰任何宗教，也可以不信仰任何宗教。"]
    },
    {
        q_en: "What is the economic system in the United States?*",
        q_cn: "美国的经济制度是什么？",
        a_en: ["capitalist economy", "market economy"],
        a_cn: ["资本主义经济", "市场经济"]
    },
    {
        q_en: "What is the \"rule of law\"?",
        q_cn: "法治是什么意思？",
        a_en: ["Everyone must follow the law.", "Leaders must obey the law.", "Government must obey the law.", "No one is above the law."],
        a_cn: ["人人都应遵守法律", "领导人必须遵守法律", "政府必须遵守法律", "没有任何人能凌驾于法律之上"]
    },
    {
        q_en: "Name one branch or part of the government.*",
        q_cn: "列举政府体制的一个分支或部门。",
        a_en: ["Congress", "legislative", "President", "executive", "the courts", "judicial"],
        a_cn: ["国会", "立法部门", "总统", "行政部门", "法院", "司法部门"]
    },
    {
        q_en: "What stops one branch of government from becoming too powerful?",
        q_cn: "什么防止一个政府分支变得过于强大？",
        a_en: ["checks and balances", "separation of powers"],
        a_cn: ["制衡", "权力分立"]
    },
    {
        q_en: "Who is in charge of the executive branch?",
        q_cn: "谁负责行政部门？",
        a_en: ["the President"],
        a_cn: ["总统"]
    },
    {
        q_en: "Who makes federal laws?",
        q_cn: "谁制定联邦法律？",
        a_en: ["Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"],
        a_cn: ["国会", "参议院和众议院", "（美国或国家）立法部门"]
    },
    {
        q_en: "What are the two parts of the U.S. Congress?*",
        q_cn: "美国国会由哪两个部分组成？",
        a_en: ["the Senate and House (of Representatives)"],
        a_cn: ["参议院与众议院"]
    },
    {
        q_en: "How many U.S. Senators are there?",
        q_cn: "美国参议员有几位？",
        a_en: ["one hundred (100)"],
        a_cn: ["一百 (100)"]
    },
    {
        q_en: "We elect a U.S. Senator for how many years?",
        q_cn: "我们选出的美国参议员任职多少年？",
        a_en: ["six (6)"],
        a_cn: ["六年"]
    },
    {
        q_en: "The House of Representatives has how many voting members?",
        q_cn: "众议院能投票的众议员有几位？",
        a_en: ["four hundred thirty-five (435)"],
        a_cn: ["四百三十五 (435)"]
    },
    {
        q_en: "We elect a U.S. Representative for how many years?",
        q_cn: "我们选出的美国众议员任职多少年？",
        a_en: ["two (2)"],
        a_cn: ["两年"]
    },
    {
        q_en: "Who does a U.S. Senator represent?",
        q_cn: "美国参议员代表何人？",
        a_en: ["all people of the state"],
        a_cn: ["该州的所有人民"]
    },
    {
        q_en: "Why do some states have more Representatives than other states?",
        q_cn: "为什么有些州的众议员人数比其他州多？",
        a_en: ["(because of) the state's population", "(because) they have more people", "(because) some states have more people"],
        a_cn: ["(由于)该州的人口", "(由于)该州有更多人口", "(由于)有些州的人口比较多"]
    },
    {
        q_en: "We elect a President for how many years?",
        q_cn: "我们选出的总统任职多少年？",
        a_en: ["four (4)"],
        a_cn: ["四年"]
    },
    {
        q_en: "In what month do we vote for President?*",
        q_cn: "我们在哪一个月份选总统？",
        a_en: ["November"],
        a_cn: ["十一月"]
    },
    {
        q_en: "If the President can no longer serve, who becomes President?",
        q_cn: "如果总统不能视事，则由谁成为总统？",
        a_en: ["the Vice President"],
        a_cn: ["副总统"]
    },
    {
        q_en: "If both the President and the Vice President can no longer serve, who becomes President?",
        q_cn: "如果总统和副总统都不能视事，则由谁成为总统？",
        a_en: ["the Speaker of the House"],
        a_cn: ["众议院议长"]
    },
    {
        q_en: "Who is the Commander in Chief of the military?",
        q_cn: "谁是三军统帅？",
        a_en: ["the President"],
        a_cn: ["总统"]
    },
    {
        q_en: "Who signs bills to become laws?",
        q_cn: "谁签署法案使之成为法律？",
        a_en: ["the President"],
        a_cn: ["总统"]
    },
    {
        q_en: "Who vetoes bills?",
        q_cn: "谁否决法案？",
        a_en: ["the President"],
        a_cn: ["总统"]
    },
    {
        q_en: "What does the President's Cabinet do?",
        q_cn: "总统的内阁做什么事？",
        a_en: ["advises the President"],
        a_cn: ["向总统提出建议"]
    },
    {
        q_en: "What are two Cabinet-level positions?",
        q_cn: "列举两个内阁级别的职位。",
        a_en: ["Secretary of Agriculture", "Secretary of Commerce", "Secretary of Defense", "Secretary of Education", "Secretary of Energy", "Secretary of Health and Human Services", "Secretary of Homeland Security", "Secretary of Housing and Urban Development", "Secretary of the Interior", "Secretary of Labor", "Secretary of State", "Secretary of Transportation", "Secretary of the Treasury", "Secretary of Veterans Affairs", "Attorney General", "Vice President"],
        a_cn: ["农业部长", "商务部长", "国防部长", "教育部⻓", "能源部长", "卫生与公众服务部长", "国土安全部长", "住宅与都市发展部长", "内政部长", "劳工部长", "国务卿", "交通部长", "财政部长", "退伍军人事务部长", "司法部长", "副总统"]
    },
    {
        q_en: "What does the judicial branch do?",
        q_cn: "司法部门做什么？",
        a_en: ["reviews laws", "explains laws", "resolves disputes (disagreements)", "decides if a law goes against the Constitution"],
        a_cn: ["审查法律", "解释法律", "解决争端", "决定某一法律是否抵触宪法"]
    },
    {
        q_en: "What is the highest court in the United States?",
        q_cn: "美国最高法院是什么？",
        a_en: ["the Supreme Court"],
        a_cn: ["联邦最高法院"]
    },
    {
        q_en: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        q_cn: "根据我国宪法，有些权力属于联邦政府。列举一项联邦政府的权力。",
        a_en: ["to print money", "to declare war", "to create an army", "to make treaties"],
        a_cn: ["印制钞票", "宣战", "建立军队", "签订条约"]
    },
    {
        q_en: "Under our Constitution, some powers belong to the states. What is one power of the states?",
        q_cn: "根据我国宪法，有些权力属于州政府。列举一项州政府的权力。",
        a_en: ["provide schooling and education", "provide protection (police)", "provide safety (fire departments)", "give a driver's license", "approve zoning and land use"],
        a_cn: ["提供学校和教育", "提供保护（警察）", "提供安全（消防局）", "签发驾驶执照", "批准区划和土地使用"]
    },
    {
        q_en: "What are the two major political parties in the United States?*",
        q_cn: "美国当今两大政党为何？",
        a_en: ["Democratic and Republican"],
        a_cn: ["民主党与共和党"]
    },
    {
        q_en: "There are four amendments to the Constitution about who can vote. Describe one of them.",
        q_cn: "宪法中有四条关于谁可以投票的修正案。试举一个。",
        a_en: ["Citizens eighteen (18) and older (can vote).", "You don't have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."],
        a_cn: ["十八岁 (18) 及以上的公民（可以投票）。", "你投票不必缴钱（投票税）。", "任何公民都可以投票。（男性和女性都可以投票。）", "任何种族的男性公民（都可以投票）。"]
    },
    {
        q_en: "What is one responsibility that is only for United States citizens?*",
        q_cn: "列举一项美国公民才有的责任。",
        a_en: ["serve on a jury", "vote in a federal election"],
        a_cn: ["当陪审员", "在联邦选举中投票"]
    },
    {
        q_en: "Name one right only for United States citizens.",
        q_cn: "列举一项美国公民才享有的权利。",
        a_en: ["vote in a federal election", "run for federal office"],
        a_cn: ["在联邦选举中投票", "竞选公职"]
    },
    {
        q_en: "What are two rights of everyone living in the United States?",
        q_cn: "列举每一个住在美国的人的两项权利。",
        a_en: ["freedom of expression", "freedom of speech", "freedom of assembly", "freedom to petition the government", "freedom of religion", "the right to bear arms"],
        a_cn: ["表达自由", "言论自由", "集会自由", "向政府请愿的自由", "宗教自由", "持有武器的权利"]
    },
    {
        q_en: "What do we show loyalty to when we say the Pledge of Allegiance?",
        q_cn: "当我们宣誓效忠时，是向什么表达忠诚？",
        a_en: ["the United States", "the flag"],
        a_cn: ["美利坚合众国", "国旗"]
    },
    {
        q_en: "What is one promise you make when you become a United States citizen?",
        q_cn: "当您成为美国公民时，您做出的承诺之一是什么？",
        a_en: ["give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military (if needed)", "serve (do important work for) the nation (if needed)", "be loyal to the United States"],
        a_cn: ["放弃效忠其他国家", "护卫美国的宪法及法律", "遵守美国的法律", "（必要时）加入美国军队", "（必要时）为国效劳", "效忠美国"]
    },
    {
        q_en: "How old do citizens have to be to vote for President?*",
        q_cn: "美国公民必须几岁才能投票选举总统？",
        a_en: ["eighteen (18) and older"],
        a_cn: ["十八 (18) 岁以上"]
    },
    {
        q_en: "What are two ways that Americans can participate in their democracy?",
        q_cn: "美国人参与民主政治的两种方法是什么？",
        a_en: ["vote", "join a political party", "help with a campaign", "join a civic group", "join a community group", "give an elected official your opinion on an issue", "call Senators and Representatives", "publicly support or oppose an issue or policy", "run for office", "write to a newspaper"],
        a_cn: ["投票", "加入政党", "协助竞选活动", "加入公民团体", "加入社区团体", "向民选官员提供意见", "致电参议员和众议员", "公开支持或反对议题", "竞选公职", "向报社投书"]
    },
    {
        q_en: "When is the last day you can send in federal income tax forms?*",
        q_cn: "寄送联邦所得税表的截止日期是哪一天？",
        a_en: ["April 15"],
        a_cn: ["4月15日"]
    },
    {
        q_en: "When must all men register for the Selective Service?",
        q_cn: "所有男子何时必须注册兵役登记？",
        a_en: ["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"],
        a_cn: ["十八 (18) 岁", "十八 (18) 岁至二十六 (26) 岁之间"]
    },
    {
        q_en: "What is one reason colonists came to America?",
        q_cn: "殖民者来到美国的原因之一是什么？",
        a_en: ["freedom", "political liberty", "religious freedom", "economic opportunity", "practice their religion", "escape persecution"],
        a_cn: ["自由", "政治自由", "宗教自由", "经济机会", "从事宗教活动", "逃避迫害"]
    },
    {
        q_en: "Who lived in America before the Europeans arrived?",
        q_cn: "欧洲人抵达美国之前，谁已经居住在这里？",
        a_en: ["American Indians", "Native Americans"],
        a_cn: ["美国印第安人", "美洲原住民"]
    },
    {
        q_en: "What group of people was taken to America and sold as slaves?",
        q_cn: "哪一群人被带到美国并被贩卖为奴？",
        a_en: ["Africans", "people from Africa"],
        a_cn: ["非洲人", "来自非洲的人"]
    },
    {
        q_en: "Why did the colonists fight the British?",
        q_cn: "殖民者以此原因与英国作战？",
        a_en: ["because of high taxes (taxation without representation)", "because the British army stayed in their houses (boarding, quartering)", "because they didn't have self-government"],
        a_cn: ["因为高税收（只缴税，无代表权）", "因为英军强占他们的房子（寄宿、宿营）", "因为他们没有自治权"]
    },
    {
        q_en: "Who wrote the Declaration of Independence?",
        q_cn: "《独立宣言》是谁写的？",
        a_en: ["(Thomas) Jefferson"],
        a_cn: ["（托马斯）杰斐逊"]
    },
    {
        q_en: "When was the Declaration of Independence adopted?",
        q_cn: "《独立宣言》是何时通过的？",
        a_en: ["July 4, 1776"],
        a_cn: ["1776年7月4日"]
    },
    {
        q_en: "What happened at the Constitutional Convention?",
        q_cn: "制宪会议达成了什么事？",
        a_en: ["The Constitution was written.", "The Founding Fathers wrote the Constitution."],
        a_cn: ["拟定宪法。", "开国元勋拟定宪法。"]
    },
    {
        q_en: "When was the Constitution written?",
        q_cn: "宪法是何时拟定的？",
        a_en: ["1787"],
        a_cn: ["1787年"]
    },
    {
        q_en: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        q_cn: "《联邦论》支持通过美国宪法。举出其中一名作者。",
        a_en: ["(James) Madison", "(Alexander) Hamilton", "(John) Jay", "Publius"],
        a_cn: ["（詹姆斯）麦迪逊", "（亚历山大）汉密尔顿", "（约翰）杰伊", "普布利乌斯"]
    },
    {
        q_en: "What is one thing Benjamin Franklin is famous for?",
        q_cn: "本杰明·富兰克林以何事著称？",
        a_en: ["U.S. diplomat", "oldest member of the Constitutional Convention", "first Postmaster General of the United States", "writer of \"Poor Richard's Almanac\"", "started the first free libraries"],
        a_cn: ["美国外交官", "制宪会议年纪最长的成员", "美国第一任邮政总局局长", "《普理查德年鉴》的作者", "开办第一个免费图书馆"]
    },
    {
        q_en: "Who is the \"Father of Our Country\"?",
        q_cn: "谁是美国国父？",
        a_en: ["(George) Washington"],
        a_cn: ["（乔治）华盛顿"]
    },
    {
        q_en: "Who was the first President?*",
        q_cn: "谁是第一任总统？",
        a_en: ["(George) Washington"],
        a_cn: ["（乔治）华盛顿"]
    },
    {
        q_en: "What territory did the United States buy from France in 1803?",
        q_cn: "美国在1803年向法国购买哪块领土？",
        a_en: ["the Louisiana Territory", "Louisiana"],
        a_cn: ["路易斯安那地区", "路易斯安那"]
    },
    {
        q_en: "Name one war fought by the United States in the 1800s.",
        q_cn: "列举一场美国在1800年代参与的战争。",
        a_en: ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"],
        a_cn: ["1812年战争", "美墨战争", "内战", "美西战争"]
    },
    {
        q_en: "Name the U.S. war between the North and the South.",
        q_cn: "请列举美国北方与南方之间的战争。",
        a_en: ["the Civil War", "the War between the States"],
        a_cn: ["美国内战", "州际战争"]
    },
    {
        q_en: "Name one problem that led to the Civil War.",
        q_cn: "列举导致内战的一项问题。",
        a_en: ["slavery", "economic reasons", "states' rights"],
        a_cn: ["奴隶制度", "经济原因", "州权"]
    },
    {
        q_en: "What was one important thing that Abraham Lincoln did?*",
        q_cn: "列举一件亚伯拉罕·林肯做过的重要事蹟。",
        a_en: ["freed the slaves (Emancipation Proclamation)", "saved (or preserved) the Union", "led the United States during the Civil War"],
        a_cn: ["解放奴隶（《解放奴隶宣言》）", "拯救（或保留）联盟", "在内战期间领导美国"]
    },
    {
        q_en: "What did the Emancipation Proclamation do?",
        q_cn: "《解放奴隶宣言》达成了什么？",
        a_en: ["freed the slaves", "freed slaves in the Confederacy", "freed slaves in the Confederate states", "freed slaves in most Southern states"],
        a_cn: ["解放了奴隶", "解放了南方邦联的奴隶", "解放了南方邦联各州的奴隶", "解放了南方大部分地区的奴隶"]
    },
    {
        q_en: "What did Susan B. Anthony do?",
        q_cn: "苏珊·B·安东尼做了什么事?",
        a_en: ["fought for women's rights", "fought for civil rights"],
        a_cn: ["为女权奋斗", "为民权奋斗"]
    },
    {
        q_en: "Name one war fought by the United States in the 1900s.*",
        q_cn: "列举一场美国在1900年代参与的战争。",
        a_en: ["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"],
        a_cn: ["第一次世界大战", "第二次世界大战", "朝鲜战争", "越南战争", "（波斯湾）海湾战争"]
    },
    {
        q_en: "Who was President during World War I?",
        q_cn: "第一次世界大战期间的美国总统是谁？",
        a_en: ["(Woodrow) Wilson"],
        a_cn: ["（伍德罗）威尔逊"]
    },
    {
        q_en: "Who was President during the Great Depression and World War II?",
        q_cn: "美国经济大萧条和第二次世界大战期间的总统是谁？",
        a_en: ["(Franklin) Roosevelt"],
        a_cn: ["（富兰克林）罗斯福"]
    },
    {
        q_en: "Who did the United States fight in World War II?",
        q_cn: "美国在第二次世界大战与哪些国家作战？",
        a_en: ["Japan, Germany, and Italy"],
        a_cn: ["日本、德国、意大利"]
    },
    {
        q_en: "Before he was President, Eisenhower was a general. What war was he in?",
        q_cn: "艾森豪威尔在当总统之前是将军。他曾参加哪一场战争？",
        a_en: ["World War II"],
        a_cn: ["第二次世界大战"]
    },
    {
        q_en: "During the Cold War, what was the main concern of the United States?",
        q_cn: "冷战期间，美国的主要顾虑是什么？",
        a_en: ["Communism"],
        a_cn: ["共产主义"]
    },
    {
        q_en: "What movement tried to end racial discrimination?",
        q_cn: "试图结束种族歧视的是什么运动？",
        a_en: ["civil rights (movement)"],
        a_cn: ["民权（运动）"]
    },
    {
        q_en: "What did Martin Luther King, Jr. do?*",
        q_cn: "马丁·路德·金做了什么？",
        a_en: ["fought for civil rights", "worked for equality for all Americans"],
        a_cn: ["为民权奋斗", "为所有美国人争取平等"]
    },
    {
        q_en: "What major event happened on September 11, 2001, in the United States?",
        q_cn: "2001年9月11日，美国发生了什么重大事件？",
        a_en: ["Terrorists attacked the United States."],
        a_cn: ["恐怖分子攻击美国。"]
    },
    {
        q_en: "Name one of the two longest rivers in the United States.",
        q_cn: "列举美国最长的两条河流中的一条。",
        a_en: ["Missouri (River)", "Mississippi (River)"],
        a_cn: ["密苏里（河）", "密西西比（河）"]
    },
    {
        q_en: "What ocean is on the West Coast of the United States?",
        q_cn: "美国西岸濒临什么海洋？",
        a_en: ["Pacific (Ocean)"],
        a_cn: ["太平洋"]
    },
    {
        q_en: "What ocean is on the East Coast of the United States?",
        q_cn: "美国东岸濒临什么海洋？",
        a_en: ["Atlantic (Ocean)"],
        a_cn: ["大西洋"]
    },
    {
        q_en: "Name one U.S. territory.",
        q_cn: "列举一个美国领地。",
        a_en: ["Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Northern Mariana Islands", "Guam"],
        a_cn: ["波多黎各", "美属维尔京群岛", "美属萨摩亚", "北马里亚纳群岛", "关岛"]
    },
    {
        q_en: "Name one state that borders Canada.",
        q_cn: "列举一个与加拿大毗连的州。",
        a_en: ["Maine", "New Hampshire", "Vermont", "New York", "Pennsylvania", "Ohio", "Michigan", "Minnesota", "North Dakota", "Montana", "Idaho", "Washington", "Alaska"],
        a_cn: ["缅因州", "新罕布什尔州", "佛蒙特州", "纽约州", "宾夕法尼亚州", "俄亥俄州", "密歇根州", "明尼苏达州", "北达科他州", "蒙大拿州", "爱达荷州", "华盛顿州", "阿拉斯加州"]
    },
    {
        q_en: "Name one state that borders Mexico.",
        q_cn: "列举一个与墨西哥毗连的州。",
        a_en: ["California", "Arizona", "New Mexico", "Texas"],
        a_cn: ["加利福尼亚州", "亚利桑那州", "新墨西哥州", "得克萨斯州"]
    },
    {
        q_en: "What is the capital of the United States?*",
        q_cn: "美国的首都在哪里？",
        a_en: ["Washington, D.C."],
        a_cn: ["华盛顿哥伦比亚特区"]
    },
    {
        q_en: "Where is the Statue of Liberty?*",
        q_cn: "自由女神像在哪里？",
        a_en: ["New York (Harbor)", "Liberty Island", "New Jersey", "near New York City", "on the Hudson (River)"],
        a_cn: ["纽约（港）", "自由岛", "新泽西", "纽约市附近", "哈德逊（河）上"]
    },
    {
        q_en: "Why does the flag have 13 stripes?",
        q_cn: "国旗上为什么有十三个条纹？",
        a_en: ["because there were 13 original colonies", "because the stripes represent the original colonies"],
        a_cn: ["因为最早有十三个殖民地", "因为条纹代表最早的殖民地"]
    },
    {
        q_en: "Why does the flag have 50 stars?*",
        q_cn: "国旗上为什么有五十颗星？",
        a_en: ["because there is one star for each state", "because each star represents a state", "because there are 50 states"],
        a_cn: ["因为一颗星代表一个州", "因为每一颗星代表一个州", "因为有五十个州"]
    },
    {
        q_en: "What is the name of the national anthem?",
        q_cn: "美国国歌的名称是什么？",
        a_en: ["The Star-Spangled Banner"],
        a_cn: ["《星条旗之歌》"]
    },
    {
        q_en: "When do we celebrate Independence Day?*",
        q_cn: "我们在哪一天庆祝独立纪念日？",
        a_en: ["July 4"],
        a_cn: ["7月4日"]
    },
    {
        q_en: "Name two national U.S. holidays.",
        q_cn: "列举两个美国的法定假日。",
        a_en: ["New Year's Day", "Martin Luther King, Jr. Day", "Presidents' Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"],
        a_cn: ["新年", "马丁·路德·金日", "总统日", "阵亡将士纪念日", "独立纪念日", "劳工节", "哥伦布日", "退伍军人节", "感恩节", "圣诞节"]
    },
    // Current Officials
    {
        q_en: "Who is the Chief Justice of the United States now?",
        q_cn: "现任美国首席大法官是谁？",
        a_en: ["John Roberts"],
        a_cn: ["约翰·罗伯茨 (John Roberts)"]
    },
    {
        q_en: "What is the name of the Vice President of the United States now?",
        q_cn: "现任美国副总统名字是什么？",
        a_en: ["J.D. Vance"],
        a_cn: ["J.D. 万斯 (J.D. Vance)"]
    },
    {
        q_en: "What is the name of the Speaker of the House of Representatives now?",
        q_cn: "现任众议院议长名字是什么？",
        a_en: ["Mike Johnson"],
        a_cn: ["迈克·约翰逊 (Mike Johnson)"]
    },
    {
        q_en: "Who is the Governor of your state now?",
        q_cn: "您居住州的现任州长是谁？",
        a_en: ["Greg Abbott"],
        a_cn: ["格雷格·阿博特 (Greg Abbott)"]
    },
    {
        q_en: "What is the capital of your state?",
        q_cn: "您居住州的首都在哪里？",
        a_en: ["Austin"],
        a_cn: ["奥斯汀 (Austin)"]
    },
    {
        q_en: "What is the name of the President of the United States now?",
        q_cn: "现任美国总统名字是什么？",
        a_en: ["Donald Trump"],
        a_cn: ["唐纳德·特朗普 (Donald Trump)"]
    },
    {
        q_en: "What is the political party of the President now?",
        q_cn: "现任总统属于哪个政党？",
        a_en: ["Republican Party"],
        a_cn: ["共和党"]
    }
];
