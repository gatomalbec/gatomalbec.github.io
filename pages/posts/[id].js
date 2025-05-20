import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main>
      <h1>Post {id}</h1>
      <p>Coming soon...</p>
    </main>
  );
}
