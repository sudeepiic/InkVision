<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icon } from "@iconify/vue";
const user = useSupabaseUser();
console.log(user);
useHead({
    title: "Home - InkVision",
});
const colorMode = useColorMode();
</script>

<template>
    <div class="flex min-h-screen w-full flex-col">
        <header
            class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
        >
            <nav
                class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
            >
                <NuxtLink
                    to="/"
                    class="text-2xl flex items-center gap-2 font-semibold"
                    >InkVision</NuxtLink
                >
            </nav>
            <Sheet>
                <SheetTrigger as-child>
                    <Button
                        variant="outline"
                        size="icon"
                        class="shrink-0 md:hidden"
                    >
                        <Menu class="h-5 w-5" />
                        <span class="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav class="grid gap-6 text-lg font-medium">
                        <a
                            href="#"
                            class="flex items-center gap-2 text-lg font-semibold"
                        >
                            <span>InkVision</span>
                        </a>
                        <NuxtLink to="/login">Manage</NuxtLink>
                    </nav>
                </SheetContent>
            </Sheet>
            <div
                class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
            >
                <form class="ml-auto flex-1 sm:flex-initial"></form>
                <NuxtLink to="/admin">Manage</NuxtLink>

                <Button
                    variant="ghost"
                    @click="
                        colorMode.preference == 'dark'
                            ? (colorMode.preference = 'light')
                            : (colorMode.preference = 'dark')
                    "
                >
                    <Icon
                        icon="radix-icons:moon"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        icon="radix-icons:sun"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
        <ClientOnly>
            <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card>
                        <CardHeader
                            class="flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                            <CardTitle class="text-m font-medium">
                                KNKY
                            </CardTitle>
                            <img
                                class="h-[30px] dark:invert"
                                src="https://client-test.knky.co/images/knky.svg"
                            />
                        </CardHeader>
                        <CardContent>
                            <div class="text-3xl font-bold">
                                Dashboard Review
                            </div>
                            <p class="text-lg mb-5 text-muted-foreground">
                                <ClientOnly>
                                    <Countdown
                                        deadlineISO="2026-05-13T08:39:49.108Z"
                                        mainFlipBackgroundColor="#000"
                                        secondFlipBackgroundColor="#000"
                                        :flipAnimation="false"
                                        :labelColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        :mainColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        secondFlipColor="#ffffff"
                                        @timeElapsed="
                                            (time: any) => {
                                                console.log(time);
                                            }
                                        "
                                    />
                                </ClientOnly>
                            </p>

                            <strong class="mt-3"
                                >Review meeting with the team in 2 days
                            </strong>
                            <Separator class="mt-2 mb-2" />
                            <strong className="mb-5"
                                >Review meeting with the client in 5 days
                            </strong>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader
                            class="flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                            <CardTitle class="text-m font-medium">
                                KNKY
                            </CardTitle>
                            <img
                                class="h-[30px] dark:invert"
                                src="https://client-test.knky.co/images/knky.svg"
                            />
                        </CardHeader>
                        <CardContent>
                            <div class="text-3xl font-bold">
                                Platform Review
                            </div>
                            <p class="text-s mb-5 text-muted-foreground">
                                <ClientOnly>
                                    <Countdown
                                        deadlineISO="2024-05-13T08:39:49.108Z"
                                        mainFlipBackgroundColor="#000"
                                        secondFlipBackgroundColor="#000"
                                        :flipAnimation="false"
                                        :labelColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        :mainColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        secondFlipColor="#ffffff"
                                        @timeElapsed="
                                            (time: any) => {
                                                console.log(time);
                                            }
                                        "
                                    />
                                </ClientOnly>
                            </p>

                            <strong class="mt-3"
                                >Review meeting with the team in 2 days
                            </strong>
                            <Separator class="mt-2 mb-2" />
                            <strong className="mb-5"
                                >Review meeting with the client in 5 days
                            </strong>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader
                            class="flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                            <CardTitle class="text-m font-medium">
                                KNKY
                            </CardTitle>
                            <img
                                class="h-[30px] dark:invert"
                                src="https://client-test.knky.co/images/knky.svg"
                            />
                        </CardHeader>
                        <CardContent>
                            <div class="text-3xl font-bold">
                                Dashboard Review
                            </div>
                            <p class="text-s mb-5 text-muted-foreground">
                                <ClientOnly>
                                    <Countdown
                                        deadlineISO="2024-05-13T08:39:49.108Z"
                                        mainFlipBackgroundColor="#000"
                                        secondFlipBackgroundColor="#000"
                                        :flipAnimation="false"
                                        :labelColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        :mainColor="
                                            colorMode.preference == 'light'
                                                ? 'black'
                                                : 'white'
                                        "
                                        secondFlipColor="#ffffff"
                                        @timeElapsed="
                                            (time: any) => {
                                                console.log(time);
                                            }
                                        "
                                    />
                                </ClientOnly>
                            </p>

                            <strong class="mt-3"
                                >Review meeting with the team in 2 days
                            </strong>
                            <Separator class="mt-2 mb-2" />
                            <strong className="mb-5"
                                >Review meeting with the client in 5 days
                            </strong>
                        </CardContent>
                    </Card>
                    p
                </div>
            </main>
        </ClientOnly>
    </div>
</template>
<style>
.flip-card__bottom {
    border-top: none !important;
}

.no-animation__card {
    font-size: 3.2rem !important;
}

/* @media screen and above 1200px wide --> */
@media (max-width: 1500px) {
    .no-animation__card {
        font-size: 2rem !important;
    }
}

@media (max-width: 1200px) {
    .no-animation__card {
        font-size: 1rem !important;
    }
}

@media (max-width: 800px) {
    .no-animation__card {
        font-size: 4rem !important;
    }
}
</style>
<!-- setup for countdown component -->
<script lang="ts">
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Countdown: defineAsyncComponent(async () => {
            const { Countdown } = await import("vue3-flip-countdown");
            return Countdown;
        }),
    },
};
</script>
