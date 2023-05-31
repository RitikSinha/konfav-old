import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      konfav
      <Link href="/signup">signup</Link>
      <Link href="/login">Login</Link>
      <button className="btn btn-primary">Button</button>
    </main>
  );
}
