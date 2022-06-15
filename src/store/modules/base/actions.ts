import { ActionTree } from 'vuex';
import { RootState, RootGetters, RootMutations, RootActions } from '@/store/index';
import { TActionContext } from '@/store/type';
import { ModuleState } from '@/store/modules/base/state';
import { ModuleGetters } from '@/store/modules/base/getters';
import { ModuleMutations } from '@/store/modules/base/mutations';

const ActionTypes = {
  test: 'test'
} as const

type ModuleActionContext = TActionContext<
  ModuleState, 
  RootState, 
  ModuleActions, 
  RootActions, 
  ModuleMutations, 
  RootMutations, 
  ModuleGetters, 
  RootGetters
>

export type ModuleActions = {
  [ActionTypes.test](context: ModuleActionContext, payload: { width: number }): void
}

export const actions: ActionTree<ModuleState, RootState> & ModuleActions = {
  [ActionTypes.test] ({ commit }, { width }) {
    commit('winWidthUpdate', { width: width });
  }
}