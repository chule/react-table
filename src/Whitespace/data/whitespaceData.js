export const sectorData = [
  {
    name: 'Sector1',
    sectorID: 1203,
    partentID: null
  },
  {
    name: 'SubSector1.1',
    sectorID: 1243,
    partentID: 1203
  },
  {
    name: 'SubSector1.2',
    sectorID: 12435,
    partentID: 1203
  },
  {
    name: 'SubSector1.3',
    sectorID: 1244,
    partentID: 1203
  },
  {
    name: 'SubSector1.4',
    sectorID: 1245,
    partentID: 1203
  },
  {
    name: 'Sector2',
    sectorID: 1204,
    partentID: null
  },
  {
    name: 'SubSector2.1',
    sectorID: 1251,
    partentID: 1204
  },
  {
    name: 'SubSector2.2',
    sectorID: 1252,
    partentID: 1204
  },
  {
    name: 'SubSector2.3',
    sectorID: 1253,
    partentID: 1204
  },
  {
    name: 'SubSector2.4',
    sectorID: 1254,
    partentID: 1204
  },
  {
    name: 'Sector3',
    sectorID: 1205,
    partentID: null
  },
  {
    name: 'SubSector3.1',
    sectorID: 1261,
    partentID: 1205
  },
  {
    name: 'SubSector3.2',
    sectorID: 1262,
    partentID: 1205
  },
  {
    name: 'SubSector3.3',
    sectorID: 1263,
    partentID: 1205
  },
  {
    name: 'SubSector3.4',
    sectorID: 1264,
    partentID: 1205
  },
  {
    name: 'Sector4',
    sectorID: 4205,
    partentID: null
  }, 
  {
    name: 'SubSector4.1',
    sectorID: 4211,
    partentID: 4205
  }, 
]


export const candidateStageData = [
  {
    stage: {
      name: 'Stage1',
      order: 1
    },
    candidates: [
      {
        first: 'Kara',
        last: 'Bu',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector1',
            sectorID: 1203,
            partentID: null
          },
          {
            name: 'SubSector1.1',
            sectorID: 1243,
            partentID: 1203
          },
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'SubSector2.2',
            sectorID: 1252,
            partentID: 1204
          },
        ]
      },
      {
        first: 'Jessica ',
        last: 'Vanwilosn',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'SubSector2.4',
            sectorID: 1254,
            partentID: 1204
          },
        ]
      }
    ]
  },
  {
    stage: {
      name: 'Stage2',
      order: 2
    },
    candidates: [
      {
        first: 'FirstS2.1',
        last: 'LastS2.1',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
        ]
      },
      {
        first: 'FirstS2.2',
        last: 'LastS2.2',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'SubSector3.1',
            sectorID: 1261,
            partentID: 1205
          },
          {
            name: 'SubSector3.2',
            sectorID: 1262,
            partentID: 1205
          },
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
          {
            name: 'SubSector3.4',
            sectorID: 1264,
            partentID: 1205
          }
        ]
      },
      {
        first: 'FirstS2.3',
        last: 'LastS2.3',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'SubSector2.1',
            sectorID: 1251,
            partentID: 1204
          },
          {
            name: 'SubSector2.2',
            sectorID: 1252,
            partentID: 1204
          },
          {
            name: 'SubSector2.3',
            sectorID: 1253,
            partentID: 1204
          }
        ]
      },
      {
        first: 'FirstS2.4',
        last: 'LastS2.4',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector1',
            sectorID: 1203,
            partentID: null
          },
          {
            name: 'SubSector1.3',
            sectorID: 1244,
            partentID: 1203
          },
          {
            name: 'SubSector1.4',
            sectorID: 1245,
            partentID: 1203
          },
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'SubSector2.1',
            sectorID: 1251,
            partentID: 1204
          },
          {
            name: 'SubSector2.3',
            sectorID: 1253,
            partentID: 1204
          },
          {
            name: 'SubSector2.4',
            sectorID: 1254,
            partentID: 1204
          },
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
          {
            name: 'SubSector3.1',
            sectorID: 1261,
            partentID: 1205
          },
          {
            name: 'SubSector3.2',
            sectorID: 1262,
            partentID: 1205
          },
          {
            name: 'SubSector3.4',
            sectorID: 1264,
            partentID: 1205
          },  
        ]
      },
      {
        first: 'FirstS.5',
        last: 'LastS2.5',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          }
        ]
      }
    ]
  },
  {
    stage: {
      name: 'Stage3',
      order: 3
    },
    candidates: [
      {
        first: 'FirstS3.1',
        last: 'LastS3.1',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector1',
            sectorID: 1203,
            partentID: null
          },
        ]
      },
    ]
  },
  {
    stage: {
      name: 'Stage4',
      order: 4
    },
    candidates: [
      {
        first: 'FirstS4.1',
        last: 'LastS4.1',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
          {
            name: 'SubSector3.4',
            sectorID: 1264,
            partentID: 1205
          }
        ]
      }
    ]
  },
  {
    stage: {
      name: 'Stage5',
      order: 5
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage6',
      order: 6
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage7',
      order: 7
    },
    candidates: [
      {
        first: 'FirstS7.1',
        last: 'LastS7.1',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector1',
            sectorID: 1203,
            partentID: null
          },
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
        ]
      },
      {
        first: 'FirstS7.2',
        last: 'LastS7.2',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
          {
            name: 'SubSector3.4',
            sectorID: 1264,
            partentID: 1205
          }
        ]
      },
      {
        first: 'FirstS7.3',
        last: 'LastS7.3',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          },
          {
            name: 'SubSector2.1',
            sectorID: 1251,
            partentID: 1204
          },
          {
            name: 'SubSector2.2',
            sectorID: 1252,
            partentID: 1204
          },
          {
            name: 'SubSector2.3',
            sectorID: 1253,
            partentID: 1204
          }
        ]
      },
      {
        first: 'FirstS7.4',
        last: 'LastS7.4',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          }
        ]
      },
      {
        first: 'FirstS7.5',
        last: 'LastS7.5',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          }
        ]
      },
      {
        first: 'FirstS7.6',
        last: 'LastS7.6',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector2',
            sectorID: 1204,
            partentID: null
          }
        ]
      },
      {
        first: 'FirstS7.7',
        last: 'LastS7.7',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector3',
            sectorID: 1205,
            partentID: null
          },
        ]
      },
      {
        first: 'FirstS7.8',
        last: 'LastS7.8',
        jobCategory: 'Nines',
        sectors: [
          {
            name: 'Sector1',
            sectorID: 1203,
            partentID: null
          },
          {
            name: 'SubSector1.1',
            sectorID: 1243,
            partentID: 1203
          },
        ]
      }
    ]
  },
  {
    stage: {
      name: 'Stage8',
      order: 8
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage9',
      order: 9
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage10',
      order: 10
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage11',
      order: 11
    },
    candidates: []
  },
  {
    stage: {
      name: 'Stage12',
      order: 12
    },
    candidates: []
  }
]

