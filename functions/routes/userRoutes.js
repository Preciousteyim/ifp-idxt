const express = require('express');
const router = express.Router();
const racineProjet = process.cwd();


router.get("/school", (req, res)=>{
    res.sendFile(racineProjet+'/views/pages/index-course.html');
})
router.get("/course-detail", (req, res)=>{
    res.sendFile(racineProjet+'/views/pages/course-details.html');
})

module.exports = router;