import { useRouter } from 'next/router';

export default function ClientsPage() {
  const router = useRouter();

  console.log('router.pathname', router.pathname);
  console.log('router.query', router.query);

  function loadProjectHandler() {
    // router.push('/clients/max/projectA');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projectA' },
    });
  }

  return (
    <div>
      <h1>The projects of a given client.</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
