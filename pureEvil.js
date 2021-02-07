//****The utimate power of ATHBI****

//create a function recieves a number and return the following

/**
 e.g. 
 1. number = 6 
 function returns the follwoing
 [
  '     *     ',  
  '    *  *    ',
  '   *    *   ',  
  '  *      *  ',
  ' *        * ', 
  '* *  *  *  * ',
  '    *  *    ', 
  '    *  *    ',
  '    *  *    ', 
  '    *  *    ',
  '    *  *    ', 
  '    *  *    ',
  '* *  *  *  * ', 
  ' *        * ',
  '  *      *  ',  
  '   *    *   ',
  '    *  *    ',  
  '     *     '
]

2. number = 15

[
  '              *              ',
  '             *  *             ',
  '            *    *            ',
  '           *      *           ',
  '          *        *          ',
  '         *          *         ',
  '        *            *        ',
  '       *              *       ',
  '      *                *      ',
  '     *                  *     ',
  '    *                    *    ',
  '   *                      *   ',
  '  *                        *  ',
  ' *                          * ',
  '* *  *  *  *  *  *  *  *  *  * ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '          *       *          ',
  '* *  *  *  *  *  *  *  *  *  * ',
  ' *                          * ',
  '  *                        *  ',
  '   *                      *   ',
  '    *                    *    ',
  '     *                  *     ',
  '      *                *      ',
  '       *              *       ',
  '        *            *        ',
  '         *          *         ',
  '          *        *          ',
  '           *      *           ',
  '            *    *            ',
  '             *  *             ',
  '              *              '
]

******************Good Luck legends!!!!!******************
 */
let hight = 20;
let shape1 = [];
let shape2 = [];
let shape3 = [];
let finalshape = [];

triangle(hight);

//tower.forEach((level) => console.log(level));
//console.log(shape1);

rectangle(hight);

flip(shape1, hight);

finalshape = shape1.concat(shape2, shape3);

finalshape.forEach((level) => console.log(level));

function triangle(nHight) {
  let star = "*";
  let space = " ";
  let starSpace = "* ";
  for (let i = 0; i < nHight; i++) {
    let spacesBefore = space.repeat(nHight - i - 1);
    spaceInBetween = space.repeat(Math.abs(parseInt(2 * i - 1)));

    sta = spacesBefore + star + spaceInBetween + star + spacesBefore;

    shape1.push(sta);
  }
  shape1[0] = space.repeat(nHight - 1) + star + space.repeat(nHight - 1);
  shape1[nHight - 1] = starSpace.repeat(Math.abs(parseInt(nHight)));

  return shape1;
}
function rectangle(nHight) {
  let star = "*";
  let space = " ";

  for (let i = 0; i < nHight; i++) {
    let spacesBefore = space.repeat(nHight / 2 + nHight / 7);

    sta = spacesBefore + star + spacesBefore + star + spacesBefore;

    shape2.push(sta);
  }
  return shape2;
}

function flip(shape, nHight) {
  let tempshape = [];
  for (let i = 1; i < nHight; i++) {
    tempshape[i] = shape[nHight - i];
  }
  tempshape[nHight] = shape[0];
  shape3 = tempshape.slice(1, nHight + 1);

  return shape3;
}
