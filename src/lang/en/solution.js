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
        bannerTitle: 'Wisdom Park',
        bannerP: '',
        // '企业级大数据智能分析平台，具有全面的安全保障、强大的大数据计算<br/>' +
        // '性能、先进的智能分析、便捷的协作分享等特性。',
        predicamentTitle: 'Industry pain spot',
        predicamentArr: [
            {
                img: predicamentImg1,
                title: 'Architecture from N to M'
            },
            {
                img: predicamentImg2,
                title: 'Heterogeneous IoT environment'
            },
            {
                img: predicamentImg3,
                title: 'Heterogeneous IoT environment'
            },
            {
                img: predicamentImg4,
                title: 'Difficult to be unified standards'
            },
            {
                img: predicamentImg5,
                title: 'Rapidly expanding requirements'
            }
        ],
        systemTitle: 'Wisdom Park',
        systemP: 'Overall solution - Solution Architecture',
        systemImg: systemImg,
        corevalueTitle: 'System Characteristics',
        corevalueArr: [
            {
                url: wisdomParkCorevalue1,
                bg: wisdomParkCorevalueBg1,
                title: 'Smart ',
                content: 'Global Intelligence<br>Wisdom'
            },
            {
                url: wisdomParkCorevalue2,
                bg: wisdomParkCorevalueBg2,
                title: 'Safety ',
                content: 'Unified prevention<br>independent control'
            },
            {
                url: wisdomParkCorevalue3,
                bg: wisdomParkCorevalueBg3,
                title: 'Open',
                content: 'Easy to iterate<br>scalable'
            },
            {
                url: wisdomParkCorevalue4,
                bg: wisdomParkCorevalueBg4,
                title: 'Convenient ',
                content: 'Compatible<br>visual<br>cross-platform'
            }
        ]
    },

    other: {
        title: 'Other<br/>System-level one-stop solution',
        intro: '',
        otherTitle: 'Other Scenes',
        list: [
            {
                bg: otherBg1,
                icon: otherIcon1,
                name: 'Wisdom City',
                content:
                    'Smart city: the instruction set provides smart, safe, open and easy-to-use underlying software infrastructure and supporting solutions for the construction of smart city with the help of independently developed intelligent operating system, so as to help improve the efficiency of urban management.'
            },
            {
                bg: otherBg2,
                icon: otherIcon2,
                name: 'Wisdom Schools',
                content:
                    'Smart school: instruction set smart campus industry solution, the access to the campus, monitoring, elevator, energy and other equipment data through the instruction set intelligent operating system automation scheduling cooperation, to ensure the safety of the campus, improve the utilization rate of teaching resources, efficient management of campus assets. '
            },
            {
                bg: otherBg3,
                icon: otherIcon3,
                name: 'Wisdom Hotel',
                content:
                    'Smart hotel: instruction set smart hotel solution. Intelligent management of various facilities in the hotel is conducted through the instruction set Internet of things operating system. Meanwhile, service details and security are improved through big data analysis and processing. '
            },
            {
                bg: otherBg4,
                icon: otherIcon4,
                name: 'Wisdom Business',
                content:
                    'Business of wisdom: the wisdom of the instruction set business solutions, face the mall management, intelligent retail scene, relying on the Internet of things, computer vision technology, intelligent terminal, through the APP, intelligent business management platform, through the consumer behavior data and transaction data, provide accurate user portrait, upgrade can assign for smart business.'
            }
        ]
    }
};
