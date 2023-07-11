export const handleNextButton = (a:number, b:number) => {
   if (a<b) return a+1;
   return a;
}
export const handlePrevButton = (a:number) => {
   if (a>1) return a-1;
   return 1;
}