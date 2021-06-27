const bunPrice = 5;
const saladPrice = 5;
const cheeseSlicePrice = 1;
const cutletPrice = 2;

export const calculatePrice = (bun=2, salad, cheeseSlice, cutlet) => {
  return (bun*bunPrice + salad*saladPrice + cheeseSlice*cheeseSlicePrice + cutlet*cutletPrice);
}
