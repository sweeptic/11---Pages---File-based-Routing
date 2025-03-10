import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { id: 'Max', name: 'Max' },
    { id: 'Manuel', name: 'Manuel' },
  ];

  const LinkList = clients.map((item) => (
    <li key={item.id}>
      <Link href={`/clients/${item.name}`}>{`${item.name} page`}</Link>
    </li>
  ));

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>{LinkList}</ul>
    </div>
  );
}
