"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { router, usePage } from "@inertiajs/react"
import { ChevronsUpDownIcon, BadgeCheckIcon, LogOutIcon, Loader2Icon } from "lucide-react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { profileSchema } from "@/validations/profile-validation"
import type { ProfileForm } from "@/validations/profile-validation"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"

export function NavUser() {
  const { isMobile } = useSidebar();
  const { auth } = usePage().props;
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const { handleSubmit, control, setValue } = useForm({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (auth.user) {
      setValue('name', auth.user.name);
      setValue('email', auth.user.email);
      setValue('password', "");
      setValue('password_confirmation', "");
    }
  }, [auth, setValue]);

  async function onSubmit(data: ProfileForm) {
    setPending(true)
    router.put(`/profiles/${auth.user.id}`, data, {
      onError: (error) => {
        if (error.general) {
          toast.error('Profile update failed');
        }
      },
      onSuccess: () => {
        toast.success('Profile updated successfully');
      },
      onFinish: () => {
        setOpen(false);
        setPending(false);
      }
    })
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
              }
            >
              <Avatar>
                <AvatarFallback>{auth.user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{auth.user.name}</span>
                <span className="truncate text-xs">{auth.user.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar>
                      <AvatarFallback>{auth.user.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{auth.user.name}</span>
                      <span className="truncate text-xs">{auth.user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  <BadgeCheckIcon
                  />
                  Account
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.post("/logout")}>
                <LogOutIcon
                />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <Dialog open={open} onOpenChange={setOpen}>
        <form onSubmit={handleSubmit(data => onSubmit(data))} id="update-profile">
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">
                      Email
                    </FieldLabel>
                    <Input
                      id="name"
                      type="name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Arya Adhi Prasetyo"
                      autoComplete="off"
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">
                      Email
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="aryaadi229@gmail.com"
                      autoComplete="off"
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      placeholder="your new password"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                      />
                    )}
                    <FieldDescription>
                      Please leave that field blank if you don't want to update your password
                    </FieldDescription>
                  </Field>
                )}
              />
              <Controller
                name="password_confirmation"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">
                      Password confirmation
                    </FieldLabel>
                    <Input
                      id="password_confirmation"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      placeholder="your new password confirmation"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit" form="update-profile">{pending ? <Loader2Icon className="animate-spin" /> : "Save changes"}</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}
