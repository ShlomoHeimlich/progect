import express from 'express';

import fs from 'fs';

const servsr=express()
const PORT=process.env.PORT
servsr.use(express.static('public'))
servsr.use(express.urlencoded({ extended: true }));
servsr.use(express.json())
servsr.listen(PORT,()=>{console.log(PORT,'is listen');})


////////////
servsr.post('/save', (req, res) => {
  const complaint = req.body.complaint;
  const description = req.body.description;

  fs.writeFile(
    'complaint.json',
    JSON.stringify({ complaint, description }, null, 2),
    (err) => {
      if (err) {
        return res.status(500).send('שגיאה בשמירה');
      }
      res.send('התלונה נשמרה בהצלחה');
    }
  );
});

