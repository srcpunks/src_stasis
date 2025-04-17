import {
  Button,
  Card,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@srcpunks/src_ui";
import "./App.css";

function App() {
  return (
    <main className="size-full flex items-center justify-center">
      <Card
        title="deploy_smart_contract"
        description="Fill the following fields."
        footerPrimary={<Button>deploy_now</Button>}
        footerSecondary={<Button variant="outline">abort</Button>}
      >
        <form className="relative z-10">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </Card>
    </main>
  );
}

export default App;
