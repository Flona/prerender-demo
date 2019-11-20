import systemImg from '@/assets/imgs/wisdomPark-systemImg.jpg';
import predicamentImg1 from '@/assets/imgs/wisdomPark-predicament1.png';
import predicamentImg2 from '@/assets/imgs/wisdomPark-predicament2.png';
import predicamentImg3 from '@/assets/imgs/wisdomPark-predicament3.png';
import predicamentImg4 from '@/assets/imgs/wisdomPark-predicament4.png';
import predicamentImg5 from '@/assets/imgs/wisdomPark-predicament5.png';
import wisdomParkCorevalue1 from '@/assets/imgs/wisdomPark-corevalue1.png';
import wisdomParkCorevalue2 from '@/assets/imgs/wisdomPark-corevalue2.png';
import wisdomParkCorevalue3 from '@/assets/imgs/wisdomPark-corevalue3.png';
import wisdomParkCorevalue4 from '@/assets/imgs/wisdomPark-corevalue4.png';
import wisdomParkCorevalueBg1 from '@/assets/imgs/wisdomPark-corevalue-bg1.jpg';
import wisdomParkCorevalueBg2 from '@/assets/imgs/wisdomPark-corevalue-bg2.jpg';
import wisdomParkCorevalueBg3 from '@/assets/imgs/wisdomPark-corevalue-bg3.jpg';
import wisdomParkCorevalueBg4 from '@/assets/imgs/wisdomPark-corevalue-bg4.jpg';
import otherBg1 from '@/assets/imgs/other-bg1.jpg';
import otherBg2 from '@/assets/imgs/other-bg2.jpg';
import otherBg3 from '@/assets/imgs/other-bg3.jpg';
import otherBg4 from '@/assets/imgs/other-bg4.jpg';
import otherIcon1 from '@/assets/imgs/other-icon1.png';
import otherIcon2 from '@/assets/imgs/other-icon2.png';
import otherIcon3 from '@/assets/imgs/other-icon3.png';
import otherIcon4 from '@/assets/imgs/other-icon4.png';
export default {
    wisdomPark: {
        bannerTitle: '智慧园区<br/>' + 'ISC-OS系统级一站式解决方案',
        bannerP: '',
        // '企业级大数据智能分析平台，具有全面的安全保障、强大的大数据计算<br/>' +
        // '性能、先进的智能分析、便捷的协作分享等特性。',
        predicamentTitle: '行业痛点',
        predicamentArr: [
            {
                img: predicamentImg1,
                title: 'N to M 的构架'
            },
            {
                img: predicamentImg2,
                title: '异构的IOT环境'
            },
            {
                img: predicamentImg3,
                title: '封闭的系统孤岛'
            },
            {
                img: predicamentImg4,
                title: '难以统一的标准'
            },
            {
                img: predicamentImg5,
                title: '变化及扩展需求'
            }
        ],
        systemTitle: '智慧园区',
        systemP: '整体方案-解决架构',
        systemImg: systemImg,
        corevalueTitle: '核心价值',
        corevalueArr: [
            {
                url: wisdomParkCorevalue1,
                bg: wisdomParkCorevalueBg1,
                title: '智慧',
                content: '会议场景智慧化<br/>设备运维智慧化<br/>人员管理智慧化'
            },
            {
                url: wisdomParkCorevalue2,
                bg: wisdomParkCorevalueBg2,
                title: '安全',
                content: '各安防子系统全面感知和智能联动<br/>提供更可靠的安全保障'
            },
            {
                url: wisdomParkCorevalue3,
                bg: wisdomParkCorevalueBg3,
                title: '开放',
                content: '解耦合，应用直接和系统联系<br/>相互之间不产生直接联系<br/>抽象出标准的业务接口'
            },
            {
                url: wisdomParkCorevalue4,
                bg: wisdomParkCorevalueBg4,
                title: '易用',
                content: '3D模型展示更直观<br/>多终端触达更方便'
            }
        ]
    },
    other: {
        title: 'ISC-OS<br/>系统级一站式解决方案',
        intro: '',
        otherTitle: '其他场景',
        list: [
            {
                bg: otherBg1,
                icon: otherIcon1,
                name: '智慧城市',
                content:
                    '智慧城市：指令集借助自主研发的智能操作系统，为智慧城市建设提供智慧、安全、开放、易用的底层软件基础设施和配套解决方案，助力城市管理效率的提升。'
            },
            {
                bg: otherBg2,
                icon: otherIcon2,
                name: '智慧学校',
                content:
                    '智慧学校：指令集智慧校园产业解决方案，将校园的通行、监控、电梯、能源等设备数据打通，通过指令集智能操作系统自动化调度协作，保障校园安全、提升教学资源利用率、高效管理校园资产。 '
            },
            {
                bg: otherBg3,
                icon: otherIcon3,
                name: '智慧酒店',
                content:
                    '智慧酒店：指令集智慧酒店解决方案，通过指令集物联网操作系统，对酒店内的各项设施进行智能化管理，同时通过大数据分析处理，提升服务细节与安全。'
            },
            {
                bg: otherBg4,
                icon: otherIcon4,
                name: '智慧商业',
                content:
                    '智慧商业：指令集的智慧商业解决方案，面向商场管理、智能零售等场景，依托物联网、计算机视觉技术、智能通行终端，通过APP、智能商业管理平台，打通消费者行为数据与交易数据，提供精准用户画像，为智能商业升级赋能。'
            }
        ]
    }
};
