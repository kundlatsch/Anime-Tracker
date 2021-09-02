import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('Animes')
class Anime {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  anime: string;

  @Column()
  totalEpisodes: number;

  @Column()
  currentEpisode: number;

  @Column()
  userId: string;

}

export default Anime;