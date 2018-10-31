export const SWITCH_STAGE = 'SWITCH_STAGE';

export const switchStage = (id) => {
    return {
        type: SWITCH_STAGE,
        id,
    }
}