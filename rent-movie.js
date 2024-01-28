let movies = [
  { id: 1, title: "Barbie", available: true },
  { id: 2, title: "One More Shot", available: false },
  { id: 3, title: "The Kitchen", available: true },
  { id: 3, title: "Animal", available: true },
];
const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/movies", (req, res) => {
  return res.status(200).send(movies.filter((movie) => movie.available));
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("The movie is not found.");
  res.status(200).send(movie);
});

app.post("/api/movies", (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    available: req.body.available,
  };
  movies.push(movie);
  res.status(201).send(movie);
});

app.delete("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("The movie is not found.");

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.status(200).send(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server has started on port ${port}.`));
