import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function PersonalInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <Button  type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  )
}

