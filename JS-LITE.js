 hostname =biz.caiyunapp.com,*.baidu.com,mid.zineapi.com,api.feidee.net, userapi.feidee.net, tg.feidee.com, community.feidee.com
,app.api.versa-ai.com,i.xinyulib.com.cn, user-kaji-api.b612kaji.com,buy.itunes.apple.com,server.yoyiapp.com,api.revenuecat.com, *.gotokeep.com,*.wtzw.com,*.xiaohongshu.com,api.account.meitu.com, api.meiyan.com,vira.llsapp.com,api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com,api.rr.tv, *.baidu.com,notability.com, openapi.17usoft.net,bmall.camera360.com,api.polaxiong.com,pan.baidu.com,api.bjxkhc.com,guide-acs.m.taobao.com,ap?.bilibili.com,weixin110.qq.com,web.vizmato.com,api.neuralprisma.com,getuserinfo-globalapi.zymk.cn,account.wps.cn,*.xxjjappss.com,*.huaerdadi.com,*.xiaoxiaoapps.com,*.xiaoxiaoimg.com,*.csdn.net,ws.60he.com,pan.baidu.com,mb3admin.com,*.googlevideo.com,baimiao.uzero.cn,nmeditation.snailsleep.net,snailsleep.net,music.snailsleep.net,community.snailsleep.net,vip1.kuwo.cn,vsco.co, api.revenuecat.com,api.vnision.com,dida365.com, ticktick.com, p.du.163.com,account.wps.cn, api.gyrosco.pe,origin-prod-phoenix.jibjab.com,api.termius.com,viva.v21xy.com,ap*.intsig.net,api.vuevideo.net,mp.bybutter.com,api.picsart.c*, api.meiease.c*,splice.oracle.*.com,api.textnow.me,commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com,dict.eudic.net,api.flexibits.com,api.jiaonizuocai.com,api.sololearn.com,note.youdao.com,billing.peakcloud.org,api.ithome.com,www.xmind.cn,*.videostarapp.com,api.revenuecat.com,app.api.versa-ai.com,*.xunjie*.com,avoscloud.com,bea.sportq.com,greasyfork.org, openuserjs.org,api.weibo.cn, mapi.weibo.com, *.uve.weibo.com,mp.weixin.qq.com, *.amemv.com, ios-h2.prod.ftl.netflix.com, ios.prod.ftl.netflix.com, homepage-api.smzdm.com, haojia-api.smzdm.com, article-api.smzdm.com, haojia.m.smzdm.com, app-api.smzdm.com, s-api.smzdm.com,ms.jr.jd.com,wmapi.meituan.com,gw.alicdn.com,elemecdn.com, fuss10.elemecdn.com, www1.elecfans.com,apis.lifeweek.com.cn,support.you.163.com,yanxuan.nosdn.127.net,*.peopleapp.com,api-mifit-sg2.huami.com,new-app-api.ylyk.com,gw.aihuishou.com,*.58cdn.com.cn, app.58.com,acs.m.taobao.com,static.zhihu.com,res.xiaojukeji.com, 116.85.2.15, 116.85.2.14,api.gotokeep.com,pages.xiaohongshu.com, www.xiaohongshu.com

# 圖圖記賬解鎖會員權限 api.revenuecat.com
https?:\/\/api\.magictouch\.design\/user\/user\/getUserByDevice url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/tutujizhang.js

# 彩云天气 biz.caiyunapp.com
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://gjds.vip/QX/pojie/cytq.js

# 百度不跳转 *.baidu.com
^https?:\/\/.*\.baidu\.com\/.+ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/Purity/DisableBaiduJumpAction.js

# varlens(20220202)  by ddgksf2013 mid.zineapi.com, 
^https?:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/varlens.js

