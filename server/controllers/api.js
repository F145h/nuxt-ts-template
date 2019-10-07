/*
 * GET home page.
 */
import express from 'express';
let router = express.Router();
router.get('/test', (req, res) => {
    var a = 0;
    res.json({ status: 0, result: true });
});
export default router;
