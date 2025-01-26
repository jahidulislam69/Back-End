import { nanoid } from 'nanoid'
import URL from '../Models/model.js'

async function handleGenerateNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"})
    const shortID = nanoid(8);

    await URL.create({
        shortID: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })
    return res.render('home', {
        id: shortID
    })
    
}

// async function handleRedirectUrl(req, res){
//     const shortID = req.params.shortID;
//     const entry = await URL.findByIdAndUpdate(
//     {
//         shortID
//     }, 
//     {
//     $push: {
//         visitHistory: Date.now(),
//     },}
// );
//     return res.redirect(entry.redirectUrl)
// }

async function handleGetAnalytics(req, res){
    const shortID = req.params.shortID;
    const result = await  URL.findOne({shortID});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory, 

    })
}


export { 
    handleGenerateNewShortUrl,
    handleGetAnalytics,

};