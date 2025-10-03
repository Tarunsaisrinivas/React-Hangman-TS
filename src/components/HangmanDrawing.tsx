const HEAD = (
  <div className="rounded-full border-4 border-black h-12 w-12 absolute top-10 -right-5" />
);
const BODY = (
  <div className=" border-2 border-black h-30 w-1 absolute top-22 right-0" />
);
const RIGHT_ARM = (
  <div className="border-2 border-black h-20 w-1 absolute top-15 right-0 rotate-45 origin-bottom" />
);
const LEFT_ARM = (
  <div className="border-2 border-black h-20 w-1 absolute top-15 right-0 -rotate-45 origin-bottom" />
);
const RIGHT_LEG = (
  <div className="border-2 border-black h-20 w-1 absolute top-32 right-0 -rotate-120 origin-bottom" />
);
const LEFT_LEG = (
  <div className="border-2 border-black h-20 w-1 absolute top-32 right-0 rotate-120 origin-bottom" />
);
export function HangmanDrawing() {
  return <div className="relative">
    {HEAD}
    {BODY}
    {RIGHT_ARM}
    {LEFT_ARM}
    {RIGHT_LEG}
    {LEFT_LEG}
    
    <div className="bg-black h-10 w-1 top-0 right-0 absolute" />
    {/* /**
      * * rope
    */}
    <div className="bg-black h-1 w-40 ml-20" />
    {/* /**
     * * top bar of the pole
    */}
    <div className="bg-black h-70 w-1 ml-20" />  
    {/* /** 
    * * left bar of the pole */    }
    <div className="h-1  w-40 bg-black" />
    {/* /**
     * * bottom bar of the pole
    */}
  </div>;
}