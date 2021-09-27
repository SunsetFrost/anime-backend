// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnime from '../../../app/controller/anime';
import ExportHome from '../../../app/controller/home';
import ExportPokemon from '../../../app/controller/pokemon';

declare module 'egg' {
  interface IController {
    anime: ExportAnime;
    home: ExportHome;
    pokemon: ExportPokemon;
  }
}
