import Image from "next/image";

function CustomImageRenderer({ data }: any) {
  console.log(data);
  const src = data.file.url;

  return (
    <div>
      {" "}
      <p>wwwwwwwwwdsadasdasdasdasda</p>
      <div className="relative w-full min-h-[20rem]">
        <Image alt="image" className="object-contain" fill src={src} />
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
}

export default CustomImageRenderer;
