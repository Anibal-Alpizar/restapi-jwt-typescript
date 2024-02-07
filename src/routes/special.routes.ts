import { Router } from "express";
import passport from "passport";

const router = Router();

/**
 * @api {get} /special Special route for authenticated users
 * @apiName GetSpecial
 * @apiGroup Special
 *
 *
 * @apiSuccess {String} msg Success message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "msg": "Success"
 *    }
 *
 * @apiError Unauthorized Unauthorized user 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     Unauthorized
 */

router.get(
  "/special",
  passport.authenticate("jwt", { session: false }),
  (req, res) => res.send({ msg: "Success" })
);

export default router;