# 随手记(2022.01.24) api.feidee.net, userapi.feidee.net, tg.feidee.com, community.feidee.com
^https?:\/\/((user)?api|community)\.feidee\.(net|com)\/(v\d\/(pay/vip|profile/basic_info|app_themes/types)|transfer\/gapi\/accurat\/v\d\/tasks) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/SuiShouJi.js
^https?:\/\/api\.feidee\.net\/v\d\/app_themes\/\d+\/download url script-echo-response https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/SuiShouJi.js
^https?:\/\/tg\.feidee\.com\/online_ad\/ url reject

# 马卡龙玩图(2022.01.24) app.api.versa-ai.com
^https?:\/\/app\.api\.versa-ai\.com\/pay\/order\/iap\/check url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MaKaLongWanTu.js

# 新语听书解锁会员 by Hausd0rff i.xinyulib.com.cn
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/XinYuLibraryProCrack.js

# B612咔叽 by ddgksf2013  user-kaji-api.b612kaji.com,
https://user-kaji-api.b612kaji.com/v1/purchase/subscription/subscriber/status url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/612.js

# OldRoll解锁永久会员 by Hausd0rff buy.itunes.apple.com
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/OldRollFVIPCrack.js

# NewFace解锁永久会员 by Hausd0rff buy.itunes.apple.com
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NewFaceFVIPCrack.js

# FIMO解锁全部胶卷 by Hausd0rff server.yoyiapp.com
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/apple\/certificate$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/FiMoCameraProCrack.js

# AudioMack解锁永久订阅 api.revenuecat.com
# ^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/(identify|\d+)$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/AudioMackFProCrack.js

# keep解锁会员    *.gotokeep.com
^https://(.+).gotokeep.com(/athena/v5/people/my|/nuocha/plans) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/keep.js

# 七猫小说(2022.01.18 *.wtzw.com)
^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/QiMaoXiaoShuo.js

# 小红书开屏广告 *.xiaohongshu.com
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config url script-response-body https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/xiaohongshu/xiaohongshu.ad.js

# 美颜相机(2022.01.15 api.account.meitu.com, api.meiyan.com)
^https?:\/\/api\.account\.meitu\.com\/(common\/check_device_login_pwd|users\/show_current\.json) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiYanXiangJi.js
^https?:\/\/api\.meiyan\.com\/vip\/(user_center\.json|user_info\.json) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiYanXiangJi.js

# 流利说·阅读(2022.01.16 vira.llsapp.com)
^https?:\/\/vira\.llsapp\.com\/api\/v\d\/\w+\/\w+$  url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/LiuLiShuo-YueDu.js

# 美图秀秀(2022.01.17 api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com)
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js

# 人人视频 api.rr.tv
# ～ ⓪ RRTV_屏蔽限时弹窗@ddgksf2013
https://api.rr.tv/storage/business/rootName/app/homePage\?dataType=JSON url reject-dict
# ～ ⑨ RRTV_屏蔽软件更新@ddgksf2013
^https?:\/\/api\.rr\.tv\/.*?Version url reject
# ～ ⑧ RRTV_去除首頁廣告@ddgksf2013
https://api.rr.tv/v3plus/index/channel\?pageNum=1&position=CHANNEL_INDEX url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ⑦ RRTV_去除廣場tab@ddgksf2013
^https?:\/\/api\.rr\.tv\/app\/config\/h5NativeBar url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ⑥ RRTV_去除商城廣告@ddgksf2013
^https?:\/\/api\.rr\.tv\/v3plus\/index\/channel\?pageNum=1&position=CHANNEL_MY url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ⑤ RRTV_Ad_List@ddgksf2013
^https:\/\/api\.rr\.tv\/user\/privilege\/list url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ④ RRTV_Ad_All@ddgksf2013
^https:\/\/api\.rr\.tv\/ad\/getAll url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ③ RRTV_Get_Drama@ddgksf2013
^https:\/\/api\.rr\.tv\/drama\/app\/get_combined_drama_detail url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ② RRTV_Watch_V4@ddgksf2013
https://api.rr.tv/watch/v4 url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js
# ～ ① RRTV_User_Info@ddgksf2013
https://api.rr.tv/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/rrtv.js

# 国区TF无法下载已下架app规则
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

