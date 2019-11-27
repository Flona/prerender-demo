let list = [
    {
        city: '北京',
        duty: `理解产品需求背景，针对产品提出有效建议，配合和引导产品需求确定；<br /><br />
            依据产品需求完成高质量的Web前端开发和维护；<br /><br />
            在理解产品业务的基础上，结合前端技术建立或优化Web的交互方式；<br /><br />
            对具体的产品进行性能优化，实现极致的Web加载、执行和渲染时间；<br /><br />
            保证自己的代码质量，参加代码改进评审，影响和提升团队伙伴；<br /><br />
            对所参与的产品有主人翁精神，能积极推动上下游完成任务。`,
        id: 3,
        name: '高级前端工程师',
        publishTime: '2019-11-01',
        qualification: `本科计算机相关专业毕业，具有扎实的计算机基础理论知识；<br /><br />
            精通HTML5、Javascript/ES6，CSS等前端开发技术，熟悉主流浏览器的运行机制；<br /><br />
            精通Vue框架，熟练掌握Vue全家桶，对前端组件化开发有深入的理解；<br /><br />
            有微信/支付宝小程序开发经验者优先，有Nodejs 开发经验优先；<br /><br />
            熟悉HTTP等前端领域相关的网络协议,对前后端合作模式有深入了解并有项目经验；<br /><br />
            良好的软件工程思想，良好的编程能力和编程习惯；<br /><br />
            熟练掌握Git常用命令和Webpack常用配置。`,
        viewCount: 0
    },
    {
        city: '辽宁',
        duty: `理解产品需求背景，针对产品提出有效建议，配合和引导产品需求确定;<br /><br />
            设计产品核心功能不同技术方案，判断和误别不同方案的优缺点，落地和推进方案落地；<br /><br />
            保证自己的代码质量，参加代码改进评审，影响和提升团队伙伴；<br /><br />
            推动身边可利用资源把事情做成，并有结果；<br /><br />
            能独立解决线上服务运行期间出现的大部分问题；`,
        id: 4,
        name: '高级 Java 开发',
        publishTime: '2019-11-22',
        qualification: `本科计算机相关专业，3-7 年相关开发工作经验，有网联网相关行业经验；<br /><br />
            有较强的系统设计能力、业务抽象能力和基础的架构能力，需要透过现象看本质；<br /><br />
            Java基础扎实，良好的代码风格，理解Java反射机制和常用的设计模式；<br /><br />
            有相关系统调优经验，调整过JVM参数，会使用linux命令和jdk相关工具查看资源使用情况；<br /><br />
            深入了解常用的开发技术栈--MVC框架、RPC框架、消息、存储、缓存等(Springboot、mybatis、mysql、dubbo、redis、kafka...)，了解原理，阅读过相关源码；<br /><br />
            熟悉Linux环境以及操作，svn、maven的使用，熟悉Tomcat，Apache，Nginx等开源的服务器；<br /><br />
            微服务相关开发经验，熟悉docker容器原理；<br /><br />
            熟悉网络七层协议、网络通信相关原理；<br /><br />
            非常活跃的思维，敢于挑战，接受新事物，持续自我驱动和成长，优秀的团队合作能力；<br /><br />
            开源技术作品优先考虑，有mqtt、modbus、rs485/432、窄带网相关协议或有相关协议开发优先考虑，有k8s、IaaS私有云搭建、PaaS平台搭建经验优先考虑。`,
        viewCount: 0
    },
    {
        city: '重庆',
        duty: `进行运维自动化研发，完成公司产品在公有云和私有云上的自动化部署；<br /><br />
            配合产品研发团队进行在线调试；<br /><br />
            实现自动化部署的框架和工具；<br /><br />
            对系统各组件之间的流量进行分析，优化系统结构；<br /><br />
            自动化运维相关的文档工作。`,
        id: 6,
        name: '高级运维研发工程师',
        publishTime: '2019-11-22',
        qualification: `2年以上运维工作经验，1年以上研发工作经验，沟通能力良好，思路清晰，具备出色的工程素质；<br /><br />
            熟悉虚拟化技术原理，熟练使用docker ，掌握 kubernetes、openstack，openshift其中至少一种进行部署；<br /><br />
            至少熟练掌握一种脚本语言进行运维自动化开发；<br /><br />
            熟练掌握数据库的部署和优化，熟悉网络运维知识；<br /><br />
            拥有基本的系统安全防护知识和技能，具备较强的动手能力；<br /><br />
            熟悉应用系统的部署，熟悉tomcat，nginx，redis等的集群安装；<br /><br />
            良好的沟通协调能力，工作责任感强，团队合作佳，有开发背景会择优考虑。 `,
        viewCount: 0
    }
];

export const careerList = {
    currentPage: 1,
    list,
    pageSize: 12,
    totalPage: 1,
    totalSize: 3
};
export const careerList1 = {
    currentPage: 1,
    list: list.slice(0, 1),
    pageSize: 12,
    totalPage: 1,
    totalSize: 1
};
export const careerList2 = {
    currentPage: 1,
    list: list.slice(1, 2),
    pageSize: 12,
    totalPage: 1,
    totalSize: 1
};
export const careerList3 = {
    currentPage: 1,
    list: list.slice(2),
    pageSize: 12,
    totalPage: 1,
    totalSize: 1
};
