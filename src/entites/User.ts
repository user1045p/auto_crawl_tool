import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        comment: '用户名'
    })
    username: string;

    @Column({
        length: 100,
        comment: '密码'
    })
    password: string;

    @Column({
        length: 100,
        comment: '昵称',
        nullable: true
    })
    nickname:string;

    @Column({
        length: 100,
        comment: '邮箱',
        nullable: true
    })
    email: string;

    @Column({
        type: 'text',
        comment: '手机号'
    })
    phone: string;

    @Column({
        type: 'text',
        comment: '性别'
    })
    sex: string;

    @Column({
        type: 'text',
        comment: 'BOSSCookie',
        nullable: true
    })
    boss_cookie: string;

    @Column({
        type: 'text',
        comment: '智联Cookie',
        nullable: true
    })
    zhaopin_cookie: string;

    @Column({
        type: 'text',
        comment: '猎聘Cookie',
        nullable: true
    })
    liepin_cookie: string;

    @Column({
        type: 'text',
        comment: '前程无忧Cookie',
        nullable: true
    })
    job_cookie: string;

    @Column({
        type: 'text',
        comment: 'LinkedInCookie',
        nullable: true
    })
    linkedin_cookie: string;

    @Column({
        length: 20,
        comment: '上次登录时间',
        nullable: true
    })
    last_login: string;

    user: any;
}