import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobDetail {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 32,
        comment: '唯一标识',
        unique:true,
        nullable: false
    })
    unique_id: string;

    //=======详情外-start=======
    @Column({
        length: 100,
        comment: '岗位名称',
        nullable: false
    })
    position_name: string;

    @Column({
        length: 255,
        comment: '详情链接'
    })
    detail_link: string;

    @Column({
        length: 100,
        comment: '招聘活跃度',
    })
    recruitment_activity: string;

   @Column({
        length: 255,
        comment: '工作标签',
        nullable: true
    })
    job_tag: string;

    @Column({
        length: 255,
        comment: '公司标签',
        nullable: true
    })
    company_tag: string;
    
    //=======详情外-end=======
    
    //=======详情内-start=======
    @Column({
        comment: '发布时间',
        nullable: true
    })
    // public_time: Date;
    public_time: string;


    @Column({
        length: 100,
        comment: '薪资',
        nullable: true
    })
    salary: string;

    @Column({
        length: 255,
        comment: '工作城市',
        nullable: true
    })
    city: string;

    @Column({
        length: 255,
        comment: '街道',
        nullable: true
    })
    street: string;

    @Column({
        length: 100,
        comment: '工作经验(年限)',
        nullable: true
    })
    experience: string;

    @Column({
        length: 100,
        comment: '教育背景',
        nullable: true
    })
    education: string;

    @Column({
        length: 100,
        comment: '就业形式',
        nullable: true
    })
    employment_type: string;

    @Column({
        length: 100,
        comment: '招聘人数',
        nullable: true
    })
    head_count: string;

    @Column({
        length: 255,
        comment: '技术栈',
        nullable: true
    })
    technology_skills: string;

    @Column({
        type: 'text',
        comment: '岗位描述',
        nullable: true
    })
    position_desc: string;

    @Column({
        length: 100,
        comment: '详细地址',
        nullable: true
    })
    address: string;

    @Column({
        length: 100,
        comment: 'HR名称',
        nullable: true
    })
    human_resource_name: string;

    @Column({
        length: 100,
        comment: 'HR活跃度',
        nullable: true
    })
    human_resource_activity:string;

    @Column({
        type: 'text',
        comment: '企业名称',
        nullable: true
    })
    company_name:string;

    @Column({
        length: 100,
        comment: '公司性质',
        nullable: true,
        default: '未知'
    })
    company_nature:string;

    @Column({
        length: 100,
        comment: '公司业务',
        nullable: true
    })
    company_industry: string;

    @Column({
        length: 100,
        comment: '公司规模',
        nullable: true
    })
    company_size: string;

    @Column({
        length: 50,
        comment: '融资情况',
        nullable: true
    })
    fund_status: string;

    @Column({
        type: 'text',
        comment: '公司简介',
        nullable: true
    })    
    company_desc: string;

    //=======详情内-end=======

    @Column({
        length: 30,
        comment: '岗位状态',
        nullable: true
    })   
    position_status: string;

    //取当前时间与创建时间比较（0=最新招聘，1=已存在一周，2=已存在半个月，3=已存在一个月，4=已存在三个月，已存在超过半年）
    @Column({
        comment: '记录状态（0=最新招聘，1=已存在一周，2=已存在半个月，3=已存在一个月，4=已存在三个月，已存在超过半年）'
    })
    record_status: number;

    @Column({
        comment: '来源网站(1=boss,2=智联招聘)'
    })
    source_website: number;

    @Column({
        length: 32,
        comment: '关联日志Id',
        nullable: false
    })
    log_id: string;

    jobDetail: any;
    job_name: any;
}