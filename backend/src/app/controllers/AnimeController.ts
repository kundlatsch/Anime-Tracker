import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Anime from '../models/Animes';

class AnimeController {

  async addAnime(req: Request, res: Response) {
    const repository = getRepository(Anime);
    const { anime, totalEpisodes } = req.body;
    const userId = req.userId;

    const newAnime = repository.create({
      anime,
      totalEpisodes,
      currentEpisode: 0,
      userId
    });
    
    await repository.save(newAnime).catch(err => console.log(err));
    return res.json(newAnime);
  }

}

export default new AnimeController();