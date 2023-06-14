import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <section className="container grid gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Inputs
        </h1>
      </div>
      <div className="flex gap-4" style={{ border: "1px solid grey", padding: 24 }}>
        <Input label="Text Field" placeholder="Placeholder" />
        <Input label="Number Field" type="number" placeholder="Placeholder" />
      </div>
      <div style={{ border: "1px solid grey", padding: 24 }}>
        <div  className="flex gap-4">
          <Input label="Date Field" type="date" placeholder="Placeholder" />
          <Input label="Time Field" type="time" placeholder="Placeholder" />
        </div>
        <div className="flex gap-4" style={{ marginTop: 24 }}>
          <Input label="Color Field" type="color" placeholder="Placeholder" />
        </div>
        <div className="flex gap-4" style={{ marginTop: 24 }}>
          <Input label="File Field" type="file" placeholder="Placeholder" />
        </div>
      </div>
      <div className="flex gap-4" style={{ border: "1px solid grey", padding: 24 }}>
        <Input label="Password Field" type="password" placeholder="Placeholder" />
        <Input label="Email Field" type="email" placeholder="Placeholder" />
      </div>
    </section>
  )
}
