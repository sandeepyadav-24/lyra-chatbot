import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Preferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing-emails">Receive marketing emails</Label>
            <Switch id="marketing-emails" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Enable notifications</Label>
            <Switch id="notifications" />
          </div>
          {/* Wrap the button in a div to avoid nesting issues */}
          <div>
            <Button type="submit" asChild>
              <span>Save Preferences</span> 
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
