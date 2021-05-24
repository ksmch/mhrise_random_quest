const all_quests = 
    [
        {type: 1, level: 1,name: '唐傘の妖怪',target: 'アケノシルム'},
        {type: 1, level: 1,name: '真夜中のクルルヤック退治',target: 'クルルヤック'},
        {type: 1, level: 1,name: '寒冷群島のカマイタチ',target: 'オサイズチ'},
        {type: 1, level: 1,name: '眠狗竜、寒冷群島に現る',target: 'ドスバギィ'},
        {type: 1, level: 1,name: '迫る雪玉にご注意を',target: 'ウルクスス'},
        {type: 1, level: 1,name: '大社跡を駆ける毒狗竜',target: 'ドスフロギィ'},
        {type: 1, level: 1,name: 'ハチミツ争奪戦',target: 'アオアシラ'},
        {type: 5, level: 1,name: '大社跡に夜の静けさを',target: 'イズチ,オルタロス'},
        {type: 5, level: 1,name: '最近話題の厄介者たち',target: 'スクアギル,ブナハブラ'},
        {type: 7, level: 1,name: '大社跡の探索ツアー',target: 'なし'},
        {type: 7, level: 1,name: '寒冷群島の探索ツアー',target: 'なし'},
        {type: 1, level: 2,name: 'しっぽでぐるぐる',target: 'ビシュテンゴ'},
        {type: 1, level: 2,name: '本気のプケプケ観察',target: 'プケプケ'},
        {type: 1, level: 2,name: '水没する水没林',target: 'ロアルドロス'},
        {type: 1, level: 2,name: 'かたーいアタマのボルボロス',target: 'ボルボロス'},
        {type: 1, level: 2,name: '迫り来る白い影',target: 'フルフル'},
        {type: 1, level: 2,name: '砂原転がるラングロトラ',target: 'ラングロトラ'},
        {type: 1, level: 2,name: '振り向けばバサルモス',target: 'バサルモス'},
        {type: 1, level: 2,name: '女王様になる方法',target: 'リオレイア'},
        {type: 1, level: 2,name: '丸呑み力士',target: 'ヨツミワドウ'},
        {type: 5, level: 2,name: 'ボクもワタシもケストドン？',target: 'ケストドン'},
        {type: 5, level: 2,name: '皮・皮・皮',target: 'ジャグラス,ルドロス'},
        {type: 1, level: 2,name: '兎と蛙のぶつかり稽古',target: 'ウルクスス,ヨツミワドウ'},
        {type: 1, level: 2,name: '水の獣と火の竜と',target: 'ロアルドロス,リオレイア'},
        {type: 7, level: 2,name: '砂原の探索ツアー',target: 'なし'},
        {type: 7, level: 2,name: '水没林の探索ツアー',target: 'なし'},
        {type: 1, level: 3,name: '眠りへのいざない',target: 'イソネミクニ'},
        {type: 1, level: 3,name: '氷雪ファイター',target: 'ゴシャハギ'},
        {type: 1, level: 3,name: '飛雷、地を跳ねる',target: 'トビカガチ'},
        {type: 1, level: 3,name: '泥、どろ、オロミドロ',target: 'オロミドロ'},
        {type: 1, level: 3,name: '溶岩洞の暴れん坊',target: 'アンジャナフ'},
        {type: 1, level: 3,name: '闇夜を奔る双星',target: 'ナルガクルガ'},
        {type: 1, level: 3,name: '泡狐に魅せられて',target: 'タマミツネ'},
        {type: 1, level: 3,name: '王者、溶岩洞に振り立つ',target: 'リオレウス'},
        {type: 1, level: 3,name: '水月に雷鳴',target: 'ジンオウガ'},
        {type: 1, level: 3,name: '白騎士　対　狩人',target: 'ベリオロス'},
        {type: 1, level: 3,name: '友に向けられた咆哮',target: 'ティガレックス'},
        {type: 1, level: 3,name: '鋭い角にご注意を',target: 'ディアブロス'},
        {type: 1, level: 3,name: '鬼火',target: 'マガイマガド'},
        {type: 1, level: 3,name: 'テールxテール',target: 'ビシュテンゴ,オロミドロ'},
        {type: 1, level: 3,name: '荒レ狂ウモノタチ',target: 'ティガレックス,ゴシャハギ'},
        {type: 1, level: 3,name: '災禍の中でも美しく',target: 'ボルボロス,トビカガチ,マガイマガド'},
        {type: 7, level: 3,name: '溶岩洞の探索ツアー',target: 'なし'},
        {type: 1, level: 4,name: '取り巻くつむじ風',target: 'オサイズチ'},
        {type: 1, level: 4,name: 'グルメ・モンスターズ',target: 'アオアシラ,クルルヤック'},
        {type: 1, level: 4,name: '寒地にて舟を漕ぐ',target: 'ドスバギィ,ドスバギィ'},
        {type: 1, level: 4,name: '傘鳥円舞',target: 'アケノシルム'},
        {type: 1, level: 4,name: '大場所・寒冷群島',target: 'ヨツミワドウ'},
        {type: 1, level: 4,name: '可愛いものにも牙はある',target: 'ウルクスス'},
        {type: 1, level: 4,name: 'ある夜フルフルを狩る',target: 'フルフル'},
        {type: 5, level: 4,name: 'うさ団子への道を守れの巻',target: 'イズチ,バギィ'},
        {type: 1, level: 4,name: 'たまごだんご争奪戦！ の巻',target: 'クルルヤック,クルルヤック'},
        {type: 2, level: 4,name: '会得せよ！ 片手剣の型',target: 'アケノシルム'},
        {type: 1, level: 4,name: '理解せよ！ 狩猟笛の型',target: 'オサイズチ,ヨツミワドウ'},
        {type: 1, level: 4,name: '変幻せよ！ 剣斧の型',target: 'ウルクスス,フルフル'},
        {type: 1, level: 4,name: '学べ！ 軽弩の型',target: 'ドスバギィ,ドスフロギィ'},
        {type: 1, level: 4,name: '毒の綿を纏う',target: 'ドスフロギィ'},
        {type: 5, level: 4,name: '慎重派と突進派',target: 'ジャグラス,ブルファンゴ'},
        {type: 2, level: 4,name: '青くて丸い愛しいあの子',target: 'アオアシラ'},
        {type: 7, level: 4,name: '大社跡の探索ツアー',target: 'なし'},
        {type: 7, level: 4,name: '寒冷群島の探索ツアー',target: 'なし'},
        {type: 1, level: 5,name: '水と共に生きるもの',target: 'ロアルドロス'},
        {type: 1, level: 5,name: '泥の中でも立ち上がれ',target: 'ボルボロス'},
        {type: 1, level: 5,name: '砂原の魔球にご注意を',target: 'ラングロトラ,ラングロトラ'},
        {type: 1, level: 5,name: '一柿入魂',target: 'ビシュテンゴ'},
        {type: 1, level: 5,name: 'それは血となり毒となる',target: 'プケプケ'},
        {type: 1, level: 5,name: '岩の上にも三年',target: 'バサルモス'},
        {type: 1, level: 5,name: '女王に魅せられて',target: 'リオレイア'},
        {type: 1, level: 5,name: '不穏の沼影',target: 'ジュラトドス'},
        {type: 1, level: 5,name: '見極めよ！ 大剣の型',target: 'ビシュテンゴ,ビシュテンゴ'},
        {type: 1, level: 5,name: '体で覚えよ！ ハンマーの型',target: 'プケプケ,ボルボロス'},
        {type: 2, level: 5,name: '心得よ！ ランスの型',target: 'リオレイア'},
        {type: 1, level: 5,name: '一体となれ！ 盾斧の型',target: 'ロアルドロス,ジュラトドス'},
        {type: 1, level: 5,name: '狙い撃て！ 重弩の型',target: 'バサルモス,ラングロトラ'},
        {type: 5, level: 5,name: '最近話題の固いやつら',target: 'リノプロス,ケストドン'},
        {type: 5, level: 5,name: '水没林の迷惑集団',target: 'ルドロス,フロギィ'},
        {type: 1, level: 5,name: '寒地を呑み込む影',target: 'フルフル,ヨツミワドウ'},
        {type: 4, level: 5,name: 'ヌシ・アオアシラ（百竜夜行）',target: 'ヌシ・アオアシラ'},
        {type: 7, level: 5,name: '砂原の探索ツアー',target: 'なし'},
        {type: 7, level: 5,name: '水没林の探索ツアー',target: 'なし'},
        {type: 1, level: 6,name: '山河に一閃、響く雷鳴',target: 'ジンオウガ'},
        {type: 1, level: 6,name: '冥途へ誘う歌声',target: 'イソネミクニ'},
        {type: 1, level: 6,name: '琥珀色の牙を研ぐ',target: 'ベリオロス'},
        {type: 1, level: 6,name: '頭上を飛び跳ねる脅威',target: 'トビカガチ'},
        {type: 1, level: 6,name: '猛追、蛮顎竜',target: 'アンジャナフ'},
        {type: 1, level: 6,name: '赤き双眸、夜陰を断つ',target: 'ナルガクルガ'},
        {type: 1, level: 6,name: '天井に紅蓮咲く',target: 'リオレウス'},
        {type: 1, level: 6,name: '妖艶なる舞',target: 'タマミツネ'},
        {type: 1, level: 6,name: 'かけっこ泥んこ大騒ぎ！の巻',target: 'ナルガクルガ,ジュラトドス'},
        {type: 1, level: 6,name: '研ぎ澄ませ！太刀の型',target: 'ジンオウガ,タマミツネ'},
        {type: 1, level: 6,name: '乱れ裂け！双剣の型',target: 'アンジャナフ,リオレイア'},
        {type: 2, level: 6,name: '磨け！銃槍の型',target: 'ベリオロス'},
        {type: 1, level: 6,name: '修練せよ！操虫棍の型',target: 'イソネミクニ,アケノシルム'},
        {type: 1, level: 6,name: '鍛えよ！弓の型',target: 'トビカガチ,トビカガチ'},
        {type: 5, level: 6,name: '溶岩洞の掃討戦',target: 'ウロコトル,ツケヒバキ'},
        {type: 1, level: 6,name: '英俊豪傑',target: 'アンジャナフ,タマミツネ,ジンオウガ'},
        {type: 7, level: 6,name: '溶岩洞の探索ツアー',target: 'なし'},
        {type: 1, level: 7,name: '雪鬼獣がやってくる',target: 'ゴシャハギ'},
        {type: 1, level: 7,name: '鬼火を纏いしモノ',target: 'マガイマガド'},
        {type: 1, level: 7,name: '泥海へ手招く',target: 'オロミドロ'},
        {type: 1, level: 7,name: '地底を駆ける角竜',target: 'ディアブロス'},
        {type: 1, level: 7,name: '轟轟たる咆哮',target: 'ティガレックス'},
        {type: 1, level: 7,name: '悪鬼羅刹',target: 'ラージャン'},
        {type: 1, level: 7,name: '火吹き御前',target: 'ヤツカダキ'},
        {type: 1, level: 7,name: '雷神',target: 'ナルハタタヒメ'},
        {type: 1, level: 7,name: '火加減注意！　紫炎と火球の巻',target: 'マガイマガド,リオレウス'},
        {type: 1, level: 7,name: 'うさ団子貫く四つの角！　の巻',target: 'ディアブロス,ディアブロス'},
        {type: 1, level: 7,name: '大社跡の大騒動',target: 'オロミドロ,タマミツネ'},
        {type: 1, level: 7,name: '猛き力は大地が如く',target: 'ゴシャハギ,ヨツミワドウ'},
        {type: 1, level: 7,name: '激突・激烈・激励の乱',target: 'ディアブロス,アンジャナフ'},
        {type: 1, level: 7,name: '乱暴者たちにご注意を',target: 'ラージャン,ジンオウガ'},
        {type: 1, level: 7,name: '方々から迫る脅威',target: 'ヤツカダキ,フルフル'},
        {type: 1, level: 7,name: '疾風怒涛の大舞台',target: 'トビカガチ,ナルガクルガ,ティガレックス'},
        {type: 4, level: 7,name: 'ヌシ・タマミツネ（百竜夜行）',target: 'ヌシ・タマミツネ'},
        {type: 4, level: 7,name: 'ヌシ・リオレイア（百竜夜行）',target: 'ヌシ・リオレイア'},
        {type: 4, level: 7,name: 'イブシマキヒコ（百竜夜行）',target: 'イブシマキヒコ'},
        {type: 1, level: 7,name: '古の幻影',target: 'オオナズチ'},
        {type: 1, level: 7,name: '嵐に舞う黒い影',target: 'クシャルダオラ'},
        {type: 1, level: 7,name: '炎国の王',target: 'テオ・テスカトル'},
        {type: 1, level: 7,name: '猛き炎と、闊歩する強者ども',target: 'リオレイア,ティガレックス,ヤツカダキ'},
        {type: 2, level: 7,name: '猛き炎よ、怒髪を鎮めよ',target: 'ラージャン'},
        {type: 1, level: 7,name: '降り注ぐ爆鱗の矢',target: 'バゼルギウス'},
        {type: 1, level: 7,name: '牛飲馬食、ヌシ・アオアシラ',target: 'ヌシ・アオアシラ'},
        {type: 1, level: 7,name: '優美高妙、ヌシ・リオレイア',target: 'ヌシ・リオレイア'},
        {type: 1, level: 7,name: '千紫万紅、ヌシ・タマミツネ',target: 'ヌシ・タマミツネ'},
        {type: 1, level: 7,name: 'ウツシ教官の挑戦状・其の一',target: 'オロミドロ,ジンオウガ'},
        {type: 1, level: 7,name: 'ウツシ教官の挑戦状・其の二',target: 'ゴシャハギ,ラージャン'},
        {type: 1, level: 7,name: 'ウツシ教官の挑戦状・其の三',target: 'マガイマガド,ナルガクルガ'},
        {type: 4, level: 7,name: 'ヌシ・リオレウス（百竜夜行）',target: 'ヌシ・リオレウス'},
        {type: 4, level: 7,name: 'ヌシ・ディアブロス（百竜夜行）',target: 'ヌシ・ディアブロス'},
        {type: 1, level: 6,name: '溶岩洞の巨大ガマ（イベクエ）',target: 'ヨツミワドウ'},
        {type: 1, level: 7,name: '影の迅竜（イベクエ）',target: 'ナルガクルガ'},
        {type: 1, level: 3,name: '称号・モノノフの心（イベクエ）',target: 'ゴシャハギ,マガイマガド'},
        {type: 1, level: 7,name: '急いては熊を仕損じる（イベクエ）',target: 'ヌシ・アオアシラ'},
    ];

