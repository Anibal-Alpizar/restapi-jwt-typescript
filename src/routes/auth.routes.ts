import { Router } from "express";
import { signin, signup } from "../controller/user.controller";

const router = Router();

/**
 * @api {post} /signup Allow the user to signup
 * @apiName PostSignup
 * @apiGroup Auth
 *
 *
 * @apiSuccess {String} _id id's user
 * @apiSuccess {String} email email of the user
 * @apiSuccess {String} password password of the user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5f3f3f3f3f3f3f3f3f3f3f3f",
 *       "email": "test@gmail.com",
 *       "password": "test"
 *     }
 *
 * @apiError msg The user already exists
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "msg": "User already exists"
 *     }
 */

router.post("/signup", signup);

/**
 * @api {post} /signin Allow the user to signin
 * @apiName PostSignin
 * @apiGroup Auth
 *
 *
 * @apiSuccess {String} token Token of the user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "token": "5f3f3f3f3f3f3f3f3f3f3f3f"
 *    }
 *
 * @apiError msg The email or password are incorrect
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "msg": "The email or password are incorrect"
 *     }
 */

router.post("/signin", signin);

export default router;
