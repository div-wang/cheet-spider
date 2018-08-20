let tpl0 = `<div class="table-th">
            <div class="table-td" style="width:50%;">机器编号</div>
            <div class="table-td" style="width:20%;">销售数量</div>
            <div class="table-td" style="width:20%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr" onclick="toLink({{item.MId}}, '{{timeType}}')">
            <div class="table-td" style="width:50%;">{{item.MId}}<br>{{item.MiAlias}} 地址:{{item.MiAddress}}</div>
            <div class="table-td" style="width:20%;">{{item.Number}}</div>
            <div class="table-td" style="width:20%;">{{item.Total}}</div>
            <div class="table-td" style="width:10%;"> <i class="iconfont icon-jiantouyou"></i> </div>
        </div>
        {{/each}}`
let tpl2 = `<div class="table-th">
            <div class="table-td" style="width:40%;">商品类型/支付类型</div>
            <div class="table-td" style="width:30%;">销售数量</div>
            <div class="table-td" style="width:30%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:40%;">{{item.ProductTypeName}}<br>现金支付<br>微信支付<br>支付宝支付<br>总计</div>
            <div class="table-td" style="width:30%;"><br>{{item.colum2}}<br>{{item.colum4}}<br>{{item.colum6}}<br>{{item.colum00}}</div>
            <div class="table-td" style="width:30%;"><br>{{item.colum1}}<br>{{item.colum3}}<br>{{item.colum5}}<br>{{item.colum0}}</div>
        </div>
        {{/each}}`
let tpl3 = `<div class="table-th">
            <div class="table-td" style="width:60%;">机器编号/支付类型</div>
            <div class="table-td" style="width:20%;">销售数量</div>
            <div class="table-td" style="width:20%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:60%;">{{item.MachineID}} {{item.MGName}} {{item.MachineName}}<br>现金支付<br>微信支付<br>支付宝支付<br>总计</div>
            <div class="table-td" style="width:20%;"><br>{{item.colum2}}<br>{{item.colum4}}<br>{{item.colum6}}<br>{{item.colum00}}</div>
            <div class="table-td" style="width:20%;"><br>{{item.colum1}}<br>{{item.colum3}}<br>{{item.colum5}}<br>{{item.colum0}}</div>
        </div>
        {{/each}}`
let tpl4 = `<div class="table-th">
            <div class="table-td" style="width:40%;">支付类型</div>
            <div class="table-td" style="width:30%;">销售数量</div>
            <div class="table-td" style="width:30%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:40%;">{{item.TrPayType}}</div>
            <div class="table-td" style="width:30%;">{{item.SaleCount}}</div>
            <div class="table-td" style="width:30%;">{{item.TrSalePrice}}</div>
        </div>
        {{/each}}`
let tpl5 = `<div class="table-th">
            <div class="table-td" style="width:40%;">支付类型</div>
            <div class="table-td" style="width:30%;">销售数量</div>
            <div class="table-td" style="width:30%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:40%;">{{item.TrPayType}}</div>
            <div class="table-td" style="width:30%;">{{item.SaleCount}}</div>
            <div class="table-td" style="width:30%;">{{item.TrSalePrice}}</div>
        </div>
        {{/each}}`
let tpl1 = `<div class="table-th">
            <div class="table-td" style="width:40%;">商品名称/支付类型</div>
            <div class="table-td" style="width:30%;">销售数量</div>
            <div class="table-td" style="width:30%;">销售金额</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:40%;">{{item.ProductName}}<br>现金支付<br>微信支付<br>支付宝支付<br>总计</div>
            <div class="table-td" style="width:30%;"><br>{{item.colum2}}<br>{{item.colum4}}<br>{{item.colum6}}<br>{{item.colum00}}</div>
            <div class="table-td" style="width:30%;"><br>{{item.colum1}}<br>{{item.colum3}}<br>{{item.colum5}}<br>{{item.colum0}}</div>
        </div>
        {{/each}}`
let tplOne = `<div class="table-th">
            <div class="table-td" style="width:40%;">机器编号/支付类型</div>
            <div class="table-td" style="width:25%;">货道号/金额</div>
            <div class="table-td" style="width:35%;">出货结果/时间</div>
        </div>
        {{each list as item}}
        <div class="table-tr">
            <div class="table-td" style="width:40%;">{{item.MiAlias}}<br><span style="color:#999">{{if item.TrPayType == 0}}现金支付{{else if item.TrPayType == 65}}微信支付{{else}}支付宝支付{{/if}}</span></div>
            <div class="table-td" style="width:25%;">{{item.TrCoilID}}<br><span style="color:#f90">{{item.TrSalePrice}}</span></div>
            <div class="table-td" style="width:35%;">{{if item.TrResult == 0}}<span style="color:green">成功</span>{{else if item.TrResult == 4}}<span style="color:red">失败</span>{{else}}未知{{/if}}<br>{{item.TrTime}}</div>
        </div>
        {{/each}}`

module.exports = [tpl0, tpl1, tpl2, tpl3, tpl4, tpl5, tplOne]
