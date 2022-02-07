/*
QX:
[rewrite_local]
#Varlens解锁PRO
^https?:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/varlens.js
[mitm]
hostname = mid.zineapi.com

下载地址；
https://apps.apple.com/cn/app/id1535205062

*/

var ddgksf2013 = 
{"success":true,"data":{"username":"dustudent","app_name":"dustudent","nick":null,"email":"","status":0,"preferences":null,"membership":{"role_name":"pro","begin_time":"2021-03-13T09:59:11.485Z","end_time":"2099-12-31T00:00:00.481Z","begin_time_ms":1615629551485,"end_time_ms":4102325303000},"social_apple_id":null}};

$done({body : JSON.stringify(ddgksf2013)});
