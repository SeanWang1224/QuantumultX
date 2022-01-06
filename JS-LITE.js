 hostname =*.baidu.com,guide-acs.m.taobao.com, weixin110.qq.com,notability.com, openapi.17usoft.net,bmall.camera360.com,mp.weixin.qq.com,api.polaxiong.com,pan.baidu.com,api.bjxkhc.com,guide-acs.m.taobao.com,ap?.bilibili.com,weixin110.qq.com,claritywallpaper.com,web.vizmato.com,api.neuralprisma.com,getuserinfo-globalapi.zymk.cn,account.wps.cn,*.xxjjappss.com,*.huaerdadi.com,*.xiaoxiaoapps.com,*.xiaoxiaoimg.com,api.gotokeep.com,59.110.149.231,129.211.156.213,*.csdn.net,mid.zineapi.com,ws.60he.com,pan.baidu.com,mb3admin.com,*.googlevideo.com,baimiao.uzero.cn,nmeditation.snailsleep.net,snailsleep.net,music.snailsleep.net,community.snailsleep.net,vip1.kuwo.cn,vsco.co, api.revenuecat.com,api.vnision.com,dida365.com, ticktick.com, p.du.163.com,account.wps.cn, api.gyrosco.pe,origin-prod-phoenix.jibjab.com,api.termius.com,viva.v21xy.com, biz.caiyunapp.com,ap*.intsig.net,api.vuevideo.net,mp.bybutter.com,api.picsart.c*, api.meiease.c*,splice.oracle.*.com,api.textnow.me,vira.llsapp.com,commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com,dict.eudic.net,api.flexibits.com,api.jiaonizuocai.com,api.sololearn.com,note.youdao.com,billing.peakcloud.org,api.ithome.com,www.xmind.cn,*.videostarapp.com,api.revenuecat.com,app.api.versa-ai.com,*.xunjie*.com,avoscloud.com,api.meiyan.com,bea.sportq.com,greasyfork.org, openuserjs.org,api.weibo.cn, mapi.weibo.com, *.uve.weibo.com,mp.weixin.qq.com, *.amemv.com, ios-h2.prod.ftl.netflix.com, ios.prod.ftl.netflix.com, homepage-api.smzdm.com, haojia-api.smzdm.com, article-api.smzdm.com, haojia.m.smzdm.com, app-api.smzdm.com, s-api.smzdm.com

# 替换支付宝内淘票票评分为豆瓣评分 guide-acs.m.taobao.com
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopshowapi\.getextendshowbyid url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/TaoPiaoPiao/taopiaopiao.js

# 微信屏蔽跳转 weixin110.qq.com
#在微信中打开淘宝等被屏蔽链接，点击 Surge/QuantumultX 通知跳转到 Safari 或淘宝 App
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/weixin110.js

# 强制跳转百度UA    *.baidu.com
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2
# notability 订阅 （notability.com）
https://notability.com/subscriptions url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Notability.js

# 微博去广告
https:\/\/api\.weibo\.com\/oauth2\/getaid url reject

# 10086去开屏广告
https:\/\/10086\.online\-cmcc\.cn\:20010\/gfms\/front\/hn\/busi3\!getAdvert url script-response-body https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/remove_ad/10086.js

# keep 去广告
https:\/\/api\.gotokeep\.com\/ads\/v1\/ads\?spotIds url reject

# 微信小程序搜索🔍同程旅行✈️点击主页下面的【火车票优惠】即可（openapi.17usoft.net）
https://openapi.17usoft.net/maskantactivityapi/memberCenterSign\?.+ url script-request-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/tclx.js

# MIX 解锁高级特权 （bmall.camera360.com）(需恢复购买)
^https?:\/\/bmall\.camera360\.com\/api\/mix\/recovery url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/MIX.js

# 微信公众号去广告（mp.weixin.qq.com）
^(http|https):\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],

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

