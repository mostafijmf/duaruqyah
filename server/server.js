const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;
app.use(cors());
// Connect to SQLite database
const db = new sqlite3.Database('dua_main.sqlite');

// GET: Category
app.get('/category', (req, res) => {
    db.all('SELECT * FROM category', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

// GET: Category
app.get('/sub_category', (req, res) => {
    const cat_id = req.query.cat_id;
    if (!cat_id) {
        return res.status(400).send('cat_id parameter is required');
    }

    db.all('SELECT * FROM sub_category WHERE cat_id = ?', [cat_id], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            // console.log({ rows });
            res.status(200).json(rows);
        }
    });
});

// GET: Dua
app.get('/dua', (req, res) => {
    const { cat_id, subcat_id } = req.query;

    if (cat_id && subcat_id) {
        db.all('SELECT * FROM dua WHERE cat_id = ? AND subcat_id = ?', [cat_id, subcat_id], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                // console.log({ rows });
                res.status(200).json(rows);
            }
        });
    }
    else {
        db.all('SELECT * FROM dua WHERE subcat_id = ?', [subcat_id], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                // console.log({ rows });
                res.status(200).json(rows);
            }
        });

    }

});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
