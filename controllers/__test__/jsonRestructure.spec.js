const { transformObjectToArrayAndFlat,
  getArrayParentLevel,
  recursivelyChildrenWithId,
  moveObjectToCorrectChildrenLevel } = require('../jsonRestructure')

const sampleInputFile1 = require('../mockData/sample-input1.json')
const expectOutputFile1 = require('../mockData/expect-output1.json')


describe('controllers', () => {
  describe('json Restructure', () => {
    describe('Function transformObjectToArrayAndFlat', () => {
      it('transform Object To Array ', () => {
        const object1 = {
          a: 'somestring',
          b: 42,
          c: false
        };
        const result = ["somestring", 42, false]
        expect(transformObjectToArrayAndFlat(object1)).toEqual(result)
      })

      it('creates a new array with all sub-array elements concatenated into it recursively up to the specified depth ', () => {
        const object1 = [0, 1, 2, [3, 4]];
        const result = [0, 1, 2, 3, 4]
        expect(transformObjectToArrayAndFlat(object1)).toEqual(result)
      })

      it('input not follow format', () => {
        const object1 = {'test':'test'};
        const result = ["test"]
        expect(transformObjectToArrayAndFlat(object1)).toEqual(result)
      })
    })

    describe('Function getArrayParentLevel', () => {
      it('get array that object parent_id is null ', () => {
        const arrayInput = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
          }
        ]
        const result = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          }]
        expect(getArrayParentLevel(arrayInput)).toEqual(result)
      })

      it('get array result 2 objects that object parent_id is null ', () => {
        const arrayInput = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
          },
          {
            "id": 13,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          }
        ]
        const result = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 13,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          }
        ]
        expect(getArrayParentLevel(arrayInput)).toEqual(result)
      })
    })

    describe('Function recursivelyChildrenWithId', () => {
      it('move children to parent with key parent id ', () => {
        const arrayInput = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 13,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          }
        ];
        const arrayAll = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
          },
          {
            "id": 13,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          },
          {
            "id": 11,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
          },
          {
            "id": 17,
            "title": "Red Roof",
            "level": 2,
            "children": [],
            "parent_id": 12
          }
        ]
        const result = [
          {
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [
              {
                "id": 12,
                "title": "Red Roof",
                "level": 1,
                "children": [
                  {
                    "id": 17,
                    "title": "Red Roof",
                    "level": 2,
                    "children": [],
                    "parent_id": 12
                  }
                ],
                "parent_id": 10
              },
              {
                "id": 11,
                "title": "Red Roof",
                "level": 1,
                "children": [],
                "parent_id": 10
              }
            ],
            "parent_id": null
          },
          {
            "id": 13,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
          }
        ]
        expect(recursivelyChildrenWithId(arrayInput,arrayAll)).toEqual(result)
      })
    })

    describe('Function moveObjectToCorrectChildrenLevel', () => {
      it('move children object under parent hierarchy follow key parent id input (Appendix1)', () => {
        expect(moveObjectToCorrectChildrenLevel(sampleInputFile1)).toEqual(expectOutputFile1)
      })

      it('input empty object should be return empty array ', () => {
        expect(moveObjectToCorrectChildrenLevel({})).toEqual([])
      })
      it('input not follow format 1 ', () => {
        expect(moveObjectToCorrectChildrenLevel({test:'test'})).toEqual(['test'])
      })
      it('input not follow format 2 ', () => {
        expect(moveObjectToCorrectChildrenLevel({test:'test',test1:'test1'})).toEqual(['test','test1'])
      })
    })
  })
})
