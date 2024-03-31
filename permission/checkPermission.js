const checkPermission = () => {
   try {
   } catch (error) {
      return resizeBy.status(500).json({
         message: error.message,
      });
   }
};
export { checkPermission };
