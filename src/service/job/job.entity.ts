import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobEntity {
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
        length: 20,
        comment: '活跃度'
    })
    active: string;

    @Column({
        type: 'text',
        comment: '职位描述'
    })
    desc: string;

    @Column({
        length: 100,
        comment: '公司名称'
    })
    company: string;

    @Column({
        length: 100,
        comment: '工作地点'
    })
    address: string;

    @Column({
        length: 50,
        comment: '薪资范围'
    })
    salary: string;

    @Column({
        length: 50,
        comment: '工作区域'
    })
    area: string;

    @Column({
        type: 'text',
        comment: '信息描述'
    })
    info_desc: string;

    @Column({
        length: 200,
        comment: '链接地址'
    })
    link: string;
}