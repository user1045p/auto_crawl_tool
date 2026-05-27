function getExperienceList() {
  let experienceList = [
    {
      "code": "1",
      "name": "应届生"
    },
    {
      "code": "2",
      "name": "实习生"
    },
    {
      "code": "0$1",
      "name": "1年以内"
    },
    {
      "code": "1$3",
      "name": "1-3年"
    },
    {
      "code": "3$5",
      "name": "3-5年"
    },
    {
      "code": "5$10",
      "name": "5-10年"
    },
    {
      "code": "10$999",
      "name": "10年以上"
    }
  ]
  return experienceList;
}

function getAreaList() {
  let areaList = [
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "090",
      "en": "Fujian",
      "l": "4",
      "ca": 2,
      "area_name": "福建"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "190",
      "en": "Jilin",
      "l": "4",
      "ca": 2,
      "area_name": "吉林"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "070",
      "en": "Zhejiang",
      "l": "4",
      "ca": 2,
      "area_name": "浙江"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "290",
      "en": "Tibet",
      "l": "5",
      "ca": 2,
      "area_name": "西藏"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "170",
      "en": "Hubei",
      "l": "4",
      "ca": 2,
      "area_name": "湖北"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "050",
      "en": "Guangdong",
      "l": "4",
      "ca": 2,
      "area_name": "广东"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "270",
      "en": "Shaanxi",
      "l": "4",
      "ca": 2,
      "area_name": "陕西"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "150",
      "en": "Henan",
      "l": "4",
      "ca": 2,
      "area_name": "河南"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "250",
      "en": "Shandong",
      "l": "4",
      "ca": 2,
      "area_name": "山东"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "030",
      "en": "Tianjin",
      "l": "3",
      "ca": 2,
      "area_name": "天津"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "130",
      "en": "Hainan",
      "l": "4",
      "ca": 2,
      "area_name": "海南"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "230",
      "en": "Ningxia",
      "l": "5",
      "ca": 2,
      "area_name": "宁夏"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "010",
      "en": "Beijing",
      "l": "3",
      "ca": 2,
      "area_name": "北京"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "110",
      "en": "Guangxi",
      "l": "5",
      "ca": 2,
      "area_name": "广西"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "330",
      "en": "Macao",
      "l": "6",
      "ca": 2,
      "area_name": "澳门"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "210",
      "en": "Liaoning",
      "l": "4",
      "ca": 2,
      "area_name": "辽宁"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "310",
      "en": "Yunnan",
      "l": "4",
      "ca": 2,
      "area_name": "云南"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "080",
      "en": "Anhui",
      "l": "4",
      "ca": 2,
      "area_name": "安徽"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "180",
      "en": "Hunan",
      "l": "4",
      "ca": 2,
      "area_name": "湖南"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "060",
      "en": "Jiangsu",
      "l": "4",
      "ca": 2,
      "area_name": "江苏"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "280",
      "en": "Sichuan",
      "l": "4",
      "ca": 2,
      "area_name": "四川"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "160",
      "en": "Heilongjiang",
      "l": "4",
      "ca": 2,
      "area_name": "黑龙江"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "260",
      "en": "Shanxi",
      "l": "4",
      "ca": 2,
      "area_name": "山西"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "040",
      "en": "Chongqing",
      "l": "3",
      "ca": 2,
      "area_name": "重庆"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "140",
      "en": "Hebei",
      "l": "4",
      "ca": 2,
      "area_name": "河北"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "240",
      "en": "Qinghai",
      "l": "4",
      "ca": 2,
      "area_name": "青海"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "020",
      "en": "Shanghai",
      "l": "3",
      "ca": 2,
      "area_name": "上海"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "120",
      "en": "Guizhou",
      "l": "4",
      "ca": 2,
      "area_name": "贵州"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "340",
      "en": "Taiwan",
      "l": "4",
      "ca": 2,
      "area_name": "台湾"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "220",
      "en": "Inner Mongolia",
      "l": "5",
      "ca": 2,
      "area_name": "内蒙古"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "100",
      "en": "Gansu",
      "l": "4",
      "ca": 2,
      "area_name": "甘肃"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "320",
      "en": "Hongkong",
      "l": "6",
      "ca": 2,
      "area_name": "香港"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "200",
      "en": "Jiangxi",
      "l": "4",
      "ca": 2,
      "area_name": "江西"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "300",
      "en": "Xinjiang",
      "l": "5",
      "ca": 2,
      "area_name": "新疆"
    }
  ]
  return areaList;
}

function getCountyList() {
  let countyList = [
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070050",
      "en": "Hamilton",
      "l": "19",
      "ca": 3,
      "area_name": "汉密尔顿"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420250",
      "en": "Missouri",
      "l": "17",
      "ca": 2,
      "area_name": "密苏里州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420490",
      "en": "Wisconsin",
      "l": "17",
      "ca": 2,
      "area_name": "威斯康星州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420010",
      "en": "Alabama",
      "l": "17",
      "ca": 2,
      "area_name": "亚拉巴马州"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270050",
      "en": "Tongchuan",
      "l": "7",
      "ca": 3,
      "area_name": "铜川"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270060",
      "en": "Weinan",
      "l": "7",
      "ca": 3,
      "area_name": "渭南"
    },
    {
      "parent_code": "420360",
      "a": "2",
      "area_code": "420360030",
      "en": "Lawton",
      "l": "19",
      "ca": 3,
      "area_name": "劳顿"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190050",
      "en": "Liaoyuan",
      "l": "7",
      "ca": 3,
      "area_name": "辽源"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430060",
      "en": "Nova Scotia",
      "l": "4",
      "ca": 2,
      "area_name": "新斯科舍省"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110150",
      "en": "Guigang",
      "l": "7",
      "ca": 3,
      "area_name": "贵港"
    },
    {
      "parent_code": "420280",
      "a": "2",
      "area_code": "420280030",
      "en": "Reno",
      "l": "19",
      "ca": 3,
      "area_name": "里诺"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280090",
      "en": "Panzhihua",
      "l": "7",
      "ca": 3,
      "area_name": "攀枝花"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070040",
      "en": "Brampton",
      "l": "19",
      "ca": 3,
      "area_name": "宾顿"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100110",
      "en": "Longnan",
      "l": "7",
      "ca": 3,
      "area_name": "陇南"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420260",
      "en": "Montana",
      "l": "17",
      "ca": 2,
      "area_name": "蒙大拿州"
    },
    {
      "parent_code": "420440",
      "a": "2",
      "area_code": "420440010",
      "en": "Rutland",
      "l": "19",
      "ca": 3,
      "area_name": "拉特兰"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180020",
      "en": "Changsha",
      "l": "7",
      "ca": 3,
      "area_name": "长沙"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270040",
      "en": "Xianyang",
      "l": "7",
      "ca": 3,
      "area_name": "咸阳"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420020",
      "en": "Alaska",
      "l": "17",
      "ca": 2,
      "area_name": "阿拉斯加州"
    },
    {
      "parent_code": "420360",
      "a": "2",
      "area_code": "420360020",
      "en": "Tulsa",
      "l": "19",
      "ca": 3,
      "area_name": "塔尔萨"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190060",
      "en": "Tonghua",
      "l": "7",
      "ca": 3,
      "area_name": "通化"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100100",
      "en": "Dingxi",
      "l": "7",
      "ca": 3,
      "area_name": "定西"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430050",
      "en": "New Brunswick",
      "l": "4",
      "ca": 2,
      "area_name": "新不伦瑞克省"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110140",
      "en": "Hechi",
      "l": "7",
      "ca": 3,
      "area_name": "河池"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280080",
      "en": "Zigong",
      "l": "7",
      "ca": 3,
      "area_name": "自贡"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070030",
      "en": "Mississauga",
      "l": "19",
      "ca": 3,
      "area_name": "密西沙加"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420030",
      "en": "Arizona",
      "l": "17",
      "ca": 2,
      "area_name": "亚利桑那州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420270",
      "en": "Nebraska",
      "l": "17",
      "ca": 2,
      "area_name": "内布拉斯加州"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270030",
      "en": "Baoji",
      "l": "7",
      "ca": 3,
      "area_name": "宝鸡"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350080",
      "en": "Laos",
      "l": "2",
      "ca": 1,
      "area_name": "老挝"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190030",
      "en": "Jilin",
      "l": "7",
      "ca": 3,
      "area_name": "吉林市"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400610",
      "en": "The Democratic Republic of the Congo",
      "l": "2",
      "ca": 1,
      "area_name": "刚果(金)"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430080",
      "en": "Prince Edward Island",
      "l": "4",
      "ca": 2,
      "area_name": "爱德华王子岛省"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110130",
      "en": "Hezhou",
      "l": "7",
      "ca": 3,
      "area_name": "贺州"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280070",
      "en": "Yibin",
      "l": "7",
      "ca": 3,
      "area_name": "宜宾"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070020",
      "en": "Ottawa",
      "l": "19",
      "ca": 3,
      "area_name": "渥太华"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110110",
      "en": "Baise",
      "l": "7",
      "ca": 3,
      "area_name": "百色"
    },
    {
      "parent_code": "420350",
      "a": "2",
      "area_code": "420350010",
      "en": "Columbus",
      "l": "19",
      "ca": 3,
      "area_name": "哥伦布"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420040",
      "en": "Arkansas",
      "l": "17",
      "ca": 2,
      "area_name": "阿肯色州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420280",
      "en": "Nevada",
      "l": "17",
      "ca": 2,
      "area_name": "内华达州"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270020",
      "en": "Xi'an",
      "l": "7",
      "ca": 3,
      "area_name": "西安"
    },
    {
      "en": "HK&TW&Macao",
      "area_name": "港澳台"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350090",
      "en": "Cambodia",
      "l": "2",
      "ca": 1,
      "area_name": "柬埔寨"
    },
    {
      "parent_code": "420360",
      "a": "2",
      "area_code": "420360040",
      "en": "Norman",
      "l": "19",
      "ca": 3,
      "area_name": "诺曼城"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190040",
      "en": "Siping",
      "l": "7",
      "ca": 3,
      "area_name": "四平"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400600",
      "en": "The Republic of South Sudan",
      "l": "2",
      "ca": 1,
      "area_name": "南苏丹"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430070",
      "en": "Ontario",
      "l": "4",
      "ca": 2,
      "area_name": "安大略省"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110120",
      "en": "Qinzhou",
      "l": "7",
      "ca": 3,
      "area_name": "钦州"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280060",
      "en": "Neijiang",
      "l": "7",
      "ca": 3,
      "area_name": "内江"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100140",
      "en": "Linxia Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "临夏"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070010",
      "en": "Toronto",
      "l": "19",
      "ca": 3,
      "area_name": "多伦多"
    },
    {
      "parent_code": "420350",
      "a": "2",
      "area_code": "420350020",
      "en": "Cleveland",
      "l": "19",
      "ca": 3,
      "area_name": "克利夫兰"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390310",
      "en": "Serbia",
      "l": "2",
      "ca": 1,
      "area_name": "塞尔维亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400200",
      "en": "Chad",
      "l": "2",
      "ca": 1,
      "area_name": "乍得"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400440",
      "en": "Zambia",
      "l": "2",
      "ca": 1,
      "area_name": "赞比亚"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420210",
      "en": "Massachusetts",
      "l": "17",
      "ca": 2,
      "area_name": "麻省"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420450",
      "en": "Virginia",
      "l": "17",
      "ca": 2,
      "area_name": "弗吉尼亚州"
    },
    {
      "parent_code": "420290",
      "a": "2",
      "area_code": "420290030",
      "en": "Portsmouth",
      "l": "19",
      "ca": 3,
      "area_name": "朴次茅斯"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420200",
      "en": "Maryland",
      "l": "17",
      "ca": 2,
      "area_name": "马里兰州"
    },
    {
      "parent_code": "420450",
      "a": "2",
      "area_code": "420450030",
      "en": "Virginia Beach",
      "l": "19",
      "ca": 3,
      "area_name": "弗吉尼亚滩"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430020",
      "en": "British Columbia",
      "l": "4",
      "ca": 2,
      "area_name": "不列颠哥伦比亚省"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260060",
      "en": "Changzhi",
      "l": "7",
      "ca": 3,
      "area_name": "长治"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260040",
      "en": "Linfen",
      "l": "7",
      "ca": 3,
      "area_name": "临汾"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100150",
      "en": "Gannan",
      "l": "8",
      "ca": 3,
      "area_name": "甘南"
    },
    {
      "parent_code": "420350",
      "a": "2",
      "area_code": "420350030",
      "en": "Cincinnati",
      "l": "19",
      "ca": 3,
      "area_name": "辛辛那提"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390320",
      "en": "North Macedonia",
      "l": "2",
      "ca": 1,
      "area_name": "北马其顿"
    },
    {
      "parent_code": "420270",
      "a": "2",
      "area_code": "420270010",
      "en": "Lincoln",
      "l": "19",
      "ca": 3,
      "area_name": "林肯"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420220",
      "en": "Michigan",
      "l": "17",
      "ca": 2,
      "area_name": "密歇根州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420460",
      "en": "Washington",
      "l": "17",
      "ca": 2,
      "area_name": "华盛顿州"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190020",
      "en": "Changchun",
      "l": "7",
      "ca": 3,
      "area_name": "长春"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270090",
      "en": "Shangluo",
      "l": "7",
      "ca": 3,
      "area_name": "商洛"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050190",
      "en": "Meizhou",
      "l": "7",
      "ca": 3,
      "area_name": "梅州"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260050",
      "en": "Yuncheng",
      "l": "7",
      "ca": 3,
      "area_name": "运城"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430010",
      "en": "Alberta",
      "l": "4",
      "ca": 2,
      "area_name": "阿尔伯塔省"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260030",
      "en": "Datong",
      "l": "7",
      "ca": 3,
      "area_name": "大同"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090030",
      "en": "Quanzhou",
      "l": "7",
      "ca": 3,
      "area_name": "泉州"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100120",
      "en": "Pingliang",
      "l": "7",
      "ca": 3,
      "area_name": "平凉"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420470",
      "en": "Rhode Island",
      "l": "17",
      "ca": 2,
      "area_name": "罗得岛州"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400420",
      "en": "Niger",
      "l": "2",
      "ca": 1,
      "area_name": "尼日尔"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420230",
      "en": "Minnesota",
      "l": "17",
      "ca": 2,
      "area_name": "明尼苏达州"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270080",
      "en": "Ankang",
      "l": "7",
      "ca": 3,
      "area_name": "安康"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050180",
      "en": "Maoming",
      "l": "7",
      "ca": 3,
      "area_name": "茂名"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430040",
      "en": "Newfoundland and Labrador",
      "l": "4",
      "ca": 2,
      "area_name": "纽芬兰省"
    },
    {
      "parent_code": "420450",
      "a": "2",
      "area_code": "420450010",
      "en": "Richmond",
      "l": "19",
      "ca": 3,
      "area_name": "里齐蒙得"
    },
    {
      "parent_code": "420280",
      "a": "2",
      "area_code": "420280010",
      "en": "Carson City",
      "l": "19",
      "ca": 3,
      "area_name": "卡森城"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260020",
      "en": "Taiyuan",
      "l": "7",
      "ca": 3,
      "area_name": "太原"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090020",
      "en": "Fuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "福州"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100130",
      "en": "Qingyang",
      "l": "7",
      "ca": 3,
      "area_name": "庆阳"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400410",
      "en": "Benin",
      "l": "2",
      "ca": 1,
      "area_name": "贝宁"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390300",
      "en": "Bulgaria",
      "l": "2",
      "ca": 1,
      "area_name": "保加利亚"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420480",
      "en": "West Virginia",
      "l": "17",
      "ca": 2,
      "area_name": "西佛吉尼亚州"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050160",
      "en": "Yangjiang",
      "l": "7",
      "ca": 3,
      "area_name": "阳江"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420240",
      "en": "Mississippi",
      "l": "17",
      "ca": 2,
      "area_name": "密西西比州"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270070",
      "en": "Hanzhoung",
      "l": "7",
      "ca": 3,
      "area_name": "汉中"
    },
    {
      "parent_code": "420340",
      "a": "2",
      "area_code": "420340010",
      "en": "Bismark",
      "l": "19",
      "ca": 3,
      "area_name": "俾斯麦"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050170",
      "en": "Shaoguan",
      "l": "7",
      "ca": 3,
      "area_name": "韶关"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400400",
      "en": "Togo",
      "l": "2",
      "ca": 1,
      "area_name": "多哥"
    },
    {
      "parent_code": "420450",
      "a": "2",
      "area_code": "420450020",
      "en": "Norfolk",
      "l": "19",
      "ca": 3,
      "area_name": "诺福克"
    },
    {
      "parent_code": "420280",
      "a": "2",
      "area_code": "420280020",
      "en": "Las Vegas",
      "l": "19",
      "ca": 3,
      "area_name": "拉斯维加斯"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430030",
      "en": "Manitoba",
      "l": "4",
      "ca": 2,
      "area_name": "曼尼托巴省"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390350",
      "en": "Slovenia",
      "l": "2",
      "ca": 1,
      "area_name": "斯洛文尼亚"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390110",
      "en": "Belarus",
      "l": "2",
      "ca": 1,
      "area_name": "白俄罗斯"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250050",
      "en": "Jining",
      "l": "7",
      "ca": 3,
      "area_name": "济宁"
    },
    {
      "parent_code": "420420",
      "a": "2",
      "area_code": "420420010",
      "en": "Austin",
      "l": "19",
      "ca": 3,
      "area_name": "奧斯汀"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420400",
      "en": "South Dakota",
      "l": "17",
      "ca": 2,
      "area_name": "南达科他州"
    },
    {
      "parent_code": "420500",
      "a": "2",
      "area_code": "420500010",
      "en": "Cheyenne",
      "l": "19",
      "ca": 3,
      "area_name": "夏延"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170040",
      "en": "Xiangyang",
      "l": "7",
      "ca": 3,
      "area_name": "襄阳"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390360",
      "en": "Croatia",
      "l": "2",
      "ca": 1,
      "area_name": "克罗地亚"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390120",
      "en": "Russia",
      "l": "2",
      "ca": 1,
      "area_name": "俄罗斯"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250060",
      "en": "Linyi",
      "l": "7",
      "ca": 3,
      "area_name": "临沂"
    },
    {
      "parent_code": "420420",
      "a": "2",
      "area_code": "420420020",
      "en": "Houston",
      "l": "19",
      "ca": 3,
      "area_name": "休斯顿"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420410",
      "en": "Tennessee",
      "l": "17",
      "ca": 2,
      "area_name": "田纳西州"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "400",
      "en": "Africa",
      "l": "1",
      "ca": 0,
      "area_name": "非洲"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170030",
      "en": "Shiyan",
      "l": "7",
      "ca": 3,
      "area_name": "十堰"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260090",
      "en": "Shuozhou",
      "l": "7",
      "ca": 3,
      "area_name": "朔州"
    },
    {
      "parent_code": "420290",
      "a": "2",
      "area_code": "420290010",
      "en": "Manchester",
      "l": "19",
      "ca": 3,
      "area_name": "曼彻斯特"
    },
    {
      "parent_code": "420370",
      "a": "2",
      "area_code": "420370010",
      "en": "Salem",
      "l": "19",
      "ca": 3,
      "area_name": "塞伦"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170070",
      "en": "Jingmen",
      "l": "7",
      "ca": 3,
      "area_name": "荆门"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390330",
      "en": "Albania",
      "l": "2",
      "ca": 1,
      "area_name": "阿尔巴尼亚"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180070",
      "en": "Yiyang",
      "l": "7",
      "ca": 3,
      "area_name": "益阳"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420430",
      "en": "Utah",
      "l": "17",
      "ca": 2,
      "area_name": "犹他州"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160020",
      "en": "Harbin",
      "l": "7",
      "ca": 3,
      "area_name": "哈尔滨"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250020",
      "en": "Jinan",
      "l": "7",
      "ca": 3,
      "area_name": "济南"
    },
    {
      "parent_code": "420420",
      "a": "2",
      "area_code": "420420030",
      "en": "Dallas",
      "l": "19",
      "ca": 3,
      "area_name": "达拉斯"
    },
    {
      "parent_code": "420500",
      "a": "2",
      "area_code": "420500030",
      "en": "Laramie",
      "l": "19",
      "ca": 3,
      "area_name": "拉阿密"
    },
    {
      "parent_code": "",
      "a": "0",
      "area_code": "410",
      "en": "All Country",
      "l": "",
      "ca": -1,
      "area_name": "全国"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420420",
      "en": "Texas",
      "l": "17",
      "ca": 2,
      "area_name": "德克萨斯州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300180",
      "en": "Bayingolin",
      "l": "8",
      "ca": 3,
      "area_name": "巴音郭楞"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180080",
      "en": "Chenzhou",
      "l": "7",
      "ca": 3,
      "area_name": "郴州"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170060",
      "en": "Qianjiang",
      "l": "7",
      "ca": 3,
      "area_name": "潜江"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260080",
      "en": "Jincheng",
      "l": "7",
      "ca": 3,
      "area_name": "晋城"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390060",
      "en": "Clemson",
      "l": "19",
      "ca": 3,
      "area_name": "克伦孙"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390340",
      "en": "Greece",
      "l": "2",
      "ca": 1,
      "area_name": "希腊"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390100",
      "en": "Lithuania",
      "l": "2",
      "ca": 1,
      "area_name": "立陶宛"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250040",
      "en": "Dongying",
      "l": "7",
      "ca": 3,
      "area_name": "东营"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420440",
      "en": "Vermont",
      "l": "17",
      "ca": 2,
      "area_name": "佛蒙特州"
    },
    {
      "parent_code": "420290",
      "a": "2",
      "area_code": "420290020",
      "en": "Nashua",
      "l": "19",
      "ca": 3,
      "area_name": "南雪"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "420",
      "en": "All Overseas",
      "l": "",
      "ca": -1,
      "area_name": "全海外"
    },
    {
      "parent_code": "420500",
      "a": "2",
      "area_code": "420500020",
      "en": "Casper",
      "l": "19",
      "ca": 3,
      "area_name": "卡斯柏"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250030",
      "en": "Dezhou",
      "l": "7",
      "ca": 3,
      "area_name": "德州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300190",
      "en": "Bortala",
      "l": "8",
      "ca": 3,
      "area_name": "博尔塔拉"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180090",
      "en": "Yueyang",
      "l": "7",
      "ca": 3,
      "area_name": "岳阳"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170050",
      "en": "Yichang",
      "l": "7",
      "ca": 3,
      "area_name": "宜昌"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260070",
      "en": "Yangquan",
      "l": "7",
      "ca": 3,
      "area_name": "阳泉"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390390",
      "en": "Vatican",
      "l": "2",
      "ca": 1,
      "area_name": "梵蒂冈"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390150",
      "en": "Poland",
      "l": "2",
      "ca": 1,
      "area_name": "波兰"
    },
    {
      "parent_code": "420370",
      "a": "2",
      "area_code": "420370030",
      "en": "Eugene",
      "l": "19",
      "ca": 3,
      "area_name": "尤金"
    },
    {
      "parent_code": "420430",
      "a": "2",
      "area_code": "420430020",
      "en": "Ogden",
      "l": "19",
      "ca": 3,
      "area_name": "奥格登"
    },
    {
      "en": "MUNICIPALITY",
      "area_name": "直辖市"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250090",
      "en": "Tai'an",
      "l": "7",
      "ca": 3,
      "area_name": "泰安"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180050",
      "en": "Changde",
      "l": "7",
      "ca": 3,
      "area_name": "常德"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380100",
      "en": "Nauru",
      "l": "2",
      "ca": 1,
      "area_name": "瑙鲁"
    },
    {
      "parent_code": "420090",
      "a": "2",
      "area_code": "420090020",
      "en": "Tampa",
      "l": "19",
      "ca": 3,
      "area_name": "坦帕"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240050",
      "en": "Haibei",
      "l": "8",
      "ca": 3,
      "area_name": "海北"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300160",
      "en": "Hotan Prefecture",
      "l": "10",
      "ca": 3,
      "area_name": "和田"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390160",
      "en": "Czechoslovakia",
      "l": "2",
      "ca": 1,
      "area_name": "捷克"
    },
    {
      "parent_code": "420370",
      "a": "2",
      "area_code": "420370020",
      "en": "Portland",
      "l": "19",
      "ca": 3,
      "area_name": "波特兰"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180060",
      "en": "Hengyang",
      "l": "7",
      "ca": 3,
      "area_name": "衡阳"
    },
    {
      "parent_code": "420010",
      "a": "2",
      "area_code": "420010050",
      "en": "Mobile",
      "l": "19",
      "ca": 3,
      "area_name": "莫比尔港"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "200",
      "en": "Jiangxi",
      "l": "4",
      "ca": 2,
      "area_name": "江西"
    },
    {
      "parent_code": "420090",
      "a": "2",
      "area_code": "420090010",
      "en": "Tallahassee",
      "l": "19",
      "ca": 3,
      "area_name": "塔拉赫西"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300170",
      "en": "Kizilsu",
      "l": "8",
      "ca": 3,
      "area_name": "克州"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240060",
      "en": "Huangnan",
      "l": "8",
      "ca": 3,
      "area_name": "黄南"
    },
    {
      "parent_code": "420430",
      "a": "2",
      "area_code": "420430010",
      "en": "Salt Lake City",
      "l": "19",
      "ca": 3,
      "area_name": "盐湖城"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390370",
      "en": "Bosnia and Herzegovina",
      "l": "2",
      "ca": 1,
      "area_name": "波黑"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390130",
      "en": "Ukraine",
      "l": "2",
      "ca": 1,
      "area_name": "乌克兰"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240020",
      "en": "Xining",
      "l": "7",
      "ca": 3,
      "area_name": "西宁"
    },
    {
      "parent_code": "230",
      "a": "0",
      "area_code": "230020",
      "en": "Yinchuan",
      "l": "7",
      "ca": 3,
      "area_name": "银川"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180030",
      "en": "Xiangtan",
      "l": "7",
      "ca": 3,
      "area_name": "湘潭"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250070",
      "en": "Qingdao",
      "l": "7",
      "ca": 3,
      "area_name": "青岛"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "210",
      "en": "Liaoning",
      "l": "4",
      "ca": 2,
      "area_name": "辽宁"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380120",
      "en": "Tuvalu",
      "l": "2",
      "ca": 1,
      "area_name": "图瓦卢"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190070",
      "en": "Baishan",
      "l": "7",
      "ca": 3,
      "area_name": "白山"
    },
    {
      "parent_code": "420360",
      "a": "2",
      "area_code": "420360010",
      "en": "Oklahoma City",
      "l": "19",
      "ca": 3,
      "area_name": "俄克拉何马城"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300140",
      "en": "Turpan",
      "l": "7",
      "ca": 3,
      "area_name": "吐鲁番"
    },
    {
      "parent_code": "420090",
      "a": "2",
      "area_code": "420090040",
      "en": "Miami",
      "l": "19",
      "ca": 3,
      "area_name": "迈阿密"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240030",
      "en": "Haidong",
      "l": "7",
      "ca": 3,
      "area_name": "海东"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170020",
      "en": "Wuhan",
      "l": "7",
      "ca": 3,
      "area_name": "武汉"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390380",
      "en": "Italy",
      "l": "2",
      "ca": 1,
      "area_name": "意大利"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390140",
      "en": "Moldova",
      "l": "2",
      "ca": 1,
      "area_name": "摩尔多瓦"
    },
    {
      "parent_code": "420370",
      "a": "2",
      "area_code": "420370040",
      "en": "Corvallis",
      "l": "19",
      "ca": 3,
      "area_name": "科瓦利"
    },
    {
      "parent_code": "420430",
      "a": "2",
      "area_code": "420430030",
      "en": "Provo",
      "l": "19",
      "ca": 3,
      "area_name": "普罗沃"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190090",
      "en": "Baicheng",
      "l": "7",
      "ca": 3,
      "area_name": "白城"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250080",
      "en": "Rizhao",
      "l": "7",
      "ca": 3,
      "area_name": "日照"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180040",
      "en": "Zhuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "株洲"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "220",
      "en": "Inner Mongolia",
      "l": "5",
      "ca": 2,
      "area_name": "内蒙古"
    },
    {
      "parent_code": "420090",
      "a": "2",
      "area_code": "420090030",
      "en": "Jacksonville",
      "l": "19",
      "ca": 3,
      "area_name": "杰克逊维尔"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380110",
      "en": "Kiribati",
      "l": "2",
      "ca": 1,
      "area_name": "基里巴斯"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190080",
      "en": "Songyuan",
      "l": "7",
      "ca": 3,
      "area_name": "松原"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240040",
      "en": "Haixi",
      "l": "8",
      "ca": 3,
      "area_name": "海西"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300150",
      "en": "Tacheng Prefecture",
      "l": "10",
      "ca": 3,
      "area_name": "塔城"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150160",
      "en": "Zhumadian",
      "l": "7",
      "ca": 3,
      "area_name": "驻马店"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070040",
      "en": "Wenzhou",
      "l": "7",
      "ca": 3,
      "area_name": "温州"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310040",
      "en": "Lijiang",
      "l": "7",
      "ca": 3,
      "area_name": "丽江"
    },
    {
      "parent_code": "230",
      "a": "0",
      "area_code": "230040",
      "en": "Wuzhong",
      "l": "7",
      "ca": 3,
      "area_name": "吴忠"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080090",
      "en": "Tongling",
      "l": "7",
      "ca": 3,
      "area_name": "铜陵"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "230",
      "en": "Ningxia",
      "l": "5",
      "ca": 2,
      "area_name": "宁夏"
    },
    {
      "parent_code": "420160",
      "a": "2",
      "area_code": "420160010",
      "en": "Topeka",
      "l": "19",
      "ca": 3,
      "area_name": "托皮卡"
    },
    {
      "parent_code": "420010",
      "a": "2",
      "area_code": "420010020",
      "en": "Montgomery",
      "l": "19",
      "ca": 3,
      "area_name": "蒙哥马利"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380020",
      "en": "Australia",
      "l": "2",
      "ca": 1,
      "area_name": "澳大利亚"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140110",
      "en": "Cangzhou",
      "l": "7",
      "ca": 3,
      "area_name": "沧州"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080080",
      "en": "Huaibei",
      "l": "7",
      "ca": 3,
      "area_name": "淮北"
    },
    {
      "parent_code": "420330",
      "a": "2",
      "area_code": "420330050",
      "en": "Asheville",
      "l": "19",
      "ca": 3,
      "area_name": "阿什维尔"
    },
    {
      "parent_code": "420080",
      "a": "2",
      "area_code": "420080020",
      "en": "Wilmington",
      "l": "19",
      "ca": 3,
      "area_name": "维明顿"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300240",
      "en": "Kunyu",
      "l": "7",
      "ca": 3,
      "area_name": "昆玉"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320010",
      "en": "Albany",
      "l": "19",
      "ca": 3,
      "area_name": "奥尔巴尼"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240090",
      "en": "Yushu Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "玉树"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390080",
      "en": "Estonia",
      "l": "2",
      "ca": 1,
      "area_name": "爱沙尼亚"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150150",
      "en": "Zhoukou",
      "l": "7",
      "ca": 3,
      "area_name": "周口"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150170",
      "en": "Nanyang",
      "l": "7",
      "ca": 3,
      "area_name": "南阳"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400190",
      "en": "Seychelles",
      "l": "2",
      "ca": 1,
      "area_name": "塞舌尔"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070050",
      "en": "Shaoxing",
      "l": "7",
      "ca": 3,
      "area_name": "绍兴"
    },
    {
      "parent_code": "420480",
      "a": "2",
      "area_code": "420480030",
      "en": "Morgantown",
      "l": "19",
      "ca": 3,
      "area_name": "摩根敦"
    },
    {
      "parent_code": "230",
      "a": "0",
      "area_code": "230030",
      "en": "Shizuishan",
      "l": "7",
      "ca": 3,
      "area_name": "石嘴山"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310050",
      "en": "Yuxi",
      "l": "7",
      "ca": 3,
      "area_name": "玉溪"
    },
    {
      "parent_code": "420010",
      "a": "2",
      "area_code": "420010010",
      "en": "Birmingham",
      "l": "19",
      "ca": 3,
      "area_name": "伯明翰"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "240",
      "en": "Qinghai",
      "l": "4",
      "ca": 2,
      "area_name": "青海"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140120",
      "en": "Hengshui",
      "l": "7",
      "ca": 3,
      "area_name": "衡水"
    },
    {
      "parent_code": "420330",
      "a": "2",
      "area_code": "420330040",
      "en": "Chapel Hill",
      "l": "19",
      "ca": 3,
      "area_name": "查伯山"
    },
    {
      "parent_code": "420090",
      "a": "2",
      "area_code": "420090050",
      "en": "Gainesville",
      "l": "19",
      "ca": 3,
      "area_name": "盖恩斯维尔"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300250",
      "en": "Beitun",
      "l": "7",
      "ca": 3,
      "area_name": "北屯"
    },
    {
      "parent_code": "420080",
      "a": "2",
      "area_code": "420080010",
      "en": "Dover",
      "l": "19",
      "ca": 3,
      "area_name": "多佛"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390090",
      "en": "Latvia",
      "l": "2",
      "ca": 1,
      "area_name": "拉脱维亚"
    },
    {
      "parent_code": "420480",
      "a": "2",
      "area_code": "420480020",
      "en": "Huntington",
      "l": "19",
      "ca": 3,
      "area_name": "亨丁顿"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390050",
      "en": "Iceland",
      "l": "2",
      "ca": 1,
      "area_name": "冰岛"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400180",
      "en": "Burundi",
      "l": "2",
      "ca": 1,
      "area_name": "布隆迪"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150180",
      "en": "Xinyang",
      "l": "7",
      "ca": 3,
      "area_name": "信阳"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070060",
      "en": "Jinhua",
      "l": "7",
      "ca": 3,
      "area_name": "金华"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310020",
      "en": "Kunming",
      "l": "7",
      "ca": 3,
      "area_name": "昆明"
    },
    {
      "parent_code": "230",
      "a": "0",
      "area_code": "230060",
      "en": "Zhongwei",
      "l": "7",
      "ca": 3,
      "area_name": "中卫"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "250",
      "en": "Shandong",
      "l": "4",
      "ca": 2,
      "area_name": "山东"
    },
    {
      "parent_code": "420160",
      "a": "2",
      "area_code": "420160030",
      "en": "Kansas City",
      "l": "19",
      "ca": 3,
      "area_name": "堪萨斯城"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "010",
      "en": "Beijing",
      "l": "3",
      "ca": 2,
      "area_name": "北京"
    },
    {
      "parent_code": "420010",
      "a": "2",
      "area_code": "420010040",
      "en": "Tuscaloosa",
      "l": "19",
      "ca": 3,
      "area_name": "塔斯卡卢萨"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380040",
      "en": "The Independent State of Papua New Guinea",
      "l": "2",
      "ca": 1,
      "area_name": "巴布亚新几内亚"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220020",
      "en": "Hohhot",
      "l": "7",
      "ca": 3,
      "area_name": "呼和浩特"
    },
    {
      "parent_code": "420330",
      "a": "2",
      "area_code": "420330030",
      "en": "Greensboro",
      "l": "19",
      "ca": 3,
      "area_name": "格林斯堡"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240070",
      "en": "Hainan",
      "l": "8",
      "ca": 3,
      "area_name": "海南州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300220",
      "en": "Shuanghe",
      "l": "7",
      "ca": 3,
      "area_name": "双河"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390060",
      "en": "Denmark",
      "l": "2",
      "ca": 1,
      "area_name": "丹麦"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400170",
      "en": "Rwanda",
      "l": "2",
      "ca": 1,
      "area_name": "卢旺达"
    },
    {
      "parent_code": "420480",
      "a": "2",
      "area_code": "420480010",
      "en": "Charleston",
      "l": "19",
      "ca": 3,
      "area_name": "查理斯敦"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130100",
      "en": "Dongfang",
      "l": "7",
      "ca": 3,
      "area_name": "东方"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150190",
      "en": "Jiyuan",
      "l": "7",
      "ca": 3,
      "area_name": "济源"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070070",
      "en": "Taizhou",
      "l": "7",
      "ca": 3,
      "area_name": "台州"
    },
    {
      "parent_code": "420330",
      "a": "2",
      "area_code": "420330020",
      "en": "Charlotte",
      "l": "19",
      "ca": 3,
      "area_name": "夏洛特"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310030",
      "en": "Dali Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "大理州"
    },
    {
      "parent_code": "230",
      "a": "0",
      "area_code": "230050",
      "en": "Guyuan",
      "l": "7",
      "ca": 3,
      "area_name": "固原"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "260",
      "en": "Shanxi",
      "l": "4",
      "ca": 2,
      "area_name": "山西"
    },
    {
      "parent_code": "420160",
      "a": "2",
      "area_code": "420160020",
      "en": "Wichita",
      "l": "19",
      "ca": 3,
      "area_name": "威奇托"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350400",
      "en": "Kuwait",
      "l": "2",
      "ca": 1,
      "area_name": "科威特"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "020",
      "en": "Shanghai",
      "l": "3",
      "ca": 2,
      "area_name": "上海"
    },
    {
      "parent_code": "420010",
      "a": "2",
      "area_code": "420010030",
      "en": "Huntsville",
      "l": "19",
      "ca": 3,
      "area_name": "亨次维尔"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380030",
      "en": "New Zealand",
      "l": "2",
      "ca": 1,
      "area_name": "新西兰"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360200",
      "en": "Dominica",
      "l": "2",
      "ca": 1,
      "area_name": "多米尼克"
    },
    {
      "parent_code": "420080",
      "a": "2",
      "area_code": "420080030",
      "en": "Newark",
      "l": "19",
      "ca": 3,
      "area_name": "纽华克"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070080",
      "en": "Huzhou",
      "l": "7",
      "ca": 3,
      "area_name": "湖州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300230",
      "en": "Kokdala",
      "l": "7",
      "ca": 3,
      "area_name": "可克达拉"
    },
    {
      "parent_code": "240",
      "a": "0",
      "area_code": "240080",
      "en": "Guoluo",
      "l": "8",
      "ca": 3,
      "area_name": "果洛"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370020",
      "en": "Columbia",
      "l": "2",
      "ca": 1,
      "area_name": "哥伦比亚"
    },
    {
      "parent_code": "420330",
      "a": "2",
      "area_code": "420330010",
      "en": "Raleigh",
      "l": "19",
      "ca": 3,
      "area_name": "洛利"
    },
    {
      "parent_code": "420070",
      "a": "2",
      "area_code": "420070010",
      "en": "Hartford",
      "l": "19",
      "ca": 3,
      "area_name": "哈特福"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "270",
      "en": "Shaanxi",
      "l": "4",
      "ca": 2,
      "area_name": "陕西"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380070",
      "en": "Micronesia",
      "l": "2",
      "ca": 1,
      "area_name": "密克罗尼西亚"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350410",
      "en": "United Arab Emirates",
      "l": "2",
      "ca": 1,
      "area_name": "阿联酋"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "030",
      "en": "Tianjin",
      "l": "3",
      "ca": 2,
      "area_name": "天津"
    },
    {
      "parent_code": "420170",
      "a": "2",
      "area_code": "420170020",
      "en": "Lexington",
      "l": "19",
      "ca": 3,
      "area_name": "列克星敦"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360210",
      "en": "Saint Lucia",
      "l": "2",
      "ca": 1,
      "area_name": "圣卢西亚"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220040",
      "en": "Chifeng",
      "l": "7",
      "ca": 3,
      "area_name": "赤峰"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070090",
      "en": "Jiaxing",
      "l": "7",
      "ca": 3,
      "area_name": "嘉兴"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150110",
      "en": "Xuchang",
      "l": "7",
      "ca": 3,
      "area_name": "许昌"
    },
    {
      "parent_code": "420020",
      "a": "2",
      "area_code": "420020030",
      "en": "Fairbanks",
      "l": "19",
      "ca": 3,
      "area_name": "费尔班克斯"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "280",
      "en": "Sichuan",
      "l": "4",
      "ca": 2,
      "area_name": "四川"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350420",
      "en": "Oman",
      "l": "2",
      "ca": 1,
      "area_name": "阿曼"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "040",
      "en": "Chongqing",
      "l": "3",
      "ca": 2,
      "area_name": "重庆"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380060",
      "en": "Vanuatu",
      "l": "2",
      "ca": 1,
      "area_name": "瓦努阿图"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380050",
      "en": "Solomon Islands",
      "l": "2",
      "ca": 1,
      "area_name": "所罗门群岛"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220030",
      "en": "Baotou",
      "l": "7",
      "ca": 3,
      "area_name": "包头"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360220",
      "en": "Saint Vincent and the Grenadines",
      "l": "2",
      "ca": 1,
      "area_name": "圣文森特和格林纳丁斯"
    },
    {
      "en": "",
      "area_name": "有下属区县的城市"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150120",
      "en": "Luohe",
      "l": "7",
      "ca": 3,
      "area_name": "漯河"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370040",
      "en": "Guyana",
      "l": "2",
      "ca": 1,
      "area_name": "圭亚那"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "290",
      "en": "Tibet",
      "l": "5",
      "ca": 2,
      "area_name": "西藏"
    },
    {
      "parent_code": "430100",
      "a": "2",
      "area_code": "430100010",
      "en": "Saskatoon",
      "l": "19",
      "ca": 3,
      "area_name": "萨斯卡通"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350430",
      "en": "Yemen",
      "l": "2",
      "ca": 1,
      "area_name": "也门"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "050",
      "en": "Guangdong",
      "l": "4",
      "ca": 2,
      "area_name": "广东"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380090",
      "en": "The Republic of Palau",
      "l": "2",
      "ca": 1,
      "area_name": "帕劳"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220060",
      "en": "Wuhai",
      "l": "7",
      "ca": 3,
      "area_name": "乌海"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360230",
      "en": "Grenada",
      "l": "2",
      "ca": 1,
      "area_name": "格林纳达"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150130",
      "en": "Sanmenxia",
      "l": "7",
      "ca": 3,
      "area_name": "三门峡"
    },
    {
      "parent_code": "420020",
      "a": "2",
      "area_code": "420020010",
      "en": "Juneau",
      "l": "19",
      "ca": 3,
      "area_name": "朱诺"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370030",
      "en": "Venezuela",
      "l": "2",
      "ca": 1,
      "area_name": "委内瑞拉"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210020",
      "en": "Shenyang",
      "l": "7",
      "ca": 3,
      "area_name": "沈阳"
    },
    {
      "parent_code": "430100",
      "a": "2",
      "area_code": "430100020",
      "en": "Regina",
      "l": "19",
      "ca": 3,
      "area_name": "里贾纳"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350440",
      "en": "Georgia",
      "l": "2",
      "ca": 1,
      "area_name": "格鲁吉亚"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "060",
      "en": "Jiangsu",
      "l": "4",
      "ca": 2,
      "area_name": "江苏"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350200",
      "en": "India",
      "l": "2",
      "ca": 1,
      "area_name": "印度"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380080",
      "en": "Marshall Islands",
      "l": "2",
      "ca": 1,
      "area_name": "马绍尔群岛"
    },
    {
      "parent_code": "420170",
      "a": "2",
      "area_code": "420170010",
      "en": "Louisville",
      "l": "19",
      "ca": 3,
      "area_name": "路易斯维尔"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220050",
      "en": "Ordos",
      "l": "7",
      "ca": 3,
      "area_name": "鄂尔多斯"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140100",
      "en": "Xingtai",
      "l": "7",
      "ca": 3,
      "area_name": "邢台"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360240",
      "en": "Barbados",
      "l": "2",
      "ca": 1,
      "area_name": "巴巴多斯"
    },
    {
      "parent_code": "420020",
      "a": "2",
      "area_code": "420020020",
      "en": "Anchorage",
      "l": "19",
      "ca": 3,
      "area_name": "安克拉奇"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150140",
      "en": "Hebi",
      "l": "7",
      "ca": 3,
      "area_name": "鹤壁"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060080",
      "en": "Suzhou",
      "l": "7",
      "ca": 3,
      "area_name": "苏州"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090050",
      "en": "Zhangzhou",
      "l": "7",
      "ca": 3,
      "area_name": "漳州"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210030",
      "en": "Anshan",
      "l": "7",
      "ca": 3,
      "area_name": "鞍山"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050030",
      "en": "Chaozhou",
      "l": "7",
      "ca": 3,
      "area_name": "潮州"
    },
    {
      "parent_code": "420030",
      "a": "2",
      "area_code": "420030030",
      "en": "Mesa",
      "l": "19",
      "ca": 3,
      "area_name": "梅萨"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350450",
      "en": "Armenia",
      "l": "2",
      "ca": 1,
      "area_name": "亚美尼亚"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "070",
      "en": "Zhejiang",
      "l": "4",
      "ca": 2,
      "area_name": "浙江"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350210",
      "en": "Pakistan",
      "l": "2",
      "ca": 1,
      "area_name": "巴基斯坦"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400120",
      "en": "Somalia",
      "l": "2",
      "ca": 1,
      "area_name": "索马里"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400360",
      "en": "Sierra Leone",
      "l": "2",
      "ca": 1,
      "area_name": "塞拉利昂"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220080",
      "en": "Hulunbuir",
      "l": "7",
      "ca": 3,
      "area_name": "呼伦贝尔"
    },
    {
      "parent_code": "420060",
      "a": "2",
      "area_code": "420060010",
      "en": "Denver",
      "l": "19",
      "ca": 3,
      "area_name": "丹佛"
    },
    {
      "parent_code": "420490",
      "a": "2",
      "area_code": "420490010",
      "en": "Madison",
      "l": "19",
      "ca": 3,
      "area_name": "麦迪逊"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360250",
      "en": "Trinidad and Tobago",
      "l": "2",
      "ca": 1,
      "area_name": "特多"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120100",
      "en": "Qiannan",
      "l": "8",
      "ca": 3,
      "area_name": "黔南"
    },
    {
      "parent_code": "420340",
      "a": "2",
      "area_code": "420340020",
      "en": "Fargo",
      "l": "19",
      "ca": 3,
      "area_name": "法戈"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370070",
      "en": "Ecuador",
      "l": "2",
      "ca": 1,
      "area_name": "厄瓜多尔"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280130",
      "en": "Nanchong",
      "l": "7",
      "ca": 3,
      "area_name": "南充"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130160",
      "en": "Qiongzhong Co.",
      "l": "7",
      "ca": 3,
      "area_name": "琼中县"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210040",
      "en": "Dalian",
      "l": "7",
      "ca": 3,
      "area_name": "大连"
    },
    {
      "parent_code": "420300",
      "a": "2",
      "area_code": "420300010",
      "en": "Newark",
      "l": "19",
      "ca": 3,
      "area_name": "纽瓦克"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090040",
      "en": "Xiamen",
      "l": "7",
      "ca": 3,
      "area_name": "厦门"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060070",
      "en": "Nantong",
      "l": "7",
      "ca": 3,
      "area_name": "南通"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350460",
      "en": "Azerbaijan",
      "l": "2",
      "ca": 1,
      "area_name": "阿塞拜疆"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "080",
      "en": "Anhui",
      "l": "4",
      "ca": 2,
      "area_name": "安徽"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050020",
      "en": "Guangzhou",
      "l": "7",
      "ca": 3,
      "area_name": "广州"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350220",
      "en": "Sri Lanka",
      "l": "2",
      "ca": 1,
      "area_name": "斯里兰卡"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400110",
      "en": "Eritrea",
      "l": "2",
      "ca": 1,
      "area_name": "厄立特里亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400350",
      "en": "Cape Verde",
      "l": "2",
      "ca": 1,
      "area_name": "佛得角"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400590",
      "en": "Nigeria",
      "l": "2",
      "ca": 1,
      "area_name": "尼日利亚"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220070",
      "en": "Tongliao",
      "l": "7",
      "ca": 3,
      "area_name": "通辽"
    },
    {
      "parent_code": "420060",
      "a": "2",
      "area_code": "420060020",
      "en": "Boulder",
      "l": "19",
      "ca": 3,
      "area_name": "波尔德"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360020",
      "en": "Canada",
      "l": "2",
      "ca": 1,
      "area_name": "加拿大"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350470",
      "en": "Turkey",
      "l": "2",
      "ca": 1,
      "area_name": "土耳其"
    },
    {
      "parent_code": "420490",
      "a": "2",
      "area_code": "420490020",
      "en": "Milwaukee",
      "l": "19",
      "ca": 3,
      "area_name": "密尔沃基"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060060",
      "en": "Lianyungang",
      "l": "7",
      "ca": 3,
      "area_name": "连云港"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370060",
      "en": "Surinam",
      "l": "2",
      "ca": 1,
      "area_name": "苏里南"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280120",
      "en": "Suining",
      "l": "7",
      "ca": 3,
      "area_name": "遂宁"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130170",
      "en": "Baoting Co.",
      "l": "7",
      "ca": 3,
      "area_name": "保亭县"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090070",
      "en": "Sanming",
      "l": "7",
      "ca": 3,
      "area_name": "三明"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210050",
      "en": "Huludao",
      "l": "7",
      "ca": 3,
      "area_name": "葫芦岛"
    },
    {
      "parent_code": "420460",
      "a": "2",
      "area_code": "420460010",
      "en": "Olympia",
      "l": "19",
      "ca": 3,
      "area_name": "奥林匹亚"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "090",
      "en": "Fujian",
      "l": "4",
      "ca": 2,
      "area_name": "福建"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350230",
      "en": "Maldives",
      "l": "2",
      "ca": 1,
      "area_name": "马尔代夫"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360040",
      "en": "Mexico",
      "l": "2",
      "ca": 1,
      "area_name": "墨西哥"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400100",
      "en": "Ethiopia",
      "l": "2",
      "ca": 1,
      "area_name": "埃塞俄比亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400340",
      "en": "Guinea-Bissau",
      "l": "2",
      "ca": 1,
      "area_name": "几内亚比绍"
    },
    {
      "parent_code": "420030",
      "a": "2",
      "area_code": "420030010",
      "en": "Phoenix",
      "l": "19",
      "ca": 3,
      "area_name": "菲尼克斯"
    },
    {
      "parent_code": "420060",
      "a": "2",
      "area_code": "420060030",
      "en": "Colorado Springs",
      "l": "19",
      "ca": 3,
      "area_name": "科罗拉多斯普林斯"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080020",
      "en": "Hefei",
      "l": "7",
      "ca": 3,
      "area_name": "合肥"
    },
    {
      "parent_code": "420310",
      "a": "2",
      "area_code": "420310020",
      "en": "Albuquerque",
      "l": "19",
      "ca": 3,
      "area_name": "阿尔布开克"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360030",
      "en": "America",
      "l": "2",
      "ca": 1,
      "area_name": "美国"
    },
    {
      "parent_code": "420490",
      "a": "2",
      "area_code": "420490030",
      "en": "Racine",
      "l": "19",
      "ca": 3,
      "area_name": "拉辛"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280110",
      "en": "Guangyuan",
      "l": "7",
      "ca": 3,
      "area_name": "广元"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130180",
      "en": "Baisha Co.",
      "l": "7",
      "ca": 3,
      "area_name": "白沙县"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370090",
      "en": "Bolivia",
      "l": "2",
      "ca": 1,
      "area_name": "玻利维亚"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090060",
      "en": "Putian",
      "l": "7",
      "ca": 3,
      "area_name": "莆田"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320060",
      "en": "Ithaca",
      "l": "19",
      "ca": 3,
      "area_name": "绮色佳"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210060",
      "en": "Fushun",
      "l": "7",
      "ca": 3,
      "area_name": "抚顺"
    },
    {
      "parent_code": "420460",
      "a": "2",
      "area_code": "420460020",
      "en": "Seattle",
      "l": "19",
      "ca": 3,
      "area_name": "西雅图"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350240",
      "en": "Kazakhstan",
      "l": "2",
      "ca": 1,
      "area_name": "哈萨克斯坦"
    },
    {
      "parent_code": "420030",
      "a": "2",
      "area_code": "420030020",
      "en": "Tucson",
      "l": "19",
      "ca": 3,
      "area_name": "图森"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400330",
      "en": "Guinea",
      "l": "2",
      "ca": 1,
      "area_name": "几内亚"
    },
    {
      "parent_code": "420180",
      "a": "2",
      "area_code": "420180010",
      "en": "New Orleans",
      "l": "19",
      "ca": 3,
      "area_name": "新奥尔良"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200020",
      "en": "Nanchang",
      "l": "7",
      "ca": 3,
      "area_name": "南昌"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080030",
      "en": "Anqing",
      "l": "7",
      "ca": 3,
      "area_name": "安庆"
    },
    {
      "parent_code": "350",
      "a": "0",
      "area_code": "350490",
      "en": "China",
      "l": "2",
      "ca": 1,
      "area_name": "中国"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350250",
      "en": "Kyrghyzstan",
      "l": "2",
      "ca": 1,
      "area_name": "吉尔吉斯斯坦"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370080",
      "en": "Peru",
      "l": "2",
      "ca": 1,
      "area_name": "秘鲁"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130190",
      "en": "Changjiang Co.",
      "l": "7",
      "ca": 3,
      "area_name": "昌江县"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280100",
      "en": "Deyang",
      "l": "7",
      "ca": 3,
      "area_name": "德阳"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060040",
      "en": "Changzhou",
      "l": "7",
      "ca": 3,
      "area_name": "常州"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220090",
      "en": "Bayannur",
      "l": "7",
      "ca": 3,
      "area_name": "巴彦淖尔"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130110",
      "en": "Wuzhishan",
      "l": "7",
      "ca": 3,
      "area_name": "五指山"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400160",
      "en": "Uganda",
      "l": "2",
      "ca": 1,
      "area_name": "乌干达"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280180",
      "en": "Bazhong",
      "l": "7",
      "ca": 3,
      "area_name": "巴中"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090090",
      "en": "Longyan",
      "l": "7",
      "ca": 3,
      "area_name": "龙岩"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210070",
      "en": "Benxi",
      "l": "7",
      "ca": 3,
      "area_name": "本溪"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320050",
      "en": "Rochester",
      "l": "19",
      "ca": 3,
      "area_name": "罗彻斯特市"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110100",
      "en": "Fangchenggang",
      "l": "7",
      "ca": 3,
      "area_name": "防城港"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360060",
      "en": "Guatemala",
      "l": "2",
      "ca": 1,
      "area_name": "危地马拉"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420170",
      "en": "Kentucky",
      "l": "17",
      "ca": 2,
      "area_name": "肯塔基州"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050230",
      "en": "Yunfu",
      "l": "7",
      "ca": 3,
      "area_name": "云浮"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080040",
      "en": "Bengbu",
      "l": "7",
      "ca": 3,
      "area_name": "蚌埠"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350260",
      "en": "Tajikistan",
      "l": "2",
      "ca": 1,
      "area_name": "塔吉克斯坦"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200030",
      "en": "Jiujiang",
      "l": "7",
      "ca": 3,
      "area_name": "九江"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280170",
      "en": "Ya'an",
      "l": "7",
      "ca": 3,
      "area_name": "雅安"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400390",
      "en": "Ghana",
      "l": "2",
      "ca": 1,
      "area_name": "加纳"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090080",
      "en": "Nanping",
      "l": "7",
      "ca": 3,
      "area_name": "南平"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130120",
      "en": "Ding'an Co.",
      "l": "7",
      "ca": 3,
      "area_name": "定安县"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420180",
      "en": "Louisiana",
      "l": "17",
      "ca": 2,
      "area_name": "路易斯安那州"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320040",
      "en": "New York",
      "l": "19",
      "ca": 3,
      "area_name": "纽约"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350020",
      "en": "Mongolia",
      "l": "2",
      "ca": 1,
      "area_name": "蒙古"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360070",
      "en": "Belize",
      "l": "2",
      "ca": 1,
      "area_name": "伯利兹"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270120",
      "en": "Yangling",
      "l": "7",
      "ca": 3,
      "area_name": "杨凌"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210080",
      "en": "Dandong",
      "l": "7",
      "ca": 3,
      "area_name": "丹东"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400150",
      "en": "Tanzania",
      "l": "2",
      "ca": 1,
      "area_name": "坦桑尼亚"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050220",
      "en": "Jieyang",
      "l": "7",
      "ca": 3,
      "area_name": "揭阳"
    },
    {
      "parent_code": "420310",
      "a": "2",
      "area_code": "420310010",
      "en": "Santa Fe",
      "l": "19",
      "ca": 3,
      "area_name": "圣达菲"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350270",
      "en": "Uzbekistan",
      "l": "2",
      "ca": 1,
      "area_name": "乌兹别克斯坦"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350030",
      "en": "North Korea",
      "l": "2",
      "ca": 1,
      "area_name": "朝鲜"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200040",
      "en": "Ganzhou",
      "l": "7",
      "ca": 3,
      "area_name": "赣州"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080050",
      "en": "Wuhu",
      "l": "7",
      "ca": 3,
      "area_name": "芜湖"
    },
    {
      "parent_code": "420190",
      "a": "2",
      "area_code": "420190020",
      "en": "Portland",
      "l": "19",
      "ca": 3,
      "area_name": "波特兰"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060020",
      "en": "Nanjing",
      "l": "7",
      "ca": 3,
      "area_name": "南京"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280160",
      "en": "Dazhou",
      "l": "7",
      "ca": 3,
      "area_name": "达州"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400380",
      "en": "Cote Divoire",
      "l": "2",
      "ca": 1,
      "area_name": "科特迪瓦"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130130",
      "en": "Tuenchang Co.",
      "l": "7",
      "ca": 3,
      "area_name": "屯昌县"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070020",
      "en": "Hangzhou",
      "l": "7",
      "ca": 3,
      "area_name": "杭州"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320030",
      "en": "Long Island",
      "l": "19",
      "ca": 3,
      "area_name": "长岛"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420190",
      "en": "Maine",
      "l": "17",
      "ca": 2,
      "area_name": "缅因州"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050060",
      "en": "San Francisco",
      "l": "19",
      "ca": 3,
      "area_name": "旧金山"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270110",
      "en": "Yulin",
      "l": "7",
      "ca": 3,
      "area_name": "榆林"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050210",
      "en": "Heyuan",
      "l": "7",
      "ca": 3,
      "area_name": "河源"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140180",
      "en": "Xiong'an",
      "l": "7",
      "ca": 3,
      "area_name": "雄安新区"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360080",
      "en": "Salvador",
      "l": "2",
      "ca": 1,
      "area_name": "萨尔瓦多"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210090",
      "en": "Jinzhou",
      "l": "7",
      "ca": 3,
      "area_name": "锦州"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400140",
      "en": "Kenya",
      "l": "2",
      "ca": 1,
      "area_name": "肯尼亚"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350280",
      "en": "Turkmenistan",
      "l": "2",
      "ca": 1,
      "area_name": "土库曼斯坦"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200050",
      "en": "Yichun",
      "l": "7",
      "ca": 3,
      "area_name": "宜春"
    },
    {
      "parent_code": "420470",
      "a": "2",
      "area_code": "420470020",
      "en": "Newport",
      "l": "19",
      "ca": 3,
      "area_name": "纽波特"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350040",
      "en": "Korea",
      "l": "2",
      "ca": 1,
      "area_name": "韩国"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080060",
      "en": "Huainan",
      "l": "7",
      "ca": 3,
      "area_name": "淮南"
    },
    {
      "parent_code": "420190",
      "a": "2",
      "area_code": "420190010",
      "en": "Augusta",
      "l": "19",
      "ca": 3,
      "area_name": "奥古斯塔"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280150",
      "en": "Guang'an",
      "l": "7",
      "ca": 3,
      "area_name": "广安"
    },
    {
      "parent_code": "420040",
      "a": "2",
      "area_code": "420040020",
      "en": "Fayetteville",
      "l": "19",
      "ca": 3,
      "area_name": "费耶特维尔"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130140",
      "en": "Chengmai Co.",
      "l": "7",
      "ca": 3,
      "area_name": "澄迈县"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070030",
      "en": "Ningbo",
      "l": "7",
      "ca": 3,
      "area_name": "宁波"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050050",
      "en": "San Diego",
      "l": "19",
      "ca": 3,
      "area_name": "圣地亚哥"
    },
    {
      "parent_code": "420320",
      "a": "2",
      "area_code": "420320020",
      "en": "Buffalo",
      "l": "19",
      "ca": 3,
      "area_name": "布法罗"
    },
    {
      "parent_code": "270",
      "a": "0",
      "area_code": "270100",
      "en": "Yanan",
      "l": "7",
      "ca": 3,
      "area_name": "延安"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400130",
      "en": "Djibouti",
      "l": "2",
      "ca": 1,
      "area_name": "吉布提"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360090",
      "en": "Honduras",
      "l": "2",
      "ca": 1,
      "area_name": "洪都拉斯"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050200",
      "en": "Shanwei",
      "l": "7",
      "ca": 3,
      "area_name": "汕尾"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400370",
      "en": "Liberia",
      "l": "2",
      "ca": 1,
      "area_name": "利比里亚"
    },
    {
      "parent_code": "420470",
      "a": "2",
      "area_code": "420470010",
      "en": "Providence",
      "l": "19",
      "ca": 3,
      "area_name": "普洛威顿斯"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350290",
      "en": "Afghanistan",
      "l": "2",
      "ca": 1,
      "area_name": "阿富汗"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350050",
      "en": "Japan",
      "l": "2",
      "ca": 1,
      "area_name": "日本"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200060",
      "en": "Ji'an",
      "l": "7",
      "ca": 3,
      "area_name": "吉安"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080070",
      "en": "Ma'anshan",
      "l": "7",
      "ca": 3,
      "area_name": "马鞍山"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130150",
      "en": "Linggao Co.",
      "l": "7",
      "ca": 3,
      "area_name": "临高县"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280140",
      "en": "Meishan",
      "l": "7",
      "ca": 3,
      "area_name": "眉山"
    },
    {
      "parent_code": "420040",
      "a": "2",
      "area_code": "420040010",
      "en": "Little Rock",
      "l": "19",
      "ca": 3,
      "area_name": "小石城"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050040",
      "en": "Los Angeles",
      "l": "19",
      "ca": 3,
      "area_name": "洛杉矶"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400520",
      "en": "Swaziland",
      "l": "2",
      "ca": 1,
      "area_name": "斯威士兰"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420370",
      "en": "Oregon",
      "l": "17",
      "ca": 2,
      "area_name": "俄勒冈州"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180130",
      "en": "Yongzhou",
      "l": "7",
      "ca": 3,
      "area_name": "永州"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120070",
      "en": "Tongren",
      "l": "7",
      "ca": 3,
      "area_name": "铜仁"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420130",
      "en": "Illinois",
      "l": "17",
      "ca": 2,
      "area_name": "伊利诺伊州"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350180",
      "en": "Bhutan",
      "l": "2",
      "ca": 1,
      "area_name": "不丹"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400510",
      "en": "South Africa",
      "l": "2",
      "ca": 1,
      "area_name": "南非"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200070",
      "en": "Shangrao",
      "l": "7",
      "ca": 3,
      "area_name": "上饶"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110030",
      "en": "Beihai",
      "l": "7",
      "ca": 3,
      "area_name": "北海"
    },
    {
      "en": "ALL PROVINCE",
      "area_name": "全部省份"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050030",
      "en": "San Jose",
      "l": "19",
      "ca": 3,
      "area_name": "圣荷西"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260120",
      "en": "Lyuliang",
      "l": "7",
      "ca": 3,
      "area_name": "吕梁"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420140",
      "en": "Indiana",
      "l": "17",
      "ca": 2,
      "area_name": "印第安那州"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390400",
      "en": "San Marino",
      "l": "2",
      "ca": 1,
      "area_name": "圣马力诺"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420380",
      "en": "Pennsylvania",
      "l": "17",
      "ca": 2,
      "area_name": "宾州"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180140",
      "en": "Huaihua",
      "l": "7",
      "ca": 3,
      "area_name": "怀化"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120060",
      "en": "Bijie",
      "l": "7",
      "ca": 3,
      "area_name": "毕节"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350190",
      "en": "Bangladesh",
      "l": "2",
      "ca": 1,
      "area_name": "孟加拉国"
    },
    {
      "parent_code": "420120",
      "a": "2",
      "area_code": "420120010",
      "en": "Boise",
      "l": "19",
      "ca": 3,
      "area_name": "波夕"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400500",
      "en": "Namibia",
      "l": "2",
      "ca": 1,
      "area_name": "纳米比亚"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110020",
      "en": "Nanning",
      "l": "7",
      "ca": 3,
      "area_name": "南宁"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200080",
      "en": "Fuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "抚州"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050020",
      "en": "Sonoma",
      "l": "19",
      "ca": 3,
      "area_name": "索诺马"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260110",
      "en": "Xinzhou",
      "l": "7",
      "ca": 3,
      "area_name": "忻州"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120050",
      "en": "Anshun",
      "l": "7",
      "ca": 3,
      "area_name": "安顺"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420150",
      "en": "Iowa",
      "l": "17",
      "ca": 2,
      "area_name": "爱荷华州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420390",
      "en": "South Carolina",
      "l": "17",
      "ca": 2,
      "area_name": "南卡省"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180110",
      "en": "Zhangjiajie",
      "l": "7",
      "ca": 3,
      "area_name": "张家界"
    },
    {
      "parent_code": "420120",
      "a": "2",
      "area_code": "420120020",
      "en": "Pocatello",
      "l": "19",
      "ca": 3,
      "area_name": "波卡特洛"
    },
    {
      "parent_code": "420200",
      "a": "2",
      "area_code": "420200010",
      "en": "Annapolis",
      "l": "19",
      "ca": 3,
      "area_name": "安纳波利斯"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200090",
      "en": "Jingdezhen",
      "l": "7",
      "ca": 3,
      "area_name": "景德镇"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170100",
      "en": "Ezhou",
      "l": "7",
      "ca": 3,
      "area_name": "鄂州"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280190",
      "en": "Ziyang",
      "l": "7",
      "ca": 3,
      "area_name": "资阳"
    },
    {
      "parent_code": "420050",
      "a": "2",
      "area_code": "420050010",
      "en": "Sacramento",
      "l": "19",
      "ca": 3,
      "area_name": "萨克拉门托"
    },
    {
      "parent_code": "260",
      "a": "0",
      "area_code": "260100",
      "en": "Jinzhong",
      "l": "7",
      "ca": 3,
      "area_name": "晋中"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070140",
      "en": "Greater Sudbury",
      "l": "19",
      "ca": 3,
      "area_name": "萨德伯里"
    },
    {
      "parent_code": "090",
      "a": "0",
      "area_code": "090100",
      "en": "Ningde",
      "l": "7",
      "ca": 3,
      "area_name": "宁德"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120040",
      "en": "Liupanshui",
      "l": "7",
      "ca": 3,
      "area_name": "六盘水"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420160",
      "en": "Kansas",
      "l": "17",
      "ca": 2,
      "area_name": "堪萨斯州"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180120",
      "en": "Loudi",
      "l": "7",
      "ca": 3,
      "area_name": "娄底"
    },
    {
      "parent_code": "420120",
      "a": "2",
      "area_code": "420120030",
      "en": "Idaho Falls",
      "l": "19",
      "ca": 3,
      "area_name": "爱达荷福尔斯"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050090",
      "en": "Shenzhen",
      "l": "7",
      "ca": 3,
      "area_name": "深圳"
    },
    {
      "parent_code": "420200",
      "a": "2",
      "area_code": "420200020",
      "en": "Baltimore",
      "l": "19",
      "ca": 3,
      "area_name": "巴尔的摩"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100020",
      "en": "Lanzhou",
      "l": "7",
      "ca": 3,
      "area_name": "兰州"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070130",
      "en": "Burlington",
      "l": "19",
      "ca": 3,
      "area_name": "伯灵顿"
    },
    {
      "parent_code": "420300",
      "a": "2",
      "area_code": "420300040",
      "en": "Elizabeth",
      "l": "19",
      "ca": 3,
      "area_name": "依丽沙白"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390430",
      "en": "Portugal",
      "l": "2",
      "ca": 1,
      "area_name": "葡萄牙"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400320",
      "en": "Burkina Faso",
      "l": "2",
      "ca": 1,
      "area_name": "布基纳法索"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400560",
      "en": "Mauritius",
      "l": "2",
      "ca": 1,
      "area_name": "毛里求斯"
    },
    {
      "parent_code": "420140",
      "a": "2",
      "area_code": "420140040",
      "en": "Lafayette",
      "l": "19",
      "ca": 3,
      "area_name": "拉法叶"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420330",
      "en": "North Carolina",
      "l": "17",
      "ca": 2,
      "area_name": "北卡罗莱纳州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250120",
      "en": "Yantai",
      "l": "7",
      "ca": 3,
      "area_name": "烟台"
    },
    {
      "parent_code": "420200",
      "a": "2",
      "area_code": "420200030",
      "en": "Rockville",
      "l": "19",
      "ca": 3,
      "area_name": "洛克威尔"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050080",
      "en": "Shantou",
      "l": "7",
      "ca": 3,
      "area_name": "汕头"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130080",
      "en": "Wanning",
      "l": "7",
      "ca": 3,
      "area_name": "万宁"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110070",
      "en": "Wuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "梧州"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180100",
      "en": "Shaoyang",
      "l": "7",
      "ca": 3,
      "area_name": "邵阳"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100030",
      "en": "Jiayuguan",
      "l": "7",
      "ca": 3,
      "area_name": "嘉峪关"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070120",
      "en": "Okville",
      "l": "19",
      "ca": 3,
      "area_name": "奥克维尔"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390440",
      "en": "Andorra",
      "l": "2",
      "ca": 1,
      "area_name": "安道尔"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390200",
      "en": "Switzerland",
      "l": "2",
      "ca": 1,
      "area_name": "瑞士"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400310",
      "en": "Mali",
      "l": "2",
      "ca": 1,
      "area_name": "马里"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400550",
      "en": "Comorin",
      "l": "2",
      "ca": 1,
      "area_name": "科摩罗"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420100",
      "en": "Georgia",
      "l": "17",
      "ca": 2,
      "area_name": "乔治亚州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420340",
      "en": "North Dakota",
      "l": "17",
      "ca": 2,
      "area_name": "北达科他州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250130",
      "en": "Zibo",
      "l": "7",
      "ca": 3,
      "area_name": "淄博"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050070",
      "en": "Qingyuan",
      "l": "7",
      "ca": 3,
      "area_name": "清远"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130090",
      "en": "Danzhou",
      "l": "7",
      "ca": 3,
      "area_name": "儋州"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430130",
      "en": "Yukon",
      "l": "10",
      "ca": 2,
      "area_name": "育空地区"
    },
    {
      "parent_code": "420130",
      "a": "2",
      "area_code": "420130010",
      "en": "Springfield",
      "l": "19",
      "ca": 3,
      "area_name": "春田"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110060",
      "en": "Yulin",
      "l": "7",
      "ca": 3,
      "area_name": "玉林"
    },
    {
      "parent_code": "420300",
      "a": "2",
      "area_code": "420300020",
      "en": "Jersey City",
      "l": "19",
      "ca": 3,
      "area_name": "泽西市"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390410",
      "en": "Malta",
      "l": "2",
      "ca": 1,
      "area_name": "马耳他"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400300",
      "en": "Gambia",
      "l": "2",
      "ca": 1,
      "area_name": "冈比亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400540",
      "en": "Madagascar",
      "l": "2",
      "ca": 1,
      "area_name": "马达加斯加"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050050",
      "en": "Foshan",
      "l": "7",
      "ca": 3,
      "area_name": "佛山"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070110",
      "en": "Richmond Hill",
      "l": "19",
      "ca": 3,
      "area_name": "列治文山"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120090",
      "en": "Qiandongnan",
      "l": "8",
      "ca": 3,
      "area_name": "黔东南"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420110",
      "en": "Hawaii",
      "l": "17",
      "ca": 2,
      "area_name": "夏威夷州"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420350",
      "en": "Ohio",
      "l": "17",
      "ca": 2,
      "area_name": "俄亥俄州"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050060",
      "en": "Huizhou",
      "l": "7",
      "ca": 3,
      "area_name": "惠州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250100",
      "en": "Weihai",
      "l": "7",
      "ca": 3,
      "area_name": "威海"
    },
    {
      "parent_code": "420130",
      "a": "2",
      "area_code": "420130020",
      "en": "Chicago",
      "l": "19",
      "ca": 3,
      "area_name": "芝加哥"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080100",
      "en": "Huangshan",
      "l": "7",
      "ca": 3,
      "area_name": "黄山"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110050",
      "en": "Liuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "柳州"
    },
    {
      "parent_code": "190",
      "a": "0",
      "area_code": "190110",
      "en": "Yanbian",
      "l": "8",
      "ca": 3,
      "area_name": "延边"
    },
    {
      "parent_code": "420300",
      "a": "2",
      "area_code": "420300030",
      "en": "Atlantic City",
      "l": "19",
      "ca": 3,
      "area_name": "大西洋城"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390420",
      "en": "Spain",
      "l": "2",
      "ca": 1,
      "area_name": "西班牙"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420360",
      "en": "Oklahoma",
      "l": "17",
      "ca": 2,
      "area_name": "俄克拉何马州"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400530",
      "en": "Lesotho",
      "l": "2",
      "ca": 1,
      "area_name": "莱索托"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070100",
      "en": "Windsor",
      "l": "19",
      "ca": 3,
      "area_name": "温莎"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050040",
      "en": "Dongguan",
      "l": "7",
      "ca": 3,
      "area_name": "东莞"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120080",
      "en": "Qianxinan",
      "l": "8",
      "ca": 3,
      "area_name": "黔西南"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420120",
      "en": "Idaho",
      "l": "17",
      "ca": 2,
      "area_name": "爱达荷州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250110",
      "en": "Weifang",
      "l": "7",
      "ca": 3,
      "area_name": "潍坊"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110040",
      "en": "Guilin",
      "l": "7",
      "ca": 3,
      "area_name": "桂林"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080110",
      "en": "Chuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "滁州"
    },
    {
      "parent_code": "420130",
      "a": "2",
      "area_code": "420130030",
      "en": "Rockford",
      "l": "19",
      "ca": 3,
      "area_name": "洛克福特"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100060",
      "en": "Baiyin",
      "l": "7",
      "ca": 3,
      "area_name": "白银"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390470",
      "en": "Cyprus",
      "l": "2",
      "ca": 1,
      "area_name": "塞浦路斯"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390230",
      "en": "Ireland",
      "l": "2",
      "ca": 1,
      "area_name": "爱尔兰"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160120",
      "en": "Heihe",
      "l": "7",
      "ca": 3,
      "area_name": "黑河"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250170",
      "en": "Heze",
      "l": "7",
      "ca": 3,
      "area_name": "菏泽"
    },
    {
      "parent_code": "430010",
      "a": "2",
      "area_code": "430010020",
      "en": "Edmonton",
      "l": "19",
      "ca": 3,
      "area_name": "埃德蒙顿"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300080",
      "en": "Shihezi",
      "l": "7",
      "ca": 3,
      "area_name": "石河子"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170160",
      "en": "Tianmen",
      "l": "7",
      "ca": 3,
      "area_name": "天门"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100070",
      "en": "Tianshui",
      "l": "7",
      "ca": 3,
      "area_name": "天水"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390240",
      "en": "Netherlands",
      "l": "2",
      "ca": 1,
      "area_name": "荷兰"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160110",
      "en": "Qitaihe",
      "l": "7",
      "ca": 3,
      "area_name": "七台河"
    },
    {
      "parent_code": "420140",
      "a": "2",
      "area_code": "420140010",
      "en": "Indianapolis",
      "l": "19",
      "ca": 3,
      "area_name": "印第安纳波利斯"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300090",
      "en": "Alar",
      "l": "7",
      "ca": 3,
      "area_name": "阿拉尔"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170150",
      "en": "Xiantao",
      "l": "7",
      "ca": 3,
      "area_name": "仙桃"
    },
    {
      "parent_code": "420150",
      "a": "2",
      "area_code": "420150040",
      "en": "Iowa City",
      "l": "19",
      "ca": 3,
      "area_name": "衣阿华城"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100040",
      "en": "Jiuquan",
      "l": "7",
      "ca": 3,
      "area_name": "酒泉"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390450",
      "en": "Slovakia",
      "l": "2",
      "ca": 1,
      "area_name": "斯洛伐克"
    },
    {
      "parent_code": "420220",
      "a": "2",
      "area_code": "420220020",
      "en": "Detroit",
      "l": "19",
      "ca": 3,
      "area_name": "底特律"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390210",
      "en": "Liechtenstein",
      "l": "2",
      "ca": 1,
      "area_name": "列支敦士登"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250150",
      "en": "Binzhou",
      "l": "7",
      "ca": 3,
      "area_name": "滨州"
    },
    {
      "parent_code": "420140",
      "a": "2",
      "area_code": "420140020",
      "en": "Fort Wayne",
      "l": "19",
      "ca": 3,
      "area_name": "韦恩堡"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160140",
      "en": "Daxing'anling",
      "l": "10",
      "ca": 3,
      "area_name": "大兴安岭"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110090",
      "en": "Laibin",
      "l": "7",
      "ca": 3,
      "area_name": "来宾"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420300",
      "en": "New Jersey",
      "l": "17",
      "ca": 2,
      "area_name": "新泽西州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250140",
      "en": "Zaozhuang",
      "l": "7",
      "ca": 3,
      "area_name": "枣庄"
    },
    {
      "parent_code": "420230",
      "a": "2",
      "area_code": "420230030",
      "en": "Duluth",
      "l": "19",
      "ca": 3,
      "area_name": "杜鲁司"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300060",
      "en": "Aksu Prefecture",
      "l": "10",
      "ca": 3,
      "area_name": "阿克苏"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430120",
      "en": "Northwest Territories",
      "l": "10",
      "ca": 2,
      "area_name": "西北地区"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430100",
      "en": "Saskatchewan",
      "l": "4",
      "ca": 2,
      "area_name": "萨省"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100050",
      "en": "Jinchang",
      "l": "7",
      "ca": 3,
      "area_name": "金昌"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390460",
      "en": "Montenegro",
      "l": "2",
      "ca": 1,
      "area_name": "黑山"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170180",
      "en": "Enshi Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "恩施州"
    },
    {
      "parent_code": "420220",
      "a": "2",
      "area_code": "420220010",
      "en": "Lansing",
      "l": "19",
      "ca": 3,
      "area_name": "兰辛"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390220",
      "en": "United Kingdom",
      "l": "2",
      "ca": 1,
      "area_name": "英国"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420320",
      "en": "New York",
      "l": "17",
      "ca": 2,
      "area_name": "纽约州"
    },
    {
      "parent_code": "250",
      "a": "0",
      "area_code": "250160",
      "en": "Liaocheng",
      "l": "7",
      "ca": 3,
      "area_name": "聊城"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160130",
      "en": "Suihua",
      "l": "7",
      "ca": 3,
      "area_name": "绥化"
    },
    {
      "parent_code": "420140",
      "a": "2",
      "area_code": "420140030",
      "en": "Bloomington",
      "l": "19",
      "ca": 3,
      "area_name": "伯明顿"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "300",
      "en": "Xinjiang",
      "l": "5",
      "ca": 2,
      "area_name": "新疆"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420310",
      "en": "New Mexico",
      "l": "17",
      "ca": 2,
      "area_name": "新墨西哥州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300070",
      "en": "Hami",
      "l": "7",
      "ca": 3,
      "area_name": "哈密"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170170",
      "en": "Shennongjia",
      "l": "11",
      "ca": 3,
      "area_name": "神农架"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150100",
      "en": "Puyang",
      "l": "7",
      "ca": 3,
      "area_name": "濮阳"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430110",
      "en": "Nunavut",
      "l": "10",
      "ca": 2,
      "area_name": "努纳武特地区"
    },
    {
      "parent_code": "110",
      "a": "0",
      "area_code": "110080",
      "en": "Chongzuo",
      "l": "7",
      "ca": 3,
      "area_name": "崇左"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390270",
      "en": "France",
      "l": "2",
      "ca": 1,
      "area_name": "法国"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390030",
      "en": "Sweden",
      "l": "2",
      "ca": 1,
      "area_name": "瑞典"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310080",
      "en": "Zhaotong",
      "l": "7",
      "ca": 3,
      "area_name": "昭通"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "310",
      "en": "Yunnan",
      "l": "4",
      "ca": 2,
      "area_name": "云南"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300280",
      "en": "Xinxing",
      "l": "7",
      "ca": 3,
      "area_name": "新星"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380220",
      "en": "Niue",
      "l": "2",
      "ca": 1,
      "area_name": "纽埃"
    },
    {
      "parent_code": "420220",
      "a": "2",
      "area_code": "420220040",
      "en": "Flint",
      "l": "19",
      "ca": 3,
      "area_name": "弗林特"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300040",
      "en": "Karamay",
      "l": "7",
      "ca": 3,
      "area_name": "克拉玛依"
    },
    {
      "parent_code": "430020",
      "a": "2",
      "area_code": "430020030",
      "en": "Burnaby",
      "l": "19",
      "ca": 3,
      "area_name": "本拿比"
    },
    {
      "parent_code": "420150",
      "a": "2",
      "area_code": "420150010",
      "en": "Des Moines",
      "l": "19",
      "ca": 3,
      "area_name": "得梅因"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170120",
      "en": "Xiaogan",
      "l": "7",
      "ca": 3,
      "area_name": "孝感"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390280",
      "en": "Monaco",
      "l": "2",
      "ca": 1,
      "area_name": "摩纳哥"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390040",
      "en": "Norway",
      "l": "2",
      "ca": 1,
      "area_name": "挪威"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310090",
      "en": "Pu'er",
      "l": "7",
      "ca": 3,
      "area_name": "普洱"
    },
    {
      "parent_code": "420160",
      "a": "2",
      "area_code": "420160040",
      "en": "Lawrence",
      "l": "19",
      "ca": 3,
      "area_name": "罗伦斯"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "320",
      "en": "Hongkong",
      "l": "6",
      "ca": 2,
      "area_name": "香港"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300050",
      "en": "Ili",
      "l": "8",
      "ca": 3,
      "area_name": "伊犁"
    },
    {
      "parent_code": "420220",
      "a": "2",
      "area_code": "420220030",
      "en": "Grand Rapids",
      "l": "19",
      "ca": 3,
      "area_name": "大溪城"
    },
    {
      "parent_code": "430020",
      "a": "2",
      "area_code": "430020020",
      "en": "Surrey",
      "l": "19",
      "ca": 3,
      "area_name": "素里"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170110",
      "en": "Huanggang",
      "l": "7",
      "ca": 3,
      "area_name": "黄冈"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390290",
      "en": "Roumania",
      "l": "2",
      "ca": 1,
      "area_name": "罗马尼亚"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390250",
      "en": "Belgium",
      "l": "2",
      "ca": 1,
      "area_name": "比利时"
    },
    {
      "parent_code": "420210",
      "a": "2",
      "area_code": "420210020",
      "en": "Worcester",
      "l": "19",
      "ca": 3,
      "area_name": "伍斯特"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310060",
      "en": "Qujing",
      "l": "7",
      "ca": 3,
      "area_name": "曲靖"
    },
    {
      "parent_code": "180",
      "a": "0",
      "area_code": "180150",
      "en": "Xiangxi",
      "l": "8",
      "ca": 3,
      "area_name": "湘西"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160100",
      "en": "Yichun",
      "l": "7",
      "ca": 3,
      "area_name": "伊春"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100080",
      "en": "Zhangye",
      "l": "7",
      "ca": 3,
      "area_name": "张掖"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "330",
      "en": "Macao",
      "l": "6",
      "ca": 2,
      "area_name": "澳门"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420500",
      "en": "Wyoming",
      "l": "17",
      "ca": 2,
      "area_name": "怀俄明州"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170140",
      "en": "Suizhou",
      "l": "7",
      "ca": 3,
      "area_name": "随州"
    },
    {
      "parent_code": "420150",
      "a": "2",
      "area_code": "420150030",
      "en": "Daven Port",
      "l": "19",
      "ca": 3,
      "area_name": "丹芬堡特"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300020",
      "en": "Urumqi",
      "l": "7",
      "ca": 3,
      "area_name": "乌鲁木齐"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300260",
      "en": "Tiemenguan",
      "l": "7",
      "ca": 3,
      "area_name": "铁门关"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390260",
      "en": "Luxembourg",
      "l": "2",
      "ca": 1,
      "area_name": "卢森堡"
    },
    {
      "parent_code": "430020",
      "a": "2",
      "area_code": "430020040",
      "en": "Richmond",
      "l": "19",
      "ca": 3,
      "area_name": "列治文"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390020",
      "en": "Finland",
      "l": "2",
      "ca": 1,
      "area_name": "芬兰"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310070",
      "en": "Baoshan",
      "l": "7",
      "ca": 3,
      "area_name": "保山"
    },
    {
      "parent_code": "430010",
      "a": "2",
      "area_code": "430010010",
      "en": "Calgary",
      "l": "19",
      "ca": 3,
      "area_name": "卡尔加里"
    },
    {
      "parent_code": "100",
      "a": "0",
      "area_code": "100090",
      "en": "Wuwei",
      "l": "7",
      "ca": 3,
      "area_name": "武威"
    },
    {
      "parent_code": "350490",
      "a": "1",
      "area_code": "340",
      "en": "Taiwan",
      "l": "4",
      "ca": 2,
      "area_name": "台湾"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "100",
      "en": "Gansu",
      "l": "4",
      "ca": 2,
      "area_name": "甘肃"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420510",
      "en": "Washington, DC",
      "l": "18",
      "ca": 2,
      "area_name": "华盛顿哥伦比亚特区"
    },
    {
      "parent_code": "420210",
      "a": "2",
      "area_code": "420210010",
      "en": "Boston",
      "l": "19",
      "ca": 3,
      "area_name": "波士顿"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300030",
      "en": "Kashi Prefecture",
      "l": "10",
      "ca": 3,
      "area_name": "喀什"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300270",
      "en": "Huyanghe",
      "l": "7",
      "ca": 3,
      "area_name": "胡杨河"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170130",
      "en": "Xianning",
      "l": "7",
      "ca": 3,
      "area_name": "咸宁"
    },
    {
      "parent_code": "420150",
      "a": "2",
      "area_code": "420150020",
      "en": "Cedar Rapids",
      "l": "19",
      "ca": 3,
      "area_name": "锡达拉皮兹"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370100",
      "en": "Brazil",
      "l": "2",
      "ca": 1,
      "area_name": "巴西"
    },
    {
      "parent_code": "420240",
      "a": "2",
      "area_code": "420240010",
      "en": "Jackson",
      "l": "19",
      "ca": 3,
      "area_name": "杰克逊"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220110",
      "en": "Hinggan",
      "l": "9",
      "ca": 3,
      "area_name": "兴安盟"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310160",
      "en": "Nujiang",
      "l": "8",
      "ca": 3,
      "area_name": "怒江"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "350",
      "en": "Asia",
      "l": "1",
      "ca": 0,
      "area_name": "亚洲"
    },
    {
      "parent_code": "420400",
      "a": "2",
      "area_code": "420400010",
      "en": "Sioux Falls",
      "l": "19",
      "ca": 3,
      "area_name": "苏瀑市"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380140",
      "en": "The Republic of Fiji",
      "l": "2",
      "ca": 1,
      "area_name": "斐济"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "110",
      "en": "Guangxi",
      "l": "5",
      "ca": 2,
      "area_name": "广西"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160090",
      "en": "Shuangyashan",
      "l": "7",
      "ca": 3,
      "area_name": "双鸭山"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220120",
      "en": "Xilingol",
      "l": "9",
      "ca": 3,
      "area_name": "锡盟"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060110",
      "en": "Xuzhou",
      "l": "7",
      "ca": 3,
      "area_name": "徐州"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300120",
      "en": "Changji Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "昌吉"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150030",
      "en": "Kaifeng",
      "l": "7",
      "ca": 3,
      "area_name": "开封"
    },
    {
      "parent_code": "420240",
      "a": "2",
      "area_code": "420240020",
      "en": "Meridian",
      "l": "19",
      "ca": 3,
      "area_name": "密烈地安"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150050",
      "en": "Shangqiu",
      "l": "7",
      "ca": 3,
      "area_name": "商丘"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400070",
      "en": "Morocco",
      "l": "2",
      "ca": 1,
      "area_name": "摩洛哥"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130200",
      "en": "Ledong Co.",
      "l": "7",
      "ca": 3,
      "area_name": "乐东县"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220100",
      "en": "Ulanqab",
      "l": "7",
      "ca": 3,
      "area_name": "乌兰察布"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310170",
      "en": "Diqing",
      "l": "8",
      "ca": 3,
      "area_name": "迪庆"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "360",
      "en": "NorthAmerica",
      "l": "1",
      "ca": 0,
      "area_name": "北美洲"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "120",
      "en": "Guizhou",
      "l": "4",
      "ca": 2,
      "area_name": "贵州"
    },
    {
      "parent_code": "420400",
      "a": "2",
      "area_code": "420400020",
      "en": "Rapid City",
      "l": "19",
      "ca": 3,
      "area_name": "拉皮特城"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380130",
      "en": "Samoa",
      "l": "2",
      "ca": 1,
      "area_name": "萨摩亚"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160080",
      "en": "Hegang",
      "l": "7",
      "ca": 3,
      "area_name": "鹤岗"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300130",
      "en": "Altay Prefecture",
      "l": "10",
      "ca": 3,
      "area_name": "阿勒泰"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390010",
      "en": "Columbia",
      "l": "19",
      "ca": 3,
      "area_name": "哥伦比亚"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150040",
      "en": "Luoyang",
      "l": "7",
      "ca": 3,
      "area_name": "洛阳"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060100",
      "en": "Wuxi",
      "l": "7",
      "ca": 3,
      "area_name": "无锡"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390170",
      "en": "Hungary",
      "l": "2",
      "ca": 1,
      "area_name": "匈牙利"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400060",
      "en": "Algeria",
      "l": "2",
      "ca": 1,
      "area_name": "阿尔及利亚"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150060",
      "en": "Anyang",
      "l": "7",
      "ca": 3,
      "area_name": "安阳"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130210",
      "en": "Lingshui Co.",
      "l": "7",
      "ca": 3,
      "area_name": "陵水县"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370120",
      "en": "Argentina",
      "l": "2",
      "ca": 1,
      "area_name": "阿根廷"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310140",
      "en": "Dehong",
      "l": "8",
      "ca": 3,
      "area_name": "德宏"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "370",
      "en": "SouthAmerica",
      "l": "1",
      "ca": 0,
      "area_name": "南美洲"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "130",
      "en": "Hainan",
      "l": "4",
      "ca": 2,
      "area_name": "海南"
    },
    {
      "parent_code": "420250",
      "a": "2",
      "area_code": "420250040",
      "en": "Rolla",
      "l": "19",
      "ca": 3,
      "area_name": "洛拉"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380160",
      "en": "Cook Islands",
      "l": "2",
      "ca": 1,
      "area_name": "库克群岛"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300100",
      "en": "Wujiaqu",
      "l": "7",
      "ca": 3,
      "area_name": "五家渠"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390180",
      "en": "Germany",
      "l": "2",
      "ca": 1,
      "area_name": "德国"
    },
    {
      "parent_code": "430020",
      "a": "2",
      "area_code": "430020010",
      "en": "Vancouver",
      "l": "19",
      "ca": 3,
      "area_name": "温哥华"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370110",
      "en": "Chile",
      "l": "2",
      "ca": 1,
      "area_name": "智利"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400050",
      "en": "Tunisia",
      "l": "2",
      "ca": 1,
      "area_name": "突尼斯"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400290",
      "en": "Senegal",
      "l": "2",
      "ca": 1,
      "area_name": "塞内加尔"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150070",
      "en": "Pingdingshan",
      "l": "7",
      "ca": 3,
      "area_name": "平顶山"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310150",
      "en": "Chuxiong Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "楚雄州"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "380",
      "en": "Oceania",
      "l": "1",
      "ca": 0,
      "area_name": "大洋洲"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "140",
      "en": "Hebei",
      "l": "4",
      "ca": 2,
      "area_name": "河北"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140020",
      "en": "Shijiazhuang",
      "l": "7",
      "ca": 3,
      "area_name": "石家庄"
    },
    {
      "parent_code": "420250",
      "a": "2",
      "area_code": "420250030",
      "en": "Kansas City",
      "l": "19",
      "ca": 3,
      "area_name": "堪萨斯城"
    },
    {
      "parent_code": "380",
      "a": "2",
      "area_code": "380150",
      "en": "Tonga",
      "l": "2",
      "ca": 1,
      "area_name": "汤加"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090010",
      "en": "Montreal",
      "l": "19",
      "ca": 3,
      "area_name": "蒙特利尔"
    },
    {
      "parent_code": "220",
      "a": "0",
      "area_code": "220130",
      "en": "Alxa",
      "l": "9",
      "ca": 3,
      "area_name": "阿拉善盟"
    },
    {
      "parent_code": "390",
      "a": "2",
      "area_code": "390190",
      "en": "Austria",
      "l": "2",
      "ca": 1,
      "area_name": "奥地利"
    },
    {
      "parent_code": "300",
      "a": "0",
      "area_code": "300110",
      "en": "Tumxuk",
      "l": "7",
      "ca": 3,
      "area_name": "图木舒克"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210110",
      "en": "Fuxin",
      "l": "7",
      "ca": 3,
      "area_name": "阜新"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370140",
      "en": "Paraguay",
      "l": "2",
      "ca": 1,
      "area_name": "巴拉圭"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170090",
      "en": "Huangshi",
      "l": "7",
      "ca": 3,
      "area_name": "黄石"
    },
    {
      "parent_code": "",
      "a": "2",
      "area_code": "390",
      "en": "Europe",
      "l": "1",
      "ca": 0,
      "area_name": "欧洲"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "150",
      "en": "Henan",
      "l": "4",
      "ca": 2,
      "area_name": "河南"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160040",
      "en": "Jiamusi",
      "l": "7",
      "ca": 3,
      "area_name": "佳木斯"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310120",
      "en": "Wenshan Prefecture",
      "l": "8",
      "ca": 3,
      "area_name": "文山州"
    },
    {
      "parent_code": "420230",
      "a": "2",
      "area_code": "420230010",
      "en": "Saint Paul",
      "l": "19",
      "ca": 3,
      "area_name": "圣保罗"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090020",
      "en": "Quebec City",
      "l": "19",
      "ca": 3,
      "area_name": "魁北克城"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390040",
      "en": "Aiken",
      "l": "19",
      "ca": 3,
      "area_name": "阿干"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280210",
      "en": "Ganzi",
      "l": "8",
      "ca": 3,
      "area_name": "甘孜"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210100",
      "en": "Yingkou",
      "l": "7",
      "ca": 3,
      "area_name": "营口"
    },
    {
      "parent_code": "420410",
      "a": "2",
      "area_code": "420410010",
      "en": "Nemphis",
      "l": "19",
      "ca": 3,
      "area_name": "那什维尔"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210120",
      "en": "Liaoyang",
      "l": "7",
      "ca": 3,
      "area_name": "辽阳"
    },
    {
      "parent_code": "170",
      "a": "0",
      "area_code": "170080",
      "en": "Jingzhou",
      "l": "7",
      "ca": 3,
      "area_name": "荆州"
    },
    {
      "parent_code": "370",
      "a": "2",
      "area_code": "370130",
      "en": "Uruguay",
      "l": "2",
      "ca": 1,
      "area_name": "乌拉圭"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "160",
      "en": "Heilongjiang",
      "l": "4",
      "ca": 2,
      "area_name": "黑龙江"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310130",
      "en": "Xishuangbanna",
      "l": "8",
      "ca": 3,
      "area_name": "西双版纳"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160030",
      "en": "Daqing",
      "l": "7",
      "ca": 3,
      "area_name": "大庆"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360100",
      "en": "Nicaragua",
      "l": "2",
      "ca": 1,
      "area_name": "尼加拉瓜"
    },
    {
      "parent_code": "420230",
      "a": "2",
      "area_code": "420230020",
      "en": "Minneapolis",
      "l": "19",
      "ca": 3,
      "area_name": "明尼阿波利斯"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090030",
      "en": "Laval",
      "l": "19",
      "ca": 3,
      "area_name": "拉瓦尔"
    },
    {
      "parent_code": "420410",
      "a": "2",
      "area_code": "420410020",
      "en": "Memphis",
      "l": "19",
      "ca": 3,
      "area_name": "孟斐斯"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390050",
      "en": "Myrtle Beach",
      "l": "19",
      "ca": 3,
      "area_name": "美特尔沙滨"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210130",
      "en": "Panjin",
      "l": "7",
      "ca": 3,
      "area_name": "盘锦"
    },
    {
      "parent_code": "430030",
      "a": "2",
      "area_code": "430030010",
      "en": "Winnipeg",
      "l": "19",
      "ca": 3,
      "area_name": "温尼伯"
    },
    {
      "parent_code": "420380",
      "a": "2",
      "area_code": "420380010",
      "en": "Harrisburg",
      "l": "19",
      "ca": 3,
      "area_name": "哈里斯堡"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "170",
      "en": "Hubei",
      "l": "4",
      "ca": 2,
      "area_name": "湖北"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310100",
      "en": "Lincang",
      "l": "7",
      "ca": 3,
      "area_name": "临沧"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160070",
      "en": "Jixi",
      "l": "7",
      "ca": 3,
      "area_name": "鸡西"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360110",
      "en": "Costa Rica",
      "l": "2",
      "ca": 1,
      "area_name": "哥斯达黎加"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090040",
      "en": "Gatineau",
      "l": "19",
      "ca": 3,
      "area_name": "加蒂诺"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390020",
      "en": "North Charleston",
      "l": "19",
      "ca": 3,
      "area_name": "查理斯敦"
    },
    {
      "parent_code": "420410",
      "a": "2",
      "area_code": "420410030",
      "en": "Knoxville",
      "l": "19",
      "ca": 3,
      "area_name": "诺克斯维尔"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210140",
      "en": "Tieling",
      "l": "7",
      "ca": 3,
      "area_name": "铁岭"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "180",
      "en": "Hunan",
      "l": "4",
      "ca": 2,
      "area_name": "湖南"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160050",
      "en": "Mudanjiang",
      "l": "7",
      "ca": 3,
      "area_name": "牡丹江"
    },
    {
      "parent_code": "310",
      "a": "0",
      "area_code": "310110",
      "en": "Honghe",
      "l": "8",
      "ca": 3,
      "area_name": "红河"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200100",
      "en": "Pingxiang",
      "l": "7",
      "ca": 3,
      "area_name": "萍乡"
    },
    {
      "parent_code": "160",
      "a": "0",
      "area_code": "160060",
      "en": "Qiqihar",
      "l": "7",
      "ca": 3,
      "area_name": "齐齐哈尔"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360120",
      "en": "Panama",
      "l": "2",
      "ca": 1,
      "area_name": "巴拿马"
    },
    {
      "parent_code": "420390",
      "a": "2",
      "area_code": "420390030",
      "en": "Greenville",
      "l": "19",
      "ca": 3,
      "area_name": "格林威尔"
    },
    {
      "parent_code": "420410",
      "a": "2",
      "area_code": "420410040",
      "en": "Oak Ridge",
      "l": "19",
      "ca": 3,
      "area_name": "橡树岭"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090050",
      "en": "Longueuil",
      "l": "19",
      "ca": 3,
      "area_name": "朗基尔"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150020",
      "en": "Zhengzhou",
      "l": "7",
      "ca": 3,
      "area_name": "郑州"
    },
    {
      "parent_code": "210",
      "a": "0",
      "area_code": "210150",
      "en": "Chaoyang",
      "l": "7",
      "ca": 3,
      "area_name": "朝阳"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420090",
      "en": "Florida",
      "l": "17",
      "ca": 2,
      "area_name": "佛罗里达州"
    },
    {
      "parent_code": "350490",
      "a": "0",
      "area_code": "190",
      "en": "Jilin",
      "l": "4",
      "ca": 2,
      "area_name": "吉林"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350330",
      "en": "Jordan",
      "l": "2",
      "ca": 1,
      "area_name": "约旦"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140080",
      "en": "Tangshan",
      "l": "7",
      "ca": 3,
      "area_name": "唐山"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050150",
      "en": "Jiangmen",
      "l": "7",
      "ca": 3,
      "area_name": "江门"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400240",
      "en": "Gabon",
      "l": "2",
      "ca": 1,
      "area_name": "加蓬"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290060",
      "en": "Qamdo",
      "l": "7",
      "ca": 3,
      "area_name": "昌都"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400480",
      "en": "Mozambique",
      "l": "2",
      "ca": 1,
      "area_name": "莫桑比克"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200110",
      "en": "Xinyu",
      "l": "7",
      "ca": 3,
      "area_name": "新余"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080120",
      "en": "Fuyang",
      "l": "7",
      "ca": 3,
      "area_name": "阜阳"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360130",
      "en": "Bahamas",
      "l": "2",
      "ca": 1,
      "area_name": "巴哈马"
    },
    {
      "parent_code": "420260",
      "a": "2",
      "area_code": "420260020",
      "en": "Billings",
      "l": "19",
      "ca": 3,
      "area_name": "比林斯"
    },
    {
      "parent_code": "430090",
      "a": "2",
      "area_code": "430090060",
      "en": "Sherbrooke",
      "l": "19",
      "ca": 3,
      "area_name": "舍布鲁克"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130040",
      "en": "Sansha",
      "l": "7",
      "ca": 3,
      "area_name": "三沙"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050140",
      "en": "Zhuhai",
      "l": "7",
      "ca": 3,
      "area_name": "珠海"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350340",
      "en": "Lebanon",
      "l": "2",
      "ca": 1,
      "area_name": "黎巴嫩"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360150",
      "en": "Jamaica",
      "l": "2",
      "ca": 1,
      "area_name": "牙买加"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140090",
      "en": "Zhangjiakou",
      "l": "7",
      "ca": 3,
      "area_name": "张家口"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350100",
      "en": "Burma",
      "l": "2",
      "ca": 1,
      "area_name": "缅甸"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290070",
      "en": "Nagqu",
      "l": "7",
      "ca": 3,
      "area_name": "那曲"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400230",
      "en": "Equatorial Guinea",
      "l": "2",
      "ca": 1,
      "area_name": "赤道几内亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400470",
      "en": "Malawi",
      "l": "2",
      "ca": 1,
      "area_name": "马拉维"
    },
    {
      "parent_code": "200",
      "a": "0",
      "area_code": "200120",
      "en": "Yingtan",
      "l": "7",
      "ca": 3,
      "area_name": "鹰潭"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080130",
      "en": "Suzhou",
      "l": "7",
      "ca": 3,
      "area_name": "宿州"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290080",
      "en": "Ngari",
      "l": "10",
      "ca": 3,
      "area_name": "阿里"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360140",
      "en": "Cuba",
      "l": "2",
      "ca": 1,
      "area_name": "古巴"
    },
    {
      "parent_code": "420260",
      "a": "2",
      "area_code": "420260010",
      "en": "Heldna",
      "l": "19",
      "ca": 3,
      "area_name": "海伦娜"
    },
    {
      "parent_code": "420110",
      "a": "2",
      "area_code": "420110010",
      "en": "Honolulu",
      "l": "19",
      "ca": 3,
      "area_name": "檀香山"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350350",
      "en": "Israel",
      "l": "2",
      "ca": 1,
      "area_name": "以色列"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360160",
      "en": "Haiti",
      "l": "2",
      "ca": 1,
      "area_name": "海地"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050130",
      "en": "Zhongshan",
      "l": "7",
      "ca": 3,
      "area_name": "中山"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350110",
      "en": "Thailand",
      "l": "2",
      "ca": 1,
      "area_name": "泰国"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400220",
      "en": "Cameroon",
      "l": "2",
      "ca": 1,
      "area_name": "喀麦隆"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400460",
      "en": "Zimbabwe",
      "l": "2",
      "ca": 1,
      "area_name": "津巴布韦"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070100",
      "en": "Quzhou",
      "l": "7",
      "ca": 3,
      "area_name": "衢州"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080140",
      "en": "Lu'an",
      "l": "7",
      "ca": 3,
      "area_name": "六安"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350360",
      "en": "Palestine",
      "l": "2",
      "ca": 1,
      "area_name": "巴勒斯坦"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060170",
      "en": "Suqian",
      "l": "7",
      "ca": 3,
      "area_name": "宿迁"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280230",
      "en": "Liangshan",
      "l": "8",
      "ca": 3,
      "area_name": "凉山"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130060",
      "en": "Wenchang",
      "l": "7",
      "ca": 3,
      "area_name": "文昌"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070110",
      "en": "Lishui",
      "l": "7",
      "ca": 3,
      "area_name": "丽水"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350120",
      "en": "Malaysia",
      "l": "2",
      "ca": 1,
      "area_name": "马来西亚"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400210",
      "en": "Central Africa",
      "l": "2",
      "ca": 1,
      "area_name": "中非"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360170",
      "en": "Dominican Republic",
      "l": "2",
      "ca": 1,
      "area_name": "多米尼加"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400450",
      "en": "Angola",
      "l": "2",
      "ca": 1,
      "area_name": "安哥拉"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050120",
      "en": "Zhaoqing",
      "l": "7",
      "ca": 3,
      "area_name": "肇庆"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080150",
      "en": "Bozhou",
      "l": "7",
      "ca": 3,
      "area_name": "亳州"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350370",
      "en": "Saudi Arabia",
      "l": "2",
      "ca": 1,
      "area_name": "沙特阿拉伯"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280220",
      "en": "Aba",
      "l": "8",
      "ca": 3,
      "area_name": "阿坝"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060160",
      "en": "Taizhou",
      "l": "7",
      "ca": 3,
      "area_name": "泰州"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130070",
      "en": "Qionghai",
      "l": "7",
      "ca": 3,
      "area_name": "琼海"
    },
    {
      "parent_code": "070",
      "a": "0",
      "area_code": "070120",
      "en": "Zhoushan",
      "l": "7",
      "ca": 3,
      "area_name": "舟山"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150080",
      "en": "Xinxiang",
      "l": "7",
      "ca": 3,
      "area_name": "新乡"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420290",
      "en": "New Hampshire",
      "l": "17",
      "ca": 2,
      "area_name": "新罕布什尔州"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350130",
      "en": "Brunei",
      "l": "2",
      "ca": 1,
      "area_name": "文莱"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290020",
      "en": "Lhasa",
      "l": "7",
      "ca": 3,
      "area_name": "拉萨"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360180",
      "en": "Antigua and Barbuda",
      "l": "2",
      "ca": 1,
      "area_name": "安提瓜和巴布达"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420050",
      "en": "California",
      "l": "17",
      "ca": 2,
      "area_name": "加州"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120030",
      "en": "Zunyi",
      "l": "7",
      "ca": 3,
      "area_name": "遵义"
    },
    {
      "parent_code": "420100",
      "a": "2",
      "area_code": "420100030",
      "en": "Macon",
      "l": "19",
      "ca": 3,
      "area_name": "梅肯"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400040",
      "en": "Sultan",
      "l": "2",
      "ca": 1,
      "area_name": "苏丹"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140040",
      "en": "Chengde",
      "l": "7",
      "ca": 3,
      "area_name": "承德"
    },
    {
      "parent_code": "050",
      "a": "0",
      "area_code": "050110",
      "en": "Zhanjiang",
      "l": "7",
      "ca": 3,
      "area_name": "湛江"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140030",
      "en": "Baoding",
      "l": "7",
      "ca": 3,
      "area_name": "保定"
    },
    {
      "parent_code": "420250",
      "a": "2",
      "area_code": "420250020",
      "en": "Saint Louis",
      "l": "19",
      "ca": 3,
      "area_name": "圣路易斯"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350380",
      "en": "Bahrain",
      "l": "2",
      "ca": 1,
      "area_name": "巴林"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350140",
      "en": "Singapore",
      "l": "2",
      "ca": 1,
      "area_name": "新加坡"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080160",
      "en": "Chizhou",
      "l": "7",
      "ca": 3,
      "area_name": "池州"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060150",
      "en": "Yancheng",
      "l": "7",
      "ca": 3,
      "area_name": "盐城"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070090",
      "en": "Kitchener",
      "l": "19",
      "ca": 3,
      "area_name": "基奇纳"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280050",
      "en": "Mianyang",
      "l": "7",
      "ca": 3,
      "area_name": "绵阳"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400270",
      "en": "Mauritania",
      "l": "2",
      "ca": 1,
      "area_name": "毛里塔尼亚"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070080",
      "en": "Vaughan",
      "l": "19",
      "ca": 3,
      "area_name": "旺市"
    },
    {
      "parent_code": "150",
      "a": "0",
      "area_code": "150090",
      "en": "Jiaozuo",
      "l": "7",
      "ca": 3,
      "area_name": "焦作"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290030",
      "en": "Xigaze",
      "l": "7",
      "ca": 3,
      "area_name": "日喀则"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420060",
      "en": "Colorado",
      "l": "17",
      "ca": 2,
      "area_name": "科罗拉多州"
    },
    {
      "parent_code": "120",
      "a": "0",
      "area_code": "120020",
      "en": "Guiyang",
      "l": "7",
      "ca": 3,
      "area_name": "贵阳"
    },
    {
      "parent_code": "420100",
      "a": "2",
      "area_code": "420100020",
      "en": "Columbus",
      "l": "19",
      "ca": 3,
      "area_name": "哥伦布"
    },
    {
      "parent_code": "360",
      "a": "2",
      "area_code": "360190",
      "en": "Saint Kitts and Nevis",
      "l": "2",
      "ca": 1,
      "area_name": "圣基茨和尼维斯"
    },
    {
      "en": "ALL CONTINENTS",
      "area_name": "全部大洲"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140050",
      "en": "Handan",
      "l": "7",
      "ca": 3,
      "area_name": "邯郸"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400030",
      "en": "Libya",
      "l": "2",
      "ca": 1,
      "area_name": "利比亚"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350390",
      "en": "Qatar",
      "l": "2",
      "ca": 1,
      "area_name": "卡塔尔"
    },
    {
      "parent_code": "420250",
      "a": "2",
      "area_code": "420250010",
      "en": "Jefferson City",
      "l": "19",
      "ca": 3,
      "area_name": "杰佛逊城"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350150",
      "en": "Indonesia",
      "l": "2",
      "ca": 1,
      "area_name": "印度尼西亚"
    },
    {
      "parent_code": "080",
      "a": "0",
      "area_code": "080170",
      "en": "Xuancheng",
      "l": "7",
      "ca": 3,
      "area_name": "宣城"
    },
    {
      "parent_code": "360020",
      "a": "2",
      "area_code": "430090",
      "en": "Québec",
      "l": "4",
      "ca": 2,
      "area_name": "魁北克省"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060140",
      "en": "Huai'an",
      "l": "7",
      "ca": 3,
      "area_name": "淮安"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280040",
      "en": "Luzhou",
      "l": "7",
      "ca": 3,
      "area_name": "泸州"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070070",
      "en": "Markham",
      "l": "19",
      "ca": 3,
      "area_name": "万锦"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420070",
      "en": "Connecticut",
      "l": "17",
      "ca": 2,
      "area_name": "康涅狄格州"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400020",
      "en": "Egypt",
      "l": "2",
      "ca": 1,
      "area_name": "埃及"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140060",
      "en": "Langfang",
      "l": "7",
      "ca": 3,
      "area_name": "廊坊"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400260",
      "en": "Sao Tome and Principe",
      "l": "2",
      "ca": 1,
      "area_name": "圣普"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290040",
      "en": "Nyingchi",
      "l": "7",
      "ca": 3,
      "area_name": "林芝"
    },
    {
      "parent_code": "430060",
      "a": "2",
      "area_code": "430060030",
      "en": "Halifax",
      "l": "19",
      "ca": 3,
      "area_name": "哈利法克斯"
    },
    {
      "parent_code": "420100",
      "a": "2",
      "area_code": "420100010",
      "en": "Atlanta",
      "l": "19",
      "ca": 3,
      "area_name": "亚特兰大"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350160",
      "en": "East Timor",
      "l": "2",
      "ca": 1,
      "area_name": "东帝汶"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060130",
      "en": "Zhenjiang",
      "l": "7",
      "ca": 3,
      "area_name": "镇江"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280030",
      "en": "Leshan",
      "l": "7",
      "ca": 3,
      "area_name": "乐山"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400490",
      "en": "Botswana",
      "l": "2",
      "ca": 1,
      "area_name": "博茨瓦纳"
    },
    {
      "parent_code": "430070",
      "a": "2",
      "area_code": "430070060",
      "en": "London",
      "l": "19",
      "ca": 3,
      "area_name": "伦敦"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130020",
      "en": "Haikou",
      "l": "7",
      "ca": 3,
      "area_name": "海口"
    },
    {
      "parent_code": "360030",
      "a": "2",
      "area_code": "420080",
      "en": "Delaware",
      "l": "17",
      "ca": 2,
      "area_name": "特拉华州"
    },
    {
      "parent_code": "140",
      "a": "0",
      "area_code": "140070",
      "en": "Qinhuangdao",
      "l": "7",
      "ca": 3,
      "area_name": "秦皇岛"
    },
    {
      "parent_code": "290",
      "a": "0",
      "area_code": "290050",
      "en": "Shannan",
      "l": "7",
      "ca": 3,
      "area_name": "山南"
    },
    {
      "parent_code": "400",
      "a": "2",
      "area_code": "400250",
      "en": "The Republic of the Congo",
      "l": "2",
      "ca": 1,
      "area_name": "刚果(布)"
    },
    {
      "parent_code": "350",
      "a": "2",
      "area_code": "350170",
      "en": "Nepal",
      "l": "2",
      "ca": 1,
      "area_name": "尼泊尔"
    },
    {
      "parent_code": "280",
      "a": "0",
      "area_code": "280020",
      "en": "Chengdu",
      "l": "7",
      "ca": 3,
      "area_name": "成都"
    },
    {
      "parent_code": "060",
      "a": "0",
      "area_code": "060120",
      "en": "Yangzhou",
      "l": "7",
      "ca": 3,
      "area_name": "扬州"
    },
    {
      "parent_code": "420260",
      "a": "2",
      "area_code": "420260030",
      "en": "Missoula",
      "l": "19",
      "ca": 3,
      "area_name": "密苏拉"
    },
    {
      "parent_code": "130",
      "a": "0",
      "area_code": "130030",
      "en": "Sanya",
      "l": "7",
      "ca": 3,
      "area_name": "三亚"
    }
  ]
  return countyList;
}

function getStreetList() {
  let streetList = [
    {
      "parent_code": "070080",
      "a": "0",
      "area_code": "070080010",
      "en": "Wuxing",
      "l": "12",
      "ca": 4,
      "area_name": "吴兴区"
    },
    {
      "parent_code": "050050",
      "a": "0",
      "area_code": "050050040",
      "en": "Sanshui",
      "l": "12",
      "ca": 4,
      "area_name": "三水区"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050060",
      "en": "Suifenhe",
      "l": "15",
      "ca": 4,
      "area_name": "绥芬河"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020090",
      "en": "Gaocheng",
      "l": "12",
      "ca": 4,
      "area_name": "藁城区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030030",
      "en": "Yixiu",
      "l": "12",
      "ca": 4,
      "area_name": "宜秀区"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080060",
      "en": "Gerze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "改则县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020030",
      "en": "Xincheng",
      "l": "12",
      "ca": 4,
      "area_name": "新城区"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110050",
      "en": "Debao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德保县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040090",
      "en": "Quanzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "全州县"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120010",
      "en": "Aihui",
      "l": "12",
      "ca": 4,
      "area_name": "爱辉区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030050",
      "en": "Yongji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永吉县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080030",
      "en": "Guiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桂阳县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040230",
      "en": "Qingxi",
      "l": "14",
      "ca": 4,
      "area_name": "清溪镇"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120070",
      "en": "Yingshang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "颍上县"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210030",
      "en": "Longchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙川县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070010",
      "en": "Pingshan",
      "l": "12",
      "ca": 4,
      "area_name": "平山区"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110060",
      "en": "Tuquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "突泉县"
    },
    {
      "parent_code": "050050",
      "a": "0",
      "area_code": "050050050",
      "en": "Gaoming",
      "l": "12",
      "ca": 4,
      "area_name": "高明区"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050050",
      "en": "Linkou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "林口县"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030040",
      "en": "Huaining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "怀宁县"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080070",
      "en": "Coqen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "措勤县"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020010",
      "en": "Yongning",
      "l": "12",
      "ca": 4,
      "area_name": "邕宁区"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020040",
      "en": "Saihan",
      "l": "12",
      "ca": 4,
      "area_name": "赛罕区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080100",
      "en": "Manzhouli",
      "l": "15",
      "ca": 4,
      "area_name": "满洲里"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110060",
      "en": "Napo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "那坡县"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210020",
      "en": "Zijin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "紫金县"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030040",
      "en": "Fengman",
      "l": "12",
      "ca": 4,
      "area_name": "丰满区"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040080",
      "en": "Lingchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵川县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040220",
      "en": "Houjie",
      "l": "14",
      "ca": 4,
      "area_name": "厚街镇"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120060",
      "en": "Funan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阜南县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080040",
      "en": "Yizhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜章县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030100",
      "en": "Meitan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "湄潭县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020090",
      "en": "Jiyang",
      "l": "12",
      "ca": 4,
      "area_name": "济阳区"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110050",
      "en": "Jalaid Banner",
      "l": "16",
      "ca": 4,
      "area_name": "扎赉特旗"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050080",
      "en": "Ning'an",
      "l": "15",
      "ca": 4,
      "area_name": "宁安"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150010",
      "en": "Jishou",
      "l": "15",
      "ca": 4,
      "area_name": "吉首"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110030",
      "en": "Tiandong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "田东县"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030050",
      "en": "Qianshan",
      "l": "15",
      "ca": 4,
      "area_name": "潜山"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040210",
      "en": "Xiegang",
      "l": "14",
      "ca": 4,
      "area_name": "谢岗镇"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060100",
      "en": "Junan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "莒南县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170010",
      "en": "Wancheng",
      "l": "12",
      "ca": 4,
      "area_name": "宛城区"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080040",
      "en": "Rutog Co.",
      "l": "14",
      "ca": 4,
      "area_name": "日土县"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020020",
      "en": "Qingxiu",
      "l": "12",
      "ca": 4,
      "area_name": "青秀区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080110",
      "en": "Yakeshi",
      "l": "15",
      "ca": 4,
      "area_name": "牙克石"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120030",
      "en": "Xunke Co.",
      "l": "14",
      "ca": 4,
      "area_name": "逊克县"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030070",
      "en": "Huadian",
      "l": "15",
      "ca": 4,
      "area_name": "桦甸"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020010",
      "en": "Huimin",
      "l": "12",
      "ca": 4,
      "area_name": "回民区"
    },
    {
      "parent_code": "300040",
      "a": "0",
      "area_code": "300040040",
      "en": "Orku",
      "l": "12",
      "ca": 4,
      "area_name": "乌尔禾区"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040090",
      "en": "Ongniud Banner",
      "l": "16",
      "ca": 4,
      "area_name": "翁牛特旗"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070010",
      "en": "Qinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "秦州区"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080050",
      "en": "Yongxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永兴县"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120010",
      "en": "Duanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "端州区"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030010",
      "en": "Weibin",
      "l": "12",
      "ca": 4,
      "area_name": "渭滨区"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210050",
      "en": "Peace Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和平县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070030",
      "en": "Mingshan",
      "l": "12",
      "ca": 4,
      "area_name": "明山区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030110",
      "en": "Yuqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "余庆县"
    },
    {
      "parent_code": "240050",
      "a": "0",
      "area_code": "240050020",
      "en": "Qilian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "祁连县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080120",
      "en": "Zhalantun",
      "l": "15",
      "ca": 4,
      "area_name": "扎兰屯"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020080",
      "en": "Pingyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平阴县"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050070",
      "en": "Hailin",
      "l": "15",
      "ca": 4,
      "area_name": "海林"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020080",
      "en": "Xinji",
      "l": "15",
      "ca": 4,
      "area_name": "辛集"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110040",
      "en": "Horqin Right Middle Banner",
      "l": "16",
      "ca": 4,
      "area_name": "科右中旗"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110040",
      "en": "Pingguo",
      "l": "15",
      "ca": 4,
      "area_name": "平果市"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030060",
      "en": "Taihu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "太湖县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040200",
      "en": "Tangxia",
      "l": "14",
      "ca": 4,
      "area_name": "塘厦镇"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020200",
      "en": "Yanshou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "延寿县"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080050",
      "en": "Ge'Gyai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "革吉县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060110",
      "en": "Mengyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒙阴县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170020",
      "en": "Wolong",
      "l": "12",
      "ca": 4,
      "area_name": "卧龙区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030060",
      "en": "Jiaohe",
      "l": "15",
      "ca": 4,
      "area_name": "蛟河"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080060",
      "en": "Jiahe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉禾县"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120020",
      "en": "Nenjiang",
      "l": "15",
      "ca": 4,
      "area_name": "嫩江市"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020030",
      "en": "Xingning",
      "l": "12",
      "ca": 4,
      "area_name": "兴宁区"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020020",
      "en": "Yuquan",
      "l": "12",
      "ca": 4,
      "area_name": "玉泉区"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070020",
      "en": "Maiji",
      "l": "12",
      "ca": 4,
      "area_name": "麦积区"
    },
    {
      "parent_code": "300040",
      "a": "0",
      "area_code": "300040030",
      "en": "Baijiantan",
      "l": "12",
      "ca": 4,
      "area_name": "白碱滩区"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120080",
      "en": "Jieshou",
      "l": "15",
      "ca": 4,
      "area_name": "界首"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120020",
      "en": "Dinghu",
      "l": "12",
      "ca": 4,
      "area_name": "鼎湖区"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220130",
      "en": "Hongyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "红原县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100010",
      "en": "Tunxi",
      "l": "12",
      "ca": 4,
      "area_name": "屯溪区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030120",
      "en": "Xishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "习水县"
    },
    {
      "parent_code": "240050",
      "a": "0",
      "area_code": "240050010",
      "en": "Menyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "门源县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070020",
      "en": "Xihu",
      "l": "12",
      "ca": 4,
      "area_name": "溪湖区"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210040",
      "en": "Lian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "连平县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010100",
      "en": "Yongchuan",
      "l": "12",
      "ca": 4,
      "area_name": "永川区"
    },
    {
      "parent_code": "240050",
      "a": "0",
      "area_code": "240050040",
      "en": "Gangcha Co.",
      "l": "14",
      "ca": 4,
      "area_name": "刚察县"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050020",
      "en": "Yangming",
      "l": "12",
      "ca": 4,
      "area_name": "阳明区"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110030",
      "en": "Horqin Right Front Banner",
      "l": "16",
      "ca": 4,
      "area_name": "科右前旗"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130060",
      "en": "Qinghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青河县"
    },
    {
      "parent_code": "100090",
      "a": "0",
      "area_code": "100090030",
      "en": "Gulang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "古浪县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020070",
      "en": "Togtoh Co.",
      "l": "14",
      "ca": 4,
      "area_name": "托克托县"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110010",
      "en": "Youjiang",
      "l": "12",
      "ca": 4,
      "area_name": "右江区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020050",
      "en": "Yuhua",
      "l": "12",
      "ca": 4,
      "area_name": "裕华区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030070",
      "en": "Susong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宿松县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060120",
      "en": "Linshu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临沭县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020070",
      "en": "Zhangqiu",
      "l": "12",
      "ca": 4,
      "area_name": "章丘区"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080010",
      "en": "Cheng",
      "l": "12",
      "ca": 4,
      "area_name": "城区"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150030",
      "en": "Fenghuang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤凰县"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080020",
      "en": "Zanda Co.",
      "l": "14",
      "ca": 4,
      "area_name": "札达县"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090060",
      "en": "Linghai",
      "l": "15",
      "ca": 4,
      "area_name": "凌海"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040270",
      "en": "Dongkeng",
      "l": "14",
      "ca": 4,
      "area_name": "东坑镇"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120030",
      "en": "Yingquan",
      "l": "12",
      "ca": 4,
      "area_name": "颍泉区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020040",
      "en": "Liangqing",
      "l": "12",
      "ca": 4,
      "area_name": "良庆区"
    },
    {
      "parent_code": "300040",
      "a": "0",
      "area_code": "300040020",
      "en": "Karamay",
      "l": "12",
      "ca": 4,
      "area_name": "克拉玛依区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030090",
      "en": "Panshi",
      "l": "15",
      "ca": 4,
      "area_name": "磐石"
    },
    {
      "parent_code": "070080",
      "a": "0",
      "area_code": "070080050",
      "en": "Anji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安吉县"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120030",
      "en": "Gaoyao",
      "l": "12",
      "ca": 4,
      "area_name": "高要区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030130",
      "en": "Chishui",
      "l": "15",
      "ca": 4,
      "area_name": "赤水"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220120",
      "en": "Ruo'ergai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "若尔盖县"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120050",
      "en": "Bei'an",
      "l": "15",
      "ca": 4,
      "area_name": "北安"
    },
    {
      "parent_code": "270050",
      "a": "0",
      "area_code": "270050040",
      "en": "Yijun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜君县"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050010",
      "en": "Dong'an",
      "l": "12",
      "ca": 4,
      "area_name": "东安区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030140",
      "en": "Renhuai",
      "l": "15",
      "ca": 4,
      "area_name": "仁怀"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110020",
      "en": "Arxan",
      "l": "15",
      "ca": 4,
      "area_name": "阿尔山"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130070",
      "en": "Jeminay Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉木乃县"
    },
    {
      "parent_code": "050050",
      "a": "0",
      "area_code": "050050010",
      "en": "Chancheng",
      "l": "12",
      "ca": 4,
      "area_name": "禅城区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020060",
      "en": "Jingxing",
      "l": "12",
      "ca": 4,
      "area_name": "井陉矿区"
    },
    {
      "parent_code": "100090",
      "a": "0",
      "area_code": "100090040",
      "en": "Tianzhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天祝县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020080",
      "en": "Horinger Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和林格尔县"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110020",
      "en": "Tianyang",
      "l": "12",
      "ca": 4,
      "area_name": "田阳区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030080",
      "en": "Wangjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "望江县"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060090",
      "en": "Kalpin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柯坪县"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080020",
      "en": "Qinshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沁水县"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150020",
      "en": "Luxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泸溪县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070080",
      "en": "Lianzhou",
      "l": "15",
      "ca": 4,
      "area_name": "连州"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080030",
      "en": "Gar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "噶尔县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020060",
      "en": "Changqing",
      "l": "12",
      "ca": 4,
      "area_name": "长清区"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120040",
      "en": "Sunwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "孙吴县"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020050",
      "en": "Xixiangtang",
      "l": "12",
      "ca": 4,
      "area_name": "西乡塘区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040260",
      "en": "Hengli",
      "l": "14",
      "ca": 4,
      "area_name": "横沥镇"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120020",
      "en": "Yingdong",
      "l": "12",
      "ca": 4,
      "area_name": "颍东区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030080",
      "en": "Shulan",
      "l": "15",
      "ca": 4,
      "area_name": "舒兰"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090070",
      "en": "Beizhen",
      "l": "15",
      "ca": 4,
      "area_name": "北镇"
    },
    {
      "parent_code": "300040",
      "a": "0",
      "area_code": "300040010",
      "en": "Dushanzi",
      "l": "12",
      "ca": 4,
      "area_name": "独山子区"
    },
    {
      "parent_code": "070080",
      "a": "0",
      "area_code": "070080040",
      "en": "Changxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长兴县"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120040",
      "en": "Guangning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广宁县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220110",
      "en": "Aba Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阿坝县"
    },
    {
      "parent_code": "240050",
      "a": "0",
      "area_code": "240050030",
      "en": "Haiyan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "海晏县"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050040",
      "en": "Xi'an",
      "l": "12",
      "ca": 4,
      "area_name": "西安区"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140020",
      "en": "Qinghe",
      "l": "12",
      "ca": 4,
      "area_name": "清河区"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070090",
      "en": "Mishan",
      "l": "15",
      "ca": 4,
      "area_name": "密山"
    },
    {
      "parent_code": "220110",
      "a": "0",
      "area_code": "220110010",
      "en": "Ulanhot",
      "l": "15",
      "ca": 4,
      "area_name": "乌兰浩特"
    },
    {
      "parent_code": "050050",
      "a": "0",
      "area_code": "050050020",
      "en": "Nanhai",
      "l": "12",
      "ca": 4,
      "area_name": "南海区"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080010",
      "en": "Beihu",
      "l": "12",
      "ca": 4,
      "area_name": "北湖区"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060080",
      "en": "Awat Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阿瓦提县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020050",
      "en": "Licheng",
      "l": "12",
      "ca": 4,
      "area_name": "历城区"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080030",
      "en": "Yangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳城县"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150050",
      "en": "Baojing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "保靖县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020030",
      "en": "Qiaoxi",
      "l": "12",
      "ca": 4,
      "area_name": "桥西区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030090",
      "en": "Yuexi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岳西县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010100",
      "en": "Miaoli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "苗栗县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020050",
      "en": "Qingshuihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清水河县"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210010",
      "en": "Yuancheng",
      "l": "12",
      "ca": 4,
      "area_name": "源城区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020060",
      "en": "Jiangnan",
      "l": "12",
      "ca": 4,
      "area_name": "江南区"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090040",
      "en": "Heishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黑山县"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120050",
      "en": "Taihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "太和县"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050100",
      "en": "Gao'an",
      "l": "15",
      "ca": 4,
      "area_name": "高安"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120050",
      "en": "Huaiji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "怀集县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040250",
      "en": "Qiaotou",
      "l": "14",
      "ca": 4,
      "area_name": "桥头镇"
    },
    {
      "parent_code": "070080",
      "a": "0",
      "area_code": "070080030",
      "en": "Deqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德清县"
    },
    {
      "parent_code": "270050",
      "a": "0",
      "area_code": "270050020",
      "en": "Yintai",
      "l": "12",
      "ca": 4,
      "area_name": "印台区"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220100",
      "en": "Rangtang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "壤塘县"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050030",
      "en": "Aimin",
      "l": "12",
      "ca": 4,
      "area_name": "爱民区"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140010",
      "en": "Yinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "银州区"
    },
    {
      "parent_code": "050050",
      "a": "0",
      "area_code": "050050030",
      "en": "Shunde",
      "l": "12",
      "ca": 4,
      "area_name": "顺德区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020040",
      "en": "Xinhua",
      "l": "12",
      "ca": 4,
      "area_name": "新华区"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080040",
      "en": "Lingchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陵川县"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150040",
      "en": "Huayuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "花垣县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020040",
      "en": "Huaiyin",
      "l": "12",
      "ca": 4,
      "area_name": "槐荫区"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060070",
      "en": "Wushi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乌什县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020060",
      "en": "Tumed Banner",
      "l": "16",
      "ca": 4,
      "area_name": "土左旗"
    },
    {
      "parent_code": "290080",
      "a": "0",
      "area_code": "290080010",
      "en": "Burang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "普兰县"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090050",
      "en": "Yi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "义县"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120040",
      "en": "Linquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临泉县"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120060",
      "en": "Fengkai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "封开县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080020",
      "en": "Suxian",
      "l": "12",
      "ca": 4,
      "area_name": "苏仙区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020070",
      "en": "Wuming",
      "l": "12",
      "ca": 4,
      "area_name": "武鸣区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040240",
      "en": "Changping",
      "l": "14",
      "ca": 4,
      "area_name": "常平镇"
    },
    {
      "parent_code": "070080",
      "a": "0",
      "area_code": "070080020",
      "en": "Nanxun",
      "l": "12",
      "ca": 4,
      "area_name": "南浔区"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140010",
      "en": "Linxia",
      "l": "15",
      "ca": 4,
      "area_name": "临夏市"
    },
    {
      "parent_code": "160120",
      "a": "0",
      "area_code": "160120060",
      "en": "Wudalianchi",
      "l": "15",
      "ca": 4,
      "area_name": "五大连池"
    },
    {
      "parent_code": "270050",
      "a": "0",
      "area_code": "270050030",
      "en": "Yaozhou",
      "l": "12",
      "ca": 4,
      "area_name": "耀州区"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150070",
      "en": "Yongshun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永顺县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010140",
      "en": "Changshou",
      "l": "12",
      "ca": 4,
      "area_name": "长寿区"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100030",
      "en": "Yanchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "延长县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080030",
      "en": "Fengquan",
      "l": "12",
      "ca": 4,
      "area_name": "凤泉区"
    },
    {
      "parent_code": "050030",
      "a": "0",
      "area_code": "050030030",
      "en": "Raoping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "饶平县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060050",
      "en": "Dengqen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丁青县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040010",
      "en": "Xiufeng",
      "l": "12",
      "ca": 4,
      "area_name": "秀峰区"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040030",
      "en": "Songshan",
      "l": "12",
      "ca": 4,
      "area_name": "松山区"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060060",
      "en": "Baicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "拜城县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030070",
      "en": "Mei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "眉县"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060020",
      "en": "Yanfeng",
      "l": "12",
      "ca": 4,
      "area_name": "雁峰区"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090100",
      "en": "Longhua",
      "l": "12",
      "ca": 4,
      "area_name": "龙华区"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170070",
      "en": "Neixiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "内乡县"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120070",
      "en": "Deqin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德庆县"
    },
    {
      "parent_code": "240070",
      "a": "0",
      "area_code": "240070010",
      "en": "Gongxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "共和县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030050",
      "en": "Datong",
      "l": "12",
      "ca": 4,
      "area_name": "大同区"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100120",
      "en": "Wugang",
      "l": "15",
      "ca": 4,
      "area_name": "武冈"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100120",
      "en": "Sandu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三都县"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130020",
      "en": "Burqin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "布尔津县"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090020",
      "en": "Linghe",
      "l": "12",
      "ca": 4,
      "area_name": "凌河区"
    },
    {
      "parent_code": "050230",
      "a": "0",
      "area_code": "050230040",
      "en": "Yunan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郁南县"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110100",
      "en": "Wuxue",
      "l": "15",
      "ca": 4,
      "area_name": "武穴"
    },
    {
      "parent_code": "050030",
      "a": "0",
      "area_code": "050030020",
      "en": "Chaoan",
      "l": "12",
      "ca": 4,
      "area_name": "潮安区"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150060",
      "en": "Guzhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "古丈县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080020",
      "en": "Weibin",
      "l": "12",
      "ca": 4,
      "area_name": "卫滨区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010130",
      "en": "Jiangjin",
      "l": "12",
      "ca": 4,
      "area_name": "江津区"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100040",
      "en": "Yanchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "延川县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060040",
      "en": "Riwoqe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "类乌齐县"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060050",
      "en": "Xinhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新和县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040040",
      "en": "Ar Horqin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "阿旗"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060010",
      "en": "Zhuhui",
      "l": "12",
      "ca": 4,
      "area_name": "珠晖区"
    },
    {
      "parent_code": "050230",
      "a": "0",
      "area_code": "050230050",
      "en": "Luoding",
      "l": "15",
      "ca": 4,
      "area_name": "罗定"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020140",
      "en": "Faku Co.",
      "l": "14",
      "ca": 4,
      "area_name": "法库县"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090030",
      "en": "Taihe",
      "l": "12",
      "ca": 4,
      "area_name": "太和区"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090110",
      "en": "Guangming",
      "l": "12",
      "ca": 4,
      "area_name": "光明区"
    },
    {
      "parent_code": "050120",
      "a": "0",
      "area_code": "050120080",
      "en": "Sihui",
      "l": "15",
      "ca": 4,
      "area_name": "四会"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060010",
      "en": "Wucheng",
      "l": "12",
      "ca": 4,
      "area_name": "婺城区"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170080",
      "en": "Xichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "淅川县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030060",
      "en": "Zhaozhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肇州县"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130030",
      "en": "Fuyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富蕴县"
    },
    {
      "parent_code": "240070",
      "a": "0",
      "area_code": "240070020",
      "en": "Tongde Co.",
      "l": "14",
      "ca": 4,
      "area_name": "同德县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030060",
      "en": "Fufeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "扶风县"
    },
    {
      "parent_code": "050030",
      "a": "0",
      "area_code": "050030010",
      "en": "Xiangqiao",
      "l": "12",
      "ca": 4,
      "area_name": "湘桥区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010120",
      "en": "Hechuan",
      "l": "12",
      "ca": 4,
      "area_name": "合川区"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110090",
      "en": "Xinyi",
      "l": "15",
      "ca": 4,
      "area_name": "新沂"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080010",
      "en": "Hongqi",
      "l": "12",
      "ca": 4,
      "area_name": "红旗区"
    },
    {
      "parent_code": "100090",
      "a": "0",
      "area_code": "100090010",
      "en": "Liangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "凉州区"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060040",
      "en": "Xayar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沙雅县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100010",
      "en": "Baota",
      "l": "12",
      "ca": 4,
      "area_name": "宝塔区"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040030",
      "en": "Xiangshan",
      "l": "12",
      "ca": 4,
      "area_name": "象山区"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060070",
      "en": "Baxoi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "八宿县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040010",
      "en": "Hongshan",
      "l": "12",
      "ca": 4,
      "area_name": "红山区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150010",
      "en": "Chuanhui",
      "l": "12",
      "ca": 4,
      "area_name": "川汇区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040290",
      "en": "Shipai",
      "l": "14",
      "ca": 4,
      "area_name": "石排镇"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030090",
      "en": "Qianyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "千阳县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020130",
      "en": "Kangping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "康平县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170090",
      "en": "Sheqi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "社旗县"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100020",
      "en": "Nancha Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南岔县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030070",
      "en": "Zhaoyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肇源县"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100100",
      "en": "Xinning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新宁县"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140060",
      "en": "Jinzhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金寨县"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130040",
      "en": "Fuhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "福海县"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070110",
      "en": "Wuyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "婺源县"
    },
    {
      "parent_code": "080120",
      "a": "0",
      "area_code": "080120010",
      "en": "Yingzhou",
      "l": "12",
      "ca": 4,
      "area_name": "颍州区"
    },
    {
      "parent_code": "050230",
      "a": "0",
      "area_code": "050230020",
      "en": "Yun'an",
      "l": "12",
      "ca": 4,
      "area_name": "云安区"
    },
    {
      "parent_code": "180150",
      "a": "0",
      "area_code": "180150080",
      "en": "Longshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙山县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130010",
      "en": "Lingling",
      "l": "12",
      "ca": 4,
      "area_name": "零陵区"
    },
    {
      "parent_code": "280180",
      "a": "0",
      "area_code": "280180010",
      "en": "Bazhou",
      "l": "12",
      "ca": 4,
      "area_name": "巴州区"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080100",
      "en": "Leting Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乐亭县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010110",
      "en": "Fuling",
      "l": "12",
      "ca": 4,
      "area_name": "涪陵区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020100",
      "en": "Pidu",
      "l": "12",
      "ca": 4,
      "area_name": "郫都区"
    },
    {
      "parent_code": "100090",
      "a": "0",
      "area_code": "100090020",
      "en": "Minqin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "民勤县"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110080",
      "en": "Suining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "睢宁县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100020",
      "en": "Ansai",
      "l": "12",
      "ca": 4,
      "area_name": "安塞区"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060060",
      "en": "Zhag'Yab Co.",
      "l": "14",
      "ca": 4,
      "area_name": "察雅县"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060030",
      "en": "Kuqa",
      "l": "15",
      "ca": 4,
      "area_name": "库车市"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040020",
      "en": "Diecai",
      "l": "12",
      "ca": 4,
      "area_name": "叠彩区"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040020",
      "en": "Yuanbaoshan",
      "l": "12",
      "ca": 4,
      "area_name": "元宝山区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150020",
      "en": "Fugou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "扶沟县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020120",
      "en": "Liaozhong",
      "l": "12",
      "ca": 4,
      "area_name": "辽中区"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030080",
      "en": "Long Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陇县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040280",
      "en": "Qishi",
      "l": "14",
      "ca": 4,
      "area_name": "企石镇"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100110",
      "en": "Chengbu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "城步县"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140070",
      "en": "Huoshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "霍山县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030080",
      "en": "Lindian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "林甸县"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130050",
      "en": "Habahe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "哈巴河县"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100030",
      "en": "Youhao",
      "l": "12",
      "ca": 4,
      "area_name": "友好区"
    },
    {
      "parent_code": "050230",
      "a": "0",
      "area_code": "050230030",
      "en": "Xinxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新兴县"
    },
    {
      "parent_code": "210090",
      "a": "0",
      "area_code": "210090010",
      "en": "Guta",
      "l": "12",
      "ca": 4,
      "area_name": "古塔区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070120",
      "en": "Dexing",
      "l": "15",
      "ca": 4,
      "area_name": "德兴"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080110",
      "en": "Qianxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "迁西县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130020",
      "en": "Lengshuitan",
      "l": "12",
      "ca": 4,
      "area_name": "冷水滩区"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100070",
      "en": "Wuqi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吴起县"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110090",
      "en": "Tianlin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "田林县"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110070",
      "en": "Pei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沛县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010180",
      "en": "Wanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "万州区"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060020",
      "en": "Wensu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "温宿县"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090020",
      "en": "Yongding",
      "l": "12",
      "ca": 4,
      "area_name": "永定区"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060010",
      "en": "Karuo",
      "l": "12",
      "ca": 4,
      "area_name": "卡若区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060100",
      "en": "Sanhe",
      "l": "15",
      "ca": 4,
      "area_name": "三河"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080070",
      "en": "Linwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临武县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040070",
      "en": "Linxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "林西县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170030",
      "en": "Nanzhao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南召县"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060040",
      "en": "Pujiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浦江县"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150070",
      "en": "Hoboksar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和布县"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140040",
      "en": "Huoqiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "霍邱县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040050",
      "en": "Yanshan",
      "l": "12",
      "ca": 4,
      "area_name": "雁山区"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060060",
      "en": "Hengyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "衡阳县"
    },
    {
      "parent_code": "240070",
      "a": "0",
      "area_code": "240070050",
      "en": "Guinan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贵南县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030030",
      "en": "Chencang",
      "l": "12",
      "ca": 4,
      "area_name": "陈仓区"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030010",
      "en": "Sartu",
      "l": "12",
      "ca": 4,
      "area_name": "萨尔图区"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130030",
      "en": "Qiyang",
      "l": "15",
      "ca": 4,
      "area_name": "祁阳市"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080120",
      "en": "Yutian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玉田县"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110060",
      "en": "Feng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丰县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100080",
      "en": "Ganquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘泉县"
    },
    {
      "parent_code": "300060",
      "a": "0",
      "area_code": "300060010",
      "en": "Aksu",
      "l": "15",
      "ca": 4,
      "area_name": "阿克苏市"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090030",
      "en": "Changting Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长汀县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010170",
      "en": "Nanchuan",
      "l": "12",
      "ca": 4,
      "area_name": "南川区"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040040",
      "en": "Qixing",
      "l": "12",
      "ca": 4,
      "area_name": "七星区"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050090",
      "en": "Muling",
      "l": "15",
      "ca": 4,
      "area_name": "穆棱"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060050",
      "en": "Pan'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "磐安县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080080",
      "en": "Rucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汝城县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040080",
      "en": "Hexigten Banner",
      "l": "16",
      "ca": 4,
      "area_name": "克什克腾旗"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170040",
      "en": "Fangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "方城县"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060050",
      "en": "Nanyue",
      "l": "12",
      "ca": 4,
      "area_name": "南岳区"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140050",
      "en": "Shucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "舒城县"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150060",
      "en": "Yumin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "裕民县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030020",
      "en": "Jintai",
      "l": "12",
      "ca": 4,
      "area_name": "金台区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070100",
      "en": "Wan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "万年县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030020",
      "en": "Longfeng",
      "l": "12",
      "ca": 4,
      "area_name": "龙凤区"
    },
    {
      "parent_code": "050230",
      "a": "0",
      "area_code": "050230010",
      "en": "Yuncheng",
      "l": "12",
      "ca": 4,
      "area_name": "云城区"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110050",
      "en": "Tongshan",
      "l": "12",
      "ca": 4,
      "area_name": "铜山区"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020090",
      "en": "Lianjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "连江县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100050",
      "en": "Zichang",
      "l": "15",
      "ca": 4,
      "area_name": "子长市"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080130",
      "en": "Zunhua",
      "l": "15",
      "ca": 4,
      "area_name": "遵化"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110070",
      "en": "Lingyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凌云县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060030",
      "en": "Gonjo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贡觉县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130040",
      "en": "Dongan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东安县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040050",
      "en": "Bairin Left Banner",
      "l": "16",
      "ca": 4,
      "area_name": "巴林左旗"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170050",
      "en": "Xixia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西峡县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080090",
      "en": "Guangdong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桂东县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040070",
      "en": "Yangshuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳朔县"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060040",
      "en": "Zhengxiang",
      "l": "12",
      "ca": 4,
      "area_name": "蒸湘区"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060020",
      "en": "Jindong",
      "l": "12",
      "ca": 4,
      "area_name": "金东区"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100100",
      "en": "Longli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙里县"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030030",
      "en": "Ranghulu",
      "l": "12",
      "ca": 4,
      "area_name": "让胡路区"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140020",
      "en": "Yu'an",
      "l": "12",
      "ca": 4,
      "area_name": "裕安区"
    },
    {
      "parent_code": "240070",
      "a": "0",
      "area_code": "240070030",
      "en": "Guide Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贵德县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030050",
      "en": "Qishan",
      "l": "14",
      "ca": 4,
      "area_name": "岐山县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020080",
      "en": "Minhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "闽侯县"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110040",
      "en": "Quanshan",
      "l": "12",
      "ca": 4,
      "area_name": "泉山区"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100060",
      "en": "Zhidan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "志丹县"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080140",
      "en": "Qian'an",
      "l": "15",
      "ca": 4,
      "area_name": "迁安"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090010",
      "en": "Xinluo",
      "l": "12",
      "ca": 4,
      "area_name": "新罗区"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110080",
      "en": "Yueye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乐业县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060020",
      "en": "Jomda Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江达县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130050",
      "en": "Shuangpai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "双牌县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170060",
      "en": "Zhenping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇平县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040060",
      "en": "Bairin Right Banner",
      "l": "16",
      "ca": 4,
      "area_name": "巴林右旗"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060030",
      "en": "Shigu",
      "l": "12",
      "ca": 4,
      "area_name": "石鼓区"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060030",
      "en": "Wuyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武义县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040060",
      "en": "Lingui",
      "l": "12",
      "ca": 4,
      "area_name": "临桂区"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100110",
      "en": "Huishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "惠水县"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140030",
      "en": "Yeji",
      "l": "12",
      "ca": 4,
      "area_name": "叶集区"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030040",
      "en": "Honggang",
      "l": "12",
      "ca": 4,
      "area_name": "红岗区"
    },
    {
      "parent_code": "300130",
      "a": "0",
      "area_code": "300130010",
      "en": "Altay",
      "l": "15",
      "ca": 4,
      "area_name": "阿勒泰市"
    },
    {
      "parent_code": "240070",
      "a": "0",
      "area_code": "240070040",
      "en": "Xinghai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴海县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030040",
      "en": "Fengxiang",
      "l": "12",
      "ca": 4,
      "area_name": "凤翔区"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110110",
      "en": "Gaomi",
      "l": "15",
      "ca": 4,
      "area_name": "高密"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120010",
      "en": "Kongtong",
      "l": "12",
      "ca": 4,
      "area_name": "崆峒区"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030070",
      "en": "De'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德安县"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060020",
      "en": "Fumian",
      "l": "12",
      "ca": 4,
      "area_name": "福绵区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050120",
      "en": "Yongji",
      "l": "15",
      "ca": 4,
      "area_name": "永济"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110030",
      "en": "Jiawang",
      "l": "12",
      "ca": 4,
      "area_name": "贾汪区"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180040",
      "en": "Badong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴东县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020030",
      "en": "Qingyang",
      "l": "12",
      "ca": 4,
      "area_name": "青羊区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010020",
      "en": "Xicheng",
      "l": "12",
      "ca": 4,
      "area_name": "西城区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150070",
      "en": "Huaiyang",
      "l": "12",
      "ca": 4,
      "area_name": "淮阳区"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090080",
      "en": "Raohe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "饶河县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130060",
      "en": "Dao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "道县"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040010",
      "en": "Shuangqiao",
      "l": "12",
      "ca": 4,
      "area_name": "双桥区"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070050",
      "en": "Hanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "含山县"
    },
    {
      "parent_code": "250040",
      "a": "0",
      "area_code": "250040040",
      "en": "Lijin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "利津县"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090060",
      "en": "Yantian",
      "l": "12",
      "ca": 4,
      "area_name": "盐田区"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020010",
      "en": "Jiang'an",
      "l": "12",
      "ca": 4,
      "area_name": "江岸区"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010080",
      "en": "Yilan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜兰县"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030110",
      "en": "Kangmar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "康马县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030090",
      "en": "Yunlong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云龙县"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120030",
      "en": "Hongwei",
      "l": "12",
      "ca": 4,
      "area_name": "宏伟区"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040070",
      "en": "Liyang",
      "l": "15",
      "ca": 4,
      "area_name": "溧阳"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090020",
      "en": "Zaduo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "杂多县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070010",
      "en": "Hantai",
      "l": "12",
      "ca": 4,
      "area_name": "汉台区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030210",
      "en": "Gaobeidian",
      "l": "15",
      "ca": 4,
      "area_name": "高碑店"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180030",
      "en": "Jianshi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建始县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110120",
      "en": "Changyi",
      "l": "15",
      "ca": 4,
      "area_name": "昌邑"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030080",
      "en": "Duchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "都昌县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020040",
      "en": "Jinjiang",
      "l": "12",
      "ca": 4,
      "area_name": "锦江区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050110",
      "en": "Ruicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "芮城县"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070060",
      "en": "Linjiang",
      "l": "15",
      "ca": 4,
      "area_name": "临江"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060030",
      "en": "Rong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "容县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010030",
      "en": "Chaoyang",
      "l": "12",
      "ca": 4,
      "area_name": "朝阳区"
    },
    {
      "parent_code": "220060",
      "a": "0",
      "area_code": "220060030",
      "en": "Wuda",
      "l": "12",
      "ca": 4,
      "area_name": "乌达区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150080",
      "en": "Taikang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "太康县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010090",
      "en": "Yubei",
      "l": "12",
      "ca": 4,
      "area_name": "渝北区"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090070",
      "en": "Baoqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宝清县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130070",
      "en": "Jiangyong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江永县"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110020",
      "en": "Yunlong",
      "l": "12",
      "ca": 4,
      "area_name": "云龙区"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070060",
      "en": "He Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和县"
    },
    {
      "parent_code": "250040",
      "a": "0",
      "area_code": "250040050",
      "en": "Guangrao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广饶县"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040020",
      "en": "Shuangluan",
      "l": "12",
      "ca": 4,
      "area_name": "双滦区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060090",
      "en": "Bazhou",
      "l": "15",
      "ca": 4,
      "area_name": "霸州"
    },
    {
      "parent_code": "310170",
      "a": "0",
      "area_code": "310170030",
      "en": "Weixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "维西县"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030100",
      "en": "Rinbung Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仁布县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010070",
      "en": "Chiayi",
      "l": "7",
      "ca": 4,
      "area_name": "嘉义"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120040",
      "en": "Gongchangling",
      "l": "12",
      "ca": 4,
      "area_name": "弓长岭区"
    },
    {
      "parent_code": "080140",
      "a": "0",
      "area_code": "080140010",
      "en": "Jin'an",
      "l": "12",
      "ca": 4,
      "area_name": "金安区"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030080",
      "en": "Yongping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永平县"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040080",
      "en": "Jintan",
      "l": "12",
      "ca": 4,
      "area_name": "金坛区"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090010",
      "en": "Yushu",
      "l": "15",
      "ca": 4,
      "area_name": "玉树市"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050100",
      "en": "Pinglu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平陆县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100090",
      "en": "Fu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富县"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180020",
      "en": "Lichuan",
      "l": "15",
      "ca": 4,
      "area_name": "利川"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030090",
      "en": "Hukou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "湖口县"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150090",
      "en": "Luyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鹿邑县"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070050",
      "en": "Changbai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长白县"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090060",
      "en": "Youyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "友谊县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010080",
      "en": "Banan",
      "l": "12",
      "ca": 4,
      "area_name": "巴南区"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130080",
      "en": "Ningyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁远县"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070030",
      "en": "Bowing",
      "l": "12",
      "ca": 4,
      "area_name": "博望区"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110010",
      "en": "Gulou",
      "l": "12",
      "ca": 4,
      "area_name": "鼓楼区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020050",
      "en": "Jinniu",
      "l": "12",
      "ca": 4,
      "area_name": "金牛区"
    },
    {
      "parent_code": "220060",
      "a": "0",
      "area_code": "220060020",
      "en": "Hainan",
      "l": "12",
      "ca": 4,
      "area_name": "海南区"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090040",
      "en": "Baoan",
      "l": "12",
      "ca": 4,
      "area_name": "宝安区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060080",
      "en": "Dachang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大厂县"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040050",
      "en": "Xinbei",
      "l": "12",
      "ca": 4,
      "area_name": "新北区"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120050",
      "en": "Taizihe",
      "l": "12",
      "ca": 4,
      "area_name": "太子河区"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060010",
      "en": "Yuzhou",
      "l": "12",
      "ca": 4,
      "area_name": "玉州区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010010",
      "en": "Dongcheng",
      "l": "12",
      "ca": 4,
      "area_name": "东城区"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070040",
      "en": "Jingyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "靖宇县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010070",
      "en": "Beibei",
      "l": "12",
      "ca": 4,
      "area_name": "北碚区"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090050",
      "en": "190020150",
      "l": "14",
      "ca": 4,
      "area_name": "集贤县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130090",
      "en": "Lanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蓝山县"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040120",
      "en": "Changhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长海县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020060",
      "en": "Longquanyi",
      "l": "12",
      "ca": 4,
      "area_name": "龙泉驿区"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070040",
      "en": "Dangtu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "当涂县"
    },
    {
      "parent_code": "220060",
      "a": "0",
      "area_code": "220060010",
      "en": "Haibowan",
      "l": "12",
      "ca": 4,
      "area_name": "海勃湾区"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090050",
      "en": "Longgang",
      "l": "12",
      "ca": 4,
      "area_name": "龙岗区"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070100",
      "en": "Songtao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "松桃县"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040060",
      "en": "Wujin",
      "l": "12",
      "ca": 4,
      "area_name": "武进区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060070",
      "en": "Wen'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "文安县"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120060",
      "en": "Liaoyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "辽阳县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010090",
      "en": "Taoyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桃园县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030200",
      "en": "Anguo",
      "l": "15",
      "ca": 4,
      "area_name": "安国"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180010",
      "en": "Enshi",
      "l": "15",
      "ca": 4,
      "area_name": "恩施"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030110",
      "en": "Ninghai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁海县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020050",
      "en": "Wuchang",
      "l": "12",
      "ca": 4,
      "area_name": "武昌区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020170",
      "en": "Bayan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴彦县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030050",
      "en": "Midu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "弥渡县"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060060",
      "en": "Xingye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴业县"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180080",
      "en": "Hefeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鹤峰县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040060",
      "en": "Baokang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "保康县"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130020",
      "en": "Shanxi",
      "l": "12",
      "ca": 4,
      "area_name": "陕州区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150030",
      "en": "Xihua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西华县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110130",
      "en": "Botou",
      "l": "15",
      "ca": 4,
      "area_name": "泊头"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020110",
      "en": "Xinmin",
      "l": "15",
      "ca": 4,
      "area_name": "新民"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030150",
      "en": "Gyirong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉隆县"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090020",
      "en": "Futian",
      "l": "12",
      "ca": 4,
      "area_name": "福田区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060060",
      "en": "Dacheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大城县"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090040",
      "en": "Baoshan",
      "l": "12",
      "ca": 4,
      "area_name": "宝山区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080090",
      "en": "New Barag Right Banner",
      "l": "16",
      "ca": 4,
      "area_name": "新右旗"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160010",
      "en": "Tongchuan",
      "l": "12",
      "ca": 4,
      "area_name": "通川区"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090060",
      "en": "Qumalai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲麻莱县"
    },
    {
      "parent_code": "190050",
      "a": "0",
      "area_code": "190050020",
      "en": "Xi'an",
      "l": "12",
      "ca": 4,
      "area_name": "西安区"
    },
    {
      "parent_code": "280180",
      "a": "0",
      "area_code": "280180020",
      "en": "Enyang",
      "l": "12",
      "ca": 4,
      "area_name": "恩阳区"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030030",
      "en": "Chaisang",
      "l": "12",
      "ca": 4,
      "area_name": "柴桑区"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120070",
      "en": "Dengta",
      "l": "15",
      "ca": 4,
      "area_name": "灯塔"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040070",
      "en": "Gulin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "古蔺县"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030100",
      "en": "Xiangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "象山县"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180070",
      "en": "Laifeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "来凤县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020180",
      "en": "Tonghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通河县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030040",
      "en": "Binchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宾川县"
    },
    {
      "parent_code": "080160",
      "a": "0",
      "area_code": "080160040",
      "en": "Qingyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青阳县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040070",
      "en": "Laohekou",
      "l": "15",
      "ca": 4,
      "area_name": "老河口"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130010",
      "en": "Hubin",
      "l": "12",
      "ca": 4,
      "area_name": "湖滨区"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110120",
      "en": "Mengcun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "孟村县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020040",
      "en": "Hanyang",
      "l": "12",
      "ca": 4,
      "area_name": "汉阳区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150040",
      "en": "Shangshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "商水县"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030140",
      "en": "Yadong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "亚东县"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090030",
      "en": "Nanshan",
      "l": "12",
      "ca": 4,
      "area_name": "南山区"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020010",
      "en": "Xuanwu",
      "l": "12",
      "ca": 4,
      "area_name": "玄武区"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020100",
      "en": "Hunnan",
      "l": "12",
      "ca": 4,
      "area_name": "浑南区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060050",
      "en": "Xianghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "香河县"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090030",
      "en": "Sifangtai",
      "l": "12",
      "ca": 4,
      "area_name": "四方台区"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060070",
      "en": "Beiliu",
      "l": "15",
      "ca": 4,
      "area_name": "北流"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090050",
      "en": "Nangqian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "囊谦县"
    },
    {
      "parent_code": "190050",
      "a": "0",
      "area_code": "190050030",
      "en": "Dongfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东丰县"
    },
    {
      "parent_code": "280180",
      "a": "0",
      "area_code": "280180030",
      "en": "Tongjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通江县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030040",
      "en": "Wuning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武宁县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020010",
      "en": "Chenghua",
      "l": "12",
      "ca": 4,
      "area_name": "成华区"
    },
    {
      "parent_code": "080160",
      "a": "0",
      "area_code": "080160030",
      "en": "Shitai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石台县"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060040",
      "en": "Luchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陆川县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020130",
      "en": "Pingtan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平潭县"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180060",
      "en": "Xianfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "咸丰县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020190",
      "en": "Mulan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "木兰县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040080",
      "en": "Zaoyang",
      "l": "15",
      "ca": 4,
      "area_name": "枣阳"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150050",
      "en": "Shenqiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沈丘县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110110",
      "en": "Xian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "献县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020030",
      "en": "Qiaokou",
      "l": "12",
      "ca": 4,
      "area_name": "硚口区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030130",
      "en": "Zhongba Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仲巴县"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090020",
      "en": "Lingdong",
      "l": "12",
      "ca": 4,
      "area_name": "岭东区"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060040",
      "en": "Yongqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永清县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020040",
      "en": "Jianye",
      "l": "12",
      "ca": 4,
      "area_name": "建邺区"
    },
    {
      "parent_code": "310170",
      "a": "0",
      "area_code": "310170020",
      "en": "Deqin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德钦县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030070",
      "en": "Weishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巍山县"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090040",
      "en": "Zhiduo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "治多县"
    },
    {
      "parent_code": "280180",
      "a": "0",
      "area_code": "280180040",
      "en": "Nanjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南江县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030050",
      "en": "Xiushui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "修水县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030060",
      "en": "Yongxiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永修县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020020",
      "en": "Wuhou",
      "l": "12",
      "ca": 4,
      "area_name": "武侯区"
    },
    {
      "parent_code": "170180",
      "a": "0",
      "area_code": "170180050",
      "en": "Xuanen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宣恩县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110100",
      "en": "Anqiu",
      "l": "15",
      "ca": 4,
      "area_name": "安丘"
    },
    {
      "parent_code": "080160",
      "a": "0",
      "area_code": "080160020",
      "en": "Dongzhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东至县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040090",
      "en": "Yicheng",
      "l": "15",
      "ca": 4,
      "area_name": "宜城"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050010",
      "en": "Jinghu",
      "l": "12",
      "ca": 4,
      "area_name": "镜湖区"
    },
    {
      "parent_code": "110060",
      "a": "0",
      "area_code": "110060050",
      "en": "Bobai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博白县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110100",
      "en": "Wuqiao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吴桥县"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060030",
      "en": "Gu'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "固安县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020120",
      "en": "Yongtai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永泰县"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150060",
      "en": "Dancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郸城县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020020",
      "en": "Jianghan",
      "l": "12",
      "ca": 4,
      "area_name": "江汉区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030120",
      "en": "Dinggye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定结县"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090010",
      "en": "Luohu",
      "l": "12",
      "ca": 4,
      "area_name": "罗湖区"
    },
    {
      "parent_code": "160090",
      "a": "0",
      "area_code": "160090010",
      "en": "Jianshan",
      "l": "12",
      "ca": 4,
      "area_name": "尖山区"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020030",
      "en": "Qinhuai",
      "l": "12",
      "ca": 4,
      "area_name": "秦淮区"
    },
    {
      "parent_code": "310170",
      "a": "0",
      "area_code": "310170010",
      "en": "Shangri-La",
      "l": "15",
      "ca": 4,
      "area_name": "香格里拉"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030060",
      "en": "Nanjian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南涧县"
    },
    {
      "parent_code": "240090",
      "a": "0",
      "area_code": "240090030",
      "en": "Chengduo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "称多县"
    },
    {
      "parent_code": "190050",
      "a": "0",
      "area_code": "190050010",
      "en": "Longshan",
      "l": "12",
      "ca": 4,
      "area_name": "龙山区"
    },
    {
      "parent_code": "280180",
      "a": "0",
      "area_code": "280180050",
      "en": "Pingchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平昌县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030010",
      "en": "Dali",
      "l": "15",
      "ca": 4,
      "area_name": "大理"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030050",
      "en": "Suiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥阳县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070070",
      "en": "Jidong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鸡东县"
    },
    {
      "parent_code": "080160",
      "a": "0",
      "area_code": "080160010",
      "en": "Guichi",
      "l": "12",
      "ca": 4,
      "area_name": "贵池区"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160010",
      "en": "Hailing",
      "l": "12",
      "ca": 4,
      "area_name": "海陵区"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140040",
      "en": "Xifeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西丰县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080130",
      "en": "Huqiu",
      "l": "12",
      "ca": 4,
      "area_name": "虎丘区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080050",
      "en": "Oroqen Banner",
      "l": "16",
      "ca": 4,
      "area_name": "鄂伦春旗"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050080",
      "en": "Fengcheng",
      "l": "15",
      "ca": 4,
      "area_name": "丰城"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070090",
      "en": "Zhen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇巴县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020090",
      "en": "Jiangxia",
      "l": "12",
      "ca": 4,
      "area_name": "江夏区"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080030",
      "en": "Ningming Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁明县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070050",
      "en": "Lianshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "连山县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020030",
      "en": "Tianqiao",
      "l": "12",
      "ca": 4,
      "area_name": "天桥区"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020110",
      "en": "Minqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "闽清县"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130060",
      "en": "Lingbao",
      "l": "15",
      "ca": 4,
      "area_name": "灵宝"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020010",
      "en": "Chang'an",
      "l": "12",
      "ca": 4,
      "area_name": "长安区"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060040",
      "en": "Yinan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沂南县"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100020",
      "en": "Xishi",
      "l": "12",
      "ca": 4,
      "area_name": "西市区"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040090",
      "en": "Kuancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宽城县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090120",
      "en": "Rongjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "榕江县"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090020",
      "en": "Luonan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛南县"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160050",
      "en": "Dazhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大竹县"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140020",
      "en": "Linxia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临夏县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030060",
      "en": "Zheng'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "正安县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020080",
      "en": "Caidian",
      "l": "12",
      "ca": 4,
      "area_name": "蔡甸区"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070080",
      "en": "Hulin",
      "l": "15",
      "ca": 4,
      "area_name": "虎林"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050030",
      "en": "Jiujiang",
      "l": "12",
      "ca": 4,
      "area_name": "鸠江区"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140030",
      "en": "Tieling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "铁岭县"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080020",
      "en": "Fusui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "扶绥县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070080",
      "en": "Lueyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "略阳县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080060",
      "en": "Ewenki Banner",
      "l": "16",
      "ca": 4,
      "area_name": "鄂温克旗"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020100",
      "en": "Luoyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗源县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070040",
      "en": "Yangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳山县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020020",
      "en": "Lixia",
      "l": "12",
      "ca": 4,
      "area_name": "历下区"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130050",
      "en": "Yima",
      "l": "15",
      "ca": 4,
      "area_name": "义马"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110160",
      "en": "Hejian",
      "l": "15",
      "ca": 4,
      "area_name": "河间"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060050",
      "en": "Tancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郯城县"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100010",
      "en": "Zhanqian",
      "l": "12",
      "ca": 4,
      "area_name": "站前区"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110100",
      "en": "Xilin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西林县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020050",
      "en": "Gulou",
      "l": "12",
      "ca": 4,
      "area_name": "鼓楼区"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090110",
      "en": "Liping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黎平县"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090030",
      "en": "Danfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丹凤县"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100010",
      "en": "Anding",
      "l": "12",
      "ca": 4,
      "area_name": "安定区"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050070",
      "en": "Tonggu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "铜鼓县"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030180",
      "en": "Kamba Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岗巴县"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140030",
      "en": "Kangle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "康乐县"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160040",
      "en": "Kaijiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "开江县"
    },
    {
      "parent_code": "270050",
      "a": "0",
      "area_code": "270050010",
      "en": "Wangyi",
      "l": "12",
      "ca": 4,
      "area_name": "王益区"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160030",
      "en": "Jiangyan",
      "l": "12",
      "ca": 4,
      "area_name": "姜堰区"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020070",
      "en": "Hongshan",
      "l": "12",
      "ca": 4,
      "area_name": "洪山区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010080",
      "en": "Mentougou",
      "l": "12",
      "ca": 4,
      "area_name": "门头沟区"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070070",
      "en": "Ningqiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁强县"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080010",
      "en": "Jiangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "江州区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080070",
      "en": "Old Barag Banner",
      "l": "16",
      "ca": 4,
      "area_name": "陈旗"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030030",
      "en": "Xiangyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "祥云县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030070",
      "en": "Daozhen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "道真县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070050",
      "en": "Chengzihe",
      "l": "12",
      "ca": 4,
      "area_name": "城子河区"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020010",
      "en": "Shizhong",
      "l": "12",
      "ca": 4,
      "area_name": "市中区"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110150",
      "en": "Huanghua",
      "l": "15",
      "ca": 4,
      "area_name": "黄骅"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070070",
      "en": "Yingde",
      "l": "15",
      "ca": 4,
      "area_name": "英德"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130040",
      "en": "Lushi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "卢氏县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060060",
      "en": "Yishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沂水县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010020",
      "en": "Kaohsiung",
      "l": "7",
      "ca": 4,
      "area_name": "高雄"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040070",
      "en": "Longhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆化县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090100",
      "en": "Taijiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "台江县"
    },
    {
      "parent_code": "140180",
      "a": "0",
      "area_code": "140180020",
      "en": "Rongcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "容城县"
    },
    {
      "parent_code": "190050",
      "a": "0",
      "area_code": "190050040",
      "en": "Dongliao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东辽县"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120070",
      "en": "Jingning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "静宁县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030010",
      "en": "Lianxi",
      "l": "12",
      "ca": 4,
      "area_name": "濂溪区"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160030",
      "en": "Xuanhan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宣汉县"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090040",
      "en": "Shangnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "商南县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020080",
      "en": "Luhe",
      "l": "12",
      "ca": 4,
      "area_name": "六合区"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140040",
      "en": "Yongjing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永靖县"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140060",
      "en": "Diaobingshan",
      "l": "15",
      "ca": 4,
      "area_name": "调兵山"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030170",
      "en": "Saga Co.",
      "l": "14",
      "ca": 4,
      "area_name": "萨嘎县"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050080",
      "en": "Xinping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新平县"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160020",
      "en": "Gaogang",
      "l": "12",
      "ca": 4,
      "area_name": "高港区"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140050",
      "en": "Guanghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广河县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010210",
      "en": "Binhai",
      "l": "12",
      "ca": 4,
      "area_name": "滨海新区"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020060",
      "en": "Qingshan",
      "l": "12",
      "ca": 4,
      "area_name": "青山区"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070060",
      "en": "Mian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "勉县"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090050",
      "en": "Shanyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "山阳县"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050090",
      "en": "Zhangshu",
      "l": "15",
      "ca": 4,
      "area_name": "樟树"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030100",
      "en": "Zuoyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "左云县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030080",
      "en": "Wuchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "务川县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070060",
      "en": "Mashan",
      "l": "12",
      "ca": 4,
      "area_name": "麻山区"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080080",
      "en": "New Barag Left Banner",
      "l": "16",
      "ca": 4,
      "area_name": "新左旗"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030020",
      "en": "Yangbi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "漾濞县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070060",
      "en": "Liannan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "连南县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010090",
      "en": "Fengtai",
      "l": "12",
      "ca": 4,
      "area_name": "丰台区"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110140",
      "en": "Renqiu",
      "l": "15",
      "ca": 4,
      "area_name": "任丘"
    },
    {
      "parent_code": "150130",
      "a": "0",
      "area_code": "150130030",
      "en": "Mianchi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "渑池县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060070",
      "en": "Lanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兰陵县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010010",
      "en": "Taipei",
      "l": "7",
      "ca": 4,
      "area_name": "台北"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040080",
      "en": "Fengning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丰宁县"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160020",
      "en": "Dachuan",
      "l": "12",
      "ca": 4,
      "area_name": "达川区"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020070",
      "en": "Pukou",
      "l": "12",
      "ca": 4,
      "area_name": "浦口区"
    },
    {
      "parent_code": "140180",
      "a": "0",
      "area_code": "140180030",
      "en": "Anxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安新县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030020",
      "en": "Xunyang",
      "l": "12",
      "ca": 4,
      "area_name": "浔阳区"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140050",
      "en": "Changtu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昌图县"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120060",
      "en": "Zhuanglang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庄浪县"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050090",
      "en": "Yuanjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "元江县"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030160",
      "en": "Nyalam Co.",
      "l": "14",
      "ca": 4,
      "area_name": "聂拉木县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080010",
      "en": "Hailar",
      "l": "12",
      "ca": 4,
      "area_name": "海拉尔区"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050060",
      "en": "Yimen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "易门县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070050",
      "en": "Xixiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西乡县"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110010",
      "en": "Weidu",
      "l": "12",
      "ca": 4,
      "area_name": "魏都区"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140060",
      "en": "Hezheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和政县"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080070",
      "en": "Pingxiang",
      "l": "15",
      "ca": 4,
      "area_name": "凭祥"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030090",
      "en": "Fenggang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤冈县"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090060",
      "en": "Zhen'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇安县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070030",
      "en": "Didao",
      "l": "12",
      "ca": 4,
      "area_name": "滴道区"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160050",
      "en": "Jingjiang",
      "l": "15",
      "ca": 4,
      "area_name": "靖江"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110030",
      "en": "Wutai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五台县"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050080",
      "en": "Wuwei",
      "l": "15",
      "ca": 4,
      "area_name": "无为市"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020070",
      "en": "Qingbaijiang",
      "l": "12",
      "ca": 4,
      "area_name": "青白江区"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010040",
      "en": "Taichung",
      "l": "7",
      "ca": 4,
      "area_name": "台中"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040050",
      "en": "Xinglong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴隆县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090160",
      "en": "Danzhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丹寨县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060080",
      "en": "Fei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "费县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070010",
      "en": "Qingcheng",
      "l": "12",
      "ca": 4,
      "area_name": "清城区"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050040",
      "en": "Shanggao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上高县"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120050",
      "en": "Huating",
      "l": "15",
      "ca": 4,
      "area_name": "华亭市"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030010",
      "en": "Changyi",
      "l": "12",
      "ca": 4,
      "area_name": "昌邑区"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140070",
      "en": "Dongxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东乡县"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080060",
      "en": "Tiandeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天等县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080100",
      "en": "Taicang",
      "l": "15",
      "ca": 4,
      "area_name": "太仓"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050070",
      "en": "Eshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "峨山县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070040",
      "en": "Yangxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洋县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080020",
      "en": "Jalainur",
      "l": "12",
      "ca": 4,
      "area_name": "扎赉诺尔区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010070",
      "en": "Shijingshan",
      "l": "12",
      "ca": 4,
      "area_name": "石景山区"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110020",
      "en": "Jian'an",
      "l": "12",
      "ca": 4,
      "area_name": "建安区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110020",
      "en": "Dingxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定襄县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070040",
      "en": "Lishu",
      "l": "12",
      "ca": 4,
      "area_name": "梨树区"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090070",
      "en": "Zhashui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柞水县"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160040",
      "en": "Xinghua",
      "l": "15",
      "ca": 4,
      "area_name": "兴化"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050070",
      "en": "Nanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南陵县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020080",
      "en": "Xindu",
      "l": "12",
      "ca": 4,
      "area_name": "新都区"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010030",
      "en": "Keelung",
      "l": "7",
      "ca": 4,
      "area_name": "基隆"
    },
    {
      "parent_code": "250040",
      "a": "0",
      "area_code": "250040010",
      "en": "Dongying",
      "l": "12",
      "ca": 4,
      "area_name": "东营区"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090150",
      "en": "Majiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "麻江县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060090",
      "en": "Pingyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平邑县"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040060",
      "en": "Luanping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "滦平县"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140010",
      "en": "Dongpo",
      "l": "12",
      "ca": 4,
      "area_name": "东坡区"
    },
    {
      "parent_code": "140180",
      "a": "0",
      "area_code": "140180010",
      "en": "Xiong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "雄县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020090",
      "en": "Qixia",
      "l": "12",
      "ca": 4,
      "area_name": "栖霞区"
    },
    {
      "parent_code": "050210",
      "a": "0",
      "area_code": "050210060",
      "en": "Dongyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东源县"
    },
    {
      "parent_code": "210140",
      "a": "0",
      "area_code": "210140070",
      "en": "Kaiyuan",
      "l": "15",
      "ca": 4,
      "area_name": "开原"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050030",
      "en": "Wanzai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "万载县"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120040",
      "en": "Chongxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "崇信县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070030",
      "en": "Chenggu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "城固县"
    },
    {
      "parent_code": "100140",
      "a": "0",
      "area_code": "100140080",
      "en": "Jishishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "积石山县"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080050",
      "en": "Great Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大新县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080110",
      "en": "Kunshan",
      "l": "15",
      "ca": 4,
      "area_name": "昆山"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080030",
      "en": "Arun Banner",
      "l": "16",
      "ca": 4,
      "area_name": "阿荣旗"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050040",
      "en": "Tonghai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通海县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110010",
      "en": "Xinfu",
      "l": "12",
      "ca": 4,
      "area_name": "忻府区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030010",
      "en": "Yingjiang",
      "l": "12",
      "ca": 4,
      "area_name": "迎江区"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120010",
      "en": "Baita",
      "l": "12",
      "ca": 4,
      "area_name": "白塔区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020090",
      "en": "Shuangliu",
      "l": "12",
      "ca": 4,
      "area_name": "双流区"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070030",
      "en": "Fogang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "佛冈县"
    },
    {
      "parent_code": "250040",
      "a": "0",
      "area_code": "250040020",
      "en": "Hekou",
      "l": "12",
      "ca": 4,
      "area_name": "河口区"
    },
    {
      "parent_code": "050090",
      "a": "0",
      "area_code": "050090080",
      "en": "Pingshan",
      "l": "12",
      "ca": 4,
      "area_name": "坪山区"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040030",
      "en": "Yingzi",
      "l": "12",
      "ca": 4,
      "area_name": "营子区"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090140",
      "en": "Leishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "雷山县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010060",
      "en": "Hsinchu",
      "l": "7",
      "ca": 4,
      "area_name": "新竹"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050060",
      "en": "Jing'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "靖安县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070010",
      "en": "Jiguan",
      "l": "12",
      "ca": 4,
      "area_name": "鸡冠区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030030",
      "en": "Chuanying",
      "l": "12",
      "ca": 4,
      "area_name": "船营区"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120030",
      "en": "Lingtai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵台县"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160070",
      "en": "Wanyuan",
      "l": "15",
      "ca": 4,
      "area_name": "万源"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010050",
      "en": "Haidian",
      "l": "12",
      "ca": 4,
      "area_name": "海淀区"
    },
    {
      "parent_code": "100120",
      "a": "0",
      "area_code": "100120020",
      "en": "Jingchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泾川县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080120",
      "en": "Wujiang",
      "l": "12",
      "ca": 4,
      "area_name": "吴江区"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050050",
      "en": "Huaning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "华宁县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080040",
      "en": "Morin Dawa Banner",
      "l": "16",
      "ca": 4,
      "area_name": "莫力达瓦旗"
    },
    {
      "parent_code": "060160",
      "a": "0",
      "area_code": "060160060",
      "en": "Taixing",
      "l": "15",
      "ca": 4,
      "area_name": "泰兴"
    },
    {
      "parent_code": "210120",
      "a": "0",
      "area_code": "210120020",
      "en": "Wensheng",
      "l": "12",
      "ca": 4,
      "area_name": "文圣区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030020",
      "en": "Daguan",
      "l": "12",
      "ca": 4,
      "area_name": "大观区"
    },
    {
      "parent_code": "110080",
      "a": "0",
      "area_code": "110080040",
      "en": "Longzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙州县"
    },
    {
      "parent_code": "250040",
      "a": "0",
      "area_code": "250040030",
      "en": "Kenli",
      "l": "12",
      "ca": 4,
      "area_name": "垦利区"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050090",
      "en": "Yijiang",
      "l": "12",
      "ca": 4,
      "area_name": "弋江区"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040040",
      "en": "Chengde Co.",
      "l": "14",
      "ca": 4,
      "area_name": "承德县"
    },
    {
      "parent_code": "050070",
      "a": "0",
      "area_code": "050070020",
      "en": "Qingxin",
      "l": "12",
      "ca": 4,
      "area_name": "清新区"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090130",
      "en": "Congjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "从江县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010050",
      "en": "Tainan",
      "l": "7",
      "ca": 4,
      "area_name": "台南"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050050",
      "en": "Yifeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜丰县"
    },
    {
      "parent_code": "160070",
      "a": "0",
      "area_code": "160070020",
      "en": "Hengshan",
      "l": "12",
      "ca": 4,
      "area_name": "恒山区"
    },
    {
      "parent_code": "190030",
      "a": "0",
      "area_code": "190030020",
      "en": "Longtan",
      "l": "12",
      "ca": 4,
      "area_name": "龙潭区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050130",
      "en": "Hejin",
      "l": "15",
      "ca": 4,
      "area_name": "河津"
    },
    {
      "parent_code": "280160",
      "a": "0",
      "area_code": "280160060",
      "en": "Quxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "渠县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070020",
      "en": "Nanzheng",
      "l": "12",
      "ca": 4,
      "area_name": "南郑区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230090",
      "en": "Butuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "布拖县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010420",
      "en": "Xiushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "秀山县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010140",
      "en": "Wuqing",
      "l": "12",
      "ca": 4,
      "area_name": "武清区"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020090",
      "en": "Wangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "望城区"
    },
    {
      "parent_code": "280060",
      "a": "0",
      "area_code": "280060050",
      "en": "Longchang",
      "l": "15",
      "ca": 4,
      "area_name": "隆昌"
    },
    {
      "parent_code": "120040",
      "a": "0",
      "area_code": "120040010",
      "en": "Zhongshan",
      "l": "12",
      "ca": 4,
      "area_name": "钟山区"
    },
    {
      "parent_code": "300190",
      "a": "0",
      "area_code": "300190040",
      "en": "Wenquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "温泉县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020110",
      "en": "Binhu",
      "l": "13",
      "ca": 4,
      "area_name": "滨湖区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110070",
      "en": "Jingle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "静乐县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060060",
      "en": "Luoping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗平县"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020120",
      "en": "Hengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "横州市"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090080",
      "en": "Kangbao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "康保县"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020010",
      "en": "Jinshui",
      "l": "12",
      "ca": 4,
      "area_name": "金水区"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140040",
      "en": "Hongya Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洪雅县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010080",
      "en": "Yuen Long",
      "l": "12",
      "ca": 4,
      "area_name": "元朗区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040110",
      "en": "Wangniudun",
      "l": "14",
      "ca": 4,
      "area_name": "望牛墩"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070090",
      "en": "Poyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鄱阳县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040090",
      "en": "Luanchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "栾川县"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160050",
      "en": "Dong'e Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东阿县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080090",
      "en": "Changshou",
      "l": "15",
      "ca": 4,
      "area_name": "常熟"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100060",
      "en": "Jiangshan",
      "l": "15",
      "ca": 4,
      "area_name": "江山"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030070",
      "en": "Guangling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广灵县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010150",
      "en": "Baodi",
      "l": "12",
      "ca": 4,
      "area_name": "宝坻区"
    },
    {
      "parent_code": "310140",
      "a": "0",
      "area_code": "310140050",
      "en": "Longchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陇川县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020120",
      "en": "Beicheng",
      "l": "13",
      "ca": 4,
      "area_name": "北城区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110060",
      "en": "Ningwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁武县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040100",
      "en": "Shatian",
      "l": "14",
      "ca": 4,
      "area_name": "沙田镇"
    },
    {
      "parent_code": "250080",
      "a": "0",
      "area_code": "250080040",
      "en": "Ju Co.",
      "l": "14",
      "ca": 4,
      "area_name": "莒县"
    },
    {
      "parent_code": "120040",
      "a": "0",
      "area_code": "120040020",
      "en": "Liuzhi",
      "l": "12",
      "ca": 4,
      "area_name": "六枝特区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090070",
      "en": "Zhangbei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "张北县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060070",
      "en": "Fuyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富源县"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030080",
      "en": "Lingqiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵丘县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010070",
      "en": "Kwai Tsing",
      "l": "12",
      "ca": 4,
      "area_name": "葵青区"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140050",
      "en": "Danling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丹棱县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040080",
      "en": "Xin'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新安县"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090010",
      "en": "Xingbin",
      "l": "12",
      "ca": 4,
      "area_name": "兴宾区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160060",
      "en": "Guan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "冠县"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100050",
      "en": "Longyou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙游县"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140010",
      "en": "Huai'an",
      "l": "12",
      "ca": 4,
      "area_name": "淮安区"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020070",
      "en": "Liuyang",
      "l": "15",
      "ca": 4,
      "area_name": "浏阳"
    },
    {
      "parent_code": "230030",
      "a": "0",
      "area_code": "230030010",
      "en": "Dawukou",
      "l": "12",
      "ca": 4,
      "area_name": "大武口区"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010160",
      "en": "Ninghe",
      "l": "12",
      "ca": 4,
      "area_name": "宁河区"
    },
    {
      "parent_code": "300190",
      "a": "0",
      "area_code": "300190020",
      "en": "Alashankou",
      "l": "15",
      "ca": 4,
      "area_name": "阿拉山口"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020190",
      "en": "Shenze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "深泽县"
    },
    {
      "parent_code": "310140",
      "a": "0",
      "area_code": "310140040",
      "en": "Yingjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盈江县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020090",
      "en": "Yuhong",
      "l": "12",
      "ca": 4,
      "area_name": "于洪区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020030",
      "en": "Erqi",
      "l": "12",
      "ca": 4,
      "area_name": "二七区"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020130",
      "en": "Zhengwu",
      "l": "13",
      "ca": 4,
      "area_name": "政务区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110050",
      "en": "Fanshi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "繁峙县"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040140",
      "en": "Bingzhou",
      "l": "15",
      "ca": 4,
      "area_name": "彬州"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060040",
      "en": "Luliang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陆良县"
    },
    {
      "parent_code": "120040",
      "a": "0",
      "area_code": "120040030",
      "en": "Shuicheng",
      "l": "12",
      "ca": 4,
      "area_name": "水城区"
    },
    {
      "parent_code": "280060",
      "a": "0",
      "area_code": "280060030",
      "en": "Weiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "威远县"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140020",
      "en": "Pengshan",
      "l": "12",
      "ca": 4,
      "area_name": "彭山区"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100020",
      "en": "Qingfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清丰县"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070010",
      "en": "Haigang",
      "l": "12",
      "ca": 4,
      "area_name": "海港区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070070",
      "en": "Yiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "弋阳县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010060",
      "en": "Tuen Mun",
      "l": "12",
      "ca": 4,
      "area_name": "屯门区"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090020",
      "en": "Xincheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "忻城县"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140020",
      "en": "Huaiyin",
      "l": "12",
      "ca": 4,
      "area_name": "淮阴区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160030",
      "en": "Shen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "莘县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100180",
      "en": "Nangong",
      "l": "15",
      "ca": 4,
      "area_name": "南宫"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030050",
      "en": "Yanggao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳高县"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050020",
      "en": "Fengxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "奉新县"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050010",
      "en": "Xiling",
      "l": "12",
      "ca": 4,
      "area_name": "西陵区"
    },
    {
      "parent_code": "300190",
      "a": "0",
      "area_code": "300190030",
      "en": "Jinghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "精河县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010170",
      "en": "Jinghai",
      "l": "12",
      "ca": 4,
      "area_name": "静海区"
    },
    {
      "parent_code": "310140",
      "a": "0",
      "area_code": "310140030",
      "en": "Lianghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "梁河县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020140",
      "en": "Lujiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庐江县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020080",
      "en": "Changsha Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长沙县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110040",
      "en": "Dai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "代县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020080",
      "en": "Shenbei",
      "l": "12",
      "ca": 4,
      "area_name": "沈北新区"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060050",
      "en": "Shizong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "师宗县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090090",
      "en": "Guyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沽源县"
    },
    {
      "parent_code": "280060",
      "a": "0",
      "area_code": "280060040",
      "en": "Zizhong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "资中县"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140030",
      "en": "Renshou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仁寿县"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100010",
      "en": "Hualong",
      "l": "12",
      "ca": 4,
      "area_name": "华龙区"
    },
    {
      "parent_code": "120040",
      "a": "0",
      "area_code": "120040040",
      "en": "Panzhou",
      "l": "15",
      "ca": 4,
      "area_name": "盘州"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010050",
      "en": "Kowloon City",
      "l": "12",
      "ca": 4,
      "area_name": "九龙城区"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070020",
      "en": "Shanhaiguan",
      "l": "12",
      "ca": 4,
      "area_name": "山海关区"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090030",
      "en": "Xiangzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "象州县"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070080",
      "en": "Yugan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "余干县"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140030",
      "en": "Qingjiangpu",
      "l": "12",
      "ca": 4,
      "area_name": "清江浦区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160040",
      "en": "Chiping",
      "l": "12",
      "ca": 4,
      "area_name": "茌平区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100190",
      "en": "Shahe",
      "l": "15",
      "ca": 4,
      "area_name": "沙河"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160100",
      "en": "Xincai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新蔡县"
    },
    {
      "parent_code": "200050",
      "a": "0",
      "area_code": "200050010",
      "en": "Yuanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "袁州区"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030060",
      "en": "Tianzhen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天镇县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010100",
      "en": "Dongli",
      "l": "12",
      "ca": 4,
      "area_name": "东丽区"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190020",
      "en": "Meixian",
      "l": "12",
      "ca": 4,
      "area_name": "梅县区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160010",
      "en": "Dongchangfu",
      "l": "12",
      "ca": 4,
      "area_name": "东昌府区"
    },
    {
      "parent_code": "170070",
      "a": "0",
      "area_code": "170070030",
      "en": "Jingshan",
      "l": "15",
      "ca": 4,
      "area_name": "京山市"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020150",
      "en": "Chaohu",
      "l": "15",
      "ca": 4,
      "area_name": "巢湖"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020170",
      "en": "Lingshou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵寿县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060020",
      "en": "Zhanyi",
      "l": "12",
      "ca": 4,
      "area_name": "沾益区"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120010",
      "en": "Wenshan",
      "l": "15",
      "ca": 4,
      "area_name": "文山"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110090",
      "en": "Liangdang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "两当县"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080110",
      "en": "Zixing",
      "l": "15",
      "ca": 4,
      "area_name": "资兴"
    },
    {
      "parent_code": "080090",
      "a": "0",
      "area_code": "080090020",
      "en": "Yi'an",
      "l": "12",
      "ca": 4,
      "area_name": "义安区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040120",
      "en": "Wugong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武功县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100110",
      "en": "Yichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜川县"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130020",
      "en": "Jiayu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉鱼县"
    },
    {
      "parent_code": "280060",
      "a": "0",
      "area_code": "280060010",
      "en": "Shizhong",
      "l": "12",
      "ca": 4,
      "area_name": "市中区"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060100",
      "en": "Qidong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "祁东县"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100060",
      "en": "Dashiqiao",
      "l": "15",
      "ca": 4,
      "area_name": "大石桥"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040150",
      "en": "Dalingshan",
      "l": "14",
      "ca": 4,
      "area_name": "大岭山"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070050",
      "en": "Yanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "铅山县"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070030",
      "en": "Beidaihe",
      "l": "12",
      "ca": 4,
      "area_name": "北戴河区"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140040",
      "en": "Hongze",
      "l": "12",
      "ca": 4,
      "area_name": "洪泽区"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030030",
      "en": "Yungang",
      "l": "12",
      "ca": 4,
      "area_name": "云冈区"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060040",
      "en": "Donghai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东海县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140100",
      "en": "Jingzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "靖州县"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100040",
      "en": "Fan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "范县"
    },
    {
      "parent_code": "230030",
      "a": "0",
      "area_code": "230030030",
      "en": "Pingluo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平罗县"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100020",
      "en": "Qujiang",
      "l": "12",
      "ca": 4,
      "area_name": "衢江区"
    },
    {
      "parent_code": "230030",
      "a": "0",
      "area_code": "230030020",
      "en": "Huinong",
      "l": "12",
      "ca": 4,
      "area_name": "惠农区"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010110",
      "en": "Xiqing",
      "l": "12",
      "ca": 4,
      "area_name": "西青区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160020",
      "en": "Yanggu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳谷县"
    },
    {
      "parent_code": "170070",
      "a": "0",
      "area_code": "170070020",
      "en": "Duodao",
      "l": "12",
      "ca": 4,
      "area_name": "掇刀区"
    },
    {
      "parent_code": "300190",
      "a": "0",
      "area_code": "300190010",
      "en": "Bole",
      "l": "15",
      "ca": 4,
      "area_name": "博乐"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190010",
      "en": "Meijiang",
      "l": "12",
      "ca": 4,
      "area_name": "梅江区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040130",
      "en": "Xingping",
      "l": "15",
      "ca": 4,
      "area_name": "兴平"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100120",
      "en": "Huanglong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黄龙县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020180",
      "en": "Gaoyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高邑县"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120020",
      "en": "Yanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "砚山县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110080",
      "en": "Hui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "徽县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060030",
      "en": "Malone",
      "l": "12",
      "ca": 4,
      "area_name": "马龙区"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130010",
      "en": "Xian'an",
      "l": "12",
      "ca": 4,
      "area_name": "咸安区"
    },
    {
      "parent_code": "280060",
      "a": "0",
      "area_code": "280060020",
      "en": "Dongxing",
      "l": "12",
      "ca": 4,
      "area_name": "东兴区"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060010",
      "en": "Lanshan",
      "l": "12",
      "ca": 4,
      "area_name": "兰山区"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100050",
      "en": "Gaizhou",
      "l": "15",
      "ca": 4,
      "area_name": "盖州"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040040",
      "en": "Jianxi",
      "l": "12",
      "ca": 4,
      "area_name": "涧西区"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100030",
      "en": "Nanye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南乐县"
    },
    {
      "parent_code": "080090",
      "a": "0",
      "area_code": "080090010",
      "en": "Tongguan",
      "l": "12",
      "ca": 4,
      "area_name": "铜官区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070060",
      "en": "Hengfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "横峰县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040140",
      "en": "Liaobu",
      "l": "14",
      "ca": 4,
      "area_name": "寮步镇"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070040",
      "en": "Funing",
      "l": "12",
      "ca": 4,
      "area_name": "抚宁区"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140050",
      "en": "Lianshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涟水县"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060030",
      "en": "Ganyu",
      "l": "12",
      "ca": 4,
      "area_name": "赣榆区"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140110",
      "en": "Channel Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通道县"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030040",
      "en": "Yunzhou",
      "l": "12",
      "ca": 4,
      "area_name": "云州区"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080060",
      "en": "Wuzhong",
      "l": "12",
      "ca": 4,
      "area_name": "吴中区"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100010",
      "en": "Kecheng",
      "l": "12",
      "ca": 4,
      "area_name": "柯城区"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010120",
      "en": "Jinnan",
      "l": "12",
      "ca": 4,
      "area_name": "津南区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070110",
      "en": "Shuanghu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "双湖县"
    },
    {
      "parent_code": "170070",
      "a": "0",
      "area_code": "170070050",
      "en": "Zhongxiang",
      "l": "15",
      "ca": 4,
      "area_name": "钟祥"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070050",
      "en": "Qinglong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青龙县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110070",
      "en": "Li Co.",
      "l": "14",
      "ca": 4,
      "area_name": "礼县"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080090",
      "en": "Yiliang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彝良县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020150",
      "en": "Luancheng",
      "l": "12",
      "ca": 4,
      "area_name": "栾城区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110090",
      "en": "Wuzhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五寨县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060020",
      "en": "Luozhuang",
      "l": "12",
      "ca": 4,
      "area_name": "罗庄区"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130040",
      "en": "Chongyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "崇阳县"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070030",
      "en": "Guangxin",
      "l": "12",
      "ca": 4,
      "area_name": "广信区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040100",
      "en": "Xunyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "旬邑县"
    },
    {
      "parent_code": "280120",
      "a": "0",
      "area_code": "280120010",
      "en": "Chuanshan",
      "l": "12",
      "ca": 4,
      "area_name": "船山区"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100040",
      "en": "Laobian",
      "l": "12",
      "ca": 4,
      "area_name": "老边区"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140060",
      "en": "Xuyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盱眙县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040070",
      "en": "Mengjin",
      "l": "12",
      "ca": 4,
      "area_name": "孟津区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040130",
      "en": "Chashan",
      "l": "14",
      "ca": 4,
      "area_name": "茶山镇"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080070",
      "en": "Xiangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "相城区"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030010",
      "en": "Xinrong",
      "l": "12",
      "ca": 4,
      "area_name": "新荣区"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060020",
      "en": "Haizhou",
      "l": "12",
      "ca": 4,
      "area_name": "海州区"
    },
    {
      "parent_code": "280140",
      "a": "0",
      "area_code": "280140060",
      "en": "Qingshen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青神县"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100040",
      "en": "Kaihua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "开化县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140120",
      "en": "Hongjiang",
      "l": "15",
      "ca": 4,
      "area_name": "洪江"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100060",
      "en": "Puyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "濮阳县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010130",
      "en": "Beichen",
      "l": "12",
      "ca": 4,
      "area_name": "北辰区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070100",
      "en": "Nyima Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尼玛县"
    },
    {
      "parent_code": "170070",
      "a": "0",
      "area_code": "170070040",
      "en": "Shayang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沙洋县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110060",
      "en": "Xihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西和县"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080080",
      "en": "Zhenxiong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇雄县"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070060",
      "en": "Changli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昌黎县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060010",
      "en": "Qilin",
      "l": "12",
      "ca": 4,
      "area_name": "麒麟区"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110080",
      "en": "Shenchi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "神池县"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040110",
      "en": "Chunhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "淳化县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100100",
      "en": "Luochuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛川县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020160",
      "en": "Xingtang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "行唐县"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130030",
      "en": "Tongcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通城县"
    },
    {
      "parent_code": "250060",
      "a": "0",
      "area_code": "250060030",
      "en": "Hedong",
      "l": "12",
      "ca": 4,
      "area_name": "河东区"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010090",
      "en": "Sham Shui Po",
      "l": "12",
      "ca": 4,
      "area_name": "深水埗区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070040",
      "en": "Yushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玉山县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040060",
      "en": "Luolong",
      "l": "12",
      "ca": 4,
      "area_name": "洛龙区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040120",
      "en": "Hongmei",
      "l": "14",
      "ca": 4,
      "area_name": "洪梅镇"
    },
    {
      "parent_code": "060140",
      "a": "0",
      "area_code": "060140070",
      "en": "Jinhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金湖县"
    },
    {
      "parent_code": "210100",
      "a": "0",
      "area_code": "210100030",
      "en": "Bayuquan",
      "l": "12",
      "ca": 4,
      "area_name": "鲅鱼圈区"
    },
    {
      "parent_code": "270090",
      "a": "0",
      "area_code": "270090010",
      "en": "Shangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "商州区"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060010",
      "en": "Lianyun",
      "l": "12",
      "ca": 4,
      "area_name": "连云区"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080080",
      "en": "Zhangjiagang",
      "l": "15",
      "ca": 4,
      "area_name": "张家港"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050090",
      "en": "Xia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "夏县"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030020",
      "en": "Pingcheng",
      "l": "12",
      "ca": 4,
      "area_name": "平城区"
    },
    {
      "parent_code": "150100",
      "a": "0",
      "area_code": "150100050",
      "en": "Taiqian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "台前县"
    },
    {
      "parent_code": "070100",
      "a": "0",
      "area_code": "070100030",
      "en": "Changshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "常山县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020150",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130060",
      "en": "Chibi",
      "l": "15",
      "ca": 4,
      "area_name": "赤壁"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060020",
      "en": "Dafang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大方县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010020",
      "en": "Jiangbei",
      "l": "12",
      "ca": 4,
      "area_name": "江北区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050060",
      "en": "Yuan'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "远安县"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020090",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080070",
      "en": "Suijiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥江县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040130",
      "en": "Longsheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙胜县"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040040",
      "en": "Luxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泸县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020030",
      "en": "Heping",
      "l": "12",
      "ca": 4,
      "area_name": "和平区"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020100",
      "en": "Nansha",
      "l": "12",
      "ca": 4,
      "area_name": "南沙区"
    },
    {
      "parent_code": "190080",
      "a": "0",
      "area_code": "190080030",
      "en": "Changling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长岭县"
    },
    {
      "parent_code": "280120",
      "a": "0",
      "area_code": "280120030",
      "en": "Pengxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蓬溪县"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190060",
      "en": "Pingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平远县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050120",
      "en": "Nagarze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浪卡子县"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140040",
      "en": "Taierzhuang",
      "l": "12",
      "ca": 4,
      "area_name": "台儿庄区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040190",
      "en": "Fenggang",
      "l": "14",
      "ca": 4,
      "area_name": "凤岗镇"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070010",
      "en": "Xinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "信州区"
    },
    {
      "parent_code": "170130",
      "a": "0",
      "area_code": "170130050",
      "en": "Tongshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通山县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010010",
      "en": "Yuzhong",
      "l": "12",
      "ca": 4,
      "area_name": "渝中区"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060010",
      "en": "Qixingguan",
      "l": "12",
      "ca": 4,
      "area_name": "七星关区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020140",
      "en": "Jingkai",
      "l": "13",
      "ca": 4,
      "area_name": "经开区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020080",
      "en": "Zhengdong",
      "l": "12",
      "ca": 4,
      "area_name": "郑东新区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050070",
      "en": "Xingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴山县"
    },
    {
      "parent_code": "180110",
      "a": "0",
      "area_code": "180110040",
      "en": "Sangzhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桑植县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040120",
      "en": "Guanyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灌阳县"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040030",
      "en": "Longmatan",
      "l": "12",
      "ca": 4,
      "area_name": "龙马潭区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080060",
      "en": "Yongshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永善县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020110",
      "en": "Conghua",
      "l": "12",
      "ca": 4,
      "area_name": "从化区"
    },
    {
      "parent_code": "200070",
      "a": "0",
      "area_code": "200070020",
      "en": "Guangfeng",
      "l": "12",
      "ca": 4,
      "area_name": "广丰区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040180",
      "en": "Zhangmutou",
      "l": "14",
      "ca": 4,
      "area_name": "樟木头"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020020",
      "en": "Huanggu",
      "l": "12",
      "ca": 4,
      "area_name": "皇姑区"
    },
    {
      "parent_code": "190080",
      "a": "0",
      "area_code": "190080020",
      "en": "Qian Gorlos Co.",
      "l": "14",
      "ca": 4,
      "area_name": "前郭县"
    },
    {
      "parent_code": "280120",
      "a": "0",
      "area_code": "280120020",
      "en": "Anju",
      "l": "12",
      "ca": 4,
      "area_name": "安居区"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140030",
      "en": "Yicheng",
      "l": "12",
      "ca": 4,
      "area_name": "峄城区"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100010",
      "en": "Duyun",
      "l": "15",
      "ca": 4,
      "area_name": "都匀"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190050",
      "en": "Wuhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五华县"
    },
    {
      "parent_code": "230050",
      "a": "0",
      "area_code": "230050010",
      "en": "Yuanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "原州区"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060040",
      "en": "Jinsha Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金沙县"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050080",
      "en": "Zigui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "秭归县"
    },
    {
      "parent_code": "270100",
      "a": "0",
      "area_code": "270100130",
      "en": "Huangling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黄陵县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040150",
      "en": "Pingle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平乐县"
    },
    {
      "parent_code": "080090",
      "a": "0",
      "area_code": "080090040",
      "en": "Zongyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "枞阳县"
    },
    {
      "parent_code": "180110",
      "a": "0",
      "area_code": "180110030",
      "en": "Cili Co.",
      "l": "14",
      "ca": 4,
      "area_name": "慈利县"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080050",
      "en": "Daguan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大关县"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040060",
      "en": "Xuyong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "叙永县"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060120",
      "en": "Changning",
      "l": "15",
      "ca": 4,
      "area_name": "常宁"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020010",
      "en": "Shenhe",
      "l": "12",
      "ca": 4,
      "area_name": "沈河区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040090",
      "en": "Zhuanghe",
      "l": "15",
      "ca": 4,
      "area_name": "庄河"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040170",
      "en": "Huangjiang",
      "l": "14",
      "ca": 4,
      "area_name": "黄江镇"
    },
    {
      "parent_code": "190080",
      "a": "0",
      "area_code": "190080010",
      "en": "Ningjiang",
      "l": "12",
      "ca": 4,
      "area_name": "宁江区"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090100",
      "en": "Ximeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西盟县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090020",
      "en": "Qiaoxi",
      "l": "12",
      "ca": 4,
      "area_name": "桥西区"
    },
    {
      "parent_code": "280120",
      "a": "0",
      "area_code": "280120050",
      "en": "Daying Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大英县"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190040",
      "en": "Fengshun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丰顺县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100020",
      "en": "Fuquan",
      "l": "15",
      "ca": 4,
      "area_name": "福泉"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060060",
      "en": "Ganyan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灌南县"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140060",
      "en": "Tengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "滕州"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190030",
      "en": "Dabu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大埔县"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060030",
      "en": "Qianxi",
      "l": "15",
      "ca": 4,
      "area_name": "黔西市"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080120",
      "en": "Huixian",
      "l": "15",
      "ca": 4,
      "area_name": "辉县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040140",
      "en": "Resource Co.",
      "l": "14",
      "ca": 4,
      "area_name": "资源县"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050090",
      "en": "Changyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长阳县"
    },
    {
      "parent_code": "080090",
      "a": "0",
      "area_code": "080090030",
      "en": "Jiao",
      "l": "12",
      "ca": 4,
      "area_name": "郊区"
    },
    {
      "parent_code": "180110",
      "a": "0",
      "area_code": "180110020",
      "en": "Wulingyuan",
      "l": "12",
      "ca": 4,
      "area_name": "武陵源区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080040",
      "en": "Yanjin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐津县"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040050",
      "en": "Hejiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "合江县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040160",
      "en": "Dalang",
      "l": "14",
      "ca": 4,
      "area_name": "大朗镇"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060110",
      "en": "Leiyang",
      "l": "15",
      "ca": 4,
      "area_name": "耒阳"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040080",
      "en": "Pulandian",
      "l": "12",
      "ca": 4,
      "area_name": "普兰店区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090010",
      "en": "Qiaodong",
      "l": "12",
      "ca": 4,
      "area_name": "桥东区"
    },
    {
      "parent_code": "280120",
      "a": "0",
      "area_code": "280120040",
      "en": "Shehong",
      "l": "15",
      "ca": 4,
      "area_name": "射洪市"
    },
    {
      "parent_code": "060060",
      "a": "0",
      "area_code": "060060050",
      "en": "Guanyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灌云县"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140050",
      "en": "Shanting",
      "l": "12",
      "ca": 4,
      "area_name": "山亭区"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100030",
      "en": "Libo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "荔波县"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110010",
      "en": "Huangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "黄州区"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080110",
      "en": "Weihui",
      "l": "15",
      "ca": 4,
      "area_name": "卫辉"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050020",
      "en": "Wujiagang",
      "l": "12",
      "ca": 4,
      "area_name": "伍家岗区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020110",
      "en": "Zhouzhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "周至县"
    },
    {
      "parent_code": "310140",
      "a": "0",
      "area_code": "310140020",
      "en": "Mangshi",
      "l": "15",
      "ca": 4,
      "area_name": "芒市"
    },
    {
      "parent_code": "180110",
      "a": "0",
      "area_code": "180110010",
      "en": "Yongding",
      "l": "12",
      "ca": 4,
      "area_name": "永定区"
    },
    {
      "parent_code": "310160",
      "a": "0",
      "area_code": "310160030",
      "en": "Gongshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贡山县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010060",
      "en": "Dadukou",
      "l": "12",
      "ca": 4,
      "area_name": "大渡口区"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070010",
      "en": "Huashan",
      "l": "12",
      "ca": 4,
      "area_name": "花山区"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170010",
      "en": "Wujiang",
      "l": "12",
      "ca": 4,
      "area_name": "武江区"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010180",
      "en": "Thistle",
      "l": "12",
      "ca": 4,
      "area_name": "蓟州区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020050",
      "en": "Zhongyuan",
      "l": "12",
      "ca": 4,
      "area_name": "中原区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080030",
      "en": "Qiaojia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巧家县"
    },
    {
      "parent_code": "250080",
      "a": "0",
      "area_code": "250080010",
      "en": "Donggang",
      "l": "12",
      "ca": 4,
      "area_name": "东港区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090040",
      "en": "Xiahuayuan",
      "l": "12",
      "ca": 4,
      "area_name": "下花园区"
    },
    {
      "parent_code": "070120",
      "a": "0",
      "area_code": "070120030",
      "en": "Daishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岱山县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040170",
      "en": "Gongcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "恭城县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010040",
      "en": "Wong Tai Sin",
      "l": "12",
      "ca": 4,
      "area_name": "黄大仙区"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060060",
      "en": "Nayong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "纳雍县"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030010",
      "en": "Maojian",
      "l": "12",
      "ca": 4,
      "area_name": "茅箭区"
    },
    {
      "parent_code": "230050",
      "a": "0",
      "area_code": "230050040",
      "en": "Jingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泾源县"
    },
    {
      "parent_code": "310160",
      "a": "0",
      "area_code": "310160040",
      "en": "Lanping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兰坪县"
    },
    {
      "parent_code": "230050",
      "a": "0",
      "area_code": "230050050",
      "en": "Pengyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彭阳县"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110020",
      "en": "Tuanfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "团风县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080100",
      "en": "Changyuan",
      "l": "15",
      "ca": 4,
      "area_name": "长垣市"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050030",
      "en": "Dianjun",
      "l": "12",
      "ca": 4,
      "area_name": "点军区"
    },
    {
      "parent_code": "310140",
      "a": "0",
      "area_code": "310140010",
      "en": "Ruili",
      "l": "15",
      "ca": 4,
      "area_name": "瑞丽"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080020",
      "en": "Ludian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鲁甸县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010050",
      "en": "Jiulongpo",
      "l": "12",
      "ca": 4,
      "area_name": "九龙坡区"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060050",
      "en": "Zhijin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "织金县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020100",
      "en": "Lantian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蓝田县"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020040",
      "en": "Guancheng",
      "l": "12",
      "ca": 4,
      "area_name": "管城区"
    },
    {
      "parent_code": "080070",
      "a": "0",
      "area_code": "080070020",
      "en": "Yushan",
      "l": "12",
      "ca": 4,
      "area_name": "雨山区"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020060",
      "en": "Sujiatun",
      "l": "12",
      "ca": 4,
      "area_name": "苏家屯区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090030",
      "en": "Xuanhua",
      "l": "12",
      "ca": 4,
      "area_name": "宣化区"
    },
    {
      "parent_code": "070120",
      "a": "0",
      "area_code": "070120040",
      "en": "Shengsi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嵊泗县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040160",
      "en": "Lipu",
      "l": "15",
      "ca": 4,
      "area_name": "荔浦市"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170020",
      "en": "Zhenjiang",
      "l": "12",
      "ca": 4,
      "area_name": "浈江区"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010030",
      "en": "Kwun Tong",
      "l": "12",
      "ca": 4,
      "area_name": "观塘区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020130",
      "en": "Gaoling",
      "l": "12",
      "ca": 4,
      "area_name": "高陵区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080010",
      "en": "Zhaoyang",
      "l": "12",
      "ca": 4,
      "area_name": "昭阳区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050040",
      "en": "Xiaoting",
      "l": "12",
      "ca": 4,
      "area_name": "猇亭区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020070",
      "en": "Huiji",
      "l": "12",
      "ca": 4,
      "area_name": "惠济区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010040",
      "en": "Shapingba",
      "l": "12",
      "ca": 4,
      "area_name": "沙坪坝区"
    },
    {
      "parent_code": "250080",
      "a": "0",
      "area_code": "250080030",
      "en": "Wulian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五莲县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010020",
      "en": "Eastern",
      "l": "12",
      "ca": 4,
      "area_name": "东区"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040020",
      "en": "Naxi",
      "l": "12",
      "ca": 4,
      "area_name": "纳溪区"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100010",
      "en": "Jingyang",
      "l": "12",
      "ca": 4,
      "area_name": "旌阳区"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110030",
      "en": "Hong'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "红安县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020050",
      "en": "Tiexi",
      "l": "12",
      "ca": 4,
      "area_name": "铁西区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020100",
      "en": "Shanglin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上林县"
    },
    {
      "parent_code": "190080",
      "a": "0",
      "area_code": "190080050",
      "en": "Fuyu",
      "l": "15",
      "ca": 4,
      "area_name": "扶余"
    },
    {
      "parent_code": "260030",
      "a": "0",
      "area_code": "260030090",
      "en": "Hunyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浑源县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020120",
      "en": "Zengcheng",
      "l": "12",
      "ca": 4,
      "area_name": "增城区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090060",
      "en": "Chongli",
      "l": "12",
      "ca": 4,
      "area_name": "崇礼区"
    },
    {
      "parent_code": "200090",
      "a": "0",
      "area_code": "200090040",
      "en": "Leping",
      "l": "15",
      "ca": 4,
      "area_name": "乐平"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040010",
      "en": "Tianning",
      "l": "12",
      "ca": 4,
      "area_name": "天宁区"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140020",
      "en": "Xuecheng",
      "l": "12",
      "ca": 4,
      "area_name": "薛城区"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060080",
      "en": "Hezhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "赫章县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050100",
      "en": "Lhunze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆子县"
    },
    {
      "parent_code": "230050",
      "a": "0",
      "area_code": "230050020",
      "en": "Xiji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西吉县"
    },
    {
      "parent_code": "070120",
      "a": "0",
      "area_code": "070120010",
      "en": "Dinghai",
      "l": "12",
      "ca": 4,
      "area_name": "定海区"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190080",
      "en": "Xingning",
      "l": "15",
      "ca": 4,
      "area_name": "兴宁"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160070",
      "en": "Gaotang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高唐县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010030",
      "en": "Nanan",
      "l": "12",
      "ca": 4,
      "area_name": "南岸区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020120",
      "en": "Huyi",
      "l": "12",
      "ca": 4,
      "area_name": "鄠邑区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050050",
      "en": "Yiling",
      "l": "12",
      "ca": 4,
      "area_name": "夷陵区"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080100",
      "en": "Jian'ou",
      "l": "15",
      "ca": 4,
      "area_name": "建瓯"
    },
    {
      "parent_code": "250080",
      "a": "0",
      "area_code": "250080020",
      "en": "Lanshan",
      "l": "12",
      "ca": 4,
      "area_name": "岚山区"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010010",
      "en": "Sha Tin",
      "l": "12",
      "ca": 4,
      "area_name": "沙田区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020060",
      "en": "Shangjie",
      "l": "12",
      "ca": 4,
      "area_name": "上街区"
    },
    {
      "parent_code": "280040",
      "a": "0",
      "area_code": "280040010",
      "en": "Jiangyang",
      "l": "12",
      "ca": 4,
      "area_name": "江阳区"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110040",
      "en": "Luotian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗田县"
    },
    {
      "parent_code": "210020",
      "a": "0",
      "area_code": "210020040",
      "en": "Dadong",
      "l": "12",
      "ca": 4,
      "area_name": "大东区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020110",
      "en": "Binyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宾阳县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090050",
      "en": "Wanquan",
      "l": "12",
      "ca": 4,
      "area_name": "万全区"
    },
    {
      "parent_code": "190080",
      "a": "0",
      "area_code": "190080040",
      "en": "Qian'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乾安县"
    },
    {
      "parent_code": "060040",
      "a": "0",
      "area_code": "060040020",
      "en": "Zhonglou",
      "l": "12",
      "ca": 4,
      "area_name": "钟楼区"
    },
    {
      "parent_code": "250140",
      "a": "0",
      "area_code": "250140010",
      "en": "Shizhong",
      "l": "12",
      "ca": 4,
      "area_name": "市中区"
    },
    {
      "parent_code": "050190",
      "a": "0",
      "area_code": "050190070",
      "en": "Jiaoling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蕉岭县"
    },
    {
      "parent_code": "120060",
      "a": "0",
      "area_code": "120060070",
      "en": "Weining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "威宁县"
    },
    {
      "parent_code": "200090",
      "a": "0",
      "area_code": "200090030",
      "en": "Fuliang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浮梁县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050110",
      "en": "Cona Co.",
      "l": "14",
      "ca": 4,
      "area_name": "错那县"
    },
    {
      "parent_code": "070120",
      "a": "0",
      "area_code": "070120020",
      "en": "Putuo",
      "l": "12",
      "ca": 4,
      "area_name": "普陀区"
    },
    {
      "parent_code": "250160",
      "a": "0",
      "area_code": "250160080",
      "en": "Linqing",
      "l": "15",
      "ca": 4,
      "area_name": "临清"
    },
    {
      "parent_code": "230050",
      "a": "0",
      "area_code": "230050030",
      "en": "Longde Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆德县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020070",
      "en": "Changle",
      "l": "12",
      "ca": 4,
      "area_name": "长乐区"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050040",
      "en": "Xinchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新昌县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030110",
      "en": "Yucheng",
      "l": "15",
      "ca": 4,
      "area_name": "禹城"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100030",
      "en": "Zhongjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "中江县"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080030",
      "en": "Pu'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "普安县"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020030",
      "en": "Chengxi",
      "l": "12",
      "ca": 4,
      "area_name": "城西区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040020",
      "en": "Lusong",
      "l": "12",
      "ca": 4,
      "area_name": "芦淞区"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060020",
      "en": "Beiguan",
      "l": "12",
      "ca": 4,
      "area_name": "北关区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040030",
      "en": "Shahekou",
      "l": "12",
      "ca": 4,
      "area_name": "沙河口区"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110050",
      "en": "Yingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "英山县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020130",
      "en": "Hannan",
      "l": "12",
      "ca": 4,
      "area_name": "汉南区"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120030",
      "en": "Muping",
      "l": "12",
      "ca": 4,
      "area_name": "牟平区"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150030",
      "en": "Emin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "额敏县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100080",
      "en": "Luodian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗甸县"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100040",
      "en": "Yongde Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永德县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050080",
      "en": "Lhozhag Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛扎县"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170050",
      "en": "Renhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仁化县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080010",
      "en": "Yanping",
      "l": "12",
      "ca": 4,
      "area_name": "延平区"
    },
    {
      "parent_code": "200090",
      "a": "0",
      "area_code": "200090020",
      "en": "Zhushan",
      "l": "12",
      "ca": 4,
      "area_name": "珠山区"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020060",
      "en": "Liwan",
      "l": "12",
      "ca": 4,
      "area_name": "荔湾区"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080040",
      "en": "Qinglong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "晴隆县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020060",
      "en": "Fuqing",
      "l": "15",
      "ca": 4,
      "area_name": "福清"
    },
    {
      "parent_code": "130030",
      "a": "0",
      "area_code": "130030040",
      "en": "Yazhou",
      "l": "12",
      "ca": 4,
      "area_name": "崖州区"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050050",
      "en": "Zhuji",
      "l": "15",
      "ca": 4,
      "area_name": "诸暨"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100020",
      "en": "Luo",
      "l": "12",
      "ca": 4,
      "area_name": "罗江区"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030100",
      "en": "Leling",
      "l": "15",
      "ca": 4,
      "area_name": "乐陵"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020040",
      "en": "Chengbei",
      "l": "12",
      "ca": 4,
      "area_name": "城北区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040020",
      "en": "Zhongshan",
      "l": "12",
      "ca": 4,
      "area_name": "中山区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040010",
      "en": "Hetang",
      "l": "12",
      "ca": 4,
      "area_name": "荷塘区"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110060",
      "en": "Xishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浠水县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020120",
      "en": "Dongxihu",
      "l": "12",
      "ca": 4,
      "area_name": "东西湖区"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050090",
      "en": "Gyaca Co.",
      "l": "14",
      "ca": 4,
      "area_name": "加查县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120040",
      "en": "Laishan",
      "l": "12",
      "ca": 4,
      "area_name": "莱山区"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100030",
      "en": "Yun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云县"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150020",
      "en": "Wusu",
      "l": "15",
      "ca": 4,
      "area_name": "乌苏"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170060",
      "en": "Wengyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "翁源县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100090",
      "en": "Changshun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长顺县"
    },
    {
      "parent_code": "110150",
      "a": "0",
      "area_code": "110150050",
      "en": "Guiping",
      "l": "15",
      "ca": 4,
      "area_name": "桂平"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060030",
      "en": "Yindu",
      "l": "12",
      "ca": 4,
      "area_name": "殷都区"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090010",
      "en": "Huangshigang",
      "l": "12",
      "ca": 4,
      "area_name": "黄石港区"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060090",
      "en": "Hengdong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "衡东县"
    },
    {
      "parent_code": "200090",
      "a": "0",
      "area_code": "200090010",
      "en": "Changjiang",
      "l": "12",
      "ca": 4,
      "area_name": "昌江区"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020070",
      "en": "Panyu",
      "l": "12",
      "ca": 4,
      "area_name": "番禺区"
    },
    {
      "parent_code": "130030",
      "a": "0",
      "area_code": "130030030",
      "en": "Tianya",
      "l": "12",
      "ca": 4,
      "area_name": "天涯区"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080010",
      "en": "Xingyi",
      "l": "15",
      "ca": 4,
      "area_name": "兴义"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020050",
      "en": "Jin'an",
      "l": "12",
      "ca": 4,
      "area_name": "晋安区"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050020",
      "en": "Keqiao",
      "l": "12",
      "ca": 4,
      "area_name": "柯桥区"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100050",
      "en": "Shifang",
      "l": "15",
      "ca": 4,
      "area_name": "什邡"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110070",
      "en": "Qichun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蕲春县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020110",
      "en": "Xinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "新洲区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040010",
      "en": "Xigang",
      "l": "12",
      "ca": 4,
      "area_name": "西岗区"
    },
    {
      "parent_code": "110150",
      "a": "0",
      "area_code": "110150040",
      "en": "Pingnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平南县"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040110",
      "en": "Pingquan",
      "l": "15",
      "ca": 4,
      "area_name": "平泉"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020050",
      "en": "Huangzhong",
      "l": "12",
      "ca": 4,
      "area_name": "湟中区"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100060",
      "en": "Shuangjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "双江县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020040",
      "en": "Haizhuqu",
      "l": "12",
      "ca": 4,
      "area_name": "海珠区"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150050",
      "en": "Toli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "托里县"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170030",
      "en": "Qujiang",
      "l": "12",
      "ca": 4,
      "area_name": "曲江区"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060080",
      "en": "Hengshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "衡山县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080030",
      "en": "Shunchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "顺昌县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080090",
      "en": "Fengqiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "封丘县"
    },
    {
      "parent_code": "130030",
      "a": "0",
      "area_code": "130030020",
      "en": "Jiyang",
      "l": "12",
      "ca": 4,
      "area_name": "吉阳区"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050030",
      "en": "Shangyu",
      "l": "12",
      "ca": 4,
      "area_name": "上虞区"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080020",
      "en": "Xingren",
      "l": "15",
      "ca": 4,
      "area_name": "兴仁市"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100040",
      "en": "Guanghan",
      "l": "15",
      "ca": 4,
      "area_name": "广汉"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020040",
      "en": "Mawei",
      "l": "12",
      "ca": 4,
      "area_name": "马尾区"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110080",
      "en": "Huangmei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黄梅县"
    },
    {
      "parent_code": "170020",
      "a": "0",
      "area_code": "170020100",
      "en": "Huangpi",
      "l": "12",
      "ca": 4,
      "area_name": "黄陂区"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060010",
      "en": "Wenfeng",
      "l": "12",
      "ca": 4,
      "area_name": "文峰区"
    },
    {
      "parent_code": "110150",
      "a": "0",
      "area_code": "110150030",
      "en": "Qintang",
      "l": "12",
      "ca": 4,
      "area_name": "覃塘区"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020060",
      "en": "Huangyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "湟源县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120060",
      "en": "Longkou",
      "l": "15",
      "ca": 4,
      "area_name": "龙口"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100050",
      "en": "Zhenkang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇康县"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170040",
      "en": "Shixing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "始兴县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020050",
      "en": "Whampoa",
      "l": "12",
      "ca": 4,
      "area_name": "黄埔区"
    },
    {
      "parent_code": "180060",
      "a": "0",
      "area_code": "180060070",
      "en": "Hengnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "衡南县"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150040",
      "en": "Shawan",
      "l": "15",
      "ca": 4,
      "area_name": "沙湾市"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080080",
      "en": "Yanjin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "延津县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080020",
      "en": "Jianyang",
      "l": "12",
      "ca": 4,
      "area_name": "建阳区"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080070",
      "en": "Ceheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "册亨县"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020030",
      "en": "Cangshan",
      "l": "12",
      "ca": 4,
      "area_name": "仓山区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040060",
      "en": "You Co.",
      "l": "14",
      "ca": 4,
      "area_name": "攸县"
    },
    {
      "parent_code": "170110",
      "a": "0",
      "area_code": "170110090",
      "en": "Macheng",
      "l": "15",
      "ca": 4,
      "area_name": "麻城"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110010",
      "en": "Xinhua",
      "l": "12",
      "ca": 4,
      "area_name": "新华区"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020070",
      "en": "Datong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大通县"
    },
    {
      "parent_code": "110150",
      "a": "0",
      "area_code": "110150020",
      "en": "Gangnan",
      "l": "12",
      "ca": 4,
      "area_name": "港南区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020070",
      "en": "Yanliang",
      "l": "12",
      "ca": 4,
      "area_name": "阎良区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030030",
      "en": "Gyantse Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江孜县"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040070",
      "en": "Wafangdian",
      "l": "15",
      "ca": 4,
      "area_name": "瓦房店"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170090",
      "en": "Lechang",
      "l": "15",
      "ca": 4,
      "area_name": "乐昌"
    },
    {
      "parent_code": "160030",
      "a": "0",
      "area_code": "160030090",
      "en": "Dorbod Co.",
      "l": "14",
      "ca": 4,
      "area_name": "杜尔伯特县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020110",
      "en": "Anyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安义县"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100080",
      "en": "Cangyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沧源县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080070",
      "en": "Yuanyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "原阳县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100040",
      "en": "Guiding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贵定县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080050",
      "en": "Guangze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "光泽县"
    },
    {
      "parent_code": "130030",
      "a": "0",
      "area_code": "130030010",
      "en": "Haitang",
      "l": "12",
      "ca": 4,
      "area_name": "海棠区"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050040",
      "en": "Sangri Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桑日县"
    },
    {
      "parent_code": "280100",
      "a": "0",
      "area_code": "280100060",
      "en": "Mianzhu",
      "l": "15",
      "ca": 4,
      "area_name": "绵竹"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020020",
      "en": "Taijiang",
      "l": "12",
      "ca": 4,
      "area_name": "台江区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040050",
      "en": "Lukou",
      "l": "12",
      "ca": 4,
      "area_name": "渌口区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020060",
      "en": "Weiyang",
      "l": "12",
      "ca": 4,
      "area_name": "未央区"
    },
    {
      "parent_code": "110150",
      "a": "0",
      "area_code": "110150010",
      "en": "Gangbei",
      "l": "12",
      "ca": 4,
      "area_name": "港北区"
    },
    {
      "parent_code": "140040",
      "a": "0",
      "area_code": "140040100",
      "en": "Weichang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "围场县"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040060",
      "en": "Jinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "金州区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030020",
      "en": "Namling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南木林县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020120",
      "en": "Jinxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "进贤县"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100070",
      "en": "Gengma Co.",
      "l": "14",
      "ca": 4,
      "area_name": "耿马县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080060",
      "en": "Huojia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "获嘉县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050050",
      "en": "Qonggyai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "琼结县"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080080",
      "en": "Anlong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安龙县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080040",
      "en": "Pucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浦城县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100050",
      "en": "Weng'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "瓮安县"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080050",
      "en": "Zhenfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贞丰县"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050060",
      "en": "Shengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "嵊州"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030010",
      "en": "Haishu",
      "l": "12",
      "ca": 4,
      "area_name": "海曙区"
    },
    {
      "parent_code": "090020",
      "a": "0",
      "area_code": "090020010",
      "en": "Gulou",
      "l": "12",
      "ca": 4,
      "area_name": "鼓楼区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040040",
      "en": "Tianyuan",
      "l": "12",
      "ca": 4,
      "area_name": "天元区"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020070",
      "en": "Midong",
      "l": "12",
      "ca": 4,
      "area_name": "米东区"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040110",
      "en": "Yongfu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永福县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020090",
      "en": "Chang'an",
      "l": "12",
      "ca": 4,
      "area_name": "长安区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040050",
      "en": "Lushunkou",
      "l": "12",
      "ca": 4,
      "area_name": "旅顺口区"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150020",
      "en": "Jianghai",
      "l": "12",
      "ca": 4,
      "area_name": "江海区"
    },
    {
      "parent_code": "300150",
      "a": "0",
      "area_code": "300150010",
      "en": "Tacheng",
      "l": "15",
      "ca": 4,
      "area_name": "塔城市"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030010",
      "en": "Samzhubze",
      "l": "12",
      "ca": 4,
      "area_name": "桑珠孜区"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170070",
      "en": "Ruyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乳源县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120010",
      "en": "Zhifu",
      "l": "12",
      "ca": 4,
      "area_name": "芝罘区"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020080",
      "en": "Huadu",
      "l": "12",
      "ca": 4,
      "area_name": "花都区"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080050",
      "en": "Xinxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新乡县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050060",
      "en": "Qusum Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲松县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100060",
      "en": "Dushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "独山县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080070",
      "en": "Zhenghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "政和县"
    },
    {
      "parent_code": "120080",
      "a": "0",
      "area_code": "120080060",
      "en": "Wangmo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "望谟县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210090",
      "en": "Xinlong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新龙县"
    },
    {
      "parent_code": "150080",
      "a": "0",
      "area_code": "150080040",
      "en": "Muye",
      "l": "12",
      "ca": 4,
      "area_name": "牧野区"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040030",
      "en": "Shifeng",
      "l": "12",
      "ca": 4,
      "area_name": "石峰区"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020080",
      "en": "Urumqi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乌鲁木齐县"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080100",
      "en": "Baihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "白河县"
    },
    {
      "parent_code": "110040",
      "a": "0",
      "area_code": "110040100",
      "en": "Xingan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴安县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020080",
      "en": "Lintong",
      "l": "12",
      "ca": 4,
      "area_name": "临潼区"
    },
    {
      "parent_code": "210040",
      "a": "0",
      "area_code": "210040040",
      "en": "Ganjingzi",
      "l": "12",
      "ca": 4,
      "area_name": "甘井子区"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170080",
      "en": "Xinfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新丰县"
    },
    {
      "parent_code": "120100",
      "a": "0",
      "area_code": "120100070",
      "en": "Pingtang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平塘县"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050070",
      "en": "Comai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "措美县"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150010",
      "en": "Pengjiang",
      "l": "12",
      "ca": 4,
      "area_name": "蓬江区"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120020",
      "en": "Fushan",
      "l": "12",
      "ca": 4,
      "area_name": "福山区"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080060",
      "en": "Songxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "松溪县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110110",
      "en": "Hequ Co.",
      "l": "14",
      "ca": 4,
      "area_name": "河曲县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080010",
      "en": "Gusu",
      "l": "12",
      "ca": 4,
      "area_name": "姑苏区"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210080",
      "en": "Ganzi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘孜县"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030030",
      "en": "Jiangbei",
      "l": "12",
      "ca": 4,
      "area_name": "江北区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230010",
      "en": "Xichang",
      "l": "15",
      "ca": 4,
      "area_name": "西昌"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060040",
      "en": "Shuncheng",
      "l": "12",
      "ca": 4,
      "area_name": "顺城区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020130",
      "en": "Jingxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "井陉县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040150",
      "en": "Huichang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "会昌县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020010",
      "en": "Yuelu",
      "l": "12",
      "ca": 4,
      "area_name": "岳麓区"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110050",
      "en": "Dongguang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东光县"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040040",
      "en": "Dulan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "都兰县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040010",
      "en": "Laocheng",
      "l": "12",
      "ca": 4,
      "area_name": "老城区"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080090",
      "en": "Wuyishan",
      "l": "15",
      "ca": 4,
      "area_name": "武夷山"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080050",
      "en": "Rong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "荣县"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070070",
      "en": "Zhangjiachuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "张家川县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010120",
      "en": "Nantou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南投县"
    },
    {
      "parent_code": "300170",
      "a": "0",
      "area_code": "300170040",
      "en": "Wuqia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乌恰县"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120050",
      "en": "Maguan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "马关县"
    },
    {
      "parent_code": "250100",
      "a": "0",
      "area_code": "250100020",
      "en": "Wendeng",
      "l": "12",
      "ca": 4,
      "area_name": "文登区"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020050",
      "en": "Toutunhe",
      "l": "12",
      "ca": 4,
      "area_name": "头屯河区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120030",
      "en": "Abag Banner",
      "l": "16",
      "ca": 4,
      "area_name": "阿巴嘎旗"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150040",
      "en": "Taishan",
      "l": "15",
      "ca": 4,
      "area_name": "台山"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020080",
      "en": "Longan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆安县"
    },
    {
      "parent_code": "160140",
      "a": "0",
      "area_code": "160140020",
      "en": "Tahe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "塔河县"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050080",
      "en": "Yuanqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "垣曲县"
    },
    {
      "parent_code": "260070",
      "a": "0",
      "area_code": "260070010",
      "en": "Cheng",
      "l": "12",
      "ca": 4,
      "area_name": "城区"
    },
    {
      "parent_code": "160050",
      "a": "0",
      "area_code": "160050100",
      "en": "Dongning",
      "l": "15",
      "ca": 4,
      "area_name": "东宁"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030070",
      "en": "Ngamring Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昂仁县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030120",
      "en": "Heqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鹤庆县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110100",
      "en": "Kelan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岢岚县"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040090",
      "en": "Liling",
      "l": "15",
      "ca": 4,
      "area_name": "醴陵"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210070",
      "en": "Luho Co.",
      "l": "14",
      "ca": 4,
      "area_name": "炉霍县"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060050",
      "en": "Fushun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "抚顺县"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020060",
      "en": "Dabancheng",
      "l": "12",
      "ca": 4,
      "area_name": "达坂城区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230020",
      "en": "Muli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "木里县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020020",
      "en": "Furong",
      "l": "12",
      "ca": 4,
      "area_name": "芙蓉区"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040160",
      "en": "Xunwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "寻乌县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010110",
      "en": "Changhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彰化县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020140",
      "en": "Zhengding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "正定县"
    },
    {
      "parent_code": "110130",
      "a": "0",
      "area_code": "110130050",
      "en": "Fuchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富川县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110040",
      "en": "Qing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青县"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040030",
      "en": "Ulan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乌兰县"
    },
    {
      "parent_code": "090080",
      "a": "0",
      "area_code": "090080080",
      "en": "Shaowu",
      "l": "15",
      "ca": 4,
      "area_name": "邵武"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150030",
      "en": "Xinhui",
      "l": "12",
      "ca": 4,
      "area_name": "新会区"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080060",
      "en": "Fushun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富顺县"
    },
    {
      "parent_code": "250100",
      "a": "0",
      "area_code": "250100010",
      "en": "Huancui",
      "l": "12",
      "ca": 4,
      "area_name": "环翠区"
    },
    {
      "parent_code": "110020",
      "a": "0",
      "area_code": "110020090",
      "en": "Mashan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "马山县"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120060",
      "en": "Qiubei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丘北县"
    },
    {
      "parent_code": "090060",
      "a": "0",
      "area_code": "090060010",
      "en": "Chengxiang",
      "l": "12",
      "ca": 4,
      "area_name": "城厢区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120020",
      "en": "Xilinhot",
      "l": "15",
      "ca": 4,
      "area_name": "锡林浩特"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050070",
      "en": "Jiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绛县"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040060",
      "en": "Xiangan",
      "l": "12",
      "ca": 4,
      "area_name": "翔安区"
    },
    {
      "parent_code": "260070",
      "a": "0",
      "area_code": "260070020",
      "en": "Kuang",
      "l": "12",
      "ca": 4,
      "area_name": "矿区"
    },
    {
      "parent_code": "160140",
      "a": "0",
      "area_code": "160140030",
      "en": "Mohe",
      "l": "15",
      "ca": 4,
      "area_name": "漠河"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030060",
      "en": "Lhatse Co.",
      "l": "14",
      "ca": 4,
      "area_name": "拉孜县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210060",
      "en": "Daofu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "道孚县"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040080",
      "en": "Yanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "炎陵县"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120010",
      "en": "Erenhot",
      "l": "15",
      "ca": 4,
      "area_name": "二连浩特"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030050",
      "en": "Beilun",
      "l": "12",
      "ca": 4,
      "area_name": "北仑区"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090060",
      "en": "Daye",
      "l": "15",
      "ca": 4,
      "area_name": "大冶"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230030",
      "en": "Yanyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐源县"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060060",
      "en": "Xinbin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新宾县"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120030",
      "en": "Xichou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西畴县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040170",
      "en": "Shicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石城县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110030",
      "en": "Cang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沧县"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040060",
      "en": "Mangya",
      "l": "15",
      "ca": 4,
      "area_name": "茫崖"
    },
    {
      "parent_code": "110130",
      "a": "0",
      "area_code": "110130040",
      "en": "Zhongshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "钟山县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020110",
      "en": "Xinle",
      "l": "15",
      "ca": 4,
      "area_name": "新乐"
    },
    {
      "parent_code": "090060",
      "a": "0",
      "area_code": "090060020",
      "en": "Hanjiang",
      "l": "12",
      "ca": 4,
      "area_name": "涵江区"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060080",
      "en": "Nehuang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "内黄县"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080030",
      "en": "Da'an",
      "l": "12",
      "ca": 4,
      "area_name": "大安区"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010140",
      "en": "Pingtung Co.",
      "l": "14",
      "ca": 4,
      "area_name": "屏东县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040030",
      "en": "Chanhe",
      "l": "12",
      "ca": 4,
      "area_name": "瀍河区"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150060",
      "en": "Heshan",
      "l": "15",
      "ca": 4,
      "area_name": "鹤山"
    },
    {
      "parent_code": "200110",
      "a": "0",
      "area_code": "200110010",
      "en": "Yushui",
      "l": "12",
      "ca": 4,
      "area_name": "渝水区"
    },
    {
      "parent_code": "300170",
      "a": "0",
      "area_code": "300170020",
      "en": "Aktao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阿克陶县"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020030",
      "en": "Xinshi",
      "l": "12",
      "ca": 4,
      "area_name": "新市区"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040050",
      "en": "Tong'an",
      "l": "12",
      "ca": 4,
      "area_name": "同安区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050060",
      "en": "Xinjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新绛县"
    },
    {
      "parent_code": "170070",
      "a": "0",
      "area_code": "170070010",
      "en": "Dongbao",
      "l": "12",
      "ca": 4,
      "area_name": "东宝区"
    },
    {
      "parent_code": "260070",
      "a": "0",
      "area_code": "260070030",
      "en": "Jiao",
      "l": "12",
      "ca": 4,
      "area_name": "郊区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030050",
      "en": "Sa'Gya Co.",
      "l": "14",
      "ca": 4,
      "area_name": "萨迦县"
    },
    {
      "parent_code": "260070",
      "a": "0",
      "area_code": "260070040",
      "en": "Pingding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平定县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210050",
      "en": "Yajiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "雅江县"
    },
    {
      "parent_code": "180040",
      "a": "0",
      "area_code": "180040070",
      "en": "Chaling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "茶陵县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230040",
      "en": "Dechang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德昌县"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030040",
      "en": "Zhenhai",
      "l": "12",
      "ca": 4,
      "area_name": "镇海区"
    },
    {
      "parent_code": "180080",
      "a": "0",
      "area_code": "180080100",
      "en": "Anren Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安仁县"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060070",
      "en": "Qingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清原县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110020",
      "en": "Yunhe",
      "l": "12",
      "ca": 4,
      "area_name": "运河区"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040050",
      "en": "Tianjun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天峻县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020120",
      "en": "Luquan",
      "l": "12",
      "ca": 4,
      "area_name": "鹿泉区"
    },
    {
      "parent_code": "110130",
      "a": "0",
      "area_code": "110130030",
      "en": "Zhaoping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昭平县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040020",
      "en": "Xigong",
      "l": "12",
      "ca": 4,
      "area_name": "西工区"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080040",
      "en": "Yantan",
      "l": "12",
      "ca": 4,
      "area_name": "沿滩区"
    },
    {
      "parent_code": "090060",
      "a": "0",
      "area_code": "090060030",
      "en": "Licheng",
      "l": "12",
      "ca": 4,
      "area_name": "荔城区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030040",
      "en": "Tingri Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定日县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040180",
      "en": "Ruijin",
      "l": "15",
      "ca": 4,
      "area_name": "瑞金"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010130",
      "en": "Yunlin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云林县"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060090",
      "en": "Linzhou",
      "l": "15",
      "ca": 4,
      "area_name": "林州"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120040",
      "en": "Malipo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "麻栗坡县"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020040",
      "en": "Shuimogou",
      "l": "12",
      "ca": 4,
      "area_name": "水磨沟区"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020100",
      "en": "Xinjian",
      "l": "12",
      "ca": 4,
      "area_name": "新建区"
    },
    {
      "parent_code": "300170",
      "a": "0",
      "area_code": "300170030",
      "en": "Akqi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阿合奇县"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150050",
      "en": "Kaiping",
      "l": "15",
      "ca": 4,
      "area_name": "开平"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040040",
      "en": "Jimei",
      "l": "12",
      "ca": 4,
      "area_name": "集美区"
    },
    {
      "parent_code": "160140",
      "a": "0",
      "area_code": "160140010",
      "en": "Huma Co.",
      "l": "14",
      "ca": 4,
      "area_name": "呼玛县"
    },
    {
      "parent_code": "060080",
      "a": "0",
      "area_code": "060080040",
      "en": "Industrial Park",
      "l": "13",
      "ca": 4,
      "area_name": "工业园区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050050",
      "en": "Jishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "稷山县"
    },
    {
      "parent_code": "260070",
      "a": "0",
      "area_code": "260070050",
      "en": "Yu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盂县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210040",
      "en": "Jiulong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "九龙县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020050",
      "en": "Yuhua",
      "l": "12",
      "ca": 4,
      "area_name": "雨花区"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110090",
      "en": "Nanpi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南皮县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230050",
      "en": "Huili",
      "l": "15",
      "ca": 4,
      "area_name": "会理市"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090040",
      "en": "Tieshan",
      "l": "12",
      "ca": 4,
      "area_name": "铁山区"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110070",
      "en": "Tianchang",
      "l": "15",
      "ca": 4,
      "area_name": "天长"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040110",
      "en": "Quannan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "全南县"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030070",
      "en": "Yuyao",
      "l": "15",
      "ca": 4,
      "area_name": "余姚"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080010",
      "en": "Ziliujing",
      "l": "12",
      "ca": 4,
      "area_name": "自流井区"
    },
    {
      "parent_code": "110130",
      "a": "0",
      "area_code": "110130020",
      "en": "Pinggui",
      "l": "12",
      "ca": 4,
      "area_name": "平桂区"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020010",
      "en": "Tianshan",
      "l": "12",
      "ca": 4,
      "area_name": "天山区"
    },
    {
      "parent_code": "090060",
      "a": "0",
      "area_code": "090060040",
      "en": "Xiuyu",
      "l": "12",
      "ca": 4,
      "area_name": "秀屿区"
    },
    {
      "parent_code": "100050",
      "a": "0",
      "area_code": "100050020",
      "en": "Yongchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永昌县"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040030",
      "en": "Huli",
      "l": "12",
      "ca": 4,
      "area_name": "湖里区"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060060",
      "en": "Tangyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汤阴县"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070030",
      "en": "Qingshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清水县"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010160",
      "en": "Hualien Co.",
      "l": "14",
      "ca": 4,
      "area_name": "花莲县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120070",
      "en": "Laiyang",
      "l": "15",
      "ca": 4,
      "area_name": "莱阳"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050040",
      "en": "Wenxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "闻喜县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110080",
      "en": "Suning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肃宁县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210030",
      "en": "Danba Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丹巴县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110140",
      "en": "Yuanping",
      "l": "15",
      "ca": 4,
      "area_name": "原平"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230060",
      "en": "Huidong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "会东县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040120",
      "en": "Ningdu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁都县"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030060",
      "en": "Yinzhou",
      "l": "12",
      "ca": 4,
      "area_name": "鄞州区"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090050",
      "en": "Yangxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳新县"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110060",
      "en": "Fengyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤阳县"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060010",
      "en": "Xinfu",
      "l": "12",
      "ca": 4,
      "area_name": "新抚区"
    },
    {
      "parent_code": "280080",
      "a": "0",
      "area_code": "280080020",
      "en": "Gongjing",
      "l": "12",
      "ca": 4,
      "area_name": "贡井区"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010150",
      "en": "Taitung Co.",
      "l": "14",
      "ca": 4,
      "area_name": "台东县"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060070",
      "en": "Hua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "滑县"
    },
    {
      "parent_code": "110130",
      "a": "0",
      "area_code": "110130010",
      "en": "Babu",
      "l": "12",
      "ca": 4,
      "area_name": "八步区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020100",
      "en": "Jinzhou",
      "l": "15",
      "ca": 4,
      "area_name": "晋州"
    },
    {
      "parent_code": "090060",
      "a": "0",
      "area_code": "090060050",
      "en": "Xianyou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仙游县"
    },
    {
      "parent_code": "100050",
      "a": "0",
      "area_code": "100050010",
      "en": "Jinchuan",
      "l": "12",
      "ca": 4,
      "area_name": "金川区"
    },
    {
      "parent_code": "050150",
      "a": "0",
      "area_code": "050150070",
      "en": "Enping",
      "l": "15",
      "ca": 4,
      "area_name": "恩平"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070040",
      "en": "Qinan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "秦安县"
    },
    {
      "parent_code": "300020",
      "a": "0",
      "area_code": "300020020",
      "en": "Saybagh",
      "l": "12",
      "ca": 4,
      "area_name": "沙依巴克区"
    },
    {
      "parent_code": "200110",
      "a": "0",
      "area_code": "200110020",
      "en": "Fenyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "分宜县"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040020",
      "en": "Haicang",
      "l": "12",
      "ca": 4,
      "area_name": "海沧区"
    },
    {
      "parent_code": "300170",
      "a": "0",
      "area_code": "300170010",
      "en": "Artux",
      "l": "15",
      "ca": 4,
      "area_name": "阿图什"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050030",
      "en": "Wanrong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "万荣县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120080",
      "en": "Laizhou",
      "l": "15",
      "ca": 4,
      "area_name": "莱州"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110070",
      "en": "Yanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐山县"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030110",
      "en": "Jianchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "剑川县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210020",
      "en": "Luding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泸定县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110130",
      "en": "Pianguan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "偏关县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230070",
      "en": "Ningnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁南县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040130",
      "en": "Yudu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "于都县"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020010",
      "en": "Chengzhong",
      "l": "12",
      "ca": 4,
      "area_name": "城中区"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020030",
      "en": "Tianxin",
      "l": "12",
      "ca": 4,
      "area_name": "天心区"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030090",
      "en": "Fenghua",
      "l": "12",
      "ca": 4,
      "area_name": "奉化区"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060020",
      "en": "Dongzhou",
      "l": "12",
      "ca": 4,
      "area_name": "东洲区"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100020",
      "en": "Fengqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤庆县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060110",
      "en": "Huayin",
      "l": "15",
      "ca": 4,
      "area_name": "华阴"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070050",
      "en": "Gangu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘谷县"
    },
    {
      "parent_code": "090040",
      "a": "0",
      "area_code": "090040010",
      "en": "Siming",
      "l": "12",
      "ca": 4,
      "area_name": "思明区"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060040",
      "en": "Long'an",
      "l": "12",
      "ca": 4,
      "area_name": "龙安区"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090020",
      "en": "Xisaishan",
      "l": "12",
      "ca": 4,
      "area_name": "西塞山区"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120070",
      "en": "Guangnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广南县"
    },
    {
      "parent_code": "250100",
      "a": "0",
      "area_code": "250100040",
      "en": "Rushan",
      "l": "15",
      "ca": 4,
      "area_name": "乳山"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030090",
      "en": "Bainang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "白朗县"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050020",
      "en": "Linyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临猗县"
    },
    {
      "parent_code": "140110",
      "a": "0",
      "area_code": "140110060",
      "en": "Haixing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "海兴县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230080",
      "en": "Puge Co.",
      "l": "14",
      "ca": 4,
      "area_name": "普格县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020040",
      "en": "Kaifu",
      "l": "12",
      "ca": 4,
      "area_name": "开福区"
    },
    {
      "parent_code": "260050",
      "a": "0",
      "area_code": "260050010",
      "en": "Saline",
      "l": "12",
      "ca": 4,
      "area_name": "盐湖区"
    },
    {
      "parent_code": "310030",
      "a": "0",
      "area_code": "310030100",
      "en": "Eryuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洱源县"
    },
    {
      "parent_code": "260110",
      "a": "0",
      "area_code": "260110120",
      "en": "Baode Co.",
      "l": "14",
      "ca": 4,
      "area_name": "保德县"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110080",
      "en": "Mingguang",
      "l": "15",
      "ca": 4,
      "area_name": "明光"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020100",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "070030",
      "a": "0",
      "area_code": "070030080",
      "en": "Cixi",
      "l": "15",
      "ca": 4,
      "area_name": "慈溪"
    },
    {
      "parent_code": "240020",
      "a": "0",
      "area_code": "240020020",
      "en": "Chengdong",
      "l": "12",
      "ca": 4,
      "area_name": "城东区"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210010",
      "en": "Kangding",
      "l": "15",
      "ca": 4,
      "area_name": "康定"
    },
    {
      "parent_code": "210060",
      "a": "0",
      "area_code": "210060030",
      "en": "Wanghua",
      "l": "12",
      "ca": 4,
      "area_name": "望花区"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040140",
      "en": "Xingguo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴国县"
    },
    {
      "parent_code": "310100",
      "a": "0",
      "area_code": "310100010",
      "en": "Linxiang",
      "l": "12",
      "ca": 4,
      "area_name": "临翔区"
    },
    {
      "parent_code": "310120",
      "a": "0",
      "area_code": "310120080",
      "en": "Fu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富宁县"
    },
    {
      "parent_code": "100070",
      "a": "0",
      "area_code": "100070060",
      "en": "Wushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武山县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060100",
      "en": "Hancheng Co.",
      "l": "15",
      "ca": 4,
      "area_name": "韩城"
    },
    {
      "parent_code": "250100",
      "a": "0",
      "area_code": "250100030",
      "en": "Rongcheng",
      "l": "15",
      "ca": 4,
      "area_name": "荣成"
    },
    {
      "parent_code": "340",
      "a": "1",
      "area_code": "340010170",
      "en": "Penghu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "澎湖县"
    },
    {
      "parent_code": "150060",
      "a": "0",
      "area_code": "150060050",
      "en": "Anyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安阳县"
    },
    {
      "parent_code": "170090",
      "a": "0",
      "area_code": "170090030",
      "en": "Xialu",
      "l": "12",
      "ca": 4,
      "area_name": "下陆区"
    },
    {
      "parent_code": "290030",
      "a": "0",
      "area_code": "290030080",
      "en": "Xaitongmoin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "谢通门县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010020",
      "en": "Hedong",
      "l": "12",
      "ca": 4,
      "area_name": "河东区"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130060",
      "en": "Mingshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "明水县"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080050",
      "en": "Donggang",
      "l": "15",
      "ca": 4,
      "area_name": "东港"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090080",
      "en": "Miluo",
      "l": "15",
      "ca": 4,
      "area_name": "汨罗"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180040",
      "en": "Guangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "光山县"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030010",
      "en": "Kashi",
      "l": "15",
      "ca": 4,
      "area_name": "喀什市"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080030",
      "en": "Minle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "民乐县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210120",
      "en": "Shiqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石渠县"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110030",
      "en": "Lai'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "来安县"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020130",
      "en": "Xingyang",
      "l": "15",
      "ca": 4,
      "area_name": "荥阳"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110050",
      "en": "Longjing",
      "l": "15",
      "ca": 4,
      "area_name": "龙井"
    },
    {
      "parent_code": "240060",
      "a": "0",
      "area_code": "240060040",
      "en": "Henan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "河南县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020010",
      "en": "Chaoyang",
      "l": "12",
      "ca": 4,
      "area_name": "朝阳区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040040",
      "en": "Sanyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三原县"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090060",
      "en": "Pinghu",
      "l": "15",
      "ca": 4,
      "area_name": "平湖"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040010",
      "en": "Xiangyang",
      "l": "12",
      "ca": 4,
      "area_name": "向阳区"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120050",
      "en": "Qitai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "奇台县"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150010",
      "en": "Shuangta",
      "l": "12",
      "ca": 4,
      "area_name": "双塔区"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100020",
      "en": "Zhuozi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "卓资县"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040070",
      "en": "Guzhen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "固镇县"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090020",
      "en": "Pinglu",
      "l": "12",
      "ca": 4,
      "area_name": "平鲁区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100080",
      "en": "Renze",
      "l": "12",
      "ca": 4,
      "area_name": "任泽区"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030070",
      "en": "Tumed Banner",
      "l": "16",
      "ca": 4,
      "area_name": "土右旗"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010300",
      "en": "Liangping",
      "l": "12",
      "ca": 4,
      "area_name": "梁平区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070010",
      "en": "Seni",
      "l": "12",
      "ca": 4,
      "area_name": "色尼区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050100",
      "en": "Wufeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五峰县"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130070",
      "en": "Suiling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥棱县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050090",
      "en": "Zhaosu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昭苏县"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050110",
      "en": "Yidu",
      "l": "15",
      "ca": 4,
      "area_name": "宜都"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080040",
      "en": "Kuandian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宽甸县"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090070",
      "en": "Pingjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平江县"
    },
    {
      "parent_code": "110030",
      "a": "0",
      "area_code": "110030040",
      "en": "Hepu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "合浦县"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080040",
      "en": "Linze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临泽县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010030",
      "en": "Hexi",
      "l": "12",
      "ca": 4,
      "area_name": "河西区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030020",
      "en": "Shufu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "疏附县"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090070",
      "en": "Tongxiang",
      "l": "15",
      "ca": 4,
      "area_name": "桐乡"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010010",
      "en": "Our Lady Fatima Parish",
      "l": "12",
      "ca": 4,
      "area_name": "花地玛堂区"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120040",
      "en": "Manas Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玛纳斯县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210110",
      "en": "Baiyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "白玉县"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110020",
      "en": "Nanqiao",
      "l": "12",
      "ca": 4,
      "area_name": "南谯区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020120",
      "en": "Gongyi",
      "l": "15",
      "ca": 4,
      "area_name": "巩义"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110060",
      "en": "Helong",
      "l": "15",
      "ca": 4,
      "area_name": "和龙"
    },
    {
      "parent_code": "240060",
      "a": "0",
      "area_code": "240060030",
      "en": "Zeku Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泽库县"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040050",
      "en": "Jingyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泾阳县"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090010",
      "en": "Jiefang",
      "l": "12",
      "ca": 4,
      "area_name": "解放区"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040020",
      "en": "Qianjin",
      "l": "12",
      "ca": 4,
      "area_name": "前进区"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150020",
      "en": "Longcheng",
      "l": "12",
      "ca": 4,
      "area_name": "龙城区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060090",
      "en": "Yi'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "依安县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100030",
      "en": "Hude Co.",
      "l": "14",
      "ca": 4,
      "area_name": "化德县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100090",
      "en": "Nanhe",
      "l": "12",
      "ca": 4,
      "area_name": "南和区"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030080",
      "en": "Guyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "固阳县"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180030",
      "en": "Luoshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗山县"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090010",
      "en": "Shuocheng",
      "l": "12",
      "ca": 4,
      "area_name": "朔城区"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070120",
      "en": "Laixi",
      "l": "15",
      "ca": 4,
      "area_name": "莱西"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020030",
      "en": "Erdao",
      "l": "12",
      "ca": 4,
      "area_name": "二道区"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050120",
      "en": "Dangyang",
      "l": "15",
      "ca": 4,
      "area_name": "当阳"
    },
    {
      "parent_code": "050200",
      "a": "0",
      "area_code": "050200010",
      "en": "Chengqu",
      "l": "12",
      "ca": 4,
      "area_name": "城区"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070010",
      "en": "Ziyang",
      "l": "12",
      "ca": 4,
      "area_name": "资阳区"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020130",
      "en": "Gujiao",
      "l": "15",
      "ca": 4,
      "area_name": "古交"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080050",
      "en": "Gaotai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高台县"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180060",
      "en": "Shangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "商城县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010040",
      "en": "Nankai",
      "l": "12",
      "ca": 4,
      "area_name": "南开区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020150",
      "en": "Xinzheng",
      "l": "15",
      "ca": 4,
      "area_name": "新郑"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110030",
      "en": "Dunhua",
      "l": "15",
      "ca": 4,
      "area_name": "敦化"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020010",
      "en": "Luyang",
      "l": "12",
      "ca": 4,
      "area_name": "庐阳区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040020",
      "en": "Yangling",
      "l": "12",
      "ca": 4,
      "area_name": "杨陵区"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110050",
      "en": "Dingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定远县"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120030",
      "en": "Hutubi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "呼图壁县"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130040",
      "en": "Qinggang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青冈县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210100",
      "en": "Dege Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德格县"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120090",
      "en": "Xianghuang Banner",
      "l": "16",
      "ca": 4,
      "area_name": "镶黄旗"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010180",
      "en": "Islands",
      "l": "12",
      "ca": 4,
      "area_name": "离岛区"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040030",
      "en": "Dongfeng",
      "l": "12",
      "ca": 4,
      "area_name": "东风区"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090020",
      "en": "Zhongzhan",
      "l": "12",
      "ca": 4,
      "area_name": "中站区"
    },
    {
      "parent_code": "110100",
      "a": "0",
      "area_code": "110100020",
      "en": "Fangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "防城区"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090040",
      "en": "Ying Co.",
      "l": "14",
      "ca": 4,
      "area_name": "应县"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070030",
      "en": "Biru Co.",
      "l": "14",
      "ca": 4,
      "area_name": "比如县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050080",
      "en": "Xinyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新源县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100060",
      "en": "Baixiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柏乡县"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030050",
      "en": "Bayan'obo",
      "l": "12",
      "ca": 4,
      "area_name": "白云矿区"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090090",
      "en": "Linxiang",
      "l": "15",
      "ca": 4,
      "area_name": "临湘"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080060",
      "en": "Shandan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "山丹县"
    },
    {
      "parent_code": "170050",
      "a": "0",
      "area_code": "170050130",
      "en": "Zhijiang",
      "l": "15",
      "ca": 4,
      "area_name": "枝江"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070020",
      "en": "Heshan",
      "l": "12",
      "ca": 4,
      "area_name": "赫山区"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010050",
      "en": "Hebei",
      "l": "12",
      "ca": 4,
      "area_name": "河北区"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180050",
      "en": "Xin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新县"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080060",
      "en": "Fengcheng",
      "l": "15",
      "ca": 4,
      "area_name": "凤城"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120020",
      "en": "Fukang",
      "l": "15",
      "ca": 4,
      "area_name": "阜康"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020140",
      "en": "Xinmi",
      "l": "15",
      "ca": 4,
      "area_name": "新密"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020020",
      "en": "Yaohai",
      "l": "12",
      "ca": 4,
      "area_name": "瑶海区"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110040",
      "en": "Hunchun",
      "l": "15",
      "ca": 4,
      "area_name": "珲春"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040030",
      "en": "Weicheng",
      "l": "12",
      "ca": 4,
      "area_name": "渭城区"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040100",
      "en": "Dunnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定南县"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110040",
      "en": "Quanjiao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "全椒县"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130050",
      "en": "Qing'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庆安县"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150010",
      "en": "Hezuo",
      "l": "15",
      "ca": 4,
      "area_name": "合作"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020020",
      "en": "Kuancheng",
      "l": "12",
      "ca": 4,
      "area_name": "宽城区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120080",
      "en": "Taibus Banner",
      "l": "16",
      "ca": 4,
      "area_name": "太仆寺旗"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040040",
      "en": "Jiao",
      "l": "12",
      "ca": 4,
      "area_name": "郊区"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010170",
      "en": "Central And Western",
      "l": "12",
      "ca": 4,
      "area_name": "中西区"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100010",
      "en": "Jining",
      "l": "12",
      "ca": 4,
      "area_name": "集宁区"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090030",
      "en": "Macun",
      "l": "12",
      "ca": 4,
      "area_name": "马村区"
    },
    {
      "parent_code": "110100",
      "a": "0",
      "area_code": "110100010",
      "en": "Gangkou",
      "l": "12",
      "ca": 4,
      "area_name": "港口区"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090030",
      "en": "Shanyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "山阴县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100070",
      "en": "Longyao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆尧县"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030060",
      "en": "Jiuyuan",
      "l": "12",
      "ca": 4,
      "area_name": "九原区"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050070",
      "en": "Gongliu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巩留县"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070020",
      "en": "Lhari Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉黎县"
    },
    {
      "parent_code": "160110",
      "a": "0",
      "area_code": "160110010",
      "en": "Xinxing",
      "l": "12",
      "ca": 4,
      "area_name": "新兴区"
    },
    {
      "parent_code": "050220",
      "a": "0",
      "area_code": "050220040",
      "en": "Huilai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "惠来县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010340",
      "en": "Fengjie Co.",
      "l": "14",
      "ca": 4,
      "area_name": "奉节县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020050",
      "en": "Luyuan",
      "l": "12",
      "ca": 4,
      "area_name": "绿园区"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010180",
      "en": "Fengxian",
      "l": "12",
      "ca": 4,
      "area_name": "奉贤区"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090060",
      "en": "Huairen",
      "l": "15",
      "ca": 4,
      "area_name": "怀仁市"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020030",
      "en": "Shushan",
      "l": "12",
      "ca": 4,
      "area_name": "蜀山区"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090040",
      "en": "Yueyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岳阳县"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020110",
      "en": "Yangqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳曲县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110030",
      "en": "Fugu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "府谷县"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150020",
      "en": "Lintan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临潭县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030090",
      "en": "Tang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "唐县"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070010",
      "en": "Jiaojiang",
      "l": "12",
      "ca": 4,
      "area_name": "椒江区"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060090",
      "en": "Fuping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富平县"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110010",
      "en": "Yanji",
      "l": "15",
      "ca": 4,
      "area_name": "延吉"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080010",
      "en": "Yuanbao",
      "l": "12",
      "ca": 4,
      "area_name": "元宝区"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060120",
      "en": "Yongxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永新县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060060",
      "en": "Nianzishan",
      "l": "12",
      "ca": 4,
      "area_name": "碾子山区"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100200",
      "en": "Fenglin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丰林县"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150050",
      "en": "Kazuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "喀左县"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120070",
      "en": "West Ujimqin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "西乌旗"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090020",
      "en": "Xiuzhou",
      "l": "12",
      "ca": 4,
      "area_name": "秀洲区"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090040",
      "en": "Shanyang",
      "l": "12",
      "ca": 4,
      "area_name": "山阳区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040030",
      "en": "Wanjiang",
      "l": "12",
      "ca": 4,
      "area_name": "万江区"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010040",
      "en": "Sé Freguesias",
      "l": "12",
      "ca": 4,
      "area_name": "大堂区"
    },
    {
      "parent_code": "050060",
      "a": "0",
      "area_code": "050060040",
      "en": "Huidong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "惠东县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050060",
      "en": "Huocheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "霍城县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060110",
      "en": "Anfu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安福县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020040",
      "en": "Nanguan",
      "l": "12",
      "ca": 4,
      "area_name": "南关区"
    },
    {
      "parent_code": "050220",
      "a": "0",
      "area_code": "050220050",
      "en": "Puning",
      "l": "15",
      "ca": 4,
      "area_name": "普宁"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010330",
      "en": "Wushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巫山县"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020120",
      "en": "Loufan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "娄烦县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020040",
      "en": "Baohe",
      "l": "12",
      "ca": 4,
      "area_name": "包河区"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090030",
      "en": "Junshan",
      "l": "12",
      "ca": 4,
      "area_name": "君山区"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110040",
      "en": "Jingbian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "靖边县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060080",
      "en": "Baishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "白水县"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150030",
      "en": "Zhuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "卓尼县"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110020",
      "en": "Tumen",
      "l": "15",
      "ca": 4,
      "area_name": "图们"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040010",
      "en": "Qindu",
      "l": "12",
      "ca": 4,
      "area_name": "秦都区"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090030",
      "en": "Jiashan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉善县"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150060",
      "en": "Beipiao",
      "l": "15",
      "ca": 4,
      "area_name": "北票"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120060",
      "en": "East Ujimqin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "东乌旗"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090050",
      "en": "Xiuwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "修武县"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010050",
      "en": "Freguesia de S．Lourenco",
      "l": "12",
      "ca": 4,
      "area_name": "风顺堂区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040020",
      "en": "Dongcheng",
      "l": "12",
      "ca": 4,
      "area_name": "东城区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060050",
      "en": "Fularji",
      "l": "12",
      "ca": 4,
      "area_name": "富拉尔基区"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100210",
      "en": "Jinlin",
      "l": "12",
      "ca": 4,
      "area_name": "金林区"
    },
    {
      "parent_code": "050060",
      "a": "0",
      "area_code": "050060050",
      "en": "Longmen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙门县"
    },
    {
      "parent_code": "260090",
      "a": "0",
      "area_code": "260090050",
      "en": "Youyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "右玉县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050050",
      "en": "Qapqal Co.",
      "l": "14",
      "ca": 4,
      "area_name": "察布查尔县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110100",
      "en": "Honghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "红河县"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080030",
      "en": "Zhen'an",
      "l": "12",
      "ca": 4,
      "area_name": "振安区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010320",
      "en": "Wuxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巫溪县"
    },
    {
      "parent_code": "160110",
      "a": "0",
      "area_code": "160110030",
      "en": "Qiezihe",
      "l": "12",
      "ca": 4,
      "area_name": "茄子河区"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050100",
      "en": "Qufu",
      "l": "15",
      "ca": 4,
      "area_name": "曲阜"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130080",
      "en": "Anda",
      "l": "15",
      "ca": 4,
      "area_name": "安达"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020050",
      "en": "Changfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长丰县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020070",
      "en": "Jingyue",
      "l": "13",
      "ca": 4,
      "area_name": "净月区"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090060",
      "en": "Xiangyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "湘阴县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110010",
      "en": "Yuyang",
      "l": "12",
      "ca": 4,
      "area_name": "榆阳区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030070",
      "en": "Fuping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阜平县"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080010",
      "en": "Ganzhou",
      "l": "12",
      "ca": 4,
      "area_name": "甘州区"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150040",
      "en": "Zhouqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "舟曲县"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090060",
      "en": "Bo'ai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博爱县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060070",
      "en": "Pucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒲城县"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090040",
      "en": "Haiyan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "海盐县"
    },
    {
      "parent_code": "050220",
      "a": "0",
      "area_code": "050220020",
      "en": "Jiedong",
      "l": "12",
      "ca": 4,
      "area_name": "揭东区"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110010",
      "en": "Chikan",
      "l": "12",
      "ca": 4,
      "area_name": "赤坎区"
    },
    {
      "parent_code": "080110",
      "a": "0",
      "area_code": "080110010",
      "en": "Langya",
      "l": "12",
      "ca": 4,
      "area_name": "琅琊区"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040020",
      "en": "Delingha",
      "l": "15",
      "ca": 4,
      "area_name": "德令哈"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060080",
      "en": "Longjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙江县"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150030",
      "en": "Chaoyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "朝阳县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030090",
      "en": "Wucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武城县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040010",
      "en": "Nancheng",
      "l": "12",
      "ca": 4,
      "area_name": "南城区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120050",
      "en": "Sonid Right Banner",
      "l": "16",
      "ca": 4,
      "area_name": "西苏旗"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010020",
      "en": "St. Anthony Parish",
      "l": "12",
      "ca": 4,
      "area_name": "花王堂区"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100080",
      "en": "Yixing",
      "l": "15",
      "ca": 4,
      "area_name": "宜兴"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120070",
      "en": "Mori Co.",
      "l": "14",
      "ca": 4,
      "area_name": "木垒县"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180020",
      "en": "Pingqiao",
      "l": "12",
      "ca": 4,
      "area_name": "平桥区"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030090",
      "en": "Darhan Banner",
      "l": "16",
      "ca": 4,
      "area_name": "达茂旗"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050040",
      "en": "Yining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "伊宁县"
    },
    {
      "parent_code": "110120",
      "a": "0",
      "area_code": "110120030",
      "en": "Lingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵山县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010010",
      "en": "Heping",
      "l": "12",
      "ca": 4,
      "area_name": "和平区"
    },
    {
      "parent_code": "210080",
      "a": "0",
      "area_code": "210080020",
      "en": "Zhenxing",
      "l": "12",
      "ca": 4,
      "area_name": "振兴区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010310",
      "en": "Kaizhou",
      "l": "12",
      "ca": 4,
      "area_name": "开州区"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130090",
      "en": "Zhaodong",
      "l": "15",
      "ca": 4,
      "area_name": "肇东"
    },
    {
      "parent_code": "160110",
      "a": "0",
      "area_code": "160110020",
      "en": "Taoshan",
      "l": "12",
      "ca": 4,
      "area_name": "桃山区"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050110",
      "en": "Zoucheng",
      "l": "15",
      "ca": 4,
      "area_name": "邹城"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020060",
      "en": "Shuangyang",
      "l": "12",
      "ca": 4,
      "area_name": "双阳区"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020060",
      "en": "Feidong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肥东县"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090050",
      "en": "Huarong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "华容县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110020",
      "en": "Hengshan",
      "l": "12",
      "ca": 4,
      "area_name": "横山区"
    },
    {
      "parent_code": "100080",
      "a": "0",
      "area_code": "100080020",
      "en": "Sunan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肃南县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030080",
      "en": "Dingxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定兴县"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020100",
      "en": "Qingxu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清徐县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060060",
      "en": "Chengcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "澄城县"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150050",
      "en": "Diebu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "迭部县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010190",
      "en": "Chongming",
      "l": "12",
      "ca": 4,
      "area_name": "崇明区"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090070",
      "en": "Wuzhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武陟县"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110020",
      "en": "Xiashan",
      "l": "12",
      "ca": 4,
      "area_name": "霞山区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040170",
      "en": "Huozhou",
      "l": "15",
      "ca": 4,
      "area_name": "霍州"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060130",
      "en": "Jinggangshan",
      "l": "15",
      "ca": 4,
      "area_name": "井冈山"
    },
    {
      "parent_code": "050220",
      "a": "0",
      "area_code": "050220030",
      "en": "Jiexi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "揭西县"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090050",
      "en": "Haining",
      "l": "15",
      "ca": 4,
      "area_name": "海宁"
    },
    {
      "parent_code": "240040",
      "a": "0",
      "area_code": "240040010",
      "en": "Golmud",
      "l": "15",
      "ca": 4,
      "area_name": "格尔木"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150040",
      "en": "Jianping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建平县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060070",
      "en": "Meilisi",
      "l": "12",
      "ca": 4,
      "area_name": "梅里斯区"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120060",
      "en": "Jimsar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉木萨尔县"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010030",
      "en": "St. Lazarus Parish",
      "l": "12",
      "ca": 4,
      "area_name": "望德堂区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120040",
      "en": "Sonid Left Banner",
      "l": "16",
      "ca": 4,
      "area_name": "东苏旗"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100090",
      "en": "Jiangyin",
      "l": "15",
      "ca": 4,
      "area_name": "江阴"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180010",
      "en": "Shihe",
      "l": "12",
      "ca": 4,
      "area_name": "浉河区"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050030",
      "en": "Korgas",
      "l": "15",
      "ca": 4,
      "area_name": "霍尔果斯"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030080",
      "en": "Xiajin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "夏津县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140010",
      "en": "Hecheng",
      "l": "12",
      "ca": 4,
      "area_name": "鹤城区"
    },
    {
      "parent_code": "110120",
      "a": "0",
      "area_code": "110120040",
      "en": "Pubei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浦北县"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050080",
      "en": "Uxin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "乌审旗"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160030",
      "en": "Shangcai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上蔡县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020070",
      "en": "Feixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肥西县"
    },
    {
      "parent_code": "080130",
      "a": "0",
      "area_code": "080130040",
      "en": "Lingbi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵璧县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020030",
      "en": "Beilin",
      "l": "12",
      "ca": 4,
      "area_name": "碑林区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010380",
      "en": "Pengshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彭水县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020090",
      "en": "Jingkai",
      "l": "13",
      "ca": 4,
      "area_name": "经开区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050060",
      "en": "Liucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柳城县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010120",
      "en": "Wan Chai",
      "l": "12",
      "ca": 4,
      "area_name": "湾仔区"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110070",
      "en": "Mizhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "米脂县"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080050",
      "en": "Jiuzhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "久治县"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110030",
      "en": "Potou",
      "l": "12",
      "ca": 4,
      "area_name": "坡头区"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070050",
      "en": "Tiantai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天台县"
    },
    {
      "parent_code": "130040",
      "a": "0",
      "area_code": "130040010",
      "en": "Xisha",
      "l": "12",
      "ca": 4,
      "area_name": "西沙"
    },
    {
      "parent_code": "280190",
      "a": "0",
      "area_code": "280190030",
      "en": "Lezhi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乐至县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020120",
      "en": "Xifeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "息烽县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020010",
      "en": "Daoli",
      "l": "12",
      "ca": 4,
      "area_name": "道里区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040070",
      "en": "Mayong",
      "l": "14",
      "ca": 4,
      "area_name": "麻涌镇"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100060",
      "en": "Binhu",
      "l": "12",
      "ca": 4,
      "area_name": "滨湖区"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030110",
      "en": "Emeishan",
      "l": "15",
      "ca": 4,
      "area_name": "峨眉山"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070090",
      "en": "Baqen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴青县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090120",
      "en": "Yangyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳原县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050100",
      "en": "She Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涉县"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040090",
      "en": "Fujin",
      "l": "15",
      "ca": 4,
      "area_name": "富锦"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050020",
      "en": "Kuitun",
      "l": "15",
      "ca": 4,
      "area_name": "奎屯"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140020",
      "en": "Chinese Co.",
      "l": "14",
      "ca": 4,
      "area_name": "中方县"
    },
    {
      "parent_code": "080130",
      "a": "0",
      "area_code": "080130050",
      "en": "Si Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泗县"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160040",
      "en": "Pingyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平舆县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020020",
      "en": "Xincheng",
      "l": "12",
      "ca": 4,
      "area_name": "新城区"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050070",
      "en": "Hanggin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "杭锦旗"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110040",
      "en": "Mazhang",
      "l": "12",
      "ca": 4,
      "area_name": "麻章区"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020080",
      "en": "Xinzhan",
      "l": "13",
      "ca": 4,
      "area_name": "新站区"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020080",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010370",
      "en": "Shizhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石柱县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020020",
      "en": "Nangang",
      "l": "12",
      "ca": 4,
      "area_name": "南岗区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050070",
      "en": "Luzhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鹿寨县"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070040",
      "en": "Sanmen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三门县"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080060",
      "en": "Maduo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玛多县"
    },
    {
      "parent_code": "050170",
      "a": "0",
      "area_code": "050170100",
      "en": "Nanxiong",
      "l": "15",
      "ca": 4,
      "area_name": "南雄"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010110",
      "en": "Tai Po",
      "l": "12",
      "ca": 4,
      "area_name": "大埔区"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110080",
      "en": "Jia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "佳县"
    },
    {
      "parent_code": "160110",
      "a": "0",
      "area_code": "160110040",
      "en": "Boli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "勃利县"
    },
    {
      "parent_code": "050220",
      "a": "0",
      "area_code": "050220010",
      "en": "Rongcheng",
      "l": "12",
      "ca": 4,
      "area_name": "榕城区"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020110",
      "en": "Xiuwen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "修文县"
    },
    {
      "parent_code": "280190",
      "a": "0",
      "area_code": "280190020",
      "en": "Anyue Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安岳县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040060",
      "en": "Humen",
      "l": "14",
      "ca": 4,
      "area_name": "虎门镇"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090110",
      "en": "Yu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蔚县"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100070",
      "en": "Xinwu",
      "l": "12",
      "ca": 4,
      "area_name": "新吴区"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050010",
      "en": "Nedong",
      "l": "12",
      "ca": 4,
      "area_name": "乃东区"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050010",
      "en": "Yining",
      "l": "15",
      "ca": 4,
      "area_name": "伊宁"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070080",
      "en": "Baingoin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "班戈县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140030",
      "en": "Yuanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沅陵县"
    },
    {
      "parent_code": "080020",
      "a": "0",
      "area_code": "080020090",
      "en": "Jingkai",
      "l": "13",
      "ca": 4,
      "area_name": "经开区"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060100",
      "en": "Wan'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "万安县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020050",
      "en": "Baqiao",
      "l": "12",
      "ca": 4,
      "area_name": "灞桥区"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050060",
      "en": "Otog Banner",
      "l": "16",
      "ca": 4,
      "area_name": "鄂托克旗"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110050",
      "en": "Suixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "遂溪县"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160050",
      "en": "Zhengyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "正阳县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010360",
      "en": "Zhong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "忠县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110050",
      "en": "Dingbian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "定边县"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080030",
      "en": "Gande Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘德县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010100",
      "en": "Sai Kung",
      "l": "12",
      "ca": 4,
      "area_name": "西贡区"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070030",
      "en": "Luqiao",
      "l": "12",
      "ca": 4,
      "area_name": "路桥区"
    },
    {
      "parent_code": "080130",
      "a": "0",
      "area_code": "080130020",
      "en": "Dangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "砀山县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020100",
      "en": "Kaiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "开阳县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090140",
      "en": "Huailai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "怀来县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040050",
      "en": "Shilong",
      "l": "14",
      "ca": 4,
      "area_name": "石龙镇"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100040",
      "en": "Xishan",
      "l": "12",
      "ca": 4,
      "area_name": "锡山区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050040",
      "en": "Liubei",
      "l": "12",
      "ca": 4,
      "area_name": "柳北区"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050020",
      "en": "Zhanang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "扎囊县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100080",
      "en": "Qahar Right Middle Banner",
      "l": "16",
      "ca": 4,
      "area_name": "察右中旗"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140040",
      "en": "Chenxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "辰溪县"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020040",
      "en": "Yanta",
      "l": "12",
      "ca": 4,
      "area_name": "雁塔区"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110060",
      "en": "Xuwen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "徐闻县"
    },
    {
      "parent_code": "080130",
      "a": "0",
      "area_code": "080130030",
      "en": "Xiao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "萧县"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160060",
      "en": "Queshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "确山县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010350",
      "en": "Yunyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云阳县"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070020",
      "en": "Huangyan",
      "l": "12",
      "ca": 4,
      "area_name": "黄岩区"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080040",
      "en": "Dari Co.",
      "l": "14",
      "ca": 4,
      "area_name": "达日县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110060",
      "en": "Suide Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥德县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020040",
      "en": "Pingfang",
      "l": "12",
      "ca": 4,
      "area_name": "平房区"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140050",
      "en": "Xupu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "溆浦县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040040",
      "en": "Guancheng",
      "l": "12",
      "ca": 4,
      "area_name": "莞城区"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100050",
      "en": "Huishan",
      "l": "12",
      "ca": 4,
      "area_name": "惠山区"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120100",
      "en": "Zhaoyuan",
      "l": "15",
      "ca": 4,
      "area_name": "招远"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090130",
      "en": "Huai'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "怀安县"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050050",
      "en": "Liujiang",
      "l": "12",
      "ca": 4,
      "area_name": "柳江区"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050050",
      "en": "Otog Front Banner",
      "l": "16",
      "ca": 4,
      "area_name": "鄂托克前旗"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100090",
      "en": "Qahar Right Rear Banner",
      "l": "16",
      "ca": 4,
      "area_name": "察右后旗"
    },
    {
      "parent_code": "290050",
      "a": "0",
      "area_code": "290050030",
      "en": "Gonggar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贡嘎县"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180080",
      "en": "Huangchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "潢川县"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110070",
      "en": "Lianjiang",
      "l": "15",
      "ca": 4,
      "area_name": "廉江"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070090",
      "en": "Yuhuan",
      "l": "15",
      "ca": 4,
      "area_name": "玉环"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070030",
      "en": "Nan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南县"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030030",
      "en": "Qingshan",
      "l": "12",
      "ca": 4,
      "area_name": "青山区"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040080",
      "en": "Yongshou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永寿县"
    },
    {
      "parent_code": "300140",
      "a": "0",
      "area_code": "300140020",
      "en": "Shanshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鄯善县"
    },
    {
      "parent_code": "030",
      "a": "0",
      "area_code": "030010060",
      "en": "Hongqiao",
      "l": "12",
      "ca": 4,
      "area_name": "红桥区"
    },
    {
      "parent_code": "300120",
      "a": "0",
      "area_code": "300120010",
      "en": "Changji",
      "l": "15",
      "ca": 4,
      "area_name": "昌吉市"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020170",
      "en": "Zhongmu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "中牟县"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020090",
      "en": "Fumin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富民县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140060",
      "en": "Huitong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "会同县"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090160",
      "en": "Chicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "赤城县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100060",
      "en": "Liangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凉城县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010160",
      "en": "Tsuen Wan",
      "l": "12",
      "ca": 4,
      "area_name": "荃湾区"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040050",
      "en": "Huanan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桦南县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020020",
      "en": "Tianhe",
      "l": "12",
      "ca": 4,
      "area_name": "天河区"
    },
    {
      "parent_code": "110030",
      "a": "0",
      "area_code": "110030010",
      "en": "Haicheng",
      "l": "12",
      "ca": 4,
      "area_name": "海城区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070050",
      "en": "Amdo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安多县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050020",
      "en": "Dingcheng",
      "l": "12",
      "ca": 4,
      "area_name": "鼎城区"
    },
    {
      "parent_code": "110100",
      "a": "0",
      "area_code": "110100040",
      "en": "Dongxing",
      "l": "15",
      "ca": 4,
      "area_name": "东兴"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070040",
      "en": "Taojiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桃江县"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040090",
      "en": "Changwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长武县"
    },
    {
      "parent_code": "300140",
      "a": "0",
      "area_code": "300140030",
      "en": "Toksun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "托克逊县"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180070",
      "en": "Gushi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "固始县"
    },
    {
      "parent_code": "070050",
      "a": "0",
      "area_code": "070050010",
      "en": "Yuecheng",
      "l": "12",
      "ca": 4,
      "area_name": "越城区"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110080",
      "en": "Leizhou",
      "l": "15",
      "ca": 4,
      "area_name": "雷州"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020080",
      "en": "Jinning",
      "l": "12",
      "ca": 4,
      "area_name": "晋宁区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020160",
      "en": "Dengfeng",
      "l": "15",
      "ca": 4,
      "area_name": "登封"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020080",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "080130",
      "a": "0",
      "area_code": "080130010",
      "en": "Yongqiao",
      "l": "12",
      "ca": 4,
      "area_name": "埇桥区"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070080",
      "en": "Linghai",
      "l": "15",
      "ca": 4,
      "area_name": "临海"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090150",
      "en": "Zhuolu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涿鹿县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090010",
      "en": "Simao",
      "l": "12",
      "ca": 4,
      "area_name": "思茅区"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140070",
      "en": "Mayang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "麻阳县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100070",
      "en": "Chahar Right Front Banner",
      "l": "16",
      "ca": 4,
      "area_name": "察右前旗"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040060",
      "en": "Huachuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桦川县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020030",
      "en": "Yuexiu",
      "l": "12",
      "ca": 4,
      "area_name": "越秀区"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010150",
      "en": "Southren",
      "l": "12",
      "ca": 4,
      "area_name": "南区"
    },
    {
      "parent_code": "110100",
      "a": "0",
      "area_code": "110100030",
      "en": "Shangsi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上思县"
    },
    {
      "parent_code": "170100",
      "a": "0",
      "area_code": "170100030",
      "en": "Echeng",
      "l": "12",
      "ca": 4,
      "area_name": "鄂城区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070040",
      "en": "Nyainrong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "聂荣县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050010",
      "en": "Wuling",
      "l": "12",
      "ca": 4,
      "area_name": "武陵区"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030040",
      "en": "Shiguai",
      "l": "12",
      "ca": 4,
      "area_name": "石拐区"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030010",
      "en": "Donghe",
      "l": "12",
      "ca": 4,
      "area_name": "东河区"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020190",
      "en": "Economic Development Zone",
      "l": "13",
      "ca": 4,
      "area_name": "经开区"
    },
    {
      "parent_code": "270020",
      "a": "0",
      "area_code": "270020010",
      "en": "Lianhu",
      "l": "12",
      "ca": 4,
      "area_name": "莲湖区"
    },
    {
      "parent_code": "050110",
      "a": "0",
      "area_code": "050110090",
      "en": "Wuchuan",
      "l": "15",
      "ca": 4,
      "area_name": "吴川"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070050",
      "en": "Anhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安化县"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050080",
      "en": "Rong'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "融安县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020090",
      "en": "Nanchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南昌县"
    },
    {
      "parent_code": "240060",
      "a": "0",
      "area_code": "240060020",
      "en": "Jianzha Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尖扎县"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040060",
      "en": "Qianxian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乾县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110090",
      "en": "Wubao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吴堡县"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070070",
      "en": "Wenling",
      "l": "15",
      "ca": 4,
      "area_name": "温岭"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080110",
      "en": "Guangchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广昌县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090020",
      "en": "Ning'er Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁洱县"
    },
    {
      "parent_code": "280190",
      "a": "0",
      "area_code": "280190010",
      "en": "Yanjiang",
      "l": "12",
      "ca": 4,
      "area_name": "雁江区"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100040",
      "en": "Shangdu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "商都县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140080",
      "en": "Xinhuang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新晃县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010140",
      "en": "North",
      "l": "12",
      "ca": 4,
      "area_name": "北区"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040070",
      "en": "Tangyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汤原县"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070070",
      "en": "Sog Co.",
      "l": "14",
      "ca": 4,
      "area_name": "索县"
    },
    {
      "parent_code": "170100",
      "a": "0",
      "area_code": "170100020",
      "en": "Huarong",
      "l": "12",
      "ca": 4,
      "area_name": "华容区"
    },
    {
      "parent_code": "110030",
      "a": "0",
      "area_code": "110030030",
      "en": "Tieshangang",
      "l": "12",
      "ca": 4,
      "area_name": "铁山港区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040090",
      "en": "Shijie",
      "l": "14",
      "ca": 4,
      "area_name": "石碣镇"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160010",
      "en": "Yicheng",
      "l": "12",
      "ca": 4,
      "area_name": "驿城区"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160020",
      "en": "Xiping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西平县"
    },
    {
      "parent_code": "220030",
      "a": "0",
      "area_code": "220030020",
      "en": "Hondlon",
      "l": "12",
      "ca": 4,
      "area_name": "昆都仑区"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180090",
      "en": "Huaibin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "淮滨县"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050090",
      "en": "Ejin Horo Banner",
      "l": "16",
      "ca": 4,
      "area_name": "伊金霍洛"
    },
    {
      "parent_code": "150020",
      "a": "0",
      "area_code": "150020180",
      "en": "Airport Economy Zone",
      "l": "13",
      "ca": 4,
      "area_name": "航空港区"
    },
    {
      "parent_code": "180070",
      "a": "0",
      "area_code": "180070060",
      "en": "Yuanjiang",
      "l": "15",
      "ca": 4,
      "area_name": "沅江"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010390",
      "en": "Youyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "酉阳县"
    },
    {
      "parent_code": "320",
      "a": "1",
      "area_code": "320010130",
      "en": "Yau Tsim Mong",
      "l": "12",
      "ca": 4,
      "area_name": "油尖旺区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050090",
      "en": "Rongshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "融水县"
    },
    {
      "parent_code": "070070",
      "a": "0",
      "area_code": "070070060",
      "en": "Xianju Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仙居县"
    },
    {
      "parent_code": "240060",
      "a": "0",
      "area_code": "240060010",
      "en": "Tongren",
      "l": "14",
      "ca": 4,
      "area_name": "同仁市"
    },
    {
      "parent_code": "270040",
      "a": "0",
      "area_code": "270040070",
      "en": "Liquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "礼泉县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090030",
      "en": "Mojiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "墨江县"
    },
    {
      "parent_code": "050020",
      "a": "0",
      "area_code": "050020010",
      "en": "Baiyun",
      "l": "12",
      "ca": 4,
      "area_name": "白云区"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100050",
      "en": "Xinghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴和县"
    },
    {
      "parent_code": "180140",
      "a": "0",
      "area_code": "180140090",
      "en": "Zhijiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "芷江县"
    },
    {
      "parent_code": "170100",
      "a": "0",
      "area_code": "170100010",
      "en": "Liangzihu",
      "l": "12",
      "ca": 4,
      "area_name": "梁子湖区"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030100",
      "en": "Mabian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "马边县"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040080",
      "en": "Tongjiang",
      "l": "15",
      "ca": 4,
      "area_name": "同江"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070100",
      "en": "Pingdu",
      "l": "15",
      "ca": 4,
      "area_name": "平度"
    },
    {
      "parent_code": "110030",
      "a": "0",
      "area_code": "110030020",
      "en": "Yinhai",
      "l": "12",
      "ca": 4,
      "area_name": "银海区"
    },
    {
      "parent_code": "290070",
      "a": "0",
      "area_code": "290070060",
      "en": "Xainza Co.",
      "l": "14",
      "ca": 4,
      "area_name": "申扎县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040080",
      "en": "Daojiao",
      "l": "14",
      "ca": 4,
      "area_name": "道滘镇"
    },
    {
      "parent_code": "060100",
      "a": "0",
      "area_code": "060100010",
      "en": "Liangxi",
      "l": "12",
      "ca": 4,
      "area_name": "梁溪区"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080010",
      "en": "Longhu",
      "l": "12",
      "ca": 4,
      "area_name": "龙湖区"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080110",
      "en": "Shuifu",
      "l": "15",
      "ca": 4,
      "area_name": "水富市"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100070",
      "en": "Zherong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柘荣县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050060",
      "en": "Yongnian",
      "l": "12",
      "ca": 4,
      "area_name": "永年区"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080030",
      "en": "Nanshan",
      "l": "12",
      "ca": 4,
      "area_name": "南山区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020050",
      "en": "Dongchuan",
      "l": "12",
      "ca": 4,
      "area_name": "东川区"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170020",
      "en": "Mingshan",
      "l": "12",
      "ca": 4,
      "area_name": "名山区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040110",
      "en": "Taishun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泰顺县"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130050",
      "en": "Huishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "合水县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020030",
      "en": "Qingyunpu",
      "l": "12",
      "ca": 4,
      "area_name": "青云谱区"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080050",
      "en": "Ziyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "紫阳县"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060020",
      "en": "Erdaojiang",
      "l": "12",
      "ca": 4,
      "area_name": "二道江区"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070070",
      "en": "Cenxi",
      "l": "15",
      "ca": 4,
      "area_name": "岑溪"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030050",
      "en": "Zhushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "竹山县"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050080",
      "en": "Surabaya Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泗水县"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100060",
      "en": "Zhouning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "周宁县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090040",
      "en": "Jingdong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "景东县"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030070",
      "en": "Jiajiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "夹江县"
    },
    {
      "parent_code": "310080",
      "a": "0",
      "area_code": "310080100",
      "en": "Weixin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "威信县"
    },
    {
      "parent_code": "150140",
      "a": "0",
      "area_code": "150140014",
      "en": "Qi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "淇县"
    },
    {
      "parent_code": "150140",
      "a": "0",
      "area_code": "150140013",
      "en": "Xun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浚县"
    },
    {
      "parent_code": "150140",
      "a": "0",
      "area_code": "150140012",
      "en": "Qibin",
      "l": "12",
      "ca": 4,
      "area_name": "淇滨区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050050",
      "en": "Feixiang",
      "l": "12",
      "ca": 4,
      "area_name": "肥乡区"
    },
    {
      "parent_code": "080150",
      "a": "0",
      "area_code": "080150040",
      "en": "Lixin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "利辛县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170030",
      "en": "Xingjing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "荥经县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080100",
      "en": "Zixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "资溪县"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130040",
      "en": "Huachi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "华池县"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080040",
      "en": "Ningshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁陕县"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040100",
      "en": "Wencheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "文成县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020070",
      "en": "Guanshanhu",
      "l": "12",
      "ca": 4,
      "area_name": "观山湖区"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060030",
      "en": "Tonghua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通化县"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070060",
      "en": "Mengshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒙山县"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120060",
      "en": "Gaoyou",
      "l": "15",
      "ca": 4,
      "area_name": "高邮"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020040",
      "en": "Xishan",
      "l": "12",
      "ca": 4,
      "area_name": "西山区"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080040",
      "en": "Xing'an",
      "l": "12",
      "ca": 4,
      "area_name": "兴安区"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050090",
      "en": "Liangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "梁山县"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100050",
      "en": "Shouning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "寿宁县"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030040",
      "en": "Yunxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郧西县"
    },
    {
      "parent_code": "150140",
      "a": "0",
      "area_code": "150140011",
      "en": "Shancheng",
      "l": "12",
      "ca": 4,
      "area_name": "山城区"
    },
    {
      "parent_code": "150140",
      "a": "0",
      "area_code": "150140010",
      "en": "Heshan",
      "l": "12",
      "ca": 4,
      "area_name": "鹤山区"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030080",
      "en": "Muchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沐川县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090050",
      "en": "Jinggu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "景谷县"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080030",
      "en": "Haojiang",
      "l": "12",
      "ca": 4,
      "area_name": "濠江区"
    },
    {
      "parent_code": "310160",
      "a": "0",
      "area_code": "310160010",
      "en": "Lushui",
      "l": "15",
      "ca": 4,
      "area_name": "泸水"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050040",
      "en": "Fengfeng",
      "l": "12",
      "ca": 4,
      "area_name": "峰峰矿区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070110",
      "en": "Jianning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建宁县"
    },
    {
      "parent_code": "080150",
      "a": "0",
      "area_code": "080150030",
      "en": "Mengcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒙城县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170040",
      "en": "Hanyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汉源县"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080010",
      "en": "Xiangyang",
      "l": "12",
      "ca": 4,
      "area_name": "向阳区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020070",
      "en": "Chenggong",
      "l": "12",
      "ca": 4,
      "area_name": "呈贡区"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080030",
      "en": "Shiquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石泉县"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130030",
      "en": "Huan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "环县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020050",
      "en": "Qingshanhu",
      "l": "12",
      "ca": 4,
      "area_name": "青山湖区"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120050",
      "en": "Yizheng",
      "l": "15",
      "ca": 4,
      "area_name": "仪征"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060020",
      "en": "Tianjia'an",
      "l": "12",
      "ca": 4,
      "area_name": "田家庵区"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070050",
      "en": "Teng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "藤县"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110010",
      "en": "Haizhou",
      "l": "12",
      "ca": 4,
      "area_name": "海州区"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030030",
      "en": "Yunyang",
      "l": "12",
      "ca": 4,
      "area_name": "郧阳区"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120110",
      "en": "Shenzhou",
      "l": "15",
      "ca": 4,
      "area_name": "深州"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100040",
      "en": "Pingnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "屏南县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090060",
      "en": "Zhenyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇沅县"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030090",
      "en": "Ebian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "峨边县"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080020",
      "en": "Jinping",
      "l": "12",
      "ca": 4,
      "area_name": "金平区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050030",
      "en": "Fuxing",
      "l": "12",
      "ca": 4,
      "area_name": "复兴区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070100",
      "en": "Taining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泰宁县"
    },
    {
      "parent_code": "310160",
      "a": "0",
      "area_code": "310160020",
      "en": "Fugong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "福贡县"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110020",
      "en": "Xinqiu",
      "l": "12",
      "ca": 4,
      "area_name": "新邱区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020060",
      "en": "Anning",
      "l": "15",
      "ca": 4,
      "area_name": "安宁"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080020",
      "en": "Gongnong",
      "l": "12",
      "ca": 4,
      "area_name": "工农区"
    },
    {
      "parent_code": "080150",
      "a": "0",
      "area_code": "080150020",
      "en": "Guyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涡阳县"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080020",
      "en": "Hanyin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汉阴县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170050",
      "en": "Shimian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石棉县"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130020",
      "en": "Qingcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庆城县"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020060",
      "en": "Honggutan",
      "l": "12",
      "ca": 4,
      "area_name": "红谷滩区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040120",
      "en": "Longgang",
      "l": "15",
      "ca": 4,
      "area_name": "龙港"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020050",
      "en": "Baiyun",
      "l": "12",
      "ca": 4,
      "area_name": "白云区"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060010",
      "en": "Dongchang",
      "l": "12",
      "ca": 4,
      "area_name": "东昌区"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120040",
      "en": "Baoying Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宝应县"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060010",
      "en": "Datong",
      "l": "12",
      "ca": 4,
      "area_name": "大通区"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070040",
      "en": "Cangwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "苍梧县"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100030",
      "en": "Gutian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "古田县"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030020",
      "en": "Zhangwan",
      "l": "12",
      "ca": 4,
      "area_name": "张湾区"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120100",
      "en": "Fucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阜城县"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090070",
      "en": "Jiangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江城县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140110",
      "en": "Dahua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大化县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020230",
      "en": "Jianyang",
      "l": "15",
      "ca": 4,
      "area_name": "简阳"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160070",
      "en": "Biyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泌阳县"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110030",
      "en": "Taiping",
      "l": "12",
      "ca": 4,
      "area_name": "太平区"
    },
    {
      "parent_code": "080150",
      "a": "0",
      "area_code": "080150010",
      "en": "Qiaocheng",
      "l": "12",
      "ca": 4,
      "area_name": "谯城区"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130010",
      "en": "Xifeng",
      "l": "12",
      "ca": 4,
      "area_name": "西峰区"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080010",
      "en": "Hanbin",
      "l": "12",
      "ca": 4,
      "area_name": "汉滨区"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080010",
      "en": "Maqin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玛沁县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040070",
      "en": "Chongyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "崇义县"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030030",
      "en": "Wutongqiao",
      "l": "12",
      "ca": 4,
      "area_name": "五通桥区"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060040",
      "en": "Bagongshan",
      "l": "12",
      "ca": 4,
      "area_name": "八公山区"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020040",
      "en": "Wudang",
      "l": "12",
      "ca": 4,
      "area_name": "乌当区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050020",
      "en": "Yufeng",
      "l": "12",
      "ca": 4,
      "area_name": "鱼峰区"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120110",
      "en": "Qixia",
      "l": "15",
      "ca": 4,
      "area_name": "栖霞"
    },
    {
      "parent_code": "060170",
      "a": "0",
      "area_code": "060170010",
      "en": "Sucheng",
      "l": "12",
      "ca": 4,
      "area_name": "宿城区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020010",
      "en": "Panlong",
      "l": "12",
      "ca": 4,
      "area_name": "盘龙区"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060060",
      "en": "Meihekou",
      "l": "15",
      "ca": 4,
      "area_name": "梅河口"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090080",
      "en": "Menglian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "孟连县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140100",
      "en": "Du'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "都安县"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070050",
      "en": "Hure Banner",
      "l": "16",
      "ca": 4,
      "area_name": "库伦旗"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120030",
      "en": "Jiangdu",
      "l": "12",
      "ca": 4,
      "area_name": "江都区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050020",
      "en": "Congtai",
      "l": "12",
      "ca": 4,
      "area_name": "丛台区"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050040",
      "en": "Jungar Banner",
      "l": "16",
      "ca": 4,
      "area_name": "准格尔旗"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070120",
      "en": "Yong'an",
      "l": "15",
      "ca": 4,
      "area_name": "永安"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110040",
      "en": "Qinghemen",
      "l": "12",
      "ca": 4,
      "area_name": "清河门区"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160080",
      "en": "Ru'Nan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汝南县"
    },
    {
      "parent_code": "180020",
      "a": "0",
      "area_code": "180020100",
      "en": "Ningxiang",
      "l": "15",
      "ca": 4,
      "area_name": "宁乡"
    },
    {
      "parent_code": "240080",
      "a": "0",
      "area_code": "240080020",
      "en": "Banma Co.",
      "l": "14",
      "ca": 4,
      "area_name": "班玛县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230100",
      "en": "Jinyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金阳县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020030",
      "en": "Huaxi",
      "l": "12",
      "ca": 4,
      "area_name": "花溪区"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030040",
      "en": "Jinkouhe",
      "l": "12",
      "ca": 4,
      "area_name": "金口河区"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060030",
      "en": "Xiejiaji",
      "l": "12",
      "ca": 4,
      "area_name": "谢家集区"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040080",
      "en": "Anyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安远县"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050030",
      "en": "Liunan",
      "l": "12",
      "ca": 4,
      "area_name": "柳南区"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120120",
      "en": "Haiyang",
      "l": "15",
      "ca": 4,
      "area_name": "海阳"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030080",
      "en": "Danjiangkou",
      "l": "15",
      "ca": 4,
      "area_name": "丹江口"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060070",
      "en": "Ji'an",
      "l": "15",
      "ca": 4,
      "area_name": "集安"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070060",
      "en": "Naiman Banner",
      "l": "16",
      "ca": 4,
      "area_name": "奈曼旗"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120020",
      "en": "Hanjiang",
      "l": "12",
      "ca": 4,
      "area_name": "邗江区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050010",
      "en": "Hanshan",
      "l": "12",
      "ca": 4,
      "area_name": "邯山区"
    },
    {
      "parent_code": "310090",
      "a": "0",
      "area_code": "310090090",
      "en": "Lancang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "澜沧县"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050030",
      "en": "Dalad Banner",
      "l": "16",
      "ca": 4,
      "area_name": "达拉特旗"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110050",
      "en": "Xihe",
      "l": "12",
      "ca": 4,
      "area_name": "细河区"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100090",
      "en": "Fuding",
      "l": "15",
      "ca": 4,
      "area_name": "福鼎"
    },
    {
      "parent_code": "150160",
      "a": "0",
      "area_code": "150160090",
      "en": "Suiping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "遂平县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230110",
      "en": "Zhaojue Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昭觉县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040090",
      "en": "Longnan",
      "l": "15",
      "ca": 4,
      "area_name": "龙南市"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030050",
      "en": "Qianwei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "犍为县"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060060",
      "en": "Fengtai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤台县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020020",
      "en": "Yunyan",
      "l": "12",
      "ca": 4,
      "area_name": "云岩区"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020010",
      "en": "Donghu",
      "l": "12",
      "ca": 4,
      "area_name": "东湖区"
    },
    {
      "parent_code": "140090",
      "a": "0",
      "area_code": "140090100",
      "en": "Shangyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尚义县"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030070",
      "en": "Fang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "房县"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060040",
      "en": "Huinan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "辉南县"
    },
    {
      "parent_code": "250120",
      "a": "0",
      "area_code": "250120130",
      "en": "Penglai",
      "l": "12",
      "ca": 4,
      "area_name": "蓬莱"
    },
    {
      "parent_code": "060170",
      "a": "0",
      "area_code": "060170030",
      "en": "Shuyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沭阳县"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020030",
      "en": "Guandu",
      "l": "12",
      "ca": 4,
      "area_name": "官渡区"
    },
    {
      "parent_code": "060120",
      "a": "0",
      "area_code": "060120010",
      "en": "Guangling",
      "l": "12",
      "ca": 4,
      "area_name": "广陵区"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070070",
      "en": "Jarud Banner",
      "l": "16",
      "ca": 4,
      "area_name": "扎鲁特旗"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170070",
      "en": "Ningguo",
      "l": "15",
      "ca": 4,
      "area_name": "宁国"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050020",
      "en": "Kangbashi",
      "l": "12",
      "ca": 4,
      "area_name": "康巴什区"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110060",
      "en": "Fuxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阜新县"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100080",
      "en": "Fu'an",
      "l": "15",
      "ca": 4,
      "area_name": "福安"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070080",
      "en": "Holingol",
      "l": "15",
      "ca": 4,
      "area_name": "霍林郭勒"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230120",
      "en": "Xide Co.",
      "l": "14",
      "ca": 4,
      "area_name": "喜德县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170010",
      "en": "Yucheng",
      "l": "12",
      "ca": 4,
      "area_name": "雨城区"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020010",
      "en": "Nanming",
      "l": "12",
      "ca": 4,
      "area_name": "南明区"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060050",
      "en": "Panji",
      "l": "12",
      "ca": 4,
      "area_name": "潘集区"
    },
    {
      "parent_code": "200020",
      "a": "0",
      "area_code": "200020020",
      "en": "Xihu",
      "l": "12",
      "ca": 4,
      "area_name": "西湖区"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050010",
      "en": "Chengzhong",
      "l": "12",
      "ca": 4,
      "area_name": "城中区"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170060",
      "en": "Jingde Co.",
      "l": "14",
      "ca": 4,
      "area_name": "旌德县"
    },
    {
      "parent_code": "060170",
      "a": "0",
      "area_code": "060170020",
      "en": "Suyu",
      "l": "12",
      "ca": 4,
      "area_name": "宿豫区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020020",
      "en": "Wuhua",
      "l": "12",
      "ca": 4,
      "area_name": "五华区"
    },
    {
      "parent_code": "170030",
      "a": "0",
      "area_code": "170030060",
      "en": "Zhuxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "竹溪县"
    },
    {
      "parent_code": "190060",
      "a": "0",
      "area_code": "190060050",
      "en": "Liuhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柳河县"
    },
    {
      "parent_code": "220050",
      "a": "0",
      "area_code": "220050010",
      "en": "Dongsheng",
      "l": "12",
      "ca": 4,
      "area_name": "东胜区"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030060",
      "en": "Jingyan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "井研县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010140",
      "en": "Jinshan",
      "l": "12",
      "ca": 4,
      "area_name": "金山区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030050",
      "en": "Xushui",
      "l": "12",
      "ca": 4,
      "area_name": "徐水区"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150010",
      "en": "Guang'an",
      "l": "12",
      "ca": 4,
      "area_name": "广安区"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070090",
      "en": "Jimo",
      "l": "12",
      "ca": 4,
      "area_name": "即墨区"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130100",
      "en": "Hailun",
      "l": "15",
      "ca": 4,
      "area_name": "海伦"
    },
    {
      "parent_code": "190040",
      "a": "0",
      "area_code": "190040020",
      "en": "Tiedong",
      "l": "12",
      "ca": 4,
      "area_name": "铁东区"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020030",
      "en": "Xingqing",
      "l": "12",
      "ca": 4,
      "area_name": "兴庆区"
    },
    {
      "parent_code": "140070",
      "a": "0",
      "area_code": "140070070",
      "en": "Lulong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "卢龙县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020110",
      "en": "Jiande",
      "l": "15",
      "ca": 4,
      "area_name": "建德"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230130",
      "en": "Mianning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "冕宁县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060050",
      "en": "Heyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "合阳县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040030",
      "en": "Ganxian",
      "l": "12",
      "ca": 4,
      "area_name": "赣县区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040160",
      "en": "Houma",
      "l": "15",
      "ca": 4,
      "area_name": "侯马"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110050",
      "en": "Kang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "康县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040130",
      "en": "Luoning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛宁县"
    },
    {
      "parent_code": "060170",
      "a": "0",
      "area_code": "060170050",
      "en": "Sihong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泗洪县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100120",
      "en": "Xinhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新河县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170020",
      "en": "Dingtao",
      "l": "12",
      "ca": 4,
      "area_name": "定陶区"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150060",
      "en": "Maqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玛曲县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060020",
      "en": "Jianhua",
      "l": "12",
      "ca": 4,
      "area_name": "建华区"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170050",
      "en": "Jixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绩溪县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120030",
      "en": "Jiaocheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "交城县"
    },
    {
      "parent_code": "150120",
      "a": "0",
      "area_code": "150120010",
      "en": "Yuanhui",
      "l": "12",
      "ca": 4,
      "area_name": "源汇区"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110130",
      "en": "Hekou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "河口县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030070",
      "en": "Plain Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平原县"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070010",
      "en": "Horqin",
      "l": "12",
      "ca": 4,
      "area_name": "科尔沁区"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050010",
      "en": "Rencheng",
      "l": "12",
      "ca": 4,
      "area_name": "任城区"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010130",
      "en": "Jiading",
      "l": "12",
      "ca": 4,
      "area_name": "嘉定区"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070080",
      "en": "Jiaozhou",
      "l": "15",
      "ca": 4,
      "area_name": "胶州"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030060",
      "en": "Laishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涞水县"
    },
    {
      "parent_code": "050060",
      "a": "0",
      "area_code": "050060010",
      "en": "Huicheng",
      "l": "12",
      "ca": 4,
      "area_name": "惠城区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040150",
      "en": "Fenxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汾西县"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230140",
      "en": "Yuexi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "越西县"
    },
    {
      "parent_code": "190040",
      "a": "0",
      "area_code": "190040030",
      "en": "Lishu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "梨树县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060010",
      "en": "Longsha",
      "l": "12",
      "ca": 4,
      "area_name": "龙沙区"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020020",
      "en": "Jinfeng",
      "l": "12",
      "ca": 4,
      "area_name": "金凤区"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020100",
      "en": "Fuyang",
      "l": "12",
      "ca": 4,
      "area_name": "富阳区"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060040",
      "en": "Dali Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大荔县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110040",
      "en": "Dangchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宕昌县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040040",
      "en": "Xinfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "信丰县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170010",
      "en": "Mudan",
      "l": "12",
      "ca": 4,
      "area_name": "牡丹区"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040120",
      "en": "Yiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜阳县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100130",
      "en": "Guangzong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广宗县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060100",
      "en": "Wuxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武乡县"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150070",
      "en": "Luqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "碌曲县"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170040",
      "en": "Jing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泾县"
    },
    {
      "parent_code": "060170",
      "a": "0",
      "area_code": "060170040",
      "en": "Siyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泗阳县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120020",
      "en": "Wenshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "文水县"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070020",
      "en": "Horqin Left Middle Banner",
      "l": "16",
      "ca": 4,
      "area_name": "科左中旗"
    },
    {
      "parent_code": "150120",
      "a": "0",
      "area_code": "150120020",
      "en": "Yancheng",
      "l": "12",
      "ca": 4,
      "area_name": "郾城区"
    },
    {
      "parent_code": "080060",
      "a": "0",
      "area_code": "080060070",
      "en": "Shou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "寿县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030060",
      "en": "Qihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "齐河县"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050020",
      "en": "Yanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "兖州区"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050100",
      "en": "Hua'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "华安县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030030",
      "en": "Manchu",
      "l": "12",
      "ca": 4,
      "area_name": "满城区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230150",
      "en": "Ganluo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘洛县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010160",
      "en": "Qingpu",
      "l": "12",
      "ca": 4,
      "area_name": "青浦区"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210180",
      "en": "Derong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "得荣县"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020050",
      "en": "Yongning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永宁县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020130",
      "en": "Chunan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "淳安县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040140",
      "en": "Pu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒲县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040050",
      "en": "Dayu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大余县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110030",
      "en": "Wen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "文县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020230",
      "en": "Yuanshi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "元氏县"
    },
    {
      "parent_code": "210150",
      "a": "0",
      "area_code": "210150070",
      "en": "Lingyuan",
      "l": "15",
      "ca": 4,
      "area_name": "凌源"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060030",
      "en": "Tongguan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "潼关县"
    },
    {
      "parent_code": "310040",
      "a": "0",
      "area_code": "310040040",
      "en": "Huaping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "华坪县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120010",
      "en": "Lishi",
      "l": "12",
      "ca": 4,
      "area_name": "离石区"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060110",
      "en": "Qin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沁县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040150",
      "en": "Yanshi",
      "l": "12",
      "ca": 4,
      "area_name": "偃师区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100100",
      "en": "Ningjin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁晋县"
    },
    {
      "parent_code": "210130",
      "a": "0",
      "area_code": "210130020",
      "en": "Xinglongtai",
      "l": "12",
      "ca": 4,
      "area_name": "兴隆台区"
    },
    {
      "parent_code": "100150",
      "a": "0",
      "area_code": "100150080",
      "en": "Xiahe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "夏河县"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040010",
      "en": "Longzihu",
      "l": "12",
      "ca": 4,
      "area_name": "龙子湖区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060040",
      "en": "Ang'angxi",
      "l": "12",
      "ca": 4,
      "area_name": "昂昂溪区"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170030",
      "en": "Guangde",
      "l": "15",
      "ca": 4,
      "area_name": "广德"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090020",
      "en": "Yunxi",
      "l": "12",
      "ca": 4,
      "area_name": "云溪区"
    },
    {
      "parent_code": "050060",
      "a": "0",
      "area_code": "050060020",
      "en": "Huiyang",
      "l": "12",
      "ca": 4,
      "area_name": "惠阳区"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070030",
      "en": "Horqin Left Back Banner",
      "l": "16",
      "ca": 4,
      "area_name": "科左后旗"
    },
    {
      "parent_code": "150180",
      "a": "0",
      "area_code": "150180100",
      "en": "Xi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "息县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110110",
      "en": "Jinping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金平县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030050",
      "en": "Linyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临邑县"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050110",
      "en": "Longhai",
      "l": "12",
      "ca": 4,
      "area_name": "龙海区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030040",
      "en": "Qingyuan",
      "l": "12",
      "ca": 4,
      "area_name": "清苑区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230160",
      "en": "Meigu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "美姑县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210170",
      "en": "Daocheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "稻城县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010150",
      "en": "Songjiang",
      "l": "12",
      "ca": 4,
      "area_name": "松江区"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120120",
      "en": "Duolun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "多伦县"
    },
    {
      "parent_code": "190040",
      "a": "0",
      "area_code": "190040010",
      "en": "Tiexi",
      "l": "12",
      "ca": 4,
      "area_name": "铁西区"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020040",
      "en": "Lingwu",
      "l": "15",
      "ca": 4,
      "area_name": "灵武"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020120",
      "en": "Tonglu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桐庐县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040130",
      "en": "Yonghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永和县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020240",
      "en": "Zhao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "赵县"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110020",
      "en": "Cheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "成县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040060",
      "en": "Shangu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上犹县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060020",
      "en": "Hua",
      "l": "12",
      "ca": 4,
      "area_name": "华州区"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170020",
      "en": "Langxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郎溪县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060120",
      "en": "Qinyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沁源县"
    },
    {
      "parent_code": "310040",
      "a": "0",
      "area_code": "310040050",
      "en": "Ninglang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁蒗县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040140",
      "en": "Yichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "伊川县"
    },
    {
      "parent_code": "070090",
      "a": "0",
      "area_code": "070090010",
      "en": "Nanhu",
      "l": "12",
      "ca": 4,
      "area_name": "南湖区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100110",
      "en": "Julu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巨鹿县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060030",
      "en": "Tiefeng",
      "l": "12",
      "ca": 4,
      "area_name": "铁锋区"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040020",
      "en": "Bengshan",
      "l": "12",
      "ca": 4,
      "area_name": "蚌山区"
    },
    {
      "parent_code": "210130",
      "a": "0",
      "area_code": "210130010",
      "en": "Shuangtaizi",
      "l": "12",
      "ca": 4,
      "area_name": "双台子区"
    },
    {
      "parent_code": "050060",
      "a": "0",
      "area_code": "050060030",
      "en": "Boluo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博罗县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030040",
      "en": "Qingyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庆云县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030120",
      "en": "Nanan",
      "l": "15",
      "ca": 4,
      "area_name": "南安"
    },
    {
      "parent_code": "180090",
      "a": "0",
      "area_code": "180090010",
      "en": "Yueyanglou",
      "l": "12",
      "ca": 4,
      "area_name": "岳阳楼区"
    },
    {
      "parent_code": "220070",
      "a": "0",
      "area_code": "220070040",
      "en": "Kailu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "开鲁县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110120",
      "en": "Luchun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绿春县"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050030",
      "en": "Weishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "微山县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030010",
      "en": "Jingxiu",
      "l": "12",
      "ca": 4,
      "area_name": "竞秀区"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150050",
      "en": "Linshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "邻水县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210160",
      "en": "Xiangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乡城县"
    },
    {
      "parent_code": "190040",
      "a": "0",
      "area_code": "190040060",
      "en": "Shuangliao",
      "l": "15",
      "ca": 4,
      "area_name": "双辽"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020150",
      "en": "Linping",
      "l": "12",
      "ca": 4,
      "area_name": "临平区"
    },
    {
      "parent_code": "280230",
      "a": "0",
      "area_code": "280230170",
      "en": "Leibo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "雷波县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060080",
      "en": "Taihe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泰和县"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120110",
      "en": "Zhenglan Banner",
      "l": "16",
      "ca": 4,
      "area_name": "正蓝旗"
    },
    {
      "parent_code": "210130",
      "a": "0",
      "area_code": "210130040",
      "en": "Panshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盘山县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040120",
      "en": "Xi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隰县"
    },
    {
      "parent_code": "050200",
      "a": "0",
      "area_code": "050200030",
      "en": "Luhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陆河县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170060",
      "en": "Tianquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天全县"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070030",
      "en": "Longxu",
      "l": "12",
      "ca": 4,
      "area_name": "龙圩区"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060130",
      "en": "Lucheng",
      "l": "12",
      "ca": 4,
      "area_name": "潞城区"
    },
    {
      "parent_code": "080170",
      "a": "0",
      "area_code": "080170010",
      "en": "Xuanzhou",
      "l": "12",
      "ca": 4,
      "area_name": "宣州区"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020210",
      "en": "Wuji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "无极县"
    },
    {
      "parent_code": "270060",
      "a": "0",
      "area_code": "270060010",
      "en": "Linwei",
      "l": "12",
      "ca": 4,
      "area_name": "临渭区"
    },
    {
      "parent_code": "100110",
      "a": "0",
      "area_code": "100110010",
      "en": "Wudu",
      "l": "12",
      "ca": 4,
      "area_name": "武都区"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040030",
      "en": "Yuhui",
      "l": "12",
      "ca": 4,
      "area_name": "禹会区"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080070",
      "en": "Luobei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "萝北县"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090040",
      "en": "Wuxuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武宣县"
    },
    {
      "parent_code": "310040",
      "a": "0",
      "area_code": "310040020",
      "en": "Yulong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玉龙县"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090060",
      "en": "Urad Rear Banner",
      "l": "16",
      "ca": 4,
      "area_name": "乌拉特后旗"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080090",
      "en": "Xunyang",
      "l": "15",
      "ca": 4,
      "area_name": "旬阳市"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030030",
      "en": "Ningjin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁津县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030110",
      "en": "Jinjiang",
      "l": "15",
      "ca": 4,
      "area_name": "晋江"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120070",
      "en": "Shilou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石楼县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010100",
      "en": "Jing'an",
      "l": "12",
      "ca": 4,
      "area_name": "静安区"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080050",
      "en": "Chaonan",
      "l": "12",
      "ca": 4,
      "area_name": "潮南区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100160",
      "en": "Qinghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清河县"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050040",
      "en": "Yutai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鱼台县"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100020",
      "en": "Xiapu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "霞浦县"
    },
    {
      "parent_code": "150120",
      "a": "0",
      "area_code": "150120050",
      "en": "Linying Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临颍县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210150",
      "en": "Batong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴塘县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030020",
      "en": "Lianchi",
      "l": "12",
      "ca": 4,
      "area_name": "莲池区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070100",
      "en": "Pingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "屏山县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050090",
      "en": "Daming Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大名县"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150040",
      "en": "Wusheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武胜县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060070",
      "en": "Yongfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永丰县"
    },
    {
      "parent_code": "220120",
      "a": "0",
      "area_code": "220120100",
      "en": "Zhengxiangbai Banner",
      "l": "16",
      "ca": 4,
      "area_name": "正镶白旗"
    },
    {
      "parent_code": "050200",
      "a": "0",
      "area_code": "050200020",
      "en": "Haifeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "海丰县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170070",
      "en": "Lushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "芦山县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020220",
      "en": "Pingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平山县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060140",
      "en": "Luzhou",
      "l": "12",
      "ca": 4,
      "area_name": "潞州区"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020060",
      "en": "Helan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "贺兰县"
    },
    {
      "parent_code": "310040",
      "a": "0",
      "area_code": "310040030",
      "en": "Yongsheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永胜县"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070020",
      "en": "Changzhou",
      "l": "12",
      "ca": 4,
      "area_name": "长洲区"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090050",
      "en": "Urad Middle Banner",
      "l": "16",
      "ca": 4,
      "area_name": "乌拉特中旗"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150010",
      "en": "Tinghu",
      "l": "12",
      "ca": 4,
      "area_name": "亭湖区"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080080",
      "en": "Suibin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥滨县"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090050",
      "en": "Jinxiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金秀县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040110",
      "en": "Daning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大宁县"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130080",
      "en": "Zhenyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇原县"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040040",
      "en": "Huaishang",
      "l": "12",
      "ca": 4,
      "area_name": "淮上区"
    },
    {
      "parent_code": "210130",
      "a": "0",
      "area_code": "210130030",
      "en": "Dawa",
      "l": "12",
      "ca": 4,
      "area_name": "大洼区"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080080",
      "en": "Zhenping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇坪县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030020",
      "en": "Lingcheng",
      "l": "12",
      "ca": 4,
      "area_name": "陵城区"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030100",
      "en": "Shishi",
      "l": "15",
      "ca": 4,
      "area_name": "石狮"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120060",
      "en": "Liulin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柳林县"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050050",
      "en": "Jinxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金乡县"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080040",
      "en": "Chaoyang",
      "l": "12",
      "ca": 4,
      "area_name": "潮阳区"
    },
    {
      "parent_code": "090100",
      "a": "0",
      "area_code": "090100010",
      "en": "Jiaocheng",
      "l": "12",
      "ca": 4,
      "area_name": "蕉城区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100170",
      "en": "Linxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临西县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050080",
      "en": "Cheng'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "成安县"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150030",
      "en": "Yuechi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岳池县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010120",
      "en": "Minhang",
      "l": "12",
      "ca": 4,
      "area_name": "闵行区"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210140",
      "en": "Litang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "理塘县"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040010",
      "en": "Zhanggong",
      "l": "12",
      "ca": 4,
      "area_name": "章贡区"
    },
    {
      "parent_code": "190040",
      "a": "0",
      "area_code": "190040040",
      "en": "Yitong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "伊通县"
    },
    {
      "parent_code": "280170",
      "a": "0",
      "area_code": "280170080",
      "en": "Baoxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宝兴县"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040110",
      "en": "Ruyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汝阳县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060080",
      "en": "Huize Co.",
      "l": "14",
      "ca": 4,
      "area_name": "会泽县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100140",
      "en": "Pingxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平乡县"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080070",
      "en": "Pingli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平利县"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150020",
      "en": "Yandu",
      "l": "12",
      "ca": 4,
      "area_name": "盐都区"
    },
    {
      "parent_code": "110070",
      "a": "0",
      "area_code": "110070010",
      "en": "Wanxiu",
      "l": "12",
      "ca": 4,
      "area_name": "万秀区"
    },
    {
      "parent_code": "110090",
      "a": "0",
      "area_code": "110090060",
      "en": "Heshan",
      "l": "15",
      "ca": 4,
      "area_name": "合山"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130070",
      "en": "Ning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120050",
      "en": "Lin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040100",
      "en": "Xiangning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乡宁县"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080050",
      "en": "Dongshan",
      "l": "12",
      "ca": 4,
      "area_name": "东山区"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040050",
      "en": "Huaiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "怀远县"
    },
    {
      "parent_code": "250030",
      "a": "0",
      "area_code": "250030010",
      "en": "Decheng",
      "l": "12",
      "ca": 4,
      "area_name": "德城区"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050060",
      "en": "Jiaxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉祥县"
    },
    {
      "parent_code": "150120",
      "a": "0",
      "area_code": "150120030",
      "en": "Shaoling",
      "l": "12",
      "ca": 4,
      "area_name": "召陵区"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080070",
      "en": "Nan'ao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南澳县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050070",
      "en": "Linzhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临漳县"
    },
    {
      "parent_code": "280210",
      "a": "0",
      "area_code": "280210130",
      "en": "Seda Co.",
      "l": "14",
      "ca": 4,
      "area_name": "色达县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010110",
      "en": "Baoshan",
      "l": "12",
      "ca": 4,
      "area_name": "宝山区"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150020",
      "en": "Qianfeng",
      "l": "12",
      "ca": 4,
      "area_name": "前锋区"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020160",
      "en": "Qiantang",
      "l": "12",
      "ca": 4,
      "area_name": "钱塘区"
    },
    {
      "parent_code": "200040",
      "a": "0",
      "area_code": "200040020",
      "en": "Nankang",
      "l": "12",
      "ca": 4,
      "area_name": "南康区"
    },
    {
      "parent_code": "050200",
      "a": "0",
      "area_code": "050200040",
      "en": "Lufeng",
      "l": "15",
      "ca": 4,
      "area_name": "陆丰"
    },
    {
      "parent_code": "150040",
      "a": "0",
      "area_code": "150040100",
      "en": "Song Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嵩县"
    },
    {
      "parent_code": "270080",
      "a": "0",
      "area_code": "270080060",
      "en": "Langao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岚皋县"
    },
    {
      "parent_code": "140020",
      "a": "0",
      "area_code": "140020200",
      "en": "Zanhuang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "赞皇县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100150",
      "en": "Wei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "威县"
    },
    {
      "parent_code": "310060",
      "a": "0",
      "area_code": "310060090",
      "en": "Xuanwei",
      "l": "15",
      "ca": 4,
      "area_name": "宣威"
    },
    {
      "parent_code": "100130",
      "a": "0",
      "area_code": "100130060",
      "en": "Zhengning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "正宁县"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150030",
      "en": "Dafeng",
      "l": "12",
      "ca": 4,
      "area_name": "大丰区"
    },
    {
      "parent_code": "160080",
      "a": "0",
      "area_code": "160080060",
      "en": "Xingshan",
      "l": "12",
      "ca": 4,
      "area_name": "兴山区"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120040",
      "en": "Xing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060090",
      "en": "Suichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "遂川县"
    },
    {
      "parent_code": "120020",
      "a": "0",
      "area_code": "120020090",
      "en": "Qingzhen",
      "l": "15",
      "ca": 4,
      "area_name": "清镇"
    },
    {
      "parent_code": "310040",
      "a": "0",
      "area_code": "310040010",
      "en": "Gucheng",
      "l": "12",
      "ca": 4,
      "area_name": "古城区"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090070",
      "en": "Hanggin Rear Banner",
      "l": "16",
      "ca": 4,
      "area_name": "杭锦后旗"
    },
    {
      "parent_code": "250050",
      "a": "0",
      "area_code": "250050070",
      "en": "Wenshang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汶上县"
    },
    {
      "parent_code": "080040",
      "a": "0",
      "area_code": "080040060",
      "en": "Wuhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五河县"
    },
    {
      "parent_code": "150120",
      "a": "0",
      "area_code": "150120040",
      "en": "Wuyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "舞阳县"
    },
    {
      "parent_code": "050080",
      "a": "0",
      "area_code": "050080060",
      "en": "Chenghai",
      "l": "12",
      "ca": 4,
      "area_name": "澄海区"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100090",
      "en": "Suining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥宁县"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020030",
      "en": "Yingze",
      "l": "12",
      "ca": 4,
      "area_name": "迎泽区"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110110",
      "en": "Zizhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "子洲县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020070",
      "en": "Xiaoshan",
      "l": "12",
      "ca": 4,
      "area_name": "萧山区"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050040",
      "en": "Zhangpu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "漳浦县"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050020",
      "en": "Jiangchuan",
      "l": "12",
      "ca": 4,
      "area_name": "江川区"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050060",
      "en": "Ziyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "紫云县"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080030",
      "en": "Guye",
      "l": "12",
      "ca": 4,
      "area_name": "古冶区"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100030",
      "en": "Zuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "左权县"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070050",
      "en": "Rudong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "如东县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060040",
      "en": "Jishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉水县"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110050",
      "en": "Yuzhou",
      "l": "15",
      "ca": 4,
      "area_name": "禹州"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170110",
      "en": "Xinye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新野县"
    },
    {
      "parent_code": "230040",
      "a": "0",
      "area_code": "230040040",
      "en": "Tongxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "同心县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020130",
      "en": "Yushu",
      "l": "15",
      "ca": 4,
      "area_name": "榆树"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090020",
      "en": "Wuyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "五原县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220040",
      "en": "Mao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "茂县"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150040",
      "en": "Xiangshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "响水县"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150010",
      "en": "Bincheng",
      "l": "12",
      "ca": 4,
      "area_name": "滨城区"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020080",
      "en": "Yuzhong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "榆中县"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070090",
      "en": "Xingwen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兴文县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030110",
      "en": "Feng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤县"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030050",
      "en": "Xiangfu",
      "l": "12",
      "ca": 4,
      "area_name": "祥符区"
    },
    {
      "parent_code": "310130",
      "a": "0",
      "area_code": "310130020",
      "en": "Menghai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "勐海县"
    },
    {
      "parent_code": "170140",
      "a": "0",
      "area_code": "170140020",
      "en": "Sui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "随县"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100080",
      "en": "Dongkou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洞口县"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070010",
      "en": "Shinan",
      "l": "12",
      "ca": 4,
      "area_name": "市南区"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020040",
      "en": "Jiancaoping",
      "l": "12",
      "ca": 4,
      "area_name": "尖草坪区"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080040",
      "en": "Kaiping",
      "l": "12",
      "ca": 4,
      "area_name": "开平区"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050030",
      "en": "Chengjiang",
      "l": "15",
      "ca": 4,
      "area_name": "澄江市"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110120",
      "en": "Shenmu",
      "l": "15",
      "ca": 4,
      "area_name": "神木"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020060",
      "en": "Binjiang",
      "l": "12",
      "ca": 4,
      "area_name": "滨江区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130010",
      "en": "Shunqing",
      "l": "12",
      "ca": 4,
      "area_name": "顺庆区"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050050",
      "en": "Guanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "关岭县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170090",
      "en": "Dongming Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东明县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100020",
      "en": "Yushe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "榆社县"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150020",
      "en": "Zhanhua",
      "l": "12",
      "ca": 4,
      "area_name": "沾化区"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050050",
      "en": "Zhao'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "诏安县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170120",
      "en": "Tongbai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桐柏县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060030",
      "en": "Ji'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉安县"
    },
    {
      "parent_code": "230040",
      "a": "0",
      "area_code": "230040050",
      "en": "Qingtongxia",
      "l": "15",
      "ca": 4,
      "area_name": "青铜峡"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020120",
      "en": "Jiutai",
      "l": "12",
      "ca": 4,
      "area_name": "九台区"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070060",
      "en": "Qidong",
      "l": "15",
      "ca": 4,
      "area_name": "启东"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110060",
      "en": "Changge",
      "l": "15",
      "ca": 4,
      "area_name": "长葛"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020070",
      "en": "Yongdeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永登县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220030",
      "en": "Li Co.",
      "l": "14",
      "ca": 4,
      "area_name": "理县"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180010",
      "en": "Korla",
      "l": "15",
      "ca": 4,
      "area_name": "库尔勒"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150050",
      "en": "Binhai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "滨海县"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030100",
      "en": "Lin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "麟游县"
    },
    {
      "parent_code": "190090",
      "a": "0",
      "area_code": "190090010",
      "en": "Taobei",
      "l": "12",
      "ca": 4,
      "area_name": "洮北区"
    },
    {
      "parent_code": "170140",
      "a": "0",
      "area_code": "170140010",
      "en": "Zengdu",
      "l": "12",
      "ca": 4,
      "area_name": "曾都区"
    },
    {
      "parent_code": "310130",
      "a": "0",
      "area_code": "310130010",
      "en": "Jinghong",
      "l": "15",
      "ca": 4,
      "area_name": "景洪"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030040",
      "en": "Yuwangtai",
      "l": "12",
      "ca": 4,
      "area_name": "禹王台区"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090010",
      "en": "Linhe",
      "l": "12",
      "ca": 4,
      "area_name": "临河区"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110030",
      "en": "Yanling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鄢陵县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020090",
      "en": "Ling'an",
      "l": "12",
      "ca": 4,
      "area_name": "临安区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030110",
      "en": "Bachu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴楚县"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080050",
      "en": "Fengnan",
      "l": "12",
      "ca": 4,
      "area_name": "丰南区"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020010",
      "en": "Xinghualing",
      "l": "12",
      "ca": 4,
      "area_name": "杏花岭区"
    },
    {
      "parent_code": "190090",
      "a": "0",
      "area_code": "190090020",
      "en": "Zhenlai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇赉县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110090",
      "en": "Longquan",
      "l": "15",
      "ca": 4,
      "area_name": "龙泉"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170080",
      "en": "Juancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鄄城县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100010",
      "en": "Yuci",
      "l": "12",
      "ca": 4,
      "area_name": "榆次区"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050060",
      "en": "Changtai",
      "l": "12",
      "ca": 4,
      "area_name": "长泰区"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060060",
      "en": "Xinqian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新干县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060110",
      "en": "Banbar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "边坝县"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170130",
      "en": "Dengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "邓州"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070070",
      "en": "Rugao",
      "l": "15",
      "ca": 4,
      "area_name": "如皋"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090040",
      "en": "Urad Front Banner",
      "l": "16",
      "ca": 4,
      "area_name": "乌拉特前旗"
    },
    {
      "parent_code": "230040",
      "a": "0",
      "area_code": "230040020",
      "en": "Hongsibu",
      "l": "12",
      "ca": 4,
      "area_name": "红寺堡区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040330",
      "en": "Songshanhu",
      "l": "14",
      "ca": 4,
      "area_name": "松山湖"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150060",
      "en": "Funing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阜宁县"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030070",
      "en": "Tongxu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通许县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120090",
      "en": "Fangshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "方山县"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050020",
      "en": "Youxian",
      "l": "12",
      "ca": 4,
      "area_name": "游仙区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070070",
      "en": "Gong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "珙县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220020",
      "en": "Wenchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汶川县"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100060",
      "en": "Shaoyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "邵阳县"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070030",
      "en": "Chengyang",
      "l": "12",
      "ca": 4,
      "area_name": "城阳区"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100060",
      "en": "Zhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "漳县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020140",
      "en": "Nong'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "农安县"
    },
    {
      "parent_code": "280150",
      "a": "0",
      "area_code": "280150060",
      "en": "Huaying",
      "l": "15",
      "ca": 4,
      "area_name": "华蓥"
    },
    {
      "parent_code": "150110",
      "a": "0",
      "area_code": "150110040",
      "en": "Xiangcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "襄城县"
    },
    {
      "parent_code": "270110",
      "a": "0",
      "area_code": "270110100",
      "en": "Qingjian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清涧县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020080",
      "en": "Yuhang",
      "l": "12",
      "ca": 4,
      "area_name": "余杭区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040090",
      "en": "Ji Co.",
      "l": "14",
      "ca": 4,
      "area_name": "吉县"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020020",
      "en": "Xiaodian",
      "l": "12",
      "ca": 4,
      "area_name": "小店区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030120",
      "en": "Taxkorgan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "塔县"
    },
    {
      "parent_code": "310050",
      "a": "0",
      "area_code": "310050010",
      "en": "Hongta",
      "l": "12",
      "ca": 4,
      "area_name": "红塔区"
    },
    {
      "parent_code": "190090",
      "a": "0",
      "area_code": "190090030",
      "en": "Tongyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通榆县"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020080",
      "en": "Maizhokunggar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "墨竹工卡县"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050070",
      "en": "Dongshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东山县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060050",
      "en": "Xiajiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "峡江县"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040320",
      "en": "Gaobu",
      "l": "14",
      "ca": 4,
      "area_name": "高埗镇"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070080",
      "en": "Haimen",
      "l": "12",
      "ca": 4,
      "area_name": "海门区"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170070",
      "en": "Yuncheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郓城县"
    },
    {
      "parent_code": "230040",
      "a": "0",
      "area_code": "230040030",
      "en": "Yanchi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐池县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060100",
      "en": "Lhorong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛隆县"
    },
    {
      "parent_code": "220090",
      "a": "0",
      "area_code": "220090030",
      "en": "Dengkou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "磴口县"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150070",
      "en": "Sheyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "射阳县"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030060",
      "en": "Qi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "杞县"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070080",
      "en": "Junlian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "筠连县"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120080",
      "en": "Lan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岚县"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080060",
      "en": "Fengrun",
      "l": "12",
      "ca": 4,
      "area_name": "丰润区"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050010",
      "en": "Fucheng",
      "l": "12",
      "ca": 4,
      "area_name": "涪城区"
    },
    {
      "parent_code": "270030",
      "a": "0",
      "area_code": "270030120",
      "en": "Taibai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "太白县"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100070",
      "en": "Min Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岷县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220010",
      "en": "Barkam",
      "l": "15",
      "ca": 4,
      "area_name": "马尔康"
    },
    {
      "parent_code": "170140",
      "a": "0",
      "area_code": "170140030",
      "en": "Guangshui",
      "l": "15",
      "ca": 4,
      "area_name": "广水"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100070",
      "en": "Longhui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆回县"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070020",
      "en": "Shibei",
      "l": "12",
      "ca": 4,
      "area_name": "市北区"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070050",
      "en": "Licang",
      "l": "12",
      "ca": 4,
      "area_name": "李沧区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010220",
      "en": "Tongliang",
      "l": "12",
      "ca": 4,
      "area_name": "铜梁区"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100070",
      "en": "Taigu",
      "l": "12",
      "ca": 4,
      "area_name": "太谷区"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080090",
      "en": "Jinxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金溪县"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130040",
      "en": "Nanbu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南部县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110070",
      "en": "Qingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "庆元县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010060",
      "en": "Hongkou",
      "l": "12",
      "ca": 4,
      "area_name": "虹口区"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050080",
      "en": "Nanjing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南靖县"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150070",
      "en": "Yongren Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永仁县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100100",
      "en": "Dorbod Banner",
      "l": "16",
      "ca": 4,
      "area_name": "四子王旗"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040080",
      "en": "Fushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "浮山县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170060",
      "en": "Juye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巨野县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080070",
      "en": "Honghu",
      "l": "15",
      "ca": 4,
      "area_name": "洪湖"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070010",
      "en": "Chongchuan",
      "l": "12",
      "ca": 4,
      "area_name": "崇川区"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150080",
      "en": "Jianhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建湖县"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100040",
      "en": "Weiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "渭源县"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100040",
      "en": "Shaodong",
      "l": "15",
      "ca": 4,
      "area_name": "邵东市"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080070",
      "en": "Caofeidian",
      "l": "12",
      "ca": 4,
      "area_name": "曹妃甸区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070050",
      "en": "Changning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长宁县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030010",
      "en": "Honghuagang",
      "l": "12",
      "ca": 4,
      "area_name": "红花岗区"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030010",
      "en": "Longting",
      "l": "12",
      "ca": 4,
      "area_name": "龙亭区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010210",
      "en": "Tongnan",
      "l": "12",
      "ca": 4,
      "area_name": "潼南区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030100",
      "en": "Jiashi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "伽师县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100060",
      "en": "Shouyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "寿阳县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110080",
      "en": "Jingning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "景宁县"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130010",
      "en": "Jingkou",
      "l": "12",
      "ca": 4,
      "area_name": "京口区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130050",
      "en": "Yingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "营山县"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150080",
      "en": "Yuanmou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "元谋县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170050",
      "en": "Chengwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "成武县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040070",
      "en": "Anze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安泽县"
    },
    {
      "parent_code": "160040",
      "a": "0",
      "area_code": "160040100",
      "en": "Fuyuan",
      "l": "15",
      "ca": 4,
      "area_name": "抚远"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050090",
      "en": "Pinghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平和县"
    },
    {
      "parent_code": "220100",
      "a": "0",
      "area_code": "220100110",
      "en": "Fengzhen",
      "l": "15",
      "ca": 4,
      "area_name": "丰镇"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080060",
      "en": "Shishou",
      "l": "15",
      "ca": 4,
      "area_name": "石首"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080080",
      "en": "Luanzhou",
      "l": "15",
      "ca": 4,
      "area_name": "滦州"
    },
    {
      "parent_code": "060150",
      "a": "0",
      "area_code": "060150090",
      "en": "Dongtai",
      "l": "15",
      "ca": 4,
      "area_name": "东台"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070060",
      "en": "Gao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高县"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030020",
      "en": "Huichuan",
      "l": "12",
      "ca": 4,
      "area_name": "汇川区"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100050",
      "en": "Xinshao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新邵县"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100050",
      "en": "Lintao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临洮县"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070070",
      "en": "Laoshan",
      "l": "12",
      "ca": 4,
      "area_name": "崂山区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010200",
      "en": "Qijiang",
      "l": "12",
      "ca": 4,
      "area_name": "綦江区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030030",
      "en": "Bozhou",
      "l": "12",
      "ca": 4,
      "area_name": "播州区"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110050",
      "en": "Songyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "松阳县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050080",
      "en": "Xiayi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "夏邑县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100050",
      "en": "Xiyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昔阳县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080070",
      "en": "Yue Co.",
      "l": "14",
      "ca": 4,
      "area_name": "乐安县"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130020",
      "en": "Gaoping",
      "l": "12",
      "ca": 4,
      "area_name": "高坪区"
    },
    {
      "parent_code": "200120",
      "a": "0",
      "area_code": "200120010",
      "en": "Yuehu",
      "l": "12",
      "ca": 4,
      "area_name": "月湖区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030190",
      "en": "Dingzhou",
      "l": "15",
      "ca": 4,
      "area_name": "定州"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130020",
      "en": "Runzhou",
      "l": "12",
      "ca": 4,
      "area_name": "润州区"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150090",
      "en": "Wuding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武定县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010080",
      "en": "Huangpu",
      "l": "12",
      "ca": 4,
      "area_name": "黄浦区"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070030",
      "en": "Tongzhou",
      "l": "12",
      "ca": 4,
      "area_name": "通州区"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170040",
      "en": "Shan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "单县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040060",
      "en": "Gu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "古县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060020",
      "en": "Qingyuan",
      "l": "12",
      "ca": 4,
      "area_name": "青原区"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110110",
      "en": "Longlin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "隆林县"
    },
    {
      "parent_code": "230020",
      "a": "0",
      "area_code": "230020010",
      "en": "Xixia",
      "l": "12",
      "ca": 4,
      "area_name": "西夏区"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100020",
      "en": "Daxiang",
      "l": "12",
      "ca": 4,
      "area_name": "大祥区"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080090",
      "en": "Luannan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "滦南县"
    },
    {
      "parent_code": "310070",
      "a": "0",
      "area_code": "310070050",
      "en": "Tengchong",
      "l": "15",
      "ca": 4,
      "area_name": "腾冲"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100020",
      "en": "Tongwei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "通渭县"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030030",
      "en": "Gulou",
      "l": "12",
      "ca": 4,
      "area_name": "鼓楼区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070030",
      "en": "Xuzhou",
      "l": "12",
      "ca": 4,
      "area_name": "叙州区"
    },
    {
      "parent_code": "120030",
      "a": "0",
      "area_code": "120030040",
      "en": "Tongzi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桐梓县"
    },
    {
      "parent_code": "250070",
      "a": "0",
      "area_code": "250070060",
      "en": "Huangdao",
      "l": "12",
      "ca": 4,
      "area_name": "黄岛区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130030",
      "en": "Jialing",
      "l": "12",
      "ca": 4,
      "area_name": "嘉陵区"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050090",
      "en": "Yongcheng",
      "l": "15",
      "ca": 4,
      "area_name": "永城"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110060",
      "en": "Yunhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云和县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010070",
      "en": "Yangpu",
      "l": "12",
      "ca": 4,
      "area_name": "杨浦区"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020180",
      "en": "Gongzhuling City",
      "l": "15",
      "ca": 4,
      "area_name": "公主岭市"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100040",
      "en": "Heshun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和顺县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080080",
      "en": "Yihuang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜黄县"
    },
    {
      "parent_code": "060070",
      "a": "0",
      "area_code": "060070040",
      "en": "Hai'an",
      "l": "15",
      "ca": 4,
      "area_name": "海安"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130030",
      "en": "Dantu",
      "l": "12",
      "ca": 4,
      "area_name": "丹徒区"
    },
    {
      "parent_code": "110110",
      "a": "0",
      "area_code": "110110120",
      "en": "Jingxi",
      "l": "15",
      "ca": 4,
      "area_name": "靖西"
    },
    {
      "parent_code": "150170",
      "a": "0",
      "area_code": "150170100",
      "en": "Tanghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "唐河县"
    },
    {
      "parent_code": "200060",
      "a": "0",
      "area_code": "200060010",
      "en": "Jizhou",
      "l": "12",
      "ca": 4,
      "area_name": "吉州区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040050",
      "en": "Hongtong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洪洞县"
    },
    {
      "parent_code": "250170",
      "a": "0",
      "area_code": "250170030",
      "en": "Cao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曹县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080080",
      "en": "Songzi",
      "l": "15",
      "ca": 4,
      "area_name": "松滋"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100110",
      "en": "Tangwang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汤旺县"
    },
    {
      "parent_code": "310130",
      "a": "0",
      "area_code": "310130030",
      "en": "Mengla Co.",
      "l": "14",
      "ca": 4,
      "area_name": "勐腊县"
    },
    {
      "parent_code": "100100",
      "a": "0",
      "area_code": "100100030",
      "en": "Longxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "陇西县"
    },
    {
      "parent_code": "310070",
      "a": "0",
      "area_code": "310070040",
      "en": "Changning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昌宁县"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100030",
      "en": "Beita",
      "l": "12",
      "ca": 4,
      "area_name": "北塔区"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030020",
      "en": "Shunhe",
      "l": "12",
      "ca": 4,
      "area_name": "顺河区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070040",
      "en": "Jiang'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江安县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080050",
      "en": "Nanfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南丰县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110030",
      "en": "Jinyun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "缙云县"
    },
    {
      "parent_code": "210110",
      "a": "0",
      "area_code": "210110070",
      "en": "Zhangwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彰武县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130100",
      "en": "Xintian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新田县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010260",
      "en": "Dianjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "垫江县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020130",
      "en": "Wuchang",
      "l": "15",
      "ca": 4,
      "area_name": "五常"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060020",
      "en": "Guangyang",
      "l": "12",
      "ca": 4,
      "area_name": "广阳区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130080",
      "en": "Xicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "西充县"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130040",
      "en": "Danyang",
      "l": "15",
      "ca": 4,
      "area_name": "丹阳"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070070",
      "en": "Yinjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "印江县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040020",
      "en": "Fancheng",
      "l": "12",
      "ca": 4,
      "area_name": "樊城区"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050080",
      "en": "Pingwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平武县"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120010",
      "en": "Xiaonan",
      "l": "12",
      "ca": 4,
      "area_name": "孝南区"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100120",
      "en": "DaQingshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大箐山县"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150030",
      "en": "Mou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "牟定县"
    },
    {
      "parent_code": "050180",
      "a": "0",
      "area_code": "050180020",
      "en": "Dianbai",
      "l": "12",
      "ca": 4,
      "area_name": "电白区"
    },
    {
      "parent_code": "080080",
      "a": "0",
      "area_code": "080080010",
      "en": "Duji",
      "l": "12",
      "ca": 4,
      "area_name": "杜集区"
    },
    {
      "parent_code": "310070",
      "a": "0",
      "area_code": "310070030",
      "en": "Long Co.",
      "l": "14",
      "ca": 4,
      "area_name": "龙陵县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030070",
      "en": "Haicheng",
      "l": "15",
      "ca": 4,
      "area_name": "海城"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090020",
      "en": "Daiyue",
      "l": "12",
      "ca": 4,
      "area_name": "岱岳区"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080060",
      "en": "Chongren Co.",
      "l": "14",
      "ca": 4,
      "area_name": "崇仁县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110040",
      "en": "Suichang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "遂昌县"
    },
    {
      "parent_code": "180130",
      "a": "0",
      "area_code": "180130110",
      "en": "Jianghua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江华县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010250",
      "en": "Bishan",
      "l": "12",
      "ca": 4,
      "area_name": "璧山区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020200",
      "en": "Pengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "彭州"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130050",
      "en": "Yangzhong",
      "l": "15",
      "ca": 4,
      "area_name": "扬中"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020140",
      "en": "Fangzheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "方正县"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070080",
      "en": "Dejiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德江县"
    },
    {
      "parent_code": "140060",
      "a": "0",
      "area_code": "140060010",
      "en": "Anci",
      "l": "12",
      "ca": 4,
      "area_name": "安次区"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040030",
      "en": "Xiangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "襄州区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130090",
      "en": "Langzhong",
      "l": "15",
      "ca": 4,
      "area_name": "阆中"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120020",
      "en": "Xiaochang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "孝昌县"
    },
    {
      "parent_code": "050180",
      "a": "0",
      "area_code": "050180010",
      "en": "Maonan",
      "l": "12",
      "ca": 4,
      "area_name": "茂南区"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150040",
      "en": "Nanhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南华县"
    },
    {
      "parent_code": "080080",
      "a": "0",
      "area_code": "080080020",
      "en": "Xiangshan",
      "l": "12",
      "ca": 4,
      "area_name": "相山区"
    },
    {
      "parent_code": "180100",
      "a": "0",
      "area_code": "180100010",
      "en": "Shuangqing",
      "l": "12",
      "ca": 4,
      "area_name": "双清区"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090030",
      "en": "Ningyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁阳县"
    },
    {
      "parent_code": "310070",
      "a": "0",
      "area_code": "310070020",
      "en": "Shidian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "施甸县"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070100",
      "en": "Ruzhou",
      "l": "15",
      "ca": 4,
      "area_name": "汝州"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050070",
      "en": "Beichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "北川县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030060",
      "en": "Xiuyan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岫岩县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100090",
      "en": "Pingyao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平遥县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080030",
      "en": "Nancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南城县"
    },
    {
      "parent_code": "060130",
      "a": "0",
      "area_code": "060130060",
      "en": "Jurong",
      "l": "15",
      "ca": 4,
      "area_name": "句容"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130020",
      "en": "Zhangdian",
      "l": "12",
      "ca": 4,
      "area_name": "张店区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010240",
      "en": "Rongchang",
      "l": "12",
      "ca": 4,
      "area_name": "荣昌区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020210",
      "en": "Qionglai",
      "l": "15",
      "ca": 4,
      "area_name": "邛崃"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020150",
      "en": "Bin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宾县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040040",
      "en": "Nanzhang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南漳县"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130060",
      "en": "Pengan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蓬安县"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020020",
      "en": "Chengguan",
      "l": "12",
      "ca": 4,
      "area_name": "城关区"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110010",
      "en": "Liandu",
      "l": "12",
      "ca": 4,
      "area_name": "莲都区"
    },
    {
      "parent_code": "230060",
      "a": "0",
      "area_code": "230060020",
      "en": "Zhongning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "中宁县"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150070",
      "en": "Zouping",
      "l": "15",
      "ca": 4,
      "area_name": "邹平市"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120030",
      "en": "Dawu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大悟县"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070050",
      "en": "Shiqian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石阡县"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150050",
      "en": "Yao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "姚安县"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030010",
      "en": "Shizhong",
      "l": "12",
      "ca": 4,
      "area_name": "市中区"
    },
    {
      "parent_code": "310070",
      "a": "0",
      "area_code": "310070010",
      "en": "Longyang",
      "l": "12",
      "ca": 4,
      "area_name": "隆阳区"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040070",
      "en": "Dunhuang",
      "l": "15",
      "ca": 4,
      "area_name": "敦煌"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110010",
      "en": "Lizhou",
      "l": "12",
      "ca": 4,
      "area_name": "利州区"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030050",
      "en": "Tai'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "台安县"
    },
    {
      "parent_code": "070110",
      "a": "0",
      "area_code": "070110020",
      "en": "Qingtian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青田县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030040",
      "en": "Qianshan",
      "l": "12",
      "ca": 4,
      "area_name": "千山区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010230",
      "en": "Dazu",
      "l": "12",
      "ca": 4,
      "area_name": "大足区"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100080",
      "en": "Qi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "祁县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080040",
      "en": "Lichuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黎川县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020220",
      "en": "Chongzhou",
      "l": "15",
      "ca": 4,
      "area_name": "崇州"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130010",
      "en": "Zichuan",
      "l": "12",
      "ca": 4,
      "area_name": "淄川区"
    },
    {
      "parent_code": "280130",
      "a": "0",
      "area_code": "280130070",
      "en": "Yilong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "仪陇县"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040050",
      "en": "Gucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "谷城县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020160",
      "en": "Yilan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "依兰县"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020010",
      "en": "Gaolan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "皋兰县"
    },
    {
      "parent_code": "230060",
      "a": "0",
      "area_code": "230060030",
      "en": "Haiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "海原县"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050090",
      "en": "Jiangyou",
      "l": "15",
      "ca": 4,
      "area_name": "江油"
    },
    {
      "parent_code": "280030",
      "a": "0",
      "area_code": "280030020",
      "en": "Shawan",
      "l": "12",
      "ca": 4,
      "area_name": "沙湾区"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070060",
      "en": "Sinan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "思南县"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150060",
      "en": "Dayao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大姚县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050110",
      "en": "Nilka Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尼勒克县"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090010",
      "en": "Taishan",
      "l": "12",
      "ca": 4,
      "area_name": "泰山区"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120040",
      "en": "Yunmeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云梦县"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070030",
      "en": "Fusong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "抚松县"
    },
    {
      "parent_code": "190090",
      "a": "0",
      "area_code": "190090040",
      "en": "Taonan",
      "l": "15",
      "ca": 4,
      "area_name": "洮南"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150050",
      "en": "Wudi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "无棣县"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080010",
      "en": "Linchuan",
      "l": "12",
      "ca": 4,
      "area_name": "临川区"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020040",
      "en": "Xigu",
      "l": "12",
      "ca": 4,
      "area_name": "西固区"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030090",
      "en": "Lankao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兰考县"
    },
    {
      "parent_code": "300050",
      "a": "0",
      "area_code": "300050100",
      "en": "Tekes Co.",
      "l": "14",
      "ca": 4,
      "area_name": "特克斯县"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110030",
      "en": "Chaotian",
      "l": "12",
      "ca": 4,
      "area_name": "朝天区"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090060",
      "en": "Feicheng",
      "l": "15",
      "ca": 4,
      "area_name": "肥城"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100160",
      "en": "Jiayin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嘉荫县"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050020",
      "en": "Pingba",
      "l": "12",
      "ca": 4,
      "area_name": "平坝区"
    },
    {
      "parent_code": "180120",
      "a": "0",
      "area_code": "180120050",
      "en": "Lianyuan",
      "l": "15",
      "ca": 4,
      "area_name": "涟源"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050040",
      "en": "Santai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三台县"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120050",
      "en": "Yingcheng",
      "l": "15",
      "ca": 4,
      "area_name": "应城"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070020",
      "en": "Jiangyuan",
      "l": "12",
      "ca": 4,
      "area_name": "江源区"
    },
    {
      "parent_code": "190090",
      "a": "0",
      "area_code": "190090050",
      "en": "Da'an",
      "l": "15",
      "ca": 4,
      "area_name": "大安"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010290",
      "en": "Chengkou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "城口县"
    },
    {
      "parent_code": "050180",
      "a": "0",
      "area_code": "050180050",
      "en": "Xinyi",
      "l": "15",
      "ca": 4,
      "area_name": "信宜"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020030",
      "en": "Qilihe",
      "l": "12",
      "ca": 4,
      "area_name": "七里河区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020100",
      "en": "Songbei",
      "l": "12",
      "ca": 4,
      "area_name": "松北区"
    },
    {
      "parent_code": "200080",
      "a": "0",
      "area_code": "200080020",
      "en": "Dongxiang",
      "l": "12",
      "ca": 4,
      "area_name": "东乡区"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150060",
      "en": "Boxing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博兴县"
    },
    {
      "parent_code": "230040",
      "a": "0",
      "area_code": "230040010",
      "en": "Litong",
      "l": "12",
      "ca": 4,
      "area_name": "利通区"
    },
    {
      "parent_code": "150030",
      "a": "0",
      "area_code": "150030080",
      "en": "Weishi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尉氏县"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050030",
      "en": "Anzhou",
      "l": "12",
      "ca": 4,
      "area_name": "安州区"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100170",
      "en": "Tieli",
      "l": "15",
      "ca": 4,
      "area_name": "铁力"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110020",
      "en": "Zhaohua",
      "l": "12",
      "ca": 4,
      "area_name": "昭化区"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050010",
      "en": "Xixiu",
      "l": "12",
      "ca": 4,
      "area_name": "西秀区"
    },
    {
      "parent_code": "180120",
      "a": "0",
      "area_code": "180120040",
      "en": "Lengshuijiang",
      "l": "15",
      "ca": 4,
      "area_name": "冷水江"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120060",
      "en": "Anlu",
      "l": "15",
      "ca": 4,
      "area_name": "安陆"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080010",
      "en": "Lunan",
      "l": "12",
      "ca": 4,
      "area_name": "路南区"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020050",
      "en": "Wanbailin",
      "l": "12",
      "ca": 4,
      "area_name": "万柏林区"
    },
    {
      "parent_code": "190070",
      "a": "0",
      "area_code": "190070010",
      "en": "Hunjiang",
      "l": "12",
      "ca": 4,
      "area_name": "浑江区"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070090",
      "en": "Yanhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沿河县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010280",
      "en": "Fengdu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "丰都县"
    },
    {
      "parent_code": "050180",
      "a": "0",
      "area_code": "050180040",
      "en": "Huazhou",
      "l": "15",
      "ca": 4,
      "area_name": "化州"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150030",
      "en": "Huimin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "惠民县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020110",
      "en": "Shangzhi",
      "l": "15",
      "ca": 4,
      "area_name": "尚志"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150010",
      "en": "Chuxiong",
      "l": "15",
      "ca": 4,
      "area_name": "楚雄"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020060",
      "en": "Honggu",
      "l": "12",
      "ca": 4,
      "area_name": "红古区"
    },
    {
      "parent_code": "300070",
      "a": "0",
      "area_code": "300070010",
      "en": "Yizhou",
      "l": "12",
      "ca": 4,
      "area_name": "伊州区"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090100",
      "en": "Mengzhou",
      "l": "15",
      "ca": 4,
      "area_name": "孟州"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110050",
      "en": "Qingchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "青川县"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050040",
      "en": "Zhenning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇宁县"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090040",
      "en": "Dongping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东平县"
    },
    {
      "parent_code": "080080",
      "a": "0",
      "area_code": "080080030",
      "en": "Lieshan",
      "l": "12",
      "ca": 4,
      "area_name": "烈山区"
    },
    {
      "parent_code": "180120",
      "a": "0",
      "area_code": "180120030",
      "en": "Xinhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "新化县"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050060",
      "en": "Zitong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "梓潼县"
    },
    {
      "parent_code": "170120",
      "a": "0",
      "area_code": "170120070",
      "en": "Hanchuan",
      "l": "15",
      "ca": 4,
      "area_name": "汉川"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100180",
      "en": "Yimei",
      "l": "12",
      "ca": 4,
      "area_name": "伊美区"
    },
    {
      "parent_code": "260020",
      "a": "0",
      "area_code": "260020060",
      "en": "Jinyuan",
      "l": "12",
      "ca": 4,
      "area_name": "晋源区"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010270",
      "en": "Wulong",
      "l": "12",
      "ca": 4,
      "area_name": "武隆区"
    },
    {
      "parent_code": "140080",
      "a": "0",
      "area_code": "140080020",
      "en": "Lubei",
      "l": "12",
      "ca": 4,
      "area_name": "路北区"
    },
    {
      "parent_code": "250150",
      "a": "0",
      "area_code": "250150040",
      "en": "Yangxin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳信县"
    },
    {
      "parent_code": "050180",
      "a": "0",
      "area_code": "050180030",
      "en": "Gaozhou",
      "l": "15",
      "ca": 4,
      "area_name": "高州"
    },
    {
      "parent_code": "170040",
      "a": "0",
      "area_code": "170040010",
      "en": "Xiangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "襄城区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020120",
      "en": "Shuangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "双城区"
    },
    {
      "parent_code": "150150",
      "a": "0",
      "area_code": "150150100",
      "en": "Xiangcheng",
      "l": "15",
      "ca": 4,
      "area_name": "项城"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150020",
      "en": "Shuangbai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "双柏县"
    },
    {
      "parent_code": "180120",
      "a": "0",
      "area_code": "180120020",
      "en": "Shuangfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "双峰县"
    },
    {
      "parent_code": "100020",
      "a": "0",
      "area_code": "100020050",
      "en": "Anning",
      "l": "12",
      "ca": 4,
      "area_name": "安宁区"
    },
    {
      "parent_code": "300070",
      "a": "0",
      "area_code": "300070020",
      "en": "Barkol Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴里坤县"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110040",
      "en": "Wangcang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "旺苍县"
    },
    {
      "parent_code": "120050",
      "a": "0",
      "area_code": "120050030",
      "en": "Puding Co.",
      "l": "14",
      "ca": 4,
      "area_name": "普定县"
    },
    {
      "parent_code": "250090",
      "a": "0",
      "area_code": "250090050",
      "en": "Xintai",
      "l": "15",
      "ca": 4,
      "area_name": "新泰"
    },
    {
      "parent_code": "080080",
      "a": "0",
      "area_code": "080080040",
      "en": "Suixi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "濉溪县"
    },
    {
      "parent_code": "280050",
      "a": "0",
      "area_code": "280050050",
      "en": "Yanting Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐亭县"
    },
    {
      "parent_code": "160100",
      "a": "0",
      "area_code": "160100190",
      "en": "Wucui",
      "l": "12",
      "ca": 4,
      "area_name": "乌翠区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050180",
      "en": "Wu'an",
      "l": "15",
      "ca": 4,
      "area_name": "武安"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020150",
      "en": "Xinjin",
      "l": "12",
      "ca": 4,
      "area_name": "新津区"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160070",
      "en": "Yutian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "于田县"
    },
    {
      "parent_code": "050160",
      "a": "0",
      "area_code": "050160010",
      "en": "Jiangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "江城区"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070070",
      "en": "Lushan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鲁山县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110090",
      "en": "Yuanyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "元阳县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010140",
      "en": "Pinggu",
      "l": "12",
      "ca": 4,
      "area_name": "平谷区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020090",
      "en": "Hulan",
      "l": "12",
      "ca": 4,
      "area_name": "呼兰区"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040010",
      "en": "Suzhou",
      "l": "12",
      "ca": 4,
      "area_name": "肃州区"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060050",
      "en": "Tunliu",
      "l": "12",
      "ca": 4,
      "area_name": "屯留区"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130080",
      "en": "Yiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "沂源县"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040040",
      "en": "Motuo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "墨脱县"
    },
    {
      "parent_code": "130020",
      "a": "0",
      "area_code": "130020010",
      "en": "Xiuying",
      "l": "12",
      "ca": 4,
      "area_name": "秀英区"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090060",
      "en": "Liancheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "连城县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090080",
      "en": "Jinping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "锦屏县"
    },
    {
      "parent_code": "110050",
      "a": "0",
      "area_code": "110050100",
      "en": "Sanjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三江县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020100",
      "en": "Yuhuatai",
      "l": "12",
      "ca": 4,
      "area_name": "雨花台区"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110070",
      "en": "Cangxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "苍溪县"
    },
    {
      "parent_code": "180120",
      "a": "0",
      "area_code": "180120010",
      "en": "Louxing",
      "l": "12",
      "ca": 4,
      "area_name": "娄星区"
    },
    {
      "parent_code": "200100",
      "a": "0",
      "area_code": "200100020",
      "en": "Xiangdong",
      "l": "12",
      "ca": 4,
      "area_name": "湘东区"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050060",
      "en": "Linli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临澧县"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120010",
      "en": "Taocheng",
      "l": "12",
      "ca": 4,
      "area_name": "桃城区"
    },
    {
      "parent_code": "280090",
      "a": "0",
      "area_code": "280090020",
      "en": "Xi",
      "l": "12",
      "ca": 4,
      "area_name": "西区"
    },
    {
      "parent_code": "300070",
      "a": "0",
      "area_code": "300070030",
      "en": "Yiwu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "伊吾县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140020",
      "en": "Yizhou",
      "l": "12",
      "ca": 4,
      "area_name": "宜州区"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060080",
      "en": "Dongyang",
      "l": "15",
      "ca": 4,
      "area_name": "东阳"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160060",
      "en": "Qira Co.",
      "l": "14",
      "ca": 4,
      "area_name": "策勒县"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130070",
      "en": "Gaoqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高青县"
    },
    {
      "parent_code": "050160",
      "a": "0",
      "area_code": "050160020",
      "en": "Yangdong",
      "l": "12",
      "ca": 4,
      "area_name": "阳东区"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070060",
      "en": "Ye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "叶县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010150",
      "en": "Changping",
      "l": "12",
      "ca": 4,
      "area_name": "昌平区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050170",
      "en": "Quzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲周县"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040020",
      "en": "Jinta Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金塔县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060060",
      "en": "Pingshun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平顺县"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090070",
      "en": "Zhangping",
      "l": "15",
      "ca": 4,
      "area_name": "漳平"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040050",
      "en": "Bome Co.",
      "l": "14",
      "ca": 4,
      "area_name": "波密县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090070",
      "en": "Tianzhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天柱县"
    },
    {
      "parent_code": "280110",
      "a": "0",
      "area_code": "280110060",
      "en": "Jiange Co.",
      "l": "14",
      "ca": 4,
      "area_name": "剑阁县"
    },
    {
      "parent_code": "200100",
      "a": "0",
      "area_code": "200100030",
      "en": "Lianhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "莲花县"
    },
    {
      "parent_code": "220130",
      "a": "0",
      "area_code": "220130010",
      "en": "Alxa Left Banner",
      "l": "16",
      "ca": 4,
      "area_name": "阿拉善左旗"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050050",
      "en": "Li Co.",
      "l": "14",
      "ca": 4,
      "area_name": "澧县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140010",
      "en": "Jinchengjiang",
      "l": "12",
      "ca": 4,
      "area_name": "金城江区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030100",
      "en": "Gaoyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "高阳县"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060090",
      "en": "Yongkang",
      "l": "15",
      "ca": 4,
      "area_name": "永康"
    },
    {
      "parent_code": "280090",
      "a": "0",
      "area_code": "280090010",
      "en": "Dong",
      "l": "12",
      "ca": 4,
      "area_name": "东区"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040060",
      "en": "Zayu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "察隅县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110010",
      "en": "Weicheng",
      "l": "12",
      "ca": 4,
      "area_name": "潍城区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010120",
      "en": "Tongzhou",
      "l": "12",
      "ca": 4,
      "area_name": "通州区"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050100",
      "en": "Wanzhi",
      "l": "12",
      "ca": 4,
      "area_name": "湾沚区"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070050",
      "en": "Baofeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宝丰县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110070",
      "en": "Shiping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石屏县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050160",
      "en": "Wei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "魏县"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090040",
      "en": "Shanghang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上杭县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060070",
      "en": "Licheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黎城县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020170",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040010",
      "en": "Lucheng",
      "l": "12",
      "ca": 4,
      "area_name": "鹿城区"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030090",
      "en": "Jinmen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金门县"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060060",
      "en": "Lanxi",
      "l": "15",
      "ca": 4,
      "area_name": "兰溪"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090060",
      "en": "Cengong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岑巩县"
    },
    {
      "parent_code": "200100",
      "a": "0",
      "area_code": "200100040",
      "en": "Shangli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "上栗县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020120",
      "en": "Lishui",
      "l": "12",
      "ca": 4,
      "area_name": "溧水区"
    },
    {
      "parent_code": "220130",
      "a": "0",
      "area_code": "220130020",
      "en": "Alxa Right Banner",
      "l": "16",
      "ca": 4,
      "area_name": "阿拉善右旗"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050040",
      "en": "Hanshou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汉寿县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070110",
      "en": "Foping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "佛坪县"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040070",
      "en": "Lang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "朗县"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160080",
      "en": "Minfeng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "民丰县"
    },
    {
      "parent_code": "300140",
      "a": "0",
      "area_code": "300140010",
      "en": "Gaochang",
      "l": "12",
      "ca": 4,
      "area_name": "高昌区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010130",
      "en": "Shunyi",
      "l": "12",
      "ca": 4,
      "area_name": "顺义区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050150",
      "en": "Guantao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "馆陶县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110020",
      "en": "Hanting",
      "l": "12",
      "ca": 4,
      "area_name": "寒亭区"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070040",
      "en": "Zhanhe",
      "l": "12",
      "ca": 4,
      "area_name": "湛河区"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110080",
      "en": "Luxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泸西县"
    },
    {
      "parent_code": "220130",
      "a": "0",
      "area_code": "220130030",
      "en": "Ejin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "额济纳旗"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060080",
      "en": "Huguan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "壶关县"
    },
    {
      "parent_code": "040",
      "a": "0",
      "area_code": "040010190",
      "en": "Qianjiang",
      "l": "12",
      "ca": 4,
      "area_name": "黔江区"
    },
    {
      "parent_code": "090090",
      "a": "0",
      "area_code": "090090050",
      "en": "Wuping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武平县"
    },
    {
      "parent_code": "070060",
      "a": "0",
      "area_code": "070060070",
      "en": "Yiwu",
      "l": "15",
      "ca": 4,
      "area_name": "义乌"
    },
    {
      "parent_code": "310150",
      "a": "0",
      "area_code": "310150100",
      "en": "Lufeng",
      "l": "15",
      "ca": 4,
      "area_name": "禄丰市"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090050",
      "en": "Zhenyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "镇远县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030080",
      "en": "Dehua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "德化县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020110",
      "en": "Jiangning",
      "l": "12",
      "ca": 4,
      "area_name": "江宁区"
    },
    {
      "parent_code": "200100",
      "a": "0",
      "area_code": "200100050",
      "en": "Luxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "芦溪县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050030",
      "en": "Anxiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安乡县"
    },
    {
      "parent_code": "270070",
      "a": "0",
      "area_code": "270070100",
      "en": "Liuba Co.",
      "l": "14",
      "ca": 4,
      "area_name": "留坝县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030030",
      "en": "Lishan",
      "l": "12",
      "ca": 4,
      "area_name": "立山区"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130040",
      "en": "Linzi",
      "l": "12",
      "ca": 4,
      "area_name": "临淄区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050140",
      "en": "Guangping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "广平县"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060090",
      "en": "Mangkam Co.",
      "l": "14",
      "ca": 4,
      "area_name": "芒康县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020110",
      "en": "Wenjiang",
      "l": "12",
      "ca": 4,
      "area_name": "温江区"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160030",
      "en": "Moyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "墨玉县"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040050",
      "en": "Aksu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阿克塞县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060090",
      "en": "Changzi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "长子县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040110",
      "en": "Ningcheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁城县"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020050",
      "en": "Xiangfang",
      "l": "12",
      "ca": 4,
      "area_name": "香坊区"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120110",
      "en": "Jiaokou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "交口县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030070",
      "en": "Yongchun Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永春县"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020130",
      "en": "Luquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "禄劝县"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070030",
      "en": "Jiangkou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江口县"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040030",
      "en": "Ouhai",
      "l": "12",
      "ca": 4,
      "area_name": "瓯海区"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070030",
      "en": "Shilong",
      "l": "12",
      "ca": 4,
      "area_name": "石龙区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010100",
      "en": "Fangshan",
      "l": "12",
      "ca": 4,
      "area_name": "房山区"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050040",
      "en": "Suizhong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "绥中县"
    },
    {
      "parent_code": "180030",
      "a": "0",
      "area_code": "180030010",
      "en": "Yuhu",
      "l": "12",
      "ca": 4,
      "area_name": "雨湖区"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120050",
      "en": "Wuqiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武强县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020120",
      "en": "Dayi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大邑县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030020",
      "en": "Tiexi",
      "l": "12",
      "ca": 4,
      "area_name": "铁西区"
    },
    {
      "parent_code": "290060",
      "a": "0",
      "area_code": "290060080",
      "en": "Zogang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "左贡县"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160020",
      "en": "Hotan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和田县"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130030",
      "en": "Boshan",
      "l": "12",
      "ca": 4,
      "area_name": "博山区"
    },
    {
      "parent_code": "080050",
      "a": "0",
      "area_code": "080050110",
      "en": "Fanchang",
      "l": "12",
      "ca": 4,
      "area_name": "繁昌区"
    },
    {
      "parent_code": "230060",
      "a": "0",
      "area_code": "230060010",
      "en": "Shapotou",
      "l": "12",
      "ca": 4,
      "area_name": "沙坡头区"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040010",
      "en": "Bayi",
      "l": "12",
      "ca": 4,
      "area_name": "巴宜区"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040120",
      "en": "Aohan Banner",
      "l": "16",
      "ca": 4,
      "area_name": "敖汉旗"
    },
    {
      "parent_code": "060110",
      "a": "0",
      "area_code": "060110100",
      "en": "Pizhou",
      "l": "15",
      "ca": 4,
      "area_name": "邳州"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120100",
      "en": "Zhongyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "中阳县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030060",
      "en": "Anxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安溪县"
    },
    {
      "parent_code": "060020",
      "a": "0",
      "area_code": "060020130",
      "en": "Gaochun",
      "l": "12",
      "ca": 4,
      "area_name": "高淳区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020120",
      "en": "Shilin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石林县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050090",
      "en": "Jinshi",
      "l": "15",
      "ca": 4,
      "area_name": "津市"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070040",
      "en": "Yuping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "玉屏县"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040020",
      "en": "Longwan",
      "l": "12",
      "ca": 4,
      "area_name": "龙湾区"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040060",
      "en": "Yumen",
      "l": "15",
      "ca": 4,
      "area_name": "玉门"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070020",
      "en": "Weidong",
      "l": "12",
      "ca": 4,
      "area_name": "卫东区"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010110",
      "en": "Daxing",
      "l": "12",
      "ca": 4,
      "area_name": "大兴区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050130",
      "en": "Jize Co.",
      "l": "14",
      "ca": 4,
      "area_name": "鸡泽县"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120040",
      "en": "Wuyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武邑县"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050050",
      "en": "Jianchang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建昌县"
    },
    {
      "parent_code": "180030",
      "a": "0",
      "area_code": "180030020",
      "en": "Yuetang",
      "l": "12",
      "ca": 4,
      "area_name": "岳塘区"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130060",
      "en": "Huantai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桓台县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020130",
      "en": "Jintang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金堂县"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160050",
      "en": "Lop Co.",
      "l": "14",
      "ca": 4,
      "area_name": "洛浦县"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070030",
      "en": "Mingxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "明溪县"
    },
    {
      "parent_code": "210030",
      "a": "0",
      "area_code": "210030010",
      "en": "Tiedong",
      "l": "12",
      "ca": 4,
      "area_name": "铁东区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020070",
      "en": "Daowai",
      "l": "12",
      "ca": 4,
      "area_name": "道外区"
    },
    {
      "parent_code": "050160",
      "a": "0",
      "area_code": "050160030",
      "en": "Yangxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "阳西县"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040030",
      "en": "Guzhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "瓜州县"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040020",
      "en": "Gongbo'Gyamda Co.",
      "l": "14",
      "ca": 4,
      "area_name": "工布江达县"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070010",
      "en": "Bijiang",
      "l": "12",
      "ca": 4,
      "area_name": "碧江区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040050",
      "en": "Yueqing",
      "l": "15",
      "ca": 4,
      "area_name": "乐清"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030050",
      "en": "Hui'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "惠安县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050080",
      "en": "Shimenn Co.",
      "l": "14",
      "ca": 4,
      "area_name": "石门县"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070010",
      "en": "Xinhua",
      "l": "12",
      "ca": 4,
      "area_name": "新华区"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050120",
      "en": "Qiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "邱县"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050060",
      "en": "Xingcheng",
      "l": "15",
      "ca": 4,
      "area_name": "兴城"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120030",
      "en": "Zaoqiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "枣强县"
    },
    {
      "parent_code": "250130",
      "a": "0",
      "area_code": "250130050",
      "en": "Zhoucun",
      "l": "12",
      "ca": 4,
      "area_name": "周村区"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020140",
      "en": "Pujiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蒲江县"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070020",
      "en": "Sanyuan",
      "l": "12",
      "ca": 4,
      "area_name": "三元区"
    },
    {
      "parent_code": "160020",
      "a": "0",
      "area_code": "160020080",
      "en": "Acheng",
      "l": "12",
      "ca": 4,
      "area_name": "阿城区"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160040",
      "en": "Pishan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "皮山县"
    },
    {
      "parent_code": "050160",
      "a": "0",
      "area_code": "050160040",
      "en": "Yangchun",
      "l": "15",
      "ca": 4,
      "area_name": "阳春"
    },
    {
      "parent_code": "100040",
      "a": "0",
      "area_code": "100040040",
      "en": "Subei Co.",
      "l": "14",
      "ca": 4,
      "area_name": "肃北县"
    },
    {
      "parent_code": "220040",
      "a": "0",
      "area_code": "220040100",
      "en": "Harqin Banner",
      "l": "16",
      "ca": 4,
      "area_name": "喀喇沁旗"
    },
    {
      "parent_code": "130040",
      "a": "0",
      "area_code": "130040020",
      "en": "Nansha",
      "l": "12",
      "ca": 4,
      "area_name": "南沙"
    },
    {
      "parent_code": "290040",
      "a": "0",
      "area_code": "290040030",
      "en": "Mainling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "米林县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090090",
      "en": "Jianhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "剑河县"
    },
    {
      "parent_code": "120070",
      "a": "0",
      "area_code": "120070020",
      "en": "Wanshan",
      "l": "12",
      "ca": 4,
      "area_name": "万山区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040040",
      "en": "Rui'an",
      "l": "15",
      "ca": 4,
      "area_name": "瑞安"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030040",
      "en": "Quangang",
      "l": "12",
      "ca": 4,
      "area_name": "泉港区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020140",
      "en": "Xundian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "寻甸县"
    },
    {
      "parent_code": "180050",
      "a": "0",
      "area_code": "180050070",
      "en": "Taoyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桃源县"
    },
    {
      "parent_code": "140050",
      "a": "0",
      "area_code": "140050110",
      "en": "Ci Co.",
      "l": "14",
      "ca": 4,
      "area_name": "磁县"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120020",
      "en": "Jizhou",
      "l": "12",
      "ca": 4,
      "area_name": "冀州区"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070010",
      "en": "Cuiping",
      "l": "12",
      "ca": 4,
      "area_name": "翠屏区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070050",
      "en": "Ninghua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁化县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010020",
      "en": "Xuhui",
      "l": "12",
      "ca": 4,
      "area_name": "徐汇区"
    },
    {
      "parent_code": "100060",
      "a": "0",
      "area_code": "100060020",
      "en": "Pingchuan",
      "l": "12",
      "ca": 4,
      "area_name": "平川区"
    },
    {
      "parent_code": "110120",
      "a": "0",
      "area_code": "110120010",
      "en": "Qinnan",
      "l": "12",
      "ca": 4,
      "area_name": "钦南区"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020030",
      "en": "Damxung Co.",
      "l": "14",
      "ca": 4,
      "area_name": "当雄县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030170",
      "en": "Boye Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博野县"
    },
    {
      "parent_code": "200120",
      "a": "0",
      "area_code": "200120030",
      "en": "Guixi",
      "l": "15",
      "ca": 4,
      "area_name": "贵溪"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050060",
      "en": "Zhecheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "柘城县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040040",
      "en": "Xiangfen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "襄汾县"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090080",
      "en": "Wen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "温县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110070",
      "en": "Qingzhou",
      "l": "15",
      "ca": 4,
      "area_name": "青州"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080050",
      "en": "Zezhou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泽州县"
    },
    {
      "parent_code": "180030",
      "a": "0",
      "area_code": "180030050",
      "en": "Shaoshan",
      "l": "15",
      "ca": 4,
      "area_name": "韶山"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120090",
      "en": "Jing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "景县"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010080",
      "en": "St Francis Xavier's Parish",
      "l": "12",
      "ca": 4,
      "area_name": "圣方济各堂区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060140",
      "en": "Kedong Co.",
      "l": "14",
      "ca": 4,
      "area_name": "克东县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080030",
      "en": "Gong'an Co.",
      "l": "14",
      "ca": 4,
      "area_name": "公安县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030030",
      "en": "Luojiang",
      "l": "12",
      "ca": 4,
      "area_name": "洛江区"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030110",
      "en": "Ruichang",
      "l": "15",
      "ca": 4,
      "area_name": "瑞昌"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040070",
      "en": "Yongjia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "永嘉县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100060",
      "en": "Yi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黟县"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180080",
      "en": "Hoxud Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和硕县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110010",
      "en": "Gejiu",
      "l": "15",
      "ca": 4,
      "area_name": "个旧"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030090",
      "en": "Yopurga Co.",
      "l": "14",
      "ca": 4,
      "area_name": "岳普湖县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010010",
      "en": "Pudong",
      "l": "12",
      "ca": 4,
      "area_name": "浦东新区"
    },
    {
      "parent_code": "100060",
      "a": "0",
      "area_code": "100060010",
      "en": "Baiyin",
      "l": "12",
      "ca": 4,
      "area_name": "白银区"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020020",
      "en": "Lhunzhub Co.",
      "l": "14",
      "ca": 4,
      "area_name": "林周县"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070040",
      "en": "Qingliu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "清流县"
    },
    {
      "parent_code": "200120",
      "a": "0",
      "area_code": "200120020",
      "en": "Yujiang",
      "l": "12",
      "ca": 4,
      "area_name": "余江区"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140090",
      "en": "Bama Co.",
      "l": "14",
      "ca": 4,
      "area_name": "巴马县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050070",
      "en": "Yucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "虞城县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030180",
      "en": "Zhuozhou",
      "l": "15",
      "ca": 4,
      "area_name": "涿州"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110080",
      "en": "Zhucheng",
      "l": "15",
      "ca": 4,
      "area_name": "诸城"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040030",
      "en": "Yicheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "翼城县"
    },
    {
      "parent_code": "150090",
      "a": "0",
      "area_code": "150090090",
      "en": "Qinyang",
      "l": "15",
      "ca": 4,
      "area_name": "沁阳"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080020",
      "en": "Jingzhou",
      "l": "12",
      "ca": 4,
      "area_name": "荆州区"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020140",
      "en": "Gangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "钢城区"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120080",
      "en": "Gucheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "故城县"
    },
    {
      "parent_code": "260080",
      "a": "0",
      "area_code": "260080060",
      "en": "Gaoping",
      "l": "15",
      "ca": 4,
      "area_name": "高平"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100010",
      "en": "Xiangdu",
      "l": "12",
      "ca": 4,
      "area_name": "襄都区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060130",
      "en": "Keshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "克山县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030020",
      "en": "Fengze",
      "l": "12",
      "ca": 4,
      "area_name": "丰泽区"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050010",
      "en": "Lianshan",
      "l": "12",
      "ca": 4,
      "area_name": "连山区"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100070",
      "en": "Qimen Co.",
      "l": "14",
      "ca": 4,
      "area_name": "祁门县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030120",
      "en": "Gongqingcheng",
      "l": "15",
      "ca": 4,
      "area_name": "共青城"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040060",
      "en": "Dongtou",
      "l": "12",
      "ca": 4,
      "area_name": "洞头区"
    },
    {
      "parent_code": "110120",
      "a": "0",
      "area_code": "110120020",
      "en": "Qinbei",
      "l": "12",
      "ca": 4,
      "area_name": "钦北区"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110020",
      "en": "Kaiyuan",
      "l": "15",
      "ca": 4,
      "area_name": "开远"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180090",
      "en": "Bohu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "博湖县"
    },
    {
      "parent_code": "280070",
      "a": "0",
      "area_code": "280070020",
      "en": "Nanxi",
      "l": "12",
      "ca": 4,
      "area_name": "南溪区"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050040",
      "en": "Sui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "睢县"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020010",
      "en": "Chengguan",
      "l": "12",
      "ca": 4,
      "area_name": "城关区"
    },
    {
      "parent_code": "050140",
      "a": "0",
      "area_code": "050140020",
      "en": "Doumen",
      "l": "12",
      "ca": 4,
      "area_name": "斗门区"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030150",
      "en": "Li Co.",
      "l": "14",
      "ca": 4,
      "area_name": "蠡县"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030010",
      "en": "Ledu",
      "l": "12",
      "ca": 4,
      "area_name": "乐都区"
    },
    {
      "parent_code": "300160",
      "a": "0",
      "area_code": "300160010",
      "en": "Hotan",
      "l": "15",
      "ca": 4,
      "area_name": "和田市"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140080",
      "en": "Huanjiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "环江县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010040",
      "en": "Putuo",
      "l": "12",
      "ca": 4,
      "area_name": "普陀区"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110090",
      "en": "Shouguang",
      "l": "15",
      "ca": 4,
      "area_name": "寿光"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020010",
      "en": "Shangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "上城区"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040020",
      "en": "Quwo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲沃县"
    },
    {
      "parent_code": "220020",
      "a": "0",
      "area_code": "220020090",
      "en": "Wuchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "武川县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020130",
      "en": "Laiwu",
      "l": "12",
      "ca": 4,
      "area_name": "莱芜区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070070",
      "en": "Youxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尤溪县"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120070",
      "en": "Anping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安平县"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010060",
      "en": "Our Lady Of Carmel's Parish",
      "l": "12",
      "ca": 4,
      "area_name": "嘉模堂区"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020110",
      "en": "Songming Co.",
      "l": "14",
      "ca": 4,
      "area_name": "嵩明县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080050",
      "en": "Jiangling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "江陵县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060160",
      "en": "Nehe",
      "l": "15",
      "ca": 4,
      "area_name": "讷河"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120130",
      "en": "Fenyang",
      "l": "15",
      "ca": 4,
      "area_name": "汾阳"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050020",
      "en": "Longgang",
      "l": "12",
      "ca": 4,
      "area_name": "龙港区"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040090",
      "en": "Cangnan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "苍南县"
    },
    {
      "parent_code": "090030",
      "a": "0",
      "area_code": "090030010",
      "en": "Licheng",
      "l": "12",
      "ca": 4,
      "area_name": "鲤城区"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180060",
      "en": "Yanqi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "焉耆县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030130",
      "en": "Lushan",
      "l": "15",
      "ca": 4,
      "area_name": "庐山"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030070",
      "en": "Yecheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "叶城县"
    },
    {
      "parent_code": "180030",
      "a": "0",
      "area_code": "180030030",
      "en": "Xiangtan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "湘潭县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050050",
      "en": "Ningling Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宁陵县"
    },
    {
      "parent_code": "020",
      "a": "0",
      "area_code": "020010030",
      "en": "Changning",
      "l": "12",
      "ca": 4,
      "area_name": "长宁区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070060",
      "en": "Datian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "大田县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140070",
      "en": "Luocheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "罗城县"
    },
    {
      "parent_code": "050140",
      "a": "0",
      "area_code": "050140010",
      "en": "Xiangzhou",
      "l": "12",
      "ca": 4,
      "area_name": "香洲区"
    },
    {
      "parent_code": "080030",
      "a": "0",
      "area_code": "080030100",
      "en": "Tongcheng",
      "l": "15",
      "ca": 4,
      "area_name": "桐城"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030160",
      "en": "Shunping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "顺平县"
    },
    {
      "parent_code": "260040",
      "a": "0",
      "area_code": "260040010",
      "en": "Yaodu",
      "l": "12",
      "ca": 4,
      "area_name": "尧都区"
    },
    {
      "parent_code": "330",
      "a": "1",
      "area_code": "330010070",
      "en": "Cotai",
      "l": "12",
      "ca": 4,
      "area_name": "路凼填海区"
    },
    {
      "parent_code": "260120",
      "a": "0",
      "area_code": "260120120",
      "en": "Xiaoyi",
      "l": "15",
      "ca": 4,
      "area_name": "孝义"
    },
    {
      "parent_code": "310020",
      "a": "0",
      "area_code": "310020100",
      "en": "Yiliang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "宜良县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220090",
      "en": "Heishui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黑水县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060150",
      "en": "Baiquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "拜泉县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080040",
      "en": "Jianli",
      "l": "15",
      "ca": 4,
      "area_name": "监利市"
    },
    {
      "parent_code": "070040",
      "a": "0",
      "area_code": "070040080",
      "en": "Pingyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "平阳县"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030020",
      "en": "Ping'an",
      "l": "12",
      "ca": 4,
      "area_name": "平安区"
    },
    {
      "parent_code": "180030",
      "a": "0",
      "area_code": "180030040",
      "en": "Xiangxiang",
      "l": "15",
      "ca": 4,
      "area_name": "湘乡"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180070",
      "en": "Hejing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "和静县"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030080",
      "en": "Makit Co.",
      "l": "14",
      "ca": 4,
      "area_name": "麦盖提县"
    },
    {
      "parent_code": "140120",
      "a": "0",
      "area_code": "140120060",
      "en": "Raoyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "饶阳县"
    },
    {
      "parent_code": "210050",
      "a": "0",
      "area_code": "210050030",
      "en": "Nanpiao",
      "l": "12",
      "ca": 4,
      "area_name": "南票区"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110050",
      "en": "Pingbian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "屏边县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030130",
      "en": "Yi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "易县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080130",
      "en": "Ergun",
      "l": "15",
      "ca": 4,
      "area_name": "额尔古纳"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010180",
      "en": "Miyun",
      "l": "12",
      "ca": 4,
      "area_name": "密云区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030050",
      "en": "Zepu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泽普县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050020",
      "en": "Suiyang",
      "l": "12",
      "ca": 4,
      "area_name": "睢阳区"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140060",
      "en": "Donglan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "东兰县"
    },
    {
      "parent_code": "050140",
      "a": "0",
      "area_code": "050140040",
      "en": "Hengqin",
      "l": "13",
      "ca": 4,
      "area_name": "横琴新区"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110030",
      "en": "Fangzi",
      "l": "12",
      "ca": 4,
      "area_name": "坊子区"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020030",
      "en": "Gongshu",
      "l": "12",
      "ca": 4,
      "area_name": "拱墅区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060100",
      "en": "Tailai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "泰来县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020110",
      "en": "Gaoxin",
      "l": "13",
      "ca": 4,
      "area_name": "高新区"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100110",
      "en": "Jiexiu",
      "l": "15",
      "ca": 4,
      "area_name": "介休"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040310",
      "en": "Zhongtang",
      "l": "14",
      "ca": 4,
      "area_name": "中堂镇"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070090",
      "en": "Jiangle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "将乐县"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130020",
      "en": "Wangkui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "望奎县"
    },
    {
      "parent_code": "280020",
      "a": "0",
      "area_code": "280020190",
      "en": "Dujiangyan",
      "l": "15",
      "ca": 4,
      "area_name": "都江堰"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020070",
      "en": "Dagze",
      "l": "12",
      "ca": 4,
      "area_name": "达孜区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100040",
      "en": "Lincheng Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临城县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090040",
      "en": "Sansui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "三穗县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220080",
      "en": "Xiaojin Co.",
      "l": "14",
      "ca": 4,
      "area_name": "小金县"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180040",
      "en": "Ruoqiang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "若羌县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070050",
      "en": "Benxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "本溪县"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030030",
      "en": "Minhe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "民和县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100020",
      "en": "Huangshan",
      "l": "12",
      "ca": 4,
      "area_name": "黄山区"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140050",
      "en": "Fengshan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "凤山县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110060",
      "en": "Jianshui Co.",
      "l": "14",
      "ca": 4,
      "area_name": "建水县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050030",
      "en": "Minquan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "民权县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030140",
      "en": "Quyang Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲阳县"
    },
    {
      "parent_code": "220080",
      "a": "0",
      "area_code": "220080140",
      "en": "Genhe",
      "l": "15",
      "ca": 4,
      "area_name": "根河"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030060",
      "en": "Shache Co.",
      "l": "14",
      "ca": 4,
      "area_name": "莎车县"
    },
    {
      "parent_code": "280090",
      "a": "0",
      "area_code": "280090050",
      "en": "Yanbian Co.",
      "l": "14",
      "ca": 4,
      "area_name": "盐边县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110040",
      "en": "Kuiwen",
      "l": "12",
      "ca": 4,
      "area_name": "奎文区"
    },
    {
      "parent_code": "050140",
      "a": "0",
      "area_code": "050140030",
      "en": "Jinwan",
      "l": "12",
      "ca": 4,
      "area_name": "金湾区"
    },
    {
      "parent_code": "100060",
      "a": "0",
      "area_code": "100060050",
      "en": "Jingtai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "景泰县"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050010",
      "en": "Xiangcheng",
      "l": "12",
      "ca": 4,
      "area_name": "芗城区"
    },
    {
      "parent_code": "050040",
      "a": "0",
      "area_code": "050040300",
      "en": "Chang'an",
      "l": "14",
      "ca": 4,
      "area_name": "长安镇"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130030",
      "en": "Lanxi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "兰西县"
    },
    {
      "parent_code": "260100",
      "a": "0",
      "area_code": "260100100",
      "en": "Lingshi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "灵石县"
    },
    {
      "parent_code": "130020",
      "a": "0",
      "area_code": "130020040",
      "en": "Meilan",
      "l": "12",
      "ca": 4,
      "area_name": "美兰区"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020060",
      "en": "Doilungdeqen",
      "l": "12",
      "ca": 4,
      "area_name": "堆龙德庆区"
    },
    {
      "parent_code": "090070",
      "a": "0",
      "area_code": "090070080",
      "en": "Shaxian",
      "l": "12",
      "ca": 4,
      "area_name": "沙县区"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090030",
      "en": "Shibing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "施秉县"
    },
    {
      "parent_code": "250020",
      "a": "0",
      "area_code": "250020100",
      "en": "Shanghe Co.",
      "l": "14",
      "ca": 4,
      "area_name": "商河县"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220070",
      "en": "Jinchuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "金川县"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180050",
      "en": "Qiemo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "且末县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070040",
      "en": "Nanfen",
      "l": "12",
      "ca": 4,
      "area_name": "南芬区"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030040",
      "en": "Huzhu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "互助县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100030",
      "en": "Huizhou",
      "l": "12",
      "ca": 4,
      "area_name": "徽州区"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100050",
      "en": "Neiqiu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "内丘县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010160",
      "en": "Huairou",
      "l": "12",
      "ca": 4,
      "area_name": "怀柔区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030030",
      "en": "Shule Co.",
      "l": "14",
      "ca": 4,
      "area_name": "疏勒县"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140040",
      "en": "Tian'e Co.",
      "l": "14",
      "ca": 4,
      "area_name": "天峨县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110030",
      "en": "Mengzi",
      "l": "15",
      "ca": 4,
      "area_name": "蒙自"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070090",
      "en": "Wugang",
      "l": "15",
      "ca": 4,
      "area_name": "舞钢"
    },
    {
      "parent_code": "280090",
      "a": "0",
      "area_code": "280090040",
      "en": "Miyi Co.",
      "l": "14",
      "ca": 4,
      "area_name": "米易县"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110050",
      "en": "Linqu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "临朐县"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050020",
      "en": "Longwen",
      "l": "12",
      "ca": 4,
      "area_name": "龙文区"
    },
    {
      "parent_code": "100060",
      "a": "0",
      "area_code": "100060040",
      "en": "Huining Co.",
      "l": "14",
      "ca": 4,
      "area_name": "会宁县"
    },
    {
      "parent_code": "170080",
      "a": "0",
      "area_code": "170080010",
      "en": "Shashi",
      "l": "12",
      "ca": 4,
      "area_name": "沙市区"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060120",
      "en": "Fuyu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "富裕县"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110070",
      "en": "Wangqing Co.",
      "l": "14",
      "ca": 4,
      "area_name": "汪清县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020110",
      "en": "Dehui",
      "l": "15",
      "ca": 4,
      "area_name": "德惠"
    },
    {
      "parent_code": "130020",
      "a": "0",
      "area_code": "130020030",
      "en": "Qiongshan",
      "l": "12",
      "ca": 4,
      "area_name": "琼山区"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020050",
      "en": "Quxu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "曲水县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060030",
      "en": "Shangdang",
      "l": "12",
      "ca": 4,
      "area_name": "上党区"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220060",
      "en": "Jiuzhaigou Co.",
      "l": "14",
      "ca": 4,
      "area_name": "九寨沟县"
    },
    {
      "parent_code": "140100",
      "a": "0",
      "area_code": "140100020",
      "en": "Xindu",
      "l": "12",
      "ca": 4,
      "area_name": "信都区"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180020",
      "en": "Luntai Co.",
      "l": "14",
      "ca": 4,
      "area_name": "轮台县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090020",
      "en": "Huangping Co.",
      "l": "14",
      "ca": 4,
      "area_name": "黄平县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100040",
      "en": "She Co.",
      "l": "14",
      "ca": 4,
      "area_name": "歙县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030110",
      "en": "Laiyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "涞源县"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030050",
      "en": "Longhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "化隆县"
    },
    {
      "parent_code": "140030",
      "a": "0",
      "area_code": "140030120",
      "en": "Wangdu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "望都县"
    },
    {
      "parent_code": "100060",
      "a": "0",
      "area_code": "100060030",
      "en": "Jingyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "靖远县"
    },
    {
      "parent_code": "010",
      "a": "0",
      "area_code": "010010170",
      "en": "Yanqing",
      "l": "12",
      "ca": 4,
      "area_name": "延庆区"
    },
    {
      "parent_code": "300030",
      "a": "0",
      "area_code": "300030040",
      "en": "Yengisar Co.",
      "l": "14",
      "ca": 4,
      "area_name": "英吉沙县"
    },
    {
      "parent_code": "310110",
      "a": "0",
      "area_code": "310110040",
      "en": "Mile",
      "l": "15",
      "ca": 4,
      "area_name": "弥勒"
    },
    {
      "parent_code": "150070",
      "a": "0",
      "area_code": "150070080",
      "en": "Jia Co.",
      "l": "14",
      "ca": 4,
      "area_name": "郏县"
    },
    {
      "parent_code": "090050",
      "a": "0",
      "area_code": "090050030",
      "en": "Yunxiao Co.",
      "l": "14",
      "ca": 4,
      "area_name": "云霄县"
    },
    {
      "parent_code": "070020",
      "a": "0",
      "area_code": "070020040",
      "en": "Xihu",
      "l": "12",
      "ca": 4,
      "area_name": "西湖区"
    },
    {
      "parent_code": "200100",
      "a": "0",
      "area_code": "200100010",
      "en": "Anyuan",
      "l": "12",
      "ca": 4,
      "area_name": "安源区"
    },
    {
      "parent_code": "160130",
      "a": "0",
      "area_code": "160130010",
      "en": "Beilin",
      "l": "12",
      "ca": 4,
      "area_name": "北林区"
    },
    {
      "parent_code": "250110",
      "a": "0",
      "area_code": "250110060",
      "en": "Changle Co.",
      "l": "14",
      "ca": 4,
      "area_name": "昌乐县"
    },
    {
      "parent_code": "160060",
      "a": "0",
      "area_code": "160060110",
      "en": "Gannan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "甘南县"
    },
    {
      "parent_code": "190020",
      "a": "0",
      "area_code": "190020100",
      "en": "Qikai",
      "l": "13",
      "ca": 4,
      "area_name": "汽开区"
    },
    {
      "parent_code": "290020",
      "a": "0",
      "area_code": "290020040",
      "en": "Nyemo Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尼木县"
    },
    {
      "parent_code": "190110",
      "a": "0",
      "area_code": "190110080",
      "en": "Antu Co.",
      "l": "14",
      "ca": 4,
      "area_name": "安图县"
    },
    {
      "parent_code": "260060",
      "a": "0",
      "area_code": "260060040",
      "en": "Xiangyuan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "襄垣县"
    },
    {
      "parent_code": "130020",
      "a": "0",
      "area_code": "130020020",
      "en": "Longhua",
      "l": "12",
      "ca": 4,
      "area_name": "龙华区"
    },
    {
      "parent_code": "280220",
      "a": "0",
      "area_code": "280220050",
      "en": "Songpan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "松潘县"
    },
    {
      "parent_code": "120090",
      "a": "0",
      "area_code": "120090010",
      "en": "Kaili",
      "l": "15",
      "ca": 4,
      "area_name": "凯里"
    },
    {
      "parent_code": "240030",
      "a": "0",
      "area_code": "240030060",
      "en": "Xunhua Co.",
      "l": "14",
      "ca": 4,
      "area_name": "循化县"
    },
    {
      "parent_code": "080100",
      "a": "0",
      "area_code": "080100050",
      "en": "Xiuning Co.",
      "l": "14",
      "ca": 4,
      "area_name": "休宁县"
    },
    {
      "parent_code": "300180",
      "a": "0",
      "area_code": "300180030",
      "en": "Yuli Co.",
      "l": "14",
      "ca": 4,
      "area_name": "尉犁县"
    },
    {
      "parent_code": "200030",
      "a": "0",
      "area_code": "200030100",
      "en": "Pengze Co.",
      "l": "14",
      "ca": 4,
      "area_name": "彭泽县"
    },
    {
      "parent_code": "210070",
      "a": "0",
      "area_code": "210070060",
      "en": "Huanren Co.",
      "l": "14",
      "ca": 4,
      "area_name": "桓仁县"
    },
    {
      "parent_code": "150050",
      "a": "0",
      "area_code": "150050010",
      "en": "Liangyuan",
      "l": "12",
      "ca": 4,
      "area_name": "梁园区"
    },
    {
      "parent_code": "280090",
      "a": "0",
      "area_code": "280090030",
      "en": "Renhe",
      "l": "12",
      "ca": 4,
      "area_name": "仁和区"
    },
    {
      "parent_code": "110140",
      "a": "0",
      "area_code": "110140030",
      "en": "Nandan Co.",
      "l": "14",
      "ca": 4,
      "area_name": "南丹县"
    }
  ]
  return streetList;
}

function getDegreeList() {
  let degreeList = [
    {
        "code": "010",
        "name": "博士"
    },
    {
        "code": "020",
        "name": "MBA/EMBA"
    },
    {
        "code": "030",
        "name": "硕士"
    },
    {
        "code": "040",
        "name": "本科"
    },
    {
        "code": "050",
        "name": "大专"
    },
    {
        "code": "060",
        "name": "中专/中技"
    },
    {
        "code": "080",
        "name": "高中"
    },
    {
        "code": "090",
        "name": "初中及以下"
    }
]
  return degreeList;
}
function getJobTypeList() {
  let jobTypeList = [
    {
      "code": 0,
      "name": "不限"
    },
    {
      "code": 1901,
      "name": "全职"
    },
    {
      "code": 1903,
      "name": "兼职"
    }
  ]
  return jobTypeList;
}

function getSalaryList() {
  let salaryList = [
    {
      "code": 0,
      "name": "不限"
    },
    {
      "code": "0$3",
      "name": "3K以下"
    },
    {
      "code": "3$5",
      "name": "3K-5k"
    },
    {
      "code": "5$10",
      "name": "5K-10k"
    },
    {
      "code": "10$20",
      "name": "10K-20k"
    },
    {
      "code": "20$40",
      "name": "20K-40k"
    },
    {
      "code": "40$60",
      "name": "40K-60k"
    },
    {
      "code": "60$999",
      "name": "60K以上"
    }
  ]
  return salaryList;
}
//刚刚活跃<今日活跃<3日内活跃<本周活跃<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
function getActiveList() {
  let salaryList = [
    {
        "code": "",
        "name": "不限"
    },
    {
        "code": "1",
        "name": "一天以内"
    },
    {
        "code": "3",
        "name": "三天以内"
    },
    {
        "code": "7",
        "name": "一周以内"
    },
    {
        "code": "30",
        "name": "一个月以内"
    }
  ]
  return salaryList;
}