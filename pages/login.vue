<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const supabase = useSupabaseClient();
const route = useRoute();
const user = useSupabaseUser();
console.log(user);
useHead({
    title: "Login - InkVision",
});
const signIn = async () => {
    navigateTo("/admin");
    const { error } = await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
    });
    if (error) console.log(error);
};

const username = ref("sudeepzmr@gmail.com");
const password = ref("inkincaps12");
</script>

<template>
    <div
        class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"
    >
        <div class="flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">Login</h1>
                    <p class="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            v-model="username"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div class="grid gap-2">
                        <Input
                            v-model="password"
                            id="password"
                            type="password"
                            required
                        />
                    </div>
                    <Button @click="signIn" type="submit" class="w-full">
                        Login
                    </Button>
                </div>
            </div>
        </div>
        <div class="hidden bg-muted lg:block">
            <img
                src="assets/placeholder.png"
                alt="Image"
                class="w-full max-h-screen overflow-clip object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>
</template>
