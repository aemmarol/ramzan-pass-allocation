import nc from "next-connect";
import { ncErrorHandlers } from "be/utils";
import { checkAdmin, checkAuth, connectDB } from "be/middlewares";
import { allocateRamzanMemberToMasallah } from "be/controllers";

export default nc(ncErrorHandlers)
  .use(connectDB)
  .use(checkAuth)
  .use(checkAdmin)
  .post(allocateRamzanMemberToMasallah);
