const wordList=[
{"日文":"ちゆうごくじん", "中文":"中国人"},
{"日文":"にほんじん", "中文":"日本人"},
{"日文":"かんこくじん", "中文":"韩国人"},
{"日文":"がくせい", "中文":"学生"},
{"日文":"アメリカじん", "中文":"美国人"},
{"日文":"フランスじん", "中文":"法国人"},
{"日文":"せんせい", "中文":"老师"},
{"日文":"わたし", "中文":"我"},
{"日文":"おはようぐざいます", "中文":"早上好"},
{"日文":"こんにちわ", "中文":"你好"},
{"日文":"さようなら", "中文":"再见"},
{"日文":"こんばんわ", "中文":"晚上好"},
{"日文":"おやすみなさい", "中文":"晚安"},
{"日文":"すみません", "中文":"对不起"},
{"日文":"ありがとうございます", "中文":"谢谢"},
{"日文":"いただきます", "中文":"我吃了"},
{"日文":"ごちそうまでしだ", "中文":"吃好了"},
{"日文":"りゆうがくせい", "中文":"留学生"},
{"日文":"きようじゆ", "中文":"教授"},
{"日文":"しやいん", "中文":"职员"},
{"日文":"かいしやいん", "中文":"公司职员"},
{"日文":"てんいん", "中文":"店员"},
{"日文":"けんしゆうせい", "中文":"进修生"},
{"日文":"きぎよう", "中文":"企业"},
{"日文":"だいがく", "中文":"大学"},
{"日文":"ちち", "中文":"(我)父亲"},
{"日文":"かちよう", "中文":"科长"},
{"日文":"しやちよう", "中文":"社长"},
{"日文":"でむかえ", "中文":"迎接"},
{"日文":"あのひと", "中文":"那个人"},
{"日文":"あなだ", "中文":"你"},
{"日文":"どうも", "中文":"很，非常"},
{"日文":"はい", "中文":"是的"},
{"日文":"いいえ", "中文":"不是"},
{"日文":"り", "中文":"[人名]李"},
{"日文":"おう", "中文":"[人名]王"},
{"日文":"ちよう", "中文":"[人名]张"},
{"日文":"もり", "中文":"[人名]森"},
{"日文":"はやし", "中文":"[人名]林"},
{"日文":"おの", "中文":"[人名]小野"},
{"日文":"よしだ", "中文":"[人名]吉田"},
{"日文":"なかむら", "中文":"[人名]中村"},
{"日文":"たろう", "中文":"[人名]太郎"},
{"日文":"キム", "中文":"[人名]金"},
{"日文":"どうぞ", "中文":"请"},
{"日文":"スミス", "中文":"[人名]史密斯"},
{"日文":"はじめましで", "中文":"初次见面"},
{"日文":"こちらこそ", "中文":"我才要"},
{"日文":"そうです", "中文":"是(这样)"},
{"日文":"ちがいます", "中文":"不是"},
{"日文":"わかりません", "中文":"不知道"},
{"日文":"ほん", "中文":"书"},
{"日文":"かばん", "中文":"包，公文包"},
{"日文":"ノート", "中文":"笔记本，本子"},
{"日文":"えんぴつ", "中文":"铅笔"},
{"日文":"かさ", "中文":"雨伞"},
{"日文":"くつ", "中文":"鞋子"},
{"日文":"しんぶん", "中文":"报纸"},
{"日文":"ざっし", "中文":"杂志"},
{"日文":"じしよ", "中文":"词典"},
{"日文":"カメラ", "中文":"照相机"},
{"日文":"テレビ", "中文":"电视机"},
{"日文":"パソコン", "中文":"个人电脑"},
{"日文":"ラデオ", "中文":"收音机"},
{"日文":"でんわ", "中文":"电话"},
{"日文":"つくえ", "中文":"桌子"},
{"日文":"いす", "中文":"椅子"},
{"日文":"かぎ", "中文":"钥匙，锁"},
{"日文":"とけい", "中文":"钟，表"},
{"日文":"てちよう", "中文":"记事本"},
{"日文":"しやしん", "中文":"照片"},
{"日文":"くるま", "中文":"车"},
{"日文":"じてんしや", "中文":"自行车"},
{"日文":"おみやげ", "中文":"礼物"},
{"日文":"めいさんひん", "中文":"特产，名产"},
{"日文":"ジルク", "中文":"丝绸"},
{"日文":"ハンカチ", "中文":"手绢"},
{"日文":"かいしや", "中文":"公司"},
{"日文":"かた", "中文":"(敬称)位、人"},
{"日文":"ひと", "中文":"人"},
{"日文":"かぞく", "中文":"家人，家属"},
{"日文":"はは", "中文":"(我)母亲"},
{"日文":"おかあさん", "中文":"母亲"},
{"日文":"にほんご", "中文":"日语"},
{"日文":"ちゆうごくご", "中文":"汉语"},
{"日文":"これ", "中文":"这，这个"},
{"日文":"それ", "中文":"那，那个"},
{"日文":"あれ", "中文":"那，那个"},
{"日文":"どれ", "中文":"哪个"},
{"日文":"なん", "中文":"什么"},
{"日文":"だれ", "中文":"谁"},
{"日文":"どなた", "中文":"哪位"},
{"日文":"この", "中文":"这，这个"},
{"日文":"その", "中文":"那，那个"},
{"日文":"あの", "中文":"那，那个"},
{"日文":"どの", "中文":"哪个"},
{"日文":"なかしま", "中文":"(地名)长岛"},
{"日文":"にほん", "中文":"日本"},
{"日文":"スワトウ", "中文":"(地名)汕头"},
{"日文":"ロンドン", "中文":"(地名)伦敦"},
{"日文":"おいくつ", "中文":"多大了"},
{"日文":"テパート", "中文":"百货商店"},
{"日文":"しよくどう", "中文":"食堂"},
{"日文":"ゆうびんきよく", "中文":"邮局"},
{"日文":"ぎんこう", "中文":"银行"},
{"日文":"としよかん", "中文":"图书馆"},
{"日文":"ホタル", "中文":"宾馆"},
{"日文":"コンビニ", "中文":"便利店"},
{"日文":"きっちてん", "中文":"咖啡馆"},
{"日文":"びよういん", "中文":"医院"},
{"日文":"ほんや", "中文":"书店"},
{"日文":"レストラン", "中文":"餐馆，西餐馆"},
{"日文":"ビル", "中文":"大楼"},
{"日文":"たてもの", "中文":"建筑物，大楼"},
{"日文":"うりば", "中文":"柜台，出售处"},
{"日文":"トイレ", "中文":"厕所，盥洗室"},
{"日文":"いりぐち", "中文":"入口"},
{"日文":"じむしよ", "中文":"事务所，办事处"},
{"日文":"うけつけ", "中文":"接待处"},
{"日文":"パーゲんかいじよう", "中文":"降价大卖场"},
{"日文":"ふく", "中文":"衣服"},
{"日文":"エスカレータ", "中文":"自动扶梯"},
{"日文":"コート", "中文":"风衣，大衣"},
{"日文":"デジカメ", "中文":"数码相机"},
{"日文":"くに", "中文":"国家"},
{"日文":"ちぞ", "中文":"地图"},
{"日文":"となり", "中文":"旁边"},
{"日文":"しゆうへん", "中文":"周边"},
{"日文":"きよう", "中文":"今天"},
{"日文":"すいようび", "中文":"星期三"},
{"日文":"もくようび", "中文":"星期四"},
{"日文":"ここ", "中文":"这，这里"},
{"日文":"そこ", "中文":"那，那里"},
{"日文":"あそこ", "中文":"那，那里"},
{"日文":"こちら", "中文":"这，这里"},
{"日文":"そちら", "中文":"那，那里"},
{"日文":"あちら", "中文":"那，那里"},
{"日文":"どこ", "中文":"哪里"},
{"日文":"どちら", "中文":"哪里"},
{"日文":"あのう", "中文":"请问，对不起"},
{"日文":"シャンハイ", "中文":"上海"},
{"日文":"とうきょう", "中文":"东京"},
{"日文":"いくら", "中文":"多少钱"},
{"日文":"へや", "中文":"房价，屋子"},
{"日文":"にわ", "中文":"院子"},
{"日文":"いえ", "中文":"家"},
{"日文":"いま", "中文":"起居室"},
{"日文":"れいぞうく", "中文":"冰箱"},
{"日文":"かべ", "中文":"墙壁"},
{"日文":"スイッチ", "中文":"开关"},
{"日文":"ほんだな", "中文":"书架"},
{"日文":"べツド", "中文":"床"},
{"日文":"れこ", "中文":"猫"},
{"日文":"いぬ", "中文":"狗"},
{"日文":"はこ", "中文":"箱子，盒子"},
{"日文":"めがね", "中文":"眼镜"},
{"日文":"ビデオ", "中文":"录像机"},
{"日文":"ビール", "中文":"啤酒"},
{"日文":"サツカーボール", "中文":"足球"},
{"日文":"ウイスキー", "中文":"威士忌"},
{"日文":"こども", "中文":"孩子，小孩子"},
{"日文":"きようだい", "中文":"兄弟姐妹"},
{"日文":"りようしん", "中文":"父母，双亲"},
{"日文":"おとく", "中文":"男"},
{"日文":"おんな", "中文":"女"},
{"日文":"せいと", "中文":"学生"},
{"日文":"うえ", "中文":"上面"},
{"日文":"そと", "中文":"外面"},
{"日文":"なか", "中文":"里面，内部，中间"},
{"日文":"した", "中文":"下面"},
{"日文":"まえ", "中文":"前面"},
{"日文":"うしろ", "中文":"后面"},
{"日文":"ちかく", "中文":"附近，近旁"},
{"日文":"ばしよ", "中文":"所在地，地方，场所"},
{"日文":"きようしつ", "中文":"教室"},
{"日文":"かいぎしつ", "中文":"会议室"},
{"日文":"としよしつ", "中文":"图书室"},
{"日文":"こうえん", "中文":"公园"},
{"日文":"はなや", "中文":"花店"},
{"日文":"ばいてん", "中文":"小买店，售货亭"},
{"日文":"えき", "中文":"车站"},
{"日文":"ちかてつ", "中文":"地铁"},
{"日文":"き", "中文":"树，树木"},
{"日文":"ひとらぐらし", "中文":"单身生活"},
{"日文":"あります", "中文":"在(无意志者)"},
{"日文":"います", "中文":"在(有意志者)"},
{"日文":"よこはま", "中文":"[地名]横滨"},
{"日文":"なごや", "中文":"[地名]名古屋"},
{"日文":"おおさか", "中文":"[地名]大阪"},
{"日文":"いま", "中文":"现在"},
{"日文":"せんしゆう", "中文":"上个星期"},
{"日文":"らいしゆう", "中文":"下个星期"},
{"日文":"さらいしゆう", "中文":"下下个星期"},
{"日文":"こんしゆう", "中文":"这个星期"},
{"日文":"きのう", "中文":"昨天"},
{"日文":"あしだ", "中文":"明天"},
{"日文":"あさって", "中文":"后天"},
{"日文":"おととい", "中文":"前天"},
{"日文":"まいにち", "中文":"每天，每日"},
{"日文":"まいあさ", "中文":"每天早晨"},
{"日文":"まいばん", "中文":"每天晚上"},
{"日文":"まいしゆう", "中文":"每个星期"},
{"日文":"ごぜん", "中文":"上午"},
{"日文":"ごご", "中文":"下午"},
{"日文":"にちようび", "中文":"星期日"},
{"日文":"げつようび", "中文":"星期一"},
{"日文":"かようび", "中文":"星期二"},
{"日文":"きんようび", "中文":"星期五"},
{"日文":"どようび", "中文":"星期六"},
{"日文":"けさ", "中文":"今天早上"},
{"日文":"こんばん", "中文":"今天晚上"},
{"日文":"らいれん", "中文":"明年"},
{"日文":"きよれん", "中文":"去年"},
{"日文":"よる", "中文":"晚上，夜里"},
{"日文":"ばん", "中文":"晚上"},
{"日文":"あさ", "中文":"早晨"},
{"日文":"がっごう", "中文":"学校"},
{"日文":"しけん", "中文":"考试"},
{"日文":"しごと", "中文":"工作"},
{"日文":"ちこく", "中文":"迟到"},
{"日文":"やすみ", "中文":"休息"},
{"日文":"しゅっちょう", "中文":"出差"},
{"日文":"けんしゆう", "中文":"进修"},
{"日文":"りよこう", "中文":"旅行"},
{"日文":"てんらんかい", "中文":"展览会"},
{"日文":"かいげいかい", "中文":"欢迎会"},
{"日文":"パーティー", "中文":"联欢会"},
{"日文":"おたく", "中文":"(您)家"},
{"日文":"いつ", "中文":"什么时候"},
{"日文":"やすみます", "中文":"[动1]休息"},
{"日文":"はたらきます", "中文":"[动1]工作"},
{"日文":"はじまります", "中文":"[动1]开始"},
{"日文":"おはります", "中文":"[动1]结束"},
{"日文":"おきます", "中文":"[动2]起床"},
{"日文":"ねます", "中文":"[动2]睡觉"},
{"日文":"べんきようします", "中文":"[动3]学习"},
{"日文":"いつも", "中文":"经常，总是"},
{"日文":"こうべ", "中文":"神户"},
{"日文":"おはよう", "中文":"你早"},
{"日文":"らいげつ", "中文":"下个月"},
{"日文":"せんげつ", "中文":"上个月"},
{"日文":"よなか", "中文":"午夜，半夜"},
{"日文":"ゆうべ", "中文":"昨天晚上"},
{"日文":"コンサート", "中文":"音乐会"},
{"日文":"クリスマス", "中文":"圣诞节"},
{"日文":"たんじょうび", "中文":"生日"},
{"日文":"こどものひ", "中文":"儿童节"},
{"日文":"なつやすみ", "中文":"暑假"},
{"日文":"こうつうきかん", "中文":"交通工具"},
{"日文":"しんかんせん", "中文":"新干线"},
{"日文":"ひこうき", "中文":"飞机"},
{"日文":"フェリー", "中文":"渡轮"},
{"日文":"でんしや", "中文":"电车"},
{"日文":"バス", "中文":"公共汽车"},
{"日文":"タクシー", "中文":"出租车"},
{"日文":"びじゅつかん", "中文":"美术馆"},
{"日文":"アパート", "中文":"公寓"},
{"日文":"うち", "中文":"家"},
{"日文":"プール", "中文":"游泳池"},
{"日文":"ともだち", "中文":"朋友"},
{"日文":"いきます", "中文":"[动1]去"},
{"日文":"かえります", "中文":"[动1]回来，回去"},
{"日文":"きます", "中文":"[动3]来"},
{"日文":"たしか", "中文":"好像是，大概；的确"},
{"日文":"まっすぐ", "中文":"径直，笔直"},
{"日文":"いっしょに", "中文":"一起"},
{"日文":"さとう", "中文":"佐藤"},
{"日文":"パキン", "中文":"北京"},
{"日文":"アメリカ", "中文":"美国"},
{"日文":"かんこく", "中文":"韩国"},
{"日文":"フランス", "中文":"法国"},
{"日文":"ひろしま", "中文":"[地名]广岛"},
{"日文":"きようと", "中文":"[地名]京都"},
{"日文":"ほっかいどう", "中文":"[地名]北海道"},
{"日文":"はこね", "中文":"[地名]箱根"},
{"日文":"ぎんざ", "中文":"[地名]银座"},
{"日文":"しぶや", "中文":"[地名]涉谷"},
{"日文":"しんじゆく", "中文":"[地名]新宿"},
{"日文":"おつかれさまでした", "中文":"够累的"},
{"日文":"おさきにしつれいします", "中文":"我先走了，我先告辞了"},
{"日文":"あるいて", "中文":"步行"},
{"日文":"たいへんですれ", "中文":"真不容易，受够了"},
{"日文":"コーヒー", "中文":"咖啡"},
{"日文":"コーラ", "中文":"可乐"},
{"日文":"おちや", "中文":"茶"},
{"日文":"ワイン", "中文":"葡萄酒"},
{"日文":"パソ", "中文":"面包"},
{"日文":"ケーキ", "中文":"蛋糕"},
{"日文":"おかゆ", "中文":"粥"},
{"日文":"ひるごはん", "中文":"午饭"},
{"日文":"おべんとう", "中文":"盒饭"},
{"日文":"そば", "中文":"荞麦面"},
{"日文":"うどん", "中文":"面条"},
{"日文":"おやこどん", "中文":"鸡蛋鸡肉盖饭"},
{"日文":"カレー", "中文":"咖喱(饭)"},
{"日文":"たまご", "中文":"鸡蛋"},
{"日文":"チーズ", "中文":"奶酪"},
{"日文":"リンゴ", "中文":"苹果"},
{"日文":"イチゴ", "中文":"草莓"},
{"日文":"そばや", "中文":"荞麦面馆"},
{"日文":"テニス", "中文":"网球"},
{"日文":"ジョギング", "中文":"慢跑，跑步"},
{"日文":"サッカー", "中文":"足球"},
{"日文":"やきゆう", "中文":"棒球"},
{"日文":"もうしこみしよ", "中文":"申请书"},
{"日文":"てがみ", "中文":"信"},
{"日文":"シーディー", "中文":"CD"},
{"日文":"おんがく", "中文":"音乐"},
{"日文":"えいが", "中文":"电影"},
{"日文":"どうぶつえん", "中文":"动物园"},
{"日文":"ぱんだ", "中文":"熊猫"},
{"日文":"のみます", "中文":"[动1]喝"},
{"日文":"かいます", "中文":"[动1]买"},
{"日文":"とります", "中文":"[动1]拍照，拍摄"},
{"日文":"かきます", "中文":"[动1]写"},
{"日文":"よみます", "中文":"[动1]读"},
{"日文":"ききます", "中文":"[动1]听"},
{"日文":"たべます", "中文":"[动2]吃"},
{"日文":"みます", "中文":"[动2]看"},
{"日文":"します", "中文":"[动3]干，做"},
{"日文":"そうじします", "中文":"[动3]打扫，扫除"},
{"日文":"これから", "中文":"从现在起，今后"},
{"日文":"じやあ", "中文":"那么"},
{"日文":"いらっしゃいませ", "中文":"欢迎光临"},
{"日文":"しつれいします", "中文":"告辞了，我走了"},
{"日文":"しつれいしました", "中文":"打扰了，失礼了"},
{"日文":"いってまいります", "中文":"我走了"},
{"日文":"いってきます", "中文":"我走了"},
{"日文":"いってらっしやい", "中文":"你走好"},
{"日文":"ただいま", "中文":"我回来了"},
{"日文":"おかえりなさい", "中文":"你回来了"},
{"日文":"かしこまりました", "中文":"我知道了"},
{"日文":"おじやまします", "中文":"打扰了"},
{"日文":"ください", "中文":"给我"},
{"日文":"ごぜんちゆう", "中文":"上午"},
{"日文":"プレゼント", "中文":"礼物"},
{"日文":"チケツト", "中文":"票"},
{"日文":"パンフレツト", "中文":"小册子"},
{"日文":"きんねんひん", "中文":"纪念品"},
{"日文":"スケジュールひよう", "中文":"日程表"},
{"日文":"しやさんしゆう", "中文":"影集"},
{"日文":"はな", "中文":"花"},
{"日文":"おかね", "中文":"钱，金钱"},
{"日文":"ポールぺン", "中文":"圆珠笔"},
{"日文":"しゆくだい", "中文":"作业"},
{"日文":"こうくうびん", "中文":"航空邮件"},
{"日文":"そくたつ", "中文":"速递，快件"},
{"日文":"ファツクス", "中文":"传真"},
{"日文":"メール", "中文":"邮件"},
{"日文":"でんわばんごう", "中文":"电话号码"},
{"日文":"じゆうしよ", "中文":"住址"},
{"日文":"なまえ", "中文":"姓名"},
{"日文":"けん", "中文":"事件，事情"},
{"日文":"しんぶしん", "中文":"报纸"},
{"日文":"かみひこうき", "中文":"纸飞机"},
{"日文":"チョコレート", "中文":"巧克力"},
{"日文":"アイスクリーム", "中文":"冰淇淋"},
{"日文":"こむぎこ", "中文":"面粉"},
{"日文":"はし", "中文":"筷子"},
{"日文":"スプーン", "中文":"勺子"},
{"日文":"おにんさん", "中文":"哥哥"},
{"日文":"かんこくご", "中文":"韩国语"},
{"日文":"ゆうがた", "中文":"傍晚"},
{"日文":"ひるやすみ", "中文":"午休"},
{"日文":"もらいます", "中文":"[动1]拿到，得到"},
{"日文":"あいます", "中文":"[动1]见"},
{"日文":"おくります", "中文":"[动1]寄"},
{"日文":"つくります", "中文":"[动1]做，制造"},
{"日文":"ふとります", "中文":"[动1]胖"},
{"日文":"だします", "中文":"[动1]寄(信)"},
{"日文":"とどきます", "中文":"[动1]收到，送到，寄到"},
{"日文":"かきます", "中文":"[动1]画"},
{"日文":"かします", "中文":"[动1]借出，借给"},
{"日文":"ならいます", "中文":"[动1]学习"},
{"日文":"あげます", "中文":"[动2]给"},
{"日文":"かけます", "中文":"[动2]打(电话)"},
{"日文":"かります", "中文":"[动2](向别人)借"},
{"日文":"おしえます", "中文":"[动2]教"},
{"日文":"もう", "中文":"已经"},
{"日文":"さっき", "中文":"刚才"},
{"日文":"たったいま", "中文":"刚刚"},
{"日文":"もういちど", "中文":"再一次"},
{"日文":"まえに", "中文":"前"},
{"日文":"ちん", "中文":"[人名]陈"},
{"日文":"どうですか", "中文":"怎样，如何"},
{"日文":"おれがいします", "中文":"拜托了"},
{"日文":"わかりました", "中文":"明白了"},
{"日文":"よかったです", "中文":"太好了"},
{"日文":"りようり", "中文":"菜肴，饭菜"},
{"日文":"しせんりようり", "中文":"四川菜"},
{"日文":"スープ", "中文":"汤"},
{"日文":"ぺキンダック", "中文":"北京烤鸭"},
{"日文":"たべもの", "中文":"食品，食物"},
{"日文":"すきやき", "中文":"日式牛肉火锅"},
{"日文":"おんせん", "中文":"温泉"},
{"日文":"おゆ", "中文":"热水，开水"},
{"日文":"みぞ", "中文":"凉水"},
{"日文":"よかた", "中文":"浴衣，夏季和服"},
{"日文":"ながめ", "中文":"景色，风景"},
{"日文":"くすり", "中文":"药"},
{"日文":"てんき", "中文":"天气"},
{"日文":"うみ", "中文":"大海"},
{"日文":"やま", "中文":"山"},
{"日文":"かみ", "中文":"纸"},
{"日文":"ニユース", "中文":"新闻"},
{"日文":"じよせい", "中文":"女性"},
{"日文":"おきやくさま", "中文":"来宾"},
{"日文":"グラス", "中文":"玻璃杯"},
{"日文":"かぶき", "中文":"歌舞伎"},
{"日文":"きもち", "中文":"心情"},
{"日文":"たくさん", "中文":"很多"},
{"日文":"からい", "中文":"[形1]辣"},
{"日文":"あまい", "中文":"[形1]甜"},
{"日文":"しおからまい", "中文":"[形1]咸"},
{"日文":"すっばい", "中文":"[形1]酸"},
{"日文":"にがい", "中文":"[形1]苦"},
{"日文":"おいしい", "中文":"[形1] 好吃，可口"},
{"日文":"まぞい", "中文":"[形1] 不好吃，难吃"},
{"日文":"あつい", "中文":"[形1] 热，烫"},
{"日文":"つあたい", "中文":"[形1] 凉"},
{"日文":"たのしい", "中文":"[形1] 愉快，快乐"},
{"日文":"おもしろい", "中文":"[形1] 有趣，有意思"},
{"日文":"つまらない", "中文":"[形1] 无聊"},
{"日文":"ひろい", "中文":"[形1] 广阔，宽阔"},
{"日文":"せまい", "中文":"[形1] 狭窄"},
{"日文":"おおきい", "中文":"[形1] 大"},
{"日文":"ちいさい", "中文":"[形1] 小"},
{"日文":"いそがしい", "中文":"[形1] 忙，忙碌"},
{"日文":"いい", "中文":"[形1] 好"},
{"日文":"わるい", "中文":"[形1] 不好，坏"},
{"日文":"すばらしい", "中文":"[形1] 绝好，极好"},
{"日文":"とおい", "中文":"[形1] 远"},
{"日文":"ちかい", "中文":"[形1] 近"},
{"日文":"たかい", "中文":"[形1] 高，贵"},
{"日文":"ひくい", "中文":"[形1] 低"},
{"日文":"やすい", "中文":"[形1] 便宜"},
{"日文":"さむい", "中文":"[形1] 寒冷"},
{"日文":"あつい", "中文":"[形1] (天气)热的"},
{"日文":"あおい", "中文":"[形1] 蓝色的"},
{"日文":"しろい", "中文":"[形1] 白色的"},
{"日文":"あたらしい", "中文":"[形1] 新"},
{"日文":"ふるい", "中文":"[形1] 旧"},
{"日文":"むずかしい", "中文":"[形1] 难"},
{"日文":"やさしい", "中文":"[形1] 易"},
{"日文":"おおい", "中文":"[形1] 多"},
{"日文":"すくない", "中文":"[形1] 少"},
{"日文":"かわいい", "中文":"[形1] 可爱"},
{"日文":"ほんとうに", "中文":"真的，实在是"},
{"日文":"あまり", "中文":"不(太)~,不很~"},
{"日文":"とても", "中文":"很，非常"},
{"日文":"すこし", "中文":"一点儿"},
{"日文":"ぜんぜん", "中文":"根本不，全然不"},
{"日文":"ちようど", "中文":"正好，恰好"},
{"日文":"てんあんもん", "中文":"[专]天安门"},
{"日文":"ばんりのちようじよう", "中文":"[专]万里长城"},
{"日文":"きもちがいい", "中文":"感觉舒服，心情愉快"},
{"日文":"もみじ", "中文":"红叶"},
{"日文":"こきよう", "中文":"故乡"},
{"日文":"とおり", "中文":"大街"},
{"日文":"まち", "中文":"城市，街道"},
{"日文":"ところ", "中文":"场所"},
{"日文":"おませ", "中文":"餐馆，商店"},
{"日文":"にんぎよう", "中文":"玩偶"},
{"日文":"さくひん", "中文":"作品"},
{"日文":"ちょうこく", "中文":"雕刻"},
{"日文":"じどうしゃ", "中文":"汽车"},
{"日文":"どうぐ", "中文":"工具"},
{"日文":"さかな", "中文":"鱼"},
{"日文":"おがし", "中文":"点心"},
{"日文":"もの", "中文":"物品，东西"},
{"日文":"ラーズン", "中文":"季节"},
{"日文":"しゅうがくりよこう", "中文":"修学旅行"},
{"日文":"かんこうきやく", "中文":"游客"},
{"日文":"さっか", "中文":"作家"},
{"日文":"ぶちょう", "中文":"部长"},
{"日文":"へいじつ", "中文":"平日,非休息日"},
{"日文":"ひ", "中文":"日"},
{"日文":"せいかつ", "中文":"生活"},
{"日文":"ぜかい", "中文":"世界"},
{"日文":"はれ", "中文":"晴天"},
{"日文":"あめ", "中文":"雨，下雨"},
{"日文":"くもり", "中文":"阴天"},
{"日文":"ゆき", "中文":"雪"},
{"日文":"きたない", "中文":"[形1]脏"},
{"日文":"きれい", "中文":"[形2]漂亮，干净"},
{"日文":"ゆうめい", "中文":"[形2]有名"},
{"日文":"にぎやか", "中文":"[形2]热闹，繁华"},
{"日文":"しずか", "中文":"[形2]安静"},
{"日文":"ひま", "中文":"[形2]空闲"},
{"日文":"しんせつ", "中文":"[形2]热情"},
{"日文":"すき", "中文":"[形2]喜欢"},
{"日文":"きらい", "中文":"[形2]讨厌"},
{"日文":"バんり", "中文":"[形2]方便"},
{"日文":"ふべん", "中文":"[形2]不方便"},
{"日文":"げんき", "中文":"[形2]健康,有精神"},
{"日文":"かんたん", "中文":"[形2]简单"},
{"日文":"ハンサム", "中文":"[形2]英俊，帅气"},
{"日文":"どんな", "中文":"什么样的，怎样的"},
{"日文":"どう", "中文":"怎样，如何"},
{"日文":"いかが", "中文":"如何"},
{"日文":"いろいろ", "中文":"各种各样"},
{"日文":"でも", "中文":"可是，不过"},
{"日文":"そして", "中文":"而且，于是"},
{"日文":"ところで", "中文":"(转换话题)哎"},
{"日文":"なら", "中文":"[地名]奈良"},
{"日文":"ふじさん", "中文":"[地名]富士山"},
{"日文":"もうすこし", "中文":"再~一点"},
{"日文":"うた", "中文":"歌，歌曲"},
{"日文":"カラオケ", "中文":"卡拉OK"},
{"日文":"ロック", "中文":"摇滚乐"},
{"日文":"ポップス", "中文":"流行音乐"},
{"日文":"クラシック", "中文":"西方古典音乐"},
{"日文":"ピアノ", "中文":"钢琴"},
{"日文":"え", "中文":"画儿"},
{"日文":"えいご", "中文":"英语"},
{"日文":"スペインご", "中文":"西班牙语"},
{"日文":"スポーツ", "中文":"体育，运动"},
{"日文":"すいえい", "中文":"游泳"},
{"日文":"ゴルフ", "中文":"高尓夫球"},
{"日文":"うんてん", "中文":"开车"},
{"日文":"のみもの", "中文":"饮料"},
{"日文":"おさけ", "中文":"酒，酒类"},
{"日文":"にく", "中文":"肉"},
{"日文":"やさい", "中文":"蔬菜"},
{"日文":"くだもの", "中文":"水果"},
{"日文":"ヒマワリ", "中文":"向日葵"},
{"日文":"バラ", "中文":"蔷薇，玫瑰"},
{"日文":"コンピュータ", "中文":"计算机，电脑"},
{"日文":"まど", "中文":"窗，窗户"},
{"日文":"けっこんしき", "中文":"结婚典礼"},
{"日文":"しやしんてん", "中文":"摄影展"},
{"日文":"りよかん", "中文":"旅馆，旅店"},
{"日文":"べっそう", "中文":"別墅"},
{"日文":"よせぎざいく", "中文":"木片儿拼花工业品"},
{"日文":"もよう", "中文":"花纹，纹案"},
{"日文":"がいこく", "中文":"外国"},
{"日文":"かいぎ", "中文":"会议"},
{"日文":"あし", "中文":"腿"},
{"日文":"ぼく", "中文":"我(男性自称)"},
{"日文":"わがります", "中文":"[动1]懂，明白"},
{"日文":"まよいます", "中文":"[动1]犹豫，难以决定"},
{"日文":"できます", "中文":"[动2]能；会"},
{"日文":"しめます", "中文":"[动2]关闭；关门"},
{"日文":"つかれます", "中文":"[动2]疲惫；疲倦"},
{"日文":"さんぽします", "中文":"[动3]散步"},
{"日文":"こわい", "中文":"[形1]害怕；恐怖"},
{"日文":"あかい", "中文":"[形1]红"},
{"日文":"いたい", "中文":"[形1]疼；疼痛"},
{"日文":"じようず", "中文":"[形2]擅长；高明；水平高"},
{"日文":"へた", "中文":"[形2]不高明,水平低"},
{"日文":"にがて", "中文":"[形2]不擅长；不善于"},
{"日文":"ときどき", "中文":"有时；时不时"},
{"日文":"よく", "中文":"经常；常常"},
{"日文":"たまに", "中文":"偶尔；很少"},
{"日文":"また", "中文":"还，再，又"},
{"日文":"どうして", "中文":"为什么"},
{"日文":"をから", "中文":"所以,因此"},
{"日文":"そすから", "中文":"所以,因此"},
{"日文":"きにいります", "中文":"喜欢；中意"},
{"日文":"など", "中文":"等等"},
{"日文":"きせつ", "中文":"季节"},
{"日文":"ふゆ", "中文":"冬天,冬季"},
{"日文":"ふゆ", "中文":"冬天,冬季"},
{"日文":"はる", "中文":"春天,春季"},
{"日文":"にほんりようり", "中文":"日式饭菜"},
{"日文":"すし", "中文":"寿司"},
{"日文":"ナジ", "中文":"梨"},
{"日文":"バナナ", "中文":"香蕉"},
{"日文":"ミカン", "中文":"橘子"},
{"日文":"しようちゅう", "中文":"烧酒"},
{"日文":"にほんしゅ", "中文":"日本酒"},
{"日文":"こうちゃ", "中文":"红茶"},
{"日文":"ウーロンちゃ", "中文":"乌龙茶"},
{"日文":"ジャスミンちゃ", "中文":"茉莉花茶"},
{"日文":"りよくちゃ", "中文":"绿茶"},
{"日文":"ジュース", "中文":"果汁"},
{"日文":"にんき", "中文":"声望,受欢迎"},
{"日文":"せき", "中文":"座位,席位"},
{"日文":"クラス", "中文":"班级"},
{"日文":"しゆるい", "中文":"种类"},
{"日文":"せ", "中文":"个子"},
{"日文":"あに", "中文":"哥哥,兄长"},
{"日文":"さいきん", "中文":"最近，近来"},
{"日文":"ふります", "中文":"[动1]下(雨，雪)"},
{"日文":"わかい", "中文":"[形1]年轻"},
{"日文":"あたたかい", "中文":"[形1]暖和,温暖"},
{"日文":"すずしい", "中文":"[形1]凉爽"},
{"日文":"たいすき", "中文":"[形2]非常喜炊"},
{"日文":"いちばん", "中文":"最,第一"},
{"日文":"ずっと", "中文":"~得多"},
{"日文":"ずっと", "中文":"~得多"},
{"日文":"やはり", "中文":"仍然，还是"},
{"日文":"やっばり", "中文":"仍然，还是"},
{"日文":"工べレスト", "中文":"珠穆朗珥峰"},
{"日文":"にんきがあります", "中文":"受欢迎"},
{"日文":"にもつ", "中文":"包裹"},
{"日文":"はがき", "中文":"明信片"},
{"日文":"きって", "中文":"邮票"},
{"日文":"ひきだし", "中文":"抽屉"},
{"日文":"アルバム", "中文":"相册"},
{"日文":"タバコ", "中文":"烟,烟草"},
{"日文":"まんが", "中文":"漫画"},
{"日文":"ガレージ", "中文":"车库，汽车房"},
{"日文":"しゅうり", "中文":"修理"},
{"日文":"いざかや", "中文":"酒馆"},
{"日文":"なまどール", "中文":"生啤"},
{"日文":"やきとり", "中文":"烤鸡肉串"},
{"日文":"からあげ", "中文":"炸鸡，油炸食品"},
{"日文":"にくじゃが", "中文":"土豆炖肉"},
{"日文":"ポーリング", "中文":"保龄球"},
{"日文":"かみ", "中文":"头发"},
{"日文":"ぞう", "中文":"象,大象"},
{"日文":"ひる", "中文":"白天,中午"},
{"日文":"ほか", "中文":"另外,其他"},
{"日文":"かかります", "中文":"[动1]花費(吋同,金钱)"},
{"日文":"さきます", "中文":"[动1]花开"},
{"日文":"およぎます", "中文":"[动1]游泳"},
{"日文":"あそびます", "中文":"[动1]玩,玩耍"},
{"日文":"すいます", "中文":"[动1]吸(烟)"},
{"日文":"きります", "中文":"[动1]剪,切,割"},
{"日文":"だいたい", "中文":"大约,大概,大体"},
{"日文":"とりあえず", "中文":"暂且"},
{"日文":"ふなびん", "中文":"海运"},
{"日文":"しよるい", "中文":"文件,文稿"},
{"日文":"げんごう", "中文":"稿子,原稿"},
{"日文":"きじ", "中文":"报道"},
{"日文":"メモ", "中文":"记录"},
{"日文":"えきまえ", "中文":"车站一带"},
{"日文":"はし", "中文":"桥，桥梁"},
{"日文":"かど", "中文":"拐角"},
{"日文":"おうだんほどう", "中文":"人行横道"},
{"日文":"みぎ", "中文":"右，右边"},
{"日文":"ひだり", "中文":"左，左边"},
{"日文":"こうさてん", "中文":"十字路口"},
{"日文":"みち", "中文":"路,道路"},
{"日文":"ドア", "中文":"门"},
{"日文":"でんき", "中文":"电，电力"},
{"日文":"たいきよくけん", "中文":"太极拳"},
{"日文":"あさごはん", "中文":"早饭"},
{"日文":"ばんごはん", "中文":"晚饭"},
{"日文":"バーへキュー", "中文":"户外烧烤"},
{"日文":"とおります", "中文":"[动1]通过，经过"},
{"日文":"いそぎます", "中文":"[动1]急，匆忙"},
{"日文":"とびます", "中文":"[动1]飞，飞行"},
{"日文":"しにます", "中文":"[动1]死,死亡"},
{"日文":"まちます", "中文":"[动1]等待,等候"},
{"日文":"うります", "中文":"[动1]买，销售"},
{"日文":"はなします", "中文":"[动1]说话，说"},
{"日文":"わたります", "中文":"[动1]过(桥，河)，穿过(马路)"},
{"日文":"おろします", "中文":"[动1]取，卸货"},
{"日文":"えらびます", "中文":"[动1]挑选，选择"},
{"日文":"けします", "中文":"[动1](关)灯，消除，去除"},
{"日文":"あるきます", "中文":"[动1]步行，行走"},
{"日文":"まがります", "中文":"[动1]拐弯,曲折"},
{"日文":"あらいます", "中文":"[动1]洗,洗涤"},
{"日文":"でます", "中文":"[动2]离开"},
{"日文":"でかけます", "中文":"[动2]外出,出冂"},
{"日文":"あけます", "中文":"[动2]开，打开，开启"},
{"日文":"すぎます", "中文":"[动2]过"},
{"日文":"みせます", "中文":"[动2]给~看,出示"},
{"日文":"つけます", "中文":"[动2]开(灯)"},
{"日文":"おります", "中文":"[动2]下(车,山)"},
{"日文":"かいものします", "中文":"[动3]买东西"},
{"日文":"そっぎようします", "中文":"[动3]毕业"},
{"日文":"しよくじします", "中文":"[动3]吃饭，用餐"},
{"日文":"せいりします", "中文":"[动3]整理"},
{"日文":"コピーします", "中文":"[动3]复印"},
{"日文":"くらい", "中文":"[形1]黑暗，昏暗"},
{"日文":"たいへん", "中文":"[形2]够受的，不得了"},
{"日文":"なかなか", "中文":"相当,很,非常"},
{"日文":"こう", "中文":"这样，如此"},
{"日文":"そう", "中文":"那样"},
{"日文":"ああ", "中文":"那样"},
{"日文":"あとで", "中文":"过会儿"},
{"日文":"それから", "中文":"然后；另外"},
{"日文":"すみませんが", "中文":"对不起...,劳驾..."},


];

wordList.sort((a, b)=> a.日文.length - b.日文.length);

export default wordList;