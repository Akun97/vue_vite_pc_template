import { MutationTree } from 'vuex';
import { ModuleState } from '@/store/modules/base/state';

const MutationTypes = {
  winWidthUpdate: 'winWidthUpdate'
} as const

export type ModuleMutations = {
  [MutationTypes.winWidthUpdate]<T extends { width: number }>(state: ModuleState, payload: T): void
}

export const mutations: MutationTree<ModuleState> & ModuleMutations = {
  [MutationTypes.winWidthUpdate] (state, { width }) {
    state.winWidth = width;
  }
}