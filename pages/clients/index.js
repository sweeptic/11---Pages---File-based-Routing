import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { id: 'Max', name: 'Max' },
    { id: 'Manuel', name: 'Manuel' },
  ];

  const Clients = clients.map((client) => (
    <li key={client.id}>
      {/* <Link href={`/clients/${client.name}`}>{`${client.name} page`}</Link> */}
      <Link href={{ pathname: '/clients/[id]', query: { id: client.id } }}>{`${client.name} page`}</Link>
    </li>
  ));

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>{Clients}</ul>
    </div>
  );
}
