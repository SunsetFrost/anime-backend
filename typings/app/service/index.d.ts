// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnilist from '../../../app/service/Anilist';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    anilist: ExportAnilist;
    test: ExportTest;
  }
}