# 强制跳转百度UA    *.baidu.com
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# notability 订阅 （notability.com）
https://notability.com/subscriptions url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Notability.js

# 微博去广告
https:\/\/api\.weibo\.com\/oauth2\/getaid url reject

# 10086去开屏广告
;https:\/\/10086\.online\-cmcc\.cn\:20010\/gfms\/front\/hn\/busi3\!getAdvert url script-response-body https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/remove_ad/10086.js

# keep 去广告
https:\/\/api\.gotokeep\.com\/ads\/v1\/ads\?spotIds url reject

# 微信小程序搜索🔍同程旅行✈️点击主页下面的【火车票优惠】即可（openapi.17usoft.net）
https://openapi.17usoft.net/maskantactivityapi/memberCenterSign\?.+ url script-request-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/tclx.js

# MIX 解锁高级特权 （bmall.camera360.com）(需恢复购买)
^https?:\/\/bmall\.camera360\.com\/api\/mix\/recovery url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/MIX.js

# 泼辣修图 (api.polaxiong.com)(需恢复购买)
https:\/\/api\.polaxiong\.com\/v1\/payments\/appleiap\/receipts/confirmation url script-request-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Polarr.js

# 百度网盘解锁vip，视频倍速播放 (pan.baidu.com)
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/BaiduCloud.js

# 爱美剧Vip (by huihui）(官网：app.meiju2018.com) (api.bjxkhc.com)
#ads
^http(s)://api.bjxkhc.com/index.php/app/ios/ads/index url reject-dict
^http(s)://api.bjxkhc.com/index.php/app/ios/ver/index_ios$ url reject
^http(s)://api.bjxkhc.com/index.php/app/ios/pay/ok$ url reject-dict
# VIP&ads
^https?:\/\/api.bjxkhc.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js

# 取消绑定京东店铺会员。 点击会员卡直达注销页面
#^https:\/\/shopmember\.m\.jd\.com\/shopcard\/\?(venderId=[0-9]+).* url 302 https:\/\/shopmember\.m\.jd\.com\/member\/memberCloseAccount\?$1

# 替换支付宝内淘票票评分为豆瓣评分（guide-acs.m.taobao.com）
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopshowapi\.getextendshowbyid url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/TaoPiaoPiao/taopiaopiao.js

# 港台番剧自动跳转（ap?.bilibili.com）
#^https:\/\/ap(p|i)\.bilibili\.com\/(pgc\/view\/(v\d\/)?app|x(\/v\d)?\/view\/video)\/(season|online)\?access_key url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js
#^https:\/\/app\.bilibili\.com\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

# 微信屏蔽跳转（weixin110.qq.com）
# 在微信中打开淘宝等被屏蔽链接，点击 Surge/QuantumultX 通知跳转到 Safari 或淘宝 App
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js

# Vizmato 破解VIP无限使用高级功能（web.vizmato.com,）
https://web.vizmato.com/itunesreceipt_v5.php url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/vm.js 

# Prisma 解锁高级会员权限 畅想VIP功能（api.neuralprisma.com）
https://api.neuralprisma.com/receipt/ios/status/prisma/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/psa.js

# 知音漫客VIP (getuserinfo-globalapi.zymk.cn,)
^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

# WPS解锁  超级会员、wps会员、稻壳会员 (account.wps.cn)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# 财新周刊 解锁会员文章（by公众号墨鱼手记）
http://ipadcms.caixin.com/tmp/articles/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cxzk.js

