//刚刚活跃<今日活跃<3日内活跃<本周活跃<2周内活跃<本月活跃<2月内活跃<3月内活跃<4月内活跃<5月内活跃<近半年活跃<半年前活跃<其他
function getActiveList() {
  let salaryList = [
    {
      "code": 0,
      "name": "刚刚活跃"
    },
    {
      "code": 1,
      "name": "今日活跃"
    },
    {
      "code": 2,
      "name": "3日内活跃"
    },
    {
      "code": 3,
      "name": "本周活跃"
    },
    {
      "code": 4,
      "name": "2周内活跃"
    },
    {
      "code": 5,
      "name": "本月活跃"
    },
    {
      "code": 6,
      "name": "2月内活跃"
    },
    {
      "code": 7,
      "name": "3月内活跃"
    },
    {
      "code": 8,
      "name": "4月内活跃"
    },
    {
      "code": 9,
      "name": "5月内活跃"
    },
    {
      "code": 10,
      "name": "近半年活跃"
    },
    {
      "code": 11,
      "name": "半年前活跃"
    },
    {
      "code": 12,
      "name": "其他"
    }
  ]
  return salaryList;
}
//================new=============================
//公司性质
function getCompanyTypeList() {
  let companyType = [
    {
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "1",
      "name": "国企",
      "en_name": ""
    },
    {
      "code": "2;3",
      "name": "外企",
      "en_name": ""
    },
    {
      "code": "4",
      "name": "合资",
      "en_name": ""
    },
    {
      "code": "5",
      "name": "民营",
      "en_name": ""
    },
    {
      "code": "9",
      "name": "上市公司",
      "en_name": ""
    },
    {
      "code": "8",
      "name": "股份制企业",
      "en_name": ""
    },
    {
      "code": "6;10",
      "name": "事业单位",
      "en_name": ""
    },
    {
      "code": "11;12;13;14;15;16;7",
      "name": "其他",
      "en_name": ""
    }
  ]
  return companyType;
}

function getSalaryList() {
  let salaryList = [
    {
      "code": "0000,9999999",
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "0000,4000",
      "name": "4K以下",
      "en_name": ""
    },
    {
      "code": "4001,6000",
      "name": "4K-6K",
      "en_name": ""
    },
    {
      "code": "6001,8000",
      "name": "6K-8K",
      "en_name": ""
    },
    {
      "code": "8001,10000",
      "name": "8K-10K",
      "en_name": ""
    },
    {
      "code": "10001,15000",
      "name": "10K-15K",
      "en_name": ""
    },
    {
      "code": "15001,25000",
      "name": "15K-25K",
      "en_name": ""
    },
    {
      "code": "25001,35000",
      "name": "25K-35K",
      "en_name": ""
    },
    {
      "code": "35001,50000",
      "name": "35K-50K",
      "en_name": ""
    },
    {
      "code": "50001,9999999",
      "name": "50K以上",
      "en_name": ""
    }
  ]
  return salaryList;
}

//所有城市
function getAreaList() {
  let cityList = [
    {
      "code": "541",
      "parentCode": "489",
      "name": "安徽",
      "en_name": "ANHUI",
      "sublist": [
        {
          "code": "671",
          "parentCode": "541",
          "name": "安庆",
          "en_name": "ANQING",
          "sublist": [
            {
              "code": "10182",
              "parentCode": "671",
              "name": "宿松县",
              "en_name": "SUSONG"
            },
            {
              "code": "2600",
              "parentCode": "671",
              "name": "大观区",
              "en_name": "Daguan"
            },
            {
              "code": "2603",
              "parentCode": "671",
              "name": "怀宁县",
              "en_name": "Huaining"
            },
            {
              "code": "2605",
              "parentCode": "671",
              "name": "潜山市",
              "en_name": "Qianshan"
            },
            {
              "code": "2606",
              "parentCode": "671",
              "name": "太湖县",
              "en_name": "Taihu"
            },
            {
              "code": "2602",
              "parentCode": "671",
              "name": "桐城市",
              "en_name": "Tongcheng"
            },
            {
              "code": "2608",
              "parentCode": "671",
              "name": "望江县",
              "en_name": "Wangjiang"
            },
            {
              "code": "2599",
              "parentCode": "671",
              "name": "迎江区",
              "en_name": "Yingjiang"
            },
            {
              "code": "2601",
              "parentCode": "671",
              "name": "宜秀区",
              "en_name": "Yixiu"
            },
            {
              "code": "2609",
              "parentCode": "671",
              "name": "岳西县",
              "en_name": "Yuexi"
            }
          ]
        },
        {
          "code": "666",
          "parentCode": "541",
          "name": "蚌埠",
          "en_name": "BENGBU",
          "sublist": [
            {
              "code": "2577",
              "parentCode": "666",
              "name": "蚌山区",
              "en_name": "Bangshan"
            },
            {
              "code": "2575",
              "parentCode": "666",
              "name": "固镇县",
              "en_name": "Guzhen"
            },
            {
              "code": "2574",
              "parentCode": "666",
              "name": "淮上区",
              "en_name": "Huaishang"
            },
            {
              "code": "2578",
              "parentCode": "666",
              "name": "怀远县",
              "en_name": "Huaiyuan"
            },
            {
              "code": "2572",
              "parentCode": "666",
              "name": "龙子湖区",
              "en_name": "Longzihu"
            },
            {
              "code": "2576",
              "parentCode": "666",
              "name": "五河县",
              "en_name": "Wuhe"
            },
            {
              "code": "2573",
              "parentCode": "666",
              "name": "禹会区",
              "en_name": "Yuhui"
            }
          ]
        },
        {
          "code": "678",
          "parentCode": "541",
          "name": "亳州",
          "en_name": "BOZHOU",
          "sublist": [
            {
              "code": "2648",
              "parentCode": "678",
              "name": "利辛县",
              "en_name": "Lixin"
            },
            {
              "code": "2646",
              "parentCode": "678",
              "name": "蒙城县",
              "en_name": "Mengcheng"
            },
            {
              "code": "2645",
              "parentCode": "678",
              "name": "谯城区",
              "en_name": "Qiaocheng"
            },
            {
              "code": "2647",
              "parentCode": "678",
              "name": "涡阳县",
              "en_name": "Guoyang"
            }
          ]
        },
        {
          "code": "679",
          "parentCode": "541",
          "name": "池州",
          "en_name": "CHIZHOU",
          "sublist": [
            {
              "code": "2649",
              "parentCode": "679",
              "name": "东至县",
              "en_name": "Dongzhi"
            },
            {
              "code": "2652",
              "parentCode": "679",
              "name": "贵池区",
              "en_name": "Guichi"
            },
            {
              "code": "2651",
              "parentCode": "679",
              "name": "青阳县",
              "en_name": "Qingyang"
            },
            {
              "code": "2650",
              "parentCode": "679",
              "name": "石台县",
              "en_name": "Shitai"
            }
          ]
        },
        {
          "code": "673",
          "parentCode": "541",
          "name": "滁州",
          "en_name": "CHUZHOU",
          "sublist": [
            {
              "code": "10069",
              "parentCode": "673",
              "name": "凤阳县",
              "en_name": "FENGYANG"
            },
            {
              "code": "2621",
              "parentCode": "673",
              "name": "定远县",
              "en_name": "Dingyuan"
            },
            {
              "code": "2619",
              "parentCode": "673",
              "name": "来安县",
              "en_name": "Laian"
            },
            {
              "code": "2624",
              "parentCode": "673",
              "name": "琅琊区",
              "en_name": "Langya"
            },
            {
              "code": "2618",
              "parentCode": "673",
              "name": "明光市",
              "en_name": "Mingguang"
            },
            {
              "code": "2623",
              "parentCode": "673",
              "name": "南谯区",
              "en_name": "Nanzuo"
            },
            {
              "code": "2620",
              "parentCode": "673",
              "name": "全椒县",
              "en_name": "Quanjiao"
            },
            {
              "code": "2617",
              "parentCode": "673",
              "name": "天长市",
              "en_name": "Tianchang"
            }
          ]
        },
        {
          "code": "674",
          "parentCode": "541",
          "name": "阜阳",
          "en_name": "FUYANG",
          "sublist": [
            {
              "code": "2631",
              "parentCode": "674",
              "name": "阜南县",
              "en_name": "Funan"
            },
            {
              "code": "2628",
              "parentCode": "674",
              "name": "界首市",
              "en_name": "Jieshou"
            },
            {
              "code": "2632",
              "parentCode": "674",
              "name": "临泉县",
              "en_name": "Linquan"
            },
            {
              "code": "2629",
              "parentCode": "674",
              "name": "太和县",
              "en_name": "Taihe"
            },
            {
              "code": "2627",
              "parentCode": "674",
              "name": "颍东区",
              "en_name": "Yidong"
            },
            {
              "code": "2625",
              "parentCode": "674",
              "name": "颍泉区",
              "en_name": "Yingquan"
            },
            {
              "code": "2630",
              "parentCode": "674",
              "name": "颍上县",
              "en_name": "Yingshang"
            },
            {
              "code": "2626",
              "parentCode": "674",
              "name": "颍州区",
              "en_name": "Yingzhou"
            }
          ]
        },
        {
          "code": "664",
          "parentCode": "541",
          "name": "合肥",
          "en_name": "HEFEI",
          "sublist": [
            {
              "code": "2355",
              "parentCode": "664",
              "name": "包河区",
              "en_name": "Baohe"
            },
            {
              "code": "2438",
              "parentCode": "664",
              "name": "北城新区",
              "en_name": "Beichengxinqu"
            },
            {
              "code": "2357",
              "parentCode": "664",
              "name": "滨湖新区",
              "en_name": "Binhuxinqu"
            },
            {
              "code": "3277",
              "parentCode": "664",
              "name": "巢湖市",
              "en_name": "Chaohushi"
            },
            {
              "code": "3273",
              "parentCode": "664",
              "name": "肥东县",
              "en_name": "Feidongxian"
            },
            {
              "code": "3274",
              "parentCode": "664",
              "name": "肥西县",
              "en_name": "Feixixian"
            },
            {
              "code": "2359",
              "parentCode": "664",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "2356",
              "parentCode": "664",
              "name": "经济技术开发区",
              "en_name": "Jingjijishukaifaqu"
            },
            {
              "code": "3276",
              "parentCode": "664",
              "name": "庐江县",
              "en_name": "Lujiangxian"
            },
            {
              "code": "2352",
              "parentCode": "664",
              "name": "庐阳区",
              "en_name": "Luyang"
            },
            {
              "code": "2354",
              "parentCode": "664",
              "name": "蜀山区",
              "en_name": "Shushan"
            },
            {
              "code": "2358",
              "parentCode": "664",
              "name": "新站综合开发试验区",
              "en_name": "Xinzhanzonghekaifashiyanqu"
            },
            {
              "code": "2353",
              "parentCode": "664",
              "name": "瑶海区",
              "en_name": "Yaohai"
            },
            {
              "code": "3275",
              "parentCode": "664",
              "name": "长丰县",
              "en_name": "Changfengxian"
            },
            {
              "code": "2437",
              "parentCode": "664",
              "name": "政务文化新区",
              "en_name": "Zhengwuwenhuaqu"
            }
          ]
        },
        {
          "code": "669",
          "parentCode": "541",
          "name": "淮北",
          "en_name": "HUAIBEI",
          "sublist": [
            {
              "code": "2594",
              "parentCode": "669",
              "name": "杜集区",
              "en_name": "Duji"
            },
            {
              "code": "2593",
              "parentCode": "669",
              "name": "烈山区",
              "en_name": "Lieshan"
            },
            {
              "code": "2591",
              "parentCode": "669",
              "name": "濉溪县",
              "en_name": "Suixi"
            },
            {
              "code": "2592",
              "parentCode": "669",
              "name": "相山区",
              "en_name": "Xiangshan"
            }
          ]
        },
        {
          "code": "667",
          "parentCode": "541",
          "name": "淮南",
          "en_name": "HUAINAN",
          "sublist": [
            {
              "code": "2584",
              "parentCode": "667",
              "name": "八公山区",
              "en_name": "Bagongshan"
            },
            {
              "code": "2582",
              "parentCode": "667",
              "name": "大通区",
              "en_name": "Datong"
            },
            {
              "code": "2579",
              "parentCode": "667",
              "name": "凤台县",
              "en_name": "Fengtai"
            },
            {
              "code": "2583",
              "parentCode": "667",
              "name": "潘集区",
              "en_name": "Panji"
            },
            {
              "code": "2640",
              "parentCode": "667",
              "name": "寿县",
              "en_name": "Shou"
            },
            {
              "code": "2580",
              "parentCode": "667",
              "name": "田家庵区",
              "en_name": "Tianjiaan"
            },
            {
              "code": "2581",
              "parentCode": "667",
              "name": "谢家集区",
              "en_name": "Xiejiaan"
            }
          ]
        },
        {
          "code": "672",
          "parentCode": "541",
          "name": "黄山",
          "en_name": "HUANGSHAN",
          "sublist": [
            {
              "code": "2611",
              "parentCode": "672",
              "name": "黄山区",
              "en_name": "Huangshan"
            },
            {
              "code": "2612",
              "parentCode": "672",
              "name": "徽州区",
              "en_name": "Huizhou"
            },
            {
              "code": "2616",
              "parentCode": "672",
              "name": "祁门县",
              "en_name": "Qimen"
            },
            {
              "code": "2613",
              "parentCode": "672",
              "name": "歙县",
              "en_name": "Zuo"
            },
            {
              "code": "2610",
              "parentCode": "672",
              "name": "屯溪区",
              "en_name": "Tunxi"
            },
            {
              "code": "2614",
              "parentCode": "672",
              "name": "休宁县",
              "en_name": "Xiuning"
            },
            {
              "code": "2615",
              "parentCode": "672",
              "name": "黟县",
              "en_name": "Yi"
            }
          ]
        },
        {
          "code": "677",
          "parentCode": "541",
          "name": "六安",
          "en_name": "LIUAN",
          "sublist": [
            {
              "code": "2641",
              "parentCode": "677",
              "name": "霍邱县",
              "en_name": "Huoqiu"
            },
            {
              "code": "2644",
              "parentCode": "677",
              "name": "霍山县",
              "en_name": "Huoshan"
            },
            {
              "code": "2638",
              "parentCode": "677",
              "name": "金安区",
              "en_name": "Jinan"
            },
            {
              "code": "2643",
              "parentCode": "677",
              "name": "金寨县",
              "en_name": "Jinzhai"
            },
            {
              "code": "2642",
              "parentCode": "677",
              "name": "舒城县",
              "en_name": "Shucheng"
            },
            {
              "code": "2639",
              "parentCode": "677",
              "name": "裕安区",
              "en_name": "Yuan"
            },
            {
              "code": "104021",
              "parentCode": "677",
              "name": "叶集区",
              "en_name": "yejiqu"
            }
          ]
        },
        {
          "code": "668",
          "parentCode": "541",
          "name": "马鞍山",
          "en_name": "MAANSHAN",
          "sublist": [
            {
              "code": "2587",
              "parentCode": "668",
              "name": "博望区",
              "en_name": "Bowang"
            },
            {
              "code": "2588",
              "parentCode": "668",
              "name": "当涂县",
              "en_name": "Dangtu"
            },
            {
              "code": "2589",
              "parentCode": "668",
              "name": "含山县",
              "en_name": "Hanshan"
            },
            {
              "code": "2590",
              "parentCode": "668",
              "name": "和县",
              "en_name": "He"
            },
            {
              "code": "2585",
              "parentCode": "668",
              "name": "花山区",
              "en_name": "Huashan"
            },
            {
              "code": "2586",
              "parentCode": "668",
              "name": "雨山区",
              "en_name": "Yushan"
            }
          ]
        },
        {
          "code": "675",
          "parentCode": "541",
          "name": "宿州",
          "en_name": "SUZHOU",
          "sublist": [
            {
              "code": "2634",
              "parentCode": "675",
              "name": "砀山县",
              "en_name": "Dangshan"
            },
            {
              "code": "2636",
              "parentCode": "675",
              "name": "灵璧县",
              "en_name": "Lingbi"
            },
            {
              "code": "2637",
              "parentCode": "675",
              "name": "泗县",
              "en_name": "Si"
            },
            {
              "code": "2635",
              "parentCode": "675",
              "name": "萧县",
              "en_name": "Xiao"
            },
            {
              "code": "2633",
              "parentCode": "675",
              "name": "埇桥区",
              "en_name": "Yongqiao"
            }
          ]
        },
        {
          "code": "670",
          "parentCode": "541",
          "name": "铜陵",
          "en_name": "TONGLING",
          "sublist": [
            {
              "code": "2597",
              "parentCode": "670",
              "name": "郊区",
              "en_name": "Jiao"
            },
            {
              "code": "2595",
              "parentCode": "670",
              "name": "铜官区",
              "en_name": "Tongguanshan"
            },
            {
              "code": "2598",
              "parentCode": "670",
              "name": "义安区",
              "en_name": "Tongling"
            },
            {
              "code": "2604",
              "parentCode": "670",
              "name": "枞阳县",
              "en_name": "Zuoyang"
            }
          ]
        },
        {
          "code": "665",
          "parentCode": "541",
          "name": "芜湖",
          "en_name": "WUHU",
          "sublist": [
            {
              "code": "2569",
              "parentCode": "665",
              "name": "繁昌区",
              "en_name": "fanchangqu"
            },
            {
              "code": "2564",
              "parentCode": "665",
              "name": "镜湖区",
              "en_name": "Jinghu"
            },
            {
              "code": "2566",
              "parentCode": "665",
              "name": "鸠江区",
              "en_name": "Jiujiang"
            },
            {
              "code": "2570",
              "parentCode": "665",
              "name": "南陵县",
              "en_name": "Nanling"
            },
            {
              "code": "2567",
              "parentCode": "665",
              "name": "三山区",
              "en_name": "Sanshan"
            },
            {
              "code": "2568",
              "parentCode": "665",
              "name": "湾沚区",
              "en_name": "wanzhiqu"
            },
            {
              "code": "2571",
              "parentCode": "665",
              "name": "无为市",
              "en_name": "Wuwei"
            },
            {
              "code": "2565",
              "parentCode": "665",
              "name": "弋江区",
              "en_name": "Yijiang"
            }
          ]
        },
        {
          "code": "680",
          "parentCode": "541",
          "name": "宣城",
          "en_name": "XUANCHENG",
          "sublist": [
            {
              "code": "10181",
              "parentCode": "680",
              "name": "广德市",
              "en_name": "GUANGDE"
            },
            {
              "code": "2655",
              "parentCode": "680",
              "name": "旌德县",
              "en_name": "Jingde"
            },
            {
              "code": "2658",
              "parentCode": "680",
              "name": "泾县",
              "en_name": "Jing"
            },
            {
              "code": "2659",
              "parentCode": "680",
              "name": "绩溪县",
              "en_name": "Jixi"
            },
            {
              "code": "2656",
              "parentCode": "680",
              "name": "郎溪县",
              "en_name": "Langxi"
            },
            {
              "code": "2654",
              "parentCode": "680",
              "name": "宁国市",
              "en_name": "Ningguo"
            },
            {
              "code": "2653",
              "parentCode": "680",
              "name": "宣州区",
              "en_name": "Xuanzhou"
            }
          ]
        }
      ]
    },
    {
      "code": "562",
      "parentCode": "489",
      "name": "澳门",
      "en_name": "MACAO"
    },
    {
      "code": "530",
      "parentCode": "489",
      "name": "北京",
      "en_name": "BEIJING",
      "sublist": [
        {
          "code": "2013",
          "parentCode": "530",
          "name": "昌平区",
          "en_name": "Changping",
          "sublist": []
        },
        {
          "code": "2006",
          "parentCode": "530",
          "name": "朝阳区",
          "en_name": "CHAOYANGQU",
          "sublist": []
        },
        {
          "code": "2012",
          "parentCode": "530",
          "name": "大兴区",
          "en_name": "Daxing",
          "sublist": []
        },
        {
          "code": "2001",
          "parentCode": "530",
          "name": "东城区",
          "en_name": "Dongcheng",
          "sublist": []
        },
        {
          "code": "2011",
          "parentCode": "530",
          "name": "房山区",
          "en_name": "Fangshan",
          "sublist": []
        },
        {
          "code": "2007",
          "parentCode": "530",
          "name": "丰台区",
          "en_name": "Fengtai",
          "sublist": []
        },
        {
          "code": "2005",
          "parentCode": "530",
          "name": "海淀区",
          "en_name": "Haidian",
          "sublist": []
        },
        {
          "code": "2014",
          "parentCode": "530",
          "name": "怀柔区",
          "en_name": "Huairou",
          "sublist": []
        },
        {
          "code": "2016",
          "parentCode": "530",
          "name": "门头沟区",
          "en_name": "Mentougou",
          "sublist": []
        },
        {
          "code": "2017",
          "parentCode": "530",
          "name": "密云区",
          "en_name": "Miyun",
          "sublist": []
        },
        {
          "code": "2015",
          "parentCode": "530",
          "name": "平谷区",
          "en_name": "Pinggu",
          "sublist": []
        },
        {
          "code": "2008",
          "parentCode": "530",
          "name": "石景山区",
          "en_name": "Shijingshan",
          "sublist": []
        },
        {
          "code": "2010",
          "parentCode": "530",
          "name": "顺义区",
          "en_name": "Shunyi",
          "sublist": []
        },
        {
          "code": "2009",
          "parentCode": "530",
          "name": "通州区",
          "en_name": "Tongzhou",
          "sublist": []
        },
        {
          "code": "2002",
          "parentCode": "530",
          "name": "西城区",
          "en_name": "Xicheng",
          "sublist": []
        },
        {
          "code": "2018",
          "parentCode": "530",
          "name": "延庆区",
          "en_name": "Yanqing",
          "sublist": []
        }
      ]
    },
    {
      "code": "551",
      "parentCode": "489",
      "name": "重庆",
      "en_name": "CHONGQING",
      "sublist": [
        {
          "code": "2319",
          "parentCode": "551",
          "name": "巴南区",
          "en_name": "Banan",
          "sublist": []
        },
        {
          "code": "2320",
          "parentCode": "551",
          "name": "北碚区",
          "en_name": "Beibei",
          "sublist": []
        },
        {
          "code": "2360",
          "parentCode": "551",
          "name": "北部新区",
          "en_name": "Beibuxin",
          "sublist": []
        },
        {
          "code": "2333",
          "parentCode": "551",
          "name": "璧山区",
          "en_name": "Bishan",
          "sublist": []
        },
        {
          "code": "2346",
          "parentCode": "551",
          "name": "城口县",
          "en_name": "Chengkou",
          "sublist": []
        },
        {
          "code": "2317",
          "parentCode": "551",
          "name": "大渡口区",
          "en_name": "Dadukou",
          "sublist": []
        },
        {
          "code": "2332",
          "parentCode": "551",
          "name": "大足区",
          "en_name": "Dazu",
          "sublist": []
        },
        {
          "code": "2341",
          "parentCode": "551",
          "name": "垫江县",
          "en_name": "Dianjiang",
          "sublist": []
        },
        {
          "code": "2342",
          "parentCode": "551",
          "name": "丰都县",
          "en_name": "Fengdu",
          "sublist": []
        },
        {
          "code": "2343",
          "parentCode": "551",
          "name": "奉节县",
          "en_name": "Fengjie",
          "sublist": []
        },
        {
          "code": "2324",
          "parentCode": "551",
          "name": "涪陵区",
          "en_name": "Fuling",
          "sublist": []
        },
        {
          "code": "2327",
          "parentCode": "551",
          "name": "合川区",
          "en_name": "Hechuan",
          "sublist": []
        },
        {
          "code": "2313",
          "parentCode": "551",
          "name": "江北区",
          "en_name": "Jiangbei",
          "sublist": []
        },
        {
          "code": "2326",
          "parentCode": "551",
          "name": "江津区",
          "en_name": "Jiangjin",
          "sublist": []
        },
        {
          "code": "2316",
          "parentCode": "551",
          "name": "九龙坡区",
          "en_name": "Jiulongpo",
          "sublist": []
        },
        {
          "code": "2338",
          "parentCode": "551",
          "name": "开州区",
          "en_name": "Kai",
          "sublist": []
        },
        {
          "code": "2340",
          "parentCode": "551",
          "name": "梁平区",
          "en_name": "Liangping",
          "sublist": []
        },
        {
          "code": "2314",
          "parentCode": "551",
          "name": "南岸区",
          "en_name": "Nanan",
          "sublist": []
        },
        {
          "code": "2330",
          "parentCode": "551",
          "name": "南川区",
          "en_name": "Nanchuan",
          "sublist": []
        },
        {
          "code": "2436",
          "parentCode": "551",
          "name": "彭水苗族土家族自治县",
          "en_name": "Pengshui",
          "sublist": []
        },
        {
          "code": "2322",
          "parentCode": "551",
          "name": "黔江区",
          "en_name": "Qianjiang",
          "sublist": []
        },
        {
          "code": "2336",
          "parentCode": "551",
          "name": "綦江区",
          "en_name": "Qijiang",
          "sublist": []
        },
        {
          "code": "2331",
          "parentCode": "551",
          "name": "荣昌区",
          "en_name": "Rongchang",
          "sublist": []
        },
        {
          "code": "2315",
          "parentCode": "551",
          "name": "沙坪坝区",
          "en_name": "Shapingba",
          "sublist": []
        },
        {
          "code": "2433",
          "parentCode": "551",
          "name": "石柱土家族自治县",
          "en_name": "Shizhu",
          "sublist": []
        },
        {
          "code": "2328",
          "parentCode": "551",
          "name": "双桥区",
          "en_name": "Shuangqiao",
          "sublist": []
        },
        {
          "code": "2334",
          "parentCode": "551",
          "name": "铜梁区",
          "en_name": "Tongliang",
          "sublist": []
        },
        {
          "code": "2335",
          "parentCode": "551",
          "name": "潼南区",
          "en_name": "Tongnan",
          "sublist": []
        },
        {
          "code": "2329",
          "parentCode": "551",
          "name": "万盛区",
          "en_name": "Wansheng",
          "sublist": []
        },
        {
          "code": "2321",
          "parentCode": "551",
          "name": "万州区",
          "en_name": "Wanzhou",
          "sublist": []
        },
        {
          "code": "2347",
          "parentCode": "551",
          "name": "武隆区",
          "en_name": "Wulong",
          "sublist": []
        },
        {
          "code": "2344",
          "parentCode": "551",
          "name": "巫山县",
          "en_name": "Wushan",
          "sublist": []
        },
        {
          "code": "2345",
          "parentCode": "551",
          "name": "巫溪县",
          "en_name": "Wuxi",
          "sublist": []
        },
        {
          "code": "2434",
          "parentCode": "551",
          "name": "秀山土家族苗族自治县",
          "en_name": "Xiushan",
          "sublist": []
        },
        {
          "code": "2323",
          "parentCode": "551",
          "name": "永川区",
          "en_name": "Yongchuan",
          "sublist": []
        },
        {
          "code": "2435",
          "parentCode": "551",
          "name": "酉阳土家族苗族自治县",
          "en_name": "Youyang",
          "sublist": []
        },
        {
          "code": "2318",
          "parentCode": "551",
          "name": "渝北区",
          "en_name": "Yubei",
          "sublist": []
        },
        {
          "code": "2339",
          "parentCode": "551",
          "name": "云阳县",
          "en_name": "Yunyang",
          "sublist": []
        },
        {
          "code": "2312",
          "parentCode": "551",
          "name": "渝中区",
          "en_name": "Yuzhong",
          "sublist": []
        },
        {
          "code": "2325",
          "parentCode": "551",
          "name": "长寿区",
          "en_name": "Changshou",
          "sublist": []
        },
        {
          "code": "2337",
          "parentCode": "551",
          "name": "忠县",
          "en_name": "Zhong",
          "sublist": []
        }
      ]
    },
    {
      "code": "542",
      "parentCode": "489",
      "name": "福建",
      "en_name": "FUJIAN",
      "sublist": [
        {
          "code": "681",
          "parentCode": "542",
          "name": "福州",
          "en_name": "FUZHOU",
          "sublist": [
            {
              "code": "2253",
              "parentCode": "681",
              "name": "仓山区",
              "en_name": "Cangshan"
            },
            {
              "code": "2473",
              "parentCode": "681",
              "name": "福清市",
              "en_name": "FUQING"
            },
            {
              "code": "2251",
              "parentCode": "681",
              "name": "鼓楼区",
              "en_name": "Gulou"
            },
            {
              "code": "2255",
              "parentCode": "681",
              "name": "晋安区",
              "en_name": "Jinan"
            },
            {
              "code": "2258",
              "parentCode": "681",
              "name": "连江县",
              "en_name": "Lianjiang"
            },
            {
              "code": "2257",
              "parentCode": "681",
              "name": "罗源县",
              "en_name": "Luoyuan"
            },
            {
              "code": "2254",
              "parentCode": "681",
              "name": "马尾区",
              "en_name": "Mawei"
            },
            {
              "code": "2256",
              "parentCode": "681",
              "name": "闽侯县",
              "en_name": "Minhou"
            },
            {
              "code": "2260",
              "parentCode": "681",
              "name": "闽清县",
              "en_name": "Minqing"
            },
            {
              "code": "2261",
              "parentCode": "681",
              "name": "平潭县",
              "en_name": "Pingtan"
            },
            {
              "code": "2252",
              "parentCode": "681",
              "name": "台江区",
              "en_name": "Taijiang"
            },
            {
              "code": "2259",
              "parentCode": "681",
              "name": "永泰县",
              "en_name": "Yongtai"
            },
            {
              "code": "2472",
              "parentCode": "681",
              "name": "长乐区",
              "en_name": "CHANGLE"
            }
          ]
        },
        {
          "code": "689",
          "parentCode": "542",
          "name": "龙岩",
          "en_name": "LONGYAN",
          "sublist": [
            {
              "code": "3603",
              "parentCode": "689",
              "name": "连城县",
              "en_name": "Liancheng"
            },
            {
              "code": "3601",
              "parentCode": "689",
              "name": "上杭县",
              "en_name": "Shanghang"
            },
            {
              "code": "3602",
              "parentCode": "689",
              "name": "武平县",
              "en_name": "Wuping"
            },
            {
              "code": "3597",
              "parentCode": "689",
              "name": "新罗区",
              "en_name": "Xinluo"
            },
            {
              "code": "3600",
              "parentCode": "689",
              "name": "永定区",
              "en_name": "Yongding"
            },
            {
              "code": "3598",
              "parentCode": "689",
              "name": "漳平市",
              "en_name": "Zhangping"
            },
            {
              "code": "3599",
              "parentCode": "689",
              "name": "长汀县",
              "en_name": "Changding"
            }
          ]
        },
        {
          "code": "688",
          "parentCode": "542",
          "name": "南平",
          "en_name": "NANPING",
          "sublist": [
            {
              "code": "3594",
              "parentCode": "688",
              "name": "光泽县",
              "en_name": "Guangze"
            },
            {
              "code": "3590",
              "parentCode": "688",
              "name": "建瓯市",
              "en_name": "Jianou"
            },
            {
              "code": "3591",
              "parentCode": "688",
              "name": "建阳区",
              "en_name": "Jianyang"
            },
            {
              "code": "3593",
              "parentCode": "688",
              "name": "浦城县",
              "en_name": "Pucheng"
            },
            {
              "code": "3588",
              "parentCode": "688",
              "name": "邵武市",
              "en_name": "Shaowu"
            },
            {
              "code": "3592",
              "parentCode": "688",
              "name": "顺昌县",
              "en_name": "Shunchang"
            },
            {
              "code": "3595",
              "parentCode": "688",
              "name": "松溪县",
              "en_name": "Songxi"
            },
            {
              "code": "3589",
              "parentCode": "688",
              "name": "武夷山市",
              "en_name": "Wuyishan"
            },
            {
              "code": "3587",
              "parentCode": "688",
              "name": "延平区",
              "en_name": "Yanping"
            },
            {
              "code": "3596",
              "parentCode": "688",
              "name": "政和县",
              "en_name": "Zhenghe"
            }
          ]
        },
        {
          "code": "690",
          "parentCode": "542",
          "name": "宁德",
          "en_name": "NINGDE",
          "sublist": [
            {
              "code": "3401",
              "parentCode": "690",
              "name": "福安市",
              "en_name": "Fuan"
            },
            {
              "code": "3606",
              "parentCode": "690",
              "name": "福鼎市",
              "en_name": "Fuding"
            },
            {
              "code": "3608",
              "parentCode": "690",
              "name": "古田县",
              "en_name": "Gutian"
            },
            {
              "code": "3604",
              "parentCode": "690",
              "name": "蕉城区",
              "en_name": "Jiaocheng"
            },
            {
              "code": "3609",
              "parentCode": "690",
              "name": "屏南县",
              "en_name": "Pingnan"
            },
            {
              "code": "3610",
              "parentCode": "690",
              "name": "寿宁县",
              "en_name": "Shouning"
            },
            {
              "code": "3607",
              "parentCode": "690",
              "name": "霞浦县",
              "en_name": "Xiapu"
            },
            {
              "code": "3612",
              "parentCode": "690",
              "name": "柘荣县",
              "en_name": "Zherong"
            },
            {
              "code": "3611",
              "parentCode": "690",
              "name": "周宁县",
              "en_name": "Zhouning"
            }
          ]
        },
        {
          "code": "683",
          "parentCode": "542",
          "name": "莆田",
          "en_name": "PUTIAN",
          "sublist": [
            {
              "code": "3546",
              "parentCode": "683",
              "name": "城厢区",
              "en_name": "Chengxiang"
            },
            {
              "code": "3547",
              "parentCode": "683",
              "name": "涵江区",
              "en_name": "Hanjiang"
            },
            {
              "code": "3548",
              "parentCode": "683",
              "name": "荔城区",
              "en_name": "Zhicheng"
            },
            {
              "code": "3550",
              "parentCode": "683",
              "name": "仙游县",
              "en_name": "Xianyou"
            },
            {
              "code": "3549",
              "parentCode": "683",
              "name": "秀屿区",
              "en_name": "Xiuyu"
            }
          ]
        },
        {
          "code": "685",
          "parentCode": "542",
          "name": "泉州",
          "en_name": "QUANZHOU",
          "sublist": [
            {
              "code": "3097",
              "parentCode": "685",
              "name": "安溪县",
              "en_name": "Anxixian"
            },
            {
              "code": "3099",
              "parentCode": "685",
              "name": "德化县",
              "en_name": "Dehuaxian"
            },
            {
              "code": "3094",
              "parentCode": "685",
              "name": "丰泽区",
              "en_name": "Fengzequ"
            },
            {
              "code": "3096",
              "parentCode": "685",
              "name": "惠安县",
              "en_name": "Huianxian"
            },
            {
              "code": "3101",
              "parentCode": "685",
              "name": "晋江市",
              "en_name": "Jinjiangshi"
            },
            {
              "code": "3574",
              "parentCode": "685",
              "name": "金门县",
              "en_name": "Jinmen"
            },
            {
              "code": "3093",
              "parentCode": "685",
              "name": "鲤城区",
              "en_name": "Lichengqu"
            },
            {
              "code": "3095",
              "parentCode": "685",
              "name": "洛江区",
              "en_name": "Luojiangqu"
            },
            {
              "code": "3102",
              "parentCode": "685",
              "name": "南安市",
              "en_name": "Nananshi"
            },
            {
              "code": "3400",
              "parentCode": "685",
              "name": "泉港区",
              "en_name": "Quangang"
            },
            {
              "code": "3100",
              "parentCode": "685",
              "name": "石狮市",
              "en_name": "Shishishi"
            },
            {
              "code": "3098",
              "parentCode": "685",
              "name": "永春县",
              "en_name": "Yongchunxian"
            }
          ]
        },
        {
          "code": "684",
          "parentCode": "542",
          "name": "三明",
          "en_name": "SANMING",
          "sublist": [
            {
              "code": "3557",
              "parentCode": "684",
              "name": "大田县",
              "en_name": "Datian"
            },
            {
              "code": "3560",
              "parentCode": "684",
              "name": "将乐县",
              "en_name": "Jiangle"
            },
            {
              "code": "3562",
              "parentCode": "684",
              "name": "建宁县",
              "en_name": "Jianning"
            },
            {
              "code": "3551",
              "parentCode": "684",
              "name": "梅列区",
              "en_name": "Meilie"
            },
            {
              "code": "3554",
              "parentCode": "684",
              "name": "明溪县",
              "en_name": "Mingxi"
            },
            {
              "code": "3556",
              "parentCode": "684",
              "name": "宁化县",
              "en_name": "Ninghua"
            },
            {
              "code": "3555",
              "parentCode": "684",
              "name": "清流县",
              "en_name": "Qingliu"
            },
            {
              "code": "3552",
              "parentCode": "684",
              "name": "三元区",
              "en_name": "Sanyuan"
            },
            {
              "code": "3559",
              "parentCode": "684",
              "name": "沙县区",
              "en_name": "SHAXIANQU"
            },
            {
              "code": "3561",
              "parentCode": "684",
              "name": "泰宁县",
              "en_name": "Taining"
            },
            {
              "code": "3553",
              "parentCode": "684",
              "name": "永安市",
              "en_name": "Yongan"
            },
            {
              "code": "3558",
              "parentCode": "684",
              "name": "尤溪县",
              "en_name": "Youxi"
            }
          ]
        },
        {
          "code": "682",
          "parentCode": "542",
          "name": "厦门",
          "en_name": "XIAMEN",
          "sublist": [
            {
              "code": "2267",
              "parentCode": "682",
              "name": "海沧区",
              "en_name": "Haicang"
            },
            {
              "code": "2265",
              "parentCode": "682",
              "name": "湖里区",
              "en_name": "Huli"
            },
            {
              "code": "2266",
              "parentCode": "682",
              "name": "集美区",
              "en_name": "Jimei"
            },
            {
              "code": "2264",
              "parentCode": "682",
              "name": "思明区",
              "en_name": "Siming"
            },
            {
              "code": "2268",
              "parentCode": "682",
              "name": "同安区",
              "en_name": "Tongan"
            },
            {
              "code": "2269",
              "parentCode": "682",
              "name": "翔安区",
              "en_name": "Xiangan"
            }
          ]
        },
        {
          "code": "687",
          "parentCode": "542",
          "name": "漳州",
          "en_name": "ZHANGZHOU",
          "sublist": [
            {
              "code": "3583",
              "parentCode": "687",
              "name": "东山县",
              "en_name": "Dongshan"
            },
            {
              "code": "3586",
              "parentCode": "687",
              "name": "华安县",
              "en_name": "Huaan"
            },
            {
              "code": "3578",
              "parentCode": "687",
              "name": "龙海区",
              "en_name": "longhaiqu"
            },
            {
              "code": "3577",
              "parentCode": "687",
              "name": "龙文区",
              "en_name": "Longwen"
            },
            {
              "code": "3584",
              "parentCode": "687",
              "name": "南靖县",
              "en_name": "Nanjing"
            },
            {
              "code": "3585",
              "parentCode": "687",
              "name": "平和县",
              "en_name": "Pinghe"
            },
            {
              "code": "3576",
              "parentCode": "687",
              "name": "芗城区",
              "en_name": "Xiangcheng"
            },
            {
              "code": "3579",
              "parentCode": "687",
              "name": "云霄县",
              "en_name": "Yunxiao"
            },
            {
              "code": "3580",
              "parentCode": "687",
              "name": "漳浦县",
              "en_name": "Zhangpu"
            },
            {
              "code": "3582",
              "parentCode": "687",
              "name": "长泰区",
              "en_name": "zhangtaiqu"
            },
            {
              "code": "3581",
              "parentCode": "687",
              "name": "诏安县",
              "en_name": "Zhaoan"
            }
          ]
        }
      ]
    },
    {
      "code": "557",
      "parentCode": "489",
      "name": "甘肃",
      "en_name": "GANSU",
      "sublist": [
        {
          "code": "867",
          "parentCode": "557",
          "name": "白银",
          "en_name": "BAIYIN",
          "sublist": [
            {
              "code": "5062",
              "parentCode": "867",
              "name": "白银区",
              "en_name": "Baiyin"
            },
            {
              "code": "5065",
              "parentCode": "867",
              "name": "会宁县",
              "en_name": "Huining"
            },
            {
              "code": "5066",
              "parentCode": "867",
              "name": "景泰县",
              "en_name": "Jingtai"
            },
            {
              "code": "5064",
              "parentCode": "867",
              "name": "靖远县",
              "en_name": "Jingyuan"
            },
            {
              "code": "5063",
              "parentCode": "867",
              "name": "平川区",
              "en_name": "Pingchuan"
            }
          ]
        },
        {
          "code": "874",
          "parentCode": "557",
          "name": "定西",
          "en_name": "DINGXI",
          "sublist": [
            {
              "code": "5106",
              "parentCode": "874",
              "name": "安定区",
              "en_name": "Anding"
            },
            {
              "code": "5110",
              "parentCode": "874",
              "name": "临洮县",
              "en_name": "Lintao"
            },
            {
              "code": "5108",
              "parentCode": "874",
              "name": "陇西县",
              "en_name": "Longxi"
            },
            {
              "code": "5112",
              "parentCode": "874",
              "name": "岷县",
              "en_name": "Min"
            },
            {
              "code": "5107",
              "parentCode": "874",
              "name": "通渭县",
              "en_name": "Tongwei"
            },
            {
              "code": "5109",
              "parentCode": "874",
              "name": "渭源县",
              "en_name": "Weiyuan"
            },
            {
              "code": "5111",
              "parentCode": "874",
              "name": "漳县",
              "en_name": "Zhang"
            }
          ]
        },
        {
          "code": "877",
          "parentCode": "557",
          "name": "甘南",
          "en_name": "GANNAN",
          "sublist": [
            {
              "code": "5134",
              "parentCode": "877",
              "name": "迭部县",
              "en_name": "Diebu"
            },
            {
              "code": "5130",
              "parentCode": "877",
              "name": "合作市",
              "en_name": "Hezuo"
            },
            {
              "code": "5131",
              "parentCode": "877",
              "name": "临潭县",
              "en_name": "Lintan"
            },
            {
              "code": "5136",
              "parentCode": "877",
              "name": "碌曲县",
              "en_name": "Luqu"
            },
            {
              "code": "5135",
              "parentCode": "877",
              "name": "玛曲县",
              "en_name": "Maqu"
            },
            {
              "code": "5137",
              "parentCode": "877",
              "name": "夏河县",
              "en_name": "Xiahe"
            },
            {
              "code": "5133",
              "parentCode": "877",
              "name": "舟曲县",
              "en_name": "Zhouqu"
            },
            {
              "code": "5132",
              "parentCode": "877",
              "name": "卓尼县",
              "en_name": "Zhuoni"
            }
          ]
        },
        {
          "code": "865",
          "parentCode": "557",
          "name": "嘉峪关",
          "en_name": "JIAYUGUAN",
          "sublist": []
        },
        {
          "code": "866",
          "parentCode": "557",
          "name": "金昌",
          "en_name": "JINCHANG",
          "sublist": [
            {
              "code": "5060",
              "parentCode": "866",
              "name": "金川区",
              "en_name": "Jinchuan"
            },
            {
              "code": "5061",
              "parentCode": "866",
              "name": "永昌县",
              "en_name": "Yongchang"
            }
          ]
        },
        {
          "code": "872",
          "parentCode": "557",
          "name": "酒泉",
          "en_name": "JIUQUAN",
          "sublist": [
            {
              "code": "5097",
              "parentCode": "872",
              "name": "阿克塞哈萨克族自治县",
              "en_name": "Akesaihasakezuzizhi"
            },
            {
              "code": "5093",
              "parentCode": "872",
              "name": "敦煌市",
              "en_name": "Dunhuang"
            },
            {
              "code": "5095",
              "parentCode": "872",
              "name": "瓜州县",
              "en_name": "Guazhou"
            },
            {
              "code": "5094",
              "parentCode": "872",
              "name": "金塔县",
              "en_name": "Jinta"
            },
            {
              "code": "5096",
              "parentCode": "872",
              "name": "肃北蒙古族自治县",
              "en_name": "Subeineimengguzizhi"
            },
            {
              "code": "5091",
              "parentCode": "872",
              "name": "肃州区",
              "en_name": "Suzhou"
            },
            {
              "code": "5092",
              "parentCode": "872",
              "name": "玉门市",
              "en_name": "Yumen"
            }
          ]
        },
        {
          "code": "864",
          "parentCode": "557",
          "name": "兰州",
          "en_name": "LANZHOU",
          "sublist": [
            {
              "code": "3352",
              "parentCode": "864",
              "name": "安宁区",
              "en_name": "Anningqu"
            },
            {
              "code": "3350",
              "parentCode": "864",
              "name": "城关区",
              "en_name": "Chengguanqu"
            },
            {
              "code": "3356",
              "parentCode": "864",
              "name": "皋兰县",
              "en_name": "Gaolanxian"
            },
            {
              "code": "3354",
              "parentCode": "864",
              "name": "红古区",
              "en_name": "Hongguqu"
            },
            {
              "code": "3358",
              "parentCode": "864",
              "name": "兰州新区",
              "en_name": "Lanzhouxinqu"
            },
            {
              "code": "3351",
              "parentCode": "864",
              "name": "七里河区",
              "en_name": "Qilihequ"
            },
            {
              "code": "3353",
              "parentCode": "864",
              "name": "西固区",
              "en_name": "Xiguqu"
            },
            {
              "code": "3355",
              "parentCode": "864",
              "name": "永登县",
              "en_name": "Yongdengxian"
            },
            {
              "code": "3357",
              "parentCode": "864",
              "name": "榆中县",
              "en_name": "Yuzhongxian"
            }
          ]
        },
        {
          "code": "876",
          "parentCode": "557",
          "name": "临夏",
          "en_name": "LINXIA",
          "sublist": [
            {
              "code": "5128",
              "parentCode": "876",
              "name": "东乡族自治县",
              "en_name": "Donggzuzizhi"
            },
            {
              "code": "5126",
              "parentCode": "876",
              "name": "广河县",
              "en_name": "Guanghe"
            },
            {
              "code": "5127",
              "parentCode": "876",
              "name": "和政县",
              "en_name": "Hezheng"
            },
            {
              "code": "5129",
              "parentCode": "876",
              "name": "积石山保安族东乡族撒拉族自治县",
              "en_name": "Jishishanbaoanzudonggzusalazuzizhi"
            },
            {
              "code": "5124",
              "parentCode": "876",
              "name": "康乐县",
              "en_name": "Kangle"
            },
            {
              "code": "5122",
              "parentCode": "876",
              "name": "临夏市",
              "en_name": "Linxia"
            },
            {
              "code": "5123",
              "parentCode": "876",
              "name": "临夏县",
              "en_name": "Linxia"
            },
            {
              "code": "5125",
              "parentCode": "876",
              "name": "永靖县",
              "en_name": "Yongjing"
            }
          ]
        },
        {
          "code": "875",
          "parentCode": "557",
          "name": "陇南",
          "en_name": "LONGNAN",
          "sublist": [
            {
              "code": "5114",
              "parentCode": "875",
              "name": "成县",
              "en_name": "Cheng"
            },
            {
              "code": "5116",
              "parentCode": "875",
              "name": "宕昌县",
              "en_name": "Dangchang"
            },
            {
              "code": "5120",
              "parentCode": "875",
              "name": "徽县",
              "en_name": "Hui"
            },
            {
              "code": "5117",
              "parentCode": "875",
              "name": "康县",
              "en_name": "Kang"
            },
            {
              "code": "5121",
              "parentCode": "875",
              "name": "两当县",
              "en_name": "Liangdang"
            },
            {
              "code": "5119",
              "parentCode": "875",
              "name": "礼县",
              "en_name": "Li"
            },
            {
              "code": "5115",
              "parentCode": "875",
              "name": "文县",
              "en_name": "Wen"
            },
            {
              "code": "5113",
              "parentCode": "875",
              "name": "武都区",
              "en_name": "Wudu"
            },
            {
              "code": "5118",
              "parentCode": "875",
              "name": "西和县",
              "en_name": "Xihe"
            }
          ]
        },
        {
          "code": "871",
          "parentCode": "557",
          "name": "平凉",
          "en_name": "PINGLIANG",
          "sublist": [
            {
              "code": "5087",
              "parentCode": "871",
              "name": "崇信县",
              "en_name": "Chongxin"
            },
            {
              "code": "5088",
              "parentCode": "871",
              "name": "华亭市",
              "en_name": "Huating"
            },
            {
              "code": "5085",
              "parentCode": "871",
              "name": "泾川县",
              "en_name": "Jingchuan"
            },
            {
              "code": "5090",
              "parentCode": "871",
              "name": "静宁县",
              "en_name": "Jingning"
            },
            {
              "code": "5084",
              "parentCode": "871",
              "name": "崆峒区",
              "en_name": "Kongtong"
            },
            {
              "code": "5086",
              "parentCode": "871",
              "name": "灵台县",
              "en_name": "Lingtai"
            },
            {
              "code": "5089",
              "parentCode": "871",
              "name": "庄浪县",
              "en_name": "Zhuanglang"
            }
          ]
        },
        {
          "code": "873",
          "parentCode": "557",
          "name": "庆阳",
          "en_name": "QINGYANG",
          "sublist": [
            {
              "code": "5102",
              "parentCode": "873",
              "name": "合水县",
              "en_name": "Heshui"
            },
            {
              "code": "5101",
              "parentCode": "873",
              "name": "华池县",
              "en_name": "Huachi"
            },
            {
              "code": "5100",
              "parentCode": "873",
              "name": "环县",
              "en_name": "Huan"
            },
            {
              "code": "5104",
              "parentCode": "873",
              "name": "宁县",
              "en_name": "Ning"
            },
            {
              "code": "5099",
              "parentCode": "873",
              "name": "庆城县",
              "en_name": "Qingcheng"
            },
            {
              "code": "5098",
              "parentCode": "873",
              "name": "西峰区",
              "en_name": "Xifeng"
            },
            {
              "code": "5103",
              "parentCode": "873",
              "name": "正宁县",
              "en_name": "Zhengning"
            },
            {
              "code": "5105",
              "parentCode": "873",
              "name": "镇原县",
              "en_name": "Zhenyuan"
            }
          ]
        },
        {
          "code": "868",
          "parentCode": "557",
          "name": "天水",
          "en_name": "TIANSHUI",
          "sublist": [
            {
              "code": "5071",
              "parentCode": "868",
              "name": "甘谷县",
              "en_name": "Gangu"
            },
            {
              "code": "5068",
              "parentCode": "868",
              "name": "麦积区",
              "en_name": "Maiji"
            },
            {
              "code": "5070",
              "parentCode": "868",
              "name": "秦安县",
              "en_name": "Qinan"
            },
            {
              "code": "5069",
              "parentCode": "868",
              "name": "清水县",
              "en_name": "Qingshui"
            },
            {
              "code": "5067",
              "parentCode": "868",
              "name": "秦州区",
              "en_name": "Qinzhou"
            },
            {
              "code": "5072",
              "parentCode": "868",
              "name": "武山县",
              "en_name": "Wushan"
            },
            {
              "code": "5073",
              "parentCode": "868",
              "name": "张家川回族自治县",
              "en_name": "Zhangjiachuanhuizuzizhi"
            }
          ]
        },
        {
          "code": "869",
          "parentCode": "557",
          "name": "武威",
          "en_name": "WUWEI",
          "sublist": [
            {
              "code": "5076",
              "parentCode": "869",
              "name": "古浪县",
              "en_name": "Gulang"
            },
            {
              "code": "5074",
              "parentCode": "869",
              "name": "凉州区",
              "en_name": "Liangzhou"
            },
            {
              "code": "5075",
              "parentCode": "869",
              "name": "民勤县",
              "en_name": "Minqin"
            },
            {
              "code": "5077",
              "parentCode": "869",
              "name": "天祝藏族自治县",
              "en_name": "Tianzhuzangzuzizhizhou"
            }
          ]
        },
        {
          "code": "870",
          "parentCode": "557",
          "name": "张掖",
          "en_name": "ZHANGYE",
          "sublist": [
            {
              "code": "5078",
              "parentCode": "870",
              "name": "甘州区",
              "en_name": "Ganzhou"
            },
            {
              "code": "5082",
              "parentCode": "870",
              "name": "高台县",
              "en_name": "Gaotai"
            },
            {
              "code": "5081",
              "parentCode": "870",
              "name": "临泽县",
              "en_name": "Linze"
            },
            {
              "code": "5080",
              "parentCode": "870",
              "name": "民乐县",
              "en_name": "Minle"
            },
            {
              "code": "5083",
              "parentCode": "870",
              "name": "山丹县",
              "en_name": "Shandan"
            },
            {
              "code": "5079",
              "parentCode": "870",
              "name": "肃南裕固族自治县",
              "en_name": "Sunanyuguzuzizhi"
            }
          ]
        }
      ]
    },
    {
      "code": "548",
      "parentCode": "489",
      "name": "广东",
      "en_name": "GUANGDONG",
      "sublist": [
        {
          "code": "781",
          "parentCode": "548",
          "name": "潮州",
          "en_name": "CHAOZHOU",
          "sublist": [
            {
              "code": "4358",
              "parentCode": "781",
              "name": "潮安区",
              "en_name": "Chaoan"
            },
            {
              "code": "4359",
              "parentCode": "781",
              "name": "饶平县",
              "en_name": "Raoping"
            },
            {
              "code": "4357",
              "parentCode": "781",
              "name": "湘桥区",
              "en_name": "Xiangqiao"
            }
          ]
        },
        {
          "code": "779",
          "parentCode": "548",
          "name": "东莞",
          "en_name": "DONGGUAN",
          "sublist": [
            {
              "code": "104046",
              "parentCode": "779",
              "name": "东莞生态园",
              "en_name": "dongguanshengtaiyuan"
            },
            {
              "code": "104047",
              "parentCode": "779",
              "name": "虎门港管委会",
              "en_name": "humenguangguanweihui"
            },
            {
              "code": "3233",
              "parentCode": "779",
              "name": "常平镇",
              "en_name": "Changpingzhen"
            },
            {
              "code": "3226",
              "parentCode": "779",
              "name": "茶山镇",
              "en_name": "Chashanzhen"
            },
            {
              "code": "3235",
              "parentCode": "779",
              "name": "大朗镇",
              "en_name": "Dalangzhen"
            },
            {
              "code": "3240",
              "parentCode": "779",
              "name": "大岭山镇",
              "en_name": "Dalingshanzhen"
            },
            {
              "code": "3246",
              "parentCode": "779",
              "name": "道滘镇",
              "en_name": "Daojiaozhen"
            },
            {
              "code": "3222",
              "parentCode": "779",
              "name": "东城街道",
              "en_name": "dongchengjiedao"
            },
            {
              "code": "3232",
              "parentCode": "779",
              "name": "东坑镇",
              "en_name": "Dongkengzhen"
            },
            {
              "code": "3250",
              "parentCode": "779",
              "name": "凤岗镇",
              "en_name": "Fenggangzhen"
            },
            {
              "code": "3238",
              "parentCode": "779",
              "name": "高埗镇",
              "en_name": "Gaobuzhen"
            },
            {
              "code": "3220",
              "parentCode": "779",
              "name": "莞城街道",
              "en_name": "guanchengjiedao"
            },
            {
              "code": "3229",
              "parentCode": "779",
              "name": "横沥镇",
              "en_name": "Henglizhen"
            },
            {
              "code": "3243",
              "parentCode": "779",
              "name": "洪梅镇",
              "en_name": "Hongmeizhen"
            },
            {
              "code": "3249",
              "parentCode": "779",
              "name": "厚街镇",
              "en_name": "Houjiezhen"
            },
            {
              "code": "3242",
              "parentCode": "779",
              "name": "黄江镇",
              "en_name": "Huangjiangzhen"
            },
            {
              "code": "3248",
              "parentCode": "779",
              "name": "虎门镇",
              "en_name": "Humenzhen"
            },
            {
              "code": "3234",
              "parentCode": "779",
              "name": "寮步镇",
              "en_name": "Liaobuzhen"
            },
            {
              "code": "3236",
              "parentCode": "779",
              "name": "麻涌镇",
              "en_name": "Machongzhen"
            },
            {
              "code": "3221",
              "parentCode": "779",
              "name": "南城街道",
              "en_name": "nanchengjiedao"
            },
            {
              "code": "3230",
              "parentCode": "779",
              "name": "桥头镇",
              "en_name": "Qiaotouzhen"
            },
            {
              "code": "3244",
              "parentCode": "779",
              "name": "清溪镇",
              "en_name": "Qingxizhen"
            },
            {
              "code": "3228",
              "parentCode": "779",
              "name": "企石镇",
              "en_name": "Qishizhen"
            },
            {
              "code": "3245",
              "parentCode": "779",
              "name": "沙田镇",
              "en_name": "Shatianzhen"
            },
            {
              "code": "3224",
              "parentCode": "779",
              "name": "石碣镇",
              "en_name": "Shijiezhen"
            },
            {
              "code": "3225",
              "parentCode": "779",
              "name": "石龙镇",
              "en_name": "Shilongzhen"
            },
            {
              "code": "3227",
              "parentCode": "779",
              "name": "石排镇",
              "en_name": "Shipaizhen"
            },
            {
              "code": "3252",
              "parentCode": "779",
              "name": "松山湖管委会",
              "en_name": "songshanhuguanweihui"
            },
            {
              "code": "3247",
              "parentCode": "779",
              "name": "塘厦镇",
              "en_name": "Tangshazhen"
            },
            {
              "code": "3241",
              "parentCode": "779",
              "name": "望牛墩镇",
              "en_name": "Wangniudunzhen"
            },
            {
              "code": "3223",
              "parentCode": "779",
              "name": "万江街道",
              "en_name": "wanjiangjiedao"
            },
            {
              "code": "3231",
              "parentCode": "779",
              "name": "谢岗镇",
              "en_name": "Xiegangzhen"
            },
            {
              "code": "3251",
              "parentCode": "779",
              "name": "长安镇",
              "en_name": "Changanzhen"
            },
            {
              "code": "3239",
              "parentCode": "779",
              "name": "樟木头镇",
              "en_name": "Zhangmutouzhen"
            },
            {
              "code": "3237",
              "parentCode": "779",
              "name": "中堂镇",
              "en_name": "Zhongtangzhen"
            }
          ]
        },
        {
          "code": "768",
          "parentCode": "548",
          "name": "佛山",
          "en_name": "FOSHAN",
          "sublist": [
            {
              "code": "2535",
              "parentCode": "768",
              "name": "高明区",
              "en_name": "GAOMINGQU"
            },
            {
              "code": "2562",
              "parentCode": "768",
              "name": "南海区",
              "en_name": "NANHAIQU"
            },
            {
              "code": "2534",
              "parentCode": "768",
              "name": "三水区",
              "en_name": "SANSHUIQU"
            },
            {
              "code": "2531",
              "parentCode": "768",
              "name": "禅城区",
              "en_name": "CHANCHENGQU"
            },
            {
              "code": "2560",
              "parentCode": "768",
              "name": "顺德区",
              "en_name": "SHUNDEQU"
            }
          ]
        },
        {
          "code": "763",
          "parentCode": "548",
          "name": "广州",
          "en_name": "GUANGZHOU",
          "sublist": [
            {
              "code": "2049",
              "parentCode": "763",
              "name": "白云区",
              "en_name": "Baiyun"
            },
            {
              "code": "2474",
              "parentCode": "763",
              "name": "从化区",
              "en_name": "Conghua"
            },
            {
              "code": "2046",
              "parentCode": "763",
              "name": "海珠区",
              "en_name": "Haizhu"
            },
            {
              "code": "2051",
              "parentCode": "763",
              "name": "花都区",
              "en_name": "Huadu"
            },
            {
              "code": "2050",
              "parentCode": "763",
              "name": "黄埔区",
              "en_name": "Huangpu"
            },
            {
              "code": "2047",
              "parentCode": "763",
              "name": "荔湾区",
              "en_name": "Liwan"
            },
            {
              "code": "2054",
              "parentCode": "763",
              "name": "南沙区",
              "en_name": "Nansha"
            },
            {
              "code": "2052",
              "parentCode": "763",
              "name": "番禺区",
              "en_name": "Fanyu"
            },
            {
              "code": "2048",
              "parentCode": "763",
              "name": "天河区",
              "en_name": "Tianhe"
            },
            {
              "code": "2045",
              "parentCode": "763",
              "name": "越秀区",
              "en_name": "Yuexiu"
            },
            {
              "code": "2475",
              "parentCode": "763",
              "name": "增城区",
              "en_name": "Zengcheng"
            }
          ]
        },
        {
          "code": "776",
          "parentCode": "548",
          "name": "河源",
          "en_name": "HEYUAN",
          "sublist": [
            {
              "code": "4340",
              "parentCode": "776",
              "name": "东源县",
              "en_name": "Dongyuan"
            },
            {
              "code": "4339",
              "parentCode": "776",
              "name": "和平县",
              "en_name": "Heping"
            },
            {
              "code": "4338",
              "parentCode": "776",
              "name": "连平县",
              "en_name": "Lianping"
            },
            {
              "code": "3405",
              "parentCode": "776",
              "name": "龙川县",
              "en_name": "longchuan"
            },
            {
              "code": "4335",
              "parentCode": "776",
              "name": "源城区",
              "en_name": "Yuancheng"
            },
            {
              "code": "4336",
              "parentCode": "776",
              "name": "紫金县",
              "en_name": "Zijin"
            }
          ]
        },
        {
          "code": "773",
          "parentCode": "548",
          "name": "惠州",
          "en_name": "HUIZHOU",
          "sublist": [
            {
              "code": "3255",
              "parentCode": "773",
              "name": "博罗县",
              "en_name": "Boluoxian"
            },
            {
              "code": "3254",
              "parentCode": "773",
              "name": "大亚湾区",
              "en_name": "Dayawanqu"
            },
            {
              "code": "2246",
              "parentCode": "773",
              "name": "惠城区",
              "en_name": "Huicheng"
            },
            {
              "code": "3256",
              "parentCode": "773",
              "name": "惠东县",
              "en_name": "Huidongxian"
            },
            {
              "code": "2247",
              "parentCode": "773",
              "name": "惠阳区",
              "en_name": "Huiyang"
            },
            {
              "code": "3257",
              "parentCode": "773",
              "name": "龙门县",
              "en_name": "Longmenxian"
            },
            {
              "code": "3253",
              "parentCode": "773",
              "name": "仲恺区",
              "en_name": "Zhongkaiqu"
            }
          ]
        },
        {
          "code": "769",
          "parentCode": "548",
          "name": "江门",
          "en_name": "JIANGMEN",
          "sublist": [
            {
              "code": "3215",
              "parentCode": "769",
              "name": "恩平市",
              "en_name": "Enpingshi"
            },
            {
              "code": "3214",
              "parentCode": "769",
              "name": "鹤山市",
              "en_name": "Heshanshi"
            },
            {
              "code": "3211",
              "parentCode": "769",
              "name": "江海区",
              "en_name": "Jianghaiqu"
            },
            {
              "code": "3213",
              "parentCode": "769",
              "name": "开平市",
              "en_name": "Kaipingshi"
            },
            {
              "code": "3210",
              "parentCode": "769",
              "name": "蓬江区",
              "en_name": "Pengjiangqu"
            },
            {
              "code": "3403",
              "parentCode": "769",
              "name": "台山市",
              "en_name": "Taishan"
            },
            {
              "code": "3212",
              "parentCode": "769",
              "name": "新会区",
              "en_name": "Xinhuiqu"
            }
          ]
        },
        {
          "code": "782",
          "parentCode": "548",
          "name": "揭阳",
          "en_name": "JIEYANG",
          "sublist": [
            {
              "code": "4365",
              "parentCode": "782",
              "name": "惠来县",
              "en_name": "Huilai"
            },
            {
              "code": "4361",
              "parentCode": "782",
              "name": "揭东区",
              "en_name": "Jiedong"
            },
            {
              "code": "4364",
              "parentCode": "782",
              "name": "揭西县",
              "en_name": "Jiexi"
            },
            {
              "code": "3404",
              "parentCode": "782",
              "name": "普宁市",
              "en_name": "Puning"
            },
            {
              "code": "4360",
              "parentCode": "782",
              "name": "榕城区",
              "en_name": "Rongcheng"
            }
          ]
        },
        {
          "code": "771",
          "parentCode": "548",
          "name": "茂名",
          "en_name": "MAOMING",
          "sublist": [
            {
              "code": "4306",
              "parentCode": "771",
              "name": "高州市",
              "en_name": "Gaozhou"
            },
            {
              "code": "4307",
              "parentCode": "771",
              "name": "化州市",
              "en_name": "Huazhou"
            },
            {
              "code": "4305",
              "parentCode": "771",
              "name": "电白区",
              "en_name": "Maogang"
            },
            {
              "code": "4304",
              "parentCode": "771",
              "name": "茂南区",
              "en_name": "Maonan"
            },
            {
              "code": "4308",
              "parentCode": "771",
              "name": "信宜市",
              "en_name": "Xinyi"
            }
          ]
        },
        {
          "code": "774",
          "parentCode": "548",
          "name": "梅州",
          "en_name": "MEIZHOU",
          "sublist": [
            {
              "code": "4326",
              "parentCode": "774",
              "name": "大埔县",
              "en_name": "Dapu"
            },
            {
              "code": "4327",
              "parentCode": "774",
              "name": "丰顺县",
              "en_name": "Fengshun"
            },
            {
              "code": "4330",
              "parentCode": "774",
              "name": "蕉岭县",
              "en_name": "Jiaoling"
            },
            {
              "code": "4323",
              "parentCode": "774",
              "name": "梅江区",
              "en_name": "Meijiang"
            },
            {
              "code": "4325",
              "parentCode": "774",
              "name": "梅县区",
              "en_name": "Meixian"
            },
            {
              "code": "4329",
              "parentCode": "774",
              "name": "平远县",
              "en_name": "Pingyuan"
            },
            {
              "code": "4328",
              "parentCode": "774",
              "name": "五华县",
              "en_name": "Wuhua"
            },
            {
              "code": "4324",
              "parentCode": "774",
              "name": "兴宁市",
              "en_name": "Xingning"
            }
          ]
        },
        {
          "code": "778",
          "parentCode": "548",
          "name": "清远",
          "en_name": "QINGYUAN",
          "sublist": [
            {
              "code": "4349",
              "parentCode": "778",
              "name": "佛冈县",
              "en_name": "Fogang"
            },
            {
              "code": "4352",
              "parentCode": "778",
              "name": "连南瑶族自治县",
              "en_name": "Liannanyaozuzizhi"
            },
            {
              "code": "4351",
              "parentCode": "778",
              "name": "连山壮族瑶族自治县",
              "en_name": "Lianshanzhuangzuyaozuzizhi"
            },
            {
              "code": "4348",
              "parentCode": "778",
              "name": "连州市",
              "en_name": "Lianzhou"
            },
            {
              "code": "4345",
              "parentCode": "778",
              "name": "清城区",
              "en_name": "Qingcheng"
            },
            {
              "code": "4346",
              "parentCode": "778",
              "name": "清新区",
              "en_name": "Qingxin"
            },
            {
              "code": "4350",
              "parentCode": "778",
              "name": "阳山县",
              "en_name": "Yangshan"
            },
            {
              "code": "4347",
              "parentCode": "778",
              "name": "英德市",
              "en_name": "Yingde"
            }
          ]
        },
        {
          "code": "767",
          "parentCode": "548",
          "name": "汕头",
          "en_name": "SHANTOU",
          "sublist": [
            {
              "code": "4279",
              "parentCode": "767",
              "name": "潮南区",
              "en_name": "Chaonan"
            },
            {
              "code": "3219",
              "parentCode": "767",
              "name": "潮阳区",
              "en_name": "Chaoyangqu"
            },
            {
              "code": "4280",
              "parentCode": "767",
              "name": "澄海区",
              "en_name": "Chenghai"
            },
            {
              "code": "3218",
              "parentCode": "767",
              "name": "濠江区",
              "en_name": "Haojiangqu"
            },
            {
              "code": "3217",
              "parentCode": "767",
              "name": "金平区",
              "en_name": "Jinpingqu"
            },
            {
              "code": "3216",
              "parentCode": "767",
              "name": "龙湖区",
              "en_name": "Longhuqu"
            },
            {
              "code": "4281",
              "parentCode": "767",
              "name": "南澳县",
              "en_name": "Nanao"
            }
          ]
        },
        {
          "code": "775",
          "parentCode": "548",
          "name": "汕尾",
          "en_name": "SHANWEI",
          "sublist": [
            {
              "code": "4331",
              "parentCode": "775",
              "name": "城区",
              "en_name": "Cheng"
            },
            {
              "code": "4333",
              "parentCode": "775",
              "name": "海丰县",
              "en_name": "Haifeng"
            },
            {
              "code": "4332",
              "parentCode": "775",
              "name": "陆丰市",
              "en_name": "Lufeng"
            },
            {
              "code": "4334",
              "parentCode": "775",
              "name": "陆河县",
              "en_name": "Luhe"
            }
          ]
        },
        {
          "code": "764",
          "parentCode": "548",
          "name": "韶关",
          "en_name": "SHAOGUAN",
          "sublist": [
            {
              "code": "4255",
              "parentCode": "764",
              "name": "乐昌市",
              "en_name": "Lechang"
            },
            {
              "code": "4256",
              "parentCode": "764",
              "name": "南雄市",
              "en_name": "Nanxiong"
            },
            {
              "code": "4254",
              "parentCode": "764",
              "name": "曲江区",
              "en_name": "Qujiang"
            },
            {
              "code": "4259",
              "parentCode": "764",
              "name": "仁化县",
              "en_name": "Renhua"
            },
            {
              "code": "4260",
              "parentCode": "764",
              "name": "乳源瑶族自治县",
              "en_name": "Ruyuanyaozuzizhi"
            },
            {
              "code": "4257",
              "parentCode": "764",
              "name": "始兴县",
              "en_name": "Shixing"
            },
            {
              "code": "4258",
              "parentCode": "764",
              "name": "翁源县",
              "en_name": "Wengyuan"
            },
            {
              "code": "4252",
              "parentCode": "764",
              "name": "武江区",
              "en_name": "Wujiang"
            },
            {
              "code": "4261",
              "parentCode": "764",
              "name": "新丰县",
              "en_name": "Xinfeng"
            },
            {
              "code": "4253",
              "parentCode": "764",
              "name": "浈江区",
              "en_name": "Zhenjiang"
            }
          ]
        },
        {
          "code": "765",
          "parentCode": "548",
          "name": "深圳",
          "en_name": "SHENZHEN",
          "sublist": [
            {
              "code": "2041",
              "parentCode": "765",
              "name": "宝安区",
              "en_name": "Baoan"
            },
            {
              "code": "2362",
              "parentCode": "765",
              "name": "大鹏新区",
              "en_name": "Dapeng"
            },
            {
              "code": "2037",
              "parentCode": "765",
              "name": "福田区",
              "en_name": "Futian"
            },
            {
              "code": "2044",
              "parentCode": "765",
              "name": "光明区",
              "en_name": "Guangmingxin"
            },
            {
              "code": "2042",
              "parentCode": "765",
              "name": "龙岗区",
              "en_name": "Longgang"
            },
            {
              "code": "2361",
              "parentCode": "765",
              "name": "龙华区",
              "en_name": "Longhua"
            },
            {
              "code": "2038",
              "parentCode": "765",
              "name": "罗湖区",
              "en_name": "Luohu"
            },
            {
              "code": "2039",
              "parentCode": "765",
              "name": "南山区",
              "en_name": "Nanshan"
            },
            {
              "code": "2043",
              "parentCode": "765",
              "name": "坪山区",
              "en_name": "Pingshanxin"
            },
            {
              "code": "2040",
              "parentCode": "765",
              "name": "盐田区",
              "en_name": "Yantian"
            }
          ]
        },
        {
          "code": "777",
          "parentCode": "548",
          "name": "阳江",
          "en_name": "YANGJIANG",
          "sublist": [
            {
              "code": "4341",
              "parentCode": "777",
              "name": "江城区",
              "en_name": "Jiangcheng"
            },
            {
              "code": "4342",
              "parentCode": "777",
              "name": "阳春市",
              "en_name": "Yangchun"
            },
            {
              "code": "4344",
              "parentCode": "777",
              "name": "阳东区",
              "en_name": "Yangdong"
            },
            {
              "code": "4343",
              "parentCode": "777",
              "name": "阳西县",
              "en_name": "Yangxi"
            }
          ]
        },
        {
          "code": "783",
          "parentCode": "548",
          "name": "云浮",
          "en_name": "YUNFU",
          "sublist": [
            {
              "code": "4367",
              "parentCode": "783",
              "name": "罗定市",
              "en_name": "Luoding"
            },
            {
              "code": "4368",
              "parentCode": "783",
              "name": "新兴县",
              "en_name": "Xinxing"
            },
            {
              "code": "4369",
              "parentCode": "783",
              "name": "郁南县",
              "en_name": "Yunan"
            },
            {
              "code": "4370",
              "parentCode": "783",
              "name": "云安区",
              "en_name": "Yunan"
            },
            {
              "code": "4366",
              "parentCode": "783",
              "name": "云城区",
              "en_name": "Yuncheng"
            }
          ]
        },
        {
          "code": "770",
          "parentCode": "548",
          "name": "湛江",
          "en_name": "ZHANJIANG",
          "sublist": [
            {
              "code": "4295",
              "parentCode": "770",
              "name": "赤坎区",
              "en_name": "Chikan"
            },
            {
              "code": "4300",
              "parentCode": "770",
              "name": "雷州市",
              "en_name": "Leizhou"
            },
            {
              "code": "4299",
              "parentCode": "770",
              "name": "廉江市",
              "en_name": "Lianjiang"
            },
            {
              "code": "4298",
              "parentCode": "770",
              "name": "麻章区",
              "en_name": "Mazhang"
            },
            {
              "code": "4297",
              "parentCode": "770",
              "name": "坡头区",
              "en_name": "Potou"
            },
            {
              "code": "4302",
              "parentCode": "770",
              "name": "遂溪县",
              "en_name": "Suixi"
            },
            {
              "code": "4301",
              "parentCode": "770",
              "name": "吴川市",
              "en_name": "Wuchuan"
            },
            {
              "code": "4296",
              "parentCode": "770",
              "name": "霞山区",
              "en_name": "Xiashan"
            },
            {
              "code": "4303",
              "parentCode": "770",
              "name": "徐闻县",
              "en_name": "Xuwen"
            }
          ]
        },
        {
          "code": "772",
          "parentCode": "548",
          "name": "肇庆",
          "en_name": "ZHAOQING",
          "sublist": [
            {
              "code": "4317",
              "parentCode": "772",
              "name": "德庆县",
              "en_name": "Deqing"
            },
            {
              "code": "4311",
              "parentCode": "772",
              "name": "鼎湖区",
              "en_name": "Dinghu"
            },
            {
              "code": "4310",
              "parentCode": "772",
              "name": "端州区",
              "en_name": "Duanzhou"
            },
            {
              "code": "4316",
              "parentCode": "772",
              "name": "封开县",
              "en_name": "Fengkai"
            },
            {
              "code": "4312",
              "parentCode": "772",
              "name": "高要区",
              "en_name": "Gaoyao"
            },
            {
              "code": "4314",
              "parentCode": "772",
              "name": "广宁县",
              "en_name": "Guangning"
            },
            {
              "code": "4315",
              "parentCode": "772",
              "name": "怀集县",
              "en_name": "Huaiji"
            },
            {
              "code": "4313",
              "parentCode": "772",
              "name": "四会市",
              "en_name": "Sihui"
            }
          ]
        },
        {
          "code": "780",
          "parentCode": "548",
          "name": "中山",
          "en_name": "ZHONGSHAN",
          "sublist": [
            {
              "code": "104048",
              "parentCode": "780",
              "name": "中山港街道",
              "en_name": "zhongshangangjiedao"
            },
            {
              "code": "3192",
              "parentCode": "780",
              "name": "板芙镇",
              "en_name": "Banfuzhen"
            },
            {
              "code": "3205",
              "parentCode": "780",
              "name": "大涌镇",
              "en_name": "Dayongzhen"
            },
            {
              "code": "3195",
              "parentCode": "780",
              "name": "东凤镇",
              "en_name": "Dongfengzhen"
            },
            {
              "code": "3186",
              "parentCode": "780",
              "name": "东区街道",
              "en_name": "dongqujiedao"
            },
            {
              "code": "3198",
              "parentCode": "780",
              "name": "东升镇",
              "en_name": "Dongshengzhen"
            },
            {
              "code": "3196",
              "parentCode": "780",
              "name": "阜沙镇",
              "en_name": "Fushazhen"
            },
            {
              "code": "3204",
              "parentCode": "780",
              "name": "港口镇",
              "en_name": "Gangkouzhen"
            },
            {
              "code": "3199",
              "parentCode": "780",
              "name": "古镇镇",
              "en_name": "Guzhenzhen"
            },
            {
              "code": "3200",
              "parentCode": "780",
              "name": "横栏镇",
              "en_name": "Henglanzhen"
            },
            {
              "code": "3193",
              "parentCode": "780",
              "name": "黄圃镇",
              "en_name": "Huangpuzhen"
            },
            {
              "code": "3191",
              "parentCode": "780",
              "name": "火炬开发区街道",
              "en_name": "huojukaifaqujiedao"
            },
            {
              "code": "3202",
              "parentCode": "780",
              "name": "民众街道",
              "en_name": "Minzhongzhen"
            },
            {
              "code": "3203",
              "parentCode": "780",
              "name": "南朗街道",
              "en_name": "Nanlangzhen"
            },
            {
              "code": "3187",
              "parentCode": "780",
              "name": "南区街道",
              "en_name": "nanqujiedao"
            },
            {
              "code": "3194",
              "parentCode": "780",
              "name": "南头镇",
              "en_name": "Nantouzhen"
            },
            {
              "code": "3201",
              "parentCode": "780",
              "name": "三角镇",
              "en_name": "Sanjiaozhen"
            },
            {
              "code": "3207",
              "parentCode": "780",
              "name": "三乡镇",
              "en_name": "Sanxiangzhen"
            },
            {
              "code": "3206",
              "parentCode": "780",
              "name": "沙溪镇",
              "en_name": "Shaxizhen"
            },
            {
              "code": "3208",
              "parentCode": "780",
              "name": "神湾镇",
              "en_name": "Shenwanzhen"
            },
            {
              "code": "3188",
              "parentCode": "780",
              "name": "石岐街道",
              "en_name": "shiqiqujiedao"
            },
            {
              "code": "3209",
              "parentCode": "780",
              "name": "坦洲镇",
              "en_name": "Tanzhouzhen"
            },
            {
              "code": "3190",
              "parentCode": "780",
              "name": "五桂山街道",
              "en_name": "wuguishanjiedao"
            },
            {
              "code": "3197",
              "parentCode": "780",
              "name": "小榄镇",
              "en_name": "Xiaolanzhen"
            },
            {
              "code": "3189",
              "parentCode": "780",
              "name": "西区街道",
              "en_name": "xiqujiedao"
            }
          ]
        },
        {
          "code": "766",
          "parentCode": "548",
          "name": "珠海",
          "en_name": "ZHUHAI",
          "sublist": [
            {
              "code": "3185",
              "parentCode": "766",
              "name": "保税区",
              "en_name": "Baoshuiqu"
            },
            {
              "code": "3181",
              "parentCode": "766",
              "name": "斗门区",
              "en_name": "Doumenqu"
            },
            {
              "code": "3184",
              "parentCode": "766",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "3183",
              "parentCode": "766",
              "name": "横琴新区",
              "en_name": "Hengqinxinqu"
            },
            {
              "code": "3182",
              "parentCode": "766",
              "name": "金湾区",
              "en_name": "Jinwanqu"
            },
            {
              "code": "3180",
              "parentCode": "766",
              "name": "香洲区",
              "en_name": "Xiangzhouqu"
            }
          ]
        }
      ]
    },
    {
      "code": "549",
      "parentCode": "489",
      "name": "广西",
      "en_name": "GUANGXI",
      "sublist": [
        {
          "code": "794",
          "parentCode": "549",
          "name": "百色",
          "en_name": "BAISE",
          "sublist": [
            {
              "code": "4445",
              "parentCode": "794",
              "name": "德保县",
              "en_name": "Debao"
            },
            {
              "code": "4446",
              "parentCode": "794",
              "name": "靖西市",
              "en_name": "Jingxi"
            },
            {
              "code": "4449",
              "parentCode": "794",
              "name": "乐业县",
              "en_name": "Leye"
            },
            {
              "code": "4448",
              "parentCode": "794",
              "name": "凌云县",
              "en_name": "Lingyun"
            },
            {
              "code": "4452",
              "parentCode": "794",
              "name": "隆林各族自治县",
              "en_name": "Longlingezuzizhi"
            },
            {
              "code": "4447",
              "parentCode": "794",
              "name": "那坡县",
              "en_name": "Napo"
            },
            {
              "code": "4444",
              "parentCode": "794",
              "name": "平果市",
              "en_name": "Pingguo"
            },
            {
              "code": "4443",
              "parentCode": "794",
              "name": "田东县",
              "en_name": "Tiandong"
            },
            {
              "code": "4450",
              "parentCode": "794",
              "name": "田林县",
              "en_name": "Tianlin"
            },
            {
              "code": "4442",
              "parentCode": "794",
              "name": "田阳区",
              "en_name": "Tianyang"
            },
            {
              "code": "4451",
              "parentCode": "794",
              "name": "西林县",
              "en_name": "Xilin"
            },
            {
              "code": "4441",
              "parentCode": "794",
              "name": "右江区",
              "en_name": "Youjiang"
            }
          ]
        },
        {
          "code": "789",
          "parentCode": "549",
          "name": "北海",
          "en_name": "BEIHAI",
          "sublist": [
            {
              "code": "3169",
              "parentCode": "789",
              "name": "海城区",
              "en_name": "Haichengqu"
            },
            {
              "code": "3172",
              "parentCode": "789",
              "name": "合浦县",
              "en_name": "Hepuxian"
            },
            {
              "code": "3171",
              "parentCode": "789",
              "name": "铁山港区",
              "en_name": "Tieshangangqu"
            },
            {
              "code": "3170",
              "parentCode": "789",
              "name": "银海区",
              "en_name": "Yinhaiqu"
            }
          ]
        },
        {
          "code": "905",
          "parentCode": "549",
          "name": "崇左",
          "en_name": "CHONGZUO",
          "sublist": [
            {
              "code": "5307",
              "parentCode": "905",
              "name": "大新县",
              "en_name": "Daxin"
            },
            {
              "code": "5304",
              "parentCode": "905",
              "name": "扶绥县",
              "en_name": "Fusui"
            },
            {
              "code": "5302",
              "parentCode": "905",
              "name": "江州区",
              "en_name": "Jiangzhou"
            },
            {
              "code": "5306",
              "parentCode": "905",
              "name": "龙州县",
              "en_name": "Longzhou"
            },
            {
              "code": "5305",
              "parentCode": "905",
              "name": "宁明县",
              "en_name": "Ningming"
            },
            {
              "code": "5303",
              "parentCode": "905",
              "name": "凭祥市",
              "en_name": "Pingxiang"
            },
            {
              "code": "5308",
              "parentCode": "905",
              "name": "天等县",
              "en_name": "Tiandeng"
            }
          ]
        },
        {
          "code": "790",
          "parentCode": "549",
          "name": "防城港",
          "en_name": "FANGCHENGGANG",
          "sublist": [
            {
              "code": "4423",
              "parentCode": "790",
              "name": "东兴市",
              "en_name": "Dongxing"
            },
            {
              "code": "4422",
              "parentCode": "790",
              "name": "防城区",
              "en_name": "Fangcheng"
            },
            {
              "code": "4421",
              "parentCode": "790",
              "name": "港口区",
              "en_name": "Gangkou"
            },
            {
              "code": "4424",
              "parentCode": "790",
              "name": "上思县",
              "en_name": "Shangsi"
            }
          ]
        },
        {
          "code": "792",
          "parentCode": "549",
          "name": "贵港",
          "en_name": "GUIGANG",
          "sublist": [
            {
              "code": "4429",
              "parentCode": "792",
              "name": "港北区",
              "en_name": "Gangbei"
            },
            {
              "code": "4430",
              "parentCode": "792",
              "name": "港南区",
              "en_name": "Gangnan"
            },
            {
              "code": "4432",
              "parentCode": "792",
              "name": "桂平市",
              "en_name": "Guiping"
            },
            {
              "code": "4433",
              "parentCode": "792",
              "name": "平南县",
              "en_name": "Pingnan"
            },
            {
              "code": "4431",
              "parentCode": "792",
              "name": "覃塘区",
              "en_name": "Qintang"
            }
          ]
        },
        {
          "code": "787",
          "parentCode": "549",
          "name": "桂林",
          "en_name": "GUILIN",
          "sublist": [
            {
              "code": "3164",
              "parentCode": "787",
              "name": "叠彩区",
              "en_name": "Diecaiqu"
            },
            {
              "code": "4409",
              "parentCode": "787",
              "name": "恭城瑶族自治县",
              "en_name": "Gongchengyaozuzizhi"
            },
            {
              "code": "4404",
              "parentCode": "787",
              "name": "灌阳县",
              "en_name": "Guanyang"
            },
            {
              "code": "4400",
              "parentCode": "787",
              "name": "灵川县",
              "en_name": "Lingchuan"
            },
            {
              "code": "3168",
              "parentCode": "787",
              "name": "临桂区",
              "en_name": "Linguiqu"
            },
            {
              "code": "4408",
              "parentCode": "787",
              "name": "荔浦市",
              "en_name": "Lipu"
            },
            {
              "code": "4405",
              "parentCode": "787",
              "name": "龙胜各族自治县",
              "en_name": "Longshenggezuzizhi"
            },
            {
              "code": "4407",
              "parentCode": "787",
              "name": "平乐县",
              "en_name": "Pingle"
            },
            {
              "code": "3166",
              "parentCode": "787",
              "name": "七星区",
              "en_name": "Qixingqu"
            },
            {
              "code": "4401",
              "parentCode": "787",
              "name": "全州县",
              "en_name": "Quanzhou"
            },
            {
              "code": "3165",
              "parentCode": "787",
              "name": "象山区",
              "en_name": "Xiangshanqu"
            },
            {
              "code": "4402",
              "parentCode": "787",
              "name": "兴安县",
              "en_name": "Xingan"
            },
            {
              "code": "3163",
              "parentCode": "787",
              "name": "秀峰区",
              "en_name": "Xiufengqu"
            },
            {
              "code": "4399",
              "parentCode": "787",
              "name": "阳朔县",
              "en_name": "Yangshuo"
            },
            {
              "code": "3167",
              "parentCode": "787",
              "name": "雁山区",
              "en_name": "Yanshanqu"
            },
            {
              "code": "4403",
              "parentCode": "787",
              "name": "永福县",
              "en_name": "Yongfu"
            },
            {
              "code": "4406",
              "parentCode": "787",
              "name": "资源县",
              "en_name": "Ziyuan"
            }
          ]
        },
        {
          "code": "796",
          "parentCode": "549",
          "name": "河池",
          "en_name": "HECHI",
          "sublist": [
            {
              "code": "4465",
              "parentCode": "796",
              "name": "巴马瑶族自治县",
              "en_name": "Bamayaozuzizhi"
            },
            {
              "code": "4467",
              "parentCode": "796",
              "name": "大化瑶族自治县",
              "en_name": "Dahuayaozuzizhi"
            },
            {
              "code": "4462",
              "parentCode": "796",
              "name": "东兰县",
              "en_name": "Donglan"
            },
            {
              "code": "4466",
              "parentCode": "796",
              "name": "都安瑶族自治县",
              "en_name": "Duanyaozuzizhi"
            },
            {
              "code": "4461",
              "parentCode": "796",
              "name": "凤山县",
              "en_name": "Fengshan"
            },
            {
              "code": "4464",
              "parentCode": "796",
              "name": "环江毛南族自治县",
              "en_name": "Huanjiangmaonanzuzizhi"
            },
            {
              "code": "4457",
              "parentCode": "796",
              "name": "金城江区",
              "en_name": "Jinchengjiang"
            },
            {
              "code": "4463",
              "parentCode": "796",
              "name": "罗城仫佬族自治县",
              "en_name": "Luochengmulaozuzizhi"
            },
            {
              "code": "4459",
              "parentCode": "796",
              "name": "南丹县",
              "en_name": "Nandan"
            },
            {
              "code": "4460",
              "parentCode": "796",
              "name": "天峨县",
              "en_name": "Tiane"
            },
            {
              "code": "4458",
              "parentCode": "796",
              "name": "宜州区",
              "en_name": "Yizhou"
            }
          ]
        },
        {
          "code": "795",
          "parentCode": "549",
          "name": "贺州",
          "en_name": "HEZHOU",
          "sublist": [
            {
              "code": "4453",
              "parentCode": "795",
              "name": "八步区",
              "en_name": "Babu"
            },
            {
              "code": "4456",
              "parentCode": "795",
              "name": "富川瑶族自治县",
              "en_name": "Fuchuanyaozuzizhi"
            },
            {
              "code": "4454",
              "parentCode": "795",
              "name": "昭平县",
              "en_name": "Zhaoping"
            },
            {
              "code": "4455",
              "parentCode": "795",
              "name": "钟山县",
              "en_name": "Zhongshan"
            },
            {
              "code": "104022",
              "parentCode": "795",
              "name": "平桂区",
              "en_name": "pingguiqu"
            }
          ]
        },
        {
          "code": "904",
          "parentCode": "549",
          "name": "来宾",
          "en_name": "LAIBIN",
          "sublist": [
            {
              "code": "5297",
              "parentCode": "904",
              "name": "合山市",
              "en_name": "Heshan"
            },
            {
              "code": "5301",
              "parentCode": "904",
              "name": "金秀瑶族自治县",
              "en_name": "Jinxiuyaozuzizhi"
            },
            {
              "code": "5300",
              "parentCode": "904",
              "name": "武宣县",
              "en_name": "Wuxuan"
            },
            {
              "code": "5299",
              "parentCode": "904",
              "name": "象州县",
              "en_name": "Xiangzhou"
            },
            {
              "code": "5298",
              "parentCode": "904",
              "name": "忻城县",
              "en_name": "Xincheng"
            },
            {
              "code": "5296",
              "parentCode": "904",
              "name": "兴宾区",
              "en_name": "Xingbin"
            }
          ]
        },
        {
          "code": "786",
          "parentCode": "549",
          "name": "柳州",
          "en_name": "LIUZHOU",
          "sublist": [
            {
              "code": "3159",
              "parentCode": "786",
              "name": "城中区",
              "en_name": "Chengzhongqu"
            },
            {
              "code": "3162",
              "parentCode": "786",
              "name": "柳北区",
              "en_name": "Liubeiqu"
            },
            {
              "code": "4388",
              "parentCode": "786",
              "name": "柳城县",
              "en_name": "Liucheng"
            },
            {
              "code": "4387",
              "parentCode": "786",
              "name": "柳江区",
              "en_name": "Liujiang"
            },
            {
              "code": "3161",
              "parentCode": "786",
              "name": "柳南区",
              "en_name": "Liunanqu"
            },
            {
              "code": "4389",
              "parentCode": "786",
              "name": "鹿寨县",
              "en_name": "Luzhai"
            },
            {
              "code": "4390",
              "parentCode": "786",
              "name": "融安县",
              "en_name": "Rongan"
            },
            {
              "code": "4391",
              "parentCode": "786",
              "name": "融水苗族自治县",
              "en_name": "Rongshuimiaozuzizhi"
            },
            {
              "code": "4392",
              "parentCode": "786",
              "name": "三江侗族自治县",
              "en_name": "Sanjiangdongzuzizhi"
            },
            {
              "code": "3160",
              "parentCode": "786",
              "name": "鱼峰区",
              "en_name": "Yufengqu"
            }
          ]
        },
        {
          "code": "785",
          "parentCode": "549",
          "name": "南宁",
          "en_name": "NANNING",
          "sublist": [
            {
              "code": "3157",
              "parentCode": "785",
              "name": "宾阳县",
              "en_name": "Binyangxian"
            },
            {
              "code": "3158",
              "parentCode": "785",
              "name": "横州市",
              "en_name": "hengzhoushi"
            },
            {
              "code": "3149",
              "parentCode": "785",
              "name": "江南区",
              "en_name": "Jiangnanqu"
            },
            {
              "code": "3151",
              "parentCode": "785",
              "name": "良庆区",
              "en_name": "Liangqingqu"
            },
            {
              "code": "3154",
              "parentCode": "785",
              "name": "隆安县",
              "en_name": "Longanxian"
            },
            {
              "code": "3155",
              "parentCode": "785",
              "name": "马山县",
              "en_name": "Mashanxian"
            },
            {
              "code": "3148",
              "parentCode": "785",
              "name": "青秀区",
              "en_name": "Qingxiuqu"
            },
            {
              "code": "3156",
              "parentCode": "785",
              "name": "上林县",
              "en_name": "Shanglinxian"
            },
            {
              "code": "3153",
              "parentCode": "785",
              "name": "武鸣区",
              "en_name": "Wumingqu"
            },
            {
              "code": "3147",
              "parentCode": "785",
              "name": "兴宁区",
              "en_name": "Xingningqu"
            },
            {
              "code": "3150",
              "parentCode": "785",
              "name": "西乡塘区",
              "en_name": "Xixiangtangqu"
            },
            {
              "code": "3152",
              "parentCode": "785",
              "name": "邕宁区",
              "en_name": "Yongningqu"
            }
          ]
        },
        {
          "code": "791",
          "parentCode": "549",
          "name": "钦州",
          "en_name": "QINZHOU",
          "sublist": [
            {
              "code": "4427",
              "parentCode": "791",
              "name": "灵山县",
              "en_name": "Lingshan"
            },
            {
              "code": "4428",
              "parentCode": "791",
              "name": "浦北县",
              "en_name": "Pubei"
            },
            {
              "code": "4426",
              "parentCode": "791",
              "name": "钦北区",
              "en_name": "Qinbei"
            },
            {
              "code": "4425",
              "parentCode": "791",
              "name": "钦南区",
              "en_name": "Qinnan"
            }
          ]
        },
        {
          "code": "788",
          "parentCode": "549",
          "name": "梧州",
          "en_name": "WUZHOU",
          "sublist": [
            {
              "code": "4414",
              "parentCode": "788",
              "name": "苍梧县",
              "en_name": "Cangwu"
            },
            {
              "code": "4413",
              "parentCode": "788",
              "name": "岑溪市",
              "en_name": "Cenxi"
            },
            {
              "code": "4412",
              "parentCode": "788",
              "name": "龙圩区",
              "en_name": "Longxu"
            },
            {
              "code": "4416",
              "parentCode": "788",
              "name": "蒙山县",
              "en_name": "Mengshan"
            },
            {
              "code": "4415",
              "parentCode": "788",
              "name": "藤县",
              "en_name": "Teng"
            },
            {
              "code": "4410",
              "parentCode": "788",
              "name": "万秀区",
              "en_name": "Wanxiu"
            },
            {
              "code": "4411",
              "parentCode": "788",
              "name": "长洲区",
              "en_name": "Changzhou"
            }
          ]
        },
        {
          "code": "793",
          "parentCode": "549",
          "name": "玉林",
          "en_name": "YULIN",
          "sublist": [
            {
              "code": "3175",
              "parentCode": "793",
              "name": "北流市",
              "en_name": "Beiliushi"
            },
            {
              "code": "3178",
              "parentCode": "793",
              "name": "博白县",
              "en_name": "Bobaixian"
            },
            {
              "code": "3174",
              "parentCode": "793",
              "name": "福绵区",
              "en_name": "Fumianqu"
            },
            {
              "code": "3177",
              "parentCode": "793",
              "name": "陆川县",
              "en_name": "Luchuanxian"
            },
            {
              "code": "3176",
              "parentCode": "793",
              "name": "容县",
              "en_name": "Rongxian"
            },
            {
              "code": "3179",
              "parentCode": "793",
              "name": "兴业县",
              "en_name": "Xingyexian"
            },
            {
              "code": "3173",
              "parentCode": "793",
              "name": "玉州区",
              "en_name": "Yuzhouqu"
            }
          ]
        }
      ]
    },
    {
      "code": "553",
      "parentCode": "489",
      "name": "贵州",
      "en_name": "GUIZHOU",
      "sublist": [
        {
          "code": "825",
          "parentCode": "553",
          "name": "安顺",
          "en_name": "ANSHUN",
          "sublist": [
            {
              "code": "4687",
              "parentCode": "825",
              "name": "关岭布依族苗族自治县",
              "en_name": "Guanlingbuyizumiaozuzizhi"
            },
            {
              "code": "4684",
              "parentCode": "825",
              "name": "平坝区",
              "en_name": "Pingba"
            },
            {
              "code": "4685",
              "parentCode": "825",
              "name": "普定县",
              "en_name": "Puding"
            },
            {
              "code": "4683",
              "parentCode": "825",
              "name": "西秀区",
              "en_name": "Xixiu"
            },
            {
              "code": "4686",
              "parentCode": "825",
              "name": "镇宁布依族苗族自治县",
              "en_name": "Zhenningbuyizumiaozuzizhi"
            },
            {
              "code": "4688",
              "parentCode": "825",
              "name": "紫云苗族布依族自治县",
              "en_name": "Ziyunmiaozubuyizuzizhi"
            }
          ]
        },
        {
          "code": "828",
          "parentCode": "553",
          "name": "毕节",
          "en_name": "BIJIE",
          "sublist": [
            {
              "code": "4708",
              "parentCode": "828",
              "name": "大方县",
              "en_name": "Dafang"
            },
            {
              "code": "4714",
              "parentCode": "828",
              "name": "赫章县",
              "en_name": "Hezhang"
            },
            {
              "code": "4710",
              "parentCode": "828",
              "name": "金沙县",
              "en_name": "Jinsha"
            },
            {
              "code": "4712",
              "parentCode": "828",
              "name": "纳雍县",
              "en_name": "Nayong"
            },
            {
              "code": "4709",
              "parentCode": "828",
              "name": "黔西市",
              "en_name": "qianxishi"
            },
            {
              "code": "4707",
              "parentCode": "828",
              "name": "七星关区",
              "en_name": "Qixingguan"
            },
            {
              "code": "4713",
              "parentCode": "828",
              "name": "威宁彝族回族苗族自治县",
              "en_name": "Weiningyizuhuizumiaozuzizhi"
            },
            {
              "code": "4711",
              "parentCode": "828",
              "name": "织金县",
              "en_name": "Zhijin"
            }
          ]
        },
        {
          "code": "822",
          "parentCode": "553",
          "name": "贵阳",
          "en_name": "GUIYANG",
          "sublist": [
            {
              "code": "2525",
              "parentCode": "822",
              "name": "白云区",
              "en_name": "BAIYUNQU"
            },
            {
              "code": "2524",
              "parentCode": "822",
              "name": "观山湖区",
              "en_name": "GUANSHANHUQU(JINYANGXINQU)"
            },
            {
              "code": "2523",
              "parentCode": "822",
              "name": "花溪区",
              "en_name": "HUAXIQU"
            },
            {
              "code": "2530",
              "parentCode": "822",
              "name": "开阳县",
              "en_name": "KAIYANGXIAN"
            },
            {
              "code": "2522",
              "parentCode": "822",
              "name": "南明区",
              "en_name": "NANMINGQU"
            },
            {
              "code": "2527",
              "parentCode": "822",
              "name": "清镇市",
              "en_name": "QINGZHENSHI"
            },
            {
              "code": "2526",
              "parentCode": "822",
              "name": "乌当区",
              "en_name": "WUDANGQU"
            },
            {
              "code": "2529",
              "parentCode": "822",
              "name": "息烽县",
              "en_name": "XIFENGXIAN"
            },
            {
              "code": "2528",
              "parentCode": "822",
              "name": "修文县",
              "en_name": "XIUWENXIAN"
            },
            {
              "code": "2521",
              "parentCode": "822",
              "name": "云岩区",
              "en_name": "YUNYANQU"
            }
          ]
        },
        {
          "code": "823",
          "parentCode": "553",
          "name": "六盘水",
          "en_name": "LIUPANSHUI",
          "sublist": [
            {
              "code": "4666",
              "parentCode": "823",
              "name": "六枝特区",
              "en_name": "Huazhite"
            },
            {
              "code": "4668",
              "parentCode": "823",
              "name": "盘州市",
              "en_name": "Pan"
            },
            {
              "code": "4667",
              "parentCode": "823",
              "name": "水城区",
              "en_name": "shuichengqu"
            },
            {
              "code": "4665",
              "parentCode": "823",
              "name": "钟山区",
              "en_name": "Zhongshan"
            }
          ]
        },
        {
          "code": "829",
          "parentCode": "553",
          "name": "黔东南",
          "en_name": "QIANDONGNAN",
          "sublist": [
            {
              "code": "4720",
              "parentCode": "829",
              "name": "岑巩县",
              "en_name": "Cengong"
            },
            {
              "code": "4727",
              "parentCode": "829",
              "name": "从江县",
              "en_name": "Congjiang"
            },
            {
              "code": "4730",
              "parentCode": "829",
              "name": "丹寨县",
              "en_name": "Danzhai"
            },
            {
              "code": "4716",
              "parentCode": "829",
              "name": "黄平县",
              "en_name": "Huangping"
            },
            {
              "code": "4723",
              "parentCode": "829",
              "name": "剑河县",
              "en_name": "Jianhe"
            },
            {
              "code": "4722",
              "parentCode": "829",
              "name": "锦屏县",
              "en_name": "Jinping"
            },
            {
              "code": "4715",
              "parentCode": "829",
              "name": "凯里市",
              "en_name": "Kaili"
            },
            {
              "code": "4728",
              "parentCode": "829",
              "name": "雷山县",
              "en_name": "Leishan"
            },
            {
              "code": "4725",
              "parentCode": "829",
              "name": "黎平县",
              "en_name": "Liping"
            },
            {
              "code": "4729",
              "parentCode": "829",
              "name": "麻江县",
              "en_name": "Majiang"
            },
            {
              "code": "4726",
              "parentCode": "829",
              "name": "榕江县",
              "en_name": "Rongjiang"
            },
            {
              "code": "4718",
              "parentCode": "829",
              "name": "三穗县",
              "en_name": "Sansui"
            },
            {
              "code": "4717",
              "parentCode": "829",
              "name": "施秉县",
              "en_name": "Shibing"
            },
            {
              "code": "4724",
              "parentCode": "829",
              "name": "台江县",
              "en_name": "Taijiang"
            },
            {
              "code": "4721",
              "parentCode": "829",
              "name": "天柱县",
              "en_name": "Tianzhu"
            },
            {
              "code": "4719",
              "parentCode": "829",
              "name": "镇远县",
              "en_name": "Zhenyuan"
            }
          ]
        },
        {
          "code": "830",
          "parentCode": "553",
          "name": "黔南",
          "en_name": "QIANNAN",
          "sublist": [
            {
              "code": "4731",
              "parentCode": "830",
              "name": "都匀市",
              "en_name": "Duyun"
            },
            {
              "code": "4736",
              "parentCode": "830",
              "name": "独山县",
              "en_name": "Dushan"
            },
            {
              "code": "4732",
              "parentCode": "830",
              "name": "福泉市",
              "en_name": "Fuan"
            },
            {
              "code": "4734",
              "parentCode": "830",
              "name": "贵定县",
              "en_name": "Guiding"
            },
            {
              "code": "4741",
              "parentCode": "830",
              "name": "惠水县",
              "en_name": "Huishui"
            },
            {
              "code": "4733",
              "parentCode": "830",
              "name": "荔波县",
              "en_name": "Libo"
            },
            {
              "code": "4740",
              "parentCode": "830",
              "name": "龙里县",
              "en_name": "Longli"
            },
            {
              "code": "4738",
              "parentCode": "830",
              "name": "罗甸县",
              "en_name": "Luodian"
            },
            {
              "code": "4737",
              "parentCode": "830",
              "name": "平塘县",
              "en_name": "Pingtang"
            },
            {
              "code": "4742",
              "parentCode": "830",
              "name": "三都水族自治县",
              "en_name": "Sandushuizuzizhi"
            },
            {
              "code": "4735",
              "parentCode": "830",
              "name": "瓮安县",
              "en_name": "Wengan"
            },
            {
              "code": "4739",
              "parentCode": "830",
              "name": "长顺县",
              "en_name": "Changshun"
            }
          ]
        },
        {
          "code": "827",
          "parentCode": "553",
          "name": "黔西南",
          "en_name": "QIANXINAN",
          "sublist": [
            {
              "code": "4706",
              "parentCode": "827",
              "name": "安龙县",
              "en_name": "Anlong"
            },
            {
              "code": "4705",
              "parentCode": "827",
              "name": "册亨县",
              "en_name": "Ceheng"
            },
            {
              "code": "4701",
              "parentCode": "827",
              "name": "普安县",
              "en_name": "Puan"
            },
            {
              "code": "4702",
              "parentCode": "827",
              "name": "晴隆县",
              "en_name": "Qinglong"
            },
            {
              "code": "4704",
              "parentCode": "827",
              "name": "望谟县",
              "en_name": "Wangmo"
            },
            {
              "code": "4700",
              "parentCode": "827",
              "name": "兴仁市",
              "en_name": "Xingren"
            },
            {
              "code": "4699",
              "parentCode": "827",
              "name": "兴义市",
              "en_name": "Xingyi"
            },
            {
              "code": "4703",
              "parentCode": "827",
              "name": "贞丰县",
              "en_name": "Zhenfeng"
            }
          ]
        },
        {
          "code": "826",
          "parentCode": "553",
          "name": "铜仁",
          "en_name": "TONGREN",
          "sublist": [
            {
              "code": "4689",
              "parentCode": "826",
              "name": "碧江区",
              "en_name": "Bijiang"
            },
            {
              "code": "4696",
              "parentCode": "826",
              "name": "德江县",
              "en_name": "Dejiang"
            },
            {
              "code": "4691",
              "parentCode": "826",
              "name": "江口县",
              "en_name": "Jiangkou"
            },
            {
              "code": "4694",
              "parentCode": "826",
              "name": "石阡县",
              "en_name": "Shiqian"
            },
            {
              "code": "4693",
              "parentCode": "826",
              "name": "思南县",
              "en_name": "Sinan"
            },
            {
              "code": "4698",
              "parentCode": "826",
              "name": "松桃苗族自治县",
              "en_name": "Songtaomiaozuzizhi"
            },
            {
              "code": "4690",
              "parentCode": "826",
              "name": "万山区",
              "en_name": "Wanshan"
            },
            {
              "code": "4697",
              "parentCode": "826",
              "name": "沿河土家族自治县",
              "en_name": "Yanhetujiazuzizhi"
            },
            {
              "code": "4695",
              "parentCode": "826",
              "name": "印江土家族苗族自治县",
              "en_name": "Yinjiangtujiazumiaozuzizhi"
            },
            {
              "code": "4692",
              "parentCode": "826",
              "name": "玉屏侗族自治县",
              "en_name": "Yupingdongzuzizhi"
            }
          ]
        },
        {
          "code": "824",
          "parentCode": "553",
          "name": "遵义",
          "en_name": "ZUNYI",
          "sublist": [
            {
              "code": "4671",
              "parentCode": "824",
              "name": "赤水市",
              "en_name": "Chishui"
            },
            {
              "code": "4677",
              "parentCode": "824",
              "name": "道真仡佬族苗族自治县",
              "en_name": "Daozhenmulaozumiaozuzizhi"
            },
            {
              "code": "4679",
              "parentCode": "824",
              "name": "凤冈县",
              "en_name": "Fenggang"
            },
            {
              "code": "4669",
              "parentCode": "824",
              "name": "红花岗区",
              "en_name": "Honghuagang"
            },
            {
              "code": "4670",
              "parentCode": "824",
              "name": "汇川区",
              "en_name": "Huichuan"
            },
            {
              "code": "4680",
              "parentCode": "824",
              "name": "湄潭县",
              "en_name": "Meitan"
            },
            {
              "code": "4672",
              "parentCode": "824",
              "name": "仁怀市",
              "en_name": "Renhuai"
            },
            {
              "code": "4675",
              "parentCode": "824",
              "name": "绥阳县",
              "en_name": "Suiyang"
            },
            {
              "code": "4674",
              "parentCode": "824",
              "name": "桐梓县",
              "en_name": "Tongzi"
            },
            {
              "code": "4678",
              "parentCode": "824",
              "name": "务川仡佬族苗族自治县",
              "en_name": "Wuchuanmulaozumiaozuzizhi"
            },
            {
              "code": "4682",
              "parentCode": "824",
              "name": "习水县",
              "en_name": "Xishui"
            },
            {
              "code": "4681",
              "parentCode": "824",
              "name": "余庆县",
              "en_name": "Yuqing"
            },
            {
              "code": "4676",
              "parentCode": "824",
              "name": "正安县",
              "en_name": "Zhengan"
            },
            {
              "code": "4673",
              "parentCode": "824",
              "name": "播州区",
              "en_name": "Zunyi"
            }
          ]
        }
      ]
    },
    {
      "code": "550",
      "parentCode": "489",
      "name": "海南",
      "en_name": "HAINAN",
      "sublist": [
        {
          "code": "10194",
          "parentCode": "550",
          "name": "白沙",
          "en_name": "BAISHALIZUZIZHI",
          "sublist": []
        },
        {
          "code": "10193",
          "parentCode": "550",
          "name": "保亭",
          "en_name": "BAOTINGLIZUMIAOZUZIZHI",
          "sublist": []
        },
        {
          "code": "10195",
          "parentCode": "550",
          "name": "昌江",
          "en_name": "CHANGJIANGLIZUZIZHI",
          "sublist": []
        },
        {
          "code": "10190",
          "parentCode": "550",
          "name": "澄迈",
          "en_name": "CHENGMAI",
          "sublist": []
        },
        {
          "code": "10183",
          "parentCode": "550",
          "name": "儋州",
          "en_name": "DANZHOU",
          "sublist": []
        },
        {
          "code": "10188",
          "parentCode": "550",
          "name": "定安",
          "en_name": "ANDING",
          "sublist": []
        },
        {
          "code": "10187",
          "parentCode": "550",
          "name": "东方",
          "en_name": "DONGFANG",
          "sublist": []
        },
        {
          "code": "799",
          "parentCode": "550",
          "name": "海口",
          "en_name": "HAIKOU",
          "sublist": [
            {
              "code": "3144",
              "parentCode": "799",
              "name": "龙华区",
              "en_name": "Longhuaqu"
            },
            {
              "code": "3146",
              "parentCode": "799",
              "name": "美兰区",
              "en_name": "Meilanqu"
            },
            {
              "code": "3145",
              "parentCode": "799",
              "name": "琼山区",
              "en_name": "Qiongshanqu"
            },
            {
              "code": "3143",
              "parentCode": "799",
              "name": "秀英区",
              "en_name": "Xiuyingqu"
            }
          ]
        },
        {
          "code": "10196",
          "parentCode": "550",
          "name": "乐东",
          "en_name": "LEDONGLIZUZIZHI",
          "sublist": []
        },
        {
          "code": "10191",
          "parentCode": "550",
          "name": "临高",
          "en_name": "LINGAO",
          "sublist": []
        },
        {
          "code": "10197",
          "parentCode": "550",
          "name": "陵水",
          "en_name": "LINGSHUILIZUZIZHI",
          "sublist": []
        },
        {
          "code": "10153",
          "parentCode": "550",
          "name": "琼海",
          "en_name": "QIONGHAI",
          "sublist": []
        },
        {
          "code": "10192",
          "parentCode": "550",
          "name": "琼中",
          "en_name": "QIONGZHONGLIZUMIAOZUZIZHI",
          "sublist": []
        },
        {
          "code": "10303",
          "parentCode": "550",
          "name": "三沙",
          "en_name": "SANSHA",
          "sublist": [
            {
              "code": "104043",
              "parentCode": "10303",
              "name": "西沙区",
              "en_name": "xishaqu"
            },
            {
              "code": "104044",
              "parentCode": "10303",
              "name": "南沙区",
              "en_name": "nanshaqu"
            }
          ]
        },
        {
          "code": "800",
          "parentCode": "550",
          "name": "三亚",
          "en_name": "SANYA",
          "sublist": [
            {
              "code": "104023",
              "parentCode": "800",
              "name": "海棠区",
              "en_name": "haitangqu"
            },
            {
              "code": "104024",
              "parentCode": "800",
              "name": "吉阳区",
              "en_name": "jiyangqu"
            },
            {
              "code": "104025",
              "parentCode": "800",
              "name": "天涯区",
              "en_name": "tianyaqu"
            },
            {
              "code": "104026",
              "parentCode": "800",
              "name": "崖州区",
              "en_name": "yazhouqu"
            }
          ]
        },
        {
          "code": "10189",
          "parentCode": "550",
          "name": "屯昌",
          "en_name": "TUNCHANG",
          "sublist": []
        },
        {
          "code": "10186",
          "parentCode": "550",
          "name": "万宁",
          "en_name": "WANNING",
          "sublist": []
        },
        {
          "code": "10185",
          "parentCode": "550",
          "name": "文昌",
          "en_name": "WENCHANG",
          "sublist": []
        },
        {
          "code": "10184",
          "parentCode": "550",
          "name": "五指山",
          "en_name": "WUZHISHAN",
          "sublist": []
        },
        {
          "code": "907",
          "parentCode": "550",
          "name": "洋浦市/洋浦经济开发区",
          "en_name": "YANGPU",
          "sublist": []
        }
      ]
    },
    {
      "code": "532",
      "parentCode": "489",
      "name": "河北",
      "en_name": "HEBEI",
      "sublist": [
        {
          "code": "570",
          "parentCode": "532",
          "name": "保定",
          "en_name": "BAODING",
          "sublist": [
            {
              "code": "3319",
              "parentCode": "570",
              "name": "安国市",
              "en_name": "Anguoshi"
            },
            {
              "code": "2761",
              "parentCode": "570",
              "name": "安新县",
              "en_name": "Anxin"
            },
            {
              "code": "2766",
              "parentCode": "570",
              "name": "博野县",
              "en_name": "Boye"
            },
            {
              "code": "2755",
              "parentCode": "570",
              "name": "定兴县",
              "en_name": "Dingxing"
            },
            {
              "code": "3323",
              "parentCode": "570",
              "name": "定州市",
              "en_name": "Dingzhoushi"
            },
            {
              "code": "2753",
              "parentCode": "570",
              "name": "阜平县",
              "en_name": "Fuping"
            },
            {
              "code": "3320",
              "parentCode": "570",
              "name": "高碑店市",
              "en_name": "Gaobeidianshi"
            },
            {
              "code": "2757",
              "parentCode": "570",
              "name": "高阳县",
              "en_name": "Gaoyang"
            },
            {
              "code": "2752",
              "parentCode": "570",
              "name": "涞水县",
              "en_name": "Laishui"
            },
            {
              "code": "2759",
              "parentCode": "570",
              "name": "涞源县",
              "en_name": "Laiyuan"
            },
            {
              "code": "2764",
              "parentCode": "570",
              "name": "蠡县",
              "en_name": "Li"
            },
            {
              "code": "3321",
              "parentCode": "570",
              "name": "满城区",
              "en_name": "Manchengqu"
            },
            {
              "code": "2744",
              "parentCode": "570",
              "name": "莲池区",
              "en_name": "Nanshi"
            },
            {
              "code": "3322",
              "parentCode": "570",
              "name": "清苑区",
              "en_name": "Qingyuanqu"
            },
            {
              "code": "2763",
              "parentCode": "570",
              "name": "曲阳县",
              "en_name": "Yang"
            },
            {
              "code": "2758",
              "parentCode": "570",
              "name": "容城县",
              "en_name": "Rongcheng"
            },
            {
              "code": "2765",
              "parentCode": "570",
              "name": "顺平县",
              "en_name": "Shunping"
            },
            {
              "code": "2756",
              "parentCode": "570",
              "name": "唐县",
              "en_name": "Tang"
            },
            {
              "code": "2760",
              "parentCode": "570",
              "name": "望都县",
              "en_name": "Wangdu"
            },
            {
              "code": "2743",
              "parentCode": "570",
              "name": "竞秀区",
              "en_name": "Xinshi"
            },
            {
              "code": "2767",
              "parentCode": "570",
              "name": "雄县",
              "en_name": "Xiong"
            },
            {
              "code": "2754",
              "parentCode": "570",
              "name": "徐水区",
              "en_name": "Xushui"
            },
            {
              "code": "2762",
              "parentCode": "570",
              "name": "易县",
              "en_name": "Yi"
            },
            {
              "code": "3318",
              "parentCode": "570",
              "name": "涿州市",
              "en_name": "Zhuozhoushi"
            }
          ]
        },
        {
          "code": "573",
          "parentCode": "532",
          "name": "沧州",
          "en_name": "CANGZHOU",
          "sublist": [
            {
              "code": "2798",
              "parentCode": "573",
              "name": "泊头市",
              "en_name": "Botou"
            },
            {
              "code": "2802",
              "parentCode": "573",
              "name": "沧县",
              "en_name": "Cang"
            },
            {
              "code": "2805",
              "parentCode": "573",
              "name": "东光县",
              "en_name": "Dongguang"
            },
            {
              "code": "2806",
              "parentCode": "573",
              "name": "海兴县",
              "en_name": "Haixing"
            },
            {
              "code": "2801",
              "parentCode": "573",
              "name": "河间市",
              "en_name": "Hejian"
            },
            {
              "code": "2800",
              "parentCode": "573",
              "name": "黄骅市",
              "en_name": "Huanghua"
            },
            {
              "code": "2811",
              "parentCode": "573",
              "name": "孟村回族自治县",
              "en_name": "Mengcunhuzuzizhi"
            },
            {
              "code": "2809",
              "parentCode": "573",
              "name": "南皮县",
              "en_name": "Nanpi"
            },
            {
              "code": "2803",
              "parentCode": "573",
              "name": "青县",
              "en_name": "Qing"
            },
            {
              "code": "2799",
              "parentCode": "573",
              "name": "任丘市",
              "en_name": "Renqiu"
            },
            {
              "code": "2808",
              "parentCode": "573",
              "name": "肃宁县",
              "en_name": "Suning"
            },
            {
              "code": "2810",
              "parentCode": "573",
              "name": "吴桥县",
              "en_name": "Wuqiao"
            },
            {
              "code": "2804",
              "parentCode": "573",
              "name": "献县",
              "en_name": "Xian"
            },
            {
              "code": "2797",
              "parentCode": "573",
              "name": "新华区",
              "en_name": "Xinhua"
            },
            {
              "code": "2807",
              "parentCode": "573",
              "name": "盐山县",
              "en_name": "Yanshan"
            },
            {
              "code": "2796",
              "parentCode": "573",
              "name": "运河区",
              "en_name": "Yunhe"
            }
          ]
        },
        {
          "code": "572",
          "parentCode": "532",
          "name": "承德",
          "en_name": "CHENGDE",
          "sublist": [
            {
              "code": "2788",
              "parentCode": "572",
              "name": "承德县",
              "en_name": "Chengde"
            },
            {
              "code": "2793",
              "parentCode": "572",
              "name": "丰宁满族自治县",
              "en_name": "Fengningmanzuzizhi"
            },
            {
              "code": "2795",
              "parentCode": "572",
              "name": "宽城满族自治县",
              "en_name": "Kuanchengmanzuzizhi"
            },
            {
              "code": "2790",
              "parentCode": "572",
              "name": "隆化县",
              "en_name": "Longhua"
            },
            {
              "code": "2792",
              "parentCode": "572",
              "name": "滦平县",
              "en_name": "Luanping"
            },
            {
              "code": "2791",
              "parentCode": "572",
              "name": "平泉市",
              "en_name": "Pingquan"
            },
            {
              "code": "2786",
              "parentCode": "572",
              "name": "双滦区",
              "en_name": "Shuangluan"
            },
            {
              "code": "2785",
              "parentCode": "572",
              "name": "双桥区",
              "en_name": "Shuangqiao"
            },
            {
              "code": "2794",
              "parentCode": "572",
              "name": "围场满族蒙古族自治县",
              "en_name": "Weichangmanzumengguzuzizhi"
            },
            {
              "code": "2789",
              "parentCode": "572",
              "name": "兴隆县",
              "en_name": "Xinglong"
            },
            {
              "code": "2787",
              "parentCode": "572",
              "name": "鹰手营子矿区",
              "en_name": "Yingshouyingzikuang"
            }
          ]
        },
        {
          "code": "568",
          "parentCode": "532",
          "name": "邯郸",
          "en_name": "HANDAN",
          "sublist": [
            {
              "code": "2715",
              "parentCode": "568",
              "name": "成安县",
              "en_name": "Chengan"
            },
            {
              "code": "2723",
              "parentCode": "568",
              "name": "磁县",
              "en_name": "Ci"
            },
            {
              "code": "2705",
              "parentCode": "568",
              "name": "丛台区",
              "en_name": "Congtai"
            },
            {
              "code": "2716",
              "parentCode": "568",
              "name": "大名县",
              "en_name": "Daming"
            },
            {
              "code": "2721",
              "parentCode": "568",
              "name": "肥乡区",
              "en_name": "Feixiang"
            },
            {
              "code": "2708",
              "parentCode": "568",
              "name": "峰峰矿区",
              "en_name": "Fengfengkuang"
            },
            {
              "code": "2706",
              "parentCode": "568",
              "name": "复兴区",
              "en_name": "Fuxing"
            },
            {
              "code": "2720",
              "parentCode": "568",
              "name": "广平县",
              "en_name": "Guangping"
            },
            {
              "code": "2713",
              "parentCode": "568",
              "name": "馆陶县",
              "en_name": "Guantao"
            },
            {
              "code": "2707",
              "parentCode": "568",
              "name": "邯山区",
              "en_name": "Hanshan"
            },
            {
              "code": "2718",
              "parentCode": "568",
              "name": "鸡泽县",
              "en_name": "Jize"
            },
            {
              "code": "2722",
              "parentCode": "568",
              "name": "临漳县",
              "en_name": "Linzhang"
            },
            {
              "code": "2719",
              "parentCode": "568",
              "name": "邱县",
              "en_name": "Qiu"
            },
            {
              "code": "2712",
              "parentCode": "568",
              "name": "曲周县",
              "en_name": "Quzhou"
            },
            {
              "code": "2717",
              "parentCode": "568",
              "name": "涉县",
              "en_name": "She"
            },
            {
              "code": "2714",
              "parentCode": "568",
              "name": "魏县",
              "en_name": "Wei"
            },
            {
              "code": "2709",
              "parentCode": "568",
              "name": "武安市",
              "en_name": "Wuan"
            },
            {
              "code": "2711",
              "parentCode": "568",
              "name": "永年区",
              "en_name": "Yongnian"
            }
          ]
        },
        {
          "code": "575",
          "parentCode": "532",
          "name": "衡水",
          "en_name": "HENGSHUI",
          "sublist": [
            {
              "code": "2829",
              "parentCode": "575",
              "name": "安平县",
              "en_name": "Anping"
            },
            {
              "code": "2828",
              "parentCode": "575",
              "name": "阜城县",
              "en_name": "Fucheng"
            },
            {
              "code": "2827",
              "parentCode": "575",
              "name": "故城县",
              "en_name": "Gucheng"
            },
            {
              "code": "2831",
              "parentCode": "575",
              "name": "景县",
              "en_name": "Jing"
            },
            {
              "code": "2823",
              "parentCode": "575",
              "name": "冀州区",
              "en_name": "Jizhou"
            },
            {
              "code": "2825",
              "parentCode": "575",
              "name": "饶阳县",
              "en_name": "Raoyang"
            },
            {
              "code": "2824",
              "parentCode": "575",
              "name": "深州市",
              "en_name": "Shenzhou"
            },
            {
              "code": "2822",
              "parentCode": "575",
              "name": "桃城区",
              "en_name": "Taocheng"
            },
            {
              "code": "2832",
              "parentCode": "575",
              "name": "武强县",
              "en_name": "Wuqiang"
            },
            {
              "code": "2830",
              "parentCode": "575",
              "name": "武邑县",
              "en_name": "Wuyi"
            },
            {
              "code": "2826",
              "parentCode": "575",
              "name": "枣强县",
              "en_name": "Zaoqiang"
            }
          ]
        },
        {
          "code": "574",
          "parentCode": "532",
          "name": "廊坊",
          "en_name": "LANGFANG",
          "sublist": [
            {
              "code": "2813",
              "parentCode": "574",
              "name": "安次区",
              "en_name": "Anci"
            },
            {
              "code": "3309",
              "parentCode": "574",
              "name": "霸州市",
              "en_name": "Bazhoushi"
            },
            {
              "code": "3316",
              "parentCode": "574",
              "name": "大厂回族自治县",
              "en_name": "Dachanghuizuzizhixian"
            },
            {
              "code": "3314",
              "parentCode": "574",
              "name": "大城县",
              "en_name": "Dachengxian"
            },
            {
              "code": "2812",
              "parentCode": "574",
              "name": "广阳区",
              "en_name": "Guangyang"
            },
            {
              "code": "3312",
              "parentCode": "574",
              "name": "固安县",
              "en_name": "Guanxian"
            },
            {
              "code": "3310",
              "parentCode": "574",
              "name": "三河市",
              "en_name": "Sanheshi"
            },
            {
              "code": "3315",
              "parentCode": "574",
              "name": "文安县",
              "en_name": "Wenanxian"
            },
            {
              "code": "3313",
              "parentCode": "574",
              "name": "香河县",
              "en_name": "Xianghexian"
            },
            {
              "code": "3317",
              "parentCode": "574",
              "name": "燕郊开发区",
              "en_name": "Yanjiaokaifaqu"
            },
            {
              "code": "3311",
              "parentCode": "574",
              "name": "永清县",
              "en_name": "Yongqingxian"
            }
          ]
        },
        {
          "code": "567",
          "parentCode": "532",
          "name": "秦皇岛",
          "en_name": "QINHUANGDAO",
          "sublist": [
            {
              "code": "2700",
              "parentCode": "567",
              "name": "北戴河区",
              "en_name": "Beidaihe"
            },
            {
              "code": "2701",
              "parentCode": "567",
              "name": "昌黎县",
              "en_name": "Changli"
            },
            {
              "code": "2703",
              "parentCode": "567",
              "name": "抚宁区",
              "en_name": "Funing"
            },
            {
              "code": "2698",
              "parentCode": "567",
              "name": "海港区",
              "en_name": "海港区"
            },
            {
              "code": "2702",
              "parentCode": "567",
              "name": "卢龙县",
              "en_name": "Lulong"
            },
            {
              "code": "2704",
              "parentCode": "567",
              "name": "青龙满族自治县",
              "en_name": "Qinglongmanzu"
            },
            {
              "code": "2699",
              "parentCode": "567",
              "name": "山海关区",
              "en_name": "Shanhaiguan"
            }
          ]
        },
        {
          "code": "565",
          "parentCode": "532",
          "name": "石家庄",
          "en_name": "SHIJIAZHUANG",
          "sublist": [
            {
              "code": "2293",
              "parentCode": "565",
              "name": "东开发区",
              "en_name": "Dongkaifaqu"
            },
            {
              "code": "2296",
              "parentCode": "565",
              "name": "藁城区",
              "en_name": "gaochengqu"
            },
            {
              "code": "2418",
              "parentCode": "565",
              "name": "高邑县",
              "en_name": "Gaoyi"
            },
            {
              "code": "2294",
              "parentCode": "565",
              "name": "井陉矿区",
              "en_name": "Jingxingkuangqu"
            },
            {
              "code": "2420",
              "parentCode": "565",
              "name": "井陉县",
              "en_name": "Jingxing"
            },
            {
              "code": "2297",
              "parentCode": "565",
              "name": "晋州市",
              "en_name": "Jinzhoushi"
            },
            {
              "code": "2414",
              "parentCode": "565",
              "name": "灵寿县",
              "en_name": "Lingshou"
            },
            {
              "code": "2412",
              "parentCode": "565",
              "name": "栾城区",
              "en_name": "Luanqu"
            },
            {
              "code": "2299",
              "parentCode": "565",
              "name": "鹿泉区",
              "en_name": "Luquanqu"
            },
            {
              "code": "2301",
              "parentCode": "565",
              "name": "平山县",
              "en_name": "Pingshan"
            },
            {
              "code": "2290",
              "parentCode": "565",
              "name": "桥西区",
              "en_name": "Qiaoxi"
            },
            {
              "code": "2415",
              "parentCode": "565",
              "name": "深泽县",
              "en_name": "Shenze"
            },
            {
              "code": "2416",
              "parentCode": "565",
              "name": "无极县",
              "en_name": "Wuji"
            },
            {
              "code": "2413",
              "parentCode": "565",
              "name": "行唐县",
              "en_name": "Xingtang"
            },
            {
              "code": "2291",
              "parentCode": "565",
              "name": "新华区",
              "en_name": "Xinhua"
            },
            {
              "code": "2295",
              "parentCode": "565",
              "name": "辛集市",
              "en_name": "Xinjishi"
            },
            {
              "code": "2298",
              "parentCode": "565",
              "name": "新乐市",
              "en_name": "Xinleshi"
            },
            {
              "code": "2302",
              "parentCode": "565",
              "name": "元氏县",
              "en_name": "Yuanshi"
            },
            {
              "code": "2292",
              "parentCode": "565",
              "name": "裕华区",
              "en_name": "Yuhua"
            },
            {
              "code": "2419",
              "parentCode": "565",
              "name": "赞皇县",
              "en_name": "Zanhuang"
            },
            {
              "code": "2288",
              "parentCode": "565",
              "name": "长安区",
              "en_name": "Changan"
            },
            {
              "code": "2417",
              "parentCode": "565",
              "name": "赵县",
              "en_name": "Zhaoxian"
            },
            {
              "code": "2300",
              "parentCode": "565",
              "name": "正定县",
              "en_name": "Zhengding"
            }
          ]
        },
        {
          "code": "566",
          "parentCode": "532",
          "name": "唐山",
          "en_name": "TANGSHAN",
          "sublist": [
            {
              "code": "10143",
              "parentCode": "566",
              "name": "遵化市",
              "en_name": "ZUNHUA"
            },
            {
              "code": "2690",
              "parentCode": "566",
              "name": "曹妃甸区",
              "en_name": "Caofeidian"
            },
            {
              "code": "2688",
              "parentCode": "566",
              "name": "丰南区",
              "en_name": "Fengnan"
            },
            {
              "code": "2689",
              "parentCode": "566",
              "name": "丰润区",
              "en_name": "Fengrun"
            },
            {
              "code": "2686",
              "parentCode": "566",
              "name": "古冶区",
              "en_name": "Guye"
            },
            {
              "code": "2687",
              "parentCode": "566",
              "name": "开平区",
              "en_name": "Kaiping"
            },
            {
              "code": "2696",
              "parentCode": "566",
              "name": "乐亭县",
              "en_name": "Leting"
            },
            {
              "code": "2694",
              "parentCode": "566",
              "name": "滦南县",
              "en_name": "Luannan"
            },
            {
              "code": "2697",
              "parentCode": "566",
              "name": "滦州市",
              "en_name": "Luan"
            },
            {
              "code": "2684",
              "parentCode": "566",
              "name": "路北区",
              "en_name": "Lubei"
            },
            {
              "code": "2685",
              "parentCode": "566",
              "name": "路南区",
              "en_name": "Lunan"
            },
            {
              "code": "2692",
              "parentCode": "566",
              "name": "迁安市",
              "en_name": "Qianan"
            },
            {
              "code": "2693",
              "parentCode": "566",
              "name": "迁西县",
              "en_name": "Qianxi"
            },
            {
              "code": "2695",
              "parentCode": "566",
              "name": "玉田县",
              "en_name": "Yutian"
            }
          ]
        },
        {
          "code": "569",
          "parentCode": "532",
          "name": "邢台",
          "en_name": "XINGTAI",
          "sublist": [
            {
              "code": "2729",
              "parentCode": "569",
              "name": "柏乡县",
              "en_name": "Baixiang"
            },
            {
              "code": "2736",
              "parentCode": "569",
              "name": "广宗县",
              "en_name": "Guangzong"
            },
            {
              "code": "2740",
              "parentCode": "569",
              "name": "巨鹿县",
              "en_name": "Julu"
            },
            {
              "code": "2735",
              "parentCode": "569",
              "name": "临城县",
              "en_name": "Lincheng"
            },
            {
              "code": "2737",
              "parentCode": "569",
              "name": "临西县",
              "en_name": "Linxi"
            },
            {
              "code": "2734",
              "parentCode": "569",
              "name": "隆尧县",
              "en_name": "Longyao"
            },
            {
              "code": "2726",
              "parentCode": "569",
              "name": "南宫市",
              "en_name": "Nangong"
            },
            {
              "code": "2742",
              "parentCode": "569",
              "name": "南和区",
              "en_name": "nanhequ"
            },
            {
              "code": "2738",
              "parentCode": "569",
              "name": "内丘县",
              "en_name": "Neiqiu"
            },
            {
              "code": "2732",
              "parentCode": "569",
              "name": "宁晋县",
              "en_name": "Ningjin"
            },
            {
              "code": "2739",
              "parentCode": "569",
              "name": "平乡县",
              "en_name": "Pingxiang"
            },
            {
              "code": "2724",
              "parentCode": "569",
              "name": "襄都区",
              "en_name": "xiangdouqu"
            },
            {
              "code": "2725",
              "parentCode": "569",
              "name": "信都区",
              "en_name": "xindouqu"
            },
            {
              "code": "2731",
              "parentCode": "569",
              "name": "清河县",
              "en_name": "Qinghe"
            },
            {
              "code": "2730",
              "parentCode": "569",
              "name": "任泽区",
              "en_name": "renzequ"
            },
            {
              "code": "2727",
              "parentCode": "569",
              "name": "沙河市",
              "en_name": "Shahe"
            },
            {
              "code": "2733",
              "parentCode": "569",
              "name": "威县",
              "en_name": "Wei"
            },
            {
              "code": "2728",
              "parentCode": "569",
              "name": "邢台县",
              "en_name": "Xingtai"
            },
            {
              "code": "2741",
              "parentCode": "569",
              "name": "新河县",
              "en_name": "Xinhe"
            }
          ]
        },
        {
          "code": "571",
          "parentCode": "532",
          "name": "张家口",
          "en_name": "ZHANGJIAKOU",
          "sublist": [
            {
              "code": "2776",
              "parentCode": "571",
              "name": "赤城县",
              "en_name": "Chicheng"
            },
            {
              "code": "2780",
              "parentCode": "571",
              "name": "崇礼区",
              "en_name": "Chongli"
            },
            {
              "code": "2777",
              "parentCode": "571",
              "name": "沽源县",
              "en_name": "Guyuan"
            },
            {
              "code": "2778",
              "parentCode": "571",
              "name": "怀安县",
              "en_name": "Huaian"
            },
            {
              "code": "2779",
              "parentCode": "571",
              "name": "怀来县",
              "en_name": "Huailai"
            },
            {
              "code": "2773",
              "parentCode": "571",
              "name": "康保县",
              "en_name": "Kangbao"
            },
            {
              "code": "2769",
              "parentCode": "571",
              "name": "桥东区",
              "en_name": "Qiaodong"
            },
            {
              "code": "2768",
              "parentCode": "571",
              "name": "桥西区",
              "en_name": "Qiaoxi"
            },
            {
              "code": "2781",
              "parentCode": "571",
              "name": "尚义县",
              "en_name": "Shangyi"
            },
            {
              "code": "2784",
              "parentCode": "571",
              "name": "万全区",
              "en_name": "Wanquan"
            },
            {
              "code": "2771",
              "parentCode": "571",
              "name": "下花园区",
              "en_name": "Xiahuayuan"
            },
            {
              "code": "2770",
              "parentCode": "571",
              "name": "宣化区",
              "en_name": "Xuanhua"
            },
            {
              "code": "2775",
              "parentCode": "571",
              "name": "阳原县",
              "en_name": "Yangyuan"
            },
            {
              "code": "2782",
              "parentCode": "571",
              "name": "蔚县",
              "en_name": "Wei"
            },
            {
              "code": "2774",
              "parentCode": "571",
              "name": "张北县",
              "en_name": "Zhangbei"
            },
            {
              "code": "2783",
              "parentCode": "571",
              "name": "涿鹿县",
              "en_name": "Zhuolu"
            }
          ]
        }
      ]
    },
    {
      "code": "537",
      "parentCode": "489",
      "name": "黑龙江",
      "en_name": "HEILONGJIANG",
      "sublist": [
        {
          "code": "627",
          "parentCode": "537",
          "name": "大庆",
          "en_name": "DAQING",
          "sublist": [
            {
              "code": "103283",
              "parentCode": "627",
              "name": "大同区",
              "en_name": "Datong"
            },
            {
              "code": "103287",
              "parentCode": "627",
              "name": "杜尔伯特蒙古族自治县",
              "en_name": "Duerbotemengguzizhi"
            },
            {
              "code": "103281",
              "parentCode": "627",
              "name": "红岗区",
              "en_name": "Honggang"
            },
            {
              "code": "103286",
              "parentCode": "627",
              "name": "林甸县",
              "en_name": "Lindian"
            },
            {
              "code": "103280",
              "parentCode": "627",
              "name": "龙凤区",
              "en_name": "Longfeng"
            },
            {
              "code": "103282",
              "parentCode": "627",
              "name": "让胡路区",
              "en_name": "Ronghulu"
            },
            {
              "code": "103279",
              "parentCode": "627",
              "name": "萨尔图区",
              "en_name": "Saertu"
            },
            {
              "code": "103285",
              "parentCode": "627",
              "name": "肇源县",
              "en_name": "Zhaoyuan"
            },
            {
              "code": "103284",
              "parentCode": "627",
              "name": "肇州县",
              "en_name": "Zhaozhou"
            }
          ]
        },
        {
          "code": "634",
          "parentCode": "537",
          "name": "大兴安岭",
          "en_name": "DAXINGANLING",
          "sublist": [
            {
              "code": "103345",
              "parentCode": "634",
              "name": "呼玛县",
              "en_name": "Huma"
            },
            {
              "code": "103347",
              "parentCode": "634",
              "name": "漠河市",
              "en_name": "Mohe"
            },
            {
              "code": "103346",
              "parentCode": "634",
              "name": "塔河县",
              "en_name": "Tahe"
            },
            {
              "code": "104045",
              "parentCode": "634",
              "name": "加格达奇区",
              "en_name": "JIAGEDAQIQU"
            }
          ]
        },
        {
          "code": "622",
          "parentCode": "537",
          "name": "哈尔滨",
          "en_name": "HAERBIN",
          "sublist": [
            {
              "code": "10160",
              "parentCode": "622",
              "name": "尚志市",
              "en_name": "SHANGZHI"
            },
            {
              "code": "10159",
              "parentCode": "622",
              "name": "双城区",
              "en_name": "SHUANGCHENG"
            },
            {
              "code": "2277",
              "parentCode": "622",
              "name": "阿城区",
              "en_name": "Acheng"
            },
            {
              "code": "2429",
              "parentCode": "622",
              "name": "巴彦县",
              "en_name": "Bayan"
            },
            {
              "code": "2428",
              "parentCode": "622",
              "name": "宾县",
              "en_name": "Binxian"
            },
            {
              "code": "2271",
              "parentCode": "622",
              "name": "道里区",
              "en_name": "Daoli"
            },
            {
              "code": "2272",
              "parentCode": "622",
              "name": "道外区",
              "en_name": "Daowai"
            },
            {
              "code": "2426",
              "parentCode": "622",
              "name": "方正县",
              "en_name": "Fangzheng"
            },
            {
              "code": "2276",
              "parentCode": "622",
              "name": "呼兰区",
              "en_name": "Hulan"
            },
            {
              "code": "2430",
              "parentCode": "622",
              "name": "木兰县",
              "en_name": "Mulan"
            },
            {
              "code": "2270",
              "parentCode": "622",
              "name": "南岗区",
              "en_name": "Nangang"
            },
            {
              "code": "2275",
              "parentCode": "622",
              "name": "平房区",
              "en_name": "Pingfang"
            },
            {
              "code": "2274",
              "parentCode": "622",
              "name": "松北区",
              "en_name": "Songbei"
            },
            {
              "code": "2431",
              "parentCode": "622",
              "name": "通河县",
              "en_name": "Tonghe"
            },
            {
              "code": "2424",
              "parentCode": "622",
              "name": "五常市",
              "en_name": "Wuchang"
            },
            {
              "code": "2273",
              "parentCode": "622",
              "name": "香坊区",
              "en_name": "Xiangfang"
            },
            {
              "code": "2432",
              "parentCode": "622",
              "name": "延寿县",
              "en_name": "Yanshou"
            },
            {
              "code": "2427",
              "parentCode": "622",
              "name": "依兰县",
              "en_name": "Yilan"
            }
          ]
        },
        {
          "code": "625",
          "parentCode": "537",
          "name": "鹤岗",
          "en_name": "HEGANG",
          "sublist": [
            {
              "code": "103267",
              "parentCode": "625",
              "name": "东山区",
              "en_name": "Dongshan"
            },
            {
              "code": "103264",
              "parentCode": "625",
              "name": "工农区",
              "en_name": "Gongnong"
            },
            {
              "code": "103269",
              "parentCode": "625",
              "name": "萝北县",
              "en_name": "Luobei"
            },
            {
              "code": "103265",
              "parentCode": "625",
              "name": "南山区",
              "en_name": "Nanshan"
            },
            {
              "code": "103270",
              "parentCode": "625",
              "name": "绥滨县",
              "en_name": "Suibin"
            },
            {
              "code": "103263",
              "parentCode": "625",
              "name": "向阳区",
              "en_name": "Xiangyang"
            },
            {
              "code": "103266",
              "parentCode": "625",
              "name": "兴安区",
              "en_name": "Xingan"
            },
            {
              "code": "103268",
              "parentCode": "625",
              "name": "兴山区",
              "en_name": "Xingshan"
            }
          ]
        },
        {
          "code": "632",
          "parentCode": "537",
          "name": "黑河",
          "en_name": "HEIHE",
          "sublist": [
            {
              "code": "103329",
              "parentCode": "632",
              "name": "爱辉区",
              "en_name": "Aihui"
            },
            {
              "code": "103330",
              "parentCode": "632",
              "name": "北安市",
              "en_name": "Beian"
            },
            {
              "code": "103332",
              "parentCode": "632",
              "name": "嫩江市",
              "en_name": "Nenjiang"
            },
            {
              "code": "103334",
              "parentCode": "632",
              "name": "孙吴县",
              "en_name": "Sunwu"
            },
            {
              "code": "103331",
              "parentCode": "632",
              "name": "五大连池市",
              "en_name": "Wudalianchi"
            },
            {
              "code": "103333",
              "parentCode": "632",
              "name": "逊克县",
              "en_name": "Xunke"
            }
          ]
        },
        {
          "code": "629",
          "parentCode": "537",
          "name": "佳木斯",
          "en_name": "JIAMUSI",
          "sublist": [
            {
              "code": "103307",
              "parentCode": "629",
              "name": "东风区",
              "en_name": "Dongfeng"
            },
            {
              "code": "103310",
              "parentCode": "629",
              "name": "富锦市",
              "en_name": "Fujin"
            },
            {
              "code": "103314",
              "parentCode": "629",
              "name": "抚远市",
              "en_name": "Fuyuan"
            },
            {
              "code": "103312",
              "parentCode": "629",
              "name": "桦川县",
              "en_name": "Yechuan"
            },
            {
              "code": "103311",
              "parentCode": "629",
              "name": "桦南县",
              "en_name": "Yenan"
            },
            {
              "code": "103308",
              "parentCode": "629",
              "name": "郊区",
              "en_name": "Jiao"
            },
            {
              "code": "103306",
              "parentCode": "629",
              "name": "前进区",
              "en_name": "Qianjin"
            },
            {
              "code": "103313",
              "parentCode": "629",
              "name": "汤原县",
              "en_name": "Tangyuan"
            },
            {
              "code": "103309",
              "parentCode": "629",
              "name": "同江市",
              "en_name": "Tongjiang"
            },
            {
              "code": "103305",
              "parentCode": "629",
              "name": "向阳区",
              "en_name": "Xiangyang"
            }
          ]
        },
        {
          "code": "624",
          "parentCode": "537",
          "name": "鸡西",
          "en_name": "JIXI",
          "sublist": [
            {
              "code": "3258",
              "parentCode": "624",
              "name": "城子河区",
              "en_name": "Chengzihe"
            },
            {
              "code": "103256",
              "parentCode": "624",
              "name": "滴道区",
              "en_name": "Didao"
            },
            {
              "code": "103255",
              "parentCode": "624",
              "name": "恒山区",
              "en_name": "Hengshan"
            },
            {
              "code": "103260",
              "parentCode": "624",
              "name": "虎林市",
              "en_name": "Hulin"
            },
            {
              "code": "103262",
              "parentCode": "624",
              "name": "鸡东县",
              "en_name": "Jidong"
            },
            {
              "code": "103254",
              "parentCode": "624",
              "name": "鸡冠区",
              "en_name": "Jiguan"
            },
            {
              "code": "103257",
              "parentCode": "624",
              "name": "梨树区",
              "en_name": "Lishu"
            },
            {
              "code": "103259",
              "parentCode": "624",
              "name": "麻山区",
              "en_name": "Mashan"
            },
            {
              "code": "103261",
              "parentCode": "624",
              "name": "密山市",
              "en_name": "Mishan"
            }
          ]
        },
        {
          "code": "631",
          "parentCode": "537",
          "name": "牡丹江",
          "en_name": "MUDANJIANG",
          "sublist": [
            {
              "code": "10161",
              "parentCode": "631",
              "name": "绥芬河市",
              "en_name": "SUIFENHE"
            },
            {
              "code": "103321",
              "parentCode": "631",
              "name": "爱民区",
              "en_name": "Aimin"
            },
            {
              "code": "103319",
              "parentCode": "631",
              "name": "东安区",
              "en_name": "Dongan"
            },
            {
              "code": "103327",
              "parentCode": "631",
              "name": "东宁市",
              "en_name": "Dongning"
            },
            {
              "code": "103324",
              "parentCode": "631",
              "name": "海林市",
              "en_name": "Hailin"
            },
            {
              "code": "103328",
              "parentCode": "631",
              "name": "林口县",
              "en_name": "Linkou"
            },
            {
              "code": "103326",
              "parentCode": "631",
              "name": "穆棱市",
              "en_name": "Muling"
            },
            {
              "code": "103325",
              "parentCode": "631",
              "name": "宁安市",
              "en_name": "Ningan"
            },
            {
              "code": "103322",
              "parentCode": "631",
              "name": "西安区",
              "en_name": "xian"
            },
            {
              "code": "103320",
              "parentCode": "631",
              "name": "阳明区",
              "en_name": "Yangming"
            }
          ]
        },
        {
          "code": "623",
          "parentCode": "537",
          "name": "齐齐哈尔",
          "en_name": "QIQIHAER",
          "sublist": [
            {
              "code": "103241",
              "parentCode": "623",
              "name": "昂昂溪区",
              "en_name": "Angangxi"
            },
            {
              "code": "103253",
              "parentCode": "623",
              "name": "拜泉县",
              "en_name": "Baiquan"
            },
            {
              "code": "103242",
              "parentCode": "623",
              "name": "富拉尔基区",
              "en_name": "Fulaerji"
            },
            {
              "code": "103250",
              "parentCode": "623",
              "name": "富裕县",
              "en_name": "Fuyu"
            },
            {
              "code": "103249",
              "parentCode": "623",
              "name": "甘南县",
              "en_name": "Gannan"
            },
            {
              "code": "103239",
              "parentCode": "623",
              "name": "建华区",
              "en_name": "Jianhua"
            },
            {
              "code": "103252",
              "parentCode": "623",
              "name": "克东县",
              "en_name": "Kedong"
            },
            {
              "code": "103251",
              "parentCode": "623",
              "name": "克山县",
              "en_name": "Keshan"
            },
            {
              "code": "103246",
              "parentCode": "623",
              "name": "龙江县",
              "en_name": "Longjiang"
            },
            {
              "code": "103238",
              "parentCode": "623",
              "name": "龙沙区",
              "en_name": "Longsha"
            },
            {
              "code": "103244",
              "parentCode": "623",
              "name": "梅里斯达斡尔族区",
              "en_name": "Meilisidawoerzu"
            },
            {
              "code": "103245",
              "parentCode": "623",
              "name": "讷河市",
              "en_name": "Nehe"
            },
            {
              "code": "103243",
              "parentCode": "623",
              "name": "碾子山区",
              "en_name": "Nianzishan"
            },
            {
              "code": "103248",
              "parentCode": "623",
              "name": "泰来县",
              "en_name": "Tailai"
            },
            {
              "code": "103240",
              "parentCode": "623",
              "name": "铁锋区",
              "en_name": "Tiefeng"
            },
            {
              "code": "103247",
              "parentCode": "623",
              "name": "依安县",
              "en_name": "Yian"
            }
          ]
        },
        {
          "code": "630",
          "parentCode": "537",
          "name": "七台河",
          "en_name": "QITAIHE",
          "sublist": [
            {
              "code": "103318",
              "parentCode": "630",
              "name": "勃利县",
              "en_name": "Boli"
            },
            {
              "code": "103317",
              "parentCode": "630",
              "name": "茄子河区",
              "en_name": "Qiezihe"
            },
            {
              "code": "103316",
              "parentCode": "630",
              "name": "桃山区",
              "en_name": "Taoshan"
            },
            {
              "code": "103315",
              "parentCode": "630",
              "name": "新兴区",
              "en_name": "Xinxing"
            }
          ]
        },
        {
          "code": "626",
          "parentCode": "537",
          "name": "双鸭山",
          "en_name": "SHUANGYASHAN",
          "sublist": [
            {
              "code": "103277",
              "parentCode": "626",
              "name": "宝清县",
              "en_name": "Baoqing"
            },
            {
              "code": "103274",
              "parentCode": "626",
              "name": "宝山区",
              "en_name": "Baoshan"
            },
            {
              "code": "103271",
              "parentCode": "626",
              "name": "尖山区",
              "en_name": "Jianshan"
            },
            {
              "code": "103275",
              "parentCode": "626",
              "name": "集贤县",
              "en_name": "Jixian"
            },
            {
              "code": "103272",
              "parentCode": "626",
              "name": "岭东区",
              "en_name": "Lingdong"
            },
            {
              "code": "103278",
              "parentCode": "626",
              "name": "饶河县",
              "en_name": "Raohe"
            },
            {
              "code": "103273",
              "parentCode": "626",
              "name": "四方台区",
              "en_name": "Sifangtai"
            },
            {
              "code": "103276",
              "parentCode": "626",
              "name": "友谊县",
              "en_name": "Youyi"
            }
          ]
        },
        {
          "code": "633",
          "parentCode": "537",
          "name": "绥化",
          "en_name": "SUIHUA",
          "sublist": [
            {
              "code": "10081",
              "parentCode": "633",
              "name": "安达市",
              "en_name": "ANDA"
            },
            {
              "code": "10510",
              "parentCode": "633",
              "name": "肇东市",
              "en_name": "ZHAODONGSHI"
            },
            {
              "code": "103335",
              "parentCode": "633",
              "name": "北林区",
              "en_name": "Beilin"
            },
            {
              "code": "103338",
              "parentCode": "633",
              "name": "海伦市",
              "en_name": "Hailun"
            },
            {
              "code": "103340",
              "parentCode": "633",
              "name": "兰西县",
              "en_name": "Lanxi"
            },
            {
              "code": "103343",
              "parentCode": "633",
              "name": "明水县",
              "en_name": "Mingshui"
            },
            {
              "code": "103342",
              "parentCode": "633",
              "name": "庆安县",
              "en_name": "Qingan"
            },
            {
              "code": "103341",
              "parentCode": "633",
              "name": "青冈县",
              "en_name": "Qinggang"
            },
            {
              "code": "103344",
              "parentCode": "633",
              "name": "绥棱县",
              "en_name": "Suileng"
            },
            {
              "code": "103339",
              "parentCode": "633",
              "name": "望奎县",
              "en_name": "Wangkui"
            }
          ]
        },
        {
          "code": "628",
          "parentCode": "537",
          "name": "伊春",
          "en_name": "YICHUN",
          "sublist": [
            {
              "code": "103304",
              "parentCode": "628",
              "name": "嘉荫县",
              "en_name": "Jiayin"
            },
            {
              "code": "103289",
              "parentCode": "628",
              "name": "南岔县",
              "en_name": "Nancha"
            },
            {
              "code": "103303",
              "parentCode": "628",
              "name": "铁力市",
              "en_name": "Tielishi"
            },
            {
              "code": "103290",
              "parentCode": "628",
              "name": "友好区",
              "en_name": "Youhao"
            },
            {
              "code": "104033",
              "parentCode": "628",
              "name": "乌翠区",
              "en_name": "wucuiqu"
            },
            {
              "code": "104034",
              "parentCode": "628",
              "name": "大箐山县",
              "en_name": "daqingshanxian"
            },
            {
              "code": "104035",
              "parentCode": "628",
              "name": "汤旺县",
              "en_name": "tangwangxian"
            },
            {
              "code": "104036",
              "parentCode": "628",
              "name": "金林区",
              "en_name": "jinlinqu"
            },
            {
              "code": "104037",
              "parentCode": "628",
              "name": "丰林县",
              "en_name": "fenglinxian"
            },
            {
              "code": "104038",
              "parentCode": "628",
              "name": "伊美区",
              "en_name": "yimeiqu"
            }
          ]
        }
      ]
    },
    {
      "code": "545",
      "parentCode": "489",
      "name": "河南",
      "en_name": "HENAN",
      "sublist": [
        {
          "code": "723",
          "parentCode": "545",
          "name": "安阳",
          "en_name": "ANYANG",
          "sublist": [
            {
              "code": "3911",
              "parentCode": "723",
              "name": "安阳县",
              "en_name": "Anyang"
            },
            {
              "code": "3907",
              "parentCode": "723",
              "name": "北关区",
              "en_name": "Beiguan"
            },
            {
              "code": "3912",
              "parentCode": "723",
              "name": "滑县",
              "en_name": "Hua"
            },
            {
              "code": "3910",
              "parentCode": "723",
              "name": "林州市",
              "en_name": "Linzhou"
            },
            {
              "code": "3909",
              "parentCode": "723",
              "name": "龙安区",
              "en_name": "Longan"
            },
            {
              "code": "3913",
              "parentCode": "723",
              "name": "内黄县",
              "en_name": "Neihuang"
            },
            {
              "code": "3914",
              "parentCode": "723",
              "name": "汤阴县",
              "en_name": "Tangyin"
            },
            {
              "code": "3906",
              "parentCode": "723",
              "name": "文峰区",
              "en_name": "Wenfeng"
            },
            {
              "code": "3908",
              "parentCode": "723",
              "name": "殷都区",
              "en_name": "Yindu"
            }
          ]
        },
        {
          "code": "724",
          "parentCode": "545",
          "name": "鹤壁",
          "en_name": "HEBI",
          "sublist": [
            {
              "code": "3915",
              "parentCode": "724",
              "name": "鹤山区",
              "en_name": "Heshan"
            },
            {
              "code": "3918",
              "parentCode": "724",
              "name": "浚县",
              "en_name": "Jun"
            },
            {
              "code": "3917",
              "parentCode": "724",
              "name": "淇滨区",
              "en_name": "Qibin"
            },
            {
              "code": "3919",
              "parentCode": "724",
              "name": "淇县",
              "en_name": "Qi"
            },
            {
              "code": "3916",
              "parentCode": "724",
              "name": "山城区",
              "en_name": "Shancheng"
            }
          ]
        },
        {
          "code": "726",
          "parentCode": "545",
          "name": "焦作",
          "en_name": "JIAOZUO",
          "sublist": [
            {
              "code": "3939",
              "parentCode": "726",
              "name": "博爱县",
              "en_name": "Boai"
            },
            {
              "code": "3932",
              "parentCode": "726",
              "name": "解放区",
              "en_name": "Jiefang"
            },
            {
              "code": "3934",
              "parentCode": "726",
              "name": "马村区",
              "en_name": "Macun"
            },
            {
              "code": "3937",
              "parentCode": "726",
              "name": "孟州市",
              "en_name": "Mengzhou"
            },
            {
              "code": "3936",
              "parentCode": "726",
              "name": "沁阳市",
              "en_name": "Qinyang"
            },
            {
              "code": "3935",
              "parentCode": "726",
              "name": "山阳区",
              "en_name": "Shanyang"
            },
            {
              "code": "3941",
              "parentCode": "726",
              "name": "温县",
              "en_name": "Wen"
            },
            {
              "code": "3940",
              "parentCode": "726",
              "name": "武陟县",
              "en_name": "Wudou"
            },
            {
              "code": "3938",
              "parentCode": "726",
              "name": "修武县",
              "en_name": "Xiuwu"
            },
            {
              "code": "3933",
              "parentCode": "726",
              "name": "中站区",
              "en_name": "Zhongzhan"
            }
          ]
        },
        {
          "code": "10044",
          "parentCode": "545",
          "name": "济源市",
          "en_name": "JIYUAN",
          "sublist": []
        },
        {
          "code": "720",
          "parentCode": "545",
          "name": "开封",
          "en_name": "KAIFENG",
          "sublist": [
            {
              "code": "3873",
              "parentCode": "720",
              "name": "鼓楼区",
              "en_name": "Gulou"
            },
            {
              "code": "3879",
              "parentCode": "720",
              "name": "祥符区",
              "en_name": "Kaifeng"
            },
            {
              "code": "3880",
              "parentCode": "720",
              "name": "兰考县",
              "en_name": "Lankao"
            },
            {
              "code": "3871",
              "parentCode": "720",
              "name": "龙亭区",
              "en_name": "Longting"
            },
            {
              "code": "3876",
              "parentCode": "720",
              "name": "杞县",
              "en_name": "Qi"
            },
            {
              "code": "3872",
              "parentCode": "720",
              "name": "顺河回族区",
              "en_name": "Shunhehuizu"
            },
            {
              "code": "3877",
              "parentCode": "720",
              "name": "通许县",
              "en_name": "Tongxu"
            },
            {
              "code": "3878",
              "parentCode": "720",
              "name": "尉氏县",
              "en_name": "Weishi"
            },
            {
              "code": "3874",
              "parentCode": "720",
              "name": "禹王台区",
              "en_name": "Yuwangtai"
            }
          ]
        },
        {
          "code": "721",
          "parentCode": "545",
          "name": "洛阳",
          "en_name": "LUOYANG",
          "sublist": [
            {
              "code": "3883",
              "parentCode": "721",
              "name": "瀍河回族区",
              "en_name": "Chanhehuizu"
            },
            {
              "code": "3330",
              "parentCode": "721",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "3324",
              "parentCode": "721",
              "name": "涧西区",
              "en_name": "Jianxiqu"
            },
            {
              "code": "3328",
              "parentCode": "721",
              "name": "吉利区",
              "en_name": "Jiliqu"
            },
            {
              "code": "3326",
              "parentCode": "721",
              "name": "老城区",
              "en_name": "Laochengqu"
            },
            {
              "code": "3334",
              "parentCode": "721",
              "name": "栾川县",
              "en_name": "Luanchuanxian"
            },
            {
              "code": "3325",
              "parentCode": "721",
              "name": "洛龙区",
              "en_name": "Luolongqu"
            },
            {
              "code": "3333",
              "parentCode": "721",
              "name": "洛宁县",
              "en_name": "Luoningxian"
            },
            {
              "code": "3335",
              "parentCode": "721",
              "name": "孟津区",
              "en_name": "mengjinqu"
            },
            {
              "code": "3337",
              "parentCode": "721",
              "name": "汝阳县",
              "en_name": "Ruyangxian"
            },
            {
              "code": "3332",
              "parentCode": "721",
              "name": "嵩县",
              "en_name": "Songxian"
            },
            {
              "code": "3327",
              "parentCode": "721",
              "name": "西工区",
              "en_name": "Xigongqu"
            },
            {
              "code": "3338",
              "parentCode": "721",
              "name": "新安县",
              "en_name": "Xinanxian"
            },
            {
              "code": "3331",
              "parentCode": "721",
              "name": "偃师区",
              "en_name": "Yanshishi"
            },
            {
              "code": "3329",
              "parentCode": "721",
              "name": "伊滨区",
              "en_name": "Yibinqu"
            },
            {
              "code": "3336",
              "parentCode": "721",
              "name": "伊川县",
              "en_name": "Yichuanxian"
            },
            {
              "code": "3339",
              "parentCode": "721",
              "name": "宜阳县",
              "en_name": "Yiyangxian"
            }
          ]
        },
        {
          "code": "731",
          "parentCode": "545",
          "name": "南阳",
          "en_name": "NANYANG",
          "sublist": [
            {
              "code": "3967",
              "parentCode": "731",
              "name": "邓州市",
              "en_name": "Dengzhou"
            },
            {
              "code": "3969",
              "parentCode": "731",
              "name": "方城县",
              "en_name": "Fangcheng"
            },
            {
              "code": "3968",
              "parentCode": "731",
              "name": "南召县",
              "en_name": "Nanzhao"
            },
            {
              "code": "3972",
              "parentCode": "731",
              "name": "内乡县",
              "en_name": "Neixiang"
            },
            {
              "code": "3974",
              "parentCode": "731",
              "name": "社旗县",
              "en_name": "Sheqi"
            },
            {
              "code": "3975",
              "parentCode": "731",
              "name": "唐河县",
              "en_name": "Tanghe"
            },
            {
              "code": "3977",
              "parentCode": "731",
              "name": "桐柏县",
              "en_name": "Tongbo"
            },
            {
              "code": "3965",
              "parentCode": "731",
              "name": "宛城区",
              "en_name": "Wancheng"
            },
            {
              "code": "3966",
              "parentCode": "731",
              "name": "卧龙区",
              "en_name": "Wolong"
            },
            {
              "code": "3973",
              "parentCode": "731",
              "name": "淅川县",
              "en_name": "Xichuan"
            },
            {
              "code": "3976",
              "parentCode": "731",
              "name": "新野县",
              "en_name": "Xinye"
            },
            {
              "code": "3970",
              "parentCode": "731",
              "name": "西峡县",
              "en_name": "Xixia"
            },
            {
              "code": "3971",
              "parentCode": "731",
              "name": "镇平县",
              "en_name": "Zhenping"
            }
          ]
        },
        {
          "code": "722",
          "parentCode": "545",
          "name": "平顶山",
          "en_name": "PINGDINGSHAN",
          "sublist": [
            {
              "code": "3902",
              "parentCode": "722",
              "name": "宝丰县",
              "en_name": "Baofeng"
            },
            {
              "code": "3905",
              "parentCode": "722",
              "name": "郏县",
              "en_name": "Jia"
            },
            {
              "code": "3904",
              "parentCode": "722",
              "name": "鲁山县",
              "en_name": "Lushan"
            },
            {
              "code": "3901",
              "parentCode": "722",
              "name": "汝州市",
              "en_name": "Ruzhou"
            },
            {
              "code": "3898",
              "parentCode": "722",
              "name": "石龙区",
              "en_name": "Shilong"
            },
            {
              "code": "3897",
              "parentCode": "722",
              "name": "卫东区",
              "en_name": "Weidong"
            },
            {
              "code": "3900",
              "parentCode": "722",
              "name": "舞钢市",
              "en_name": "Wugang"
            },
            {
              "code": "3896",
              "parentCode": "722",
              "name": "新华区",
              "en_name": "Xinhua"
            },
            {
              "code": "3903",
              "parentCode": "722",
              "name": "叶县",
              "en_name": "Ye"
            },
            {
              "code": "3899",
              "parentCode": "722",
              "name": "湛河区",
              "en_name": "Zhanhe"
            }
          ]
        },
        {
          "code": "727",
          "parentCode": "545",
          "name": "濮阳",
          "en_name": "PUYANG",
          "sublist": [
            {
              "code": "3945",
              "parentCode": "727",
              "name": "范县",
              "en_name": "Fan"
            },
            {
              "code": "3942",
              "parentCode": "727",
              "name": "华龙区",
              "en_name": "Hualong"
            },
            {
              "code": "3944",
              "parentCode": "727",
              "name": "南乐县",
              "en_name": "Nanle"
            },
            {
              "code": "3947",
              "parentCode": "727",
              "name": "濮阳县",
              "en_name": "Puyang"
            },
            {
              "code": "3943",
              "parentCode": "727",
              "name": "清丰县",
              "en_name": "Qingfeng"
            },
            {
              "code": "3946",
              "parentCode": "727",
              "name": "台前县",
              "en_name": "Taiqian"
            }
          ]
        },
        {
          "code": "730",
          "parentCode": "545",
          "name": "三门峡",
          "en_name": "SANMENXIA",
          "sublist": [
            {
              "code": "3959",
              "parentCode": "730",
              "name": "湖滨区",
              "en_name": "Hubin"
            },
            {
              "code": "3961",
              "parentCode": "730",
              "name": "灵宝市",
              "en_name": "Lingbao"
            },
            {
              "code": "3964",
              "parentCode": "730",
              "name": "卢氏县",
              "en_name": "Lushi"
            },
            {
              "code": "3962",
              "parentCode": "730",
              "name": "渑池县",
              "en_name": "Mianchi"
            },
            {
              "code": "3963",
              "parentCode": "730",
              "name": "陕州区",
              "en_name": "Shan"
            },
            {
              "code": "3960",
              "parentCode": "730",
              "name": "义马市",
              "en_name": "Yima"
            }
          ]
        },
        {
          "code": "732",
          "parentCode": "545",
          "name": "商丘",
          "en_name": "SHANGQIU",
          "sublist": [
            {
              "code": "3978",
              "parentCode": "732",
              "name": "梁园区",
              "en_name": "Liangyuan"
            },
            {
              "code": "3981",
              "parentCode": "732",
              "name": "民权县",
              "en_name": "Minan"
            },
            {
              "code": "3983",
              "parentCode": "732",
              "name": "宁陵县",
              "en_name": "Ningling"
            },
            {
              "code": "3982",
              "parentCode": "732",
              "name": "睢县",
              "en_name": "Sui"
            },
            {
              "code": "3979",
              "parentCode": "732",
              "name": "睢阳区",
              "en_name": "Suiyang"
            },
            {
              "code": "3986",
              "parentCode": "732",
              "name": "夏邑县",
              "en_name": "Xiayi"
            },
            {
              "code": "3980",
              "parentCode": "732",
              "name": "永城市",
              "en_name": "Yongcheng"
            },
            {
              "code": "3985",
              "parentCode": "732",
              "name": "虞城县",
              "en_name": "Yucheng"
            },
            {
              "code": "3984",
              "parentCode": "732",
              "name": "柘城县",
              "en_name": "Zhecheng"
            }
          ]
        },
        {
          "code": "729",
          "parentCode": "545",
          "name": "漯河",
          "en_name": "LUOHE",
          "sublist": [
            {
              "code": "3958",
              "parentCode": "729",
              "name": "临颍县",
              "en_name": "Linying"
            },
            {
              "code": "3957",
              "parentCode": "729",
              "name": "舞阳县",
              "en_name": "Wuyang"
            },
            {
              "code": "3955",
              "parentCode": "729",
              "name": "郾城区",
              "en_name": "Yancheng"
            },
            {
              "code": "3954",
              "parentCode": "729",
              "name": "源汇区",
              "en_name": "Yuanhui"
            },
            {
              "code": "3956",
              "parentCode": "729",
              "name": "召陵区",
              "en_name": "Zhaoling"
            }
          ]
        },
        {
          "code": "725",
          "parentCode": "545",
          "name": "新乡",
          "en_name": "XINXIANG",
          "sublist": [
            {
              "code": "3930",
              "parentCode": "725",
              "name": "封丘县",
              "en_name": "Fengqiu"
            },
            {
              "code": "3922",
              "parentCode": "725",
              "name": "凤泉区",
              "en_name": "Fengan"
            },
            {
              "code": "3920",
              "parentCode": "725",
              "name": "红旗区",
              "en_name": "Hongqi"
            },
            {
              "code": "3925",
              "parentCode": "725",
              "name": "辉县市",
              "en_name": "Huixian"
            },
            {
              "code": "3927",
              "parentCode": "725",
              "name": "获嘉县",
              "en_name": "Huojia"
            },
            {
              "code": "3923",
              "parentCode": "725",
              "name": "牧野区",
              "en_name": "Wuye"
            },
            {
              "code": "3921",
              "parentCode": "725",
              "name": "卫滨区",
              "en_name": "Weibin"
            },
            {
              "code": "3924",
              "parentCode": "725",
              "name": "卫辉市",
              "en_name": "Weihui"
            },
            {
              "code": "3926",
              "parentCode": "725",
              "name": "新乡县",
              "en_name": "Xinxiang"
            },
            {
              "code": "3929",
              "parentCode": "725",
              "name": "延津县",
              "en_name": "Yanjin"
            },
            {
              "code": "3928",
              "parentCode": "725",
              "name": "原阳县",
              "en_name": "Yuanyang"
            },
            {
              "code": "3931",
              "parentCode": "725",
              "name": "长垣市",
              "en_name": "Changyuan"
            }
          ]
        },
        {
          "code": "733",
          "parentCode": "545",
          "name": "信阳",
          "en_name": "XINYANG",
          "sublist": [
            {
              "code": "3990",
              "parentCode": "733",
              "name": "光山县",
              "en_name": "Guangshan"
            },
            {
              "code": "3993",
              "parentCode": "733",
              "name": "固始县",
              "en_name": "Gushi"
            },
            {
              "code": "3995",
              "parentCode": "733",
              "name": "淮滨县",
              "en_name": "Huaibin"
            },
            {
              "code": "3994",
              "parentCode": "733",
              "name": "潢川县",
              "en_name": "Huangchuan"
            },
            {
              "code": "3989",
              "parentCode": "733",
              "name": "罗山县",
              "en_name": "Luoshan"
            },
            {
              "code": "3988",
              "parentCode": "733",
              "name": "平桥区",
              "en_name": "Pingqiao"
            },
            {
              "code": "3992",
              "parentCode": "733",
              "name": "商城县",
              "en_name": "Shangcheng"
            },
            {
              "code": "3987",
              "parentCode": "733",
              "name": "浉河区",
              "en_name": "Shihe"
            },
            {
              "code": "3991",
              "parentCode": "733",
              "name": "新县",
              "en_name": "Xin"
            },
            {
              "code": "3996",
              "parentCode": "733",
              "name": "息县",
              "en_name": "Xi"
            }
          ]
        },
        {
          "code": "728",
          "parentCode": "545",
          "name": "许昌",
          "en_name": "XUCHANG",
          "sublist": [
            {
              "code": "3340",
              "parentCode": "728",
              "name": "魏都区",
              "en_name": "Weiduqu"
            },
            {
              "code": "3344",
              "parentCode": "728",
              "name": "襄城县",
              "en_name": "Xiangchengxian"
            },
            {
              "code": "3341",
              "parentCode": "728",
              "name": "建安区",
              "en_name": "Xuchangxian"
            },
            {
              "code": "3343",
              "parentCode": "728",
              "name": "鄢陵县",
              "en_name": "Yanlingxian"
            },
            {
              "code": "3342",
              "parentCode": "728",
              "name": "禹州市",
              "en_name": "Yuzhouxian"
            },
            {
              "code": "3406",
              "parentCode": "728",
              "name": "长葛市",
              "en_name": "Changge"
            }
          ]
        },
        {
          "code": "719",
          "parentCode": "545",
          "name": "郑州",
          "en_name": "ZHENGZHOU",
          "sublist": [
            {
              "code": "2400",
              "parentCode": "719",
              "name": "登封市",
              "en_name": "Dengfeng"
            },
            {
              "code": "2195",
              "parentCode": "719",
              "name": "二七区",
              "en_name": "Erqi"
            },
            {
              "code": "2204",
              "parentCode": "719",
              "name": "高新区",
              "en_name": "Gaoxin"
            },
            {
              "code": "2444",
              "parentCode": "719",
              "name": "巩义市",
              "en_name": "Gongyi"
            },
            {
              "code": "2196",
              "parentCode": "719",
              "name": "管城回族区",
              "en_name": "Guancheng"
            },
            {
              "code": "2445",
              "parentCode": "719",
              "name": "航空港区",
              "en_name": "Hangkonggangqu"
            },
            {
              "code": "2198",
              "parentCode": "719",
              "name": "惠济区",
              "en_name": "Huiji"
            },
            {
              "code": "2203",
              "parentCode": "719",
              "name": "经开区",
              "en_name": "Jingkai"
            },
            {
              "code": "2197",
              "parentCode": "719",
              "name": "金水区",
              "en_name": "Jinshui"
            },
            {
              "code": "2205",
              "parentCode": "719",
              "name": "上街区",
              "en_name": "Shangjie"
            },
            {
              "code": "2401",
              "parentCode": "719",
              "name": "新密市",
              "en_name": "Xinmei"
            },
            {
              "code": "2399",
              "parentCode": "719",
              "name": "新郑市",
              "en_name": "Xinzheng"
            },
            {
              "code": "2402",
              "parentCode": "719",
              "name": "荥阳市",
              "en_name": "Xingyang"
            },
            {
              "code": "2199",
              "parentCode": "719",
              "name": "郑东新区",
              "en_name": "Zhengdongxin"
            },
            {
              "code": "2403",
              "parentCode": "719",
              "name": "中牟县",
              "en_name": "Zhongmu"
            },
            {
              "code": "2194",
              "parentCode": "719",
              "name": "中原区",
              "en_name": "Zhongyuan"
            }
          ]
        },
        {
          "code": "734",
          "parentCode": "545",
          "name": "周口",
          "en_name": "ZHOUKOU",
          "sublist": [
            {
              "code": "3997",
              "parentCode": "734",
              "name": "川汇区",
              "en_name": "Chuanhui"
            },
            {
              "code": "104003",
              "parentCode": "734",
              "name": "郸城县",
              "en_name": "Dancheng"
            },
            {
              "code": "3999",
              "parentCode": "734",
              "name": "扶沟县",
              "en_name": "Fugou"
            },
            {
              "code": "104004",
              "parentCode": "734",
              "name": "淮阳区",
              "en_name": "Huaiyang"
            },
            {
              "code": "104006",
              "parentCode": "734",
              "name": "鹿邑县",
              "en_name": "Luyi"
            },
            {
              "code": "104001",
              "parentCode": "734",
              "name": "商水县",
              "en_name": "Shangshui"
            },
            {
              "code": "104002",
              "parentCode": "734",
              "name": "沈丘县",
              "en_name": "Shenqiu"
            },
            {
              "code": "104005",
              "parentCode": "734",
              "name": "太康县",
              "en_name": "Taikang"
            },
            {
              "code": "3998",
              "parentCode": "734",
              "name": "项城市",
              "en_name": "Gcheng"
            },
            {
              "code": "4000",
              "parentCode": "734",
              "name": "西华县",
              "en_name": "Xihua"
            }
          ]
        },
        {
          "code": "735",
          "parentCode": "545",
          "name": "驻马店",
          "en_name": "ZHUMADIAN",
          "sublist": [
            {
              "code": "10059",
              "parentCode": "735",
              "name": "西平县",
              "en_name": "XIPING"
            },
            {
              "code": "104013",
              "parentCode": "735",
              "name": "泌阳县",
              "en_name": "Biyang"
            },
            {
              "code": "104010",
              "parentCode": "735",
              "name": "平舆县",
              "en_name": "Pingyu"
            },
            {
              "code": "104012",
              "parentCode": "735",
              "name": "确山县",
              "en_name": "Queshan"
            },
            {
              "code": "104014",
              "parentCode": "735",
              "name": "汝南县",
              "en_name": "Runan"
            },
            {
              "code": "104009",
              "parentCode": "735",
              "name": "上蔡县",
              "en_name": "Shangcai"
            },
            {
              "code": "104015",
              "parentCode": "735",
              "name": "遂平县",
              "en_name": "Suiping"
            },
            {
              "code": "4016",
              "parentCode": "735",
              "name": "新蔡县",
              "en_name": "Xincai"
            },
            {
              "code": "104007",
              "parentCode": "735",
              "name": "驿城区",
              "en_name": "Yicheng"
            },
            {
              "code": "104011",
              "parentCode": "735",
              "name": "正阳县",
              "en_name": "Zhengyang"
            }
          ]
        }
      ]
    },
    {
      "code": "546",
      "parentCode": "489",
      "name": "湖北",
      "en_name": "HUBEI",
      "sublist": [
        {
          "code": "748",
          "parentCode": "546",
          "name": "恩施",
          "en_name": "ENSHITUJIAZUMIAOZUZIZHIZHOU",
          "sublist": [
            {
              "code": "4113",
              "parentCode": "748",
              "name": "巴东县",
              "en_name": "Badong"
            },
            {
              "code": "4110",
              "parentCode": "748",
              "name": "恩施市",
              "en_name": "Enshi"
            },
            {
              "code": "4117",
              "parentCode": "748",
              "name": "鹤峰县",
              "en_name": "Hefeng"
            },
            {
              "code": "4112",
              "parentCode": "748",
              "name": "建始县",
              "en_name": "Jianshi"
            },
            {
              "code": "4116",
              "parentCode": "748",
              "name": "来凤县",
              "en_name": "Laifeng"
            },
            {
              "code": "4111",
              "parentCode": "748",
              "name": "利川市",
              "en_name": "Lichuan"
            },
            {
              "code": "4115",
              "parentCode": "748",
              "name": "咸丰县",
              "en_name": "Xianfeng"
            },
            {
              "code": "4114",
              "parentCode": "748",
              "name": "宣恩县",
              "en_name": "Xuanen"
            }
          ]
        },
        {
          "code": "741",
          "parentCode": "546",
          "name": "鄂州",
          "en_name": "EZHOU",
          "sublist": [
            {
              "code": "4070",
              "parentCode": "741",
              "name": "鄂城区",
              "en_name": "Echeng"
            },
            {
              "code": "4069",
              "parentCode": "741",
              "name": "华容区",
              "en_name": "Huarong"
            },
            {
              "code": "4068",
              "parentCode": "741",
              "name": "梁子湖区",
              "en_name": "Liangzihu"
            }
          ]
        },
        {
          "code": "745",
          "parentCode": "546",
          "name": "黄冈",
          "en_name": "HUANGGANG",
          "sublist": [
            {
              "code": "10139",
              "parentCode": "745",
              "name": "武穴市",
              "en_name": "WUXUE"
            },
            {
              "code": "4095",
              "parentCode": "745",
              "name": "红安县",
              "en_name": "Hongan"
            },
            {
              "code": "4100",
              "parentCode": "745",
              "name": "黄梅县",
              "en_name": "Huangmei"
            },
            {
              "code": "4091",
              "parentCode": "745",
              "name": "黄州区",
              "en_name": "Huangzhou"
            },
            {
              "code": "4096",
              "parentCode": "745",
              "name": "罗田县",
              "en_name": "Luotian"
            },
            {
              "code": "4092",
              "parentCode": "745",
              "name": "麻城市",
              "en_name": "Macheng"
            },
            {
              "code": "4099",
              "parentCode": "745",
              "name": "蕲春县",
              "en_name": "Qichun"
            },
            {
              "code": "4093",
              "parentCode": "745",
              "name": "团风县",
              "en_name": "Tuanfeng"
            },
            {
              "code": "4098",
              "parentCode": "745",
              "name": "浠水县",
              "en_name": "Xishui"
            },
            {
              "code": "4097",
              "parentCode": "745",
              "name": "英山县",
              "en_name": "Yingshan"
            }
          ]
        },
        {
          "code": "737",
          "parentCode": "546",
          "name": "黄石",
          "en_name": "HUANGSHI",
          "sublist": [
            {
              "code": "4037",
              "parentCode": "737",
              "name": "大冶市",
              "en_name": "Daye"
            },
            {
              "code": "4033",
              "parentCode": "737",
              "name": "黄石港区",
              "en_name": "Huangshigang"
            },
            {
              "code": "4036",
              "parentCode": "737",
              "name": "铁山区",
              "en_name": "Tieshan"
            },
            {
              "code": "4035",
              "parentCode": "737",
              "name": "下陆区",
              "en_name": "Xialu"
            },
            {
              "code": "4034",
              "parentCode": "737",
              "name": "西塞山区",
              "en_name": "Xisaishan"
            },
            {
              "code": "4038",
              "parentCode": "737",
              "name": "阳新县",
              "en_name": "Yangxin"
            }
          ]
        },
        {
          "code": "742",
          "parentCode": "546",
          "name": "荆门",
          "en_name": "JINGMEN",
          "sublist": [
            {
              "code": "4071",
              "parentCode": "742",
              "name": "东宝区",
              "en_name": "Dongbao"
            },
            {
              "code": "4072",
              "parentCode": "742",
              "name": "掇刀区",
              "en_name": "Duodao"
            },
            {
              "code": "4074",
              "parentCode": "742",
              "name": "京山市",
              "en_name": "Jingshan"
            },
            {
              "code": "4075",
              "parentCode": "742",
              "name": "沙洋县",
              "en_name": "Shayang"
            },
            {
              "code": "4073",
              "parentCode": "742",
              "name": "钟祥市",
              "en_name": "Zhongxiang"
            }
          ]
        },
        {
          "code": "744",
          "parentCode": "546",
          "name": "荆州",
          "en_name": "JINGZHOU",
          "sublist": [
            {
              "code": "10057",
              "parentCode": "744",
              "name": "公安县",
              "en_name": "GONGAN"
            },
            {
              "code": "4086",
              "parentCode": "744",
              "name": "洪湖市",
              "en_name": "Honghu"
            },
            {
              "code": "4090",
              "parentCode": "744",
              "name": "江陵县",
              "en_name": "Jiangling"
            },
            {
              "code": "4089",
              "parentCode": "744",
              "name": "监利市",
              "en_name": "jianlishi"
            },
            {
              "code": "4084",
              "parentCode": "744",
              "name": "荆州区",
              "en_name": "Jingzhou"
            },
            {
              "code": "4083",
              "parentCode": "744",
              "name": "沙市区",
              "en_name": "Shashi"
            },
            {
              "code": "4085",
              "parentCode": "744",
              "name": "石首市",
              "en_name": "Shishou"
            },
            {
              "code": "4087",
              "parentCode": "744",
              "name": "松滋市",
              "en_name": "Songzi"
            }
          ]
        },
        {
          "code": "10169",
          "parentCode": "546",
          "name": "潜江市",
          "en_name": "QIANJIANG",
          "sublist": []
        },
        {
          "code": "10179",
          "parentCode": "546",
          "name": "神农架林区",
          "en_name": "SHENNONGJIA",
          "sublist": []
        },
        {
          "code": "738",
          "parentCode": "546",
          "name": "十堰",
          "en_name": "SHIYAN",
          "sublist": [
            {
              "code": "104017",
              "parentCode": "738",
              "name": "张湾区",
              "en_name": "Zhangwanqu"
            },
            {
              "code": "4040",
              "parentCode": "738",
              "name": "丹江口市",
              "en_name": "Danjiangkou"
            },
            {
              "code": "4045",
              "parentCode": "738",
              "name": "房县",
              "en_name": "Fang"
            },
            {
              "code": "4039",
              "parentCode": "738",
              "name": "茅箭区",
              "en_name": "Maojian"
            },
            {
              "code": "4041",
              "parentCode": "738",
              "name": "郧阳区",
              "en_name": "Yun"
            },
            {
              "code": "4042",
              "parentCode": "738",
              "name": "郧西县",
              "en_name": "Yunxi"
            },
            {
              "code": "4043",
              "parentCode": "738",
              "name": "竹山县",
              "en_name": "Zhushan"
            },
            {
              "code": "4044",
              "parentCode": "738",
              "name": "竹溪县",
              "en_name": "Zhuxi"
            }
          ]
        },
        {
          "code": "747",
          "parentCode": "546",
          "name": "随州",
          "en_name": "SUIZHOU",
          "sublist": [
            {
              "code": "4107",
              "parentCode": "747",
              "name": "曾都区",
              "en_name": "Zengdu"
            },
            {
              "code": "4108",
              "parentCode": "747",
              "name": "广水市",
              "en_name": "Guangshui"
            },
            {
              "code": "4109",
              "parentCode": "747",
              "name": "随县",
              "en_name": "Sui"
            }
          ]
        },
        {
          "code": "10140",
          "parentCode": "546",
          "name": "天门市",
          "en_name": "TIANMEN",
          "sublist": []
        },
        {
          "code": "736",
          "parentCode": "546",
          "name": "武汉",
          "en_name": "WUHAN",
          "sublist": [
            {
              "code": "2064",
              "parentCode": "736",
              "name": "蔡甸区",
              "en_name": "Caidian"
            },
            {
              "code": "2366",
              "parentCode": "736",
              "name": "东湖新技术开发区",
              "en_name": "Donghuxinqu"
            },
            {
              "code": "2065",
              "parentCode": "736",
              "name": "东西湖区",
              "en_name": "Dongxihu"
            },
            {
              "code": "2066",
              "parentCode": "736",
              "name": "汉南区",
              "en_name": "Hannan"
            },
            {
              "code": "2060",
              "parentCode": "736",
              "name": "汉阳区",
              "en_name": "Hanyang"
            },
            {
              "code": "2063",
              "parentCode": "736",
              "name": "洪山区",
              "en_name": "Hongshan"
            },
            {
              "code": "2068",
              "parentCode": "736",
              "name": "黄陂区",
              "en_name": "Huangpo"
            },
            {
              "code": "2057",
              "parentCode": "736",
              "name": "江岸区",
              "en_name": "Jiangan"
            },
            {
              "code": "2058",
              "parentCode": "736",
              "name": "江汉区",
              "en_name": "Jianghan"
            },
            {
              "code": "2067",
              "parentCode": "736",
              "name": "江夏区",
              "en_name": "Jiangxia"
            },
            {
              "code": "2059",
              "parentCode": "736",
              "name": "硚口区",
              "en_name": "Changkou"
            },
            {
              "code": "2062",
              "parentCode": "736",
              "name": "青山区",
              "en_name": "Qingshan"
            },
            {
              "code": "2061",
              "parentCode": "736",
              "name": "武昌区",
              "en_name": "Wuchang"
            },
            {
              "code": "2365",
              "parentCode": "736",
              "name": "武汉经济技术开发区",
              "en_name": "Jingjikaifaqu"
            },
            {
              "code": "2367",
              "parentCode": "736",
              "name": "武汉吴家山经济技术开发区",
              "en_name": "Wujiashan"
            },
            {
              "code": "2069",
              "parentCode": "736",
              "name": "新洲区",
              "en_name": "Xinzhou"
            }
          ]
        },
        {
          "code": "740",
          "parentCode": "546",
          "name": "襄阳",
          "en_name": "XIANGYANG",
          "sublist": [
            {
              "code": "10171",
              "parentCode": "740",
              "name": "宜城市",
              "en_name": "YICHENG"
            },
            {
              "code": "4067",
              "parentCode": "740",
              "name": "保康县",
              "en_name": "Baokang"
            },
            {
              "code": "4060",
              "parentCode": "740",
              "name": "樊城区",
              "en_name": "Fancheng"
            },
            {
              "code": "4066",
              "parentCode": "740",
              "name": "谷城县",
              "en_name": "Gucheng"
            },
            {
              "code": "4062",
              "parentCode": "740",
              "name": "老河口市",
              "en_name": "Laohekou"
            },
            {
              "code": "4065",
              "parentCode": "740",
              "name": "南漳县",
              "en_name": "Nanzhang"
            },
            {
              "code": "4059",
              "parentCode": "740",
              "name": "襄城区",
              "en_name": "Xiangcheng"
            },
            {
              "code": "4061",
              "parentCode": "740",
              "name": "襄州区",
              "en_name": "Xiangzhou"
            },
            {
              "code": "4063",
              "parentCode": "740",
              "name": "枣阳市",
              "en_name": "Zaoyang"
            }
          ]
        },
        {
          "code": "746",
          "parentCode": "546",
          "name": "咸宁",
          "en_name": "XIANNING",
          "sublist": [
            {
              "code": "4102",
              "parentCode": "746",
              "name": "赤壁市",
              "en_name": "Chibi"
            },
            {
              "code": "4105",
              "parentCode": "746",
              "name": "崇阳县",
              "en_name": "Chongyang"
            },
            {
              "code": "4103",
              "parentCode": "746",
              "name": "嘉鱼县",
              "en_name": "Jiayu"
            },
            {
              "code": "4104",
              "parentCode": "746",
              "name": "通城县",
              "en_name": "Tongcheng"
            },
            {
              "code": "4106",
              "parentCode": "746",
              "name": "通山县",
              "en_name": "Tongshan"
            },
            {
              "code": "4101",
              "parentCode": "746",
              "name": "咸安区",
              "en_name": "Xianan"
            }
          ]
        },
        {
          "code": "10168",
          "parentCode": "546",
          "name": "仙桃市",
          "en_name": "XIANTAO",
          "sublist": []
        },
        {
          "code": "743",
          "parentCode": "546",
          "name": "孝感",
          "en_name": "XIAOGAN",
          "sublist": [
            {
              "code": "4078",
              "parentCode": "743",
              "name": "安陆市",
              "en_name": "Anlu"
            },
            {
              "code": "4081",
              "parentCode": "743",
              "name": "大悟县",
              "en_name": "Dawu"
            },
            {
              "code": "4079",
              "parentCode": "743",
              "name": "汉川市",
              "en_name": "Hanchuan"
            },
            {
              "code": "4080",
              "parentCode": "743",
              "name": "孝昌县",
              "en_name": "Xiaochang"
            },
            {
              "code": "4076",
              "parentCode": "743",
              "name": "孝南区",
              "en_name": "Xiaonan"
            },
            {
              "code": "4077",
              "parentCode": "743",
              "name": "应城市",
              "en_name": "Yingcheng"
            },
            {
              "code": "4082",
              "parentCode": "743",
              "name": "云梦县",
              "en_name": "Yunmeng"
            }
          ]
        },
        {
          "code": "739",
          "parentCode": "546",
          "name": "宜昌",
          "en_name": "YICHANG",
          "sublist": [
            {
              "code": "4052",
              "parentCode": "739",
              "name": "当阳市",
              "en_name": "Dangyang"
            },
            {
              "code": "3347",
              "parentCode": "739",
              "name": "点军区",
              "en_name": "Dianjunqu"
            },
            {
              "code": "4058",
              "parentCode": "739",
              "name": "五峰土家族自治县",
              "en_name": "Wufengtujiazuzizhi"
            },
            {
              "code": "3346",
              "parentCode": "739",
              "name": "伍家岗区",
              "en_name": "Wujiagangqu"
            },
            {
              "code": "3345",
              "parentCode": "739",
              "name": "西陵区",
              "en_name": "Xilingqu"
            },
            {
              "code": "4055",
              "parentCode": "739",
              "name": "兴山县",
              "en_name": "Xingshan"
            },
            {
              "code": "3348",
              "parentCode": "739",
              "name": "猇亭区",
              "en_name": "Xiaotingqu"
            },
            {
              "code": "4051",
              "parentCode": "739",
              "name": "宜都市",
              "en_name": "Yidu"
            },
            {
              "code": "3349",
              "parentCode": "739",
              "name": "夷陵区",
              "en_name": "Yilingqu"
            },
            {
              "code": "4054",
              "parentCode": "739",
              "name": "远安县",
              "en_name": "Yuanan"
            },
            {
              "code": "4057",
              "parentCode": "739",
              "name": "长阳土家族自治县",
              "en_name": "Changyangtujiazuzizhi"
            },
            {
              "code": "4053",
              "parentCode": "739",
              "name": "枝江市",
              "en_name": "Zhijiang"
            },
            {
              "code": "4056",
              "parentCode": "739",
              "name": "秭归县",
              "en_name": "Zigui"
            }
          ]
        }
      ]
    },
    {
      "code": "547",
      "parentCode": "489",
      "name": "湖南",
      "en_name": "HUNAN",
      "sublist": [
        {
          "code": "755",
          "parentCode": "547",
          "name": "常德",
          "en_name": "CHANGDE",
          "sublist": [
            {
              "code": "4177",
              "parentCode": "755",
              "name": "安乡县",
              "en_name": "Anxiang"
            },
            {
              "code": "4175",
              "parentCode": "755",
              "name": "鼎城区",
              "en_name": "Dingcheng"
            },
            {
              "code": "4178",
              "parentCode": "755",
              "name": "汉寿县",
              "en_name": "Hanshou"
            },
            {
              "code": "4176",
              "parentCode": "755",
              "name": "津市市",
              "en_name": "Jinshi"
            },
            {
              "code": "4180",
              "parentCode": "755",
              "name": "临澧县",
              "en_name": "Linli"
            },
            {
              "code": "4179",
              "parentCode": "755",
              "name": "澧县",
              "en_name": "Li"
            },
            {
              "code": "4182",
              "parentCode": "755",
              "name": "石门县",
              "en_name": "Shimen"
            },
            {
              "code": "4181",
              "parentCode": "755",
              "name": "桃源县",
              "en_name": "Taoyuan"
            },
            {
              "code": "4174",
              "parentCode": "755",
              "name": "武陵区",
              "en_name": "Wuling"
            }
          ]
        },
        {
          "code": "758",
          "parentCode": "547",
          "name": "郴州",
          "en_name": "CHENZHOU",
          "sublist": [
            {
              "code": "4203",
              "parentCode": "758",
              "name": "安仁县",
              "en_name": "Anren"
            },
            {
              "code": "4193",
              "parentCode": "758",
              "name": "北湖区",
              "en_name": "Beihu"
            },
            {
              "code": "4202",
              "parentCode": "758",
              "name": "桂东县",
              "en_name": "Guidong"
            },
            {
              "code": "4196",
              "parentCode": "758",
              "name": "桂阳县",
              "en_name": "Guiyang"
            },
            {
              "code": "4199",
              "parentCode": "758",
              "name": "嘉禾县",
              "en_name": "Jiahe"
            },
            {
              "code": "4200",
              "parentCode": "758",
              "name": "临武县",
              "en_name": "Linwu"
            },
            {
              "code": "4201",
              "parentCode": "758",
              "name": "汝城县",
              "en_name": "Rucheng"
            },
            {
              "code": "4194",
              "parentCode": "758",
              "name": "苏仙区",
              "en_name": "Suxian"
            },
            {
              "code": "4197",
              "parentCode": "758",
              "name": "宜章县",
              "en_name": "Yizhang"
            },
            {
              "code": "4198",
              "parentCode": "758",
              "name": "永兴县",
              "en_name": "Yongxing"
            },
            {
              "code": "4195",
              "parentCode": "758",
              "name": "资兴市",
              "en_name": "Zixing"
            }
          ]
        },
        {
          "code": "752",
          "parentCode": "547",
          "name": "衡阳",
          "en_name": "HENGYANG",
          "sublist": [
            {
              "code": "4147",
              "parentCode": "752",
              "name": "常宁市",
              "en_name": "Changning"
            },
            {
              "code": "4151",
              "parentCode": "752",
              "name": "衡东县",
              "en_name": "Hengdong"
            },
            {
              "code": "4149",
              "parentCode": "752",
              "name": "衡南县",
              "en_name": "Hengnan"
            },
            {
              "code": "4150",
              "parentCode": "752",
              "name": "衡山县",
              "en_name": "Hengshan"
            },
            {
              "code": "4148",
              "parentCode": "752",
              "name": "衡阳县",
              "en_name": "Hengyang"
            },
            {
              "code": "4146",
              "parentCode": "752",
              "name": "耒阳市",
              "en_name": "Leiyang"
            },
            {
              "code": "4145",
              "parentCode": "752",
              "name": "南岳区",
              "en_name": "Nanyue"
            },
            {
              "code": "4152",
              "parentCode": "752",
              "name": "祁东县",
              "en_name": "Qidong"
            },
            {
              "code": "4143",
              "parentCode": "752",
              "name": "石鼓区",
              "en_name": "Shigu"
            },
            {
              "code": "4142",
              "parentCode": "752",
              "name": "雁峰区",
              "en_name": "Yanfeng"
            },
            {
              "code": "4144",
              "parentCode": "752",
              "name": "蒸湘区",
              "en_name": "Zhengxiang"
            },
            {
              "code": "4141",
              "parentCode": "752",
              "name": "珠晖区",
              "en_name": "Zhuhui"
            }
          ]
        },
        {
          "code": "760",
          "parentCode": "547",
          "name": "怀化",
          "en_name": "HUAIHUA",
          "sublist": [
            {
              "code": "4219",
              "parentCode": "760",
              "name": "辰溪县",
              "en_name": "Chenxi"
            },
            {
              "code": "4215",
              "parentCode": "760",
              "name": "鹤城区",
              "en_name": "Hecheng"
            },
            {
              "code": "4216",
              "parentCode": "760",
              "name": "洪江市",
              "en_name": "Hongjiang"
            },
            {
              "code": "4221",
              "parentCode": "760",
              "name": "会同县",
              "en_name": "Huitong"
            },
            {
              "code": "4225",
              "parentCode": "760",
              "name": "靖州苗族侗族自治县",
              "en_name": "Jingzhoumiaozudongzuzizhi"
            },
            {
              "code": "4222",
              "parentCode": "760",
              "name": "麻阳苗族自治县",
              "en_name": "Mayangmiaozuzizhi"
            },
            {
              "code": "4226",
              "parentCode": "760",
              "name": "通道侗族自治县",
              "en_name": "Tongdaodongzuzizhi"
            },
            {
              "code": "4223",
              "parentCode": "760",
              "name": "新晃侗族自治县",
              "en_name": "Xinhuangdongzuzizhi"
            },
            {
              "code": "4220",
              "parentCode": "760",
              "name": "溆浦县",
              "en_name": "Xupu"
            },
            {
              "code": "4218",
              "parentCode": "760",
              "name": "沅陵县",
              "en_name": "Yuanling"
            },
            {
              "code": "4224",
              "parentCode": "760",
              "name": "芷江侗族自治县",
              "en_name": "Zhijiangdongzuzizhi"
            },
            {
              "code": "4217",
              "parentCode": "760",
              "name": "中方县",
              "en_name": "Zhongfang"
            }
          ]
        },
        {
          "code": "761",
          "parentCode": "547",
          "name": "娄底",
          "en_name": "LOUDI",
          "sublist": [
            {
              "code": "4228",
              "parentCode": "761",
              "name": "冷水江市",
              "en_name": "Lengshuijiang"
            },
            {
              "code": "4229",
              "parentCode": "761",
              "name": "涟源市",
              "en_name": "Lianyuan"
            },
            {
              "code": "4227",
              "parentCode": "761",
              "name": "娄星区",
              "en_name": "Louxing"
            },
            {
              "code": "4230",
              "parentCode": "761",
              "name": "双峰县",
              "en_name": "Shuangfeng"
            },
            {
              "code": "4231",
              "parentCode": "761",
              "name": "新化县",
              "en_name": "Xinhua"
            }
          ]
        },
        {
          "code": "753",
          "parentCode": "547",
          "name": "邵阳",
          "en_name": "SHAOYANG",
          "sublist": [
            {
              "code": "4155",
              "parentCode": "753",
              "name": "北塔区",
              "en_name": "Beita"
            },
            {
              "code": "4164",
              "parentCode": "753",
              "name": "城步苗族自治县",
              "en_name": "Chengbumiaozuzizhi"
            },
            {
              "code": "4154",
              "parentCode": "753",
              "name": "大祥区",
              "en_name": "Daxiang"
            },
            {
              "code": "4161",
              "parentCode": "753",
              "name": "洞口县",
              "en_name": "Dongkou"
            },
            {
              "code": "4160",
              "parentCode": "753",
              "name": "隆回县",
              "en_name": "Longhui"
            },
            {
              "code": "4157",
              "parentCode": "753",
              "name": "邵东市",
              "en_name": "Shaodong"
            },
            {
              "code": "4159",
              "parentCode": "753",
              "name": "邵阳县",
              "en_name": "Shaoyang"
            },
            {
              "code": "4153",
              "parentCode": "753",
              "name": "双清区",
              "en_name": "Shuangqing"
            },
            {
              "code": "4162",
              "parentCode": "753",
              "name": "绥宁县",
              "en_name": "Suining"
            },
            {
              "code": "4156",
              "parentCode": "753",
              "name": "武冈市",
              "en_name": "Wugang"
            },
            {
              "code": "4163",
              "parentCode": "753",
              "name": "新宁县",
              "en_name": "Xinning"
            },
            {
              "code": "4158",
              "parentCode": "753",
              "name": "新邵县",
              "en_name": "Xinshao"
            }
          ]
        },
        {
          "code": "751",
          "parentCode": "547",
          "name": "湘潭",
          "en_name": "XIANGTAN",
          "sublist": [
            {
              "code": "4139",
              "parentCode": "751",
              "name": "韶山市",
              "en_name": "Shaoshan"
            },
            {
              "code": "4140",
              "parentCode": "751",
              "name": "湘潭县",
              "en_name": "Xiangtan"
            },
            {
              "code": "4138",
              "parentCode": "751",
              "name": "湘乡市",
              "en_name": "Xiangxiang"
            },
            {
              "code": "4137",
              "parentCode": "751",
              "name": "岳塘区",
              "en_name": "Yuetang"
            },
            {
              "code": "4136",
              "parentCode": "751",
              "name": "雨湖区",
              "en_name": "Yuhu"
            }
          ]
        },
        {
          "code": "762",
          "parentCode": "547",
          "name": "湘西",
          "en_name": "XIANGXI",
          "sublist": [
            {
              "code": "4236",
              "parentCode": "762",
              "name": "保靖县",
              "en_name": "Baojing"
            },
            {
              "code": "4234",
              "parentCode": "762",
              "name": "凤凰县",
              "en_name": "Fenghuang"
            },
            {
              "code": "4237",
              "parentCode": "762",
              "name": "古丈县",
              "en_name": "Guzhang"
            },
            {
              "code": "4235",
              "parentCode": "762",
              "name": "花垣县",
              "en_name": "Huayuan"
            },
            {
              "code": "4232",
              "parentCode": "762",
              "name": "吉首市",
              "en_name": "Jishou"
            },
            {
              "code": "4239",
              "parentCode": "762",
              "name": "龙山县",
              "en_name": "Longshan"
            },
            {
              "code": "4233",
              "parentCode": "762",
              "name": "泸溪县",
              "en_name": "Luxi"
            },
            {
              "code": "4238",
              "parentCode": "762",
              "name": "永顺县",
              "en_name": "Yongshun"
            }
          ]
        },
        {
          "code": "757",
          "parentCode": "547",
          "name": "益阳",
          "en_name": "YIYANG",
          "sublist": [
            {
              "code": "4192",
              "parentCode": "757",
              "name": "安化县",
              "en_name": "Anhua"
            },
            {
              "code": "4188",
              "parentCode": "757",
              "name": "赫山区",
              "en_name": "Heshan"
            },
            {
              "code": "4190",
              "parentCode": "757",
              "name": "南县",
              "en_name": "Nan"
            },
            {
              "code": "4191",
              "parentCode": "757",
              "name": "桃江县",
              "en_name": "Taojiang"
            },
            {
              "code": "4189",
              "parentCode": "757",
              "name": "沅江市",
              "en_name": "Yuanjiang"
            },
            {
              "code": "4187",
              "parentCode": "757",
              "name": "资阳区",
              "en_name": "Ziyang"
            }
          ]
        },
        {
          "code": "759",
          "parentCode": "547",
          "name": "永州",
          "en_name": "YONGZHOU",
          "sublist": [
            {
              "code": "4209",
              "parentCode": "759",
              "name": "道县",
              "en_name": "Dao"
            },
            {
              "code": "4207",
              "parentCode": "759",
              "name": "东安县",
              "en_name": "Dongan"
            },
            {
              "code": "4214",
              "parentCode": "759",
              "name": "江华瑶族自治县",
              "en_name": "Jianghuayaozuzizhi"
            },
            {
              "code": "4210",
              "parentCode": "759",
              "name": "江永县",
              "en_name": "Jiangyong"
            },
            {
              "code": "4212",
              "parentCode": "759",
              "name": "蓝山县",
              "en_name": "Lanshan"
            },
            {
              "code": "4205",
              "parentCode": "759",
              "name": "冷水滩区",
              "en_name": "Lengshuitan"
            },
            {
              "code": "4204",
              "parentCode": "759",
              "name": "零陵区",
              "en_name": "Lingling"
            },
            {
              "code": "4211",
              "parentCode": "759",
              "name": "宁远县",
              "en_name": "Ningyuan"
            },
            {
              "code": "4206",
              "parentCode": "759",
              "name": "祁阳市",
              "en_name": "Qiyang"
            },
            {
              "code": "4208",
              "parentCode": "759",
              "name": "双牌县",
              "en_name": "Shuangpai"
            },
            {
              "code": "4213",
              "parentCode": "759",
              "name": "新田县",
              "en_name": "Xintian"
            }
          ]
        },
        {
          "code": "754",
          "parentCode": "547",
          "name": "岳阳",
          "en_name": "YUEYANG",
          "sublist": [
            {
              "code": "4171",
              "parentCode": "754",
              "name": "华容县",
              "en_name": "Huarong"
            },
            {
              "code": "4167",
              "parentCode": "754",
              "name": "君山区",
              "en_name": "Junshan"
            },
            {
              "code": "4169",
              "parentCode": "754",
              "name": "临湘市",
              "en_name": "Linxiang"
            },
            {
              "code": "4168",
              "parentCode": "754",
              "name": "汨罗市",
              "en_name": "Miluo"
            },
            {
              "code": "4173",
              "parentCode": "754",
              "name": "平江县",
              "en_name": "Pingjiang"
            },
            {
              "code": "4172",
              "parentCode": "754",
              "name": "湘阴县",
              "en_name": "Xiangyin"
            },
            {
              "code": "4165",
              "parentCode": "754",
              "name": "岳阳楼区",
              "en_name": "Yueyanglou"
            },
            {
              "code": "4170",
              "parentCode": "754",
              "name": "岳阳县",
              "en_name": "Yueyang"
            },
            {
              "code": "4166",
              "parentCode": "754",
              "name": "云溪区",
              "en_name": "Yunxi"
            }
          ]
        },
        {
          "code": "756",
          "parentCode": "547",
          "name": "张家界",
          "en_name": "ZHANGJIAJIE",
          "sublist": [
            {
              "code": "4185",
              "parentCode": "756",
              "name": "慈利县",
              "en_name": "Cili"
            },
            {
              "code": "4186",
              "parentCode": "756",
              "name": "桑植县",
              "en_name": "Sangzhi"
            },
            {
              "code": "4184",
              "parentCode": "756",
              "name": "武陵源区",
              "en_name": "Wulingyuan"
            },
            {
              "code": "4183",
              "parentCode": "756",
              "name": "永定区",
              "en_name": "Yongding"
            }
          ]
        },
        {
          "code": "749",
          "parentCode": "547",
          "name": "长沙",
          "en_name": "CHANGSHA",
          "sublist": [
            {
              "code": "2224",
              "parentCode": "749",
              "name": "芙蓉区",
              "en_name": "Furong"
            },
            {
              "code": "2227",
              "parentCode": "749",
              "name": "开福区",
              "en_name": "Kaifu"
            },
            {
              "code": "2408",
              "parentCode": "749",
              "name": "浏阳市",
              "en_name": "Liuyang"
            },
            {
              "code": "2407",
              "parentCode": "749",
              "name": "宁乡市",
              "en_name": "Ningxiang"
            },
            {
              "code": "2225",
              "parentCode": "749",
              "name": "天心区",
              "en_name": "Tianxin"
            },
            {
              "code": "2405",
              "parentCode": "749",
              "name": "望城区",
              "en_name": "Wangcheng"
            },
            {
              "code": "2226",
              "parentCode": "749",
              "name": "岳麓区",
              "en_name": "Yuelu"
            },
            {
              "code": "2228",
              "parentCode": "749",
              "name": "雨花区",
              "en_name": "Yuhua"
            },
            {
              "code": "2406",
              "parentCode": "749",
              "name": "长沙县",
              "en_name": "Changsha"
            }
          ]
        },
        {
          "code": "750",
          "parentCode": "547",
          "name": "株洲",
          "en_name": "ZHUZHOU",
          "sublist": [
            {
              "code": "4134",
              "parentCode": "750",
              "name": "茶陵县",
              "en_name": "Chaling"
            },
            {
              "code": "4127",
              "parentCode": "750",
              "name": "荷塘区",
              "en_name": "Hetang"
            },
            {
              "code": "4131",
              "parentCode": "750",
              "name": "醴陵市",
              "en_name": "Liling"
            },
            {
              "code": "4128",
              "parentCode": "750",
              "name": "芦淞区",
              "en_name": "Lusong"
            },
            {
              "code": "4129",
              "parentCode": "750",
              "name": "石峰区",
              "en_name": "Shifeng"
            },
            {
              "code": "4130",
              "parentCode": "750",
              "name": "天元区",
              "en_name": "Tianyuan"
            },
            {
              "code": "4135",
              "parentCode": "750",
              "name": "炎陵县",
              "en_name": "Yanling"
            },
            {
              "code": "4133",
              "parentCode": "750",
              "name": "攸县",
              "en_name": "You"
            },
            {
              "code": "4132",
              "parentCode": "750",
              "name": "渌口区",
              "en_name": "Zhuzhou"
            }
          ]
        }
      ]
    },
    {
      "code": "539",
      "parentCode": "489",
      "name": "江苏",
      "en_name": "JIANGSU",
      "sublist": [
        {
          "code": "638",
          "parentCode": "539",
          "name": "常州",
          "en_name": "CHANGZHOU",
          "sublist": [
            {
              "code": "3043",
              "parentCode": "638",
              "name": "金坛区",
              "en_name": "Jintanqu"
            },
            {
              "code": "3042",
              "parentCode": "638",
              "name": "溧阳市",
              "en_name": "Liyangshi"
            },
            {
              "code": "3038",
              "parentCode": "638",
              "name": "天宁区",
              "en_name": "Tianningqu"
            },
            {
              "code": "3041",
              "parentCode": "638",
              "name": "武进区",
              "en_name": "Wujinqu"
            },
            {
              "code": "3040",
              "parentCode": "638",
              "name": "新北区",
              "en_name": "Xinbeiqu"
            },
            {
              "code": "3039",
              "parentCode": "638",
              "name": "钟楼区",
              "en_name": "Zhonglouqu"
            }
          ]
        },
        {
          "code": "643",
          "parentCode": "539",
          "name": "淮安",
          "en_name": "HUAIAN",
          "sublist": [
            {
              "code": "3085",
              "parentCode": "643",
              "name": "洪泽区",
              "en_name": "Hongzexian"
            },
            {
              "code": "3412",
              "parentCode": "643",
              "name": "淮安区",
              "en_name": "Huaian"
            },
            {
              "code": "3082",
              "parentCode": "643",
              "name": "淮阴区",
              "en_name": "Huaiyinqu"
            },
            {
              "code": "3086",
              "parentCode": "643",
              "name": "金湖县",
              "en_name": "Jinhuxian"
            },
            {
              "code": "3084",
              "parentCode": "643",
              "name": "涟水县",
              "en_name": "Lianshuixian"
            },
            {
              "code": "3080",
              "parentCode": "643",
              "name": "清江浦区",
              "en_name": "Qinghequ"
            },
            {
              "code": "3398",
              "parentCode": "643",
              "name": "盱眙县",
              "en_name": "Xuyi"
            }
          ]
        },
        {
          "code": "642",
          "parentCode": "539",
          "name": "连云港",
          "en_name": "LIANYUNGANG",
          "sublist": [
            {
              "code": "3090",
              "parentCode": "642",
              "name": "东海县",
              "en_name": "Donghaixian"
            },
            {
              "code": "3089",
              "parentCode": "642",
              "name": "赣榆区",
              "en_name": "Ganyuxian"
            },
            {
              "code": "3092",
              "parentCode": "642",
              "name": "灌南县",
              "en_name": "Guannanxian"
            },
            {
              "code": "3091",
              "parentCode": "642",
              "name": "灌云县",
              "en_name": "Guanyunxian"
            },
            {
              "code": "3088",
              "parentCode": "642",
              "name": "海州区",
              "en_name": "Haizhouqu"
            },
            {
              "code": "3087",
              "parentCode": "642",
              "name": "连云区",
              "en_name": "Lianyunqu"
            }
          ]
        },
        {
          "code": "635",
          "parentCode": "539",
          "name": "南京",
          "en_name": "NANJING",
          "sublist": [
            {
              "code": "2096",
              "parentCode": "635",
              "name": "高淳区",
              "en_name": "Gaochun"
            },
            {
              "code": "2088",
              "parentCode": "635",
              "name": "鼓楼区",
              "en_name": "Gulou"
            },
            {
              "code": "2094",
              "parentCode": "635",
              "name": "江宁区",
              "en_name": "Jiangning"
            },
            {
              "code": "2087",
              "parentCode": "635",
              "name": "建邺区",
              "en_name": "JianYe"
            },
            {
              "code": "2095",
              "parentCode": "635",
              "name": "溧水区",
              "en_name": "Lishui"
            },
            {
              "code": "2091",
              "parentCode": "635",
              "name": "六合区",
              "en_name": "Liuhe"
            },
            {
              "code": "2090",
              "parentCode": "635",
              "name": "浦口区",
              "en_name": "Pukou"
            },
            {
              "code": "2086",
              "parentCode": "635",
              "name": "秦淮区",
              "en_name": "Qinhuai"
            },
            {
              "code": "2092",
              "parentCode": "635",
              "name": "栖霞区",
              "en_name": "Qixia"
            },
            {
              "code": "2084",
              "parentCode": "635",
              "name": "玄武区",
              "en_name": "Xuanwu"
            },
            {
              "code": "2093",
              "parentCode": "635",
              "name": "雨花台区",
              "en_name": "Yuhuatai"
            }
          ]
        },
        {
          "code": "641",
          "parentCode": "539",
          "name": "南通",
          "en_name": "NANTONG",
          "sublist": [
            {
              "code": "3044",
              "parentCode": "641",
              "name": "崇川区",
              "en_name": "Chongchuanqu"
            },
            {
              "code": "3045",
              "parentCode": "641",
              "name": "港闸区",
              "en_name": "Gangzhaqu"
            },
            {
              "code": "3046",
              "parentCode": "641",
              "name": "海安市",
              "en_name": "Haianxian"
            },
            {
              "code": "3048",
              "parentCode": "641",
              "name": "海门区",
              "en_name": "haimenqu"
            },
            {
              "code": "3395",
              "parentCode": "641",
              "name": "启东市",
              "en_name": "Qidong"
            },
            {
              "code": "3047",
              "parentCode": "641",
              "name": "如东县",
              "en_name": "Rudongxian"
            },
            {
              "code": "3394",
              "parentCode": "641",
              "name": "如皋市",
              "en_name": "Rugao"
            },
            {
              "code": "3399",
              "parentCode": "641",
              "name": "通州区",
              "en_name": "Tongzhou"
            }
          ]
        },
        {
          "code": "648",
          "parentCode": "539",
          "name": "宿迁",
          "en_name": "SUQIAN",
          "sublist": [
            {
              "code": "3448",
              "parentCode": "648",
              "name": "沭阳县",
              "en_name": "Muyang"
            },
            {
              "code": "3450",
              "parentCode": "648",
              "name": "泗洪县",
              "en_name": "Sihong"
            },
            {
              "code": "3449",
              "parentCode": "648",
              "name": "泗阳县",
              "en_name": "Siyang"
            },
            {
              "code": "3446",
              "parentCode": "648",
              "name": "宿城区",
              "en_name": "Sucheng"
            },
            {
              "code": "3447",
              "parentCode": "648",
              "name": "宿豫区",
              "en_name": "Suyu"
            }
          ]
        },
        {
          "code": "639",
          "parentCode": "539",
          "name": "苏州",
          "en_name": "SUZHOU",
          "sublist": [
            {
              "code": "650",
              "parentCode": "639",
              "name": "常熟市",
              "en_name": "CHANGSHU"
            },
            {
              "code": "640",
              "parentCode": "639",
              "name": "昆山市",
              "en_name": "KUNSHAN"
            },
            {
              "code": "911",
              "parentCode": "639",
              "name": "太仓市",
              "en_name": "TAICANG"
            },
            {
              "code": "652",
              "parentCode": "639",
              "name": "张家港市",
              "en_name": "ZHANGJIAGANG"
            },
            {
              "code": "2404",
              "parentCode": "639",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "2218",
              "parentCode": "639",
              "name": "工业园区",
              "en_name": "Gongyeyuang"
            },
            {
              "code": "2511",
              "parentCode": "639",
              "name": "姑苏区",
              "en_name": "GUSUQU"
            },
            {
              "code": "2215",
              "parentCode": "639",
              "name": "虎丘区",
              "en_name": "Huqiu"
            },
            {
              "code": "2561",
              "parentCode": "639",
              "name": "吴江区",
              "en_name": "WUJIANGQU"
            },
            {
              "code": "2216",
              "parentCode": "639",
              "name": "吴中区",
              "en_name": "Wuzhong"
            },
            {
              "code": "2217",
              "parentCode": "639",
              "name": "相城区",
              "en_name": "Xiangcheng"
            }
          ]
        },
        {
          "code": "647",
          "parentCode": "539",
          "name": "泰州",
          "en_name": "TAIZHOU",
          "sublist": [
            {
              "code": "3068",
              "parentCode": "647",
              "name": "高港区",
              "en_name": "Gaogangqu"
            },
            {
              "code": "3067",
              "parentCode": "647",
              "name": "海陵区",
              "en_name": "Hailingqu"
            },
            {
              "code": "3069",
              "parentCode": "647",
              "name": "姜堰区",
              "en_name": "Jiangyanqu"
            },
            {
              "code": "3390",
              "parentCode": "647",
              "name": "靖江市",
              "en_name": "Jingjiang"
            },
            {
              "code": "3397",
              "parentCode": "647",
              "name": "泰兴市",
              "en_name": "Taixing"
            },
            {
              "code": "3070",
              "parentCode": "647",
              "name": "兴化市",
              "en_name": "Xinghuashi"
            }
          ]
        },
        {
          "code": "636",
          "parentCode": "539",
          "name": "无锡",
          "en_name": "WUXI",
          "sublist": [
            {
              "code": "104016",
              "parentCode": "636",
              "name": "梁溪区",
              "en_name": "LIANGXIQU"
            },
            {
              "code": "2517",
              "parentCode": "636",
              "name": "滨湖区",
              "en_name": "BINHUQU"
            },
            {
              "code": "2519",
              "parentCode": "636",
              "name": "惠山区",
              "en_name": "HUISHANQU"
            },
            {
              "code": "2512",
              "parentCode": "636",
              "name": "江阴市",
              "en_name": "JIANGYINSHI"
            },
            {
              "code": "2518",
              "parentCode": "636",
              "name": "新吴区",
              "en_name": "WUXIXINQU"
            },
            {
              "code": "2520",
              "parentCode": "636",
              "name": "锡山区",
              "en_name": "XISHANQU"
            },
            {
              "code": "2513",
              "parentCode": "636",
              "name": "宜兴市",
              "en_name": "YIXINGSHI"
            }
          ]
        },
        {
          "code": "637",
          "parentCode": "539",
          "name": "徐州",
          "en_name": "XUZHOU",
          "sublist": [
            {
              "code": "3054",
              "parentCode": "637",
              "name": "丰县",
              "en_name": "Fengxian"
            },
            {
              "code": "3049",
              "parentCode": "637",
              "name": "鼓楼区",
              "en_name": "Gulouqu"
            },
            {
              "code": "3051",
              "parentCode": "637",
              "name": "贾汪区",
              "en_name": "Jiawangqu"
            },
            {
              "code": "3055",
              "parentCode": "637",
              "name": "沛县",
              "en_name": "Peixian"
            },
            {
              "code": "3058",
              "parentCode": "637",
              "name": "邳州市",
              "en_name": "Pizhoushi"
            },
            {
              "code": "3052",
              "parentCode": "637",
              "name": "泉山区",
              "en_name": "Quanshanqu"
            },
            {
              "code": "3056",
              "parentCode": "637",
              "name": "睢宁县",
              "en_name": "Suiningxian"
            },
            {
              "code": "3053",
              "parentCode": "637",
              "name": "铜山区",
              "en_name": "Tongshanqu"
            },
            {
              "code": "3057",
              "parentCode": "637",
              "name": "新沂市",
              "en_name": "Xinyishi"
            },
            {
              "code": "3050",
              "parentCode": "637",
              "name": "云龙区",
              "en_name": "Yunlongqu"
            }
          ]
        },
        {
          "code": "644",
          "parentCode": "539",
          "name": "盐城",
          "en_name": "YANCHENG",
          "sublist": [
            {
              "code": "3075",
              "parentCode": "644",
              "name": "滨海县",
              "en_name": "Binhaixian"
            },
            {
              "code": "3073",
              "parentCode": "644",
              "name": "大丰区",
              "en_name": "Dafengqu"
            },
            {
              "code": "3079",
              "parentCode": "644",
              "name": "东台市",
              "en_name": "Dongtaishi"
            },
            {
              "code": "3076",
              "parentCode": "644",
              "name": "阜宁县",
              "en_name": "Funingxian"
            },
            {
              "code": "3078",
              "parentCode": "644",
              "name": "建湖县",
              "en_name": "Jianhuxian"
            },
            {
              "code": "3077",
              "parentCode": "644",
              "name": "射阳县",
              "en_name": "Sheyangxian"
            },
            {
              "code": "3071",
              "parentCode": "644",
              "name": "亭湖区",
              "en_name": "Tinghuqu"
            },
            {
              "code": "3074",
              "parentCode": "644",
              "name": "响水县",
              "en_name": "Xiangshuixian"
            },
            {
              "code": "3072",
              "parentCode": "644",
              "name": "盐都区",
              "en_name": "Yanduqu"
            }
          ]
        },
        {
          "code": "645",
          "parentCode": "539",
          "name": "扬州",
          "en_name": "YANGZHOU",
          "sublist": [
            {
              "code": "3066",
              "parentCode": "645",
              "name": "宝应县",
              "en_name": "Baoyingxian"
            },
            {
              "code": "3396",
              "parentCode": "645",
              "name": "高邮市",
              "en_name": "Gaoyou"
            },
            {
              "code": "3063",
              "parentCode": "645",
              "name": "广陵区",
              "en_name": "Guanglingqu"
            },
            {
              "code": "3062",
              "parentCode": "645",
              "name": "邗江区",
              "en_name": "Hanjiangqu"
            },
            {
              "code": "3064",
              "parentCode": "645",
              "name": "江都区",
              "en_name": "Jiangduqu"
            },
            {
              "code": "3065",
              "parentCode": "645",
              "name": "仪征市",
              "en_name": "Yizhengshi"
            }
          ]
        },
        {
          "code": "646",
          "parentCode": "539",
          "name": "镇江",
          "en_name": "ZHENJIANG",
          "sublist": [
            {
              "code": "3061",
              "parentCode": "646",
              "name": "丹徒区",
              "en_name": "Dantuqu"
            },
            {
              "code": "3392",
              "parentCode": "646",
              "name": "丹阳市",
              "en_name": "Danyang"
            },
            {
              "code": "3059",
              "parentCode": "646",
              "name": "京口区",
              "en_name": "Jingkouqu"
            },
            {
              "code": "3391",
              "parentCode": "646",
              "name": "句容市",
              "en_name": "Jurong"
            },
            {
              "code": "3060",
              "parentCode": "646",
              "name": "润州区",
              "en_name": "Runzhouqu"
            },
            {
              "code": "3393",
              "parentCode": "646",
              "name": "扬中市",
              "en_name": "Yangzhong"
            }
          ]
        }
      ]
    },
    {
      "code": "543",
      "parentCode": "489",
      "name": "江西",
      "en_name": "JIANGXI",
      "sublist": [
        {
          "code": "700",
          "parentCode": "543",
          "name": "抚州",
          "en_name": "FUZHOU",
          "sublist": [
            {
              "code": "3694",
              "parentCode": "700",
              "name": "崇仁县",
              "en_name": "Chongren"
            },
            {
              "code": "3699",
              "parentCode": "700",
              "name": "东乡区",
              "en_name": "Dongxiang"
            },
            {
              "code": "3700",
              "parentCode": "700",
              "name": "广昌县",
              "en_name": "Guangchang"
            },
            {
              "code": "3697",
              "parentCode": "700",
              "name": "金溪县",
              "en_name": "Jinxi"
            },
            {
              "code": "3695",
              "parentCode": "700",
              "name": "乐安县",
              "en_name": "Lean"
            },
            {
              "code": "3692",
              "parentCode": "700",
              "name": "黎川县",
              "en_name": "Lichuan"
            },
            {
              "code": "3690",
              "parentCode": "700",
              "name": "临川区",
              "en_name": "Linchuan"
            },
            {
              "code": "3691",
              "parentCode": "700",
              "name": "南城县",
              "en_name": "Nancheng"
            },
            {
              "code": "3693",
              "parentCode": "700",
              "name": "南丰县",
              "en_name": "Nanfeng"
            },
            {
              "code": "3696",
              "parentCode": "700",
              "name": "宜黄县",
              "en_name": "Yihuang"
            },
            {
              "code": "3698",
              "parentCode": "700",
              "name": "资溪县",
              "en_name": "Zixi"
            }
          ]
        },
        {
          "code": "697",
          "parentCode": "543",
          "name": "赣州",
          "en_name": "GANZHOU",
          "sublist": [
            {
              "code": "3657",
              "parentCode": "697",
              "name": "安远县",
              "en_name": "Anyuan"
            },
            {
              "code": "3656",
              "parentCode": "697",
              "name": "崇义县",
              "en_name": "Chongyi"
            },
            {
              "code": "3654",
              "parentCode": "697",
              "name": "大余县",
              "en_name": "Dayu"
            },
            {
              "code": "3659",
              "parentCode": "697",
              "name": "定南县",
              "en_name": "Dingnan"
            },
            {
              "code": "3652",
              "parentCode": "697",
              "name": "赣县区",
              "en_name": "Gan"
            },
            {
              "code": "3664",
              "parentCode": "697",
              "name": "会昌县",
              "en_name": "Huichang"
            },
            {
              "code": "3658",
              "parentCode": "697",
              "name": "龙南市",
              "en_name": "longnanshi"
            },
            {
              "code": "3651",
              "parentCode": "697",
              "name": "南康区",
              "en_name": "Nankang"
            },
            {
              "code": "3661",
              "parentCode": "697",
              "name": "宁都县",
              "en_name": "Ningdu"
            },
            {
              "code": "3660",
              "parentCode": "697",
              "name": "全南县",
              "en_name": "Annan"
            },
            {
              "code": "3650",
              "parentCode": "697",
              "name": "瑞金市",
              "en_name": "Ruijin"
            },
            {
              "code": "3655",
              "parentCode": "697",
              "name": "上犹县",
              "en_name": "Shangyou"
            },
            {
              "code": "3666",
              "parentCode": "697",
              "name": "石城县",
              "en_name": "Shicheng"
            },
            {
              "code": "3653",
              "parentCode": "697",
              "name": "信丰县",
              "en_name": "Xinfeng"
            },
            {
              "code": "3663",
              "parentCode": "697",
              "name": "兴国县",
              "en_name": "Xingguo"
            },
            {
              "code": "3665",
              "parentCode": "697",
              "name": "寻乌县",
              "en_name": "Xunwu"
            },
            {
              "code": "3662",
              "parentCode": "697",
              "name": "于都县",
              "en_name": "Yudu"
            },
            {
              "code": "3649",
              "parentCode": "697",
              "name": "章贡区",
              "en_name": "Zhanggong"
            }
          ]
        },
        {
          "code": "698",
          "parentCode": "543",
          "name": "吉安",
          "en_name": "JIAN",
          "sublist": [
            {
              "code": "3678",
              "parentCode": "698",
              "name": "安福县",
              "en_name": "Anfu"
            },
            {
              "code": "3670",
              "parentCode": "698",
              "name": "吉安县",
              "en_name": "Jian"
            },
            {
              "code": "3669",
              "parentCode": "698",
              "name": "井冈山市",
              "en_name": "JGS"
            },
            {
              "code": "3671",
              "parentCode": "698",
              "name": "吉水县",
              "en_name": "Jishui"
            },
            {
              "code": "3667",
              "parentCode": "698",
              "name": "吉州区",
              "en_name": "Jizhou"
            },
            {
              "code": "3668",
              "parentCode": "698",
              "name": "青原区",
              "en_name": "Qingyuan"
            },
            {
              "code": "3676",
              "parentCode": "698",
              "name": "遂川县",
              "en_name": "Suichuan"
            },
            {
              "code": "3675",
              "parentCode": "698",
              "name": "泰和县",
              "en_name": "Taihe"
            },
            {
              "code": "3677",
              "parentCode": "698",
              "name": "万安县",
              "en_name": "Wanan"
            },
            {
              "code": "3672",
              "parentCode": "698",
              "name": "峡江县",
              "en_name": "Xiajiang"
            },
            {
              "code": "3673",
              "parentCode": "698",
              "name": "新干县",
              "en_name": "Xingan"
            },
            {
              "code": "3674",
              "parentCode": "698",
              "name": "永丰县",
              "en_name": "Yongfeng"
            },
            {
              "code": "3679",
              "parentCode": "698",
              "name": "永新县",
              "en_name": "Yongxin"
            }
          ]
        },
        {
          "code": "692",
          "parentCode": "543",
          "name": "景德镇",
          "en_name": "JINGDEZHEN",
          "sublist": [
            {
              "code": "3622",
              "parentCode": "692",
              "name": "昌江区",
              "en_name": "Changjiang"
            },
            {
              "code": "3625",
              "parentCode": "692",
              "name": "浮梁县",
              "en_name": "Fuliang"
            },
            {
              "code": "3624",
              "parentCode": "692",
              "name": "乐平市",
              "en_name": "Leping"
            },
            {
              "code": "3623",
              "parentCode": "692",
              "name": "珠山区",
              "en_name": "Zhushan"
            }
          ]
        },
        {
          "code": "694",
          "parentCode": "543",
          "name": "九江",
          "en_name": "JIUJIANG",
          "sublist": [
            {
              "code": "3639",
              "parentCode": "694",
              "name": "德安县",
              "en_name": "Dean"
            },
            {
              "code": "3641",
              "parentCode": "694",
              "name": "都昌县",
              "en_name": "Duchang"
            },
            {
              "code": "3634",
              "parentCode": "694",
              "name": "共青城市",
              "en_name": "Gongqingcheng"
            },
            {
              "code": "3642",
              "parentCode": "694",
              "name": "湖口县",
              "en_name": "Hukou"
            },
            {
              "code": "3635",
              "parentCode": "694",
              "name": "柴桑区",
              "en_name": "Jiujiang"
            },
            {
              "code": "3631",
              "parentCode": "694",
              "name": "濂溪区",
              "en_name": "lianxi"
            },
            {
              "code": "3643",
              "parentCode": "694",
              "name": "彭泽县",
              "en_name": "Pengze"
            },
            {
              "code": "3633",
              "parentCode": "694",
              "name": "瑞昌市",
              "en_name": "Ruichang"
            },
            {
              "code": "3636",
              "parentCode": "694",
              "name": "武宁县",
              "en_name": "Wuning"
            },
            {
              "code": "3640",
              "parentCode": "694",
              "name": "庐山市",
              "en_name": "Xingzi"
            },
            {
              "code": "3637",
              "parentCode": "694",
              "name": "修水县",
              "en_name": "Xiushui"
            },
            {
              "code": "3632",
              "parentCode": "694",
              "name": "浔阳区",
              "en_name": "Xunyang"
            },
            {
              "code": "3638",
              "parentCode": "694",
              "name": "永修县",
              "en_name": "Yongxiu"
            }
          ]
        },
        {
          "code": "691",
          "parentCode": "543",
          "name": "南昌",
          "en_name": "NANCHANG",
          "sublist": [
            {
              "code": "2544",
              "parentCode": "691",
              "name": "安义县",
              "en_name": "Anyixian"
            },
            {
              "code": "2536",
              "parentCode": "691",
              "name": "东湖区",
              "en_name": "Donghuqu"
            },
            {
              "code": "3302",
              "parentCode": "691",
              "name": "红谷滩区",
              "en_name": "Honggutanxinqu"
            },
            {
              "code": "2543",
              "parentCode": "691",
              "name": "进贤县",
              "en_name": "Jinxianxian"
            },
            {
              "code": "3305",
              "parentCode": "691",
              "name": "南昌高新区",
              "en_name": "Nanchanggaoxinqu"
            },
            {
              "code": "3304",
              "parentCode": "691",
              "name": "南昌经济开发区",
              "en_name": "Nanchangjingjikaifaqu"
            },
            {
              "code": "3303",
              "parentCode": "691",
              "name": "南昌临空经济区",
              "en_name": "Nanchanglinkongjingjiqu"
            },
            {
              "code": "3308",
              "parentCode": "691",
              "name": "南昌望城新区",
              "en_name": "Wangchengxinqu"
            },
            {
              "code": "2541",
              "parentCode": "691",
              "name": "南昌县",
              "en_name": "Nanchangxian"
            },
            {
              "code": "3306",
              "parentCode": "691",
              "name": "南昌小蓝经济技术开发区",
              "en_name": "Nanchangxiaolanjingjijishukaifaqu"
            },
            {
              "code": "2539",
              "parentCode": "691",
              "name": "青山湖区",
              "en_name": "Qingshanhuqu"
            },
            {
              "code": "2538",
              "parentCode": "691",
              "name": "青云谱区",
              "en_name": "Qingyunpuqu"
            },
            {
              "code": "3307",
              "parentCode": "691",
              "name": "桑海经济技术开发区",
              "en_name": "Sanghaijingjijishukaifaqu"
            },
            {
              "code": "2537",
              "parentCode": "691",
              "name": "西湖区",
              "en_name": "Xihuqu"
            },
            {
              "code": "2542",
              "parentCode": "691",
              "name": "新建区",
              "en_name": "Xinjianqu"
            }
          ]
        },
        {
          "code": "693",
          "parentCode": "543",
          "name": "萍乡",
          "en_name": "PINGXIANG",
          "sublist": [
            {
              "code": "3626",
              "parentCode": "693",
              "name": "安源区",
              "en_name": "Anyuan"
            },
            {
              "code": "3628",
              "parentCode": "693",
              "name": "莲花县",
              "en_name": "Lianhua"
            },
            {
              "code": "3630",
              "parentCode": "693",
              "name": "芦溪县",
              "en_name": "Luxi"
            },
            {
              "code": "3629",
              "parentCode": "693",
              "name": "上栗县",
              "en_name": "Shangli"
            },
            {
              "code": "3627",
              "parentCode": "693",
              "name": "湘东区",
              "en_name": "Xiangdong"
            }
          ]
        },
        {
          "code": "701",
          "parentCode": "543",
          "name": "上饶",
          "en_name": "SHANGRAO",
          "sublist": [
            {
              "code": "3702",
              "parentCode": "701",
              "name": "德兴市",
              "en_name": "Dexing"
            },
            {
              "code": "3704",
              "parentCode": "701",
              "name": "广丰区",
              "en_name": "Guangfeng"
            },
            {
              "code": "3707",
              "parentCode": "701",
              "name": "横峰县",
              "en_name": "Hengfeng"
            },
            {
              "code": "3710",
              "parentCode": "701",
              "name": "鄱阳县",
              "en_name": "Poyang"
            },
            {
              "code": "3703",
              "parentCode": "701",
              "name": "广信区",
              "en_name": "Shangrao"
            },
            {
              "code": "3711",
              "parentCode": "701",
              "name": "万年县",
              "en_name": "Wannian"
            },
            {
              "code": "3712",
              "parentCode": "701",
              "name": "婺源县",
              "en_name": "Wuyuan"
            },
            {
              "code": "3701",
              "parentCode": "701",
              "name": "信州区",
              "en_name": "Xinzhou"
            },
            {
              "code": "3706",
              "parentCode": "701",
              "name": "铅山县",
              "en_name": "Qianshan"
            },
            {
              "code": "3708",
              "parentCode": "701",
              "name": "弋阳县",
              "en_name": "Yeyang"
            },
            {
              "code": "3709",
              "parentCode": "701",
              "name": "余干县",
              "en_name": "Yugan"
            },
            {
              "code": "3705",
              "parentCode": "701",
              "name": "玉山县",
              "en_name": "Yushan"
            }
          ]
        },
        {
          "code": "695",
          "parentCode": "543",
          "name": "新余",
          "en_name": "XINYU",
          "sublist": [
            {
              "code": "3645",
              "parentCode": "695",
              "name": "分宜县",
              "en_name": "Fenyi"
            },
            {
              "code": "3644",
              "parentCode": "695",
              "name": "渝水区",
              "en_name": "Yushui"
            }
          ]
        },
        {
          "code": "699",
          "parentCode": "543",
          "name": "宜春",
          "en_name": "YICHUN",
          "sublist": [
            {
              "code": "3681",
              "parentCode": "699",
              "name": "丰城市",
              "en_name": "Fengcheng"
            },
            {
              "code": "3684",
              "parentCode": "699",
              "name": "奉新县",
              "en_name": "Fengxin"
            },
            {
              "code": "3683",
              "parentCode": "699",
              "name": "高安市",
              "en_name": "Gaoan"
            },
            {
              "code": "3688",
              "parentCode": "699",
              "name": "靖安县",
              "en_name": "Jingan"
            },
            {
              "code": "3686",
              "parentCode": "699",
              "name": "上高县",
              "en_name": "Shanggao"
            },
            {
              "code": "3689",
              "parentCode": "699",
              "name": "铜鼓县",
              "en_name": "Tonggu"
            },
            {
              "code": "3685",
              "parentCode": "699",
              "name": "万载县",
              "en_name": "Wanzai"
            },
            {
              "code": "3687",
              "parentCode": "699",
              "name": "宜丰县",
              "en_name": "Yifeng"
            },
            {
              "code": "3680",
              "parentCode": "699",
              "name": "袁州区",
              "en_name": "Yuanzhou"
            },
            {
              "code": "3682",
              "parentCode": "699",
              "name": "樟树市",
              "en_name": "Zhangshu"
            }
          ]
        },
        {
          "code": "696",
          "parentCode": "543",
          "name": "鹰潭",
          "en_name": "YINGTAN",
          "sublist": [
            {
              "code": "3647",
              "parentCode": "696",
              "name": "贵溪市",
              "en_name": "Guixi"
            },
            {
              "code": "3646",
              "parentCode": "696",
              "name": "月湖区",
              "en_name": "Yuehu"
            },
            {
              "code": "3648",
              "parentCode": "696",
              "name": "余江区",
              "en_name": "Yujiang"
            }
          ]
        }
      ]
    },
    {
      "code": "536",
      "parentCode": "489",
      "name": "吉林",
      "en_name": "JILIN",
      "sublist": [
        {
          "code": "620",
          "parentCode": "536",
          "name": "白城",
          "en_name": "BAICHENG",
          "sublist": [
            {
              "code": "103209",
              "parentCode": "620",
              "name": "大安市",
              "en_name": "Daan"
            },
            {
              "code": "103207",
              "parentCode": "620",
              "name": "洮北区",
              "en_name": "Taobei"
            },
            {
              "code": "103208",
              "parentCode": "620",
              "name": "洮南市",
              "en_name": "Taonan"
            },
            {
              "code": "103211",
              "parentCode": "620",
              "name": "通榆县",
              "en_name": "Tongyu"
            },
            {
              "code": "103210",
              "parentCode": "620",
              "name": "镇赉县",
              "en_name": "Zhenlai"
            }
          ]
        },
        {
          "code": "618",
          "parentCode": "536",
          "name": "白山",
          "en_name": "BAISHAN",
          "sublist": [
            {
              "code": "103199",
              "parentCode": "618",
              "name": "抚松县",
              "en_name": "Fusong"
            },
            {
              "code": "103196",
              "parentCode": "618",
              "name": "浑江区",
              "en_name": "Hunjiang"
            },
            {
              "code": "103197",
              "parentCode": "618",
              "name": "江源区",
              "en_name": "Jiangyuan"
            },
            {
              "code": "103200",
              "parentCode": "618",
              "name": "靖宇县",
              "en_name": "Jingyu"
            },
            {
              "code": "103198",
              "parentCode": "618",
              "name": "临江市",
              "en_name": "Linjiang"
            },
            {
              "code": "103201",
              "parentCode": "618",
              "name": "长白朝鲜族自治县",
              "en_name": "Changbaichaoxianzuzizhi"
            }
          ]
        },
        {
          "code": "613",
          "parentCode": "536",
          "name": "长春",
          "en_name": "CHANGCHUN",
          "sublist": [
            {
              "code": "10122",
              "parentCode": "613",
              "name": "公主岭市",
              "en_name": "GONGZHULING"
            },
            {
              "code": "2142",
              "parentCode": "613",
              "name": "朝阳区",
              "en_name": "CHAOYANGQU"
            },
            {
              "code": "2389",
              "parentCode": "613",
              "name": "德惠市",
              "en_name": "Dehui"
            },
            {
              "code": "2143",
              "parentCode": "613",
              "name": "二道区",
              "en_name": "Erdao"
            },
            {
              "code": "2145",
              "parentCode": "613",
              "name": "高新开发区",
              "en_name": "Gaoxinkaifaqu"
            },
            {
              "code": "2146",
              "parentCode": "613",
              "name": "经济开发区",
              "en_name": "Jingjikaifaqu"
            },
            {
              "code": "2388",
              "parentCode": "613",
              "name": "九台区",
              "en_name": "Jiutai"
            },
            {
              "code": "2141",
              "parentCode": "613",
              "name": "宽城区",
              "en_name": "Kuancheng"
            },
            {
              "code": "2144",
              "parentCode": "613",
              "name": "绿园区",
              "en_name": "Lvyuan"
            },
            {
              "code": "2140",
              "parentCode": "613",
              "name": "南关区",
              "en_name": "Nanguan"
            },
            {
              "code": "2390",
              "parentCode": "613",
              "name": "农安县",
              "en_name": "Nongan"
            },
            {
              "code": "2147",
              "parentCode": "613",
              "name": "汽车产业开发区",
              "en_name": "Qichechanyekaifaqu"
            },
            {
              "code": "2148",
              "parentCode": "613",
              "name": "双阳区",
              "en_name": "Shuangyang"
            },
            {
              "code": "2387",
              "parentCode": "613",
              "name": "榆树市",
              "en_name": "Yushu"
            }
          ]
        },
        {
          "code": "614",
          "parentCode": "536",
          "name": "吉林市",
          "en_name": "JILINSHI",
          "sublist": [
            {
              "code": "103170",
              "parentCode": "614",
              "name": "昌邑区",
              "en_name": "Changyi"
            },
            {
              "code": "103172",
              "parentCode": "614",
              "name": "船营区",
              "en_name": "Chuanying"
            },
            {
              "code": "103173",
              "parentCode": "614",
              "name": "丰满区",
              "en_name": "Fengman"
            },
            {
              "code": "103175",
              "parentCode": "614",
              "name": "桦甸市",
              "en_name": "Huadian"
            },
            {
              "code": "103174",
              "parentCode": "614",
              "name": "蛟河市",
              "en_name": "Jiaohe"
            },
            {
              "code": "103171",
              "parentCode": "614",
              "name": "龙潭区",
              "en_name": "Longtan"
            },
            {
              "code": "103177",
              "parentCode": "614",
              "name": "磐石市",
              "en_name": "Panshi"
            },
            {
              "code": "103176",
              "parentCode": "614",
              "name": "舒兰市",
              "en_name": "Shulan"
            },
            {
              "code": "103178",
              "parentCode": "614",
              "name": "永吉县",
              "en_name": "Yongji"
            }
          ]
        },
        {
          "code": "616",
          "parentCode": "536",
          "name": "辽源",
          "en_name": "LIAOYUAN",
          "sublist": [
            {
              "code": "103187",
              "parentCode": "616",
              "name": "东丰县",
              "en_name": "Dongfeng"
            },
            {
              "code": "103188",
              "parentCode": "616",
              "name": "东辽县",
              "en_name": "Dongliao"
            },
            {
              "code": "103185",
              "parentCode": "616",
              "name": "龙山区",
              "en_name": "Longshan"
            },
            {
              "code": "103186",
              "parentCode": "616",
              "name": "西安区",
              "en_name": "Xian"
            }
          ]
        },
        {
          "code": "615",
          "parentCode": "536",
          "name": "四平",
          "en_name": "SIPING",
          "sublist": [
            {
              "code": "103183",
              "parentCode": "615",
              "name": "梨树县",
              "en_name": "Lishu"
            },
            {
              "code": "103182",
              "parentCode": "615",
              "name": "双辽市",
              "en_name": "Shuangliao"
            },
            {
              "code": "103180",
              "parentCode": "615",
              "name": "铁东区",
              "en_name": "Tiedong"
            },
            {
              "code": "103179",
              "parentCode": "615",
              "name": "铁西区",
              "en_name": "Tiexi"
            },
            {
              "code": "103184",
              "parentCode": "615",
              "name": "伊通满族自治县",
              "en_name": "Yitongmanzuzizhi"
            }
          ]
        },
        {
          "code": "619",
          "parentCode": "536",
          "name": "松原",
          "en_name": "SONGYUAN",
          "sublist": [
            {
              "code": "103203",
              "parentCode": "619",
              "name": "扶余市",
              "en_name": "Fuyu"
            },
            {
              "code": "103202",
              "parentCode": "619",
              "name": "宁江区",
              "en_name": "Ningjiang"
            },
            {
              "code": "103206",
              "parentCode": "619",
              "name": "乾安县",
              "en_name": "Qianan"
            },
            {
              "code": "103204",
              "parentCode": "619",
              "name": "前郭尔罗斯蒙古族自治县",
              "en_name": "Qianguoerluosimengguzuzizhi"
            },
            {
              "code": "103205",
              "parentCode": "619",
              "name": "长岭县",
              "en_name": "Changling"
            }
          ]
        },
        {
          "code": "617",
          "parentCode": "536",
          "name": "通化",
          "en_name": "TONGHUA",
          "sublist": [
            {
              "code": "4001",
              "parentCode": "617",
              "name": "东昌区",
              "en_name": "DONGCHANGQU"
            },
            {
              "code": "4002",
              "parentCode": "617",
              "name": "二道江区",
              "en_name": "ERDAOJIANGQU"
            },
            {
              "code": "4004",
              "parentCode": "617",
              "name": "辉南县",
              "en_name": "HUINANXIAN"
            },
            {
              "code": "4007",
              "parentCode": "617",
              "name": "集安市",
              "en_name": "JIANSHI"
            },
            {
              "code": "4005",
              "parentCode": "617",
              "name": "柳河县",
              "en_name": "LIUHEXIAN"
            },
            {
              "code": "4006",
              "parentCode": "617",
              "name": "梅河口市",
              "en_name": "MEIHEKOUSHI"
            },
            {
              "code": "4003",
              "parentCode": "617",
              "name": "通化县",
              "en_name": "TONGHUAXIAN"
            }
          ]
        },
        {
          "code": "621",
          "parentCode": "536",
          "name": "延边",
          "en_name": "YANBIAN",
          "sublist": [
            {
              "code": "10198",
              "parentCode": "621",
              "name": "珲春市",
              "en_name": "HUNCHUN"
            },
            {
              "code": "103219",
              "parentCode": "621",
              "name": "安图县",
              "en_name": "Antu"
            },
            {
              "code": "103214",
              "parentCode": "621",
              "name": "敦化市",
              "en_name": "Dunhua"
            },
            {
              "code": "103217",
              "parentCode": "621",
              "name": "和龙市",
              "en_name": "Helong"
            },
            {
              "code": "103216",
              "parentCode": "621",
              "name": "龙井市",
              "en_name": "Longjing"
            },
            {
              "code": "103213",
              "parentCode": "621",
              "name": "图们市",
              "en_name": "Tumen"
            },
            {
              "code": "103218",
              "parentCode": "621",
              "name": "汪清县",
              "en_name": "Wangqing"
            },
            {
              "code": "103212",
              "parentCode": "621",
              "name": "延吉市",
              "en_name": "Yanji"
            }
          ]
        }
      ]
    },
    {
      "code": "535",
      "parentCode": "489",
      "name": "辽宁",
      "en_name": "LIAONING",
      "sublist": [
        {
          "code": "601",
          "parentCode": "535",
          "name": "鞍山",
          "en_name": "ANSHAN",
          "sublist": [
            {
              "code": "10070",
              "parentCode": "601",
              "name": "海城市",
              "en_name": "HAICHENG"
            },
            {
              "code": "103082",
              "parentCode": "601",
              "name": "立山区",
              "en_name": "Lishan"
            },
            {
              "code": "103083",
              "parentCode": "601",
              "name": "千山区",
              "en_name": "Qianshan"
            },
            {
              "code": "103085",
              "parentCode": "601",
              "name": "台安县",
              "en_name": "Taian"
            },
            {
              "code": "103080",
              "parentCode": "601",
              "name": "铁东区",
              "en_name": "Tiedong"
            },
            {
              "code": "103081",
              "parentCode": "601",
              "name": "铁西区",
              "en_name": "Tiexi"
            },
            {
              "code": "103086",
              "parentCode": "601",
              "name": "岫岩满族自治县",
              "en_name": "Xiuyanmanzuzizhi"
            }
          ]
        },
        {
          "code": "603",
          "parentCode": "535",
          "name": "本溪",
          "en_name": "BENXI",
          "sublist": [
            {
              "code": "103098",
              "parentCode": "603",
              "name": "本溪满族自治县",
              "en_name": "Benximanzuzizhi"
            },
            {
              "code": "103099",
              "parentCode": "603",
              "name": "桓仁满族自治县",
              "en_name": "Huanrenmanzuzizhi"
            },
            {
              "code": "103096",
              "parentCode": "603",
              "name": "明山区",
              "en_name": "Mingshan"
            },
            {
              "code": "103097",
              "parentCode": "603",
              "name": "南芬区",
              "en_name": "Nanfen"
            },
            {
              "code": "103094",
              "parentCode": "603",
              "name": "平山区",
              "en_name": "Pingshan"
            },
            {
              "code": "103095",
              "parentCode": "603",
              "name": "溪湖区",
              "en_name": "Xihu"
            }
          ]
        },
        {
          "code": "600",
          "parentCode": "535",
          "name": "大连",
          "en_name": "DALIAN",
          "sublist": [
            {
              "code": "2398",
              "parentCode": "600",
              "name": "长兴岛",
              "en_name": "Changxing"
            },
            {
              "code": "2184",
              "parentCode": "600",
              "name": "甘井子区",
              "en_name": "Ganjingzi"
            },
            {
              "code": "2185",
              "parentCode": "600",
              "name": "高新园区",
              "en_name": "Gaoxinyuanqu"
            },
            {
              "code": "2188",
              "parentCode": "600",
              "name": "金州区",
              "en_name": "Jinzhou"
            },
            {
              "code": "2186",
              "parentCode": "600",
              "name": "开发区",
              "en_name": "Kaifaqu"
            },
            {
              "code": "2187",
              "parentCode": "600",
              "name": "旅顺口区",
              "en_name": "Lvshunkou"
            },
            {
              "code": "2394",
              "parentCode": "600",
              "name": "普兰店区",
              "en_name": "Pulandian"
            },
            {
              "code": "2183",
              "parentCode": "600",
              "name": "沙河口区",
              "en_name": "Shahekou"
            },
            {
              "code": "2395",
              "parentCode": "600",
              "name": "瓦房店市",
              "en_name": "Wafangdian"
            },
            {
              "code": "2181",
              "parentCode": "600",
              "name": "西岗区",
              "en_name": "Xigang"
            },
            {
              "code": "2397",
              "parentCode": "600",
              "name": "长海县",
              "en_name": "Changhai"
            },
            {
              "code": "2182",
              "parentCode": "600",
              "name": "中山区",
              "en_name": "Zhongshan"
            },
            {
              "code": "2396",
              "parentCode": "600",
              "name": "庄河市",
              "en_name": "Zhuanghe"
            }
          ]
        },
        {
          "code": "604",
          "parentCode": "535",
          "name": "丹东",
          "en_name": "DANDONG",
          "sublist": [
            {
              "code": "931",
              "parentCode": "604",
              "name": "东港市",
              "en_name": "DONGGANG"
            },
            {
              "code": "103104",
              "parentCode": "604",
              "name": "凤城市",
              "en_name": "Fengcheng"
            },
            {
              "code": "103105",
              "parentCode": "604",
              "name": "宽甸满族自治县",
              "en_name": "Kuandianmanzuzizhi"
            },
            {
              "code": "103100",
              "parentCode": "604",
              "name": "元宝区",
              "en_name": "Yuanbao"
            },
            {
              "code": "103102",
              "parentCode": "604",
              "name": "振安区",
              "en_name": "Zhenan"
            },
            {
              "code": "103101",
              "parentCode": "604",
              "name": "振兴区",
              "en_name": "Zhenxing"
            }
          ]
        },
        {
          "code": "602",
          "parentCode": "535",
          "name": "抚顺",
          "en_name": "FUSHUN",
          "sublist": [
            {
              "code": "103088",
              "parentCode": "602",
              "name": "东洲区",
              "en_name": "Dongzhou"
            },
            {
              "code": "103091",
              "parentCode": "602",
              "name": "抚顺县",
              "en_name": "Fushun"
            },
            {
              "code": "103092",
              "parentCode": "602",
              "name": "清原满族自治县",
              "en_name": "Qingyuanmanzuzizhi"
            },
            {
              "code": "103090",
              "parentCode": "602",
              "name": "顺城区",
              "en_name": "Shuncheng"
            },
            {
              "code": "103089",
              "parentCode": "602",
              "name": "望花区",
              "en_name": "Wanghua"
            },
            {
              "code": "103093",
              "parentCode": "602",
              "name": "新宾满族自治县",
              "en_name": "Xinbinmanzuzizhi"
            },
            {
              "code": "103087",
              "parentCode": "602",
              "name": "新抚区",
              "en_name": "Xinfu"
            }
          ]
        },
        {
          "code": "607",
          "parentCode": "535",
          "name": "阜新",
          "en_name": "FUXIN",
          "sublist": [
            {
              "code": "103124",
              "parentCode": "607",
              "name": "阜新蒙古族自治县",
              "en_name": "Huxinmengguzuzizhi"
            },
            {
              "code": "103119",
              "parentCode": "607",
              "name": "海州区",
              "en_name": "Haizhou"
            },
            {
              "code": "103122",
              "parentCode": "607",
              "name": "清河门区",
              "en_name": "Qinghemen"
            },
            {
              "code": "103121",
              "parentCode": "607",
              "name": "太平区",
              "en_name": "Taiping"
            },
            {
              "code": "103123",
              "parentCode": "607",
              "name": "细河区",
              "en_name": "Xihe"
            },
            {
              "code": "103120",
              "parentCode": "607",
              "name": "新邱区",
              "en_name": "Xinqiu"
            },
            {
              "code": "103125",
              "parentCode": "607",
              "name": "彰武县",
              "en_name": "Zhangwu"
            }
          ]
        },
        {
          "code": "612",
          "parentCode": "535",
          "name": "葫芦岛",
          "en_name": "HULUDAO",
          "sublist": [
            {
              "code": "10023",
              "parentCode": "612",
              "name": "兴城市",
              "en_name": "XINGCHENG"
            },
            {
              "code": "103156",
              "parentCode": "612",
              "name": "建昌县",
              "en_name": "Jianchang"
            },
            {
              "code": "103151",
              "parentCode": "612",
              "name": "连山区",
              "en_name": "Lianshan"
            },
            {
              "code": "103152",
              "parentCode": "612",
              "name": "龙港区",
              "en_name": "Longgang"
            },
            {
              "code": "103153",
              "parentCode": "612",
              "name": "南票区",
              "en_name": "Nanpiao"
            },
            {
              "code": "103155",
              "parentCode": "612",
              "name": "绥中县",
              "en_name": "Suizhong"
            }
          ]
        },
        {
          "code": "605",
          "parentCode": "535",
          "name": "锦州",
          "en_name": "JINZHOU",
          "sublist": [
            {
              "code": "103109",
              "parentCode": "605",
              "name": "北镇市",
              "en_name": "Beizhen"
            },
            {
              "code": "103106",
              "parentCode": "605",
              "name": "古塔区",
              "en_name": "Guta"
            },
            {
              "code": "103111",
              "parentCode": "605",
              "name": "黑山县",
              "en_name": "Heishan"
            },
            {
              "code": "103107",
              "parentCode": "605",
              "name": "凌海市",
              "en_name": "Linghai"
            },
            {
              "code": "103108",
              "parentCode": "605",
              "name": "凌河区",
              "en_name": "Linghe"
            },
            {
              "code": "103110",
              "parentCode": "605",
              "name": "太和区",
              "en_name": "Taihe"
            },
            {
              "code": "103112",
              "parentCode": "605",
              "name": "义县",
              "en_name": "Yi"
            }
          ]
        },
        {
          "code": "608",
          "parentCode": "535",
          "name": "辽阳",
          "en_name": "LIAOYANG",
          "sublist": [
            {
              "code": "103126",
              "parentCode": "608",
              "name": "白塔区",
              "en_name": "Baita"
            },
            {
              "code": "103131",
              "parentCode": "608",
              "name": "灯塔市",
              "en_name": "Dengta"
            },
            {
              "code": "103129",
              "parentCode": "608",
              "name": "弓长岭区",
              "en_name": "Gongchangling"
            },
            {
              "code": "103128",
              "parentCode": "608",
              "name": "宏伟区",
              "en_name": "Hongwei"
            },
            {
              "code": "103132",
              "parentCode": "608",
              "name": "辽阳县",
              "en_name": "Liaoyang"
            },
            {
              "code": "103130",
              "parentCode": "608",
              "name": "太子河区",
              "en_name": "Taizihe"
            },
            {
              "code": "103127",
              "parentCode": "608",
              "name": "文圣区",
              "en_name": "Wensheng"
            }
          ]
        },
        {
          "code": "609",
          "parentCode": "535",
          "name": "盘锦",
          "en_name": "PANJIN",
          "sublist": [
            {
              "code": "103135",
              "parentCode": "609",
              "name": "大洼区",
              "en_name": "Dawa"
            },
            {
              "code": "103136",
              "parentCode": "609",
              "name": "盘山县",
              "en_name": "Panshan"
            },
            {
              "code": "103133",
              "parentCode": "609",
              "name": "双台子区",
              "en_name": "Shuangtaizi"
            },
            {
              "code": "103134",
              "parentCode": "609",
              "name": "兴隆台区",
              "en_name": "Xinglongtai"
            }
          ]
        },
        {
          "code": "599",
          "parentCode": "535",
          "name": "沈阳",
          "en_name": "SHENYANG",
          "sublist": [
            {
              "code": "2129",
              "parentCode": "599",
              "name": "大东区",
              "en_name": "Dadong"
            },
            {
              "code": "2132",
              "parentCode": "599",
              "name": "浑南区",
              "en_name": "hunnan"
            },
            {
              "code": "2386",
              "parentCode": "599",
              "name": "法库县",
              "en_name": "Faku"
            },
            {
              "code": "2126",
              "parentCode": "599",
              "name": "和平区",
              "en_name": "Heping"
            },
            {
              "code": "2128",
              "parentCode": "599",
              "name": "皇姑区",
              "en_name": "Huanggu"
            },
            {
              "code": "3033",
              "parentCode": "599",
              "name": "经济技术开发区",
              "en_name": "Jingjijishukaifaqu"
            },
            {
              "code": "2385",
              "parentCode": "599",
              "name": "康平县",
              "en_name": "Kangping"
            },
            {
              "code": "2384",
              "parentCode": "599",
              "name": "辽中区",
              "en_name": "Liaozhong"
            },
            {
              "code": "2382",
              "parentCode": "599",
              "name": "棋盘山开发区",
              "en_name": "Qipanshan"
            },
            {
              "code": "2134",
              "parentCode": "599",
              "name": "沈北新区",
              "en_name": "Shenbeixinqu"
            },
            {
              "code": "2127",
              "parentCode": "599",
              "name": "沈河区",
              "en_name": "Shenhe"
            },
            {
              "code": "2135",
              "parentCode": "599",
              "name": "苏家屯区",
              "en_name": "Sujiatun"
            },
            {
              "code": "2130",
              "parentCode": "599",
              "name": "铁西区",
              "en_name": "Tiexi"
            },
            {
              "code": "2383",
              "parentCode": "599",
              "name": "新民市",
              "en_name": "Xinmin"
            },
            {
              "code": "2133",
              "parentCode": "599",
              "name": "于洪区",
              "en_name": "Yuhong"
            }
          ]
        },
        {
          "code": "610",
          "parentCode": "535",
          "name": "铁岭",
          "en_name": "TIELING",
          "sublist": [
            {
              "code": "10080",
              "parentCode": "610",
              "name": "昌图县",
              "en_name": "CHANGTU"
            },
            {
              "code": "10144",
              "parentCode": "610",
              "name": "开原市",
              "en_name": "KAIYUAN"
            },
            {
              "code": "103139",
              "parentCode": "610",
              "name": "调兵山市",
              "en_name": "Diaobingshan"
            },
            {
              "code": "103138",
              "parentCode": "610",
              "name": "清河区",
              "en_name": "Qinghe"
            },
            {
              "code": "103141",
              "parentCode": "610",
              "name": "铁岭县",
              "en_name": "Tieling"
            },
            {
              "code": "103142",
              "parentCode": "610",
              "name": "西丰县",
              "en_name": "Xifeng"
            },
            {
              "code": "103137",
              "parentCode": "610",
              "name": "银州区",
              "en_name": "Yinzhou"
            }
          ]
        },
        {
          "code": "606",
          "parentCode": "535",
          "name": "营口",
          "en_name": "YINGKOU",
          "sublist": [
            {
              "code": "3034",
              "parentCode": "606",
              "name": "鲅鱼圈区",
              "en_name": "Bayuquan"
            },
            {
              "code": "3035",
              "parentCode": "606",
              "name": "大石桥市",
              "en_name": "Dashiqiao"
            },
            {
              "code": "103117",
              "parentCode": "606",
              "name": "盖州市",
              "en_name": "Gaizhou"
            },
            {
              "code": "103116",
              "parentCode": "606",
              "name": "老边区",
              "en_name": "Laobian"
            },
            {
              "code": "103114",
              "parentCode": "606",
              "name": "西市区",
              "en_name": "Xishi"
            },
            {
              "code": "103113",
              "parentCode": "606",
              "name": "站前区",
              "en_name": "Zhanqian"
            }
          ]
        },
        {
          "code": "611",
          "parentCode": "535",
          "name": "朝阳",
          "en_name": "CHAOYANG",
          "sublist": [
            {
              "code": "103146",
              "parentCode": "611",
              "name": "北票市",
              "en_name": "Beipiao"
            },
            {
              "code": "103149",
              "parentCode": "611",
              "name": "建平县",
              "en_name": "Jianping"
            },
            {
              "code": "103150",
              "parentCode": "611",
              "name": "喀喇沁左翼蒙古族自治县",
              "en_name": "Kalaqinzuoyimengguzuzizhi"
            },
            {
              "code": "103147",
              "parentCode": "611",
              "name": "凌源市",
              "en_name": "Lingyuan"
            },
            {
              "code": "103145",
              "parentCode": "611",
              "name": "龙城区",
              "en_name": "Longcheng"
            },
            {
              "code": "103144",
              "parentCode": "611",
              "name": "双塔区",
              "en_name": "Shuangta"
            },
            {
              "code": "103148",
              "parentCode": "611",
              "name": "朝阳县",
              "en_name": "Zhaoyang"
            }
          ]
        }
      ]
    },
    {
      "code": "534",
      "parentCode": "489",
      "name": "内蒙古",
      "en_name": "NEIMENGGU",
      "sublist": [
        {
          "code": "598",
          "parentCode": "534",
          "name": "阿拉善盟",
          "en_name": "ALASHAN",
          "sublist": [
            {
              "code": "103051",
              "parentCode": "598",
              "name": "阿拉善右旗",
              "en_name": "Alashanyouqi"
            },
            {
              "code": "103050",
              "parentCode": "598",
              "name": "阿拉善左旗",
              "en_name": "Alashanzuoqi"
            },
            {
              "code": "103052",
              "parentCode": "598",
              "name": "额济纳旗",
              "en_name": "Ejinaqi"
            }
          ]
        },
        {
          "code": "588",
          "parentCode": "534",
          "name": "包头",
          "en_name": "BAOTOU",
          "sublist": [
            {
              "code": "2964",
              "parentCode": "588",
              "name": "白云鄂博矿区",
              "en_name": "Baiyunebokuang"
            },
            {
              "code": "2968",
              "parentCode": "588",
              "name": "达尔罕茂明安联合旗",
              "en_name": "Daerhanmaominganlianheqi"
            },
            {
              "code": "2960",
              "parentCode": "588",
              "name": "东河区",
              "en_name": "Donghe"
            },
            {
              "code": "2967",
              "parentCode": "588",
              "name": "固阳县",
              "en_name": "Guyang"
            },
            {
              "code": "2965",
              "parentCode": "588",
              "name": "九原区",
              "en_name": "Jiuyuan"
            },
            {
              "code": "2961",
              "parentCode": "588",
              "name": "昆都仑区",
              "en_name": "Kundulun"
            },
            {
              "code": "2962",
              "parentCode": "588",
              "name": "青山区",
              "en_name": "Qingshan"
            },
            {
              "code": "2963",
              "parentCode": "588",
              "name": "石拐区",
              "en_name": "Shiguai"
            },
            {
              "code": "2966",
              "parentCode": "588",
              "name": "土默特右旗",
              "en_name": "Tumoteyouqi"
            }
          ]
        },
        {
          "code": "597",
          "parentCode": "534",
          "name": "巴彦淖尔",
          "en_name": "BAYANNAOER",
          "sublist": [
            {
              "code": "103045",
              "parentCode": "597",
              "name": "磴口县",
              "en_name": "Dengkou"
            },
            {
              "code": "103049",
              "parentCode": "597",
              "name": "杭锦后旗",
              "en_name": "Hangjinhouqi"
            },
            {
              "code": "103043",
              "parentCode": "597",
              "name": "临河区",
              "en_name": "Linhe"
            },
            {
              "code": "103048",
              "parentCode": "597",
              "name": "乌拉特后旗",
              "en_name": "Wulatehouqi"
            },
            {
              "code": "103046",
              "parentCode": "597",
              "name": "乌拉特前旗",
              "en_name": "Wulateqianqi"
            },
            {
              "code": "103047",
              "parentCode": "597",
              "name": "乌拉特中旗",
              "en_name": "Wulatezhongqi"
            },
            {
              "code": "103044",
              "parentCode": "597",
              "name": "五原县",
              "en_name": "Wuyuan"
            }
          ]
        },
        {
          "code": "590",
          "parentCode": "534",
          "name": "赤峰",
          "en_name": "CHIFENG",
          "sublist": [
            {
              "code": "2975",
              "parentCode": "590",
              "name": "阿鲁科尔沁旗",
              "en_name": "Alukeerqinqi"
            },
            {
              "code": "2983",
              "parentCode": "590",
              "name": "敖汉旗",
              "en_name": "Aohanqi"
            },
            {
              "code": "2977",
              "parentCode": "590",
              "name": "巴林右旗",
              "en_name": "Balinyouqi"
            },
            {
              "code": "2976",
              "parentCode": "590",
              "name": "巴林左旗",
              "en_name": "Balinzuoqi"
            },
            {
              "code": "2972",
              "parentCode": "590",
              "name": "红山区",
              "en_name": "Hongshan"
            },
            {
              "code": "2981",
              "parentCode": "590",
              "name": "喀喇沁旗",
              "en_name": "Kelaqinqi"
            },
            {
              "code": "2979",
              "parentCode": "590",
              "name": "克什克腾旗",
              "en_name": "Keshiketengqi"
            },
            {
              "code": "2978",
              "parentCode": "590",
              "name": "林西县",
              "en_name": "Linxi"
            },
            {
              "code": "2982",
              "parentCode": "590",
              "name": "宁城县",
              "en_name": "Ningcheng"
            },
            {
              "code": "2974",
              "parentCode": "590",
              "name": "松山区",
              "en_name": "Songshan"
            },
            {
              "code": "2980",
              "parentCode": "590",
              "name": "翁牛特旗",
              "en_name": "Wongniuteqi"
            },
            {
              "code": "2973",
              "parentCode": "590",
              "name": "元宝山区",
              "en_name": "Yuanbao"
            }
          ]
        },
        {
          "code": "592",
          "parentCode": "534",
          "name": "鄂尔多斯",
          "en_name": "EERDUOSI",
          "sublist": [
            {
              "code": "104018",
              "parentCode": "592",
              "name": "康巴什区",
              "en_name": "Kangbashiqu"
            },
            {
              "code": "104019",
              "parentCode": "592",
              "name": "乌审旗",
              "en_name": "Wushenqi"
            },
            {
              "code": "2993",
              "parentCode": "592",
              "name": "达拉特旗",
              "en_name": "Dalateqi"
            },
            {
              "code": "2992",
              "parentCode": "592",
              "name": "东胜区",
              "en_name": "Dongsheng"
            },
            {
              "code": "2996",
              "parentCode": "592",
              "name": "鄂托克旗",
              "en_name": "Etuokeqi"
            },
            {
              "code": "2995",
              "parentCode": "592",
              "name": "鄂托克前旗",
              "en_name": "Etuokeqianqi"
            },
            {
              "code": "2997",
              "parentCode": "592",
              "name": "杭锦旗",
              "en_name": "Hangjinqi"
            },
            {
              "code": "2999",
              "parentCode": "592",
              "name": "伊金霍洛旗",
              "en_name": "Yijinhuoluoqi"
            },
            {
              "code": "2994",
              "parentCode": "592",
              "name": "准格尔旗",
              "en_name": "Zhungeerqi"
            }
          ]
        },
        {
          "code": "587",
          "parentCode": "534",
          "name": "呼和浩特",
          "en_name": "HUHEHAOTE",
          "sublist": [
            {
              "code": "2957",
              "parentCode": "587",
              "name": "和林格尔县",
              "en_name": "Helingeer"
            },
            {
              "code": "2952",
              "parentCode": "587",
              "name": "回民区",
              "en_name": "Huimin"
            },
            {
              "code": "2958",
              "parentCode": "587",
              "name": "清水河县",
              "en_name": "Qingshuihe"
            },
            {
              "code": "2954",
              "parentCode": "587",
              "name": "赛罕区",
              "en_name": "Saihan"
            },
            {
              "code": "2955",
              "parentCode": "587",
              "name": "土默特左旗",
              "en_name": "Tumotezuqi"
            },
            {
              "code": "2956",
              "parentCode": "587",
              "name": "托克托县",
              "en_name": "Tuoketuo"
            },
            {
              "code": "2959",
              "parentCode": "587",
              "name": "武川县",
              "en_name": "Wuchuan"
            },
            {
              "code": "2951",
              "parentCode": "587",
              "name": "新城区",
              "en_name": "Xincheng"
            },
            {
              "code": "2953",
              "parentCode": "587",
              "name": "玉泉区",
              "en_name": "Yuquan"
            }
          ]
        },
        {
          "code": "593",
          "parentCode": "534",
          "name": "呼伦贝尔",
          "en_name": "HULUNBEIER",
          "sublist": [
            {
              "code": "10157",
              "parentCode": "593",
              "name": "满洲里市",
              "en_name": "MANZHOULI"
            },
            {
              "code": "103012",
              "parentCode": "593",
              "name": "阿荣旗",
              "en_name": "Arongqi"
            },
            {
              "code": "103009",
              "parentCode": "593",
              "name": "陈巴尔虎旗",
              "en_name": "Chenbaerhuqi"
            },
            {
              "code": "103004",
              "parentCode": "593",
              "name": "额尔古纳市",
              "en_name": "Ererguna"
            },
            {
              "code": "103007",
              "parentCode": "593",
              "name": "鄂伦春自治旗",
              "en_name": "Elunchunzizhiqi"
            },
            {
              "code": "103008",
              "parentCode": "593",
              "name": "鄂温克族自治旗",
              "en_name": "Ewenkezuzizhiqi"
            },
            {
              "code": "103005",
              "parentCode": "593",
              "name": "根河市",
              "en_name": "Genhe"
            },
            {
              "code": "3000",
              "parentCode": "593",
              "name": "海拉尔区",
              "en_name": "Hailaer"
            },
            {
              "code": "103006",
              "parentCode": "593",
              "name": "莫力达瓦达斡尔族自治旗",
              "en_name": "Molidawadawoerzuzizhiqi"
            },
            {
              "code": "103011",
              "parentCode": "593",
              "name": "新巴尔虎右旗",
              "en_name": "Xinbaerhuyouqi"
            },
            {
              "code": "103010",
              "parentCode": "593",
              "name": "新巴尔虎左旗",
              "en_name": "Xinbaerhuzuoqi"
            },
            {
              "code": "103002",
              "parentCode": "593",
              "name": "牙克石市",
              "en_name": "Yakeshi"
            },
            {
              "code": "103013",
              "parentCode": "593",
              "name": "扎赉诺尔区",
              "en_name": "Zhalainuoer"
            },
            {
              "code": "103003",
              "parentCode": "593",
              "name": "扎兰屯市",
              "en_name": "Zhalantun"
            }
          ]
        },
        {
          "code": "591",
          "parentCode": "534",
          "name": "通辽",
          "en_name": "TONGLIAO",
          "sublist": [
            {
              "code": "2985",
              "parentCode": "591",
              "name": "霍林郭勒市",
              "en_name": "Huolinguole"
            },
            {
              "code": "2988",
              "parentCode": "591",
              "name": "开鲁县",
              "en_name": "Kailu"
            },
            {
              "code": "2984",
              "parentCode": "591",
              "name": "科尔沁区",
              "en_name": "Keerqin"
            },
            {
              "code": "2987",
              "parentCode": "591",
              "name": "科尔沁左翼后旗",
              "en_name": "Keerqinzuoyihouqi"
            },
            {
              "code": "2986",
              "parentCode": "591",
              "name": "科尔沁左翼中旗",
              "en_name": "Keerqinzuoyizhongqi"
            },
            {
              "code": "2989",
              "parentCode": "591",
              "name": "库伦旗",
              "en_name": "Kulun"
            },
            {
              "code": "2990",
              "parentCode": "591",
              "name": "奈曼旗",
              "en_name": "Naiman"
            },
            {
              "code": "2991",
              "parentCode": "591",
              "name": "扎鲁特旗",
              "en_name": "Zhaluteqi"
            }
          ]
        },
        {
          "code": "589",
          "parentCode": "534",
          "name": "乌海",
          "en_name": "WUHAI",
          "sublist": [
            {
              "code": "2969",
              "parentCode": "589",
              "name": "海勃湾区",
              "en_name": "Haibowan"
            },
            {
              "code": "2970",
              "parentCode": "589",
              "name": "海南区",
              "en_name": "Hainan"
            },
            {
              "code": "2971",
              "parentCode": "589",
              "name": "乌达区",
              "en_name": "Wuda"
            }
          ]
        },
        {
          "code": "596",
          "parentCode": "534",
          "name": "乌兰察布",
          "en_name": "WULANCHABU",
          "sublist": [
            {
              "code": "103041",
              "parentCode": "596",
              "name": "察哈尔右翼后旗",
              "en_name": "Chahaeryouqihouqi"
            },
            {
              "code": "103039",
              "parentCode": "596",
              "name": "察哈尔右翼前旗",
              "en_name": "Chahaeryouyiqianqi"
            },
            {
              "code": "103040",
              "parentCode": "596",
              "name": "察哈尔右翼中旗",
              "en_name": "Chahaeryouqizhongqi"
            },
            {
              "code": "103033",
              "parentCode": "596",
              "name": "丰镇市",
              "en_name": "Fengzhen"
            },
            {
              "code": "103035",
              "parentCode": "596",
              "name": "化德县",
              "en_name": "Huade"
            },
            {
              "code": "103032",
              "parentCode": "596",
              "name": "集宁区",
              "en_name": "Jining"
            },
            {
              "code": "103038",
              "parentCode": "596",
              "name": "凉城县",
              "en_name": "Liangcheng"
            },
            {
              "code": "3036",
              "parentCode": "596",
              "name": "商都县",
              "en_name": "Shangdu"
            },
            {
              "code": "103042",
              "parentCode": "596",
              "name": "四子王旗",
              "en_name": "Siziwangqi"
            },
            {
              "code": "3037",
              "parentCode": "596",
              "name": "兴和县",
              "en_name": "Xinghe"
            },
            {
              "code": "103034",
              "parentCode": "596",
              "name": "卓资县",
              "en_name": "Zhuozi"
            }
          ]
        },
        {
          "code": "595",
          "parentCode": "534",
          "name": "锡林郭勒盟",
          "en_name": "XILINGUOLE",
          "sublist": [
            {
              "code": "103022",
              "parentCode": "595",
              "name": "阿巴嘎旗",
              "en_name": "Abagaqi"
            },
            {
              "code": "103025",
              "parentCode": "595",
              "name": "东乌珠穆沁旗",
              "en_name": "Dongwuzhumuqinqi"
            },
            {
              "code": "103031",
              "parentCode": "595",
              "name": "多伦县",
              "en_name": "Duolun"
            },
            {
              "code": "103020",
              "parentCode": "595",
              "name": "二连浩特市",
              "en_name": "Erlianhaote"
            },
            {
              "code": "103024",
              "parentCode": "595",
              "name": "苏尼特右旗",
              "en_name": "Suniteyouqi"
            },
            {
              "code": "103023",
              "parentCode": "595",
              "name": "苏尼特左旗",
              "en_name": "Sunitezuoqi"
            },
            {
              "code": "103027",
              "parentCode": "595",
              "name": "太仆寺旗",
              "en_name": "Taipusiqi"
            },
            {
              "code": "103028",
              "parentCode": "595",
              "name": "镶黄旗",
              "en_name": "Xianghuangqi"
            },
            {
              "code": "103021",
              "parentCode": "595",
              "name": "锡林浩特市",
              "en_name": "Xilinhaote"
            },
            {
              "code": "103026",
              "parentCode": "595",
              "name": "西乌珠穆沁旗",
              "en_name": "Xiwuzhumuqinqi"
            },
            {
              "code": "103030",
              "parentCode": "595",
              "name": "正蓝旗",
              "en_name": "Zhenglanqi"
            },
            {
              "code": "103029",
              "parentCode": "595",
              "name": "正镶白旗",
              "en_name": "Zhengxiangbaiqi"
            }
          ]
        },
        {
          "code": "594",
          "parentCode": "534",
          "name": "兴安盟",
          "en_name": "XINGAN",
          "sublist": [
            {
              "code": "103015",
              "parentCode": "594",
              "name": "阿尔山市",
              "en_name": "Aershan"
            },
            {
              "code": "103016",
              "parentCode": "594",
              "name": "科尔沁右翼前旗",
              "en_name": "Keerqinyouyiqianqi"
            },
            {
              "code": "103017",
              "parentCode": "594",
              "name": "科尔沁右翼中旗",
              "en_name": "Keerqinyouyizhongqi"
            },
            {
              "code": "103019",
              "parentCode": "594",
              "name": "突泉县",
              "en_name": "Tuquan"
            },
            {
              "code": "103014",
              "parentCode": "594",
              "name": "乌兰浩特市",
              "en_name": "Wulanhaoteshi"
            },
            {
              "code": "103018",
              "parentCode": "594",
              "name": "扎赉特旗",
              "en_name": "Zhalaiteqi"
            }
          ]
        }
      ]
    },
    {
      "code": "559",
      "parentCode": "489",
      "name": "宁夏",
      "en_name": "NINGXIA",
      "sublist": [
        {
          "code": "889",
          "parentCode": "559",
          "name": "固原",
          "en_name": "GUYUAN",
          "sublist": [
            {
              "code": "5198",
              "parentCode": "889",
              "name": "泾源县",
              "en_name": "Jingyuan"
            },
            {
              "code": "5197",
              "parentCode": "889",
              "name": "隆德县",
              "en_name": "Longde"
            },
            {
              "code": "5199",
              "parentCode": "889",
              "name": "彭阳县",
              "en_name": "Pengyang"
            },
            {
              "code": "5196",
              "parentCode": "889",
              "name": "西吉县",
              "en_name": "Xiji"
            },
            {
              "code": "5195",
              "parentCode": "889",
              "name": "原州区",
              "en_name": "Yuanzhou"
            }
          ]
        },
        {
          "code": "887",
          "parentCode": "559",
          "name": "石嘴山",
          "en_name": "SHIZUISHAN",
          "sublist": [
            {
              "code": "5187",
              "parentCode": "887",
              "name": "大武口区",
              "en_name": "Dawukou"
            },
            {
              "code": "5188",
              "parentCode": "887",
              "name": "惠农区",
              "en_name": "Huinong"
            },
            {
              "code": "5189",
              "parentCode": "887",
              "name": "平罗县",
              "en_name": "Pingluo"
            }
          ]
        },
        {
          "code": "888",
          "parentCode": "559",
          "name": "吴忠",
          "en_name": "WUZHONG",
          "sublist": [
            {
              "code": "5191",
              "parentCode": "888",
              "name": "红寺堡区",
              "en_name": "Hongsibu"
            },
            {
              "code": "5190",
              "parentCode": "888",
              "name": "利通区",
              "en_name": "Litong"
            },
            {
              "code": "5192",
              "parentCode": "888",
              "name": "青铜峡市",
              "en_name": "Qingtongxia"
            },
            {
              "code": "5194",
              "parentCode": "888",
              "name": "同心县",
              "en_name": "Tongxin"
            },
            {
              "code": "5193",
              "parentCode": "888",
              "name": "盐池县",
              "en_name": "Yanchi"
            }
          ]
        },
        {
          "code": "886",
          "parentCode": "559",
          "name": "银川",
          "en_name": "YINCHUAN",
          "sublist": [
            {
              "code": "5186",
              "parentCode": "886",
              "name": "贺兰县",
              "en_name": "Helan"
            },
            {
              "code": "5183",
              "parentCode": "886",
              "name": "金凤区",
              "en_name": "Jinfeng"
            },
            {
              "code": "5184",
              "parentCode": "886",
              "name": "灵武市",
              "en_name": "Lingwu"
            },
            {
              "code": "5181",
              "parentCode": "886",
              "name": "兴庆区",
              "en_name": "Xingqing"
            },
            {
              "code": "5182",
              "parentCode": "886",
              "name": "西夏区",
              "en_name": "Xixia"
            },
            {
              "code": "5185",
              "parentCode": "886",
              "name": "永宁县",
              "en_name": "Yongning"
            }
          ]
        },
        {
          "code": "906",
          "parentCode": "559",
          "name": "中卫",
          "en_name": "ZHONGWEI",
          "sublist": [
            {
              "code": "5311",
              "parentCode": "906",
              "name": "海原县",
              "en_name": "Haiyuan"
            },
            {
              "code": "5309",
              "parentCode": "906",
              "name": "沙坡头区",
              "en_name": "Shapotou"
            },
            {
              "code": "5310",
              "parentCode": "906",
              "name": "中宁县",
              "en_name": "Zhongning"
            }
          ]
        }
      ]
    },
    {
      "code": "558",
      "parentCode": "489",
      "name": "青海",
      "en_name": "QINGHAI",
      "sublist": [
        {
          "code": "883",
          "parentCode": "558",
          "name": "果洛",
          "en_name": "GUOLUO",
          "sublist": [
            {
              "code": "5165",
              "parentCode": "883",
              "name": "班玛县",
              "en_name": "Banma"
            },
            {
              "code": "5167",
              "parentCode": "883",
              "name": "达日县",
              "en_name": "Dari"
            },
            {
              "code": "5166",
              "parentCode": "883",
              "name": "甘德县",
              "en_name": "Gande"
            },
            {
              "code": "5168",
              "parentCode": "883",
              "name": "久治县",
              "en_name": "Jiuzhi"
            },
            {
              "code": "5169",
              "parentCode": "883",
              "name": "玛多县",
              "en_name": "Maduo"
            },
            {
              "code": "5164",
              "parentCode": "883",
              "name": "玛沁县",
              "en_name": "Maqin"
            }
          ]
        },
        {
          "code": "880",
          "parentCode": "558",
          "name": "海北",
          "en_name": "HAIBEI",
          "sublist": [
            {
              "code": "5154",
              "parentCode": "880",
              "name": "刚察县",
              "en_name": "Gangcha"
            },
            {
              "code": "5153",
              "parentCode": "880",
              "name": "海晏县",
              "en_name": "Haiyan"
            },
            {
              "code": "5151",
              "parentCode": "880",
              "name": "门源回族自治县",
              "en_name": "Menyuanhuizuzizhi"
            },
            {
              "code": "5152",
              "parentCode": "880",
              "name": "祁连县",
              "en_name": "Qilian"
            }
          ]
        },
        {
          "code": "879",
          "parentCode": "558",
          "name": "海东",
          "en_name": "HAIDONG",
          "sublist": [
            {
              "code": "5149",
              "parentCode": "879",
              "name": "化隆回族自治县",
              "en_name": "Hualonghuizuzizhi"
            },
            {
              "code": "5148",
              "parentCode": "879",
              "name": "互助土族自治县",
              "en_name": "Huzhutuzuzizhi"
            },
            {
              "code": "5147",
              "parentCode": "879",
              "name": "乐都区",
              "en_name": "Ledu"
            },
            {
              "code": "5146",
              "parentCode": "879",
              "name": "民和回族土族自治县",
              "en_name": "Minhehuizutuzuzizhi"
            },
            {
              "code": "5145",
              "parentCode": "879",
              "name": "平安区",
              "en_name": "Pingan"
            },
            {
              "code": "5150",
              "parentCode": "879",
              "name": "循化撒拉族自治县",
              "en_name": "Dunhuasalazuzizhi"
            }
          ]
        },
        {
          "code": "882",
          "parentCode": "558",
          "name": "海南州",
          "en_name": "HAINAN",
          "sublist": [
            {
              "code": "5159",
              "parentCode": "882",
              "name": "共和县",
              "en_name": "Gonghe"
            },
            {
              "code": "5161",
              "parentCode": "882",
              "name": "贵德县",
              "en_name": "Guide"
            },
            {
              "code": "5163",
              "parentCode": "882",
              "name": "贵南县",
              "en_name": "Guinan"
            },
            {
              "code": "5160",
              "parentCode": "882",
              "name": "同德县",
              "en_name": "Tongde"
            },
            {
              "code": "5162",
              "parentCode": "882",
              "name": "兴海县",
              "en_name": "Xinghai"
            }
          ]
        },
        {
          "code": "885",
          "parentCode": "558",
          "name": "海西",
          "en_name": "HAIXI",
          "sublist": [
            {
              "code": "5177",
              "parentCode": "885",
              "name": "德令哈市",
              "en_name": "Delingha"
            },
            {
              "code": "5179",
              "parentCode": "885",
              "name": "都兰县",
              "en_name": "Dulan"
            },
            {
              "code": "5176",
              "parentCode": "885",
              "name": "格尔木市",
              "en_name": "Geermu"
            },
            {
              "code": "5180",
              "parentCode": "885",
              "name": "天峻县",
              "en_name": "Tianjun"
            },
            {
              "code": "5178",
              "parentCode": "885",
              "name": "乌兰县",
              "en_name": "Wulan"
            },
            {
              "code": "104027",
              "parentCode": "885",
              "name": "茫崖市",
              "en_name": "mangyashi"
            },
            {
              "code": "104040",
              "parentCode": "885",
              "name": "海西蒙古族藏族自治州直辖",
              "en_name": "haiximengguzucangzuzizhizhouzhixia"
            }
          ]
        },
        {
          "code": "881",
          "parentCode": "558",
          "name": "黄南",
          "en_name": "HUANGNAN",
          "sublist": [
            {
              "code": "5158",
              "parentCode": "881",
              "name": "河南蒙古族自治县",
              "en_name": "Henanmengguzuzizhi"
            },
            {
              "code": "5156",
              "parentCode": "881",
              "name": "尖扎县",
              "en_name": "Jianzha"
            },
            {
              "code": "5155",
              "parentCode": "881",
              "name": "同仁市",
              "en_name": "tongrenshi"
            },
            {
              "code": "5157",
              "parentCode": "881",
              "name": "泽库县",
              "en_name": "Zeku"
            }
          ]
        },
        {
          "code": "878",
          "parentCode": "558",
          "name": "西宁",
          "en_name": "XINING",
          "sublist": [
            {
              "code": "5141",
              "parentCode": "878",
              "name": "城北区",
              "en_name": "Chengbei"
            },
            {
              "code": "5138",
              "parentCode": "878",
              "name": "城东区",
              "en_name": "Chengdong"
            },
            {
              "code": "5140",
              "parentCode": "878",
              "name": "城西区",
              "en_name": "Chengxi"
            },
            {
              "code": "5139",
              "parentCode": "878",
              "name": "城中区",
              "en_name": "Chengzhong"
            },
            {
              "code": "5142",
              "parentCode": "878",
              "name": "大通回族土族自治县",
              "en_name": "Datonghuizutuzuzizhi"
            },
            {
              "code": "5144",
              "parentCode": "878",
              "name": "湟源县",
              "en_name": "Huangyuan"
            },
            {
              "code": "5143",
              "parentCode": "878",
              "name": "湟中区",
              "en_name": "Huangzhong"
            }
          ]
        },
        {
          "code": "884",
          "parentCode": "558",
          "name": "玉树",
          "en_name": "YUSHU",
          "sublist": [
            {
              "code": "5172",
              "parentCode": "884",
              "name": "称多县",
              "en_name": "Chengduo"
            },
            {
              "code": "5174",
              "parentCode": "884",
              "name": "囊谦县",
              "en_name": "Nangqian"
            },
            {
              "code": "5175",
              "parentCode": "884",
              "name": "曲麻莱县",
              "en_name": "Qumalai"
            },
            {
              "code": "5170",
              "parentCode": "884",
              "name": "玉树市",
              "en_name": "Yushu"
            },
            {
              "code": "5171",
              "parentCode": "884",
              "name": "杂多县",
              "en_name": "Zaduo"
            },
            {
              "code": "5173",
              "parentCode": "884",
              "name": "治多县",
              "en_name": "Zhiduo"
            }
          ]
        }
      ]
    },
    {
      "code": "544",
      "parentCode": "489",
      "name": "山东",
      "en_name": "SHANDONG",
      "sublist": [
        {
          "code": "717",
          "parentCode": "544",
          "name": "滨州",
          "en_name": "BINZHOU",
          "sublist": [
            {
              "code": "3840",
              "parentCode": "717",
              "name": "滨城区",
              "en_name": "Bincheng"
            },
            {
              "code": "3845",
              "parentCode": "717",
              "name": "博兴县",
              "en_name": "Boxing"
            },
            {
              "code": "3841",
              "parentCode": "717",
              "name": "惠民县",
              "en_name": "Huimin"
            },
            {
              "code": "3843",
              "parentCode": "717",
              "name": "无棣县",
              "en_name": "Wudi"
            },
            {
              "code": "3842",
              "parentCode": "717",
              "name": "阳信县",
              "en_name": "Yangxin"
            },
            {
              "code": "3844",
              "parentCode": "717",
              "name": "沾化区",
              "en_name": "Zhanhua"
            },
            {
              "code": "3846",
              "parentCode": "717",
              "name": "邹平市",
              "en_name": "Zouping"
            }
          ]
        },
        {
          "code": "715",
          "parentCode": "544",
          "name": "德州",
          "en_name": "DEZHOU",
          "sublist": [
            {
              "code": "3821",
              "parentCode": "715",
              "name": "德城区",
              "en_name": "Decheng"
            },
            {
              "code": "3822",
              "parentCode": "715",
              "name": "乐陵市",
              "en_name": "Leling"
            },
            {
              "code": "3824",
              "parentCode": "715",
              "name": "陵城区",
              "en_name": "Ling"
            },
            {
              "code": "3827",
              "parentCode": "715",
              "name": "临邑县",
              "en_name": "Linyi"
            },
            {
              "code": "3825",
              "parentCode": "715",
              "name": "宁津县",
              "en_name": "Ningjin"
            },
            {
              "code": "3829",
              "parentCode": "715",
              "name": "平原县",
              "en_name": "Pingyuan"
            },
            {
              "code": "3828",
              "parentCode": "715",
              "name": "齐河县",
              "en_name": "Qihe"
            },
            {
              "code": "3826",
              "parentCode": "715",
              "name": "庆云县",
              "en_name": "Qingyun"
            },
            {
              "code": "3831",
              "parentCode": "715",
              "name": "武城县",
              "en_name": "Wucheng"
            },
            {
              "code": "3830",
              "parentCode": "715",
              "name": "夏津县",
              "en_name": "Xiajin"
            },
            {
              "code": "3823",
              "parentCode": "715",
              "name": "禹城市",
              "en_name": "Yucheng"
            }
          ]
        },
        {
          "code": "706",
          "parentCode": "544",
          "name": "东营",
          "en_name": "DONGYING",
          "sublist": [
            {
              "code": "3751",
              "parentCode": "706",
              "name": "东营区",
              "en_name": "Dongying"
            },
            {
              "code": "3755",
              "parentCode": "706",
              "name": "广饶县",
              "en_name": "Guangrao"
            },
            {
              "code": "3752",
              "parentCode": "706",
              "name": "河口区",
              "en_name": "Hekou"
            },
            {
              "code": "3753",
              "parentCode": "706",
              "name": "垦利区",
              "en_name": "Kenli"
            },
            {
              "code": "3754",
              "parentCode": "706",
              "name": "利津县",
              "en_name": "Lijin"
            }
          ]
        },
        {
          "code": "718",
          "parentCode": "544",
          "name": "菏泽",
          "en_name": "HEZE",
          "sublist": [
            {
              "code": "3848",
              "parentCode": "718",
              "name": "曹县",
              "en_name": "Cao"
            },
            {
              "code": "3850",
              "parentCode": "718",
              "name": "成武县",
              "en_name": "Chengwu"
            },
            {
              "code": "3849",
              "parentCode": "718",
              "name": "单县",
              "en_name": "Shan"
            },
            {
              "code": "3854",
              "parentCode": "718",
              "name": "定陶区",
              "en_name": "Dingtao"
            },
            {
              "code": "3853",
              "parentCode": "718",
              "name": "鄄城县",
              "en_name": "Juancheng"
            },
            {
              "code": "3851",
              "parentCode": "718",
              "name": "巨野县",
              "en_name": "Juye"
            },
            {
              "code": "3847",
              "parentCode": "718",
              "name": "牡丹区",
              "en_name": "Mudan"
            },
            {
              "code": "3852",
              "parentCode": "718",
              "name": "郓城县",
              "en_name": "Yuncheng"
            },
            {
              "code": "104020",
              "parentCode": "718",
              "name": "东明县",
              "en_name": "dongmingxian"
            }
          ]
        },
        {
          "code": "702",
          "parentCode": "544",
          "name": "济南",
          "en_name": "JINAN",
          "sublist": [
            {
              "code": "3808",
              "parentCode": "702",
              "name": "钢城区",
              "en_name": "Gangcheng"
            },
            {
              "code": "2376",
              "parentCode": "702",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "2100",
              "parentCode": "702",
              "name": "槐荫区",
              "en_name": "Huaiyin"
            },
            {
              "code": "2104",
              "parentCode": "702",
              "name": "济阳区",
              "en_name": "Jiyang"
            },
            {
              "code": "3807",
              "parentCode": "702",
              "name": "莱芜区",
              "en_name": "Laicheng"
            },
            {
              "code": "2101",
              "parentCode": "702",
              "name": "历城区",
              "en_name": "Licheng"
            },
            {
              "code": "2098",
              "parentCode": "702",
              "name": "历下区",
              "en_name": "Lixia"
            },
            {
              "code": "2103",
              "parentCode": "702",
              "name": "平阴县",
              "en_name": "Pingyin"
            },
            {
              "code": "2105",
              "parentCode": "702",
              "name": "商河县",
              "en_name": "Shanghe"
            },
            {
              "code": "2097",
              "parentCode": "702",
              "name": "市中区",
              "en_name": "Shizhong"
            },
            {
              "code": "2099",
              "parentCode": "702",
              "name": "天桥区",
              "en_name": "Tianqiao"
            },
            {
              "code": "2102",
              "parentCode": "702",
              "name": "长清区",
              "en_name": "Changqing"
            },
            {
              "code": "2471",
              "parentCode": "702",
              "name": "章丘区",
              "en_name": "Zhangqiu"
            }
          ]
        },
        {
          "code": "709",
          "parentCode": "544",
          "name": "济宁",
          "en_name": "JINING",
          "sublist": [
            {
              "code": "3024",
              "parentCode": "709",
              "name": "嘉祥县",
              "en_name": "Jiaxiangxian"
            },
            {
              "code": "3023",
              "parentCode": "709",
              "name": "金乡县",
              "en_name": "Jinxiangxian"
            },
            {
              "code": "3027",
              "parentCode": "709",
              "name": "梁山县",
              "en_name": "Liangshanxian"
            },
            {
              "code": "3019",
              "parentCode": "709",
              "name": "曲阜市",
              "en_name": "Qufushi"
            },
            {
              "code": "3018",
              "parentCode": "709",
              "name": "任城区",
              "en_name": "Renchengqu"
            },
            {
              "code": "3026",
              "parentCode": "709",
              "name": "泗水县",
              "en_name": "Sishuixian"
            },
            {
              "code": "3021",
              "parentCode": "709",
              "name": "微山县",
              "en_name": "Weishanxian"
            },
            {
              "code": "3025",
              "parentCode": "709",
              "name": "汶上县",
              "en_name": "Wenshangxian"
            },
            {
              "code": "3366",
              "parentCode": "709",
              "name": "兖州区",
              "en_name": "Yanzhou"
            },
            {
              "code": "3022",
              "parentCode": "709",
              "name": "鱼台县",
              "en_name": "Yutaixian"
            },
            {
              "code": "3020",
              "parentCode": "709",
              "name": "邹城市",
              "en_name": "Zouchengshi"
            }
          ]
        },
        {
          "code": "716",
          "parentCode": "544",
          "name": "聊城",
          "en_name": "LIAOCHENG",
          "sublist": [
            {
              "code": "3836",
              "parentCode": "716",
              "name": "茌平区",
              "en_name": "Renping"
            },
            {
              "code": "3832",
              "parentCode": "716",
              "name": "东昌府区",
              "en_name": "Dongchangfu"
            },
            {
              "code": "3837",
              "parentCode": "716",
              "name": "东阿县",
              "en_name": "Donge"
            },
            {
              "code": "3839",
              "parentCode": "716",
              "name": "高唐县",
              "en_name": "Gaotang"
            },
            {
              "code": "3838",
              "parentCode": "716",
              "name": "冠县",
              "en_name": "Guan"
            },
            {
              "code": "3833",
              "parentCode": "716",
              "name": "临清市",
              "en_name": "Linqing"
            },
            {
              "code": "3835",
              "parentCode": "716",
              "name": "莘县",
              "en_name": "Shen"
            },
            {
              "code": "3834",
              "parentCode": "716",
              "name": "阳谷县",
              "en_name": "Yanggu"
            }
          ]
        },
        {
          "code": "714",
          "parentCode": "544",
          "name": "临沂",
          "en_name": "LINYI",
          "sublist": [
            {
              "code": "3816",
              "parentCode": "714",
              "name": "费县",
              "en_name": "Fei"
            },
            {
              "code": "3811",
              "parentCode": "714",
              "name": "河东区",
              "en_name": "Hedong"
            },
            {
              "code": "3818",
              "parentCode": "714",
              "name": "莒南县",
              "en_name": "Junan"
            },
            {
              "code": "3815",
              "parentCode": "714",
              "name": "兰陵县",
              "en_name": "Lanling"
            },
            {
              "code": "3809",
              "parentCode": "714",
              "name": "兰山区",
              "en_name": "Lanshan"
            },
            {
              "code": "3820",
              "parentCode": "714",
              "name": "临沭县",
              "en_name": "Linshu"
            },
            {
              "code": "3810",
              "parentCode": "714",
              "name": "罗庄区",
              "en_name": "Luozhuang"
            },
            {
              "code": "3819",
              "parentCode": "714",
              "name": "蒙阴县",
              "en_name": "Mengyin"
            },
            {
              "code": "3817",
              "parentCode": "714",
              "name": "平邑县",
              "en_name": "Pingyi"
            },
            {
              "code": "3813",
              "parentCode": "714",
              "name": "郯城县",
              "en_name": "Tancheng"
            },
            {
              "code": "3812",
              "parentCode": "714",
              "name": "沂南县",
              "en_name": "Yinan"
            },
            {
              "code": "3814",
              "parentCode": "714",
              "name": "沂水县",
              "en_name": "Yishui"
            }
          ]
        },
        {
          "code": "703",
          "parentCode": "544",
          "name": "青岛",
          "en_name": "QINGDAO",
          "sublist": [
            {
              "code": "2391",
              "parentCode": "703",
              "name": "保税区",
              "en_name": "Baoshuiqu"
            },
            {
              "code": "2159",
              "parentCode": "703",
              "name": "城阳区",
              "en_name": "Chengyang"
            },
            {
              "code": "2157",
              "parentCode": "703",
              "name": "黄岛区",
              "en_name": "Huangdao"
            },
            {
              "code": "2160",
              "parentCode": "703",
              "name": "胶州市",
              "en_name": "Jiaozhoushi"
            },
            {
              "code": "2161",
              "parentCode": "703",
              "name": "即墨区",
              "en_name": "Jimoshi"
            },
            {
              "code": "2164",
              "parentCode": "703",
              "name": "莱西市",
              "en_name": "Laixishi"
            },
            {
              "code": "2158",
              "parentCode": "703",
              "name": "崂山区",
              "en_name": "Laoshan"
            },
            {
              "code": "2156",
              "parentCode": "703",
              "name": "李沧区",
              "en_name": "Licang"
            },
            {
              "code": "2162",
              "parentCode": "703",
              "name": "平度市",
              "en_name": "Pingdushi"
            },
            {
              "code": "2393",
              "parentCode": "703",
              "name": "青岛高新技术产业开发区",
              "en_name": "Chanyekaifaqu"
            },
            {
              "code": "2392",
              "parentCode": "703",
              "name": "青岛经济技术开发区",
              "en_name": "Jingjikaifaqu"
            },
            {
              "code": "2154",
              "parentCode": "703",
              "name": "市北区",
              "en_name": "Shibei"
            },
            {
              "code": "2153",
              "parentCode": "703",
              "name": "市南区",
              "en_name": "Shinan"
            },
            {
              "code": "3009",
              "parentCode": "703",
              "name": "西海岸新区",
              "en_name": "Xihaianxinqu"
            }
          ]
        },
        {
          "code": "712",
          "parentCode": "544",
          "name": "日照",
          "en_name": "RIZHAO",
          "sublist": [
            {
              "code": "3803",
              "parentCode": "712",
              "name": "东港区",
              "en_name": "Donggang"
            },
            {
              "code": "3806",
              "parentCode": "712",
              "name": "莒县",
              "en_name": "Ju"
            },
            {
              "code": "3804",
              "parentCode": "712",
              "name": "岚山区",
              "en_name": "Lanshan"
            },
            {
              "code": "3805",
              "parentCode": "712",
              "name": "五莲县",
              "en_name": "Wulian"
            }
          ]
        },
        {
          "code": "710",
          "parentCode": "544",
          "name": "泰安",
          "en_name": "TAIAN",
          "sublist": [
            {
              "code": "3794",
              "parentCode": "710",
              "name": "岱岳区",
              "en_name": "Daiyue"
            },
            {
              "code": "3798",
              "parentCode": "710",
              "name": "东平县",
              "en_name": "Dongping"
            },
            {
              "code": "3369",
              "parentCode": "710",
              "name": "肥城市",
              "en_name": "Feichengshi"
            },
            {
              "code": "3797",
              "parentCode": "710",
              "name": "宁阳县",
              "en_name": "Ningyang"
            },
            {
              "code": "3793",
              "parentCode": "710",
              "name": "泰山区",
              "en_name": "Taishan"
            },
            {
              "code": "3795",
              "parentCode": "710",
              "name": "新泰市",
              "en_name": "Xintai"
            }
          ]
        },
        {
          "code": "708",
          "parentCode": "544",
          "name": "潍坊",
          "en_name": "WEIFANG",
          "sublist": [
            {
              "code": "3017",
              "parentCode": "708",
              "name": "安丘市",
              "en_name": "Anqiushi"
            },
            {
              "code": "3011",
              "parentCode": "708",
              "name": "滨海经济开发区",
              "en_name": "Binhaijingjikaifaqu"
            },
            {
              "code": "3014",
              "parentCode": "708",
              "name": "昌乐县",
              "en_name": "Changlexian"
            },
            {
              "code": "3779",
              "parentCode": "708",
              "name": "昌邑市",
              "en_name": "Changyi"
            },
            {
              "code": "3772",
              "parentCode": "708",
              "name": "坊子区",
              "en_name": "Fangzi"
            },
            {
              "code": "3012",
              "parentCode": "708",
              "name": "高密市",
              "en_name": "Gaomishi"
            },
            {
              "code": "3010",
              "parentCode": "708",
              "name": "高新技术开发区",
              "en_name": "Gaoxinjishukaifaqu"
            },
            {
              "code": "3771",
              "parentCode": "708",
              "name": "寒亭区",
              "en_name": "Hanting"
            },
            {
              "code": "3773",
              "parentCode": "708",
              "name": "奎文区",
              "en_name": "Kuiwen"
            },
            {
              "code": "4008",
              "parentCode": "708",
              "name": "临朐县",
              "en_name": "Linquxian"
            },
            {
              "code": "3015",
              "parentCode": "708",
              "name": "青州市",
              "en_name": "Qingzhoushi"
            },
            {
              "code": "3013",
              "parentCode": "708",
              "name": "寿光市",
              "en_name": "Shouguangshi"
            },
            {
              "code": "3770",
              "parentCode": "708",
              "name": "潍城区",
              "en_name": "Weicheng"
            },
            {
              "code": "3016",
              "parentCode": "708",
              "name": "诸城市",
              "en_name": "Zhuchengshi"
            }
          ]
        },
        {
          "code": "711",
          "parentCode": "544",
          "name": "威海",
          "en_name": "WEIHAI",
          "sublist": [
            {
              "code": "4009",
              "parentCode": "711",
              "name": "环翠区",
              "en_name": "huancuiqu"
            },
            {
              "code": "4012",
              "parentCode": "711",
              "name": "火炬高技术产业区",
              "en_name": "huojugaojishuchanyequ"
            },
            {
              "code": "4013",
              "parentCode": "711",
              "name": "进出口加工保税区",
              "en_name": "jinchukoujiagongbaoshuiqu"
            },
            {
              "code": "4011",
              "parentCode": "711",
              "name": "经济开发区",
              "en_name": "jingjikaifaqu"
            },
            {
              "code": "4014",
              "parentCode": "711",
              "name": "临港经济技术开发区",
              "en_name": "lingangjingjijishukaifaqu"
            },
            {
              "code": "4015",
              "parentCode": "711",
              "name": "南海新区",
              "en_name": "nanhaixinqu"
            },
            {
              "code": "3368",
              "parentCode": "711",
              "name": "荣成市",
              "en_name": "Rongchengshi"
            },
            {
              "code": "3367",
              "parentCode": "711",
              "name": "乳山市",
              "en_name": "Rushanshi"
            },
            {
              "code": "4010",
              "parentCode": "711",
              "name": "文登区",
              "en_name": "wendengqu"
            }
          ]
        },
        {
          "code": "707",
          "parentCode": "544",
          "name": "烟台",
          "en_name": "YANTAI",
          "sublist": [
            {
              "code": "2546",
              "parentCode": "707",
              "name": "福山区",
              "en_name": "FUSHANQU"
            },
            {
              "code": "2557",
              "parentCode": "707",
              "name": "高新区",
              "en_name": "GAOXINQU"
            },
            {
              "code": "2556",
              "parentCode": "707",
              "name": "海阳市",
              "en_name": "HAIYANGSHI"
            },
            {
              "code": "2558",
              "parentCode": "707",
              "name": "开发区",
              "en_name": "KAIFAQU"
            },
            {
              "code": "2548",
              "parentCode": "707",
              "name": "莱山区",
              "en_name": "LAISHANQU"
            },
            {
              "code": "2551",
              "parentCode": "707",
              "name": "莱阳市",
              "en_name": "LAIYANGSHI"
            },
            {
              "code": "2552",
              "parentCode": "707",
              "name": "莱州市",
              "en_name": "LAIZHAOUSHI"
            },
            {
              "code": "2550",
              "parentCode": "707",
              "name": "龙口市",
              "en_name": "LONGKOUSHI"
            },
            {
              "code": "2547",
              "parentCode": "707",
              "name": "牟平区",
              "en_name": "MUSHANQU"
            },
            {
              "code": "2553",
              "parentCode": "707",
              "name": "蓬莱区",
              "en_name": "penglaiqu"
            },
            {
              "code": "2555",
              "parentCode": "707",
              "name": "栖霞市",
              "en_name": "QIXIASHI"
            },
            {
              "code": "2549",
              "parentCode": "707",
              "name": "长岛县",
              "en_name": "CHANGDAOXIAN"
            },
            {
              "code": "2554",
              "parentCode": "707",
              "name": "招远市",
              "en_name": "ZHAOYUANSHI"
            },
            {
              "code": "2545",
              "parentCode": "707",
              "name": "芝罘区",
              "en_name": "ZHIFUQU"
            }
          ]
        },
        {
          "code": "705",
          "parentCode": "544",
          "name": "枣庄",
          "en_name": "ZAOZHUANG",
          "sublist": [
            {
              "code": "3749",
              "parentCode": "705",
              "name": "山亭区",
              "en_name": "Shanting"
            },
            {
              "code": "3745",
              "parentCode": "705",
              "name": "市中区",
              "en_name": "Shizhong"
            },
            {
              "code": "3748",
              "parentCode": "705",
              "name": "台儿庄区",
              "en_name": "Taierzhuang"
            },
            {
              "code": "3750",
              "parentCode": "705",
              "name": "滕州市",
              "en_name": "Tengzhou"
            },
            {
              "code": "3746",
              "parentCode": "705",
              "name": "薛城区",
              "en_name": "Xuecheng"
            },
            {
              "code": "3747",
              "parentCode": "705",
              "name": "峄城区",
              "en_name": "Yicheng"
            }
          ]
        },
        {
          "code": "704",
          "parentCode": "544",
          "name": "淄博",
          "en_name": "ZIBO",
          "sublist": [
            {
              "code": "3030",
              "parentCode": "704",
              "name": "博山区",
              "en_name": "Boshanqu"
            },
            {
              "code": "3743",
              "parentCode": "704",
              "name": "高青县",
              "en_name": "Gaoqing"
            },
            {
              "code": "3742",
              "parentCode": "704",
              "name": "桓台县",
              "en_name": "Huantai"
            },
            {
              "code": "3031",
              "parentCode": "704",
              "name": "临淄区",
              "en_name": "Linziqu"
            },
            {
              "code": "3744",
              "parentCode": "704",
              "name": "沂源县",
              "en_name": "Yiyuan"
            },
            {
              "code": "3028",
              "parentCode": "704",
              "name": "张店区",
              "en_name": "Zhangdianqu"
            },
            {
              "code": "3741",
              "parentCode": "704",
              "name": "周村区",
              "en_name": "Zhoucun"
            },
            {
              "code": "3032",
              "parentCode": "704",
              "name": "淄博高新区",
              "en_name": "Zibogaoxinqu"
            },
            {
              "code": "3029",
              "parentCode": "704",
              "name": "淄川区",
              "en_name": "Zichuanqu"
            }
          ]
        }
      ]
    },
    {
      "code": "538",
      "parentCode": "489",
      "name": "上海",
      "en_name": "SHANGHAI",
      "sublist": [
        {
          "code": "2029",
          "parentCode": "538",
          "name": "宝山区",
          "en_name": "Baoshan",
          "sublist": []
        },
        {
          "code": "2036",
          "parentCode": "538",
          "name": "崇明区",
          "en_name": "Chongming",
          "sublist": []
        },
        {
          "code": "2035",
          "parentCode": "538",
          "name": "奉贤区",
          "en_name": "Fengxian",
          "sublist": []
        },
        {
          "code": "2026",
          "parentCode": "538",
          "name": "虹口区",
          "en_name": "Hongkou",
          "sublist": []
        },
        {
          "code": "2019",
          "parentCode": "538",
          "name": "黄浦区",
          "en_name": "Huangpu",
          "sublist": []
        },
        {
          "code": "2030",
          "parentCode": "538",
          "name": "嘉定区",
          "en_name": "Jiading",
          "sublist": []
        },
        {
          "code": "2023",
          "parentCode": "538",
          "name": "静安区",
          "en_name": "Jingan",
          "sublist": []
        },
        {
          "code": "2032",
          "parentCode": "538",
          "name": "金山区",
          "en_name": "Jinshan",
          "sublist": []
        },
        {
          "code": "2028",
          "parentCode": "538",
          "name": "闵行区",
          "en_name": "Minxing",
          "sublist": []
        },
        {
          "code": "2031",
          "parentCode": "538",
          "name": "浦东新区",
          "en_name": "Pudongxin",
          "sublist": []
        },
        {
          "code": "2024",
          "parentCode": "538",
          "name": "普陀区",
          "en_name": "Putuo",
          "sublist": []
        },
        {
          "code": "2034",
          "parentCode": "538",
          "name": "青浦区",
          "en_name": "Qingpu",
          "sublist": []
        },
        {
          "code": "2033",
          "parentCode": "538",
          "name": "松江区",
          "en_name": "Songjiang",
          "sublist": []
        },
        {
          "code": "2021",
          "parentCode": "538",
          "name": "徐汇区",
          "en_name": "Xuhui",
          "sublist": []
        },
        {
          "code": "2027",
          "parentCode": "538",
          "name": "杨浦区",
          "en_name": "Yangpu",
          "sublist": []
        },
        {
          "code": "2022",
          "parentCode": "538",
          "name": "长宁区",
          "en_name": "Changning",
          "sublist": []
        }
      ]
    },
    {
      "code": "556",
      "parentCode": "489",
      "name": "陕西",
      "en_name": "SHANXI",
      "sublist": [
        {
          "code": "862",
          "parentCode": "556",
          "name": "安康",
          "en_name": "ANKANG",
          "sublist": [
            {
              "code": "5043",
              "parentCode": "862",
              "name": "白河县",
              "en_name": "Baihe"
            },
            {
              "code": "5034",
              "parentCode": "862",
              "name": "汉滨区",
              "en_name": "Hanbin"
            },
            {
              "code": "5035",
              "parentCode": "862",
              "name": "汉阴县",
              "en_name": "Hanyin"
            },
            {
              "code": "5039",
              "parentCode": "862",
              "name": "岚皋县",
              "en_name": "Langao"
            },
            {
              "code": "5037",
              "parentCode": "862",
              "name": "宁陕县",
              "en_name": "Ningshan"
            },
            {
              "code": "5040",
              "parentCode": "862",
              "name": "平利县",
              "en_name": "Pingli"
            },
            {
              "code": "5036",
              "parentCode": "862",
              "name": "石泉县",
              "en_name": "Shiquan"
            },
            {
              "code": "5042",
              "parentCode": "862",
              "name": "旬阳市",
              "en_name": "xunyangshi"
            },
            {
              "code": "5041",
              "parentCode": "862",
              "name": "镇坪县",
              "en_name": "Zhenping"
            },
            {
              "code": "5038",
              "parentCode": "862",
              "name": "紫阳县",
              "en_name": "Ziyang"
            }
          ]
        },
        {
          "code": "856",
          "parentCode": "556",
          "name": "宝鸡",
          "en_name": "BAOJI",
          "sublist": [
            {
              "code": "4964",
              "parentCode": "856",
              "name": "陈仓区",
              "en_name": "Chencang"
            },
            {
              "code": "4972",
              "parentCode": "856",
              "name": "凤县",
              "en_name": "Feng"
            },
            {
              "code": "4965",
              "parentCode": "856",
              "name": "凤翔区",
              "en_name": "fengxiangqu"
            },
            {
              "code": "4967",
              "parentCode": "856",
              "name": "扶风县",
              "en_name": "Fufeng"
            },
            {
              "code": "4963",
              "parentCode": "856",
              "name": "金台区",
              "en_name": "Jintai"
            },
            {
              "code": "4971",
              "parentCode": "856",
              "name": "麟游县",
              "en_name": "Linyou"
            },
            {
              "code": "4969",
              "parentCode": "856",
              "name": "陇县",
              "en_name": "Long"
            },
            {
              "code": "4968",
              "parentCode": "856",
              "name": "眉县",
              "en_name": "Mei"
            },
            {
              "code": "4970",
              "parentCode": "856",
              "name": "千阳县",
              "en_name": "Qianyang"
            },
            {
              "code": "4966",
              "parentCode": "856",
              "name": "岐山县",
              "en_name": "Qishan"
            },
            {
              "code": "4973",
              "parentCode": "856",
              "name": "太白县",
              "en_name": "Taibai"
            },
            {
              "code": "4962",
              "parentCode": "856",
              "name": "渭滨区",
              "en_name": "Weibin"
            }
          ]
        },
        {
          "code": "860",
          "parentCode": "556",
          "name": "汉中",
          "en_name": "HANZHONG",
          "sublist": [
            {
              "code": "5013",
              "parentCode": "860",
              "name": "城固县",
              "en_name": "Chenggu"
            },
            {
              "code": "5021",
              "parentCode": "860",
              "name": "佛坪县",
              "en_name": "Foping"
            },
            {
              "code": "5011",
              "parentCode": "860",
              "name": "汉台区",
              "en_name": "Hantai"
            },
            {
              "code": "5020",
              "parentCode": "860",
              "name": "留坝县",
              "en_name": "Liuba"
            },
            {
              "code": "5018",
              "parentCode": "860",
              "name": "略阳县",
              "en_name": "Lueyang"
            },
            {
              "code": "5016",
              "parentCode": "860",
              "name": "勉县",
              "en_name": "Mian"
            },
            {
              "code": "5012",
              "parentCode": "860",
              "name": "南郑区",
              "en_name": "Nanzheng"
            },
            {
              "code": "5017",
              "parentCode": "860",
              "name": "宁强县",
              "en_name": "Ningqiang"
            },
            {
              "code": "5015",
              "parentCode": "860",
              "name": "西乡县",
              "en_name": "Xixiang"
            },
            {
              "code": "5014",
              "parentCode": "860",
              "name": "洋县",
              "en_name": "Yang"
            },
            {
              "code": "5019",
              "parentCode": "860",
              "name": "镇巴县",
              "en_name": "Zhenba"
            }
          ]
        },
        {
          "code": "863",
          "parentCode": "556",
          "name": "商洛",
          "en_name": "SHANGLUO",
          "sublist": [
            {
              "code": "5046",
              "parentCode": "863",
              "name": "丹凤县",
              "en_name": "Danfeng"
            },
            {
              "code": "5045",
              "parentCode": "863",
              "name": "洛南县",
              "en_name": "Luonan"
            },
            {
              "code": "5047",
              "parentCode": "863",
              "name": "商南县",
              "en_name": "Shangnan"
            },
            {
              "code": "5044",
              "parentCode": "863",
              "name": "商州区",
              "en_name": "Shangzhou"
            },
            {
              "code": "5048",
              "parentCode": "863",
              "name": "山阳县",
              "en_name": "Shanyang"
            },
            {
              "code": "5050",
              "parentCode": "863",
              "name": "柞水县",
              "en_name": "Zhashui"
            },
            {
              "code": "5049",
              "parentCode": "863",
              "name": "镇安县",
              "en_name": "Zhenan"
            }
          ]
        },
        {
          "code": "855",
          "parentCode": "556",
          "name": "铜川",
          "en_name": "TONGCHUAN",
          "sublist": [
            {
              "code": "4958",
              "parentCode": "855",
              "name": "王益区",
              "en_name": "Wangyi"
            },
            {
              "code": "4960",
              "parentCode": "855",
              "name": "耀州区",
              "en_name": "Yaozhou"
            },
            {
              "code": "4961",
              "parentCode": "855",
              "name": "宜君县",
              "en_name": "Yijun"
            },
            {
              "code": "4959",
              "parentCode": "855",
              "name": "印台区",
              "en_name": "Yintai"
            }
          ]
        },
        {
          "code": "858",
          "parentCode": "556",
          "name": "渭南",
          "en_name": "WEINAN",
          "sublist": [
            {
              "code": "4996",
              "parentCode": "858",
              "name": "白水县",
              "en_name": "Baishui"
            },
            {
              "code": "4994",
              "parentCode": "858",
              "name": "澄城县",
              "en_name": "Chengcheng"
            },
            {
              "code": "4992",
              "parentCode": "858",
              "name": "大荔县",
              "en_name": "Dali"
            },
            {
              "code": "4997",
              "parentCode": "858",
              "name": "富平县",
              "en_name": "Fuping"
            },
            {
              "code": "4988",
              "parentCode": "858",
              "name": "韩城市",
              "en_name": "Hancheng"
            },
            {
              "code": "4993",
              "parentCode": "858",
              "name": "合阳县",
              "en_name": "Heyang"
            },
            {
              "code": "4990",
              "parentCode": "858",
              "name": "华州区",
              "en_name": "Hua"
            },
            {
              "code": "4989",
              "parentCode": "858",
              "name": "华阴市",
              "en_name": "Huayin"
            },
            {
              "code": "4987",
              "parentCode": "858",
              "name": "临渭区",
              "en_name": "Linwei"
            },
            {
              "code": "4995",
              "parentCode": "858",
              "name": "蒲城县",
              "en_name": "Pucheng"
            },
            {
              "code": "4991",
              "parentCode": "858",
              "name": "潼关县",
              "en_name": "Tongguan"
            }
          ]
        },
        {
          "code": "854",
          "parentCode": "556",
          "name": "西安",
          "en_name": "XIAN",
          "sublist": [
            {
              "code": "2075",
              "parentCode": "854",
              "name": "灞桥区",
              "en_name": "Baqiao"
            },
            {
              "code": "2071",
              "parentCode": "854",
              "name": "碑林区",
              "en_name": "Beilin"
            },
            {
              "code": "2371",
              "parentCode": "854",
              "name": "浐灞生态区",
              "en_name": "Chanba"
            },
            {
              "code": "2083",
              "parentCode": "854",
              "name": "沣渭新区",
              "en_name": "fengweixin"
            },
            {
              "code": "2082",
              "parentCode": "854",
              "name": "高陵区",
              "en_name": "Gaoling"
            },
            {
              "code": "2368",
              "parentCode": "854",
              "name": "高新技术产业开发区",
              "en_name": "Gaoxinkaifaqu"
            },
            {
              "code": "2374",
              "parentCode": "854",
              "name": "国际港务区",
              "en_name": "Guojigangwu"
            },
            {
              "code": "2081",
              "parentCode": "854",
              "name": "鄠邑区",
              "en_name": "Hu"
            },
            {
              "code": "2369",
              "parentCode": "854",
              "name": "经济技术开发区",
              "en_name": "Jingjikaifaqu"
            },
            {
              "code": "2079",
              "parentCode": "854",
              "name": "蓝田县",
              "en_name": "Lantian"
            },
            {
              "code": "2072",
              "parentCode": "854",
              "name": "莲湖区",
              "en_name": "Lianhu"
            },
            {
              "code": "2078",
              "parentCode": "854",
              "name": "临潼区",
              "en_name": "Lintong"
            },
            {
              "code": "2370",
              "parentCode": "854",
              "name": "曲江新区",
              "en_name": "Qujiang"
            },
            {
              "code": "3278",
              "parentCode": "854",
              "name": "渭北工业区",
              "en_name": "Weibeigongyequ"
            },
            {
              "code": "2074",
              "parentCode": "854",
              "name": "未央区",
              "en_name": "Weiyang"
            },
            {
              "code": "2373",
              "parentCode": "854",
              "name": "西安国家民用航天产业基地",
              "en_name": "Minyonghangtian"
            },
            {
              "code": "2070",
              "parentCode": "854",
              "name": "新城区",
              "en_name": "Xincheng"
            },
            {
              "code": "2372",
              "parentCode": "854",
              "name": "阎良国家航空高新技术产业基地",
              "en_name": "Yanlianghangkong"
            },
            {
              "code": "2077",
              "parentCode": "854",
              "name": "阎良区",
              "en_name": "Yanliang"
            },
            {
              "code": "2073",
              "parentCode": "854",
              "name": "雁塔区",
              "en_name": "Yanta"
            },
            {
              "code": "2076",
              "parentCode": "854",
              "name": "长安区",
              "en_name": "Changan"
            },
            {
              "code": "2080",
              "parentCode": "854",
              "name": "周至县",
              "en_name": "Zhouzhi"
            }
          ]
        },
        {
          "code": "857",
          "parentCode": "556",
          "name": "咸阳",
          "en_name": "XIANYANG",
          "sublist": [
            {
              "code": "10058",
              "parentCode": "857",
              "name": "兴平市",
              "en_name": "XINGPING"
            },
            {
              "code": "10470",
              "parentCode": "857",
              "name": "杨陵区",
              "en_name": "YANGLING"
            },
            {
              "code": "4982",
              "parentCode": "857",
              "name": "彬州市",
              "en_name": "Bin"
            },
            {
              "code": "4985",
              "parentCode": "857",
              "name": "淳化县",
              "en_name": "Chunhua"
            },
            {
              "code": "4978",
              "parentCode": "857",
              "name": "泾阳县",
              "en_name": "Jingyang"
            },
            {
              "code": "4980",
              "parentCode": "857",
              "name": "礼泉县",
              "en_name": "Liquan"
            },
            {
              "code": "4979",
              "parentCode": "857",
              "name": "乾县",
              "en_name": "Qian"
            },
            {
              "code": "4974",
              "parentCode": "857",
              "name": "秦都区",
              "en_name": "Qindu"
            },
            {
              "code": "4977",
              "parentCode": "857",
              "name": "三原县",
              "en_name": "Sanyuan"
            },
            {
              "code": "4975",
              "parentCode": "857",
              "name": "渭城区",
              "en_name": "Weicheng"
            },
            {
              "code": "4986",
              "parentCode": "857",
              "name": "武功县",
              "en_name": "Wugong"
            },
            {
              "code": "4984",
              "parentCode": "857",
              "name": "旬邑县",
              "en_name": "Xunyi"
            },
            {
              "code": "4981",
              "parentCode": "857",
              "name": "永寿县",
              "en_name": "Yongshou"
            },
            {
              "code": "4983",
              "parentCode": "857",
              "name": "长武县",
              "en_name": "Changwu"
            }
          ]
        },
        {
          "code": "933",
          "parentCode": "556",
          "name": "西咸新区",
          "en_name": "XIXIANXINQU",
          "sublist": [
            {
              "code": "3360",
              "parentCode": "933",
              "name": "沣东新城",
              "en_name": "Fengdongxincheng"
            },
            {
              "code": "3361",
              "parentCode": "933",
              "name": "沣西新城",
              "en_name": "Fengxixincheng"
            },
            {
              "code": "3363",
              "parentCode": "933",
              "name": "泾河新城",
              "en_name": "Jinghexincheng"
            },
            {
              "code": "3364",
              "parentCode": "933",
              "name": "空港新城",
              "en_name": "Konggangxincheng"
            },
            {
              "code": "3362",
              "parentCode": "933",
              "name": "秦汉新城",
              "en_name": "Qinhanxincheng"
            }
          ]
        },
        {
          "code": "859",
          "parentCode": "556",
          "name": "延安",
          "en_name": "YANAN",
          "sublist": [
            {
              "code": "5002",
              "parentCode": "859",
              "name": "安塞区",
              "en_name": "Ansai"
            },
            {
              "code": "4998",
              "parentCode": "859",
              "name": "宝塔区",
              "en_name": "Baota"
            },
            {
              "code": "5006",
              "parentCode": "859",
              "name": "富县",
              "en_name": "Fu"
            },
            {
              "code": "5005",
              "parentCode": "859",
              "name": "甘泉县",
              "en_name": "Ganquan"
            },
            {
              "code": "5010",
              "parentCode": "859",
              "name": "黄陵县",
              "en_name": "Huangling"
            },
            {
              "code": "5009",
              "parentCode": "859",
              "name": "黄龙县",
              "en_name": "Huanglong"
            },
            {
              "code": "5007",
              "parentCode": "859",
              "name": "洛川县",
              "en_name": "Luochuan"
            },
            {
              "code": "5004",
              "parentCode": "859",
              "name": "吴起县",
              "en_name": "Wuqi"
            },
            {
              "code": "5000",
              "parentCode": "859",
              "name": "延川县",
              "en_name": "Yanchuan"
            },
            {
              "code": "4999",
              "parentCode": "859",
              "name": "延长县",
              "en_name": "Yanchang"
            },
            {
              "code": "5008",
              "parentCode": "859",
              "name": "宜川县",
              "en_name": "Yichuan"
            },
            {
              "code": "5003",
              "parentCode": "859",
              "name": "志丹县",
              "en_name": "Zhidan"
            },
            {
              "code": "5001",
              "parentCode": "859",
              "name": "子长市",
              "en_name": "Zizhang"
            }
          ]
        },
        {
          "code": "861",
          "parentCode": "556",
          "name": "榆林",
          "en_name": "YULIN",
          "sublist": [
            {
              "code": "5027",
              "parentCode": "861",
              "name": "定边县",
              "en_name": "Dingbian"
            },
            {
              "code": "5024",
              "parentCode": "861",
              "name": "府谷县",
              "en_name": "Fugu"
            },
            {
              "code": "5025",
              "parentCode": "861",
              "name": "横山区",
              "en_name": "Hengshan"
            },
            {
              "code": "5030",
              "parentCode": "861",
              "name": "佳县",
              "en_name": "Jia"
            },
            {
              "code": "5026",
              "parentCode": "861",
              "name": "靖边县",
              "en_name": "Jingbian"
            },
            {
              "code": "5029",
              "parentCode": "861",
              "name": "米脂县",
              "en_name": "Mizhi"
            },
            {
              "code": "5032",
              "parentCode": "861",
              "name": "清涧县",
              "en_name": "Qingjian"
            },
            {
              "code": "5023",
              "parentCode": "861",
              "name": "神木市",
              "en_name": "Shenmu"
            },
            {
              "code": "5028",
              "parentCode": "861",
              "name": "绥德县",
              "en_name": "Suide"
            },
            {
              "code": "5031",
              "parentCode": "861",
              "name": "吴堡县",
              "en_name": "Wubu"
            },
            {
              "code": "5022",
              "parentCode": "861",
              "name": "榆阳区",
              "en_name": "Yuyang"
            },
            {
              "code": "5033",
              "parentCode": "861",
              "name": "子洲县",
              "en_name": "Zizhou"
            }
          ]
        }
      ]
    },
    {
      "code": "533",
      "parentCode": "489",
      "name": "山西",
      "en_name": "SHANXI",
      "sublist": [
        {
          "code": "577",
          "parentCode": "533",
          "name": "大同",
          "en_name": "DATONG",
          "sublist": [
            {
              "code": "2847",
              "parentCode": "577",
              "name": "云州区",
              "en_name": "Datong"
            },
            {
              "code": "2852",
              "parentCode": "577",
              "name": "广灵县",
              "en_name": "Guangling"
            },
            {
              "code": "2853",
              "parentCode": "577",
              "name": "浑源县",
              "en_name": "Hunyuan"
            },
            {
              "code": "2849",
              "parentCode": "577",
              "name": "灵丘县",
              "en_name": "Lingqiu"
            },
            {
              "code": "2848",
              "parentCode": "577",
              "name": "天镇县",
              "en_name": "Tianzhen"
            },
            {
              "code": "2846",
              "parentCode": "577",
              "name": "新荣区",
              "en_name": "Xinrong"
            },
            {
              "code": "2850",
              "parentCode": "577",
              "name": "阳高县",
              "en_name": "Yanggao"
            },
            {
              "code": "2851",
              "parentCode": "577",
              "name": "左云县",
              "en_name": "Zuoyun"
            },
            {
              "code": "104031",
              "parentCode": "577",
              "name": "平城区",
              "en_name": "pingchengqu"
            },
            {
              "code": "104032",
              "parentCode": "577",
              "name": "云冈区",
              "en_name": "yungangqu"
            }
          ]
        },
        {
          "code": "580",
          "parentCode": "533",
          "name": "晋城",
          "en_name": "JINCHENG",
          "sublist": [
            {
              "code": "2872",
              "parentCode": "580",
              "name": "城区",
              "en_name": "Cheng"
            },
            {
              "code": "2873",
              "parentCode": "580",
              "name": "高平市",
              "en_name": "Gaoping"
            },
            {
              "code": "2875",
              "parentCode": "580",
              "name": "陵川县",
              "en_name": "Lingchuan"
            },
            {
              "code": "2877",
              "parentCode": "580",
              "name": "沁水县",
              "en_name": "Qinshui"
            },
            {
              "code": "2876",
              "parentCode": "580",
              "name": "阳城县",
              "en_name": "Yangcheng"
            },
            {
              "code": "2874",
              "parentCode": "580",
              "name": "泽州县",
              "en_name": "Zezhou"
            }
          ]
        },
        {
          "code": "582",
          "parentCode": "533",
          "name": "晋中",
          "en_name": "JINZHONG",
          "sublist": [
            {
              "code": "3283",
              "parentCode": "582",
              "name": "和顺县",
              "en_name": "Heshunxian"
            },
            {
              "code": "3290",
              "parentCode": "582",
              "name": "介休市",
              "en_name": "Jiexiushi"
            },
            {
              "code": "3289",
              "parentCode": "582",
              "name": "灵石县",
              "en_name": "Lingshixian"
            },
            {
              "code": "3288",
              "parentCode": "582",
              "name": "平遥县",
              "en_name": "Pingyaoxian"
            },
            {
              "code": "3287",
              "parentCode": "582",
              "name": "祁县",
              "en_name": "Qixian"
            },
            {
              "code": "3285",
              "parentCode": "582",
              "name": "寿阳县",
              "en_name": "Shouyangxian"
            },
            {
              "code": "3286",
              "parentCode": "582",
              "name": "太谷区",
              "en_name": "Taiguxian"
            },
            {
              "code": "3284",
              "parentCode": "582",
              "name": "昔阳县",
              "en_name": "Xiyangxian"
            },
            {
              "code": "3280",
              "parentCode": "582",
              "name": "榆次区",
              "en_name": "Yuciqu"
            },
            {
              "code": "3281",
              "parentCode": "582",
              "name": "榆社县",
              "en_name": "Yushexian"
            },
            {
              "code": "3282",
              "parentCode": "582",
              "name": "左权县",
              "en_name": "Zuoquanxian"
            }
          ]
        },
        {
          "code": "585",
          "parentCode": "533",
          "name": "临汾",
          "en_name": "LINFEN",
          "sublist": [
            {
              "code": "2926",
              "parentCode": "585",
              "name": "安泽县",
              "en_name": "Anze"
            },
            {
              "code": "2927",
              "parentCode": "585",
              "name": "大宁县",
              "en_name": "Daning"
            },
            {
              "code": "2924",
              "parentCode": "585",
              "name": "汾西县",
              "en_name": "Fenxi"
            },
            {
              "code": "2928",
              "parentCode": "585",
              "name": "浮山县",
              "en_name": "Fushan"
            },
            {
              "code": "2929",
              "parentCode": "585",
              "name": "古县",
              "en_name": "Gu"
            },
            {
              "code": "2936",
              "parentCode": "585",
              "name": "洪洞县",
              "en_name": "Hongdong"
            },
            {
              "code": "3279",
              "parentCode": "585",
              "name": "侯马市",
              "en_name": "Houma"
            },
            {
              "code": "2923",
              "parentCode": "585",
              "name": "霍州市",
              "en_name": "Huozhou"
            },
            {
              "code": "2925",
              "parentCode": "585",
              "name": "吉县",
              "en_name": "Ji"
            },
            {
              "code": "2937",
              "parentCode": "585",
              "name": "蒲县",
              "en_name": "Pu"
            },
            {
              "code": "2935",
              "parentCode": "585",
              "name": "曲沃县",
              "en_name": "Quwo"
            },
            {
              "code": "2931",
              "parentCode": "585",
              "name": "襄汾县",
              "en_name": "Xiangfen"
            },
            {
              "code": "2934",
              "parentCode": "585",
              "name": "乡宁县",
              "en_name": "Xiangning"
            },
            {
              "code": "2930",
              "parentCode": "585",
              "name": "隰县",
              "en_name": "Xi"
            },
            {
              "code": "2921",
              "parentCode": "585",
              "name": "尧都区",
              "en_name": "Raodu"
            },
            {
              "code": "2932",
              "parentCode": "585",
              "name": "翼城县",
              "en_name": "Yicheng"
            },
            {
              "code": "2933",
              "parentCode": "585",
              "name": "永和县",
              "en_name": "Yonghe"
            }
          ]
        },
        {
          "code": "586",
          "parentCode": "533",
          "name": "吕梁",
          "en_name": "LVLIANG",
          "sublist": [
            {
              "code": "2945",
              "parentCode": "586",
              "name": "方山县",
              "en_name": "Fangshan"
            },
            {
              "code": "2940",
              "parentCode": "586",
              "name": "汾阳市",
              "en_name": "Fenyang"
            },
            {
              "code": "2949",
              "parentCode": "586",
              "name": "交城县",
              "en_name": "Jiaocheng"
            },
            {
              "code": "2948",
              "parentCode": "586",
              "name": "交口县",
              "en_name": "Jiaokou"
            },
            {
              "code": "2947",
              "parentCode": "586",
              "name": "岚县",
              "en_name": "Lan"
            },
            {
              "code": "2944",
              "parentCode": "586",
              "name": "临县",
              "en_name": "Lin"
            },
            {
              "code": "2938",
              "parentCode": "586",
              "name": "离石区",
              "en_name": "Lishi"
            },
            {
              "code": "2946",
              "parentCode": "586",
              "name": "柳林县",
              "en_name": "Liulin"
            },
            {
              "code": "2950",
              "parentCode": "586",
              "name": "石楼县",
              "en_name": "Shilou"
            },
            {
              "code": "2941",
              "parentCode": "586",
              "name": "文水县",
              "en_name": "Wenshui"
            },
            {
              "code": "2939",
              "parentCode": "586",
              "name": "孝义市",
              "en_name": "Xiaoyi"
            },
            {
              "code": "2943",
              "parentCode": "586",
              "name": "兴县",
              "en_name": "Xing"
            },
            {
              "code": "2942",
              "parentCode": "586",
              "name": "中阳县",
              "en_name": "Zhongyang"
            }
          ]
        },
        {
          "code": "581",
          "parentCode": "533",
          "name": "朔州",
          "en_name": "SHUOZHOU",
          "sublist": [
            {
              "code": "2883",
              "parentCode": "581",
              "name": "怀仁市",
              "en_name": "Huairen"
            },
            {
              "code": "2879",
              "parentCode": "581",
              "name": "平鲁区",
              "en_name": "Pinglu"
            },
            {
              "code": "2880",
              "parentCode": "581",
              "name": "山阴县",
              "en_name": "Shanyin"
            },
            {
              "code": "2878",
              "parentCode": "581",
              "name": "朔城区",
              "en_name": "Shuocheng"
            },
            {
              "code": "2882",
              "parentCode": "581",
              "name": "应县",
              "en_name": "Ying"
            },
            {
              "code": "2881",
              "parentCode": "581",
              "name": "右玉县",
              "en_name": "Youyu"
            }
          ]
        },
        {
          "code": "576",
          "parentCode": "533",
          "name": "太原",
          "en_name": "TAIYUAN",
          "sublist": [
            {
              "code": "2510",
              "parentCode": "576",
              "name": "古交市",
              "en_name": "GUJIAOSHI"
            },
            {
              "code": "2504",
              "parentCode": "576",
              "name": "尖草坪区",
              "en_name": "JIANCAOPINGQU"
            },
            {
              "code": "2506",
              "parentCode": "576",
              "name": "晋源区",
              "en_name": "JINYUANQU"
            },
            {
              "code": "2509",
              "parentCode": "576",
              "name": "娄烦县",
              "en_name": "LOUFANXIAN"
            },
            {
              "code": "2507",
              "parentCode": "576",
              "name": "清徐县",
              "en_name": "QINGXUXIAN"
            },
            {
              "code": "2505",
              "parentCode": "576",
              "name": "万柏林区",
              "en_name": "WANBAILINQU"
            },
            {
              "code": "2501",
              "parentCode": "576",
              "name": "小店区",
              "en_name": "XIAODIANQU"
            },
            {
              "code": "2503",
              "parentCode": "576",
              "name": "杏花岭区",
              "en_name": "XINGHUALINGQU"
            },
            {
              "code": "2508",
              "parentCode": "576",
              "name": "阳曲县",
              "en_name": "YANGQUXIAN"
            },
            {
              "code": "2502",
              "parentCode": "576",
              "name": "迎泽区",
              "en_name": "YINGZEQU"
            }
          ]
        },
        {
          "code": "584",
          "parentCode": "533",
          "name": "忻州",
          "en_name": "XINZHOU",
          "sublist": [
            {
              "code": "2918",
              "parentCode": "584",
              "name": "保德县",
              "en_name": "Baode"
            },
            {
              "code": "2909",
              "parentCode": "584",
              "name": "代县",
              "en_name": "Dai"
            },
            {
              "code": "2919",
              "parentCode": "584",
              "name": "定襄县",
              "en_name": "Dingxiang"
            },
            {
              "code": "2916",
              "parentCode": "584",
              "name": "繁峙县",
              "en_name": "Fanzhi"
            },
            {
              "code": "2917",
              "parentCode": "584",
              "name": "河曲县",
              "en_name": "Hequ"
            },
            {
              "code": "2915",
              "parentCode": "584",
              "name": "静乐县",
              "en_name": "Jingle"
            },
            {
              "code": "2920",
              "parentCode": "584",
              "name": "岢岚县",
              "en_name": "Kelan"
            },
            {
              "code": "2914",
              "parentCode": "584",
              "name": "宁武县",
              "en_name": "Ningwu"
            },
            {
              "code": "2913",
              "parentCode": "584",
              "name": "偏关县",
              "en_name": "Pianguan"
            },
            {
              "code": "2910",
              "parentCode": "584",
              "name": "神池县",
              "en_name": "Shenchi"
            },
            {
              "code": "2912",
              "parentCode": "584",
              "name": "五台县",
              "en_name": "Wutai"
            },
            {
              "code": "2911",
              "parentCode": "584",
              "name": "五寨县",
              "en_name": "Wuzhai"
            },
            {
              "code": "2907",
              "parentCode": "584",
              "name": "忻府区",
              "en_name": "Xinfu"
            },
            {
              "code": "2908",
              "parentCode": "584",
              "name": "原平市",
              "en_name": "Pingyuan"
            }
          ]
        },
        {
          "code": "578",
          "parentCode": "533",
          "name": "阳泉",
          "en_name": "YANGQUAN",
          "sublist": [
            {
              "code": "2854",
              "parentCode": "578",
              "name": "城区",
              "en_name": "Cheng"
            },
            {
              "code": "2856",
              "parentCode": "578",
              "name": "郊区",
              "en_name": "Jiao"
            },
            {
              "code": "2855",
              "parentCode": "578",
              "name": "矿区",
              "en_name": "Kuang"
            },
            {
              "code": "2857",
              "parentCode": "578",
              "name": "平定县",
              "en_name": "Pingding"
            },
            {
              "code": "2858",
              "parentCode": "578",
              "name": "盂县",
              "en_name": "Yu"
            }
          ]
        },
        {
          "code": "583",
          "parentCode": "533",
          "name": "运城",
          "en_name": "YUNCHENG",
          "sublist": [
            {
              "code": "910",
              "parentCode": "583",
              "name": "永济市",
              "en_name": "YONGJI"
            },
            {
              "code": "2895",
              "parentCode": "583",
              "name": "河津市",
              "en_name": "Hejin"
            },
            {
              "code": "2901",
              "parentCode": "583",
              "name": "绛县",
              "en_name": "Jiang"
            },
            {
              "code": "2902",
              "parentCode": "583",
              "name": "稷山县",
              "en_name": "Jishan"
            },
            {
              "code": "2906",
              "parentCode": "583",
              "name": "临猗县",
              "en_name": "Linyi"
            },
            {
              "code": "2899",
              "parentCode": "583",
              "name": "平陆县",
              "en_name": "Pinglu"
            },
            {
              "code": "2903",
              "parentCode": "583",
              "name": "芮城县",
              "en_name": "Ruicheng"
            },
            {
              "code": "2905",
              "parentCode": "583",
              "name": "万荣县",
              "en_name": "Wanrong"
            },
            {
              "code": "2897",
              "parentCode": "583",
              "name": "闻喜县",
              "en_name": "Wenxi"
            },
            {
              "code": "2904",
              "parentCode": "583",
              "name": "夏县",
              "en_name": "Xia"
            },
            {
              "code": "2898",
              "parentCode": "583",
              "name": "新绛县",
              "en_name": "Xinjiang"
            },
            {
              "code": "2894",
              "parentCode": "583",
              "name": "盐湖区",
              "en_name": "Yanhu"
            },
            {
              "code": "2900",
              "parentCode": "583",
              "name": "垣曲县",
              "en_name": "Yuan"
            }
          ]
        },
        {
          "code": "579",
          "parentCode": "533",
          "name": "长治",
          "en_name": "CHANGZHI",
          "sublist": [
            {
              "code": "2859",
              "parentCode": "579",
              "name": "潞州区",
              "en_name": "Cheng"
            },
            {
              "code": "2871",
              "parentCode": "579",
              "name": "壶关县",
              "en_name": "Huguan"
            },
            {
              "code": "2868",
              "parentCode": "579",
              "name": "黎城县",
              "en_name": "Licheng"
            },
            {
              "code": "2861",
              "parentCode": "579",
              "name": "潞城区",
              "en_name": "Lucheng"
            },
            {
              "code": "2864",
              "parentCode": "579",
              "name": "平顺县",
              "en_name": "Pingshun"
            },
            {
              "code": "2870",
              "parentCode": "579",
              "name": "沁县",
              "en_name": "Qin"
            },
            {
              "code": "2866",
              "parentCode": "579",
              "name": "沁源县",
              "en_name": "Qinyuan"
            },
            {
              "code": "2867",
              "parentCode": "579",
              "name": "屯留区",
              "en_name": "Tunliu"
            },
            {
              "code": "2869",
              "parentCode": "579",
              "name": "武乡县",
              "en_name": "Wuxiang"
            },
            {
              "code": "2865",
              "parentCode": "579",
              "name": "襄垣县",
              "en_name": "Xiangyuan"
            },
            {
              "code": "2862",
              "parentCode": "579",
              "name": "上党区",
              "en_name": "Changzhi"
            },
            {
              "code": "2863",
              "parentCode": "579",
              "name": "长子县",
              "en_name": "Changzi"
            }
          ]
        }
      ]
    },
    {
      "code": "552",
      "parentCode": "489",
      "name": "四川",
      "en_name": "SICHUAN",
      "sublist": [
        {
          "code": "819",
          "parentCode": "552",
          "name": "阿坝",
          "en_name": "ABA",
          "sublist": [
            {
              "code": "4617",
              "parentCode": "819",
              "name": "阿坝县",
              "en_name": "Aba"
            },
            {
              "code": "4614",
              "parentCode": "819",
              "name": "黑水县",
              "en_name": "Heishui"
            },
            {
              "code": "4619",
              "parentCode": "819",
              "name": "红原县",
              "en_name": "Hongyuan"
            },
            {
              "code": "4612",
              "parentCode": "819",
              "name": "金川县",
              "en_name": "Jinchuan"
            },
            {
              "code": "4611",
              "parentCode": "819",
              "name": "九寨沟县",
              "en_name": "Jiuzhaigou"
            },
            {
              "code": "4608",
              "parentCode": "819",
              "name": "理县",
              "en_name": "Li"
            },
            {
              "code": "4615",
              "parentCode": "819",
              "name": "马尔康市",
              "en_name": "Maerkang"
            },
            {
              "code": "4609",
              "parentCode": "819",
              "name": "茂县",
              "en_name": "Mao"
            },
            {
              "code": "4616",
              "parentCode": "819",
              "name": "壤塘县",
              "en_name": "Rangtang"
            },
            {
              "code": "4618",
              "parentCode": "819",
              "name": "若尔盖县",
              "en_name": "Ruoergai"
            },
            {
              "code": "4610",
              "parentCode": "819",
              "name": "松潘县",
              "en_name": "Songpan"
            },
            {
              "code": "4607",
              "parentCode": "819",
              "name": "汶川县",
              "en_name": "Wenchuan"
            },
            {
              "code": "4613",
              "parentCode": "819",
              "name": "小金县",
              "en_name": "Xiaojin"
            }
          ]
        },
        {
          "code": "817",
          "parentCode": "552",
          "name": "巴中",
          "en_name": "BAZHONG",
          "sublist": [
            {
              "code": "4598",
              "parentCode": "817",
              "name": "巴州区",
              "en_name": "Bazhou"
            },
            {
              "code": "4599",
              "parentCode": "817",
              "name": "恩阳区",
              "en_name": "Enyang"
            },
            {
              "code": "4601",
              "parentCode": "817",
              "name": "南江县",
              "en_name": "Nanjiang"
            },
            {
              "code": "4602",
              "parentCode": "817",
              "name": "平昌县",
              "en_name": "Pingchang"
            },
            {
              "code": "4600",
              "parentCode": "817",
              "name": "通江县",
              "en_name": "Tongjiang"
            }
          ]
        },
        {
          "code": "801",
          "parentCode": "552",
          "name": "成都",
          "en_name": "CHENGDU",
          "sublist": [
            {
              "code": "10201",
              "parentCode": "801",
              "name": "简阳市",
              "en_name": "JIANYANG"
            },
            {
              "code": "2111",
              "parentCode": "801",
              "name": "成华区",
              "en_name": "Chenghua"
            },
            {
              "code": "2378",
              "parentCode": "801",
              "name": "崇州市",
              "en_name": "Chongzhou"
            },
            {
              "code": "2119",
              "parentCode": "801",
              "name": "大邑县",
              "en_name": "Dayi"
            },
            {
              "code": "2380",
              "parentCode": "801",
              "name": "都江堰市",
              "en_name": "Dujiangyan"
            },
            {
              "code": "2381",
              "parentCode": "801",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "3301",
              "parentCode": "801",
              "name": "高新西区",
              "en_name": "Gaoxinxiqu"
            },
            {
              "code": "2108",
              "parentCode": "801",
              "name": "锦江区",
              "en_name": "Jinjiang"
            },
            {
              "code": "2109",
              "parentCode": "801",
              "name": "金牛区",
              "en_name": "Jinniu"
            },
            {
              "code": "2118",
              "parentCode": "801",
              "name": "金堂县",
              "en_name": "Jintang"
            },
            {
              "code": "2112",
              "parentCode": "801",
              "name": "龙泉驿区",
              "en_name": "Longquanyi"
            },
            {
              "code": "2379",
              "parentCode": "801",
              "name": "彭州市",
              "en_name": "Pengzhou"
            },
            {
              "code": "2117",
              "parentCode": "801",
              "name": "郫都区",
              "en_name": "pi"
            },
            {
              "code": "2120",
              "parentCode": "801",
              "name": "蒲江县",
              "en_name": "Pujiang"
            },
            {
              "code": "2113",
              "parentCode": "801",
              "name": "青白江区",
              "en_name": "Qingbaijiang"
            },
            {
              "code": "2107",
              "parentCode": "801",
              "name": "青羊区",
              "en_name": "Qingyang"
            },
            {
              "code": "2377",
              "parentCode": "801",
              "name": "邛崃市",
              "en_name": "Qionglai"
            },
            {
              "code": "2116",
              "parentCode": "801",
              "name": "双流区",
              "en_name": "Shuangliu"
            },
            {
              "code": "3300",
              "parentCode": "801",
              "name": "天府新区",
              "en_name": "Tianfuxinqu"
            },
            {
              "code": "2115",
              "parentCode": "801",
              "name": "温江区",
              "en_name": "Wenjiang"
            },
            {
              "code": "2110",
              "parentCode": "801",
              "name": "武侯区",
              "en_name": "Wuhou"
            },
            {
              "code": "2114",
              "parentCode": "801",
              "name": "新都区",
              "en_name": "Xindu"
            },
            {
              "code": "2121",
              "parentCode": "801",
              "name": "新津区",
              "en_name": "xinjinqu"
            }
          ]
        },
        {
          "code": "815",
          "parentCode": "552",
          "name": "达州",
          "en_name": "DAZHOU",
          "sublist": [
            {
              "code": "4584",
              "parentCode": "815",
              "name": "达川区",
              "en_name": "Dachuan"
            },
            {
              "code": "4588",
              "parentCode": "815",
              "name": "大竹县",
              "en_name": "Dazhu"
            },
            {
              "code": "4587",
              "parentCode": "815",
              "name": "开江县",
              "en_name": "Kaijiang"
            },
            {
              "code": "4589",
              "parentCode": "815",
              "name": "渠县",
              "en_name": "Qu"
            },
            {
              "code": "4583",
              "parentCode": "815",
              "name": "通川区",
              "en_name": "Tongchuan"
            },
            {
              "code": "4585",
              "parentCode": "815",
              "name": "万源市",
              "en_name": "Wanyuan"
            },
            {
              "code": "4586",
              "parentCode": "815",
              "name": "宣汉县",
              "en_name": "Xuanhan"
            }
          ]
        },
        {
          "code": "805",
          "parentCode": "552",
          "name": "德阳",
          "en_name": "DEYANG",
          "sublist": [
            {
              "code": "4510",
              "parentCode": "805",
              "name": "广汉市",
              "en_name": "Guanghan"
            },
            {
              "code": "4509",
              "parentCode": "805",
              "name": "旌阳区",
              "en_name": "Jingyang"
            },
            {
              "code": "4514",
              "parentCode": "805",
              "name": "罗江区",
              "en_name": "Luojiang"
            },
            {
              "code": "4512",
              "parentCode": "805",
              "name": "绵竹市",
              "en_name": "Mianzhu"
            },
            {
              "code": "4511",
              "parentCode": "805",
              "name": "什邡市",
              "en_name": "Shifang"
            },
            {
              "code": "4513",
              "parentCode": "805",
              "name": "中江县",
              "en_name": "Zhongjiang"
            }
          ]
        },
        {
          "code": "820",
          "parentCode": "552",
          "name": "甘孜",
          "en_name": "GANZI",
          "sublist": [
            {
              "code": "4630",
              "parentCode": "820",
              "name": "白玉县",
              "en_name": "Baiyu"
            },
            {
              "code": "4634",
              "parentCode": "820",
              "name": "巴塘县",
              "en_name": "Batang"
            },
            {
              "code": "4622",
              "parentCode": "820",
              "name": "丹巴县",
              "en_name": "Danba"
            },
            {
              "code": "4636",
              "parentCode": "820",
              "name": "稻城县",
              "en_name": "Daocheng"
            },
            {
              "code": "4625",
              "parentCode": "820",
              "name": "道孚县",
              "en_name": "Daofu"
            },
            {
              "code": "4629",
              "parentCode": "820",
              "name": "德格县",
              "en_name": "Dege"
            },
            {
              "code": "4637",
              "parentCode": "820",
              "name": "得荣县",
              "en_name": "Derong"
            },
            {
              "code": "4627",
              "parentCode": "820",
              "name": "甘孜县",
              "en_name": "Ganzi"
            },
            {
              "code": "4623",
              "parentCode": "820",
              "name": "九龙县",
              "en_name": "Jiulong"
            },
            {
              "code": "4620",
              "parentCode": "820",
              "name": "康定市",
              "en_name": "Kangding"
            },
            {
              "code": "4633",
              "parentCode": "820",
              "name": "理塘县",
              "en_name": "Litang"
            },
            {
              "code": "4621",
              "parentCode": "820",
              "name": "泸定县",
              "en_name": "Luding"
            },
            {
              "code": "4626",
              "parentCode": "820",
              "name": "炉霍县",
              "en_name": "Luhuo"
            },
            {
              "code": "4631",
              "parentCode": "820",
              "name": "色达县",
              "en_name": "Seda"
            },
            {
              "code": "4632",
              "parentCode": "820",
              "name": "石渠县",
              "en_name": "Shiqu"
            },
            {
              "code": "4635",
              "parentCode": "820",
              "name": "乡城县",
              "en_name": "Xiangcheng"
            },
            {
              "code": "4628",
              "parentCode": "820",
              "name": "新龙县",
              "en_name": "Xinlong"
            },
            {
              "code": "4624",
              "parentCode": "820",
              "name": "雅江县",
              "en_name": "Yajiang"
            }
          ]
        },
        {
          "code": "814",
          "parentCode": "552",
          "name": "广安",
          "en_name": "GUANGAN",
          "sublist": [
            {
              "code": "4577",
              "parentCode": "814",
              "name": "广安区",
              "en_name": "Guangan"
            },
            {
              "code": "4579",
              "parentCode": "814",
              "name": "华蓥市",
              "en_name": "Huaying"
            },
            {
              "code": "4582",
              "parentCode": "814",
              "name": "邻水县",
              "en_name": "Linshui"
            },
            {
              "code": "4578",
              "parentCode": "814",
              "name": "前锋区",
              "en_name": "Qianfeng"
            },
            {
              "code": "4581",
              "parentCode": "814",
              "name": "武胜县",
              "en_name": "Wusheng"
            },
            {
              "code": "4580",
              "parentCode": "814",
              "name": "岳池县",
              "en_name": "Yuechi"
            }
          ]
        },
        {
          "code": "807",
          "parentCode": "552",
          "name": "广元",
          "en_name": "GUANGYUAN",
          "sublist": [
            {
              "code": "4530",
              "parentCode": "807",
              "name": "苍溪县",
              "en_name": "Cangxi"
            },
            {
              "code": "4526",
              "parentCode": "807",
              "name": "朝天区",
              "en_name": "Chaotian"
            },
            {
              "code": "4529",
              "parentCode": "807",
              "name": "剑阁县",
              "en_name": "Jiange"
            },
            {
              "code": "4524",
              "parentCode": "807",
              "name": "利州区",
              "en_name": "Lizhou"
            },
            {
              "code": "4528",
              "parentCode": "807",
              "name": "青川县",
              "en_name": "Qingchuan"
            },
            {
              "code": "4527",
              "parentCode": "807",
              "name": "旺苍县",
              "en_name": "Wangcang"
            },
            {
              "code": "4525",
              "parentCode": "807",
              "name": "昭化区",
              "en_name": "Zhaohua"
            }
          ]
        },
        {
          "code": "810",
          "parentCode": "552",
          "name": "乐山",
          "en_name": "LESHAN",
          "sublist": [
            {
              "code": "10065",
              "parentCode": "810",
              "name": "峨眉山市",
              "en_name": "EMEI"
            },
            {
              "code": "4550",
              "parentCode": "810",
              "name": "峨边彝族自治县",
              "en_name": "Ebianyizuzizhi"
            },
            {
              "code": "4548",
              "parentCode": "810",
              "name": "夹江县",
              "en_name": "Jiajiang"
            },
            {
              "code": "4547",
              "parentCode": "810",
              "name": "井研县",
              "en_name": "Jingyan"
            },
            {
              "code": "4544",
              "parentCode": "810",
              "name": "金口河区",
              "en_name": "Jinkouhe"
            },
            {
              "code": "4551",
              "parentCode": "810",
              "name": "马边彝族自治县",
              "en_name": "Mabianyizuzizhi"
            },
            {
              "code": "4549",
              "parentCode": "810",
              "name": "沐川县",
              "en_name": "Muchuan"
            },
            {
              "code": "4546",
              "parentCode": "810",
              "name": "犍为县",
              "en_name": "Qianwei"
            },
            {
              "code": "4542",
              "parentCode": "810",
              "name": "沙湾区",
              "en_name": "Shawan"
            },
            {
              "code": "4541",
              "parentCode": "810",
              "name": "市中区",
              "en_name": "Shizhong"
            },
            {
              "code": "4543",
              "parentCode": "810",
              "name": "五通桥区",
              "en_name": "Wutongqiao"
            }
          ]
        },
        {
          "code": "821",
          "parentCode": "552",
          "name": "凉山",
          "en_name": "LIANGSHAN",
          "sublist": [
            {
              "code": "10104",
              "parentCode": "821",
              "name": "西昌市",
              "en_name": "XICHANG"
            },
            {
              "code": "4646",
              "parentCode": "821",
              "name": "布拖县",
              "en_name": "Butuo"
            },
            {
              "code": "4641",
              "parentCode": "821",
              "name": "德昌县",
              "en_name": "Dechang"
            },
            {
              "code": "4652",
              "parentCode": "821",
              "name": "甘洛县",
              "en_name": "Ganluo"
            },
            {
              "code": "4643",
              "parentCode": "821",
              "name": "会东县",
              "en_name": "Huidong"
            },
            {
              "code": "4642",
              "parentCode": "821",
              "name": "会理市",
              "en_name": "huilishi"
            },
            {
              "code": "4647",
              "parentCode": "821",
              "name": "金阳县",
              "en_name": "Jinyang"
            },
            {
              "code": "4654",
              "parentCode": "821",
              "name": "雷波县",
              "en_name": "Leibo"
            },
            {
              "code": "4653",
              "parentCode": "821",
              "name": "美姑县",
              "en_name": "Meigu"
            },
            {
              "code": "4650",
              "parentCode": "821",
              "name": "冕宁县",
              "en_name": "Mianning"
            },
            {
              "code": "4639",
              "parentCode": "821",
              "name": "木里藏族自治县",
              "en_name": "Mulizangzuzizhi"
            },
            {
              "code": "4644",
              "parentCode": "821",
              "name": "宁南县",
              "en_name": "Ningnan"
            },
            {
              "code": "4645",
              "parentCode": "821",
              "name": "普格县",
              "en_name": "Puge"
            },
            {
              "code": "4649",
              "parentCode": "821",
              "name": "喜德县",
              "en_name": "Xide"
            },
            {
              "code": "4640",
              "parentCode": "821",
              "name": "盐源县",
              "en_name": "Yanyuan"
            },
            {
              "code": "4651",
              "parentCode": "821",
              "name": "越西县",
              "en_name": "Yuexi"
            },
            {
              "code": "4648",
              "parentCode": "821",
              "name": "昭觉县",
              "en_name": "Zhaojue"
            }
          ]
        },
        {
          "code": "804",
          "parentCode": "552",
          "name": "泸州",
          "en_name": "LUZHOU",
          "sublist": [
            {
              "code": "4507",
              "parentCode": "804",
              "name": "古蔺县",
              "en_name": "Gulin"
            },
            {
              "code": "4506",
              "parentCode": "804",
              "name": "合江县",
              "en_name": "Hejiang"
            },
            {
              "code": "4502",
              "parentCode": "804",
              "name": "江阳区",
              "en_name": "Jiangyang"
            },
            {
              "code": "4504",
              "parentCode": "804",
              "name": "龙马潭区",
              "en_name": "Longmatan"
            },
            {
              "code": "4505",
              "parentCode": "804",
              "name": "泸县",
              "en_name": "Lu"
            },
            {
              "code": "4503",
              "parentCode": "804",
              "name": "纳溪区",
              "en_name": "Naxi"
            },
            {
              "code": "4508",
              "parentCode": "804",
              "name": "叙永县",
              "en_name": "Xuyong"
            }
          ]
        },
        {
          "code": "812",
          "parentCode": "552",
          "name": "眉山",
          "en_name": "MEISHAN",
          "sublist": [
            {
              "code": "4565",
              "parentCode": "812",
              "name": "丹棱县",
              "en_name": "Danling"
            },
            {
              "code": "4561",
              "parentCode": "812",
              "name": "东坡区",
              "en_name": "Dongpo"
            },
            {
              "code": "4564",
              "parentCode": "812",
              "name": "洪雅县",
              "en_name": "Hongya"
            },
            {
              "code": "4563",
              "parentCode": "812",
              "name": "彭山区",
              "en_name": "Pengshan"
            },
            {
              "code": "4566",
              "parentCode": "812",
              "name": "青神县",
              "en_name": "Qingshen"
            },
            {
              "code": "4562",
              "parentCode": "812",
              "name": "仁寿县",
              "en_name": "Renshou"
            }
          ]
        },
        {
          "code": "806",
          "parentCode": "552",
          "name": "绵阳",
          "en_name": "MIANYANG",
          "sublist": [
            {
              "code": "4520",
              "parentCode": "806",
              "name": "安州区",
              "en_name": "An"
            },
            {
              "code": "4522",
              "parentCode": "806",
              "name": "北川羌族自治县",
              "en_name": "Beichuanqiangzuzizhi"
            },
            {
              "code": "4515",
              "parentCode": "806",
              "name": "涪城区",
              "en_name": "Fucheng"
            },
            {
              "code": "4517",
              "parentCode": "806",
              "name": "江油市",
              "en_name": "Jiangyou"
            },
            {
              "code": "4523",
              "parentCode": "806",
              "name": "平武县",
              "en_name": "Pingwu"
            },
            {
              "code": "4518",
              "parentCode": "806",
              "name": "三台县",
              "en_name": "Santai"
            },
            {
              "code": "4519",
              "parentCode": "806",
              "name": "盐亭县",
              "en_name": "Yanting"
            },
            {
              "code": "4516",
              "parentCode": "806",
              "name": "游仙区",
              "en_name": "Youxian"
            },
            {
              "code": "4521",
              "parentCode": "806",
              "name": "梓潼县",
              "en_name": "Zitong"
            }
          ]
        },
        {
          "code": "811",
          "parentCode": "552",
          "name": "南充",
          "en_name": "NANCHONG",
          "sublist": [
            {
              "code": "4553",
              "parentCode": "811",
              "name": "高坪区",
              "en_name": "Gaoping"
            },
            {
              "code": "4554",
              "parentCode": "811",
              "name": "嘉陵区",
              "en_name": "Jialing"
            },
            {
              "code": "4555",
              "parentCode": "811",
              "name": "阆中市",
              "en_name": "Langzhong"
            },
            {
              "code": "4556",
              "parentCode": "811",
              "name": "南部县",
              "en_name": "Nanbu"
            },
            {
              "code": "4558",
              "parentCode": "811",
              "name": "蓬安县",
              "en_name": "Pengan"
            },
            {
              "code": "4552",
              "parentCode": "811",
              "name": "顺庆区",
              "en_name": "Shunqing"
            },
            {
              "code": "4560",
              "parentCode": "811",
              "name": "西充县",
              "en_name": "Xichong"
            },
            {
              "code": "4559",
              "parentCode": "811",
              "name": "仪陇县",
              "en_name": "Yilong"
            },
            {
              "code": "4557",
              "parentCode": "811",
              "name": "营山县",
              "en_name": "Yingshan"
            }
          ]
        },
        {
          "code": "809",
          "parentCode": "552",
          "name": "内江",
          "en_name": "NEIJIANG",
          "sublist": [
            {
              "code": "4537",
              "parentCode": "809",
              "name": "东兴区",
              "en_name": "Dongxing"
            },
            {
              "code": "4540",
              "parentCode": "809",
              "name": "隆昌市",
              "en_name": "Longchang"
            },
            {
              "code": "4536",
              "parentCode": "809",
              "name": "市中区",
              "en_name": "Shizhong"
            },
            {
              "code": "4538",
              "parentCode": "809",
              "name": "威远县",
              "en_name": "Weiyuan"
            },
            {
              "code": "4539",
              "parentCode": "809",
              "name": "资中县",
              "en_name": "Zizhong"
            }
          ]
        },
        {
          "code": "803",
          "parentCode": "552",
          "name": "攀枝花",
          "en_name": "PANZHIHUA",
          "sublist": [
            {
              "code": "4497",
              "parentCode": "803",
              "name": "东区",
              "en_name": "Dong"
            },
            {
              "code": "4500",
              "parentCode": "803",
              "name": "米易县",
              "en_name": "Miyi"
            },
            {
              "code": "4499",
              "parentCode": "803",
              "name": "仁和区",
              "en_name": "Renhe"
            },
            {
              "code": "4498",
              "parentCode": "803",
              "name": "西区",
              "en_name": "Xi"
            },
            {
              "code": "4501",
              "parentCode": "803",
              "name": "盐边县",
              "en_name": "Yanbian"
            }
          ]
        },
        {
          "code": "808",
          "parentCode": "552",
          "name": "遂宁",
          "en_name": "SUINING",
          "sublist": [
            {
              "code": "4532",
              "parentCode": "808",
              "name": "安居区",
              "en_name": "Anju"
            },
            {
              "code": "4531",
              "parentCode": "808",
              "name": "船山区",
              "en_name": "Chuanshan"
            },
            {
              "code": "4535",
              "parentCode": "808",
              "name": "大英县",
              "en_name": "Daying"
            },
            {
              "code": "4533",
              "parentCode": "808",
              "name": "蓬溪县",
              "en_name": "Pengxi"
            },
            {
              "code": "4534",
              "parentCode": "808",
              "name": "射洪市",
              "en_name": "Shehong"
            }
          ]
        },
        {
          "code": "816",
          "parentCode": "552",
          "name": "雅安",
          "en_name": "YAAN",
          "sublist": [
            {
              "code": "4597",
              "parentCode": "816",
              "name": "宝兴县",
              "en_name": "Baoxing"
            },
            {
              "code": "4593",
              "parentCode": "816",
              "name": "汉源县",
              "en_name": "Hanyuan"
            },
            {
              "code": "4596",
              "parentCode": "816",
              "name": "芦山县",
              "en_name": "Lushan"
            },
            {
              "code": "4591",
              "parentCode": "816",
              "name": "名山区",
              "en_name": "Mingshan"
            },
            {
              "code": "4594",
              "parentCode": "816",
              "name": "石棉县",
              "en_name": "Shimian"
            },
            {
              "code": "4595",
              "parentCode": "816",
              "name": "天全县",
              "en_name": "Tianquan"
            },
            {
              "code": "4592",
              "parentCode": "816",
              "name": "荥经县",
              "en_name": "Yingjing"
            },
            {
              "code": "4590",
              "parentCode": "816",
              "name": "雨城区",
              "en_name": "Yucheng"
            }
          ]
        },
        {
          "code": "813",
          "parentCode": "552",
          "name": "宜宾",
          "en_name": "YIBIN",
          "sublist": [
            {
              "code": "4567",
              "parentCode": "813",
              "name": "翠屏区",
              "en_name": "Cuiping"
            },
            {
              "code": "4572",
              "parentCode": "813",
              "name": "高县",
              "en_name": "Gao"
            },
            {
              "code": "4573",
              "parentCode": "813",
              "name": "珙县",
              "en_name": "Gong"
            },
            {
              "code": "4570",
              "parentCode": "813",
              "name": "江安县",
              "en_name": "Jiangan"
            },
            {
              "code": "4568",
              "parentCode": "813",
              "name": "南溪区",
              "en_name": "Nanxi"
            },
            {
              "code": "4576",
              "parentCode": "813",
              "name": "屏山县",
              "en_name": "Pingshan"
            },
            {
              "code": "4575",
              "parentCode": "813",
              "name": "兴文县",
              "en_name": "Xingwen"
            },
            {
              "code": "4569",
              "parentCode": "813",
              "name": "叙州区",
              "en_name": "Yibin"
            },
            {
              "code": "4574",
              "parentCode": "813",
              "name": "筠连县",
              "en_name": "Junlian"
            },
            {
              "code": "4571",
              "parentCode": "813",
              "name": "长宁县",
              "en_name": "Changning"
            }
          ]
        },
        {
          "code": "802",
          "parentCode": "552",
          "name": "自贡",
          "en_name": "ZIGONG",
          "sublist": [
            {
              "code": "4493",
              "parentCode": "802",
              "name": "大安区",
              "en_name": "Daan"
            },
            {
              "code": "4496",
              "parentCode": "802",
              "name": "富顺县",
              "en_name": "Fushun"
            },
            {
              "code": "4492",
              "parentCode": "802",
              "name": "贡井区",
              "en_name": "Gongjing"
            },
            {
              "code": "4495",
              "parentCode": "802",
              "name": "荣县",
              "en_name": "Rong"
            },
            {
              "code": "4494",
              "parentCode": "802",
              "name": "沿滩区",
              "en_name": "Yantan"
            },
            {
              "code": "4491",
              "parentCode": "802",
              "name": "自流井区",
              "en_name": "Ziliujing"
            }
          ]
        },
        {
          "code": "818",
          "parentCode": "552",
          "name": "资阳",
          "en_name": "ZIYANG",
          "sublist": [
            {
              "code": "4605",
              "parentCode": "818",
              "name": "安岳县",
              "en_name": "Anyue"
            },
            {
              "code": "4606",
              "parentCode": "818",
              "name": "乐至县",
              "en_name": "Lezhi"
            },
            {
              "code": "4603",
              "parentCode": "818",
              "name": "雁江区",
              "en_name": "Yanjiang"
            }
          ]
        }
      ]
    },
    {
      "code": "563",
      "parentCode": "489",
      "name": "台湾",
      "en_name": "TAIWAN"
    },
    {
      "code": "531",
      "parentCode": "489",
      "name": "天津",
      "en_name": "TIANJIN",
      "sublist": [
        {
          "code": "2177",
          "parentCode": "531",
          "name": "宝坻区",
          "en_name": "Baodi",
          "sublist": []
        },
        {
          "code": "2175",
          "parentCode": "531",
          "name": "北辰区",
          "en_name": "Beichen",
          "sublist": []
        },
        {
          "code": "2171",
          "parentCode": "531",
          "name": "滨海新区",
          "en_name": "Binhaixin",
          "sublist": []
        },
        {
          "code": "2172",
          "parentCode": "531",
          "name": "东丽区",
          "en_name": "Dongli",
          "sublist": []
        },
        {
          "code": "2169",
          "parentCode": "531",
          "name": "河北区",
          "en_name": "Hebei",
          "sublist": []
        },
        {
          "code": "2166",
          "parentCode": "531",
          "name": "河东区",
          "en_name": "Hedong",
          "sublist": []
        },
        {
          "code": "2165",
          "parentCode": "531",
          "name": "和平区",
          "en_name": "Heping",
          "sublist": []
        },
        {
          "code": "2167",
          "parentCode": "531",
          "name": "河西区",
          "en_name": "Hexi",
          "sublist": []
        },
        {
          "code": "2170",
          "parentCode": "531",
          "name": "红桥区",
          "en_name": "Hongqiao",
          "sublist": []
        },
        {
          "code": "2178",
          "parentCode": "531",
          "name": "静海区",
          "en_name": "Jinghai",
          "sublist": []
        },
        {
          "code": "2174",
          "parentCode": "531",
          "name": "津南区",
          "en_name": "Jinnan",
          "sublist": []
        },
        {
          "code": "2180",
          "parentCode": "531",
          "name": "蓟州区",
          "en_name": "Ji",
          "sublist": []
        },
        {
          "code": "2168",
          "parentCode": "531",
          "name": "南开区",
          "en_name": "Nankai",
          "sublist": []
        },
        {
          "code": "2179",
          "parentCode": "531",
          "name": "宁河区",
          "en_name": "Ninghe",
          "sublist": []
        },
        {
          "code": "2176",
          "parentCode": "531",
          "name": "武清区",
          "en_name": "Wuqing",
          "sublist": []
        },
        {
          "code": "2173",
          "parentCode": "531",
          "name": "西青区",
          "en_name": "Xiqing",
          "sublist": []
        }
      ]
    },
    {
      "code": "561",
      "parentCode": "489",
      "name": "香港",
      "en_name": "HONGKONG"
    },
    {
      "code": "560",
      "parentCode": "489",
      "name": "新疆",
      "en_name": "XINJIANG",
      "sublist": [
        {
          "code": "897",
          "parentCode": "560",
          "name": "阿克苏",
          "en_name": "AKESU",
          "sublist": [
            {
              "code": "5238",
              "parentCode": "897",
              "name": "阿克苏市",
              "en_name": "Akesu"
            },
            {
              "code": "5245",
              "parentCode": "897",
              "name": "阿瓦提县",
              "en_name": "Awati"
            },
            {
              "code": "5243",
              "parentCode": "897",
              "name": "拜城县",
              "en_name": "Baicheng"
            },
            {
              "code": "5246",
              "parentCode": "897",
              "name": "柯坪县",
              "en_name": "Keping"
            },
            {
              "code": "5240",
              "parentCode": "897",
              "name": "库车市",
              "en_name": "Kuche"
            },
            {
              "code": "5241",
              "parentCode": "897",
              "name": "沙雅县",
              "en_name": "Shaya"
            },
            {
              "code": "5239",
              "parentCode": "897",
              "name": "温宿县",
              "en_name": "Wensu"
            },
            {
              "code": "5244",
              "parentCode": "897",
              "name": "乌什县",
              "en_name": "Wushi"
            },
            {
              "code": "5242",
              "parentCode": "897",
              "name": "新和县",
              "en_name": "Xinhe"
            }
          ]
        },
        {
          "code": "10176",
          "parentCode": "560",
          "name": "阿拉尔市",
          "en_name": "ALAER",
          "sublist": []
        },
        {
          "code": "903",
          "parentCode": "560",
          "name": "阿勒泰",
          "en_name": "ALETAI",
          "sublist": [
            {
              "code": "5289",
              "parentCode": "903",
              "name": "阿勒泰市",
              "en_name": "Aletai"
            },
            {
              "code": "5290",
              "parentCode": "903",
              "name": "布尔津县",
              "en_name": "Buerjin"
            },
            {
              "code": "5292",
              "parentCode": "903",
              "name": "福海县",
              "en_name": "Fuhai"
            },
            {
              "code": "5291",
              "parentCode": "903",
              "name": "富蕴县",
              "en_name": "Fuyun"
            },
            {
              "code": "5293",
              "parentCode": "903",
              "name": "哈巴河县",
              "en_name": "Habahe"
            },
            {
              "code": "5295",
              "parentCode": "903",
              "name": "吉木乃县",
              "en_name": "Jimunai"
            },
            {
              "code": "5294",
              "parentCode": "903",
              "name": "青河县",
              "en_name": "Qinghe"
            }
          ]
        },
        {
          "code": "896",
          "parentCode": "560",
          "name": "巴音郭楞",
          "en_name": "BAYINGUOLENG",
          "sublist": [
            {
              "code": "5237",
              "parentCode": "896",
              "name": "博湖县",
              "en_name": "Bohu"
            },
            {
              "code": "5235",
              "parentCode": "896",
              "name": "和静县",
              "en_name": "Hejing"
            },
            {
              "code": "5236",
              "parentCode": "896",
              "name": "和硕县",
              "en_name": "Heshuo"
            },
            {
              "code": "5229",
              "parentCode": "896",
              "name": "库尔勒市",
              "en_name": "Kuerle"
            },
            {
              "code": "5230",
              "parentCode": "896",
              "name": "轮台县",
              "en_name": "Luntai"
            },
            {
              "code": "5233",
              "parentCode": "896",
              "name": "且末县",
              "en_name": "Qiemo"
            },
            {
              "code": "5232",
              "parentCode": "896",
              "name": "若羌县",
              "en_name": "Ruoqiang"
            },
            {
              "code": "5234",
              "parentCode": "896",
              "name": "焉耆回族自治县",
              "en_name": "Yanqihuizuzizhi"
            },
            {
              "code": "5231",
              "parentCode": "896",
              "name": "尉犁县",
              "en_name": "Yuli"
            }
          ]
        },
        {
          "code": "932",
          "parentCode": "560",
          "name": "北屯市",
          "en_name": "BEITUNQU",
          "sublist": []
        },
        {
          "code": "895",
          "parentCode": "560",
          "name": "博尔塔拉",
          "en_name": "BOERTALA",
          "sublist": [
            {
              "code": "5226",
              "parentCode": "895",
              "name": "阿拉山口市",
              "en_name": "Alashankou"
            },
            {
              "code": "5225",
              "parentCode": "895",
              "name": "博乐市",
              "en_name": "Bole"
            },
            {
              "code": "5227",
              "parentCode": "895",
              "name": "精河县",
              "en_name": "Jinghe"
            },
            {
              "code": "5228",
              "parentCode": "895",
              "name": "温泉县",
              "en_name": "Wenqan"
            }
          ]
        },
        {
          "code": "894",
          "parentCode": "560",
          "name": "昌吉",
          "en_name": "CHANGJI",
          "sublist": [
            {
              "code": "5218",
              "parentCode": "894",
              "name": "昌吉市",
              "en_name": "Changji"
            },
            {
              "code": "5219",
              "parentCode": "894",
              "name": "阜康市",
              "en_name": "Fukang"
            },
            {
              "code": "5220",
              "parentCode": "894",
              "name": "呼图壁县",
              "en_name": "Hutubi"
            },
            {
              "code": "5223",
              "parentCode": "894",
              "name": "吉木萨尔县",
              "en_name": "Jimusaer"
            },
            {
              "code": "5221",
              "parentCode": "894",
              "name": "玛纳斯县",
              "en_name": "Manasi"
            },
            {
              "code": "5224",
              "parentCode": "894",
              "name": "木垒哈萨克自治县",
              "en_name": "Muleihasakezizhi"
            },
            {
              "code": "5222",
              "parentCode": "894",
              "name": "奇台县",
              "en_name": "Qitai"
            }
          ]
        },
        {
          "code": "893",
          "parentCode": "560",
          "name": "哈密",
          "en_name": "HAMI",
          "sublist": [
            {
              "code": "5216",
              "parentCode": "893",
              "name": "巴里坤哈萨克自治县",
              "en_name": "Balikunhasakezizhi"
            },
            {
              "code": "5215",
              "parentCode": "893",
              "name": "伊州区",
              "en_name": "Hami"
            },
            {
              "code": "5217",
              "parentCode": "893",
              "name": "伊吾县",
              "en_name": "Yiwu"
            }
          ]
        },
        {
          "code": "900",
          "parentCode": "560",
          "name": "和田",
          "en_name": "HETIAN",
          "sublist": [
            {
              "code": "5268",
              "parentCode": "900",
              "name": "策勒县",
              "en_name": "Cele"
            },
            {
              "code": "5263",
              "parentCode": "900",
              "name": "和田市",
              "en_name": "Hetian"
            },
            {
              "code": "5264",
              "parentCode": "900",
              "name": "和田县",
              "en_name": "Hetian"
            },
            {
              "code": "5267",
              "parentCode": "900",
              "name": "洛浦县",
              "en_name": "Luopu"
            },
            {
              "code": "5270",
              "parentCode": "900",
              "name": "民丰县",
              "en_name": "Minfeng"
            },
            {
              "code": "5265",
              "parentCode": "900",
              "name": "墨玉县",
              "en_name": "Moyu"
            },
            {
              "code": "5266",
              "parentCode": "900",
              "name": "皮山县",
              "en_name": "Pishan"
            },
            {
              "code": "5269",
              "parentCode": "900",
              "name": "于田县",
              "en_name": "Yutian"
            }
          ]
        },
        {
          "code": "899",
          "parentCode": "560",
          "name": "喀什",
          "en_name": "KESHEN",
          "sublist": [
            {
              "code": "5261",
              "parentCode": "899",
              "name": "巴楚县",
              "en_name": "Bachu"
            },
            {
              "code": "5260",
              "parentCode": "899",
              "name": "伽师县",
              "en_name": "Jiashi"
            },
            {
              "code": "5251",
              "parentCode": "899",
              "name": "喀什市",
              "en_name": "Kashi"
            },
            {
              "code": "5258",
              "parentCode": "899",
              "name": "麦盖提县",
              "en_name": "Maigaiti"
            },
            {
              "code": "5256",
              "parentCode": "899",
              "name": "莎车县",
              "en_name": "Shache"
            },
            {
              "code": "5252",
              "parentCode": "899",
              "name": "疏附县",
              "en_name": "Shufu"
            },
            {
              "code": "5253",
              "parentCode": "899",
              "name": "疏勒县",
              "en_name": "Shule"
            },
            {
              "code": "5262",
              "parentCode": "899",
              "name": "塔什库尔干塔吉克自治县",
              "en_name": "Tashikuergantajikezizhi"
            },
            {
              "code": "5257",
              "parentCode": "899",
              "name": "叶城县",
              "en_name": "Yecheng"
            },
            {
              "code": "5254",
              "parentCode": "899",
              "name": "英吉沙县",
              "en_name": "Yingjisha"
            },
            {
              "code": "5259",
              "parentCode": "899",
              "name": "岳普湖县",
              "en_name": "Yuepuhu"
            },
            {
              "code": "5255",
              "parentCode": "899",
              "name": "泽普县",
              "en_name": "Zepu"
            }
          ]
        },
        {
          "code": "891",
          "parentCode": "560",
          "name": "克拉玛依",
          "en_name": "KELAMAYI",
          "sublist": [
            {
              "code": "5210",
              "parentCode": "891",
              "name": "白碱滩区",
              "en_name": "Baijiantan"
            },
            {
              "code": "5208",
              "parentCode": "891",
              "name": "独山子区",
              "en_name": "Dushanzi"
            },
            {
              "code": "5209",
              "parentCode": "891",
              "name": "克拉玛依区",
              "en_name": "Kelamayi"
            },
            {
              "code": "5211",
              "parentCode": "891",
              "name": "乌尔禾区",
              "en_name": "Wuerhe"
            }
          ]
        },
        {
          "code": "898",
          "parentCode": "560",
          "name": "克孜勒苏柯尔克孜",
          "en_name": "KEZILESUKEERKEZI",
          "sublist": [
            {
              "code": "5249",
              "parentCode": "898",
              "name": "阿合奇县",
              "en_name": "Aheqi"
            },
            {
              "code": "5248",
              "parentCode": "898",
              "name": "阿克陶县",
              "en_name": "Aketao"
            },
            {
              "code": "5247",
              "parentCode": "898",
              "name": "阿图什市",
              "en_name": "Atushi"
            },
            {
              "code": "5250",
              "parentCode": "898",
              "name": "乌恰县",
              "en_name": "Wuqia"
            }
          ]
        },
        {
          "code": "10061",
          "parentCode": "560",
          "name": "石河子市",
          "en_name": "SHIHEZI",
          "sublist": []
        },
        {
          "code": "10301",
          "parentCode": "560",
          "name": "双河市",
          "en_name": "SHUANGHE",
          "sublist": []
        },
        {
          "code": "902",
          "parentCode": "560",
          "name": "塔城",
          "en_name": "TACHENG",
          "sublist": [
            {
              "code": "10166",
              "parentCode": "902",
              "name": "乌苏市",
              "en_name": "WUSU"
            },
            {
              "code": "5284",
              "parentCode": "902",
              "name": "额敏县",
              "en_name": "Emin"
            },
            {
              "code": "5288",
              "parentCode": "902",
              "name": "和布克赛尔蒙古自治县",
              "en_name": "Hebukesaiermengguzizhi"
            },
            {
              "code": "5285",
              "parentCode": "902",
              "name": "沙湾市",
              "en_name": "shawanshi"
            },
            {
              "code": "5282",
              "parentCode": "902",
              "name": "塔城市",
              "en_name": "Tacheng"
            },
            {
              "code": "5286",
              "parentCode": "902",
              "name": "托里县",
              "en_name": "Tuoli"
            },
            {
              "code": "5287",
              "parentCode": "902",
              "name": "裕民县",
              "en_name": "Yumin"
            }
          ]
        },
        {
          "code": "10302",
          "parentCode": "560",
          "name": "铁门关市",
          "en_name": "TIEMENGUAN",
          "sublist": []
        },
        {
          "code": "892",
          "parentCode": "560",
          "name": "吐鲁番",
          "en_name": "TULUFAN",
          "sublist": [
            {
              "code": "5213",
              "parentCode": "892",
              "name": "鄯善县",
              "en_name": "Shanshan"
            },
            {
              "code": "5212",
              "parentCode": "892",
              "name": "高昌区",
              "en_name": "Tulufan"
            },
            {
              "code": "5214",
              "parentCode": "892",
              "name": "托克逊县",
              "en_name": "Tuokexun"
            }
          ]
        },
        {
          "code": "10177",
          "parentCode": "560",
          "name": "图木舒克市",
          "en_name": "TUMUSHUKE",
          "sublist": []
        },
        {
          "code": "10178",
          "parentCode": "560",
          "name": "五家渠市",
          "en_name": "WUJIAQU",
          "sublist": []
        },
        {
          "code": "890",
          "parentCode": "560",
          "name": "乌鲁木齐",
          "en_name": "WULUMUQI",
          "sublist": [
            {
              "code": "3298",
              "parentCode": "890",
              "name": "达坂城区",
              "en_name": "Dabanchengqu"
            },
            {
              "code": "3297",
              "parentCode": "890",
              "name": "米东区",
              "en_name": "Midongqu"
            },
            {
              "code": "3294",
              "parentCode": "890",
              "name": "沙依巴克区",
              "en_name": "Shayibakequ"
            },
            {
              "code": "3293",
              "parentCode": "890",
              "name": "水磨沟区",
              "en_name": "Shuimogouqu"
            },
            {
              "code": "3295",
              "parentCode": "890",
              "name": "天山区",
              "en_name": "Tianshanqu"
            },
            {
              "code": "3296",
              "parentCode": "890",
              "name": "头屯河区",
              "en_name": "Toutunhequ"
            },
            {
              "code": "3299",
              "parentCode": "890",
              "name": "乌鲁木齐县",
              "en_name": "Wulumuqixian"
            },
            {
              "code": "3292",
              "parentCode": "890",
              "name": "新市区",
              "en_name": "Xinshiqu"
            }
          ]
        },
        {
          "code": "901",
          "parentCode": "560",
          "name": "伊犁",
          "en_name": "YILI",
          "sublist": [
            {
              "code": "10164",
              "parentCode": "901",
              "name": "奎屯市",
              "en_name": "KUITUNSHI"
            },
            {
              "code": "5275",
              "parentCode": "901",
              "name": "察布查尔锡伯自治县",
              "en_name": "Chabuchaerxibozizhi"
            },
            {
              "code": "5277",
              "parentCode": "901",
              "name": "巩留县",
              "en_name": "Gongliu"
            },
            {
              "code": "5276",
              "parentCode": "901",
              "name": "霍城县",
              "en_name": "Huocheng"
            },
            {
              "code": "5273",
              "parentCode": "901",
              "name": "霍尔果斯市",
              "en_name": "Huoerguosishi"
            },
            {
              "code": "5281",
              "parentCode": "901",
              "name": "尼勒克县",
              "en_name": "Nileke"
            },
            {
              "code": "5280",
              "parentCode": "901",
              "name": "特克斯县",
              "en_name": "Tekesi"
            },
            {
              "code": "5278",
              "parentCode": "901",
              "name": "新源县",
              "en_name": "Xinyuan"
            },
            {
              "code": "5271",
              "parentCode": "901",
              "name": "伊宁市",
              "en_name": "Yining"
            },
            {
              "code": "5274",
              "parentCode": "901",
              "name": "伊宁县",
              "en_name": "Yining"
            },
            {
              "code": "5279",
              "parentCode": "901",
              "name": "昭苏县",
              "en_name": "Zhaosu"
            }
          ]
        },
        {
          "code": "104028",
          "parentCode": "560",
          "name": "可克达拉市",
          "en_name": "kekedalashi",
          "sublist": []
        },
        {
          "code": "104029",
          "parentCode": "560",
          "name": "昆玉市",
          "en_name": "kunyushi",
          "sublist": []
        },
        {
          "code": "104030",
          "parentCode": "560",
          "name": "胡杨河市",
          "en_name": "huyangheshi",
          "sublist": []
        },
        {
          "code": "104049",
          "parentCode": "560",
          "name": "新星市",
          "en_name": "xinxingshi",
          "sublist": []
        }
      ]
    },
    {
      "code": "555",
      "parentCode": "489",
      "name": "西藏",
      "en_name": "TIBET",
      "sublist": [
        {
          "code": "852",
          "parentCode": "555",
          "name": "阿里",
          "en_name": "ALI",
          "sublist": [
            {
              "code": "4929",
              "parentCode": "852",
              "name": "措勤县",
              "en_name": "Cuoqin"
            },
            {
              "code": "4925",
              "parentCode": "852",
              "name": "噶尔县",
              "en_name": "Gaer"
            },
            {
              "code": "4928",
              "parentCode": "852",
              "name": "改则县",
              "en_name": "Gaize"
            },
            {
              "code": "4927",
              "parentCode": "852",
              "name": "革吉县",
              "en_name": "Geji"
            },
            {
              "code": "4923",
              "parentCode": "852",
              "name": "普兰县",
              "en_name": "Pulan"
            },
            {
              "code": "4926",
              "parentCode": "852",
              "name": "日土县",
              "en_name": "Ritu"
            },
            {
              "code": "4924",
              "parentCode": "852",
              "name": "札达县",
              "en_name": "Zhada"
            }
          ]
        },
        {
          "code": "848",
          "parentCode": "555",
          "name": "昌都",
          "en_name": "CHANGDU",
          "sublist": [
            {
              "code": "4877",
              "parentCode": "848",
              "name": "八宿县",
              "en_name": "Basu"
            },
            {
              "code": "4881",
              "parentCode": "848",
              "name": "边坝县",
              "en_name": "Bianba"
            },
            {
              "code": "4871",
              "parentCode": "848",
              "name": "卡若区",
              "en_name": "Changdu"
            },
            {
              "code": "4876",
              "parentCode": "848",
              "name": "察雅县",
              "en_name": "Chaya"
            },
            {
              "code": "4875",
              "parentCode": "848",
              "name": "丁青县",
              "en_name": "Dingqing"
            },
            {
              "code": "4873",
              "parentCode": "848",
              "name": "贡觉县",
              "en_name": "Gongjue"
            },
            {
              "code": "4872",
              "parentCode": "848",
              "name": "江达县",
              "en_name": "Jiangda"
            },
            {
              "code": "4874",
              "parentCode": "848",
              "name": "类乌齐县",
              "en_name": "Leiwuqi"
            },
            {
              "code": "4880",
              "parentCode": "848",
              "name": "洛隆县",
              "en_name": "Luolong"
            },
            {
              "code": "4879",
              "parentCode": "848",
              "name": "芒康县",
              "en_name": "Mangkang"
            },
            {
              "code": "4878",
              "parentCode": "848",
              "name": "左贡县",
              "en_name": "Zuogong"
            }
          ]
        },
        {
          "code": "847",
          "parentCode": "555",
          "name": "拉萨",
          "en_name": "LASA",
          "sublist": [
            {
              "code": "4863",
              "parentCode": "847",
              "name": "城关区",
              "en_name": "Chengguan"
            },
            {
              "code": "4865",
              "parentCode": "847",
              "name": "当雄县",
              "en_name": "Dangxiong"
            },
            {
              "code": "4869",
              "parentCode": "847",
              "name": "达孜区",
              "en_name": "Dazi"
            },
            {
              "code": "4868",
              "parentCode": "847",
              "name": "堆龙德庆区",
              "en_name": "Duilongdeqing"
            },
            {
              "code": "4864",
              "parentCode": "847",
              "name": "林周县",
              "en_name": "Linzhou"
            },
            {
              "code": "4870",
              "parentCode": "847",
              "name": "墨竹工卡县",
              "en_name": "Mozhugongka"
            },
            {
              "code": "4866",
              "parentCode": "847",
              "name": "尼木县",
              "en_name": "Nimu"
            },
            {
              "code": "4867",
              "parentCode": "847",
              "name": "曲水县",
              "en_name": "Qushui"
            }
          ]
        },
        {
          "code": "853",
          "parentCode": "555",
          "name": "林芝",
          "en_name": "LINZHI",
          "sublist": [
            {
              "code": "4934",
              "parentCode": "853",
              "name": "波密县",
              "en_name": "Bomi"
            },
            {
              "code": "4935",
              "parentCode": "853",
              "name": "察隅县",
              "en_name": "Chayu"
            },
            {
              "code": "4931",
              "parentCode": "853",
              "name": "工布江达县",
              "en_name": "Gongbujiangda"
            },
            {
              "code": "4936",
              "parentCode": "853",
              "name": "朗县",
              "en_name": "Lang"
            },
            {
              "code": "4930",
              "parentCode": "853",
              "name": "巴宜区",
              "en_name": "Linzhi"
            },
            {
              "code": "4932",
              "parentCode": "853",
              "name": "米林市",
              "en_name": "Milin"
            },
            {
              "code": "4933",
              "parentCode": "853",
              "name": "墨脱县",
              "en_name": "Motuo"
            }
          ]
        },
        {
          "code": "851",
          "parentCode": "555",
          "name": "那曲",
          "en_name": "NAQU",
          "sublist": [
            {
              "code": "4916",
              "parentCode": "851",
              "name": "安多县",
              "en_name": "Anduo"
            },
            {
              "code": "4919",
              "parentCode": "851",
              "name": "班戈县",
              "en_name": "Bange"
            },
            {
              "code": "4920",
              "parentCode": "851",
              "name": "巴青县",
              "en_name": "Baqing"
            },
            {
              "code": "4914",
              "parentCode": "851",
              "name": "比如县",
              "en_name": "Biru"
            },
            {
              "code": "4913",
              "parentCode": "851",
              "name": "嘉黎县",
              "en_name": "Jiali"
            },
            {
              "code": "4912",
              "parentCode": "851",
              "name": "色尼区",
              "en_name": "Naqu"
            },
            {
              "code": "4915",
              "parentCode": "851",
              "name": "聂荣县",
              "en_name": "Nierong"
            },
            {
              "code": "4921",
              "parentCode": "851",
              "name": "尼玛县",
              "en_name": "Nima"
            },
            {
              "code": "4917",
              "parentCode": "851",
              "name": "申扎县",
              "en_name": "Shenzha"
            },
            {
              "code": "4922",
              "parentCode": "851",
              "name": "双湖县",
              "en_name": "Shuanghu"
            },
            {
              "code": "4918",
              "parentCode": "851",
              "name": "索县",
              "en_name": "Suo"
            }
          ]
        },
        {
          "code": "850",
          "parentCode": "555",
          "name": "日喀则",
          "en_name": "RIKEZE",
          "sublist": [
            {
              "code": "4900",
              "parentCode": "850",
              "name": "昂仁县",
              "en_name": "Angren"
            },
            {
              "code": "4902",
              "parentCode": "850",
              "name": "白朗县",
              "en_name": "Bailang"
            },
            {
              "code": "4905",
              "parentCode": "850",
              "name": "定结县",
              "en_name": "Dingjie"
            },
            {
              "code": "4897",
              "parentCode": "850",
              "name": "定日县",
              "en_name": "Dingri"
            },
            {
              "code": "4911",
              "parentCode": "850",
              "name": "岗巴县",
              "en_name": "Gangba"
            },
            {
              "code": "4896",
              "parentCode": "850",
              "name": "江孜县",
              "en_name": "Jiangzi"
            },
            {
              "code": "4908",
              "parentCode": "850",
              "name": "吉隆县",
              "en_name": "Jilong"
            },
            {
              "code": "4904",
              "parentCode": "850",
              "name": "康马县",
              "en_name": "Kangma"
            },
            {
              "code": "4899",
              "parentCode": "850",
              "name": "拉孜县",
              "en_name": "Lazi"
            },
            {
              "code": "4895",
              "parentCode": "850",
              "name": "南木林县",
              "en_name": "Nanmulin"
            },
            {
              "code": "4909",
              "parentCode": "850",
              "name": "聂拉木县",
              "en_name": "Nielamu"
            },
            {
              "code": "4903",
              "parentCode": "850",
              "name": "仁布县",
              "en_name": "Renbu"
            },
            {
              "code": "4910",
              "parentCode": "850",
              "name": "萨嘎县",
              "en_name": "Saga"
            },
            {
              "code": "4898",
              "parentCode": "850",
              "name": "萨迦县",
              "en_name": "Sajia"
            },
            {
              "code": "4894",
              "parentCode": "850",
              "name": "桑珠孜区",
              "en_name": "Sangzhuzi"
            },
            {
              "code": "4901",
              "parentCode": "850",
              "name": "谢通门县",
              "en_name": "Xietongmen"
            },
            {
              "code": "4907",
              "parentCode": "850",
              "name": "亚东县",
              "en_name": "Yadong"
            },
            {
              "code": "4906",
              "parentCode": "850",
              "name": "仲巴县",
              "en_name": "Zhongba"
            }
          ]
        },
        {
          "code": "849",
          "parentCode": "555",
          "name": "山南",
          "en_name": "SHANNAN",
          "sublist": [
            {
              "code": "4888",
              "parentCode": "849",
              "name": "措美县",
              "en_name": "Cuomei"
            },
            {
              "code": "4892",
              "parentCode": "849",
              "name": "错那市",
              "en_name": "Cuona"
            },
            {
              "code": "4884",
              "parentCode": "849",
              "name": "贡嘎县",
              "en_name": "Gongga"
            },
            {
              "code": "4890",
              "parentCode": "849",
              "name": "加查县",
              "en_name": "Jiacha"
            },
            {
              "code": "4893",
              "parentCode": "849",
              "name": "浪卡子县",
              "en_name": "Langkazi"
            },
            {
              "code": "4891",
              "parentCode": "849",
              "name": "隆子县",
              "en_name": "Longzi"
            },
            {
              "code": "4889",
              "parentCode": "849",
              "name": "洛扎县",
              "en_name": "Luozha"
            },
            {
              "code": "4882",
              "parentCode": "849",
              "name": "乃东区",
              "en_name": "Naidong"
            },
            {
              "code": "4886",
              "parentCode": "849",
              "name": "琼结县",
              "en_name": "Qiongjie"
            },
            {
              "code": "4887",
              "parentCode": "849",
              "name": "曲松县",
              "en_name": "Qusong"
            },
            {
              "code": "4885",
              "parentCode": "849",
              "name": "桑日县",
              "en_name": "Sangri"
            },
            {
              "code": "4883",
              "parentCode": "849",
              "name": "扎囊县",
              "en_name": "Zhanang"
            }
          ]
        }
      ]
    },
    {
      "code": "554",
      "parentCode": "489",
      "name": "云南",
      "en_name": "YUNNAN",
      "sublist": [
        {
          "code": "834",
          "parentCode": "554",
          "name": "保山",
          "en_name": "BAOSHAN",
          "sublist": [
            {
              "code": "4779",
              "parentCode": "834",
              "name": "昌宁县",
              "en_name": "Changning"
            },
            {
              "code": "4778",
              "parentCode": "834",
              "name": "龙陵县",
              "en_name": "Longling"
            },
            {
              "code": "4775",
              "parentCode": "834",
              "name": "隆阳区",
              "en_name": "Longyang"
            },
            {
              "code": "4776",
              "parentCode": "834",
              "name": "施甸县",
              "en_name": "Shidian"
            },
            {
              "code": "4777",
              "parentCode": "834",
              "name": "腾冲市",
              "en_name": "Tengchong"
            }
          ]
        },
        {
          "code": "836",
          "parentCode": "554",
          "name": "楚雄",
          "en_name": "CHUXIONG",
          "sublist": [
            {
              "code": "4791",
              "parentCode": "836",
              "name": "楚雄市",
              "en_name": "Chuxiong"
            },
            {
              "code": "4796",
              "parentCode": "836",
              "name": "大姚县",
              "en_name": "Dayao"
            },
            {
              "code": "4800",
              "parentCode": "836",
              "name": "禄丰市",
              "en_name": "lufengshi"
            },
            {
              "code": "4793",
              "parentCode": "836",
              "name": "牟定县",
              "en_name": "Mouding"
            },
            {
              "code": "4794",
              "parentCode": "836",
              "name": "南华县",
              "en_name": "Nanhua"
            },
            {
              "code": "4792",
              "parentCode": "836",
              "name": "双柏县",
              "en_name": "Shuangbai"
            },
            {
              "code": "4799",
              "parentCode": "836",
              "name": "武定县",
              "en_name": "Wuding"
            },
            {
              "code": "4795",
              "parentCode": "836",
              "name": "姚安县",
              "en_name": "Yaoan"
            },
            {
              "code": "4797",
              "parentCode": "836",
              "name": "永仁县",
              "en_name": "Yongren"
            },
            {
              "code": "4798",
              "parentCode": "836",
              "name": "元谋县",
              "en_name": "Yuanmou"
            }
          ]
        },
        {
          "code": "841",
          "parentCode": "554",
          "name": "大理",
          "en_name": "DALI",
          "sublist": [
            {
              "code": "4829",
              "parentCode": "841",
              "name": "宾川县",
              "en_name": "Binchuan"
            },
            {
              "code": "4826",
              "parentCode": "841",
              "name": "大理市",
              "en_name": "Dali"
            },
            {
              "code": "4835",
              "parentCode": "841",
              "name": "洱源县",
              "en_name": "Eryuan"
            },
            {
              "code": "4837",
              "parentCode": "841",
              "name": "鹤庆县",
              "en_name": "Heqing"
            },
            {
              "code": "4836",
              "parentCode": "841",
              "name": "剑川县",
              "en_name": "Jianchuan"
            },
            {
              "code": "4830",
              "parentCode": "841",
              "name": "弥渡县",
              "en_name": "Midu"
            },
            {
              "code": "4831",
              "parentCode": "841",
              "name": "南涧彝族自治县",
              "en_name": "Nanjianyizuzizhi"
            },
            {
              "code": "4832",
              "parentCode": "841",
              "name": "巍山彝族回族自治县",
              "en_name": "Weishanyizuhuizuzizhi"
            },
            {
              "code": "4828",
              "parentCode": "841",
              "name": "祥云县",
              "en_name": "Xiangyun"
            },
            {
              "code": "4827",
              "parentCode": "841",
              "name": "漾濞彝族自治县",
              "en_name": "Yangbiyizuzizhi"
            },
            {
              "code": "4833",
              "parentCode": "841",
              "name": "永平县",
              "en_name": "Yongping"
            },
            {
              "code": "4834",
              "parentCode": "841",
              "name": "云龙县",
              "en_name": "Yunlong"
            }
          ]
        },
        {
          "code": "842",
          "parentCode": "554",
          "name": "德宏",
          "en_name": "DEHONG",
          "sublist": [
            {
              "code": "4840",
              "parentCode": "842",
              "name": "梁河县",
              "en_name": "Lianghe"
            },
            {
              "code": "4842",
              "parentCode": "842",
              "name": "陇川县",
              "en_name": "Longchuan"
            },
            {
              "code": "4839",
              "parentCode": "842",
              "name": "芒市",
              "en_name": "Mang"
            },
            {
              "code": "4838",
              "parentCode": "842",
              "name": "瑞丽市",
              "en_name": "Ruili"
            },
            {
              "code": "4841",
              "parentCode": "842",
              "name": "盈江县",
              "en_name": "Yingjiang"
            }
          ]
        },
        {
          "code": "845",
          "parentCode": "554",
          "name": "迪庆",
          "en_name": "DIQING",
          "sublist": [
            {
              "code": "4853",
              "parentCode": "845",
              "name": "德钦县",
              "en_name": "Deqin"
            },
            {
              "code": "4854",
              "parentCode": "845",
              "name": "维西傈僳族自治县",
              "en_name": "Weixilisuzuzizhi"
            },
            {
              "code": "4852",
              "parentCode": "845",
              "name": "香格里拉市",
              "en_name": "Xianggelila"
            }
          ]
        },
        {
          "code": "837",
          "parentCode": "554",
          "name": "红河",
          "en_name": "HONGHE",
          "sublist": [
            {
              "code": "4801",
              "parentCode": "837",
              "name": "个旧市",
              "en_name": "Gejiu"
            },
            {
              "code": "4813",
              "parentCode": "837",
              "name": "河口瑶族自治县",
              "en_name": "Hekouyaozuzizhi"
            },
            {
              "code": "4810",
              "parentCode": "837",
              "name": "红河县",
              "en_name": "Honghe"
            },
            {
              "code": "4806",
              "parentCode": "837",
              "name": "建水县",
              "en_name": "Jianshui"
            },
            {
              "code": "4811",
              "parentCode": "837",
              "name": "金平苗族瑶族傣族自治县",
              "en_name": "Jinpingmiaozuyaozudaizuzizhi"
            },
            {
              "code": "4802",
              "parentCode": "837",
              "name": "开远市",
              "en_name": "Kaiyuan"
            },
            {
              "code": "4808",
              "parentCode": "837",
              "name": "泸西县",
              "en_name": "Luxi"
            },
            {
              "code": "4812",
              "parentCode": "837",
              "name": "绿春县",
              "en_name": "Lvchun"
            },
            {
              "code": "4803",
              "parentCode": "837",
              "name": "蒙自市",
              "en_name": "Mengzi"
            },
            {
              "code": "4804",
              "parentCode": "837",
              "name": "弥勒市",
              "en_name": "Mile"
            },
            {
              "code": "4805",
              "parentCode": "837",
              "name": "屏边苗族自治县",
              "en_name": "Pingbianmiaozuzizhi"
            },
            {
              "code": "4807",
              "parentCode": "837",
              "name": "石屏县",
              "en_name": "Shiping"
            },
            {
              "code": "4809",
              "parentCode": "837",
              "name": "元阳县",
              "en_name": "Yuanyang"
            }
          ]
        },
        {
          "code": "831",
          "parentCode": "554",
          "name": "昆明",
          "en_name": "KUNMING",
          "sublist": [
            {
              "code": "3272",
              "parentCode": "831",
              "name": "安宁市",
              "en_name": "Anningshi"
            },
            {
              "code": "3264",
              "parentCode": "831",
              "name": "呈贡区",
              "en_name": "Chenggongqu"
            },
            {
              "code": "3263",
              "parentCode": "831",
              "name": "东川区",
              "en_name": "Dongchuanqu"
            },
            {
              "code": "3266",
              "parentCode": "831",
              "name": "富民县",
              "en_name": "Fuminxian"
            },
            {
              "code": "3261",
              "parentCode": "831",
              "name": "官渡区",
              "en_name": "Guanduqu"
            },
            {
              "code": "3265",
              "parentCode": "831",
              "name": "晋宁区",
              "en_name": "jinningxian"
            },
            {
              "code": "3270",
              "parentCode": "831",
              "name": "禄劝彝族苗族自治县",
              "en_name": "Luquanxian"
            },
            {
              "code": "3260",
              "parentCode": "831",
              "name": "盘龙区",
              "en_name": "Panlongqu"
            },
            {
              "code": "3268",
              "parentCode": "831",
              "name": "石林彝族自治县",
              "en_name": "Shilinyizuzizhixian"
            },
            {
              "code": "3269",
              "parentCode": "831",
              "name": "嵩明县",
              "en_name": "Songmingxian"
            },
            {
              "code": "3259",
              "parentCode": "831",
              "name": "五华区",
              "en_name": "Wuhuaqu"
            },
            {
              "code": "3262",
              "parentCode": "831",
              "name": "西山区",
              "en_name": "Xishanqu"
            },
            {
              "code": "3271",
              "parentCode": "831",
              "name": "寻甸回族彝族自治县",
              "en_name": "Xundianxian"
            },
            {
              "code": "3267",
              "parentCode": "831",
              "name": "宜良县",
              "en_name": "Yiliangxian"
            }
          ]
        },
        {
          "code": "843",
          "parentCode": "554",
          "name": "丽江",
          "en_name": "LIJIANG",
          "sublist": [
            {
              "code": "4843",
              "parentCode": "843",
              "name": "古城区",
              "en_name": "Gucheng"
            },
            {
              "code": "4846",
              "parentCode": "843",
              "name": "华坪县",
              "en_name": "Huaping"
            },
            {
              "code": "4847",
              "parentCode": "843",
              "name": "宁蒗彝族自治县",
              "en_name": "Ninglangyizuzizhi"
            },
            {
              "code": "4845",
              "parentCode": "843",
              "name": "永胜县",
              "en_name": "Yongsheng"
            },
            {
              "code": "4844",
              "parentCode": "843",
              "name": "玉龙纳西族自治县",
              "en_name": "Yulongnaxizuzizhi"
            }
          ]
        },
        {
          "code": "846",
          "parentCode": "554",
          "name": "临沧",
          "en_name": "LINCANG",
          "sublist": [
            {
              "code": "4862",
              "parentCode": "846",
              "name": "沧源佤族自治县",
              "en_name": "Cangyuanwazuzizhi"
            },
            {
              "code": "4856",
              "parentCode": "846",
              "name": "凤庆县",
              "en_name": "Fengqing"
            },
            {
              "code": "4861",
              "parentCode": "846",
              "name": "耿马傣族佤族自治县",
              "en_name": "Gengmadaizuwazuzhi"
            },
            {
              "code": "4855",
              "parentCode": "846",
              "name": "临翔区",
              "en_name": "Linxiang"
            },
            {
              "code": "4860",
              "parentCode": "846",
              "name": "双江拉祜族佤族布朗族傣族自治县",
              "en_name": "Shuangjianglahuzuwazubulangzudaizuzizhi"
            },
            {
              "code": "4858",
              "parentCode": "846",
              "name": "永德县",
              "en_name": "Yongde"
            },
            {
              "code": "4857",
              "parentCode": "846",
              "name": "云县",
              "en_name": "Yun"
            },
            {
              "code": "4859",
              "parentCode": "846",
              "name": "镇康县",
              "en_name": "Zhenkang"
            }
          ]
        },
        {
          "code": "844",
          "parentCode": "554",
          "name": "怒江",
          "en_name": "NUJIANG",
          "sublist": [
            {
              "code": "4849",
              "parentCode": "844",
              "name": "福贡县",
              "en_name": "Fugong"
            },
            {
              "code": "4850",
              "parentCode": "844",
              "name": "贡山独龙族怒族自治县",
              "en_name": "Gongshandulongzunuzuzizhi"
            },
            {
              "code": "4851",
              "parentCode": "844",
              "name": "兰坪白族普米族自治县",
              "en_name": "Langpingbaizupumizuzizhi"
            },
            {
              "code": "4848",
              "parentCode": "844",
              "name": "泸水市",
              "en_name": "Lushui"
            }
          ]
        },
        {
          "code": "10163",
          "parentCode": "554",
          "name": "普洱",
          "en_name": "PUER",
          "sublist": [
            {
              "code": "5318",
              "parentCode": "10163",
              "name": "江城哈尼族彝族自治县",
              "en_name": "Jiangchenghanizuyizuzizhi"
            },
            {
              "code": "5315",
              "parentCode": "10163",
              "name": "景东彝族自治县",
              "en_name": "Jingdongyizuzizhi"
            },
            {
              "code": "5316",
              "parentCode": "10163",
              "name": "景谷傣族彝族自治县",
              "en_name": "Jingguyizudaizuzizhi"
            },
            {
              "code": "5320",
              "parentCode": "10163",
              "name": "澜沧拉祜族自治县",
              "en_name": "Lancanglahuzuzizhi"
            },
            {
              "code": "5319",
              "parentCode": "10163",
              "name": "孟连傣族拉祜族佤族自治县",
              "en_name": "Mengliandaizulahuzuwazuzizhi"
            },
            {
              "code": "5314",
              "parentCode": "10163",
              "name": "墨江哈尼族自治县",
              "en_name": "Mojianghanizuzizhi"
            },
            {
              "code": "5313",
              "parentCode": "10163",
              "name": "宁洱哈尼族彝族自治县",
              "en_name": "Ningerhanizuyizuzizhi"
            },
            {
              "code": "3402",
              "parentCode": "10163",
              "name": "思茅区",
              "en_name": "Simao"
            },
            {
              "code": "5321",
              "parentCode": "10163",
              "name": "西盟佤族自治县",
              "en_name": "Ximengwazuzizhi"
            },
            {
              "code": "5317",
              "parentCode": "10163",
              "name": "镇沅彝族哈尼族拉祜族自治县",
              "en_name": "Zhenyuanyizuhanizulahuzuzizhi"
            }
          ]
        },
        {
          "code": "832",
          "parentCode": "554",
          "name": "曲靖",
          "en_name": "QUJING",
          "sublist": [
            {
              "code": "4763",
              "parentCode": "832",
              "name": "富源县",
              "en_name": "Fuyuan"
            },
            {
              "code": "4764",
              "parentCode": "832",
              "name": "会泽县",
              "en_name": "Huize"
            },
            {
              "code": "4760",
              "parentCode": "832",
              "name": "陆良县",
              "en_name": "Luliang"
            },
            {
              "code": "4762",
              "parentCode": "832",
              "name": "罗平县",
              "en_name": "Luoping"
            },
            {
              "code": "4759",
              "parentCode": "832",
              "name": "马龙区",
              "en_name": "Malong"
            },
            {
              "code": "4757",
              "parentCode": "832",
              "name": "麒麟区",
              "en_name": "Qilin"
            },
            {
              "code": "4761",
              "parentCode": "832",
              "name": "师宗县",
              "en_name": "Shizong"
            },
            {
              "code": "4758",
              "parentCode": "832",
              "name": "宣威市",
              "en_name": "Xuanwei"
            },
            {
              "code": "4765",
              "parentCode": "832",
              "name": "沾益区",
              "en_name": "Zhanyi"
            }
          ]
        },
        {
          "code": "838",
          "parentCode": "554",
          "name": "文山",
          "en_name": "WENSHAN",
          "sublist": [
            {
              "code": "4821",
              "parentCode": "838",
              "name": "富宁县",
              "en_name": "Funing"
            },
            {
              "code": "4820",
              "parentCode": "838",
              "name": "广南县",
              "en_name": "Guangnan"
            },
            {
              "code": "4818",
              "parentCode": "838",
              "name": "马关县",
              "en_name": "Maguan"
            },
            {
              "code": "4817",
              "parentCode": "838",
              "name": "麻栗坡县",
              "en_name": "Malipo"
            },
            {
              "code": "4819",
              "parentCode": "838",
              "name": "丘北县",
              "en_name": "Qiubei"
            },
            {
              "code": "4814",
              "parentCode": "838",
              "name": "文山市",
              "en_name": "Wenshan"
            },
            {
              "code": "4816",
              "parentCode": "838",
              "name": "西畴县",
              "en_name": "Xichou"
            },
            {
              "code": "4815",
              "parentCode": "838",
              "name": "砚山县",
              "en_name": "Yanshan"
            }
          ]
        },
        {
          "code": "840",
          "parentCode": "554",
          "name": "西双版纳",
          "en_name": "XISHUANGBANNA",
          "sublist": [
            {
              "code": "4823",
              "parentCode": "840",
              "name": "景洪市",
              "en_name": "Jinghong"
            },
            {
              "code": "4824",
              "parentCode": "840",
              "name": "勐海县",
              "en_name": "Menghai"
            },
            {
              "code": "4825",
              "parentCode": "840",
              "name": "勐腊县",
              "en_name": "Mengla"
            }
          ]
        },
        {
          "code": "833",
          "parentCode": "554",
          "name": "玉溪",
          "en_name": "YUXI",
          "sublist": [
            {
              "code": "4768",
              "parentCode": "833",
              "name": "澄江市",
              "en_name": "Chengjiang"
            },
            {
              "code": "4772",
              "parentCode": "833",
              "name": "峨山彝族自治县",
              "en_name": "Eshanyizuzizhi"
            },
            {
              "code": "4766",
              "parentCode": "833",
              "name": "红塔区",
              "en_name": "Hongta"
            },
            {
              "code": "4770",
              "parentCode": "833",
              "name": "华宁县",
              "en_name": "Huaning"
            },
            {
              "code": "4767",
              "parentCode": "833",
              "name": "江川区",
              "en_name": "Jiangchuan"
            },
            {
              "code": "4769",
              "parentCode": "833",
              "name": "通海县",
              "en_name": "Tonghai"
            },
            {
              "code": "4773",
              "parentCode": "833",
              "name": "新平彝族傣族自治县",
              "en_name": "Xinpingyizudaizuzizhi"
            },
            {
              "code": "4771",
              "parentCode": "833",
              "name": "易门县",
              "en_name": "Yimen"
            },
            {
              "code": "4774",
              "parentCode": "833",
              "name": "元江哈尼族彝族傣族自治县",
              "en_name": "Yuanjianghanizuyizudaizuzizhi"
            }
          ]
        },
        {
          "code": "835",
          "parentCode": "554",
          "name": "昭通",
          "en_name": "ZHAOTONG",
          "sublist": [
            {
              "code": "4784",
              "parentCode": "835",
              "name": "大关县",
              "en_name": "Daguan"
            },
            {
              "code": "4781",
              "parentCode": "835",
              "name": "鲁甸县",
              "en_name": "Ludian"
            },
            {
              "code": "4782",
              "parentCode": "835",
              "name": "巧家县",
              "en_name": "Qiaojia"
            },
            {
              "code": "4790",
              "parentCode": "835",
              "name": "水富市",
              "en_name": "Shuifu"
            },
            {
              "code": "4786",
              "parentCode": "835",
              "name": "绥江县",
              "en_name": "Suijiang"
            },
            {
              "code": "4789",
              "parentCode": "835",
              "name": "威信县",
              "en_name": "Weixin"
            },
            {
              "code": "4783",
              "parentCode": "835",
              "name": "盐津县",
              "en_name": "Yanjin"
            },
            {
              "code": "4788",
              "parentCode": "835",
              "name": "彝良县",
              "en_name": "Yiliang"
            },
            {
              "code": "4785",
              "parentCode": "835",
              "name": "永善县",
              "en_name": "Yongshan"
            },
            {
              "code": "4780",
              "parentCode": "835",
              "name": "昭阳区",
              "en_name": "Zhaoyang"
            },
            {
              "code": "4787",
              "parentCode": "835",
              "name": "镇雄县",
              "en_name": "Zhenxiong"
            }
          ]
        }
      ]
    },
    {
      "code": "540",
      "parentCode": "489",
      "name": "浙江",
      "en_name": "ZHEJIANG",
      "sublist": [
        {
          "code": "653",
          "parentCode": "540",
          "name": "杭州",
          "en_name": "HANGZHOU",
          "sublist": [
            {
              "code": "2238",
              "parentCode": "653",
              "name": "滨江区",
              "en_name": "Binjiang"
            },
            {
              "code": "2242",
              "parentCode": "653",
              "name": "淳安县",
              "en_name": "Chunan"
            },
            {
              "code": "2478",
              "parentCode": "653",
              "name": "富阳区",
              "en_name": "Fuyang"
            },
            {
              "code": "2236",
              "parentCode": "653",
              "name": "拱墅区",
              "en_name": "Gongshu"
            },
            {
              "code": "2409",
              "parentCode": "653",
              "name": "建德市",
              "en_name": "Jiande"
            },
            {
              "code": "2235",
              "parentCode": "653",
              "name": "江干区",
              "en_name": "Jianggan"
            },
            {
              "code": "2479",
              "parentCode": "653",
              "name": "临安区",
              "en_name": "Linan"
            },
            {
              "code": "2233",
              "parentCode": "653",
              "name": "上城区",
              "en_name": "Shangcheng"
            },
            {
              "code": "2241",
              "parentCode": "653",
              "name": "桐庐县",
              "en_name": "Tonglu"
            },
            {
              "code": "2234",
              "parentCode": "653",
              "name": "下城区",
              "en_name": "Xiacheng"
            },
            {
              "code": "2239",
              "parentCode": "653",
              "name": "萧山区",
              "en_name": "Xiaoshan"
            },
            {
              "code": "2457",
              "parentCode": "653",
              "name": "下沙",
              "en_name": "Xiasha"
            },
            {
              "code": "2237",
              "parentCode": "653",
              "name": "西湖区",
              "en_name": "Xihu"
            },
            {
              "code": "2240",
              "parentCode": "653",
              "name": "余杭区",
              "en_name": "Yuhang"
            },
            {
              "code": "104041",
              "parentCode": "653",
              "name": "钱塘区",
              "en_name": "qiantangqu"
            },
            {
              "code": "104042",
              "parentCode": "653",
              "name": "临平区",
              "en_name": "linpingqu"
            }
          ]
        },
        {
          "code": "657",
          "parentCode": "540",
          "name": "湖州",
          "en_name": "HUZHOU",
          "sublist": [
            {
              "code": "3134",
              "parentCode": "657",
              "name": "安吉县",
              "en_name": "Anjixian"
            },
            {
              "code": "3133",
              "parentCode": "657",
              "name": "长兴县",
              "en_name": "Changxingxian"
            },
            {
              "code": "3388",
              "parentCode": "657",
              "name": "德清县",
              "en_name": "Deqing"
            },
            {
              "code": "3132",
              "parentCode": "657",
              "name": "南浔区",
              "en_name": "Nanxunqu"
            },
            {
              "code": "3131",
              "parentCode": "657",
              "name": "吴兴区",
              "en_name": "Wuxingqu"
            }
          ]
        },
        {
          "code": "656",
          "parentCode": "540",
          "name": "嘉兴",
          "en_name": "JIAXING",
          "sublist": [
            {
              "code": "3382",
              "parentCode": "656",
              "name": "海宁市",
              "en_name": "Haining"
            },
            {
              "code": "3123",
              "parentCode": "656",
              "name": "海盐县",
              "en_name": "Haiyanxian"
            },
            {
              "code": "3380",
              "parentCode": "656",
              "name": "嘉善县",
              "en_name": "Jiashanxian"
            },
            {
              "code": "3121",
              "parentCode": "656",
              "name": "南湖区",
              "en_name": "Nanhuqu"
            },
            {
              "code": "3379",
              "parentCode": "656",
              "name": "平湖市",
              "en_name": "Pinghu"
            },
            {
              "code": "3381",
              "parentCode": "656",
              "name": "桐乡市",
              "en_name": "Tongxiangshi"
            },
            {
              "code": "3122",
              "parentCode": "656",
              "name": "秀洲区",
              "en_name": "Xiuzhouqu"
            }
          ]
        },
        {
          "code": "659",
          "parentCode": "540",
          "name": "金华",
          "en_name": "JINHUA",
          "sublist": [
            {
              "code": "3377",
              "parentCode": "659",
              "name": "东阳市",
              "en_name": "Dongyangshi"
            },
            {
              "code": "3116",
              "parentCode": "659",
              "name": "金东区",
              "en_name": "Jindongqu"
            },
            {
              "code": "3120",
              "parentCode": "659",
              "name": "兰溪市",
              "en_name": "Lanxishi"
            },
            {
              "code": "3119",
              "parentCode": "659",
              "name": "磐安县",
              "en_name": "Pananxian"
            },
            {
              "code": "3118",
              "parentCode": "659",
              "name": "浦江县",
              "en_name": "Pujiangxian"
            },
            {
              "code": "3115",
              "parentCode": "659",
              "name": "婺城区",
              "en_name": "Wuchengqu"
            },
            {
              "code": "3117",
              "parentCode": "659",
              "name": "武义县",
              "en_name": "Wuyixian"
            },
            {
              "code": "3376",
              "parentCode": "659",
              "name": "义乌市",
              "en_name": "Yiwushi"
            },
            {
              "code": "3378",
              "parentCode": "659",
              "name": "永康市",
              "en_name": "Yongkangshi"
            }
          ]
        },
        {
          "code": "663",
          "parentCode": "540",
          "name": "丽水",
          "en_name": "LISHUI",
          "sublist": [
            {
              "code": "3142",
              "parentCode": "663",
              "name": "景宁畲族自治县",
              "en_name": "Jingningxian"
            },
            {
              "code": "3137",
              "parentCode": "663",
              "name": "缙云县",
              "en_name": "Jinyunxian"
            },
            {
              "code": "3135",
              "parentCode": "663",
              "name": "莲都区",
              "en_name": "Lianduqu"
            },
            {
              "code": "3389",
              "parentCode": "663",
              "name": "龙泉市",
              "en_name": "longquan"
            },
            {
              "code": "3136",
              "parentCode": "663",
              "name": "青田县",
              "en_name": "Qingtianxian"
            },
            {
              "code": "3141",
              "parentCode": "663",
              "name": "庆元县",
              "en_name": "Qingyuanxian"
            },
            {
              "code": "3139",
              "parentCode": "663",
              "name": "松阳县",
              "en_name": "Songyangxian"
            },
            {
              "code": "3138",
              "parentCode": "663",
              "name": "遂昌县",
              "en_name": "Suichangxian"
            },
            {
              "code": "3140",
              "parentCode": "663",
              "name": "云和县",
              "en_name": "Yunhexian"
            }
          ]
        },
        {
          "code": "654",
          "parentCode": "540",
          "name": "宁波",
          "en_name": "NINGBO",
          "sublist": [
            {
              "code": "3006",
              "parentCode": "654",
              "name": "北仑区",
              "en_name": "Beilunqu"
            },
            {
              "code": "3370",
              "parentCode": "654",
              "name": "慈溪市",
              "en_name": "Cixishi"
            },
            {
              "code": "3001",
              "parentCode": "654",
              "name": "奉化区",
              "en_name": "Fenghuaqu"
            },
            {
              "code": "3008",
              "parentCode": "654",
              "name": "高新区",
              "en_name": "Gaoxinqu"
            },
            {
              "code": "3003",
              "parentCode": "654",
              "name": "海曙区",
              "en_name": "Haishuqu"
            },
            {
              "code": "3005",
              "parentCode": "654",
              "name": "江北区",
              "en_name": "Jiangbeiqu"
            },
            {
              "code": "3372",
              "parentCode": "654",
              "name": "宁海县",
              "en_name": "Ninghaixian"
            },
            {
              "code": "3373",
              "parentCode": "654",
              "name": "象山县",
              "en_name": "Xiangshanxian"
            },
            {
              "code": "3002",
              "parentCode": "654",
              "name": "鄞州区",
              "en_name": "Yinzhouqu"
            },
            {
              "code": "3371",
              "parentCode": "654",
              "name": "余姚市",
              "en_name": "Yuyaoshi"
            },
            {
              "code": "3007",
              "parentCode": "654",
              "name": "镇海区",
              "en_name": "Zhenhaiqu"
            }
          ]
        },
        {
          "code": "660",
          "parentCode": "540",
          "name": "衢州",
          "en_name": "QUZHOU",
          "sublist": [
            {
              "code": "3521",
              "parentCode": "660",
              "name": "常山县",
              "en_name": "Changshan"
            },
            {
              "code": "3520",
              "parentCode": "660",
              "name": "江山市",
              "en_name": "Jiangshan"
            },
            {
              "code": "3522",
              "parentCode": "660",
              "name": "开化县",
              "en_name": "Kaihua"
            },
            {
              "code": "3518",
              "parentCode": "660",
              "name": "柯城区",
              "en_name": "Kecheng"
            },
            {
              "code": "3523",
              "parentCode": "660",
              "name": "龙游县",
              "en_name": "Longyou"
            },
            {
              "code": "3519",
              "parentCode": "660",
              "name": "衢江区",
              "en_name": "Qujiang"
            }
          ]
        },
        {
          "code": "658",
          "parentCode": "540",
          "name": "绍兴",
          "en_name": "SHAOXING",
          "sublist": [
            {
              "code": "3104",
              "parentCode": "658",
              "name": "柯桥区",
              "en_name": "Keqiaoqu"
            },
            {
              "code": "3386",
              "parentCode": "658",
              "name": "上虞区",
              "en_name": "Shangyu"
            },
            {
              "code": "3106",
              "parentCode": "658",
              "name": "嵊州市",
              "en_name": "Shengzhoushi"
            },
            {
              "code": "3105",
              "parentCode": "658",
              "name": "新昌县",
              "en_name": "Xinchangxian"
            },
            {
              "code": "3103",
              "parentCode": "658",
              "name": "越城区",
              "en_name": "Yuechengqu"
            },
            {
              "code": "3387",
              "parentCode": "658",
              "name": "诸暨市",
              "en_name": "Zhujishi"
            }
          ]
        },
        {
          "code": "662",
          "parentCode": "540",
          "name": "台州",
          "en_name": "TAIZHOU",
          "sublist": [
            {
              "code": "3125",
              "parentCode": "662",
              "name": "黄岩区",
              "en_name": "Huangyanqu"
            },
            {
              "code": "3124",
              "parentCode": "662",
              "name": "椒江区",
              "en_name": "Jiaojiangqu"
            },
            {
              "code": "3130",
              "parentCode": "662",
              "name": "临海市",
              "en_name": "Linhaishi"
            },
            {
              "code": "3126",
              "parentCode": "662",
              "name": "路桥区",
              "en_name": "Luqiaoqu"
            },
            {
              "code": "3375",
              "parentCode": "662",
              "name": "三门县",
              "en_name": "Sanmenxian"
            },
            {
              "code": "3127",
              "parentCode": "662",
              "name": "天台县",
              "en_name": "Tiantaixian"
            },
            {
              "code": "3129",
              "parentCode": "662",
              "name": "温岭市",
              "en_name": "Wenlingshi"
            },
            {
              "code": "3128",
              "parentCode": "662",
              "name": "仙居县",
              "en_name": "Xianjuxian"
            },
            {
              "code": "3374",
              "parentCode": "662",
              "name": "玉环市",
              "en_name": "Yuhuanxian"
            }
          ]
        },
        {
          "code": "655",
          "parentCode": "540",
          "name": "温州",
          "en_name": "WENZHOU",
          "sublist": [
            {
              "code": "3112",
              "parentCode": "655",
              "name": "苍南县",
              "en_name": "Cangnanxian"
            },
            {
              "code": "3110",
              "parentCode": "655",
              "name": "洞头区",
              "en_name": "Dongtouqu"
            },
            {
              "code": "3108",
              "parentCode": "655",
              "name": "龙湾区",
              "en_name": "Longwanqu"
            },
            {
              "code": "3107",
              "parentCode": "655",
              "name": "鹿城区",
              "en_name": "Luchengqu"
            },
            {
              "code": "3109",
              "parentCode": "655",
              "name": "瓯海区",
              "en_name": "Ouhaiqu"
            },
            {
              "code": "3111",
              "parentCode": "655",
              "name": "平阳县",
              "en_name": "Pingyangxian"
            },
            {
              "code": "3385",
              "parentCode": "655",
              "name": "瑞安市",
              "en_name": "Ruian"
            },
            {
              "code": "3114",
              "parentCode": "655",
              "name": "泰顺县",
              "en_name": "Taishunxian"
            },
            {
              "code": "3113",
              "parentCode": "655",
              "name": "文成县",
              "en_name": "Wenchengxian"
            },
            {
              "code": "3384",
              "parentCode": "655",
              "name": "永嘉县",
              "en_name": "Yongjia"
            },
            {
              "code": "3383",
              "parentCode": "655",
              "name": "乐清市",
              "en_name": "Yueqing"
            },
            {
              "code": "104039",
              "parentCode": "655",
              "name": "龙港市",
              "en_name": "longgangshi"
            }
          ]
        },
        {
          "code": "661",
          "parentCode": "540",
          "name": "舟山",
          "en_name": "ZHOUSHAN",
          "sublist": [
            {
              "code": "3526",
              "parentCode": "661",
              "name": "岱山县",
              "en_name": "Daishan"
            },
            {
              "code": "3524",
              "parentCode": "661",
              "name": "定海区",
              "en_name": "Dinghai"
            },
            {
              "code": "3525",
              "parentCode": "661",
              "name": "普陀区",
              "en_name": "Putuo"
            },
            {
              "code": "3527",
              "parentCode": "661",
              "name": "嵊泗县",
              "en_name": "Shengsi"
            }
          ]
        }
      ]
    }
  ]
  return cityList;
}

function getDegreeList() {
  let degreeList = [
    {
      "code": "-1",
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "9",
      "name": "初中及以下",
      "en_name": "junior high"
    },
    {
      "code": "7",
      "name": "高中",
      "en_name": " Senior High"
    },
    {
      "code": "12",
      "name": "中专/中技",
      "en_name": "Secondary Specialized/Skilled Workers Training"
    },
    {
      "code": "5",
      "name": "大专",
      "en_name": "Associate"
    },
    {
      "code": "4",
      "name": "本科",
      "en_name": "Bachelor"
    },
    {
      "code": "3",
      "name": "硕士",
      "en_name": "Master"
    },
    {
      "code": "10",
      "name": "MBA/EMBA",
      "en_name": "MBA/EMBA"
    },
    {
      "code": "1",
      "name": "博士",
      "en_name": "Doctor"
    }
  ]
  return degreeList;
}


function getExperienceList() {
  let experienceList = [
    {
      "code": "-1",
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "0000",
      "name": "无经验",
      "en_name": "No experience"
    },
    {
      "code": "0001",
      "name": "1年以下",
      "en_name": "Below 1 Year"
    },
    {
      "code": "0103",
      "name": "1-3年",
      "en_name": "1-3 Year"
    },
    {
      "code": "0305",
      "name": "3-5年",
      "en_name": "3-5 Year"
    },
    {
      "code": "0510",
      "name": "5-10年",
      "en_name": "5-10 Year"
    },
    {
      "code": "1099",
      "name": "10年以上",
      "en_name": "Above 10 Year"
    }
  ]
  return experienceList;
}

function getJobTypeList() {
  let jobTypeList = [
    {
      "code": "-1",
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "2",
      "name": "全职",
      "en_name": "Full-time"
    },
    {
      "code": "1",
      "name": "兼职/临时",
      "en_name": "Part-time"
    },
    {
      "code": "4",
      "name": "实习",
      "en_name": "Intern"
    },
    {
      "code": "5",
      "name": "校园",
      "en_name": "Campus"
    }
  ]
  return jobTypeList;
}


function companySizeList() {
  let companySizeList = [
    {
      "code": "-1",
      "name": "不限",
      "en_name": ""
    },
    {
      "code": "1",
      "name": "20人以下",
      "en_name": "Less than 20"
    },
    {
      "code": "2",
      "name": "20-99人",
      "en_name": "20-99"
    },
    {
      "code": "3",
      "name": "100-299人",
      "en_name": "100-299"
    },
    {
      "code": "8",
      "name": "300-499人",
      "en_name": "300-499"
    },
    {
      "code": "4",
      "name": "500-999人",
      "en_name": "500-999"
    },
    {
      "code": "5",
      "name": "1000-9999人",
      "en_name": "1000-9999"
    },
    {
      "code": "6",
      "name": "10000人以上",
      "en_name": "More than 10000"
    },
    {
      "code": "7",
      "name": "",
      "en_name": "Confidential"
    }
  ]
  return companySizeList;
}