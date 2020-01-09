// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnilist from '../../../app/controller/anilist';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    anilist: ExportAnilist;
    home: ExportHome;
  }
}