# 小小影视 unlock Vip&免广告(*.xxjjappss.com,*.huaerdadi.com,*.xiaoxiaoapps.com,*.xiaoxiaoimg.com)
https:\/\/.*\.(xiaoxiaoapps|xiaoxiaoimg)\.com\/(ssp-svr\/ssp\/list3|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/photonmang/quantumultX/master/xxys.js

# 百度防跳转
^https?:\/\/.*\.baidu\.com url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# CSDN(,*.csdn.net)
.*:\/\/.*\.csdn\.net\/.* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/csdn.js

# pythonai破解vip(ws.60he.com)
^http:\/\/ws\.60he\.com\/(book|user).+ url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Python%20Ai.js

# 解锁百度云盘会员（pan.baidu.com）
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bdcloud.js

# 该订阅仅适用于QuantumultX, 用于更新TestFlight App时, 提示"APP不可用"问题. 解除区域限制.
^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ url script-request-body https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js

# Emby解锁(mb3admin.com)
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/qiangxinglin/Emby/main/scripts/emby.js

# 白描解锁黄金vip(baimiao.uzero.cn)
^https?:\/\/baimiao\.uzero\.cn\/api\/v\d\.user\/appLaunchWithUser$ url script-response-body https://raw.githubusercontent.com/sirsunknight/QuantumultX/master/Scripts/Baimiao.js

# 大象冥想 解锁VIP&付费音乐(nmeditation.snailsleep.net)
^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) url script-response-body https://raw.githubusercontent.com/photonmang/quantumultX/master/dxmx.js

# 蜗牛睡眠 全功能解锁VIP&付费音乐(snailsleep.net,music.snailsleep.net,community.snailsleep.net)
^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) url script-response-body https://github.com/photonmang/quantumultX/raw/master/wnsm.js

# 酷我音乐SVIP ( vip1.kuwo.cn)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1

# 酷我换肤(已经有的皮肤需要先从本地皮肤删除再换)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js

# VSCO滤镜VIP( vsco.co, api.revenuecat.com)
^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Vsco.js

# 大片-视频编辑器 VIP(api.vnision.com)
^https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js

# 滴答清单 pro(dida365.com, ticktick.com)
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/QuantumultX/File/DiDaQingDan.js

# 网易蜗牛读书VIP ( p.du.163.com)
^https?://p\.du\.163\.com/readtime/info.json url reject
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

# WPS (account.wps.cn)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# Gyroscope 解锁 pro ( api.gyrosco.pe)
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/Surge/JS/gyroscope.js

# JibJab解锁pro(origin-prod-phoenix.jibjab.com)
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/jibjab.js

# Termius 解锁本地pro  (api.termius.com)
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/Surge/JS/Termius.js

# 小影 解锁Vip (viva.v21xy.com)
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

# 扫描全能王 pro(ap*.intsig.net,)
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

# VUE pro(api.vuevideo.net)
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

# NiChi 解锁素材(mp.bybutter.com)
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/NiChi.js

# PicsArt美易 pro（api.picsart.c*, api.meiease.c*）
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

# Splice 视频编辑器 pro(splice.oracle.*.com)
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/Surge/JS/Splice.js

# textnow去广告(api.textnow.me)
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/textnow.js

# 轻颜相机 & ulike & 蒸汽波相机(vaporcam)三合一 解锁VIP(commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com)
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/qyxj.js

# 每日英语阅读/每日外刊 解锁课程  (dict.eudic.net)
^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mryy.js

# Fantastical 内购解锁 (api.flexibits.com)
^https:\/\/api\.flexibits\.com\/v1\/(auth|account)\/(device|details|appstore-receipt)\/$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/fantastical.js

# 菜谱大全解锁vip (api.jiaonizuocai.com)
https?:\/\/api\.jiaonizuocai\.com url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/cpdq.js

# SoloLearn Unlock PRO & Platinum Moderator (api.sololearn.com)
https:\/\/api\.sololearn\.com\/(authenticateDevice|challenge\/GetContestFeed|Profile\/GetProfile)$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/sololearn.js

# 有道云笔记VIP (note.youdao.com)
https://note.youdao.com/yws/(mapi/payment|api/self) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ydybj.js

# Peak 解锁Pro(billing.peakcloud.org)
^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/peak.js

# IT之家 去新闻列表广告(api.ithome.com)
^https?:\/\/api\.ithome\.com\/json\/slide\/index url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js
^https?:\/\/api\.ithome\.com\/json\/(newslist|listpage)\/news url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js