# substore    浏览器访问https://sub-store.vercel.app/#/
^https?:\/\/sub\.store url script-analyze-echo-response https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/backend/sub-store.min.js

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

# 克拉壁纸  解锁付费壁纸 (claritywallpaper.com)
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/clarity.js

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

# Keep 解锁私人课程,动作库,解锁运动课程页面会员精讲，解锁会员专属页面会员课程，解锁智能训练(胸背部无跑步无器材84天锻炼) for V6.24~V6.27 （20210418;api.gotokeep.com,59.110.149.231,129.211.156.213）
https://api.gotokeep.com/(.+/subject|.+/dynamic|.+/coursePlus/.+|.+/status|.+/tab|.+/my|.+/start|.+/join|.+/complete|.+/detail/.+|.+/preview|.+/auth|.+/tab|.+/days) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/keep_new.js

# 百度防跳转
^https?:\/\/.*\.baidu\.com url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# CSDN(,*.csdn.net)
.*:\/\/.*\.csdn\.net\/.* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/csdn.js

# Varlens解锁PRO(mid.zineapi.com)
^https:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Varlens.js

# pythonai破解vip(ws.60he.com)
^http:\/\/ws\.60he\.com\/(book|user).+ url script-response-body https://raw.githubusercontent.com/SeanWang1224/QuantumultX/master/QuantumultX-Script/Python%20Ai.js

# 解锁百度云盘会员（pan.baidu.com）
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bdcloud.js

# 该订阅仅适用于QuantumultX, 用于更新TestFlight App时, 提示"APP不可用"问题. 解除区域限制.
^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ url script-request-body https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js

# Emby解锁(mb3admin.com)
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://subweb.oss-cn-hongkong.aliyuncs.com/Script/embycrack.js

# Chavy box (多账号Cookie保存切换)
# 访问:  http://boxjs.com 管理
^https?://boxjs.com/api url script-request-body https://gitee.com/chavyleung/scripts/raw/master/chavy.box.js
^https?://boxjs.com(/home|/sub|/my|/app|/log|/revert)?($|\/) url script-echo-response https://gitee.com/chavyleung/scripts/raw/master/chavy.box.js

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

# 彩云天气 Vip( biz.caiyunapp.com)
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/NobyDa/QuantumultX/File/ColorWeather.js

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

# 流利说.阅读 (vira.llsapp.com)
^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/llyd.js

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
;https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/pillow.js

# 马卡龙 (app.api.versa-ai.com)
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/mkl.js

# 迅捷应用6合1 （*.xunjie*.com,）
^https?:\/\/.*\.xunjie.*\.com\/api\/v\d\/* url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xunjie.js

# 西窗烛 （avoscloud.com）
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xcz.js

# 美颜相机一次性解锁内购（api.meiyan.com）
^https:\/\/api\.meiyan\.com\/iap\/verify\.json url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/myxj.js

# Fit健身会员 （bea.sportq.com）
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/fit.js

# 油猴转换器 (greasyfork.org, openuserjs.org)
https:\/\/greasyfork\.org\/scripts\/.*\.user\.js url script-response-body https://raw.githubusercontent.com/Peng-YM/QuanX/master/Rewrites/GreasyFork/greasy-fork.js

# 去微博应用内广告 (api.weibo.cn, mapi.weibo.com, *.uve.weibo.com)
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 去微信公众号广告 (mp.weixin.qq.com,)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 解决抖音无法观看   -*.amemv.com, -*.snssdk.com

# 抖音去广告去水印 (*.amemv.com)
^https?:\/\/.*\.amemv\.com\/aweme\/v2\/(follow\/)?feed\/ url request-header ^GET \/aweme\/v\d\/(follow\/)?feed\/(.+\r\n) request-header GET /aweme/v1/$1feed/$2 
^https?:\/\/.*\.amemv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/douyin.js

# Netflix rating (ios-h2.prod.ftl.netflix.com)
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios-h2\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
 
# Netflix rating (ios.prod.ftl.netflix.com)
;^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
;^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
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
 
