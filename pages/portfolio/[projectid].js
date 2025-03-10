import Server from 'next/dist/server/base-server';
import { useRouter } from 'next/router';

export default function PortfolioProjectPage(prop) {
  console.log('prop', prop);

  const router = useRouter();

  console.log('router.pathname', router.pathname);
  console.log('router.query', router.query);

  // send a request to some backend Server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Project Page []</h1>
    </div>
  );
}
