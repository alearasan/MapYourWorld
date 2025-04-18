import { User } from "../../auth-service/src/models/user.model";
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from "typeorm";


export enum PlanType{
    FREE = 'FREE',
    PREMIUM = 'PREMIUM'
}

@Entity('subscriptions')
export class Subscription {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'enum', enum: PlanType, default: PlanType.FREE })
    plan!: PlanType;

    @Column({ type: 'date' , nullable:true})
    startDate!: Date;

    @Column({ type: 'date' , nullable:true})
    endDate!: Date;

    @Column({ type: 'boolean', default : false })
    is_active!: boolean;

    @OneToOne(() => User, (user) => user.subscription)
    @JoinColumn()
    user!: User;
}