function generate(){
    var conditions = {};

    // 条件取得：難易度
    var target_levels = [];
    var level_checkbox = document.getElementById('condition').querySelectorAll('.level:checked');
    for (i=0; i<level_checkbox.length; i++){
        // 上位
        if (level_checkbox[i].value==='1') {
            target_levels = target_levels.concat([4,5,6,7]);
            continue;
        }
        // 下位
        if (level_checkbox[i].value==='2') {
            target_levels = target_levels.concat([1,2,3]);
            continue;
        }
    }
    conditions.level = target_levels;

    // 条件取得：クエストタイプ
    var target_types = [];
    var type_checkbox = document.getElementById('condition').querySelectorAll('.type:checked');
    for (i=0; i<type_checkbox.length; i++){
        target_types.push(parseInt(type_checkbox[i].value));
    }
    conditions.type = target_types;

    // 対象クエスト絞り込み
    var target_quests = [];
    target_quests = all_quests.filter(quest => target_levels.find(level => level === quest.level));
    target_quests = target_quests.filter(quest => target_types.find(type => type === quest.type));

    var quest_count = target_quests.length;
    if (quest_count) {
        // 対象があれば抽選
        var index = Math.ceil(Math.random() * target_quests.length);
        document.getElementById('name').innerHTML='★' + target_quests[index].level + ' ' + target_quests[index].name;
        document.getElementById('target').innerHTML=target_quests[index].target;
    } else {
        // なければその旨表示
        document.getElementById('name').innerHTML='対象となるクエストがありませんでした…。';
        document.getElementById('target').innerHTML='';
    }
}
