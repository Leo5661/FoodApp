export const getOff = (discountPer: number, fullPrice: number): number => {
  return fullPrice * (discountPer / 100);
};
