import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Project Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Image
          src="/images/project1.jpg"
          width={400}
          height={300}
          alt="Project 1"
          className="rounded-lg"
        />
        <Image
          src="/images/project2.jpg"
          width={400}
          height={300}
          alt="Project 2"
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
