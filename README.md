# React-Testing-Library
## Jest and React Testing Library

<img width="876" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/8601e53c-a6c3-4364-a10e-222186f01ee7">
<img width="483" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/07d240f8-1b8e-4dfe-b0f0-cb92bbcc212e">

## Types of Tests

<img width="911" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/a3f46b84-019d-4598-b9bd-30b64b8c1fa3">
<img width="431" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/89912ec5-c1ab-4df3-aa43-7f3cfe909545">
<img width="458" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/a1e95b04-9834-40ae-a103-d5565d52b28b">
<img width="404" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/044278fb-6b9d-44a4-a043-8c81ba45b050">
<img width="934" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/b93de33d-3b9c-450a-9748-6a1d4810d909">

## Anatomy of a Test 

<img width="924" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/2792bdfd-22e4-41cd-943f-8419eb6e3ebc">

## TDD Approch

<img width="920" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/bb2b8821-fa0f-4eff-978f-9dd6bbc04143">

## Watch Mode in Jest 

<img width="902" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/329a4576-0ef8-4136-8304-23de45268135">

## Filtering Test 

Use the Command line opitions or can use ```test.only()``` to use a particular test , or ```test.skip()``` to skip a particular test.

## Grouping of Tests 

<img width="439" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/12a6f24b-18c9-43ca-9f38-a6171a36ede1">

Nesting of describe is possible, multiple describe blocks are possible , using ```.only()``` and ```.skip()``` are also possible.

## Filename Conventions 

<img width="889" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/88f3821e-7342-452f-a41d-264a8c63ae88">

instead of ```test()``` , we can use ```it()``` and ```.only()``` is ```fit()``` and ```.skip()``` is ```xit()```

## Code Coverage and Reports

<img width="930" alt="image" src="https://github.com/mainak0907/React-Testing-Library/assets/88925745/42d596d0-bdd1-4371-92c3-452b85d7f137">

The report can be viewed in the index.html in the coverage Folder created or in the terminal itself.

To add filters on the type of files to be included in the report -

```
 "coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types, stories, constants, test, spec}.{ts,tsx}'"

```

To add a threshold - 
```
"jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }
```
