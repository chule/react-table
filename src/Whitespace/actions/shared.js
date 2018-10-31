export const RECEIVE_DATA = 'RECEIVE_DATA'

let allSectors = [];

const combinedStageData = (candidateStageData) => {
    let stages = {};
    candidateStageData.forEach((d, i) => {
        let sectors = [];

        if (d.candidates) {

            d.candidates.forEach(candidate => {
                candidate.sectors.forEach(sector => {
                    // if (sector.partentID !== null) {
                    //     sectors.push(sector.sectorID);
                    // }
                    sectors.push(sector.sectorID);
                    allSectors.push(sector.sectorID);
                })
            })
            stages[d.stage.order] = [...new Set(sectors)];
        }

    });

    return stages;
}

export function handleInitialData(sectorData, candidateStageData) {

    return {
        type: RECEIVE_DATA,
        sectorData,
        candidateStageData,
        combinedStageData: combinedStageData(candidateStageData),
        usedSectors: [...new Set(allSectors)]
    }
}