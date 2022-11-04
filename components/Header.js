import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <div className="w-13 h-13 rounded-full block mx-auto mb-4">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={250}
            width={250}
            alt={name}
          />
        </div>
      </Link>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
