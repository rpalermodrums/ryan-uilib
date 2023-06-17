export default function Title({text}: {text: string}) {
  return (
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {text}
      </h1>
    </div>
  )
}