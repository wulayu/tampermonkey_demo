// ==UserScript==
// @name         收集填入重量
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  访问http://192.168.201.198:4000/stock_items/check_out_by_wave?q[stock_house_id_eq]=56，获取订单编号
// @author       Soong
// @match        http://192.168.201.198:4000/stock_items/check_out_by_wave?q[stock_house_id_eq]=56
// @match        https://ezeeship.com/newstyle/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=es.com
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

var webSite = window.location.href;
console.log(webSite);

if (webSite == "http://192.168.201.198:4000/stock_items/check_out_by_wave?q[stock_house_id_eq]=56") {
    console.log("*** begin ***  " + webSite);

    $(document).ready(function () {
        $(".content").before(
            '<button type="button" id="showwww">收集重量</button>');

        var saveObject = {};
        $("#showwww").on("click", function () {
            console.log("*** 收集重量 ***");

            saveObject.weight = $('input[name="weight"]').val();
            console.log(saveObject.weight);

            var content = JSON.stringify(saveObject);
            GM_setClipboard(content);
            console.log(content);

            GM_setValue("save", content);
            var output = GM_getValue("save");

            console.log("tampermonkey_save:" + output);
        });

    });

} else {
    console.log("*** begin ***  " + webSite);

    $(document).ready(function () {
        console.log("*** 填入重量 ***");

        setTimeout(function () {  // 延时等待vue渲染完成
            console.info($('.el-card__header'))
            $('.el-card__header').before(
                '<button type="button" id="showwwww">填入重量</button>');

            $("#showwwww").on("click", function () {
                var output = GM_getValue("save");
                console.log("tampermonkey_output:" + output);

                output = JSON.parse(output);
                console.log(output.weight);

                console.log("*** pasted ***");
                console.log($("#app").get());

                // $("#app")[0].__vue__.$children[1].$children[3].$refs.numberInfo.order.orderNo = output.weight;
                // 可以用$("#app").__vue__命令在chrome console里查看
                $("#app")[0].__vue__.$children[1].$children[3].$refs.packageInfo.packages[0].weight = output.weight;
            });
        }, 10000)

    });

}
