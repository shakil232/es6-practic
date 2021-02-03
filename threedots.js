
const cllgFrndAges = [16,15,17,18];
const locatFrndAges = [21,19,20,18];
const cousninAges = [25,27,29];
// const allAges = cllgFrndAges.concat(locatFrndAges).concat([100]).concat(cousninAges);
 const allAges2 = [ ...cllgFrndAges, 100, ...locatFrndAges, ...cousninAges];
// console.log(allAges2);

const business = 500;
const minister = 650;
const shochib = 550
const max = Math.max(business,minister,shochib,);
// console.log(max);

const takaPoysha = [500,680,400,600,900,550,1000];
const maximum = Math.max( ...takaPoysha);
console.log(maximum)


