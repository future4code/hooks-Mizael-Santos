export class CustomError extends Error {
   static message(message: any) {
       throw new Error("Method not implemented.");
   }
   constructor(
      public statusCode: number,
      message: string
   ) {
      super(message);
   }
}
