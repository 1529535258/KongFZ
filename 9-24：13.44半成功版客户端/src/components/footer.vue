<template>
    <el-footer>
          <div class="copyright-info-box">© 2002-2019  Kongfz.com 孔夫子旧书网  版权所有</div>
          <div class="link-box">
            <a class="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/aboutus.php">关于孔网</a>
            <a class="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/lianxi.html">联系我们</a>
            <a class="item" target="_blank" rel="nofollow" href="http://help.kongfz.com/">帮助中心</a>
            <a class="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/copyright.php">版权隐私</a>
            <a class="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/guanggao.php">广告业务</a>
            <a class="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/zhaopin.php">工作机会</a>
            <a class="item" target="_blank" href="https://m.kongfz.com/">移动版</a>
            <a class="item" target="_blank" href="http://book.kongfz.com/">图书目录</a>
            <a class="item" target="_blank" href="http://bq.kongfz.com/">图书标签</a>
        </div>
        <div class="Licence-info-box">
            <span class="text">京ICP证041501号</span>
            <span class="text-split">|</span>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502035846" class="text" target="_blank"><img style="width:13px;margin-right: 5px;vertical-align: middle;" src="/img/beian.png" alt=""><span style="vertical-align: middle;">京公网安备 11010502035846号</span></a>
            <span class="text-split">|</span>
            <a class="text" target="_blank" rel="nofollow" href="http://www.kongfz.com/view/image/chubanwu.jpg">出版物经营许可证</a>
            <span class="text-split">|</span>
            <a class="text" target="_blank" rel="nofollow" href="http://www.kongfz.com/view/image/yingyezhizhao.jpg">企业营业执照</a>
            <span class="text-split">|</span>
            <span class="text">违法和不良信息举报电话：010-64755951， 举报邮箱 shenhe@kongfz.com</span>
        </div>
        </el-footer>
</template>
<script>
export default {
    
}
</script>
<style >
    /* // 页脚样式 */
.jiao {
  width: 0;
  height: 0;
  border-bottom: 6px solid #dfc49b;
  border-left: 6px solid transparent;
  position: absolute;
  right: -1px;
  bottom: -1px;
}
.jiao-inner {
  width: 0;
  height: 0;
  border-bottom: 5px solid #fdfbfc;
  border-left: 5px solid transparent;
  position: absolute;
  right: 0;
  bottom: -6px;
}
.f_left {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #8c222c;
  margin-top: 20px;
}
.f_left span {
  font-size: 12px;
  margin-left: 4px;
}
.btn {
  display: block;
  width: 112px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #8c222c;
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  cursor: pointer;
}
.item-bottom {
  display: flex;
  justify-content: space-between;
}
.middle{
height:180px;
}
.middle>a>img,.middle>a{
  width: 390px;
  height: 166px;
}
.el-footer {
    margin: 0 auto;
    padding: 10px 0 20px;
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
}
.copyright-info-box {
  text-align: left;
    float: left;
    width: 300px;
}
 .link-box {
    text-align: right;
}
.link-box,.Licence-info-box ,.copyright-info-box{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
}
.Licence-info-box{
  text-align: left;
}
.link-box .item {
    margin-left: 13px;
    color: #8999a9;
}
.Licence-info-box .text {
    color: #999;
}
.text-split {
    margin: 3px;
    color: #e5e5e5;
}
</style>