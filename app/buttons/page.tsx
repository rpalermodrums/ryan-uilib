import { Button } from "@/components/ui/button"
import Title from "@/app/title"

export default function IndexPage() {
  return (
    <>
      <Title text="Buttons" />
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </div>
    </>
  )
}
