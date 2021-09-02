import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Anime from '../models/Animes';

class AnimeController {

  async addAnime(req: Request, res: Response) {
    const repository = getRepository(Anime);
    const { anime, totalEpisodes, releaseDay } = req.body;
    const userId = req.userId;

    const newAnime = repository.create({
      anime,
      totalEpisodes,
      currentEpisode: 0,
      releaseDay,
      userId
    });
    
    await repository.save(newAnime).catch(err => console.log(err));
    return res.json(newAnime);
  }

  async getAllAnimes(req: Request, res: Response) {
    const repository = getRepository(Anime);
    const userId = req.userId;

    const animes = await repository.find({
      where: { userId }
    });
    
    const returnAnimes = animes.map(anime => {
      return {
        id: anime.id,
        anime: anime.anime,
        totalEpisodes: anime.totalEpisodes,
        releaseDay: anime.releaseDay,
        currentEpisode: anime.currentEpisode,
      }
    });

    return res.json(returnAnimes);
  }

  async getAnimeByReleaseDay(req: Request, res: Response) {
    const repository = getRepository(Anime);
    const releaseDay = req.params.day;
    const userId = req.userId;

    const animes = await repository.find({
      where: { userId, releaseDay }
    });
    
    const returnAnimes = animes.map(anime => {
      return {
        id: anime.id,
        anime: anime.anime,
        totalEpisodes: anime.totalEpisodes,
        currentEpisode: anime.currentEpisode,
      }
    });

    return res.json(returnAnimes);
  }

}

export default new AnimeController();