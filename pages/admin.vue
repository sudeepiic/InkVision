<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, CircleUser, Home, LineChart, LogOutIcon, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ProjectDialog } from '~/components/ui/project-dialog'
import { ProjectsTable } from '~/components/ui/projects-table'
import { Logout } from '~/components/ui/logout'
useHead({
  title: 'Manage - InkVision',

})


const user = useSupabaseUser();
console.log(user)

const supabase = useSupabaseClient()
const { data } = await supabase
  .from('projects')
  .select()

console.log(data)
const projects = useState('counter', () => data)
console.log("state", projects)

</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">

          <NuxtLink to="/" class="flex items-center gap-2 font-semibold">InkVision</NuxtLink>

        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">


            <a href="#"
              class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <Package class="h-4 w-4" />
              Projects
            </a>

          </nav>
        </div>

      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">


              <a href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <Package class="h-5 w-5" />
                Projects
              </a>


            </nav>

          </SheetContent>
        </Sheet>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
            </div>
          </form>
        </div>
        <Logout />
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">
            Projects
          </h1>
        </div>

        <div v-if="projects && projects.length > 0">
          <ProjectsTable />
        </div>
        <div v-if="projects && projects.length == 0"
          class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          }

          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p class="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <ProjectDialog />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>