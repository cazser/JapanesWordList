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





{"日文":"ばん", "中文":"晚上"},
{"日文":"あさ", "中文":"早晨"},





];

wordList.sort((a, b)=> a.日文.length - b.日文.length);

export default wordList;