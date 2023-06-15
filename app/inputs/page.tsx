import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger } from "@/components/ui/select"

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
      <div style={{ border: "1px solid grey", padding: 24 }}>
        <Label>Checkboxes</Label>
        <div>
          <Checkbox label="1" />
          <Checkbox label="2" />
          <Checkbox label="3" />
        </div>
      </div>
      <div style={{ border: "1px solid grey", padding: 24 }}>
        <Label>Radio Group</Label>
        <RadioGroup>
          <RadioGroupItem label="1" value={"1"} />
          <RadioGroupItem label="2" value={"2"} />
          <RadioGroupItem label="3" value={"3"} />
        </RadioGroup>
      </div>
      <div style={{ border: "1px solid grey", padding: 24 }}>
        <Label>Select</Label>
        <Select>
          <SelectTrigger>Option 1</SelectTrigger>
          <SelectContent>
            <SelectGroup key="group-1">
              <SelectItem value="group-1">Option 1</SelectItem>
              <SelectItem value="group-2">Option 2</SelectItem>
              <SelectItem value="group-3">Option 3</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup key="group-2">
              <SelectItem value="group-1">Option 1</SelectItem>
              <SelectItem value="group-2">Option 2</SelectItem>
              <SelectItem value="group-3">Option 3</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup key="group-3">
              <SelectItem value="group-1">Option 1</SelectItem>
              <SelectItem value="group-2">Option 2</SelectItem>
              <SelectItem value="group-3">Option 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>
    </section>
  )
}
