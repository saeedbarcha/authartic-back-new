import { Entity,  Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Attachment } from 'src/modules/attachment/entities/attachment.entity';
import { DefaultEntity } from 'src/modules/common/default.entity';

@Entity()
export class UserProfile extends DefaultEntity {

    @Column({ default: false })
    is_verified_email: boolean;
    
    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    otp: string;

    @Column({ type: 'timestamp' })
    date_of_birth: Date;

    @OneToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' }) 
    user: User;

    @OneToOne(() => Attachment, { nullable: true })
    @JoinColumn({ name: 'attachment_id' })
    attachment: Attachment;
}
