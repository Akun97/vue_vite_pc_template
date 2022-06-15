import { GetterTree } from 'vuex';
import { RootState, RootGetters } from '@/store/index';
import { GettersReturnType } from '@/store/type';
import { ModuleState } from '@/store/modules/base/state';

type GettersType = {
  winWidth: number
}

const GettersTypes = {
  winWidth: 'winWidth'
} as const

type VGettersTypes = (typeof GettersTypes)[keyof typeof GettersTypes]

export type ModuleGetters = {
  readonly [key in VGettersTypes]: (
    state: ModuleState, getters: GettersReturnType<ModuleGetters, key>, rootState: RootState, rootGetters: RootGetters
  ) => GettersType[key]
}

export const getters: GetterTree<ModuleState, RootState> & ModuleGetters = {
  [GettersTypes.winWidth]: (state, getters, rootState, rootGetters) => {
    return state.winWidth;
  }
}