export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'First Post', body: 'This is the first post.' },
    { id: 2, title: 'Second Post', body: 'This is the second post.' },
    { id: 3, title: 'Third Post', body: 'This is the third post.' },
  ];
  res.status(200).json(posts);
}
