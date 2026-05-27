import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BossEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        comment: '职位名称'
    })
    name: string;

    @Column({
        type: 'text',
        comment: '任职经验'
    })
    experiece: string;

    @Column({
        type: 'text',
        comment: '学历要求'
    })
    degree: string;

    @Column({
        type: 'text',
        comment: '福利'
    })
    welfare: string;

    @Column({
        length: 20,
        comment: '区域'
    })
    area: string;

    @Column({
        length: 100,
        comment: '公司地址'
    })
    address: string;

    @Column({
        length: 50,
        comment: '薪资范围'
    })
    salary: string;

    @Column({
        length: 600,
        comment: '详情页链接'
    })
    link: string;

    @Column({
        length: 30,
        comment: '公司名'
    })
    company: string;

    @Column({
        length: 30,
        comment: '岗位活跃'
    })
    active: string;


    @Column({
        type: 'text',
        comment: '职位描述'
    })
    desc: string;

    @Column({
        type: 'text',
        comment: '职位标签'
    })
    tag: string;

    @Column({
        type: 'text',
        comment: 'AI匹配度'
    })
    match_degree: string;

    @Column({
        type: 'text',
        comment: '打招呼语'
    })
    greeting: string;

    @Column({
        comment: '是否已投递(1=是,2=否)',
        default: 2
    })
    is_post: number;

    @Column({
        comment: '创建时间',
        default: () => 'CURRENT_TIMESTAMP'
    })
    create_time: Date;

    job: any;
}