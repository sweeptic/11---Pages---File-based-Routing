import { useRouter } from 'next/router';

export default function ClientsPage() {
  const router = useRouter();

  console.log('router.pathname', router.pathname);
  console.log('router.query', router.query);

  return (
    <div>
      <h1>The project page for the specific project for a selected client.</h1>
    </div>
  );
}
