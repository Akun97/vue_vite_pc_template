export type ModuleState = {
  winWidth: number
}

export const state: () => ModuleState = () => ({
  winWidth: document.body.clientWidth
});