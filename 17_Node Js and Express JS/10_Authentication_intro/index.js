import express from 'express'

const app = express();
const PORT = 8000;

app.use(express.json())

const DRIARY = {};
const Emails = new Set();

// Hey, Here is my car - Pleas park it and give me back a token
// Email => Will be used as unique Identifier for the token
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body

    if (Emails.has(email)) {
        return res.status(400).json({ error: "Email already taken" })
    }

    // Create a token for user
    const token = `${Date.now()}`;

    // Do a entry in dairy
    DRIARY[token] = { name, email, password };
    Emails.add(email);

    return res.json({ status: "success", token })
});

app.get('/me', (req, res) => {

    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Missing Token" })
    }

    if (!(token in DRIARY)) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    const entry = DRIARY[token];

    return res.json({ data: entry });
})


app.post('/private-data', (req, res) => {

    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Missing Token" })
    }

    if (!(token in DRIARY)) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    const entry = DRIARY[token];

    return res.json({ data: { privatData: 'Access Granted' } });
})


app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))