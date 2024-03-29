// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAnime from '../../../app/service/Anime';
import ExportBook from '../../../app/service/Book';
import ExportMusic from '../../../app/service/Music';
import ExportPokemon from '../../../app/service/Pokemon';
import ExportTest from '../../../app/service/Test';
import ExportVideo from '../../../app/service/Video';

declare module 'egg' {
  interface IService {
    anime: AutoInstanceType<typeof ExportAnime>;
    book: AutoInstanceType<typeof ExportBook>;
    music: AutoInstanceType<typeof ExportMusic>;
    pokemon: AutoInstanceType<typeof ExportPokemon>;
    test: AutoInstanceType<typeof ExportTest>;
    video: AutoInstanceType<typeof ExportVideo>;
  }
}
