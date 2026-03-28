import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 8000;
import connectDB from "./utils/db.js";
import Series from "./models/seriesModel.js";

const app = express();

app.use(cors());
app.use(express.json())
connectDB();

app.get("/api/youtube", (req, res) => {
  res.json({ like: "Like my video", subscribe: "Subscribe to my channel" });
});

app.post('/api/series', async(req, res) => {
   
   try {
      const series = await Series.create(req.body);
      res.status(200).json({
         success: true,
         series
      })
   } catch(error) {
      res.status(500).json({
         message: error.message,
      })
   }
}); 


app.get('/api/series', async(req, res) => {

   try {
      const series = await Series.find()
      res.status(200).json({
         success: true, 
         series
      })
   } catch(error) {
      res.status(500).json({
         message: error.message,
      })
   }
})


app.get('/api/series/:id', async(req, res) => {

   try {
      const series = await Series.findById(req.params.id)
      
      if (!series) {
         console.log(`Series with ID: ${req.params.id} does not exist`);
         return res.status(404).json({message: `Series with ID: ${req.params.id} does not exist`})
      }

      res.status(200).json({
         success: true, 
         series
      })
   } catch(error) {
      res.status(500).json({
         message: error.message,
      })
   }
})


app.patch('/api/series/:id', async(req, res) => {

   try {
      const series = await Series.findByIdAndUpdate(req.params.id, req.body)
      
      if (!series) {
         return res.status(404).json({message: `Series with ID: ${req.params.id} does not exist`})
      }

      const updatedSeries = await Series.findById(req.params.id)

      res.status(200).json({
         success: true, 
         updatedSeries 
      })
   } catch(error) {
      res.status(500).json({
         message: error.message,
      })
   }
})


app.delete('/api/series/:id', async(req, res) => {

   try {
      const series = await Series.findByIdAndDelete(req.params.id)
      
      if (!series) {
         return res.status(404).json({message: `Series with ID: ${req.params.id} does not exist`})
      }


      res.status(200).json({
         success: true,  
      })
   } catch(error) {
      res.status(500).json({
         message: error.message,
      })
   }
})

app.listen(PORT, () => {
  console.log(`server started running on port ${PORT}`);
});
