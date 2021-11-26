// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnime from '../../../app/controller/anime';
import ExportBook from '../../../app/controller/book';
import ExportHome from '../../../app/controller/home';
import ExportMusic from '../../../app/controller/music';
import ExportPokemon from '../../../app/controller/pokemon';
import ExportVideo from '../../../app/controller/video';

declare module 'egg' {
  interface IController {
    anime: ExportAnime;
    book: ExportBook;
    home: ExportHome;
    music: ExportMusic;
    pokemon: ExportPokemon;
    video: ExportVideo;
  }
}
