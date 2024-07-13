import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Convite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_esposo: string;

    @Column()
    nome_esposa: string;

    @Column()
    mesa: string;

    @Column()
    numero: number;

    @Column()
    estado: string;

    @Column({ default: true })
    isActive: boolean; 
}
