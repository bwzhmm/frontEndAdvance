export default {
    base : 'lres',
    getExam : 'qresourceUse/list',//试卷种类
    getstudy : 'lresource/list',//在线学习列表
    getstudydetail:'lresource/find',//在线学习详情
    personinfo:'user/findLoginUser',//个人信息
    personindexinfo:'user/findConcureentUser',//除了登陆调取的个人信息接口
    bigThing:'user/bigThing',//大事记
    checkResultList:'qresourceUse/checkResultListAna',//所有题目考完之后判断成绩,激活图书证
    optionResultAna:'qresourceUse/optionResultAna',//每个题目都要验证对错
    optionResultAna1:'qresourceUse/trueResultAna',//每个题目都要验证对错-有答案
    optionResult:'qresourceUse/optionResult',//闯关考试的答案对错分析
    onlineadd:'lrecord/saveRecord',//在线时间，在线学习记录
    readnum:'lresource/watchCount',//阅读量增加
    downloadnum:'lresource/downloadCount',//下载量增加
    checkfight:'qresourceUse/checkLevelResultList',//验证闯关是否通过
    fightliststate:'qrecord/findQrecord',//关卡列表的状态
    campuslist:'campus/list',//校区列表
    bindUserCampus:'user/bindUserCampus',//绑定校区
    base2:'tenant',
    detailByUrl:'Tenant/detailByUrl',//根据域名获得tid
    login:'Opac/login',//拦截登陆
    judgeTHasRes:'TenantPhyapp/judgeTHasRes',//判断是否买全景
    base3:'auth',
    exit:'User/cleanNowLoginUser',//退出
    lrecordqueryUserRecord:'lrecord/queryUserRecord',//查询学习时间

};