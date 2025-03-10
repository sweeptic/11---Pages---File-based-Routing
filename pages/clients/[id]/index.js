import { useRouter } from 'next/router';

export default function ClientsPage() {
  const router = useRouter();

  console.log('router.pathname', router.pathname);
  console.log('router.query', router.query);

  return (
    <div>
      <h1>The projects of a given client.</h1>
    </div>
  );
}
