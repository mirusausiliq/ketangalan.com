import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { IncomingForm } from 'formidable';
import type { Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// --- NEW: Allow the browser to access the saved audio files ---
app.use('/audio-files', express.static(path.join(__dirname, 'src/data/audio')));

// --- NEW: Endpoint to list all existing recordings ---
app.get('/api/list-audio', (req: Request, res: Response) => {
  const targetDir = path.join(__dirname, 'src', 'data', 'audio');
  console.log(req)
  if (!fs.existsSync(targetDir)) {
    return res.json([]);
  }
  const files = fs.readdirSync(targetDir).filter(file => file.endsWith('.webm'));
  res.json(files);
});

app.post('/api/save-audio', (req: Request, res: Response) => {
  const form = new IncomingForm();
  form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
    if (err) return res.status(500).json({ error: err.message });
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file || !file.originalFilename) return res.status(400).json({ error: "No file" });

    const fileName = file.originalFilename;
    const targetDir = path.join(__dirname, 'src', 'data', 'audio');
    const targetPath = path.join(targetDir, fileName);
    console.log(fields)

    try {
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      const data = fs.readFileSync(file.filepath);
      fs.writeFileSync(targetPath, data);
      console.log(`✅ Saved: ${fileName}`);
      res.json({ success: true });
    } catch (writeErr: any) {
      res.status(500).json({ error: writeErr.message });
    }
  });
});

const PORT = 5001; // Matches your Recorder.tsx
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));