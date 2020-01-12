// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimes from '../../../app/controller/animes';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    animes: ExportAnimes;
    home: ExportHome;
  }
}