# XMind思维导图 (www.xmind.cn,)
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/XMind.js

# VideoStar Unlock（*.videostarapp.com,）
^https?:\/\/.*\.videostarapp\.com\/scripts\/subsNew\.php url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/VideoStar.js

# Pillow (api.revenuecat.com)
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/pillow.js

# 马卡龙 (app.api.versa-ai.com)
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mkl.js

# 迅捷应用6合1 （*.xunjie*.com,）
^https?:\/\/.*\.xunjie.*\.com\/api\/v\d\/* url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xunjie.js

# 西窗烛 （avoscloud.com）
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xcz.js

# Fit健身会员 （bea.sportq.com）
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/fit.js

# 油猴转换器 (greasyfork.org, openuserjs.org)
https:\/\/greasyfork\.org\/scripts\/.*\.user\.js url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/GreasyFork/greasy-fork.js

# 去微博应用内广告 (api.weibo.cn, mapi.weibo.com, *.uve.weibo.com)
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 去微信公众号广告 (mp.weixin.qq.com,)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 抖音去广告去水印 (*.amemv.com)
^https?:\/\/.*\.amemv\.com\/aweme\/v2\/(follow\/)?feed\/ url request-header ^GET \/aweme\/v\d\/(follow\/)?feed\/(.+\r\n) request-header GET /aweme/v1/$1feed/$2 
^https?:\/\/.*\.amemv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/douyin.js

# Netflix rating (ios-h2.prod.ftl.netflix.com)
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js

# 显示netflix的收视率（IMDb） ios.prod.ftl.netflix.com
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
 
# 什么值得买去广告(homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com)
# 详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/banner url reject-dict
# 首页去广告
^https?:\/\/homepage-api\.smzdm\.com\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价去广告
^https?:\/\/haojia-api\.smzdm\.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 去浮动广告
^https?:\/\/app-api\.smzdm\.com\/util\/update url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好文去广告
^https?:\/\/article-api\.smzdm\.com\/article\/index_home_page url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 其他
^https?:\/\/api\.smzdm\.com\/v\d\/util\/(banner|loading) url reject-dict
^https?:\/\/app-api\.smzdm\.com\/util\/loading url reject-dict
 
# ================ Safari全能搜索 开始 ================
# Safari 内输入 命令 + 空格 + 关键词 快速指定搜索引擎搜索
#  注：先进入设置更改 Safari 默认搜索引擎为 DuckDuckGO
# 可自行修改指令或者添加搜索引擎

# gm (谷歌图片)
^https:\/\/duckduckgo.com\/\?q=gm\+([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$1

# gh (github)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ url 302 https://github.com/search?q=$1

# sof (Stack Overflow)
^https:\/\/duckduckgo.com\/\?q=sof\+([^&]+).+ url 302 https://stackoverflow.com/search?q=$1

# se(StackExchange)
^https:\/\/duckduckgo.com\/\?q=se\+([^&]+).+ url 302 https://stackexchange.com/search?q=$1

# wa(WolfamAlpha)
^https:\/\/duckduckgo.com\/\?q=wa\+([^&]+).+ url 302 https://www.wolframalpha.com/input/?i=$1

# wiki (维基百科)
^https:\/\/duckduckgo.com\/\?q=wiki(\+|%20)([^&]+).+ url 302 http://wikipedia.org/wiki/$2

# wk(维基百科中文)
^https:\/\/duckduckgo.com\/\?q=wk(\+|%20)([^&]+).+ url 302 https://zh.wikipedia.org/wiki/$2

# mg (Magi)
^https:\/\/duckduckgo.com\/\?q=mg(\+|%20)([^&]+).+ url 302 https://magi.com/search?q=$2

# tf(google搜索Testflight)
^https:\/\/duckduckgo.com\/\?q=tf(\+|%20)([^&]+).+ url 302 https://www.google.com/search?as_q=$2&as_sitesearch=testflight.apple.com

# > 翻译
# yd(有道翻译)
^https:\/\/duckduckgo.com\/\?q=yd\+([^&]+).+ url 302 http://dict.youdao.com/search?q=$1

# trc(Google翻译到中文)
^https:\/\/duckduckgo.com\/\?q=trc\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1

# tre(Google翻译到English)
^https:\/\/duckduckgo.com\/\?q=tre\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1

# trj(Google翻译到日语)
^https:\/\/duckduckgo.com\/\?q=trj\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1

# 社区
# db(豆瓣)
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ url 302 https://m.douban.com/search/?query=$1

# zh(知乎)
^https:\/\/duckduckgo.com\/\?q=zh\+([^&]+).+ url 302 https://www.zhihu.com/search?type=content&q=$1

# wb(微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ url 302 https://s.weibo.com/weibo/$1

# wx(微信)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ url 302 https://weixin.sogou.com/weixinwap?query=$1

# rd(Reddit)
^https:\/\/duckduckgo.com\/\?q=rd\+([^&]+).+ url 302 https://www.reddit.com/search?q=$1

# tw(Twitter)
^https:\/\/duckduckgo.com\/\?q=tw\+([^&]+).+ url 302 https://twitter.com/search?q=$1

# ssp(少数派)
^https:\/\/duckduckgo.com\/\?q=ssp\+([^&]+).+ url 302 https://sspai.com/search/post/$1

# csdn(CSDN)
^https:\/\/duckduckgo.com\/\?q=csdn\+([^&]+).+ url 302 https://so.csdn.net/so/search/s.do?q=$1&t=&u= 

# > 购物
# zdm(什么值得买)
^https:\/\/duckduckgo.com\/\?q=zdm\+([^&]+).+ url 302 https://search.m.smzdm.com/?v=b&s=$1

# amz(亚马逊)
^https:\/\/duckduckgo.com\/\?q=amz\+([^&]+).+ url 302 https://www.amazon.cn/gp/aw/s/?k=$1

# jd(京东)
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ url 302 https://so.m.jd.com/ware/search.action?keyword=$1

# tb(淘宝)
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ url 302 https://s.m.taobao.com/h5?q=$1

# tm(天猫)
^https:\/\/duckduckgo.com\/\?q=tm\+([^&]+).+ url 302 https://s.m.tmall.com/m/search.htm?q=$1

# > 视频资源
# ac(Acfun)
^https:\/\/duckduckgo.com\/\?q=ac\+([^&]+).+ url 302 https://www.acfun.cn/search?keyword==$1

# bli(哔哩哔哩)
^https:\/\/duckduckgo.com\/\?q=bli\+([^&]+).+ url 302 https://m.bilibili.com/search?keyword=$1

# ytb(YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb\+([^&]+).+ url 302 https://www.youtube.com/results?search_query=$1

# ph(PornHub)
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ url 302 https://cn.pornhub.com/video/search?search=$1

# > 网盘

# gd(Google Drive)
^https:\/\/duckduckgo.com\/\?q=gd\+([^&]+).+ url 302 https://www.google.com/search?q=%22Google+Drive%22+$1

# tgd(t.me/gdurl 搜索Google Drive)
^https:\/\/duckduckgo.com\/\?q=tgd\+([^&]+).+ url 302 https://t.me/s/gdurl?q=$1

# zgd(zhao.pp.ua搜索Google Drive)
^https:\/\/duckduckgo.com\/\?q=zgd(\+|%20)([^&]+).+ url 302 https://zhao.pp.ua/?q=$2

# > 默认搜索

# bi(Bing)
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ url 302 https://cn.bing.com/search?q=$1

# bd(BaiDu)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ url 302 https://www.baidu.com/s?wd=$1

# ddg(DckDuckgo)
^https:\/\/duckduckgo.com\/\?q=ddg\+([^&]+).+ url 302 https://duckduckgo.com/?ia=about&q=$1

# 无指令(谷歌)
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.google.com/search?q=$1

# 阻止google.com 跳转到google.com.hk
^https?:\/\/(www\.)?g\.cn url 302 https://www.google.com
^https?:\/\/(www\.)?google\.cn url 302 https://www.google.com
# ================ Safari全能搜索 结束 ================

# ================ 去广告 ================

# 京东金融开屏广告  ms.jr.jd.com
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject

# 美团外卖开屏广告 wmapi.meituan.com
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo\? url reject

# 闲鱼 gw.alicdn.com
^https:\/\/gw.alicdn.com\/mt\/ url reject
^https:\/\/gw.alicdn.com\/tfs\/.+\d{3,4}-\d{4} url reject
^https:\/\/gw.alicdn.com\/tps\/.+\d{3,4}-\d{4} url reject

# 饿了么  elemecdn.com, fuss10.elemecdn.com, www1.elecfans.com,
^https?:\/\/elemecdn.com\/.+\/sitemap url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+.mp4 url reject
^https?:\/\/www1.elecfans.com\/www\/delivery\/ url reject

# 三联中读开屏广告@ddgksf2013  apis.lifeweek.com.cn
https://apis.lifeweek.com.cn/api/baseConfig/getIosNewConfig url reject

# 网易严选（清除缓存使用）@ddgksf2013 support.you.163.com,yanxuan.nosdn.127.net
https://support.you.163.com/appversync/check.do url reject
https:\/\/yanxuan.nosdn.127.net\/(static-union\/)?.*\.gif url reject
https:\/\/yanxuan.nosdn.127.net\/.*\.mp4 url reject

# 人民日报@ddgksf2013 *.peopleapp.com
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/getAdvertImage url reject
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/adv url reject-dict
^https?:\/\/stat\.peopleapp\.com\/ url reject

# 小米运动（需卸载重装）@ddgksf2013 api-mifit-sg2.huami.com
https://api-mifit-sg2.huami.com/discovery/mi/cards\? url reject
https://api-mifit-sg2.huami.com/discovery/mi/cards/homepage_ad\? url reject
^https?:\/\/api-mifit-sg2.huami.com\/discovery\/mi\/discovery\/(homepage_ad|sleep_ad|sport_ad|sport_summary_ad|sport_training_ad|step_detail_ad|training_video_ad)\? url reject

# 友邻优课@ddgksf2013 new-app-api.ylyk.com
https://new-app-api.ylyk.com/v1/user/myinfo/adviser url reject

# 爱回收  gw.aihuishou.com
^https?:\/\/gw.aihuishou.com\/app-portal\/home\/getadvertisement url reject

# 五八同城  *.58cdn.com.cn, app.58.com
^https?:\/\/.+\.58cdn\.com\.cn\/brandads\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/advertising\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/appadv\/ url reject

# 淘票票@fangpide acs.m.taobao.com
^https://acs.m.taobao.com\/gw\/mtop.film.mtopadvertiseapi.queryadvertise\/5.0.* url reject

# 屏蔽知乎网页版强制登陆弹窗@HotKids  static.zhihu.com
^https?:\/\/static\.zhihu\.com\/[^\/]+\/(main|column)\.signflow\.[^.]+.js url reject

# 滴滴出行（推荐英文版）@ddgksf2013 res.xiaojukeji.com, 116.85.2.15, 116.85.2.14,
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject-dict
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject

# Keep开屏广告屏蔽@ddgksf2013  api.gotokeep.com
https://api.gotokeep.com/op-engine-webapp/v1/ad url reject
https://api.gotokeep.com/ads/v1/ads/preload url reject

# 小红书 pages.xiaohongshu.com, www.xiaohongshu.com
^https:\/\/www\.xiaohongshu\.com\/api\/sns\/v1\/ads\/apple\/record* url reject
^https:\/\/www\.xiaohongshu\.com\/api\/sns\/v1\/tag\/ads_engage* url reject
^https:\/\/www\.xiaohongshu\.com\/api\/sns\/v1\/ads\/resource* url reject
^https:\/\/pages\.xiaohongshu\.com\/data\/native\/matrix_switches* url reject
